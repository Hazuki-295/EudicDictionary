const cheerio = require('cheerio');
const fs = require('fs');
const minimist = require('minimist');
const sqlite3 = require('sqlite3').verbose();

// Parse command-line arguments
const argv = minimist(process.argv.slice(2));

// Command-line options:
// --debug      Enable debug mode
// --word       Specify testing word(s) for debug mode (default: ['take'])

const debugMode = argv.debug || false;
const testWords = [].concat(argv.word || 'take');

const BATCH_SIZE = 10000;

async function runDatabaseCommand(database, command, params = []) {
    return new Promise((resolve, reject) => {
        database.run(command, params, (error) => (error ? reject(error) : resolve()));
    });
}

async function queryDatabase(database, query, params = []) {
    return new Promise((resolve, reject) => {
        database.all(query, params, (error, rows) => (error ? reject(error) : resolve(rows)));
    });
}

async function insertIntoDatabase(insertStmt, entry, paraphrase) {
    return new Promise((resolve, reject) => {
        insertStmt.run(entry, paraphrase, (error) => (error ? reject(error) : resolve()));
    });
}

async function deleteEntriesByWords(database, words) {
    const placeholders = words.map(() => '?').join(',');
    const query = `
        DELETE FROM mdx 
        WHERE entry IN (${placeholders})
    `;
    await runDatabaseCommand(database, query, words);
}

async function getEntriesByWords(database, words) {
    const placeholders = words.map(() => '?').join(',');
    const query = `
        SELECT rowid, entry, paraphrase 
        FROM mdx 
        WHERE entry IN (${placeholders})
    `;
    const rows = await queryDatabase(database, query, words);
    if (!rows.length) {
        throw new Error(`Entries not found for words: ${words.join(', ')}`);
    }
    return rows;
}

async function processEntries(entries, insertStmt = null) {
    // Process HTML content concurrently
    const processedEntries = await Promise.all(entries.map(async (row) => {
        const { entry, paraphrase } = row;
        const isLink = paraphrase.startsWith('@@@LINK=');
        const content = isLink ? paraphrase : processHTML(paraphrase);
        return { entry, content, rowid: row.rowid, isLink };
    }));

    // Insert entries sequentially to maintain order
    for (const { entry, content, rowid, isLink } of processedEntries) {
        if (debugMode) {
            const outputFileName = `${entry}_${rowid} (${isLink ? 'link' : 'processed'}).html`;
            fs.writeFileSync(outputFileName, content, 'utf8');
            console.log(`Entry '${entry}' processed and saved to ${outputFileName}`);
        } else {
            await insertIntoDatabase(insertStmt, entry, content);
        }
    }
}

(async () => {
    try {
        const sourceDatabase = new sqlite3.Database('oaldpe.db', sqlite3.OPEN_READONLY);

        if (debugMode) {
            // Debug mode: process specified test words
            const entries = await getEntriesByWords(sourceDatabase, testWords);
            await processEntries(entries);
        } else {
            // Normal mode: process all entries in two passes
            const totalEntries = (await queryDatabase(sourceDatabase, `
                SELECT COUNT(*) as count 
                FROM mdx
            `))[0].count;
            console.log(`Total entries in the database: ${totalEntries}`);

            const targetDatabase = new sqlite3.Database('oaldpe_cleaned.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);
            await runDatabaseCommand(targetDatabase, 'DROP TABLE IF EXISTS mdx');
            await runDatabaseCommand(targetDatabase, 'CREATE TABLE mdx (entry TEXT, paraphrase TEXT)');

            const insertStmt = targetDatabase.prepare(`INSERT INTO mdx (entry, paraphrase) VALUES (?, ?)`);

            // Phase 1: Process 'HTML' entries in batches
            console.log('Processing HTML entries in batches...');
            const totalHtmlEntries = (await queryDatabase(sourceDatabase, `
                SELECT COUNT(*) as count 
                FROM mdx 
                WHERE NOT paraphrase LIKE '@@@LINK=%'
            `))[0].count;
            console.log(`Total HTML entries to process: ${totalHtmlEntries}`);

            for (let offset = 0; offset < totalHtmlEntries; offset += BATCH_SIZE) {
                console.log(`Processing HTML entries batch: ${offset + 1} to ${Math.min(offset + BATCH_SIZE, totalHtmlEntries)}`);

                const htmlBatch = await queryDatabase(sourceDatabase, `
                    SELECT rowid, entry, paraphrase 
                    FROM mdx 
                    WHERE NOT paraphrase LIKE '@@@LINK=%'
                    ORDER BY rowid 
                    LIMIT ? OFFSET ?
                `, [BATCH_SIZE, offset]);

                await runDatabaseCommand(targetDatabase, 'BEGIN TRANSACTION');
                await processEntries(htmlBatch, insertStmt);
                await runDatabaseCommand(targetDatabase, 'COMMIT');
            }
            console.log('HTML entries processed.');

            // Phase 2: Process all 'link' entries in a single step
            console.log('Processing link entries...');
            const linkEntries = await queryDatabase(sourceDatabase, `
                SELECT rowid, entry, paraphrase 
                FROM mdx 
                WHERE paraphrase LIKE '@@@LINK=%'
                ORDER BY rowid
            `);

            await runDatabaseCommand(targetDatabase, 'BEGIN TRANSACTION');
            await processEntries(linkEntries, insertStmt);
            await runDatabaseCommand(targetDatabase, 'COMMIT');
            console.log('Link entries processed.');

            // Additional cleanup and insertion steps
            await deleteEntriesByWords(targetDatabase, ['oaldconfig', 'oaldcfg']);

            const configContent = fs.readFileSync('./config.min.html', 'utf8');
            await insertIntoDatabase(insertStmt, 'oaldpeconfig', configContent);

            const linkEntriesConfig = ['oaldpecfg', 'oaldpehelp', 'oaldconfig', 'oaldcfg', 'oaldhelp'];
            for (const entry of linkEntriesConfig) {
                await insertIntoDatabase(insertStmt, entry, '@@@LINK=oaldpeconfig');
            }

            insertStmt.finalize();
            targetDatabase.close();
        }

        sourceDatabase.close();
        console.log('Processing completed.');
    } catch (error) {
        console.error('Error:', error.message);
    }
})();

// Function to process HTML content using Cheerio
function processHTML(htmlContent) {
    const $ = cheerio.load(htmlContent);

    cleanUpHTML($);
    setupEntryHeader($);
    setupSense($);
    setupPhraseSections($);
    setupImage($);

    return $.html();
}

function cleanUpHTML($) {
    // Wrap all content in a container element
    const $container = $('<oaldpe>').addClass('oaldpe');
    $('body').contents().appendTo($container);
    $('body').append($container);

    // Clean up styles and scripts
    $('link[href*="oald.css"], script[src*="oald.js"]').remove();
    $('head').append($('<link rel="stylesheet" href="oaldpe.css">'));
    $('body').append(
        $('<script src="oaldpe-jquery.js"></script>'),
        $('<script src="oaldpe.js"></script>')
    );

    // Remove root class to prevent conflicts
    const $rootElements = $('.leon-oald');
    $rootElements.removeClass('leon-oald').addClass('oald-entry-root');

    // Create a pseudo-footer section to hold elements that might be altered
    const $pseudoFooter = $('<div>').addClass('pseudo-footer').css('display', 'none').appendTo($container);

    const resourcePlaceholders = [
        { tag: 'a', class: 'entry-link-placeholder', attributes: { href: 'entry://placeholder' } }
    ];

    resourcePlaceholders.forEach(resource => {
        const $resourceElement = $(`<${resource.tag}>`).addClass(resource.class).attr(resource.attributes);
        $pseudoFooter.append($resourceElement);
    });
}

function setupEntryHeader($) {
    const $oaldpe = $('.oaldpe');
    const $entryContainers = $oaldpe.find('.oald-entry-root').filter('.oald');
    const $entryHeaders = $entryContainers.children('.entry').children('.top-container').find('.webtop');

    // Move Oxford 3000 or 5000 symbol to the front
    $entryHeaders.each(function () {
        const $entryHeader = $(this);
        const $symbols = $entryHeader.children('.symbols');
        const $ox3k_ox5k = $symbols.children('a[href*="oxford3000-5000"]');

        if ($ox3k_ox5k.length) {
            const $container = $('<div>').addClass('symbols');
            $container.append($ox3k_ox5k).prependTo($entryHeader);

            if (!$symbols.children().length) {
                $symbols.remove();
            }
        }
    });

    // Remove redundant syllable information
    $entryHeaders.each(function () {
        const $headword = $(this).children('.headword');
        const syllable = $headword.attr('syllable');
        if (syllable) {
            const headword = syllable.replace(/·/g, '');
            $headword.attr('headword', headword);
            $headword.html($headword.html().replace(syllable, headword));
        }
    });

    // Setup navigation for multiple entries
    $entryContainers.first().addClass('visible');

    if ($entryContainers.length > 1) {
        const $navbar = $('<div>').addClass('oaldpe-nav').prependTo($oaldpe);

        $entryHeaders.each(function () {
            const $entryHeader = $(this);
            const $pos = $entryHeader.children('.pos');
            const $headword = $entryHeader.children('.headword');
            $('<span>').text($pos.text() || $headword.attr('headword') || $headword.text()).appendTo($navbar);
        });
        $navbar.children('span').first().addClass('active');

        $('<span>').text('All').appendTo($navbar);
    }
}

function setupSense($) {
    $('li.sense').each(function () {
        const $sense = $(this);
        const $iteration = $('<span>').addClass('iteration').prependTo($sense);

        $sense.attr('sensenum')
            ? $iteration.text($sense.attr('sensenum'))
            : $iteration.addClass("single").text('❑');
    });
}

function setupPhraseSections($) {
    $('.idioms, .phrasal_verb_links').each(function () {
        const $section = $(this);
        const $heading = $section.is('.idioms') ? $section.children('.idioms_heading') : $section.children('.unbox');
        const $jumpLink = $section.closest('.entry').find(`.jumplink[name="${$heading.text()}"]`).parent('a.Ref');

        $jumpLink.attr('id', `${$jumpLink.children('.jumplink').attr('href')}_jumplink`);
        $('<a>').addClass('jumplink_back').attr('href', `#${$jumpLink.attr('id')}`).appendTo($heading);
    });
}

function setupImage($) {
    $('div[id="ox-enlarge"]').each(function () {
        const $imgContainer = $(this);

        $imgContainer.find('.fullsize, .thumb').each(function () {
            const $img = $(this);
            $img.attr('data-src', $img.attr('src'));
        });

        $imgContainer.find('.ox-enlarge-label').empty();
    });
}

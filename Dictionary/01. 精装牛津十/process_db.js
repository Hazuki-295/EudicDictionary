const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const minimist = require('minimist');
const cheerio = require('cheerio');

// Parse command-line arguments
const argv = minimist(process.argv.slice(2));

// Command-line options:
// --debug      Enable debug mode
// --word       Specify testing word(s) for debug mode (default: ['take'])

const debugMode = argv.debug || false;
const testWords = [].concat(argv.word || 'take');

const BATCH_SIZE = 100000;

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
    const query = `DELETE FROM mdx WHERE entry IN (${placeholders})`;
    await runDatabaseCommand(database, query, words);
}

async function getEntriesByWords(database, words) {
    const placeholders = words.map(() => '?').join(',');
    const query = `SELECT rowid, entry, paraphrase FROM mdx WHERE entry IN (${placeholders})`;
    const rows = await queryDatabase(database, query, words);
    if (!rows.length) {
        throw new Error(`Entries not found for words: ${words.join(', ')}`);
    }
    return rows;
}

async function getTotalEntries(database) {
    const row = await queryDatabase(database, `SELECT COUNT(*) as count FROM mdx`);
    return row[0].count;
}

async function getEntriesBatch(database, offset, limit) {
    const query = `SELECT rowid, entry, paraphrase FROM mdx ORDER BY rowid LIMIT ? OFFSET ?`;
    return await queryDatabase(database, query, [limit, offset]);
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
            // Normal mode: process all entries in batches
            const totalEntries = await getTotalEntries(sourceDatabase);
            console.log(`Total entries to process: ${totalEntries}`);

            const targetDatabase = new sqlite3.Database('oaldpe_cleaned.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);
            await runDatabaseCommand(targetDatabase, 'DROP TABLE IF EXISTS mdx');
            await runDatabaseCommand(targetDatabase, 'CREATE TABLE mdx (entry TEXT, paraphrase TEXT)');

            const insertStmt = targetDatabase.prepare(`INSERT INTO mdx (entry, paraphrase) VALUES (?, ?)`);

            for (let offset = 0; offset < totalEntries; offset += BATCH_SIZE) {
                const entries = await getEntriesBatch(sourceDatabase, offset, BATCH_SIZE);
                console.log(`Processing entries ${offset + 1} to ${offset + entries.length}`);

                await runDatabaseCommand(targetDatabase, 'BEGIN TRANSACTION');
                await processEntries(entries, insertStmt);
                await runDatabaseCommand(targetDatabase, 'COMMIT');
            }

            // Delete specific entries
            await deleteEntriesByWords(targetDatabase, ['oaldconfig', 'oaldcfg']);

            // Insert 'oaldpeconfig' entry
            const configContent = fs.readFileSync('./config.min.html', 'utf8');
            await insertIntoDatabase(insertStmt, 'oaldpeconfig', configContent);

            // Insert link entries that point to 'oaldpeconfig'
            const linkEntries = ['oaldpecfg', 'oaldcfg', 'opcfg', 'oaldconfig', 'opconfig', 'opc'];
            for (const entry of linkEntries) {
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
    // Add a container element
    const $container = $('<oaldpe>').addClass('oaldpe');
    $container.append($('body').contents()).appendTo('body');

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
}

function setupEntryHeader($) {
    $('.entry > .top-container .webtop').each(function () {
        const $webtop = $(this);
        const $symbols = $webtop.children('.symbols');
        const $ox3k_ox5k = $symbols.children('a[href*="oxford3000-5000"]');

        if ($ox3k_ox5k.length) {
            const $container = $('<div>').addClass('symbols');
            $container.append($ox3k_ox5k).prependTo($webtop);

            if (!$symbols.children().length) {
                $symbols.remove();
            }
        }

        const $headword = $webtop.children('.headword');
        const syllable = $headword.attr('syllable');
        if (syllable) {
            const headword = syllable.replace(/·/g, '');
            $headword.attr('headword', headword);
            $headword.html($headword.html().replace(syllable, headword));
        }
    });
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

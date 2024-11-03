const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const async = require('async');
const minimist = require('minimist');
const cheerio = require('cheerio');

// Parse command-line arguments
const argv = minimist(process.argv.slice(2));

// Command-line options:
// --debug      Enable debug mode
// --word       Specify testing word(s) for debug mode (default: 'prelude')

const debugMode = argv.debug || false;
const testWords = argv.word
    ? Array.isArray(argv.word)
        ? argv.word
        : [argv.word]
    : ['prelude'];

// Concurrency settings
const CONCURRENCY = 100;
const BATCH_SIZE = 10000;

(async () => {
    try {
        const db = new sqlite3.Database('ODE_2024.db', sqlite3.OPEN_READONLY);

        if (debugMode) {
            // Debug mode: process specified test words
            const entries = await getEntriesByWords(db, testWords);
            db.close();
            await processEntries(entries);
        } else {
            // Normal mode: process all entries in batches
            const totalEntries = await getTotalEntries(db);
            console.log(`Total entries to process: ${totalEntries}`);

            const dbNew = new sqlite3.Database('ODE_2024_cleaned.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);

            await runDbCommand(dbNew, `CREATE TABLE IF NOT EXISTS mdx (entry TEXT, paraphrase TEXT)`);

            const insertStmt = dbNew.prepare(`INSERT INTO mdx (entry, paraphrase) VALUES (?, ?)`);

            for (let offset = 0; offset < totalEntries; offset += BATCH_SIZE) {
                const entries = await getEntriesBatch(db, offset, BATCH_SIZE);
                console.log(`Processing entries ${offset + 1} to ${offset + entries.length}`);

                await runDbCommand(dbNew, 'BEGIN TRANSACTION');
                await processEntries(entries, insertStmt);
                await runDbCommand(dbNew, 'COMMIT');
            }

            insertStmt.finalize();
            db.close();
            dbNew.close();
            console.log('Processing completed.');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
})();

// Function to get entries by specified words
function getEntriesByWords(db, words) {
    const placeholders = words.map(() => '?').join(',');
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT rowid, entry, paraphrase FROM mdx WHERE entry IN (${placeholders})`,
            words,
            (err, rows) => (err ? reject(err) : rows.length > 0 ? resolve(rows) : reject(new Error(`Entries not found for words: ${words.join(', ')}`)))
        );
    });
}

// Function to get the total number of entries
function getTotalEntries(db) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT COUNT(*) as count FROM mdx`, [], (err, row) => (err ? reject(err) : resolve(row.count)));
    });
}

// Function to get a batch of entries
function getEntriesBatch(db, offset, limit) {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT rowid, entry, paraphrase FROM mdx LIMIT ? OFFSET ?`,
            [limit, offset],
            (err, rows) => (err ? reject(err) : resolve(rows))
        );
    });
}

// Function to execute a database command
function runDbCommand(db, command) {
    return new Promise((resolve, reject) => {
        db.run(command, (err) => (err ? reject(err) : resolve()));
    });
}

// Function to process entries
function processEntries(entries, insertStmt = null) {
    return new Promise((resolve, reject) => {
        async.eachLimit(
            entries,
            CONCURRENCY,
            async (row) => {
                const { entry, paraphrase } = row;

                if (paraphrase.startsWith('@@@LINK=')) {
                    // Entry Type 2: Copy as is
                    if (debugMode) {
                        console.log(`Entry '${entry}' is a Type 2 entry. Skipping processing.`);
                    } else {
                        await insertIntoDb(insertStmt, entry, paraphrase);
                    }
                } else {
                    // Entry Type 1: Process the HTML
                    const processedParaphrase = processHTML(paraphrase);

                    if (debugMode) {
                        fs.writeFileSync(`${entry}_processed.html`, processedParaphrase, 'utf8');
                        console.log(`Processed HTML saved to ${entry}_processed.html`);
                    } else {
                        await insertIntoDb(insertStmt, entry, processedParaphrase);
                    }
                }
            },
            (err) => (err ? reject(err) : resolve())
        );
    });
}

// Function to insert data into the new database
function insertIntoDb(insertStmt, entry, paraphrase) {
    return new Promise((resolve, reject) => {
        insertStmt.run(entry, paraphrase, (err) => (err ? reject(err) : resolve()));
    });
}

// Function to process HTML content using Cheerio
function processHTML(htmlContent) {
    const $ = cheerio.load(htmlContent);

    cleanUpHTML($);
    reorderNavigation($);
    setupPron($);
    setupEntryHeader($);
    setupRefURL($);

    return $.html();
}

function cleanUpHTML($) {
    // Add a container element
    const $container = $('<ode-2024></ode-2024>').addClass('ode-2024');
    $container.appendTo('body');

    // Clean up styles and scripts
    $('link[rel="stylesheet"], script').remove();
    $('head').append($('<link rel="stylesheet" href="ODE_2024.css">'));
    $('body').append(
        $('<script src="ODE_2024_jquery.js"></script>'),
        $('<script src="ODE_2024.js"></script>')
    );

    // Remove horizontal rule
    $('body > hr').remove();

    // Refine the navigation
    const $navigation = $('.javascript_tittle_box');
    $navigation.attr('class', 'navigation');
    $container.append($navigation);

    // Refine the entry content
    const $entry = $('.main_content_main');
    $entry.attr('class', 'entryContainer');
    $container.append($entry);
}

function reorderNavigation($) {
    const $navigation = $('.navigation');
    const $entry = $('.entryContainer');

    const items = [
        { original: 'ENG(UK)', display: 'British English' },
        { original: 'SYN(UK)', display: 'British English Thesaurus' },
        { original: 'ENG(US)', display: 'American English' },
        { original: 'SYN(US)', display: 'American English Thesaurus' },
        { original: 'EC(英中)', display: 'English-Chinese' },
        { original: 'CE(中英)', display: 'Chinese-English' },
    ];

    const navigationMapping = {};
    const contentMapping = {};

    $navigation.children('.each_tittle_smgs').each((index, element) => {
        const $element = $(element);
        navigationMapping[$element.text()] = $element;
        contentMapping[$element.text()] = $entry.children('.dict_content_display').eq(index);
    });

    let reorderedNav = [];
    let reorderedContent = [];

    items.forEach((item, newIndex) => {
        const $navItem = navigationMapping[item.original];
        const $contentBlock = contentMapping[item.original];

        if ($navItem && $contentBlock) {
            reorderedNav.push(
                $('<span></span>')
                    .addClass('navigationItem')
                    .attr('data-index', newIndex)
                    .attr('data-target', item.original)
                    .text(item.display)
            );

            $contentBlock
                .attr('class', 'entryContent')
                .attr('data-index', newIndex)
                .attr('data-dictname', item.original)
                .removeAttr('style')
                .children('.img_LOGO').remove();

            reorderedContent.push($contentBlock);
        }
    });

    $navigation.empty().append(reorderedNav);
    $entry.empty().append(reorderedContent);
}

function setupPron($) {
    $('.entryContent[data-dictname="EC(英中)"]').find('.prx, .pr').each(function () {
        const $ancestor = $(this);
        const $links = $ancestor.find('a[href="href="]');
        $links.each(function () {
            const $a = $(this);
            $ancestor.html($ancestor.html().replace($a.prop('outerHTML'), $a.text()));
        });
    });

    $('.headpron, .infpron, .prx, .pr').each(function () {
        $(this).find('*').addBack().contents().filter(function () {
            return this.nodeType === 3; // Text nodes
        }).each(function () {
            $(this).replaceWith(this.nodeValue.replace(/\/([^\/]+)\//g, '<span class="pron">| $1 |</span>'));
        });
    });

    $('span.fayin').each(function () {
        const $this = $(this);
        const onlineHref = $this.next('a').remove().attr('onclick').match(/'(.*?)'/)[1];
        const offlineHref = $this.prev('a').remove().attr('href');

        const $newAnchor = $('<a></a>')
            .addClass('sound')
            .attr('data-href', onlineHref)
            .attr('href', offlineHref);

        $this.replaceWith($newAnchor);
    });

    $('.pron').each(function () {
        const $pron = $(this);
        const $label = $pron.prev('.infpronLbl');
        const $audio = $pron.next('a.sound');
        const $container = $('<span class="phonetics"></span>');

        $label.remove();
        $container.append($pron.clone()).append($audio);
        $pron.replaceWith($container);
    });
}

function setupEntryHeader($) {
    $('.entryHeader').each(function () {
        const $entryHeader = $(this);
        const $pageTitle = $entryHeader.children('.pageTitle');
        const $realTitle = $('<span class="realTitle"></span>').append($pageTitle.contents()).appendTo($pageTitle); // Put original content in a span

        const dictname = $entryHeader.closest('.entryContent').data('dictname');
        if (dictname === 'ENG(UK)' || dictname === 'ENG(US)') {
            const $headpron = $entryHeader.children('.headpron').appendTo($pageTitle);
            const $speaker = $realTitle.children('a.sound'); // weird speaker
            $headpron.children('.phonetics').append($speaker);
        } else if (dictname === 'EC(英中)' || dictname === 'CE(中英)') {
            $realTitle.prepend($realTitle.children('em').remove().contents()); // Inside the realTitle, replace <em> with its content
        }
    });
}

function setupRefURL($) {
    $('.entryContent[data-dictname="SYN(US)"] citiao').each(function () {
        const $this = $(this);
        const updatedText = $this.text().replace('english-thesaurus', 'american_english-thesaurus');
        $this.text(updatedText);
    });

    $('.entryContent citiao').each(function () {
        const $this = $(this);
        const link = $this.text();

        const $newUrl = $('<url></url>').attr('href', link);
        $this.replaceWith($newUrl);
    });

    /* view synonyms */
    $('.moreInformation .entrySynList a.entrySynMore').each(function () {
        const $synMore = $(this);
        const dictname = $synMore.closest(".entryContent").data("dictname");

        const targetId = $synMore.attr('href').split('#')[1];
        const targetDictname = dictname === "ENG(UK)" ? "SYN(UK)" : "SYN(US)";

        $synMore.attr("data-target-id", targetId);
        $synMore.attr("data-target-dictname", targetDictname);

        const $targetDict = $(`.entryContent[data-dictname="${targetDictname}"]`);
        const $target = $targetDict.find(`#${targetId}`);
        $target.attr("data-id", targetId);
    });
}

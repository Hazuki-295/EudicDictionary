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
        if (!content) continue;

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
        const sourceDatabase = new sqlite3.Database('ODE_2024.db', sqlite3.OPEN_READONLY);

        if (debugMode) {
            // Debug mode: process specified test words
            const entries = await getEntriesByWords(sourceDatabase, testWords);
            await processEntries(entries);
        } else {
            // Normal mode: process all entries in batches
            const totalEntries = await getTotalEntries(sourceDatabase);
            console.log(`Total entries to process: ${totalEntries}`);

            const targetDatabase = new sqlite3.Database('ODE_2024_cleaned.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);
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
    reorderNavigation($);

    // Filter out chinese dictionaries
    const $navigationItem = $('.navigationItem');
    const $entryContent = $('.entryContent');

    $navigationItem.filter('[data-target="EC(英中)"], [data-target="CE(中英)"]').remove();
    $entryContent.filter('[data-dictname="EC(英中)"], [data-dictname="CE(中英)"]').remove();

    if (!$('.entryContent').length) return null;

    setupPron($);
    setupEntryHeader($);
    setupSense($);
    setupSubsense($);
    setupPhraseSections($);
    setupOtherSections($);
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
}

function reorderNavigation($) {
    const $ode = $('.ode-2024');
    const $navigation = $('.javascript_tittle_box').attr('class', 'navigation');
    const $entryContainer = $('.main_content_main').attr('class', 'entryContainer');

    $ode.append($navigation).append($entryContainer);

    const reorderedDicts = [
        { dictname: 'ENG(UK)', description: 'British English' },
        { dictname: 'SYN(UK)', description: 'British English Thesaurus' },
        { dictname: 'ENG(US)', description: 'American English' },
        { dictname: 'SYN(US)', description: 'American English Thesaurus' },
        { dictname: 'EC(英中)', description: 'English-Chinese' },
        { dictname: 'CE(中英)', description: 'Chinese-English' },
    ];

    const navigationMapping = {};
    const contentMapping = {};

    $navigation.children('.each_tittle_smgs').each((index, element) => {
        const $element = $(element);
        navigationMapping[$element.text()] = $element;
        contentMapping[$element.text()] = $entryContainer.children('.dict_content_display').eq(index);
    });

    const reorderedNav = [];
    const reorderedContent = [];

    reorderedDicts.forEach((dict, index) => {
        const $navItem = navigationMapping[dict.dictname];
        const $content = contentMapping[dict.dictname];

        if ($navItem && $content) {
            reorderedNav.push(
                $('<span></span>').attr({
                    class: 'navigationItem',
                    'data-index': index,
                    'data-target': dict.dictname
                }).text(dict.description)
            );

            $content.attr({
                class: 'entryContent',
                'data-index': index,
                'data-dictname': dict.dictname
            }).removeAttr('style').children('.img_LOGO').remove();

            reorderedContent.push($content);
        }
    });

    $navigation.empty().append(reorderedNav);
    $entryContainer.empty().append(reorderedContent);
}

function setupPron($) {
    const $engDicts = $('.entryContent[data-dictname^="ENG"]');

    // Change pronunciations to a more readable format (macOS Dictionary)
    $engDicts.find('.headpron, .infpron').each(function () {
        $(this).find('*').addBack().contents().filter((_, node) => node.nodeType === 3).each(function () { // Text nodes
            $(this).replaceWith(this.nodeValue.replace(/\/([^\/]+)\//g, '<span class="phon">| $1 |</span>'));
        });
    });

    // Combine online and offline speakers into a single one
    $engDicts.find('span.fayin').each(function () {
        const $this = $(this);
        const $offlineSpeaker = $this.prev('a').remove();
        const $onlineSpeaker = $this.next('a').remove();

        const onlineWordPronUrl = $onlineSpeaker.attr('onclick').match(/'(.*?)'/)[1]
            .replace('/uk_pron_ogg/', '/uk_pron/')
            .replace('/us_pron_ogg/', '/us_pron/')
            .replace('.ogg', '.mp3');

        const $newAnchor = $('<a></a>')
            .attr({ class: 'audio_play_button' })
            .attr('href', $offlineSpeaker.attr('href'))
            .attr('data-href', onlineWordPronUrl);

        $this.replaceWith($newAnchor);
    });

    // Wrap the pronunciation and its speaker in a container
    $engDicts.find('.phon').each(function () {
        const $phon = $(this);
        const $audio = $phon.next('.audio_play_button');
        const $container = $('<span class="phonetics"></span>');

        $phon.prev('.infpronLbl').remove(); /* Pronunciation: */
        $phon.replaceWith($container);
        $container.append($phon).append($audio);
    });

    // Adjust the position of the speaker that is in the title
    $engDicts.find('.entryHeader').each(function () {
        const $entryHeader = $(this);
        const $pageTitle = $entryHeader.children('.pageTitle');
        const $headpron = $entryHeader.children('.headpron');

        const $speaker = $pageTitle.children('.audio_play_button');
        $headpron.children('.phonetics').append($speaker);
    });
}

function setupEntryHeader($) {
    const $entryContent = $('.entryContent');

    $entryContent.find('.entryHeader').each(function () {
        const $entryHeader = $(this);

        // Wrap the original title in a container
        const $pageTitle = $entryHeader.children('.pageTitle');
        const $realTitle = $('<span class="realTitle"></span>');
        $realTitle.append($pageTitle.contents()).appendTo($pageTitle);

        // Move the pronunciation to the title
        const $headpron = $entryHeader.children('.headpron');
        $headpron.appendTo($pageTitle);

        // Create a new container for the logo
        const $logoarea = $('<div class="logoarea"></div>');
        $logoarea.prependTo($entryHeader);
    });
}

function setupSense($) {
    const $entryContent = $('.entryContent');

    // Add iteration mark to senses without one
    $entryContent.find('.msDict.sense').each(function () {
        const $senseInnerWrapper = $(this).children('.senseInnerWrapper');
        if (!$senseInnerWrapper.children('.iteration').length) {
            const $iteration = $('<span></span>').addClass('iteration').addClass('single').text('❑');
            const $a = $senseInnerWrapper.children().first();
            $iteration.insertAfter($a);
        }
    });
}

function setupSubsense($) {
    const $entryContent = $('.entryContent');

    $entryContent.find('.msDict.subsense').parent().each(function () {
        const $subsense = $(this).children('.subsense');
        $subsense.first().addClass('subsenseFirst');
        $subsense.last().addClass('subsenseLast');
    });
}

function setupPhraseSections($) {
    const $entryContent = $('.entryContent');

    $entryContent.find('.entryPageContent').each(function () {
        const $entryPageContent = $(this);
        const $phraseSections = $entryPageContent.children('section.phrases, section.phrasalVerbs');

        if (!$phraseSections.length) return;
        $entryPageContent.append($phraseSections); // Move phrase sections to the end

        const $entryHeader = $entryPageContent.children('header.entryHeader');
        const $jumplinks = $('<div></div>').addClass('jumplinks').appendTo($entryHeader);

        $phraseSections.each(function () {
            const $section = $(this);
            const $heading = $section.children('h2');

            const $jumpLink = $('<span></span>').attr({
                class: 'jumplink',
                'data-title': $heading.text()
            }).text($heading.text());

            $jumplinks.append($jumpLink);
        });
    });
}

function setupOtherSections($) {
    $('section.subEntryBlock, section.etymology').each(function () {
        const $section = $(this);
        const $heading = $section.find('h2');

        $section.attr('data-title', $heading.text());
        if ($section.data('title').startsWith('Words that rhyme with')) {
            const $contentToWrap = $section.children('.senseInnerWrapper').contents().not($heading);
            $contentToWrap.wrapAll('<p class="rhyme-words"></p>');
        }
    });
}

function setupRefURL($) {
    // Correct the URL for american english thesaurus
    $('.entryContent[data-dictname="SYN(US)"] citiao').each(function () {
        const $this = $(this);
        $this.text($this.text().replace('english-thesaurus', 'american_english-thesaurus'));
    });

    // Replace with a url tag
    $('.entryContent citiao').each(function () {
        const $this = $(this);
        const $newUrl = $('<url></url>').attr('href', $this.text());
        $this.replaceWith($newUrl);
    });

    /* view synonyms */
    $('.moreInformation .entrySynList a.entrySynMore').each(function () {
        const $synMore = $(this);
        const targetId = $synMore.attr('href').substring($synMore.attr('href').indexOf('#'));
        const targetDictname = $synMore.closest('.entryContent').data('dictname') === 'ENG(UK)' ? 'SYN(UK)' : 'SYN(US)';

        $synMore.attr('data-target-id', targetId);
        $synMore.attr('data-target-dictname', targetDictname);

        const $targetDict = $(`.entryContent[data-dictname="${targetDictname}"]`);
        const $target = $targetDict.find(targetId).attr('data-id', targetId);

        const $synMoreContainer = $synMore.parent('div');
        $synMoreContainer.addClass('synMoreContainer');

        if (!$target.length) {
            $synMoreContainer.remove();
        } else {
            const $newContainer = $synMoreContainer.prev('div');
            $newContainer.addClass('containSynMore');
            $newContainer.append($synMoreContainer);
        }
    });
}

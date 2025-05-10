import * as cheerio from 'cheerio';

export default function transformHtml(html) {
    const $ = cheerio.load(html);

    cleanUpHTML($);
    setupEntryHeader($);
    setupSense($);
    setupPhraseSections($);
    setupImage($);
    setupReverseLookup($);

    return $.html();
}

function cleanUpHTML($) {
    // Wrap all content in a container element
    const $container = $('<oaldpe>').addClass('oaldpe');
    $('body').contents().appendTo($container);
    $('body').append($container);

    // Clean up styles and scripts
    $('link[href*="oald.css"], link[href*="oaldzh.css"], script[src*="oald.js"]').remove();
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

function setupReverseLookup($) {
    $('.leon-zh-en.examples .en-link').each(function () {
        const $example = $(this);
        const $link = $example.children('a');

        $example.prepend($link.text());
        $link.text($link.attr('title'));
        $link.removeAttr('title');
    });
}

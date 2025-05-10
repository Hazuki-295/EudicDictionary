import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import markdownit from 'markdown-it';
import '../css/notes.styl';

const $ = require('jquery');

(function constructNotes() {
    const $noteContainer = $('.Hazuki-note');

    if (typeof noteDataArray === 'undefined') {
        console.error(`'noteDataArray' is not defined`);
        return;
    }

    if (noteDataArray.length === 1) {
        $noteContainer.addClass('single-note-mode');
    }

    // Construct Swiper
    const $swiper = $('<div>', { class: 'swiper' })
        .append($('<div>', { class: 'swiper-wrapper' }))
        .append($('<div>', { class: 'swiper-pagination' }))
        .append($('<div>', { class: 'swiper-button-prev' }))
        .append($('<div>', { class: 'swiper-button-next' }))
        .appendTo($noteContainer);

    const swiper = new Swiper($swiper[0], {
        direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        autoHeight: true,
        touchStartPreventDefault: false
    });

    // Markdown-it plugins
    const md = markdownit({ html: true, breaks: true })
        .use(require('markdown-it-attrs'))
        .use(require('markdown-it-bracketed-spans'))
        .use(require('markdown-it-ins'))
        .use(require('markdown-it-mark'))
        .use(require('markdown-it-obsidian-callouts'))
        .use(require('markdown-it-multimd-table'), { multiline: true, rowspan: true, headerless: true })
        .use(require('markdown-it-toc-and-anchor').default, { tocClassName: 'toc', anchorClassName: 'anchor' });

    function replaceWithRenderedSpans(text) {
        // Function to decode the placeholders back to their original special characters
        function decodeSpecialCharsFromContent(content) {
            return content
                .replace(/{OPEN_BRACKET}/g, '[')
                .replace(/{CLOSE_BRACKET}/g, ']')
                .replace(/{NBSP}/g, '&nbsp;');
        }

        // Regular expression to match the custom Markdown format: [content]{attributes}
        const spanPattern = /\[([^\[\]]*)]\{([^\}]+)\}/g;

        let previousText;

        do {
            previousText = text;
            text = text.replace(spanPattern, (match) => md.renderInline(match));
        } while (text !== previousText);

        return decodeSpecialCharsFromContent(text);
    }

    // Append items to Swiper
    noteDataArray.forEach(noteData => {
        const swiperSlide = $('<div>', { class: 'swiper-slide' });
        swiperSlide.append(constructSingleNote(noteData));
        swiper.appendSlide(swiperSlide);
    });

    function copyToClipboard(text) {
        const $temp = $('<textarea>').val(text).appendTo('body').select();
        document.execCommand('copy');
        $temp.remove();
    }

    function addClickEventToCopyText($element, textToCopy) {
        $element.css('cursor', 'pointer').on('click', () => {
            copyToClipboard(textToCopy);
            $element.css('cursor', 'default');
            setTimeout(() => { $element.css('cursor', 'pointer'); }, 2000);
        });
    }

    function constructSingleNote(noteData) {
        const $container = $('<div>', { class: 'single-note' });
        let { source, originalText, wordPhrase, notes, tags } = noteData;

        const createNoteBlock = (labelText, labelClass, iconClass, content) => {
            const $block = $('<div>', {
                class: 'note-block',
                'data-label': labelText
            }).appendTo($container);

            const $label = $('<span>', {
                class: `label ${labelClass}`,
                text: labelText
            }).prepend($('<i>', { class: `ic ${iconClass}` })).appendTo($block);

            addClickEventToCopyText($label, content);

            return $block;
        };

        /* 笔记来源 source */
        const $sourceBlock = createNoteBlock('source', 'info', 'i-home', source);

        const sourceParts = source.split('>').map(part => `<span>${part.trim()}</span>`);
        const formattedSource = sourceParts.join('<i class="ic i-angle-right"></i>');
        const $source = $(md.render(formattedSource)).addClass('breadcrumb').appendTo($sourceBlock);
        $source.find('span').last().addClass('current');

        /* 笔记原文 original text */
        const $originalTextBlock = createNoteBlock('original text', 'danger', 'i-feather', originalText);

        if (wordPhrase) {
            const regex = new RegExp(`\\b${wordPhrase}\\b`, 'gi');
            originalText = originalText.replace(regex, match => {
                return `[${match}]{.keyword}`;
            });
        }

        $('<div>', {
            class: 'md content',
            html: md.render(replaceWithRenderedSpans(originalText))
        }).appendTo($originalTextBlock);

        /* 笔记 notes */
        if (notes) {
            const $notesBlock = createNoteBlock('notes', 'primary', 'i-sakura', notes);

            $('<div>', {
                class: 'md notes',
                html: md.render(replaceWithRenderedSpans(notes))
            }).appendTo($notesBlock);

            const $label = $notesBlock.children('.label');
            const $firstParagraph = $notesBlock.children('.md').children('p').first();
            $firstParagraph.prepend($label);
        }

        /* 笔记标签 tags */
        if (tags) {
            const $tagContainer = $('<div>', { class: 'tags' }).appendTo($container);
            const classes = ['primary', 'info', 'success', 'warning', 'danger'];

            tags.split(',').forEach(part => {
                const text = part.trim();
                if (text) {
                    const randomClass = classes[Math.floor(Math.random() * classes.length)];
                    $('<span>', {
                        class: `tag ${randomClass}`,
                        text: text,
                    }).prepend($('<i>', { class: 'ic i-tag' })).appendTo($tagContainer);
                }
            });
        }

        // For each span that generated from the custom Markdown format: [content]{attributes}
        $container.find('.md span').each(function () {
            const $element = $(this);

            // Class attribute
            const classAttribute = $element.attr('hclass');
            if (classAttribute) {
                $element.attr('class', classAttribute);
                $element.removeAttr('hclass');
            }

            // Attribute that indicates the tag name if it is not a span tag
            const nodeTypeAttribute = $element.attr('htag');
            if (nodeTypeAttribute) {
                const $newElement = $(`<${nodeTypeAttribute}>`).append($element.contents());
                $.each(this.attributes, function () {
                    if (this.name !== 'htag') {
                        $newElement.attr(this.name, this.value);
                    }
                });
                $element.replaceWith($newElement);
            }
        });

        // Callout
        $container.find('.callout').each(function () {
            const $callout = $(this);
            const calloutType = $callout.data('callout');

            $callout.addClass(calloutType);
        });

        // Quiz
        const quizTypes = { choice: "选择题", multiple: "多选题", fill_blank: "填空题", true_false: "判断题" };
        $container.find('.quiz > ul.options > li').each(function () {
            const $this = $(this);
            $this.on("click", () => {
                $this.toggleClass($this.hasClass("correct") ? "right" : "wrong");
                $this.closest(".quiz").addClass("show-answer");
            });
        });
        $container.find('.quiz > p').each(function () {
            const $this = $(this);
            $this.on("click", () => {
                $this.parent().toggleClass("show-answer");
            });
        });
        $container.find('.quiz > p:first-child').each(function () {
            const $this = $(this);
            const $parent = $this.parent();

            var quizType = "choice";
            if ($parent.hasClass("multi")) quizType = "multiple";
            if ($parent.hasClass("fill")) quizType = "fill_blank";
            if ($parent.hasClass("true") || $parent.hasClass("false")) quizType = "true_false";

            $this.attr("data-type", quizTypes[quizType]);
        });

        return $container;
    }
})();

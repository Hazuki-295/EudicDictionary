import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import markdownit from 'markdown-it';
import './notes.css';

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
        touchStartPreventDefault: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        }
    });

    // Markdown-it plugins
    const md = markdownit({ html: true })
        .use(require('markdown-it-attrs'))
        .use(require('markdown-it-bracketed-spans'))
        .use(require('markdown-it-ins'))
        .use(require('markdown-it-mark'))
        .use(require('markdown-it-multimd-table'), { multiline: true, rowspan: true, headerless: true })
        .use(require('markdown-it-toc-and-anchor').default, { tocClassName: 'toc', anchorClassName: 'anchor' });
    initMarkdownItContainer(md);

    function replaceWithSpans(text) {
        const pattern = /\[([^\[\]]*)]\{([^\}]+)\}/g;
        var previousText;
        do {
            previousText = text;
            text = text.replace(pattern, (match) => md.renderInline(match));
        } while (text !== previousText);
        return text;
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
        const $source = $(md.render(formattedSource)).appendTo($sourceBlock);
        $source.find('span').last().addClass('current');

        /* 笔记原文 original text */
        const $originalTextBlock = createNoteBlock('original text', 'danger', 'i-feather', originalText);

        if (wordPhrase) {
            const regex = new RegExp(`\\b${wordPhrase}\\b`, 'gi');
            originalText = originalText.replace(regex, match => {
                return `[${match}]{.bold .blue}`;
            });
        }

        $('<div>', {
            class: 'md content',
            html: md.render(replaceWithSpans(originalText))
        }).appendTo($originalTextBlock);

        /* 笔记 notes */
        if (notes) {
            const $notesBlock = createNoteBlock('notes', 'primary', 'i-sakura', notes);

            $('<div>', {
                class: 'md notes',
                html: md.render(replaceWithSpans(notes))
            }).appendTo($notesBlock);
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
                        class: `note-tag ${randomClass}`,
                        text: text,
                    }).prepend($('<i>', { class: 'ic i-tag' })).appendTo($tagContainer);
                }
            });
        }

        // Replace elements that have 'htag' attribute
        $container.find('.md span').each(function () {
            const $this = $(this);
            const htag = $this.attr('htag');

            if (htag) {
                const $newElement = $(`<${htag}>`).append($this.contents());
                $.each(this.attributes, function () {
                    if (this.name !== 'htag') {
                        $newElement.attr(this.name, this.value);
                    }
                });
                $this.replaceWith($newElement);
            }
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

    // Vertical view
    const $verticalViewButton = $('<div>', { class: 'vertical-view-button' }).appendTo($noteContainer);
    $verticalViewButton.on('click', () => {
        const isVerticalView = $noteContainer.toggleClass('vertical-view').hasClass('vertical-view');
        swiper.slideTo(0);
        isVerticalView ? swiper.disable() : swiper.enable();
    });

    /* markdown-it-container */
    function initMarkdownItContainer(md) {

        let plugin = require('markdown-it-container');

        md.use(plugin, 'note', {
            validate: function (params) {
                return params.trim().match(/^(default|primary|success|info|warning|danger)(.*)$/);
            },
            render: function (tokens, idx) {
                var m = tokens[idx].info.trim().match(/^(.*)$/);

                if (tokens[idx].nesting === 1) {
                    // opening tag
                    return '<div class="note ' + m[1].trim() + '">\n';

                } else {
                    // closing tag
                    return '</div>\n';
                }
            }
        });

        md.use(plugin, 'tab', {
            marker: ';',

            validate: function (params) {
                return params.trim().match(/^(\w+)+(.*)$/);
            },

            render: function (tokens, idx) {
                var m = tokens[idx].info.trim().match(/^(\w+)+(.*)$/);

                if (tokens[idx].nesting === 1) {
                    // opening tag
                    return '<div class="tab" data-id="' + m[1].trim() + '" data-title="' + m[2].trim() + '">\n';

                } else {
                    // closing tag
                    return '</div>\n';
                }
            }
        });

        md.use(plugin, 'collapse', {
            marker: '+',

            validate: function (params) {
                return params.match(/^(primary|success|info|warning|danger|\s)(.*)$/);
            },

            render: function (tokens, idx) {
                var m = tokens[idx].info.match(/^(primary|success|info|warning|danger|\s)(.*)$/);

                if (tokens[idx].nesting === 1) {
                    // opening tag
                    var style = m[1].trim()
                    return '<details' + (style ? ' class="' + style + '"' : '') + '><summary>' + m[2].trim() + '</summary><div>\n';
                } else {
                    // closing tag
                    return '</div></details>\n';
                }
            }
        });
    }
})();

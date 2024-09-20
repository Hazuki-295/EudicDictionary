import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import markdownit from 'markdown-it';
import './notes.css';

const $ = require('jquery');

(function () {
    function constructNotes() {
        if (typeof noteDataArray === 'undefined') {
            console.error(`'noteDataArray' is not defined`);
            return;
        }

        const $noteContainer = $('.Hazuki-note');
        if (!$noteContainer.length) return;

        if (noteDataArray.length === 1) {
            $noteContainer.addClass('single-note-mode');
        }

        // Construct Swiper
        const $swiper = $('<div>', { class: 'swiper' })
            .append($('<div>', { class: 'swiper-wrapper' }))
            .append($('<div>', { class: 'swiper-pagination' }))
            .append($('<div>', { class: 'swiper-button-prev' }))
            .append($('<div>', { class: 'swiper-button-next' }));
        $noteContainer.append($swiper);

        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
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
            .use(require('markdown-it-bracketed-spans'));

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
            $element.css('cursor', 'pointer');
            $element.on('click', () => {
                copyToClipboard(textToCopy);
                $element.css('cursor', 'default');
                setTimeout(() => { $element.css('cursor', 'pointer'); }, 2000);
            });
        }

        function constructSingleNote(noteData) {
            const $container = $('<div>', { class: 'single-note' });

            let { source, originalText, wordPhrase, notes, tags } = noteData;

            const createNoteBlock = (labelText, labelClass, iconClass, content) => {
                const $block = $('<div>', { class: 'note-block', 'label': labelText }).appendTo($container);
                const $label = $('<span>', { class: 'label', text: labelText }).addClass(labelClass).appendTo($block);
                const $icon = $('<i class="ic"></i>').addClass(iconClass).appendTo($label);
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
                originalText = originalText.replace(regex, match => `[${match}]{.bold .blue}`);
            }
            const $content = $('<div>', { class: 'md content', html: md.render(replaceWithSpans(originalText)) }).appendTo($originalTextBlock);

            /* 笔记 notes */
            if (notes) {
                const $notesBlock = createNoteBlock('notes', 'primary', 'i-sakura', notes);

                const $notes = $('<div>', { class: 'md notes', html: md.render(replaceWithSpans(notes)) }).appendTo($notesBlock);
                const $firstP = $notes.find('p').first();
                $firstP.find('.webtop, h2.shcut, .idm, .pv').length && $firstP.css('display', 'inline');
            }

            /* 笔记标签 tags */
            if (tags) {
                const $tagContainer = $('<div>', { class: 'tags' }).appendTo($container);
                const classes = ['primary', 'info', 'success', 'warning', 'danger'];

                tags.split(',').forEach(tagString => {
                    const tagText = tagString.trim();
                    if (tagText.length > 0) {
                        const randomClass = classes[Math.floor(Math.random() * classes.length)];
                        const tag = $('<span>', {
                            class: `note-tag ${randomClass}`,
                            text: tagText,
                        }).appendTo($tagContainer);
                        $('<i class="ic i-tag"></i>').prependTo(tag);
                    }
                });
            }

            // Replace elements that have 'htag' attribute
            $container.find('.md span').each(function () {
                if (!$(this).attr('htag')) return;

                const $this = $(this);
                const htag = $this.attr('htag');
                const $newElement = $(`<${htag}></${htag}>`).append($this.contents());
                $.each(this.attributes, function () {
                    if (this.name !== 'htag') {
                        $newElement.attr(this.name, this.value);
                    }
                });
                $this.replaceWith($newElement);
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
    };

    constructNotes();
})();
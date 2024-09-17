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
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });

        // Markdown-it plugins
        const md = markdownit({ html: true })
            .use(require('markdown-it-attrs'))
            .use(require('markdown-it-bracketed-spans'));

        function replaceWithSpans(text) {
            const pattern = /\[([^\[\]]*)]\{([^\}]+)\}/g;
            let previousText;
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

        function addCopyEvent(labelElement, textToCopy) {
            labelElement.css('cursor', 'pointer');
            labelElement.on('click', () => {
                copyToClipboard(textToCopy);
                labelElement.css('cursor', 'default');
                setTimeout(() => { labelElement.css('cursor', 'pointer'); }, 2000);
            });
        }

        function constructSingleNote(noteData) {
            const $container = $('<div>', { class: 'single-note' });

            let { source, originalText, wordPhrase, notes, tags } = noteData;
            let labelText;

            /* source */
            labelText = 'source';
            const $sourceBlock = $('<div>', { class: 'note-block', 'label': labelText }).appendTo($container);

            const $sourceLabel = $(`<span class="label info"><i class="ic i-home"></i>${labelText}</span>`).appendTo($sourceBlock);
            addCopyEvent($sourceLabel, source);

            const sourceParts = source.split('>').map(part => `<span>${part.trim()}</span>`);
            const formattedSource = sourceParts.join('<i class="ic i-angle-right"></i>');
            const $source = $(md.render(formattedSource)).appendTo($sourceBlock);
            $source.find('span').last().addClass('current');

            /* original text */
            labelText = 'original text';
            const $originalTextBlock = $('<div>', { class: 'note-block', 'label': labelText }).appendTo($container);

            const $originalTextLabel = $(`<span class="label danger"><i class="ic i-feather"></i>${labelText}</span>`).appendTo($originalTextBlock);
            addCopyEvent($originalTextLabel, originalText);

            if (wordPhrase) {
                const regex = new RegExp(`\\b${wordPhrase}\\b`, 'gi');
                originalText = originalText.replace(regex, match => `**${match}**{.blue}`);
            }
            const $content = $('<div>', { class: 'md content', html: md.render(replaceWithSpans(originalText)) }).appendTo($originalTextBlock);

            /* notes */
            if (notes) {
                labelText = 'notes';
                const $notesBlock = $('<div>', { class: 'note-block', 'label': labelText }).appendTo($container);

                const $notesLabel = $(`<span class="label primary"><i class="ic i-sakura"></i>${labelText}</span>`).appendTo($notesBlock);
                addCopyEvent($notesLabel, notes);

                const $notes = $('<div>', { class: 'md notes', html: md.render(replaceWithSpans(notes)) }).appendTo($notesBlock);
                const $firstP = $notes.find('p').first();
                if ($firstP.find('.webtop, .shcut, .pv, .idm').length > 0) {
                    $firstP.css('display', 'inline');
                }
            }

            /* tags */
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
                        $('<span><i class="ic i-tag"></i></span>').prependTo(tag);
                    }
                });
            }

            // post-processing
            $container.find('.quiz > ul.options li').each(function () {
                const $this = $(this);
                $this.on("click", function () {
                    if ($this.hasClass("correct")) {
                        $this.toggleClass("right");
                    } else {
                        $this.toggleClass("wrong");
                    }
                });
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
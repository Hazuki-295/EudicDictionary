import { HTMLToJSON } from 'html-to-json-parser';

const $ = require('jquery');

(function () {
    function addClickEventToCopyText($element, textToCopy) {
        $element.css('cursor', 'pointer');
        $element.off('click').on('click', function (event) { // reattach click event
            event.stopPropagation();
            copyToClipboard(textToCopy);
            $(this).css('cursor', 'default');
            setTimeout(() => { $(this).css('cursor', 'pointer'); }, 2000);
        });
    }

    function clean($element, selector, _options = {}) {
        const defaultOptions = { mode: 'retain', deep: false, direct: false };
        const options = Object.assign({}, defaultOptions, _options);

        const $clone = $element.clone();

        if (options.mode === 'retain') {
            if (options.direct) {
                $clone.children().not(selector).remove();
            } else if (options.deep) {
                $clone.find('*').not(selector).remove();
            }
        } else if (options.mode === 'remove') {
            if (options.direct) {
                $clone.children(selector).remove();
            } else if (options.deep) {
                $clone.find(selector).remove();
            }
        }

        return $clone;
    }

    const formatClassAttr = (classNames) => classNames.split(' ').map(cls => `.${cls}`).join(' ');

    function jsonToPlainText(json) {
        function processNode(node) {
            if (!node.content) { // base case: no content
                if (node.attributes && node.attributes.class) {
                    return `[]{${formatClassAttr(node.attributes.class)}}`;
                }
                return ''
            }

            let result = node.content.map(item => {
                if (typeof item === 'string') { // return plain text directly
                    return item.replace(/\[(.*?)\]/g, '$1');
                }
                return processNode(item); // recursive
            }).join('');

            // Markdown-it
            if (node.attributes && node.attributes.class) {
                const classAttr = `${formatClassAttr(node.attributes.class)}`;
                const htag = node.type !== 'span' ? `htag=${node.type}` : '';
                const attrs = [classAttr, htag].filter(Boolean).join(' ');
                if (attrs) result = `[${result}]{${attrs}}`;
            }

            return result;
        }

        return processNode(json); // start processing from the root
    }

    async function jsonify($element, selector, options = {}) {
        if ($element.attr('text-to-copy')) return; // Already processed
        const $cleanClone = clean($element, selector, options);
        const result = await HTMLToJSON($cleanClone.prop('outerHTML'));
        $element.attr('text-to-copy', jsonToPlainText(result));
    }

    function wrapTextWithAttrs(text, attrs) {
        const _attrs = Object.entries(attrs).map(([key, value]) => {
            if (key === 'class') {
                return formatClassAttr(value);
            } else {
                return `${key}="${value}"`;
            }
        }).join(' ');

        return `[${text}]{${_attrs}}`;
    }

    const createNoteCard = (note, comment) => wrapTextWithAttrs(note, { class: 'note-card', 'data-label': 'definition', 'data-comment': comment });
    const createNoteCards = () => wrapTextWithAttrs(' ', { class: 'note-cards' });

    function applyConfigurations() {
        /******** dictionary 1: oaldpe ********/
        const $oaldpe = $('.oaldpe');

        const $target = $oaldpe.find('deft');
        $target.on('click', function () {
            const $this = $(this);
            const $sense = $this.closest('.sense');

            jsonify($sense, '.examples, .collapse, .un, div#ox-enlarge, .labels', { mode: 'remove', deep: true }).then(() => {
                const $webtop = $this.closest('.entry').find('.webtop');
                if (!$webtop.length) {
                    addClickEventToCopyText($this, $sense.attr('text-to-copy'));
                    return;
                }

                jsonify($webtop, '.symbols, .headword, .pos', { direct: true }).then(() => {
                    const $ancestor = $this.closest('.shcut-g, .idm-g, .pv-g');

                    if ($ancestor.length) {
                        const $parent = $ancestor.find('h2.shcut, .idm, .pv');

                        jsonify($parent, '*').then(() => {
                            const senseText = createNoteCard($sense.attr('text-to-copy'), 'OALD');
                            const textToCopy = `${$webtop.attr('text-to-copy')} ${$parent.attr('text-to-copy')}\n\n${senseText}`;
                            addClickEventToCopyText($this, textToCopy);
                        });
                    } else {
                        const senseText = createNoteCard($sense.attr('text-to-copy'), 'OALD');
                        const textToCopy = `${$webtop.attr('text-to-copy')}\n\n${senseText}`;
                        addClickEventToCopyText($this, textToCopy);
                    }
                });
            });
        });

        /******** dictionary 2: ode ********/
        const $ode = $('folderglance');

        const $definitions = $ode.find('.definition.capital-letter');
        $definitions.on('click', function () {
            const $this = $(this);
            const $sense = $this.closest('.senseInnerWrapper');

            $this.find('.cn_def, w').remove(); // clean up

            jsonify($sense, '.transivityStatement, .definition, variantGroup, .wordForm, .reg, .languageGroup', { direct: true }).then(() => {
                const senseText = createNoteCard($sense.attr('text-to-copy'), 'ODE');
                addClickEventToCopyText($this, senseText + '\n\n' + createNoteCards());
            });
        });
    }

    setTimeout(() => { applyConfigurations(); });
})();
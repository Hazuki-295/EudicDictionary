import { HTMLToJSON } from 'html-to-json-parser';

const $ = require('jquery');

(function init() {
    // Attach a click-to-copy event to the element
    function addClickEventToCopyText($element, textToCopy) {
        $element.css('cursor', 'pointer').on('click', function (event) {
            event.stopPropagation();
            copyToClipboard(textToCopy);
            $element.css('cursor', 'default');
            setTimeout(() => { $element.css('cursor', 'pointer'); }, 2000);
        });
    }

    // HTML to JSON
    async function jsonify($elements, modifyCallback) {
        $elements.each(async function () {
            const $element = $(this);
            const $clonedElement = cloneAndModify($element, modifyCallback);
            const json = await HTMLToJSON($clonedElement.prop('outerHTML'));
            $element.attr('text-to-copy', jsonToPlainText(json));
        });
    }

    function cloneAndModify($element, modifyCallback) {
        const $clonedElement = $element.clone();

        if (typeof modifyCallback === 'function') {
            modifyCallback($clonedElement);
        }

        return $clonedElement;
    }

    function jsonToPlainText(json) {
        // Function to encode special characters (e.g., brackets and '&nbsp;') to placeholders
        function encodeSpecialCharsInContent(content) {
            return content
                .replace(/\[/g, '{OPEN_BRACKET}')
                .replace(/\]/g, '{CLOSE_BRACKET}')
                .replace(/&nbsp;/g, '{NBSP}');
        }

        // Recursively process each node and its content, including attributes
        function processNode(node) {
            // Add attribute that indicates the tag name if it is not a span tag
            const nodeTypeAttribute = node.type !== 'span' && 'htag=' + node.type;

            // Add class attribute if available
            const classAttribute = node.attributes?.class && 'hclass=' + `"${node.attributes.class}"`;

            // Combine the attributes: type and class
            const nodeAttributes = [nodeTypeAttribute, classAttribute].filter(Boolean).join(' ');

            // If the node has content, process it further
            if (node.content) {
                const processedContent = node.content.map(content => {
                    return typeof content === 'string'
                        ? encodeSpecialCharsInContent(content)
                        : processNode(content);
                }).join('');

                // Wrap content with attributes, if any, and return
                return nodeAttributes ? `[${processedContent}]{${nodeAttributes}}` : processedContent;
            }

            // Wrap nothing with attributes, if any, and return
            return nodeAttributes ? `[]{${nodeAttributes}}` : '';
        }

        // Start the recursive processing of the JSON object
        return processNode(json);
    }

    // Helper functions
    function wrapTextWithAttrs(text, attrs) {
        return `[${text}]{${Object.entries(attrs).map(([key, value]) => `${key}="${value}"`).join(' ')}}`;
    }

    function createNoteCard(note, comment) {
        return wrapTextWithAttrs(note, { hclass: 'note-card', 'data-label': 'definition', 'data-comment': comment });
    };

    function createNoteCards() {
        return wrapTextWithAttrs(' ', { hclass: 'note-cards' });
    };

    // Dictionary 1: Oxford Advanced Learner's Dictionary
    $('.oaldpe').each(function () {
        const $oaldpe = $(this);
        if ($oaldpe.attr('jsonified') === 'true') return;
        $oaldpe.attr('jsonified', 'true');

        $oaldpe.find('.oald-entry-root').each(async function () {
            const $entry = $(this);
            const idiomEntry = $entry.hasClass('idm-g');

            /* Level 1: webtop */
            const $webtop = $entry.find('.entry > .top-container .webtop');
            await jsonify($webtop, $clonedElement => {
                $clonedElement.children('.symbols:gt(0)').remove();
                $clonedElement.children().not('.symbols, .headword, .pos, .grammar').remove();
            });

            /* Level 2: sense group */
            const $senseGroup = $entry.find('.shcut-g, .idm-g, .pv-g');
            await jsonify($senseGroup.find('h2.shcut, .idm, .pv'));

            if (idiomEntry) await jsonify($entry.find('.idm'));

            /* Level 3: sense */
            const $sense = $entry.find('li.sense');
            const senseExpandSelector = '.examples, .collapse, .un';

            $sense.each(async function () {
                const $sourceElement = $(this);
                const $senseGroup = $sourceElement.closest('.shcut-g, .idm-g, .pv-g');

                const $clonedElement = cloneAndModify($sourceElement, $clonedElement => {
                    const $iteration = $clonedElement.children('.iteration');
                    const $senseExpand = $iteration.siblings(senseExpandSelector);
                    const $senseDefinition = $iteration.siblings().not($senseExpand);

                    $iteration.remove();
                    $senseExpand.remove();
                    $senseDefinition.find('div[id="ox-enlarge"]').remove();
                });

                const $deft = $sourceElement.find('deft');
                const json = await HTMLToJSON($clonedElement.prop('outerHTML'));
                $deft.attr('text-to-copy', jsonToPlainText(json));

                const webtopText = $webtop.attr('text-to-copy');
                const senseGroupText = $senseGroup.find('h2.shcut, .idm, .pv').attr('text-to-copy');
                const senseText = createNoteCard($deft.attr('text-to-copy'), 'OALD');

                const textToCopy = [webtopText, senseGroupText].filter(Boolean).join(' ') + '\n\n' + senseText;
                addClickEventToCopyText($deft, textToCopy);
            });
        });
    });

    // Dictionary 2: Oxford Dictionary of English
    $('.ode-2024').each(function () {
        const $ode = $(this);
        if ($ode.attr('jsonified') === 'true') return;
        $ode.attr('jsonified', 'true');

        $ode.find('.entryContent[data-dictname^="ENG"]').each(function () {
            const $entryPageContent = $(this).find('.entryPageContent');

            /* sense */
            const $sense = $entryPageContent.find('.msDict.sense, .msDict.subsense');
            const senseExpandSelector = '.exampleGroup, .moreInformation, .sense-note';

            $sense.each(async function () {
                const $sourceElement = $(this).children('.senseInnerWrapper');

                const $clonedElement = cloneAndModify($sourceElement, $clonedElement => {
                    const $iteration = $clonedElement.children('.iteration');
                    const $senseExpand = $iteration.siblings(senseExpandSelector);
                    const $definitions = $iteration.siblings('.definition.capital-letter');

                    $iteration.remove();
                    $senseExpand.remove();

                    // Use regex to remove a trailing ':' or '.' from the definition
                    $definitions.each(function () {
                        const $definition = $(this);
                        const definitionText = $definition.text();
                        $definition.html($definition.html().replace(definitionText, definitionText.replace(/[.:]\s*$/, '')));
                    });
                });

                const $definition = $sourceElement.children('.definition.capital-letter');
                const json = await HTMLToJSON($clonedElement.prop('outerHTML'));
                $definition.attr('text-to-copy', jsonToPlainText(json));

                const senseText = createNoteCard($definition.attr('text-to-copy'), 'ODE');
                addClickEventToCopyText($definition, senseText + '\n\n' + createNoteCards());
            });
        });
    });
})();

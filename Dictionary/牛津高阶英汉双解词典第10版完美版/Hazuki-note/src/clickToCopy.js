(function () {
    const dictInfos = [
        { name: 'oaldpe', rootSelector: '.oaldpe' },
        { name: 'ode', rootSelector: 'folderglance' }
    ];

    function addClickEventToCopyText($element, textToCopy) {
        $element.css('cursor', 'pointer');
        $element.off('click');
        $element.on('click', function (event) { // reattach click event
            event.stopPropagation();
            copyToClipboard(textToCopy);
            $(this).css('cursor', 'default');
            setTimeout(() => { $(this).css('cursor', 'pointer'); }, 2000);
        });
    }

    function wrapTextWithAttrs(text, attrs) {
        let attrString = '';
        for (const [key, value] of Object.entries(attrs)) {
            if (key === 'class') {
                const classes = value.split(' ').map(cls => `.${cls}`).join(' ');
                attrString += ` ${classes}`;
            } else {
                attrString += ` ${key}="${value}"`;
            }
        }
        return `[${text}]{${attrString.trim()}}`;
    }

    function wrapTextWithClass(text, className) {
        return wrapTextWithAttrs(text, { class: className });
    }

    function wrapElementTextWithClasses($element, selectors, outerClassName) {
        let text = $element.text();

        selectors.forEach(selector => {
            const $innerElements = $element.find(selector);
            $innerElements.each(function () {
                const $this = $(this);
                const innerText = $this.text();
                text = text.replace(innerText, wrapTextWithClass(innerText, selector.replace('.', '')));
            });
        });

        return wrapTextWithClass(text, outerClassName);
    }

    function applyConfigurations({ name, rootSelector }) {
        const $rootElements = $(rootSelector);

        $rootElements.each(function () {
            const $rootElement = $(this).addClass('macos_ipad_sim');

            if (name === 'oaldpe') {
                const $elements = $rootElement.find('.webtop .pos, h2.shcut shcut, .idm, .pv, deft');
                $elements.each(function () {
                    const $element = $(this);

                    var textToCopy;
                    if ($element.is('.webtop .pos')) {
                        const $webtop = $element.closest('.webtop');
                        const $symbols = $webtop.find('.symbols a span');
                        const $headword = $webtop.find('.headword');
                        const textMap = {
                            symbols: (() => {
                                if ($symbols.length) {
                                    const classAttr = $symbols.attr('class');
                                    return wrapTextWithClass('&nbsp;', classAttr);
                                }
                                return '';
                            })(),
                            headword: (() => {
                                const $headwordCopy = $headword.clone();
                                $headwordCopy.find('.hm').remove();
                                return wrapElementTextWithClasses($headwordCopy, ['.st'], 'headword');
                            })(),
                            pos: wrapTextWithClass($element.text(), 'pos')
                        };
                        textToCopy = wrapTextWithClass(Object.values(textMap).filter(Boolean).join(' '), 'webtop');
                    } else if ($element.is('h2.shcut shcut')) {
                        textToCopy = wrapElementTextWithClasses($element.parent(), ['chn'], 'shcut');
                    } else if ($element.is('.idm')) {
                        const idiomText = wrapElementTextWithClasses($element, ['.idmsep'], 'idiom');
                        const posText = wrapTextWithClass('idiom', 'pos');
                        textToCopy = wrapTextWithClass(`${idiomText} ${posText}`, 'idm');
                    } else if ($element.is('.pv')) {
                        const $pvCopy = $element.clone();
                        const $pvarr = $pvCopy.find('.pvarr');
                        if ($pvarr.length) $pvarr.replaceWith(wrapTextWithClass('', 'pvarr'));
                        textToCopy = wrapTextWithClass($pvCopy.text(), 'pv');
                    } else if ($element.is('deft')) {
                        const $sense = $element.closest('.sense');
                        const $symbols = $sense.find('.symbols a span');
                        const $pos = $sense.find('.pos');
                        const $cf = $sense.find('.sensetop .cf, > .cf');
                        const $variants = $sense.find('.variants');
                        const $subj = $sense.find('.sensetop .subj');
                        const $grammar = $sense.find('.grammar');
                        const $dis_g = $sense.find('.dis-g');
                        const $def = $sense.find('.def');
                        const $deft = $element;

                        const $allCf = $sense.find('.cf');
                        const $otherCf = $allCf.not($cf);
                        $otherCf.each(function () {
                            const $this = $(this);
                            addClickEventToCopyText($this, wrapTextWithClass($this.text(), 'cf'));
                        });

                        const textMap = {
                            symbols: (() => {
                                if ($symbols.length) {
                                    const classAttr = $symbols.attr('class');
                                    return wrapTextWithClass('&nbsp;', classAttr);
                                }
                                return '';
                            })(),
                            pos: $pos.length ? wrapTextWithClass($pos.text(), 'pos') : '',
                            cf: $cf.length ? wrapTextWithClass($cf.text(), 'cf') : '',
                            variants: (() => {
                                if ($variants.length) {
                                    let result = wrapElementTextWithClasses($variants, ['.v-g'], 'variants')
                                    if ($variants.attr('type') === 'alt') {
                                        result = result.replace('{.variants}', '{.variants type=alt}');
                                    }
                                    return result;
                                }
                                return '';
                            })(),
                            subj: (() => {
                                if ($subj.length) {
                                    const subjText = $subj.text();
                                    const nextText = wrapTextWithClass($subj.next().text(), 'chn');
                                    return wrapTextWithClass(subjText + nextText, 'subj');
                                }
                                return '';
                            })(),
                            grammar: (() => {
                                if ($grammar.length) {
                                    const grammarText = $grammar.text();
                                    const innerText = grammarText.match(/\[(.*?)\]/)[1];
                                    return wrapTextWithClass(innerText, 'grammar');
                                }
                                return '';
                            })(),
                            dis_g: (() => {
                                if ($dis_g.length) {
                                    let dis_gText = $dis_g.text();
                                    const chnText = $dis_g.find('chn').text();
                                    dis_gText = dis_gText.replace(chnText, ' ' + wrapTextWithClass(chnText, 'chn'));
                                    return wrapTextWithClass(dis_gText, 'dis-g');
                                }
                                return '';
                            })(),
                            def: wrapElementTextWithClasses($def, ['.ndv', '.ei', '.eb'], 'def'),
                            deft: wrapTextWithClass($deft.text(), 'chn')
                        };

                        textToCopy = wrapTextWithClass(Object.values(textMap).filter(Boolean).join(' '), 'sense');
                        textToCopy = wrapTextWithAttrs(textToCopy, { class: 'note-card', 'data-label': 'definition', 'data-comment': 'OALD' });
                    }
                    $element.attr('text-to-copy', textToCopy);
                });

                $elements.each(function () {
                    const $element = $(this);

                    var textToCopy;
                    if ($element.is('.webtop .pos')) {
                        textToCopy = $element.attr('text-to-copy');
                    } else if ($element.is('h2.shcut shcut, .idm, .pv')) {
                        const $entry = $element.closest('.entry');
                        const $pos = $entry.find('.webtop .pos');
                        textToCopy = `${$pos.attr('text-to-copy')} ${$element.attr('text-to-copy')}`;
                    } else if ($element.is('deft')) {
                        const $entry = $element.closest('.entry');
                        const $pos = $entry.find('.webtop .pos');
                        const $ancestor = $element.closest('.shcut-g, .idm-g, .pv-g');

                        const ancestorText = $ancestor.length ? ' ' + $ancestor.find('h2.shcut shcut, .pv, .idm').attr('text-to-copy') : '';

                        textToCopy = `${$pos.attr('text-to-copy')}${ancestorText}\n\n${$element.attr('text-to-copy')}`;
                    }
                    addClickEventToCopyText($element, textToCopy);
                });

                const $xrefs = $rootElement.find('.xrefs');
                $xrefs.each(function () {
                    const $this = $(this);
                    const $prefix = $this.find('.prefix');
                    var textToCopy = wrapElementTextWithClasses($this, ['.prefix', '.Ref'], 'xrefs').replace(/,/g, '');
                    addClickEventToCopyText($prefix, textToCopy);
                });
            }

            if (name === 'ode') {
                const $definitions = $rootElement.find('.definition.capital-letter');
                $definitions.each(function () {
                    const $this = $(this);

                    const $definition = $this.clone();
                    $definition.find('.cn_def, w').remove();

                    var definitionText = $definition.text().trim();

                    // Remove the last character if it is a colon
                    if (definitionText.endsWith(':')) {
                        definitionText = definitionText.slice(0, -1);
                    }

                    var textToCopy = '';

                    const $container = $this.parent('.senseInnerWrapper');
                    const $wordForm = $container.children('.wordForm');
                    const $variantGroup = $container.children('.variantGroup');
                    const $transivity = $container.children('.transivityStatement');
                    const $languageGroup = $container.children('.languageGroup');

                    const textMap = {
                        wordForm: (() => {
                            if ($wordForm.length) {
                                var wordFormText = wrapTextWithClass($wordForm.text(), 'wordForm');
                                return wrapTextWithClass(wordFormText, 'wordFormGroup');
                            }
                            return '';
                        })(),
                        variantGroup: (() => {
                            if ($variantGroup.length) {
                                return wrapElementTextWithClasses($variantGroup, ['.variant'], 'variantGroup');
                            }
                            return '';
                        })(),
                        transivity: (() => {
                            if ($transivity.length) {
                                const transivityText = $transivity.text();
                                const innerText = transivityText.match(/\[(.*?)\]/)[1];
                                return wrapTextWithClass(innerText, 'transivityStatement');
                            }
                            return '';
                        })(),
                        languageGroup: (() => {
                            if ($languageGroup.length) {
                                return wrapTextWithClass($languageGroup.text(), 'languageGroup');
                            }
                            return '';
                        })(),
                        definition: wrapTextWithClass(definitionText, 'def')
                    };

                    textToCopy = Object.values(textMap).filter(Boolean).join(' ');
                    textToCopy = wrapTextWithClass(textToCopy, 'sense');
                    textToCopy = wrapTextWithAttrs(textToCopy, { class: 'note-card', 'data-label': 'definition', 'data-comment': 'ODE' });
                    textToCopy = wrapTextWithAttrs(textToCopy, { class: 'note-cards' });

                    addClickEventToCopyText($this, textToCopy);
                });
            }
        });
    }

    setTimeout(() => { dictInfos.forEach(applyConfigurations); });
})();
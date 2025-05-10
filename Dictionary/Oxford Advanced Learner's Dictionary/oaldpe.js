// 可以直接在【词典软件】里搜索以下任意词条，进入配置界面：
// 推荐使用：1. 欧路词典 Eudic (全平台), 2. GoldenDict-ng (电脑端)
// oaldpeconfig, oaldpecfg, oaldpehelp, oaldconfig, oaldcfg, oaldhelp

/* ********用户自定义配置区开始******** */
var oaldpeConfig = {
    /******** 中文翻译相关 ********/
    chineseTranslation: {
        groupTitle: '中文翻译相关', // 配置组标题

        // 【配置项1：中文翻译选项】
        showTranslation: {
            selectedValue: 1,    // 默认显示所有中文翻译
            title: '中文翻译选项', // 配置项标题
            type: 'dropdown',    // 在配置界面下，该选项为下拉框选择
            options: [
                { value: 0, label: '全部隐藏' }, // 隐藏所有中文翻译
                { value: 1, label: '全部显示' }, // 显示所有中文翻译
                { value: 2, label: '仅隐藏例句中文' }, // 隐藏例句中的中文翻译
                { value: 3, label: '仅显示例句中文' }, // 仅显示例句中的中文翻译
                { value: 4, label: '仅隐藏释义中文' }, // 隐藏释义中的中文翻译
                { value: 5, label: '仅显示释义中文' }  // 仅显示释义中的中文翻译
            ],
            description: '设置初始状态下，中文翻译的显示/隐藏。', // 配置项描述
            callout: [
                { type: 'tip', content: ['单击右上角的 O10 小图标，可显示/隐藏所有中文翻译。', '默认隐藏部分中文翻译时，可搭配点译功能使用。'] } // 相关提示
            ]
        },

        // 【配置项2：启用英文点译功能】
        touchToTranslate: {
            selectedValue: false, // 默认为不启用
            title: '启用英文点译功能',
            type: 'checkbox' // 在配置界面下，该选项为复选框（checkbox）开关
        },

        // 【配置项3：是否使用简繁转换】
        showTraditional: {
            selectedValue: 0, // 默认为简体中文
            title: '是否使用简繁转换',
            type: 'dropdown',
            options: [
                { value: 0, label: '简体（不使用简繁转换）' }, // 简体中文翻译
                { value: 1, label: '繁体（香港）' }, // 香港繁体中文翻译
                { value: 2, label: '繁体（台湾）' }, // 台湾繁体中文翻译
                { value: 3, label: '繁体（台湾，带词组转换）' } // 台湾繁体中文翻译（带词组转换）
            ]
        },

        // 【配置项4：离线图片翻译选项】
        imgTranslationOpt: {
            selectedValue: 3, // 默认为根据其他设置自动选择
            title: '离线图片翻译选项',
            type: 'dropdown',
            options: [
                { value: 0, label: '不使用翻译' }, // 原版英文图片
                { value: 1, label: '简体中文翻译' }, // 港版 app 简体中文翻译
                { value: 2, label: '港版繁体翻译' }, // 港版 app 繁体中文翻译
                { value: 3, label: '根据其他设置自动选择' } // 根据配置项【中文翻译选项】和配置项【是否使用简繁转换】自动选择
            ],
            callout: [
                { type: 'warning', content: '当【在线图片】启用时，图片翻译无效。' } // 注意事项
            ]
        },

        // 【配置项5：翻译来源：默认高亮区分非官方翻译】
        highlightUnofficial: {
            selectedValue: false, // 默认为不高亮区分，统一样式
            title: '翻译来源：默认高亮区分非官方翻译',
            type: 'checkbox',
            description: '设置初始状态下，是否使用不同的样式区分翻译来源。',
            callout: [
                { type: 'info', content: ['默认为不高亮区分，统一样式，减少阅读干扰。', '中文翻译来源详见帮助界面 FAQ。'] } // 附加说明
            ]
        }
    },

    /******** 词性导航栏 ********/
    posNavbar: {
        groupTitle: '词性导航栏',

        // 【配置项1：启用词性导航栏】
        showNavbar: {
            selectedValue: true, // 默认为启用
            title: '启用词性导航栏',
            type: 'checkbox',
            description: '控制是否启用词性导航栏，便于在多词性词条中快速切换。'
        },

        // 【配置项2：是否选中词性导航栏 All】
        selectNavbarAll: {
            selectedValue: false, // 默认为不选中
            title: '是否选中词性导航栏 All',
            type: 'checkbox',
            description: '设置初始状态下，是否选中词性导航栏 All。'
        }
    },

    /******** 内容精简 ********/
    contentSimplification: {
        groupTitle: '内容精简',

        // 【配置项1：简化词性表示】
        simplifyPos: {
            selectedValue: false, // 默认不简化
            title: '简化词性表示',
            type: 'checkbox',
            description: '控制是否将词性表示简化（例如将 verb 简化为 v.）。'
        },

        // 【配置项2：简化语法标签】
        simplifyGrammar: {
            selectedValue: false, // 默认不简化
            title: '简化语法标签',
            type: 'checkbox',
            description: '控制是否将语法标签简化（例如将 [transitive] 简化为 [T]）。'
        },

        // 【配置项3：简化固定搭配中的 sth./sb.】
        simplifySthSb: {
            selectedValue: true, // 默认简化
            title: '简化固定搭配中的 sth./sb.',
            type: 'checkbox',
            description: '控制是否将固定搭配中的 something/somebody 简化为 sth./sb.。'
        },

        // 【配置项4：在固定搭配中使用代字号】
        usePlaceholder: {
            selectedValue: false, // 默认不使用
            title: '在固定搭配中使用代字号',
            type: 'checkbox',
            description: '控制是否将固定搭配中的关键词替换为代字号（例如将 take sth. with you 替换为 ~ sth. with you）。'
        },
    },

    /******** 显示控制 ********/
    contentDisplay: {
        groupTitle: '显示控制',

        // 【配置项1：默认显示音节划分】
        showSyllable: {
            selectedValue: false, // 默认为不显示
            title: '默认显示音节划分',
            type: 'checkbox',
            description: '设置初始状态下，是否显示多音节单词的音节划分。',
            callout: [
                { type: 'tip', content: '点击词头，可以切换音节划分的显示与否。' }
            ]
        },

        // 【配置项2：默认英音例句发音】
        defaultBritishExPron: {
            selectedValue: false, // 默认为美音发音
            title: '默认英音例句发音',
            type: 'checkbox',
            description: '例句发音只显示一个喇叭，设置初始状态下为英音或美音。',
            callout: [
                { type: 'info', content: ['可以在 O10 小图标展开的界面中：', '(1) 切换当前例句发音（即时生效）', '(2) 设置默认例句发音（下次查询起生效）'] }
            ]
        },

        // 【配置项3：固定搭配荧光笔下划线】
        phrasesAddUnderline: {
            selectedValue: false, // 默认不添加
            title: '固定搭配荧光笔下划线',
            type: 'checkbox',
            description: '控制是否为固定搭配添加荧光笔下划线以突出显示。'
        },

        // 【配置项4：例句中文独占一行】
        examplesChineseBeAlone: {
            selectedValue: true, // 默认为例句中文独占一行
            title: '例句中文独占一行',
            type: 'checkbox',
            description: '控制是否在例句英文后换行，例句中文独占一行显示。'
        }
    },

    /******** 在线资源 ********/
    onlineResources: {
        groupTitle: '在线资源',

        // 【配置项1：在线单词发音】
        onlineWordPron: {
            selectedValue: false, // 默认为不启用
            title: '在线单词发音',
            type: 'checkbox',
            description: '启用后，可以删除 oaldpe.1.mdd 文件。'
        },

        // 【配置项2：在线图片】
        onlineImage: {
            selectedValue: false, // 默认为不启用
            title: '在线图片',
            type: 'checkbox',
            description: '启用后，可以删除 oaldpe.2.mdd 文件。',
            callout: [
                { type: 'info', content: '在线图片无中文翻译。' }
            ]
        },

        // 【配置项3：官方例句发音选项】
        officialExPronOpt: {
            selectedValue: 1, // 默认为官方例句在线发音
            title: '官方例句发音选项',
            type: 'dropdown',
            options: [
                { value: 0, label: '不启用官方例句发音' },
                { value: 1, label: '在线发音' }, // 联网在线发音
                { value: 2, label: '离线发音' }  // 离线发音文件
            ],
            description: '如果启用在线发音（或不启用官方例句发音），可以删除 oaldpe.3.mdd 文件。',
            callout: [
                { type: 'success', content: ['默认启用在线发音，音质较好。', '离线发音可作为无 Wi-Fi 或无网络环境下的备选方案。'] }
            ]
        },

        // 【配置项4：是否删除无在线发音的官方例句发音】
        removeNoOnlineExPron: {
            selectedValue: false, // 默认为不删除
            title: '是否删除无在线发音的官方例句发音',
            type: 'checkbox',
            description: '删除 oaldpe.3.mdd 文件时，若仍需要使用在线发音，请同时开启此选项，因为该部分例句无在线发音。可转而使用 TTS 发音。',
        },

        // 【配置项5：无官方例句发音时，是否启用在线 TTS 发音】
        enableOnlineTTS: {
            selectedValue: true, // 默认为启用
            title: '无官方例句发音时，是否启用在线 TTS 发音',
            type: 'checkbox',
            description: '例句发音为 TTS 发音时，发音图标带下划线。'
        },

        // 【配置项6：TTS 英音发音配置】
        britishTTS: {
            selectedValue: '英音男1', // 默认使用英音男1
            title: 'TTS 英音发音配置',
            type: 'dropdown',
            options: [
                { value: '英音男1', label: '英音男1' },
                { value: '英音男2', label: '英音男2' },
                { value: '英音女1', label: '英音女1' },
                { value: '英音女2', label: '英音女2' },
                { value: '英音女3', label: '英音女3' }
            ]
        },

        // 【配置项7：TTS 美音发音配置】
        americanTTS: {
            selectedValue: '美音女4', // 默认使用美音女4
            title: 'TTS 美音发音配置',
            type: 'dropdown',
            options: [
                { value: '美音男1', label: '美音男1' },
                { value: '美音男2', label: '美音男2' },
                { value: '美音男3', label: '美音男3' },
                { value: '美音男4', label: '美音男4' },
                { value: '美音男5', label: '美音男5' },
                { value: '美音女1', label: '美音女1' },
                { value: '美音女2', label: '美音女2' },
                { value: '美音女3', label: '美音女3' },
                { value: '美音女4', label: '美音女4' }
            ]
        }
    },

    /******** 折叠控制 ********/
    collapseControl: {
        groupTitle: '折叠控制',

        // 【配置项1：默认展开释义】
        unfoldSense: {
            selectedValue: true, // 默认展开
            title: '默认展开释义',
            type: 'checkbox',
            description: '设置初始状态下，所有释义的展开/折叠状态。',
            callout: [
                { type: 'tip', content: ['点击释义前的序号，可以展开/折叠单项释义。', '双击右上角的 O10 小图标，可以展开/折叠所有释义。'] }
            ]
        },

        // 【配置项2：默认展开折叠块】
        unfoldUnbox: {
            selectedValue: false, // 默认不展开
            title: '默认展开折叠块',
            type: 'checkbox',
            description: '设置初始状态下，所有折叠块（浅蓝色折叠区，Extra Examples 更多例句等）的展开/折叠状态。'
        },

        // 【配置项3：默认展开特定折叠块】
        autoUnfoldUnbox: {
            selectedValue: { // 默认仅展开词源
                british_american: { value: false, label: 'British/American 英式 / 美式' },
                colloc: { value: false, label: 'Collocations 词语搭配' },
                cult: { value: false, label: 'Culture 文化' },
                express: { value: false, label: 'Express Yourself 情景表达' },
                extra_examples: { value: false, label: 'Extra Examples 更多例句' },
                grammar: { value: false, label: 'Grammar Point 语法说明' },
                homophone: { value: false, label: 'Homophones 同音词' },
                langbank: { value: false, label: 'Language Bank 用语库' },
                mlt: { value: false, label: 'More Like This 同类词语学习' },
                more_about: { value: false, label: 'More About 补充说明' },
                snippet: { value: false, label: 'Oxford Collocations Dictionary 牛津搭配词典' },
                synonyms: { value: false, label: 'Synonyms 同义词辨析' },
                verbforms: { value: false, label: 'Verb Forms 动词形式' },
                vocab: { value: false, label: 'Vocabulary Building 词汇扩充' },
                which_word: { value: false, label: 'Which Word? 词语辨析' },
                wordfamily: { value: false, label: 'Word Family 词族' },
                wordfinder: { value: false, label: 'Wordfinder 联想词' },
                wordorigin: { value: true, label: 'Word Origin 词源' }
            },
            title: '默认展开特定折叠块',
            type: 'nested-checkboxes',
            description: '设置初始状态下，特定折叠块的展开/折叠状态。',
            callout: [
                { type: 'warning', content: '当【默认展开折叠块】为 true 时，所有折叠块默认展开，此设置无效。' }
            ]
        },

        // 【配置项4：默认展开 Idioms 和 Phrasal Verbs】
        unfoldPhraseSections: {
            selectedValue: false, // 默认不展开
            title: '默认展开 Idioms 和 Phrasal Verbs',
            type: 'checkbox',
            description: '设置初始状态下，习语 Idioms 和词组 Phrasal Verbs 区域是否展开。'
        },

        // 【配置项5：跳转后自动展开内容】
        jumpsUnfold: {
            selectedValue: true, // 默认跳转后自动展开
            title: '跳转后自动展开内容',
            type: 'checkbox',
            description: '控制点击 Idioms 或 Phrasal Verbs 跳转后，是否自动展开内容。'
        },

        // 【配置项6：返回后自动折叠内容】
        leavesFold: {
            selectedValue: true, // 默认返回后自动折叠
            title: '返回后自动折叠内容',
            type: 'checkbox',
            description: '控制点击小火箭返回后，是否自动折叠内容。'
        },
    },

    /******** 词典软件相关 ********/
    dictionaryAppRelated: {
        groupTitle: '词典软件相关',

        // 【配置项1：欧路词典：使用更大的屏宽】
        widerScreenEudic: {
            selectedValue: true, // 默认使用更大的屏宽
            title: '欧路词典：使用更大的屏宽',
            type: 'checkbox',
            description: '是否在欧路词典（手机端）中使用更大的屏宽，以在屏幕上显示更多内容。'
        },

        // 【配置项2：欧路词典：移除单词界面词头】
        removeEudicHeader: {
            selectedValue: true, // 默认移除
            title: '欧路词典：移除单词界面词头',
            type: 'checkbox',
            description: '是否移除欧路词典（手机端 + iPad）单词界面上方的词头区域，包括欧路词典自带发音、生词等级等。'
        },

        // 【配置项3：欧路词典：自动折叠学习笔记】
        autoFoldEudicNote: {
            selectedValue: false, // 默认不折叠
            title: '欧路词典：自动折叠学习笔记',
            type: 'checkbox',
            description: '初始状态下，自动将欧路词典（手机端 + iPad）的学习笔记折叠。'
        },

        // 【配置项4：DictTango：使用锚点跳转】
        instantHashNavigation: {
            selectedValue: false, // 默认不使用
            title: 'DictTango：使用锚点跳转',
            type: 'checkbox',
            description: '是否使用锚点跳转（无滚动动画），兼容 DictTango Android 瀑布流。'
        }
    },

    /******** 其他功能 ********/
    otherFeatures: {
        groupTitle: '其他功能',

        // 【配置项1：自动跟随系统深色模式】
        autoDarkMode: {
            selectedValue: true, // 默认启用
            title: '自动跟随系统深色模式',
            type: 'checkbox',
            description: '是否自动根据系统设置启用深色模式。'
        },

        // 【配置项2：启用 Eruda Console】
        enableErudaConsole: {
            selectedValue: false, // 默认不启用
            title: '启用 Eruda Console',
            type: 'checkbox',
            description: '是否启用 Eruda 控制台，用于词典应用调试。'
        }
    }
};
/* ********用户自定义配置区结束******** */

// region Init
$.ajaxSetup({ cache: true });

window.copyToClipboard = function (text) {
    const $temp = $('<textarea>').val(text).appendTo('body').select();
    document.execCommand('copy');
    $temp.remove();
};

if (typeof oaldpeInit === 'undefined') {
    class oaldpeInit {
        // Environment variables
        static USER_AGENT = navigator.userAgent.toLowerCase();

        static SRC_FILE = 'oaldpe.js';
        static SRC_URL = $(`script[src*="${oaldpeInit.SRC_FILE}"]`).attr('src');

        static LOCAL_STORAGE_PREFIX = 'OALDPE_';
        static LOCAL_STORAGE_AVAILABLE = (() => {
            try {
                localStorage.setItem('__test__', '__test__');
                localStorage.removeItem('__test__');
                return true;
            } catch { return false; }
        })();

        // Log
        static LOG_SOURCE = 'oaldpe';
        static LOG_LEVEL = { DEBUG: 'DEBUG', INFO: 'INFO', WARNING: 'WARNING', ERROR: 'ERROR' };

        // Global references
        static scriptExecutionCounter = 0;
        static containerSelector = '.oaldpe';

        // Create a deep copy of the 'oaldpeConfig' object for reset
        static oaldpeConfigDuplicate = JSON.parse(JSON.stringify(oaldpeConfig));

        // Dictionary app
        static isEudic() {
            return oaldpeInit.USER_AGENT.includes('eudic');
        }
        static isGoldenDict() {
            return oaldpeInit.USER_AGENT.includes('goldendict');
        }
        static isPreview() {
            try {
                return window.self !== window.top && parent.document.querySelector('#k_iframe');
            } catch { return false; }
        }

        // Platform detection
        static isMacosIpadSim() {
            return oaldpeInit.USER_AGENT.includes('ipad') && navigator.maxTouchPoints === 0;
        }
        static isMobile() {
            return oaldpeInit.USER_AGENT.includes('android') || oaldpeInit.USER_AGENT.includes('iphone');
        }
        static isMobileOrTablet() {
            return oaldpeInit.USER_AGENT.includes('android') || oaldpeInit.USER_AGENT.includes('iphone') || oaldpeInit.USER_AGENT.includes('ipad');
        }

        // Resolve links
        static resolveFilePath(relativePath) {
            return oaldpeInit.SRC_URL.slice(0, oaldpeInit.SRC_URL.lastIndexOf('/') + 1) + relativePath;
        }
        static replacePlaceholder(template = '', value) {
            return template.replace('placeholder', value);
        }

        // Local storage
        static oaldpeConfigUpdate() {
            if (!oaldpeInit.LOCAL_STORAGE_AVAILABLE) return;

            Object.entries(oaldpeConfig).forEach(([configGroupKey, configGroup]) => {
                Object.entries(configGroup).forEach(([settingItemKey, settingItem]) => {
                    const localStorageKey = oaldpeInit.LOCAL_STORAGE_PREFIX + settingItemKey;
                    const localStorageValue = localStorage.getItem(localStorageKey);

                    if (localStorageValue !== null) {
                        const selectedValue = JSON.parse(localStorageValue);
                        if (settingItem.type === 'dropdown' || settingItem.type === 'checkbox') {
                            oaldpeConfig[configGroupKey][settingItemKey].selectedValue = selectedValue;
                        } else if (settingItem.type === 'nested-checkboxes') {
                            Object.keys(selectedValue).forEach(key => {
                                oaldpeConfig[configGroupKey][settingItemKey].selectedValue[key].value = selectedValue[key];
                            });
                        }
                    }
                });
            });
        }

        static oaldpeConfigEvent() {
            const $configContainer = $('.oaldpe-config');
            if (!$configContainer.length) return;

            // Initial setup
            const $configNavbar = $('<div>', { id: 'oaldpe-config-navbar' }).appendTo($configContainer);
            const $configContent = $('<div>', { id: 'oaldpe-config-content' }).appendTo($configContainer);

            /* Construct configuration panel */
            const $configPanel = $('<div>', { id: 'oaldpe-config-panel' }).appendTo($configContent);
            const $configPanelTitle = $('<div>', { class: 'page-title', text: 'Configuration' }).appendTo($configPanel);

            // Reset button
            $('<span>').addClass('reset-button').appendTo($configPanelTitle).on('click', function () {
                const $resetButton = $(this);

                oaldpeConfig = JSON.parse(JSON.stringify(oaldpeInit.oaldpeConfigDuplicate));
                constructConfigPanel();

                oaldpeInit.clear(() => {
                    $resetButton.addClass('reset-success');
                    setTimeout(() => $resetButton.removeClass('reset-success'), 2000);
                });
            });

            // Print the warning message if local storage is not available
            if (!oaldpeInit.LOCAL_STORAGE_AVAILABLE) {
                const warningMessage = oaldpeInit.createCallout({
                    type: 'danger', title: 'Error',
                    content: [
                        `检测到当前环境不支持通过配置界面设置，请直接修改 ${oaldpeInit.SRC_FILE} 文件中的配置项。`,
                        '推荐使用词典软件：', '(1) 欧路词典 Eudic (全平台)', '(2) GoldenDict-ng (电脑端)'
                    ]
                });
                warningMessage.addClass('local-storage-warning');
                $configPanel.append(warningMessage);
            }

            // Hidden message to show the success of user actions
            const $hiddenMessage = oaldpeInit.createCallout({ type: 'success' });
            $hiddenMessage.addClass('hidden-message');

            const showHiddenMessage = ($container, title = 'success', delay = 2000) => {
                $hiddenMessage.appendTo($container);
                $hiddenMessage.children('.callout-title').text(title);
                $hiddenMessage.fadeIn(function () {
                    setTimeout(() => $hiddenMessage.fadeOut(), delay);
                });
            };

            constructConfigPanel();

            function constructConfigPanel() {
                // Clear up if constructed before
                $configPanel.children('.oaldpe-config-group').remove();

                // Construct the configuration panel based on the 'oaldpeConfig' object
                Object.values(oaldpeConfig).forEach(configGroup => {
                    const $group = $('<ol>', { class: 'oaldpe-config-group' });

                    Object.entries(configGroup).forEach(([settingItemKey, settingItem]) => {
                        if (settingItemKey === 'groupTitle') {
                            $group.append($('<div>', { class: 'group-title', text: configGroup['groupTitle'] }));
                            return;
                        }

                        // Create a UI element for each setting item
                        const $settingItem = $('<li>', { class: 'setting-item', 'data-type': settingItem.type }).appendTo($group);

                        // 1. Main content of the setting item
                        const $configItem = $('<div>', { class: 'config-item' }).appendTo($settingItem);

                        // Title and description
                        const $settingItemInfo = $('<div>', { class: 'setting-item-info' }).appendTo($configItem);
                        $settingItemInfo.append($('<div>', { class: 'setting-item-title', text: settingItem['title'] }));
                        if (settingItem.description) {
                            $settingItemInfo.append($('<div>', { class: 'setting-item-description', text: settingItem['description'] }));
                        }

                        // Create the control element based on the setting type
                        const $settingItemControl = $('<div>', { class: 'setting-item-control' }).appendTo($configItem);
                        if (settingItem.type === 'dropdown') {
                            const $select = $('<select>').appendTo($settingItemControl);
                            settingItem.options.forEach(option => {
                                $select.append($('<option>').val(option.value).text(option.label)
                                    .prop('selected', option.value === settingItem.selectedValue)
                                );
                            });
                            $select.on('change', function () {
                                settingItem.selectedValue = typeof settingItem.selectedValue === 'number' ? parseInt($select.val()) : $select.val();
                                oaldpeInit.setItem(settingItemKey, settingItem, showHiddenMessage($group, '保存成功'));
                            });
                        } else if (settingItem.type === 'checkbox') {
                            const $checkboxContainer = oaldpeInit.createCheckboxContainer({
                                initialState: settingItem.selectedValue, checkboxCallback: $checkbox => {
                                    $checkbox.on('change', function () {
                                        settingItem.selectedValue = $checkbox.prop('checked');
                                        oaldpeInit.setItem(settingItemKey, settingItem, showHiddenMessage($group, '保存成功'));
                                    });
                                }
                            });
                            $checkboxContainer.appendTo($settingItemControl);
                        } else if (settingItem.type === 'nested-checkboxes') {
                            const $nestedContainer = $('<ul>', { class: 'nested-checkboxes' }).appendTo($settingItemControl);
                            Object.entries(settingItem.selectedValue).forEach(([key, { value, label }]) => {
                                const $nested = $('<li>', { class: 'nested-item' });
                                const $checkboxContainer = oaldpeInit.createCheckboxContainer({
                                    initialState: value, checkboxCallback: $checkbox => {
                                        $checkbox.on('change', function () {
                                            settingItem.selectedValue[key].value = $checkbox.prop('checked');
                                            oaldpeInit.setItem(settingItemKey, settingItem, showHiddenMessage($group, '保存成功'));
                                        });
                                    }
                                });
                                $nested.append($('<span>', { class: 'nested-item-label', text: label })).append($checkboxContainer);
                                $nested.appendTo($nestedContainer);
                            });
                        }

                        // 2. Callout
                        settingItem.callout?.forEach(calloutConfig => {
                            $settingItem.append(oaldpeInit.createCallout(calloutConfig));
                        });
                    });

                    $configPanel.append($group);
                });
            }

            /* Construct help center */
            const $configHelp = $configContainer.children('#oaldpe-config-help').appendTo($configContent);
            $configHelp.prepend($('<div>', { class: 'page-title', text: 'HELP' }));

            // Post processing
            $configHelp.find('a.external-link').each(function () {
                const $externalLink = $(this);
                if (oaldpeInit.isEudic()) {
                    $externalLink.data('text', $externalLink.data('text').replace('eudic-', ''));
                    $externalLink.data('href', $externalLink.data('href').replace('eudic-', ''));
                }
                $externalLink.text($externalLink.data('text'));
                $externalLink.css('cursor', 'pointer').on('click', function () {
                    copyToClipboard($externalLink.data('href'));
                    showHiddenMessage($externalLink.closest('.block-wrapper, .callout'), '已复制链接');
                });
            });

            // Page Navigation
            $configNavbar.append([
                $('<span>', { class: 'nav-item', text: 'Configuration', 'data-target': 'oaldpe-config-panel' }),
                $('<span>', { class: 'nav-item', text: 'Help', 'data-target': 'oaldpe-config-help' })
            ]);
            $configNavbar.children().first().addClass('active');
            $configNavbar.on('click', 'span', function () {
                const $clickedSpan = $(this);
                if ($clickedSpan.hasClass('active')) return;

                $clickedSpan.addClass('active');
                $clickedSpan.siblings().removeClass('active');

                const animationDuration = 100;
                const $target = $configContent.children(`#${$clickedSpan.data('target')}`);
                $target.siblings().fadeOut(animationDuration, function () {
                    $target.fadeIn(animationDuration);
                });
            });
        }

        // Helper functions
        static log(level, message) {
            console.log(`[${oaldpeInit.LOG_SOURCE}]: [${level}] ${message}`);
        }

        static clear(callback) {
            if (!oaldpeInit.LOCAL_STORAGE_AVAILABLE) return;

            Object.keys(localStorage).forEach(key => {
                if (key.startsWith(oaldpeInit.LOCAL_STORAGE_PREFIX)) {
                    localStorage.removeItem(key);
                }
            });

            if (typeof callback === 'function') callback();
        }

        static setItem(settingItemKey, settingItem, callback) {
            if (!oaldpeInit.LOCAL_STORAGE_AVAILABLE) return;

            const localStoragekey = oaldpeInit.LOCAL_STORAGE_PREFIX + settingItemKey;
            const localStorageValue = settingItem.type === 'nested-checkboxes'
                ? JSON.stringify(Object.fromEntries(Object.entries(settingItem.selectedValue).map(([key, { value }]) => [key, value])))
                : JSON.stringify(settingItem.selectedValue);

            localStorage.setItem(localStoragekey, localStorageValue);

            if (typeof callback === 'function') callback();
        }

        static async loadScript(localPath, cdnUrl, globalVar, callback) {
            if (typeof window[globalVar] === 'undefined') {
                const resolvedLocalPath = oaldpeInit.resolveFilePath(localPath);
                try {
                    await $.getScript(resolvedLocalPath);
                    if (typeof window[globalVar] === 'undefined') throw new Error();
                } catch (error) {
                    oaldpeInit.log(oaldpeInit.LOG_LEVEL.ERROR, `Failed to load the local script '${resolvedLocalPath}', attempting to load from the CDN: ${cdnUrl}`);
                    await $.getScript(cdnUrl);
                }

                if (typeof callback === 'function') callback();
            }
        }

        static createCheckboxContainer(checkboxConfig) {
            const $checkboxContainer = $('<span>', { class: 'checkbox-container' });
            $checkboxContainer.attr('option-false', checkboxConfig.options?.[0] || 'Off');
            $checkboxContainer.attr('option-true', checkboxConfig.options?.[1] || 'On');

            const $checkbox = $('<input>', { type: 'checkbox' });
            $checkboxContainer.append($checkbox);

            // Initialize the checkbox state
            const isChecked = checkboxConfig.initialState || false;
            $checkbox.prop('checked', isChecked);

            // Initialize the container class
            $checkboxContainer.toggleClass('checked', isChecked);

            // Update the container class when the checkbox changes
            $checkbox.on('change', function () {
                $checkboxContainer.toggleClass('checked', $checkbox.prop('checked'));
            });

            // Execute the callback function if it exists
            if (typeof checkboxConfig.checkboxCallback === 'function') {
                checkboxConfig.checkboxCallback($checkbox);
            }

            // Assign the ID attribute to locate the checkbox
            if (checkboxConfig.id) {
                $checkbox.attr('id', checkboxConfig.id);
            }

            return $checkboxContainer;
        }

        static createCallout(calloutConfig) {
            const $callout = $('<div>', { class: 'callout', 'data-callout': calloutConfig.type });
            $callout.append($('<div>', {
                class: 'callout-title',
                text: calloutConfig.title || calloutConfig.type
            }));

            if (calloutConfig.content) {
                const $calloutContent = $('<div>', { class: 'callout-content' }).appendTo($callout);

                [].concat(calloutConfig.content).forEach(item => {
                    if (typeof item === 'string') {
                        $calloutContent.append($('<p>', { text: item }));
                    } else if (item instanceof jQuery) {
                        $calloutContent.append(item);
                    }
                });
            } else { $callout.addClass('callout-empty'); }

            return $callout;
        }

        // region 欧路词典相关
        static Eudic_widerScreen() {
            if (oaldpeInit.isMobile() && oaldpeConfig.dictionaryAppRelated.widerScreenEudic.selectedValue) {
                oaldpeInit.$parent.css('padding', '5px 8px 5px 5px');
            }
        }

        static Eudic_removeHeader() {
            if (oaldpeInit.isMobileOrTablet() && oaldpeConfig.dictionaryAppRelated.removeEudicHeader.selectedValue) {
                const $wordInfoHead = $('#wordInfoHead');
                $wordInfoHead.remove();
            }
        }

        static Eudic_customNote_autoFold() {
            if (oaldpeInit.isMobileOrTablet() && oaldpeConfig.dictionaryAppRelated.autoFoldEudicNote.selectedValue) {
                const $expHead = $('#expCustomNote .expHead');
                $expHead.trigger('click');
            }
        }

        static Eudic_customNote_modify() {
            const $expCustomNote = $('#expCustomNote');
            const $customeNoteText = $expCustomNote.find('#customeNoteText');
            try {
                window.noteDataArray = JSON.parse($customeNoteText.text());
            } catch { return; }
            $customeNoteText.empty().append($('<div>').addClass('Hazuki-note'));

            async function constructNotes() {
                await $.getScript(oaldpeInit.resolveFilePath('Hazuki-note/dist/notes.bundle.js'));

                // Move the image container to the inside of the flex container
                const $elementToMove = $expCustomNote.find('#customeNoteImageContainer');
                if ($elementToMove.length) {
                    const $newParent = $('.Hazuki-note .single-note').first();
                    $newParent.prepend($elementToMove);
                }
            }

            constructNotes();

            // Create a copy button to get the 'noteDataArray'
            const $eudicNoteHead = $expCustomNote.find('.eudic_note_head');
            var $copyButton = $('<button>', {
                text: '复制',
                class: 'editNote',
                css: { marginLeft: '10px' },
                click: function () {
                    copyToClipboard(JSON.stringify(noteDataArray));
                }
            });
            $eudicNoteHead.append($copyButton);

            // Remove Eudic '查看公开笔记'
            $expCustomNote.find('.eudicNoteMore').remove();
            $expCustomNote.find('.customeHorizonal').css('margin-bottom', 'unset');
        }

        static Eudic_customNote_observeAdded(callback) {
            const observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    mutation.addedNodes.forEach(function (node) {
                        if (node.nodeType === Node.ELEMENT_NODE && node.id === 'customeNoteText') {
                            callback();
                            observer.disconnect();
                        }
                    });
                });
            });
            observer.observe(document.body, { childList: true, subtree: true });
        }

        // region 其他功能
        static detectDarkModeEnabled() {
            if (!oaldpeConfig.otherFeatures.autoDarkMode.selectedValue) return;

            if (!oaldpeInit.isGoldenDict() && !oaldpeInit.isEudic()) {
                const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                const handleThemeChange = (event) => {
                    const isDarkMode = event.matches;
                    oaldpeInit.$allContainers.attr('data-theme', isDarkMode ? 'dark' : 'light');
                    if (oaldpeInit.isPreview()) $('body').css('background-color', isDarkMode ? 'rgb(26, 26, 26)' : '');
                };

                handleThemeChange(darkModeMediaQuery); // Initial check
                darkModeMediaQuery.addEventListener('change', handleThemeChange); // Listen for changes

                return;
            }

            if (oaldpeInit.isGoldenDict()) {
                oaldpeInit.$allContainers.attr('data-theme', $('html').attr('data-darkreader-scheme') === 'dark' ? 'dark' : 'light');
                return;
            }

            // Delete the Eudic fixed style to prevent conflicts
            oaldpeInit.$parent.children('.eudic_custom_night').remove(); // Initial check
            const observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    mutation.addedNodes.forEach(function (node) {
                        if (node.classList?.contains('eudic_custom_night')) {
                            node.remove();
                        }
                    });
                });
            });
            observer.observe(oaldpeInit.$parent[0], { childList: true });

            // Set the theme based on the body's class
            const setEudicTheme = () => oaldpeInit.$allContainers.attr('data-theme', $('body').is('.black, .night') ? 'dark' : 'light');
            setEudicTheme(); // Initial check
            const attributeObserver = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (mutation.attributeName === 'class') {
                        setEudicTheme();
                    }
                });
            });
            attributeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        }

        // region TTS 相关
        static createEdgeTTS() {
            const ttsConfig = {
                '美音女1': { locale: 'en-US', voice: 'en-US-MichelleNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' },
                '美音女2': { locale: 'en-US', voice: 'en-US-AriaNeural', pitch: '+0Hz', rate: '+20%', volume: '+0%' },
                '美音女3': { locale: 'en-US', voice: 'en-US-AnaNeural', pitch: '+0Hz', rate: '+20%', volume: '+0%' },
                '美音女4': { locale: 'en-US', voice: 'en-US-JennyNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' },
                '美音男1': { locale: 'en-US', voice: 'en-US-ChristopherNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' },
                '美音男2': { locale: 'en-US', voice: 'en-US-EricNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' },
                '美音男3': { locale: 'en-US', voice: 'en-US-GuyNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' },
                '美音男4': { locale: 'en-US', voice: 'en-US-RogerNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' },
                '美音男5': { locale: 'en-US', voice: 'en-US-SteffanNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' },
                '英音女1': { locale: 'en-GB', voice: 'en-GB-SoniaNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' },
                '英音女2': { locale: 'en-GB', voice: 'en-GB-MaisieNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' },
                '英音女3': { locale: 'en-GB', voice: 'en-GB-LibbyNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' },
                '英音男1': { locale: 'en-GB', voice: 'en-GB-RyanNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' },
                '英音男2': { locale: 'en-GB', voice: 'en-GB-ThomasNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' }
            };

            const ttsGlobalAudio = new Audio();

            const TRUSTED_CLIENT_TOKEN = '6A5AA1D4EAFF4E9FB37E23D68491D6F4';
            const SYNTH_URL = `wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=${TRUSTED_CLIENT_TOKEN}`;
            const AUDIO_FORMAT = 'audio-24khz-48kbitrate-mono-mp3';

            const BINARY_DELIM = 'Path:audio\r\n';
            const CONTENT_TYPE_JSON = 'Content-Type:application/json\r\nPath:speech.config\r\n\r\n';
            const CONTENT_TYPE_SSML = 'Content-Type:application/ssml+xml\r\nPath:ssml\r\n\r\n';

            let socket = null, requests = {};

            const createSSML = (inputText, { locale, voice, pitch, rate, volume }) =>
                `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${locale}">
                <voice name="${voice}"><prosody pitch="${pitch}" rate="${rate}" volume="${volume}">${inputText}</prosody></voice>
            </speak>`;

            function generateSecMsGecToken() {
                // Get the current time in Windows file time format (100ns intervals since 1601-01-01)
                let ticks = BigInt((Date.now() / 1000 + 11644473600) * 10000000);

                // Round down to the nearest 5 minutes (3,000,000,000 * 100ns = 5 minutes)
                ticks -= ticks % BigInt(3000000000);

                // Create the string to hash by concatenating the ticks and the trusted client token
                const strToHash = `${ticks}${TRUSTED_CLIENT_TOKEN}`;

                // Compute the SHA256 hash
                const hash = CryptoJS.SHA256(strToHash);

                // Return the hexadecimal representation of the hash
                return hash.toString(CryptoJS.enc.Hex).toUpperCase();
            }

            async function ensureSocketReady() {
                if (!socket || socket.readyState === WebSocket.CLOSED) {
                    const reopened = !!socket; // Check if the socket existed before

                    const Sec_MS_GEC = generateSecMsGecToken();
                    const Sec_MS_GEC_VERSION = '1-130.0.2849.68';

                    socket = new WebSocket(`${SYNTH_URL}&Sec-MS-GEC=${Sec_MS_GEC}&Sec-MS-GEC-Version=${Sec_MS_GEC_VERSION}`);
                    socket.onmessage = onSocketMessage;
                    socket.onclose = () => oaldpeInit.log(oaldpeInit.LOG_LEVEL.WARNING, 'WebSocket closed.');
                    socket.onerror = (error) => {
                        console.error('WebSocket error:', error);
                        socket.close();
                    };
                    await new Promise((resolve) => {
                        socket.onopen = () => {
                            oaldpeInit.log(oaldpeInit.LOG_LEVEL.INFO, reopened ? 'WebSocket reopened.' : 'WebSocket opened.');
                            setAudioOutputFormat();
                            resolve();
                        };
                    });
                } else if (socket.readyState === WebSocket.CONNECTING) {
                    await new Promise((resolve) => socket.addEventListener('open', resolve, { once: true }));
                }
            }

            async function sendWhenReady(message) {
                await ensureSocketReady();
                socket.send(message);
            }

            async function setAudioOutputFormat(format = AUDIO_FORMAT) {
                const messagePayload = JSON.stringify({ context: { synthesis: { audio: { outputFormat: format } } } });
                await sendWhenReady(`${CONTENT_TYPE_JSON}${messagePayload}`);
            }

            async function onSocketMessage(event) {
                if (!(event.data instanceof Blob)) return;

                const dataText = await event.data.text();
                const requestId = dataText.match(/X-RequestId:(.*?)\r\n/)[1];
                const request = requests[requestId];
                if (!request) return;

                const arrayBuffer = await event.data.arrayBuffer();
                const dataView = new DataView(arrayBuffer);

                /* Check if the audio fragment is the last one */
                if (dataView.getUint8(0) === 0x00 && dataView.getUint8(1) === 0x67 && dataView.getUint8(2) === 0x58) {
                    if (request.audioDataChunks.length) {
                        const audioBlob = new Blob(request.audioDataChunks, { type: 'audio/mp3' });
                        request.resolve(URL.createObjectURL(audioBlob));
                        delete requests[requestId];
                    }
                } else {
                    const audioStartIndex = dataText.indexOf(BINARY_DELIM) + BINARY_DELIM.length;
                    const audioData = new Blob([arrayBuffer.slice(audioStartIndex)]);
                    request.audioDataChunks.push(audioData);
                }
            }

            async function sendSSMLRequest(inputText, ttsConfigKey) {
                const ssml = createSSML(inputText, ttsConfig[ttsConfigKey]);
                const requestId = uuidv4().replace(/-/g, '');
                const requestMessage = `X-RequestId:${requestId}\r\n${CONTENT_TYPE_SSML}${ssml}`;

                requests[requestId] = { audioDataChunks: [], resolve: null, reject: null };
                await sendWhenReady(requestMessage);

                return new Promise((resolve, reject) => {
                    requests[requestId].resolve = resolve;
                    requests[requestId].reject = reject;
                });
            }

            function uuidv4() {
                return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
            }

            async function playText(inputText, config) {
                try {
                    const audioUrl = await sendSSMLRequest(inputText, config);
                    if (!ttsGlobalAudio.paused) ttsGlobalAudio.pause();
                    ttsGlobalAudio.src = audioUrl;

                    const cleanup = () => URL.revokeObjectURL(audioUrl);
                    ttsGlobalAudio.addEventListener('ended', cleanup, { once: true });
                    ttsGlobalAudio.play();
                } catch (error) {
                    console.error('Failed to play audio:', error);
                }
            }

            return { playText };
        }

        constructor() {
            // Initialization
            oaldpeInit.oaldpeConfigUpdate();
            oaldpeInit.oaldpeConfigEvent();

            const $container = $(oaldpeInit.containerSelector);
            oaldpeInit.entryLinkHrefTemplate = $container.find('.pseudo-footer .entry-link-placeholder').attr('href');

            if (oaldpeInit.isEudic()) {
                oaldpeInit.$ancestor = $container.closest('.explain_wrap_styleless');
                oaldpeInit.$parent = $container.parent('.expDiv');

                oaldpeInit.Eudic_widerScreen();
                oaldpeInit.Eudic_removeHeader();

                $(function () {
                    oaldpeInit.Eudic_customNote_observeAdded(() => {
                        oaldpeInit.Eudic_customNote_autoFold();
                        oaldpeInit.Eudic_customNote_modify();
                    });
                });
            }

            $(function () {
                oaldpeInit.$allContainers = $(oaldpeInit.containerSelector);
                oaldpeInit.detectDarkModeEnabled();
            });

            $(async function () {
                await loadExternalScripts();

                oaldpeInit.log(oaldpeInit.LOG_LEVEL.INFO, 'Initialization completed.');

                main();

                if (oaldpeInit.isEudic() && oaldpeInit.isMacosIpadSim()) {
                    $.getScript(oaldpeInit.resolveFilePath('Hazuki-note/dist/clickToCopy.bundle.js'));
                }
            });
        }
    }

    window.oaldpeInit = oaldpeInit;

    new oaldpeInit();
}

async function loadExternalScripts() {
    if (oaldpeConfig.otherFeatures.enableErudaConsole.selectedValue) {
        await oaldpeInit.loadScript('scripts/eruda', 'https://cdn.jsdelivr.net/npm/eruda', 'eruda', () => {
            eruda.init({
                defaults: {
                    displaySize: 40,
                    theme: 'Atom One Light'
                }
            });
        });
    }

    if (oaldpeConfig.chineseTranslation.showTraditional.selectedValue) {
        await oaldpeInit.loadScript('scripts/full.min.js', 'https://cdn.jsdelivr.net/npm/opencc-js@1.0.5/dist/umd/full.min.js', 'OpenCC');
    }

    if (oaldpeConfig.onlineResources.enableOnlineTTS.selectedValue) {
        await oaldpeInit.loadScript('scripts/crypto-js.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js', 'CryptoJS', () => {
            oaldpeInit.EdgeTTS = oaldpeInit.createEdgeTTS();
        });
    }
}

function main() {
    const OALDPE_PREFIX_WORD_UK = 'https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/';
    const OALDPE_PREFIX_WORD_US = 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/';
    const OALDPE_PREFIX_EXAMPLE = 'https://oxford-x-file.oss-cn-hangzhou.aliyuncs.com/audio/xgs/xgs_audio/';
    const OALDPE_PREFIX_FULL_IMAGE = 'https://www.oxfordlearnersdictionaries.com/us/media/english/fullsize/';
    const OALDPE_PREFIX_THUMB_IMAGE = 'https://www.oxfordlearnersdictionaries.com/us/media/english/thumb/';

    // 词性替换表
    const OALDPE_POS = {
        'noun': 'n.',
        'adjective': 'adj.',
        'adverb': 'adv.',
        'abbreviation': 'abbr.',
        'adverb, adjective': 'adv., adj.',
        'verb': 'v.',
        'phrasal verb': 'phr. v.',
        'exclamation': 'interj.',
        'idiom': 'idiom',
        'conjunction': 'conj.',
        'preposition': 'prep.',
        'modal verb': 'modal v.',
        'combining form': 'comb. form',
        'prefix': 'prefix',
        'linking verb': 'link. v.',
        'suffix': 'suffix',
        'number': 'num.',
        'pronoun': 'pron.',
        'ordinal number': 'ordinal num.',
        'determiner': 'det.',
        'auxiliary verb': 'aux. v.',
        'indefinite article': 'indef. a.',
        'definite article': 'def. a.',
        'infinitive marker': 'inf. marker',
        'symbol': 'symbol',
        'adjective, adverb': 'adj., adv.',
        'adverb, preposition': 'adv., prep.',
        'noun, adjective': 'n., adj.',
        'short form': 'short form',
        'noun, exclamation': 'n., interj.',
        'exclamation, noun': 'interj., n.',
        'determiner, pronoun': 'det., pron.',
        'preposition, adverb': 'prep., adv.',
        'adjective, exclamation': 'adj., interj.',
        'preposition, conjunction, adverb': 'prep., conj., adv.',
        'adjective, adverb, exclamation': 'adj., adv., interj.',
        'adjective, noun': 'adj., n.',
        'adverb, exclamation': 'adv., interj.',
        'noun, determiner': 'n., det.',
        'determiner, pronoun, adverb': 'det., pron., adv.',
        'conjunction, preposition': 'conj., prep.',
        'adverb, pronoun, conjunction': 'adv., pron., conj.',
        'determiner, adjective': 'det., adj.',
        'determiner, ordinal number': 'det., ordinal num.',
        'noun, abbreviation': 'n., abbr.',
        'exclamation, adjective': 'interj., adj.',
        'conjunction, adverb': 'conj., adv.',
        'adjective, pronoun': 'adj., pron.',
        'number, determiner': 'num., det.',
        'noun, verb': 'n., v.',
        'pronoun, determiner': 'pron., det.',
        'preposition, conjunction': 'prep., conj.',
        'exclamation, adverb, pronoun': 'interj., adv., pron.',
        'adverb, conjunction': 'adv., conj.',
        'adverb, noun': 'adv., n.',
    }

    // 语法标签替换表
    const OALDPE_GRAMMAR = {
        '[uncountable]': '[U]',
        '[only before noun]': '[only bf N]',
        '[singular]': '[sing]',
        '[countable]': '[C]',
        '[countable, uncountable]': '[C, U]',
        '[after noun]': '[aft N]',
        '[not before noun]': '[not bf N]',
        '[usually before noun]': '[usu bf N]',
        '[usually singular]': '[usu sing]',
        '[uncountable, countable]': '[U, C]',
        '[intransitive, transitive]': '[I, T]',
        '[usually passive]': '[usu psv]',
        '[plural]': '[pl]',
        '[transitive]': '[T]',
        '[uncountable, singular]': '[U, sing]',
        '[intransitive]': '[I]',
        '[often passive]': '[oft psv]',
        '[not usually before noun]': '[not usu bf N]',
        '[singular, uncountable]': '[sing, U]',
        '[uncountable, plural]': '[U, pl]',
        '[usually plural]': '[usu pl]',
        '[countable, usually plural]': '[C, usu pl]',
        '[uncountable, countable, usually singular]': '[U, C, usu sing]',
        '[transitive, intransitive]': '[T, I]',
        '[intransitive, transitive, often passive]': '[I, T, oft psv]',
        '[transitive, often passive]': '[T, oft psv]',
        '[countable, usually singular]': '[C, usu sing]',
        '[countable + singular or plural verb]': '[C + sing or pl V]',
        '[uncountable + singular or plural verb]': '[U + sing or pl V]',
        '[transitive, usually passive]': '[T, usu psv]',
        '[transitive, often passive, intransitive]': '[T, oft psv, I]',
        '[no passive]': '[no psv]',
        '[countable, usually singular, uncountable]': '[C, usu sing, U]',
        '[countable, usually plural, uncountable]': '[C, usu pl, U]',
        '[plural, singular or plural verb]': '[pl, sing or pl V]',
        '[singular + singular or plural verb]': '[sing + sing or pl V]',
        '[countable, singular, uncountable]': '[C, sing, U]',
        '[intransitive, transitive, no passive]': '[I, T, no psv]',
        '[transitive, no passive]': '[T, no psv]',
        '[uncountable, countable, usually plural]': '[U, C, usu pl]',
        '[plural, uncountable]': '[pl, U]',
        '[countable + singular or plural verb, uncountable]': '[C + sing or pl V, U]',
        '[transitive, intransitive, often passive]': '[T, I, oft psv]',
        '[intransitive, transitive, usually passive]': '[I, T, usu psv]',
        '[transitive, usually passive, intransitive]': '[T, usu psv, I]',
        '[countable, plural]': '[C, pl]',
        '[singular or plural verb]': '[sing or pl V]',
        '[countable, uncountable + singular or plural verb]': '[C, U + sing or pl V]',
        '[uncountable + singular or plural verb, countable]': '[U + sing or pl V, C]',
        '[countable, singular]': '[C, sing]',
        '[uncountable, countable, singular]': '[U, C, sing]',
        '[countable, singular + singular or plural verb]': '[C, sing + sing or pl V]',
        '[singular + singular or plural verb, uncountable]': '[sing + sing or pl V, U]',
        '[transitive, no passive, intransitive]': '[T, no psv, I]',
        '[usually singular, uncountable]': '[usu sing, U]',
        '[transitive, intransitive, usually passive]': '[T, I, usu psv]',
    }

    oaldpeInit.$allContainers.each(function () {
        oaldpeInit.log(oaldpeInit.LOG_LEVEL.INFO, `The script has been executed ${++oaldpeInit.scriptExecutionCounter} times.`);

        const $oaldpe = $(this);

        // region 初始化
        const $entryContainers = $oaldpe.find('.oald-entry-root').filter('.oald');
        const $entryHeaders = $entryContainers.children('.entry').children('.top-container').find('.webtop');

        setupHeadword();

        setupConfigGear();

        setupNavigation();

        function setupHeadword() {
            $entryHeaders.each(function () {
                const $headword = $(this).children('.headword');
                const syllable = $headword.attr('syllable');
                const headword = $headword.attr('headword');

                const toggleSyllable = function () {
                    if (window.getSelection().toString().length > 0) return; // 有文本被选中
                    const newHTML = $headword.text().includes('·')
                        ? $headword.html().replace(syllable, headword)
                        : $headword.html().replace(headword, syllable);
                    $headword.html(newHTML);
                };

                if (syllable) {
                    $headword.css('cursor', 'pointer').on('click', toggleSyllable);

                    if (oaldpeConfig.contentDisplay.showSyllable.selectedValue) {
                        toggleSyllable();
                    }
                }
            });
        }

        function setupConfigGear() {
            const $configGear = $('<div>', { class: 'oaldpe-config-gear' });
            const $configGearHead = $('<div>', { class: 'oaldpe-config-gear__head' })
                .append($('<div>', { class: 'oaldpe-config-gear__head__brand' })
                    .append($('<div>', { class: 'dictname' })
                        .append([
                            $('<span>', { class: 'abbv', text: 'OALD' }),
                            $('<span>', { class: 'ver', text: ' 10th ' }),
                            'edition'
                        ])
                    )
                    .append($('<div>', { class: 'dictarts', text: '—— Artworks from OXFORD' }))
                );
            const $configGearIcon = $('<div>', { class: 'oaldpe-config-gear__icon' });
            const $configGearBody = $('<div>', { class: 'oaldpe-config-gear__body' });
            $configGear.append($configGearHead, $configGearIcon, $configGearBody);

            if (oaldpeInit.isEudic()) {
                const additionalMargin = 200;
                $configGearBody.on('transitionend', function () {
                    if ($configGearBody.height() + additionalMargin > oaldpeInit.$ancestor.height()) {
                        oaldpeInit.$ancestor.css('overflow', 'visible');
                    }
                });
            }

            if ($entryHeaders.length) {
                $entryHeaders.first().prepend($configGear);
            } else {
                const $container = $oaldpe.children('.idm-g');
                $container.first().prepend($configGear);
            }

            const configGroups = [
                {
                    groupTitle: 'Translation',
                    settingItems: [
                        {
                            label: 'Highlight Unofficial',
                            checkboxConfig: {
                                id: 'highlight-unofficial',
                                initialState: oaldpeConfig.chineseTranslation.highlightUnofficial.selectedValue,
                                checkboxCallback: $checkbox => {
                                    // Initial setup
                                    $oaldpe.attr('highlight-unofficial', $checkbox.prop('checked'));

                                    // Listen for changes
                                    $checkbox.on('change', function () {
                                        $oaldpe.attr('highlight-unofficial', $checkbox.prop('checked'));
                                    });
                                }
                            }
                        }
                    ]
                },
                {
                    groupTitle: 'Eudic Related',
                    settingItems: [
                        {
                            label: 'Autofold Custom Note',
                            checkboxConfig: {
                                initialState: oaldpeConfig.dictionaryAppRelated.autoFoldEudicNote.selectedValue,
                                checkboxCallback: $checkbox => {
                                    $checkbox.on('change', function () {
                                        oaldpeConfig.dictionaryAppRelated.autoFoldEudicNote.selectedValue = $checkbox.prop('checked');
                                        oaldpeInit.setItem('autoFoldEudicNote', oaldpeConfig.dictionaryAppRelated.autoFoldEudicNote);
                                    });
                                }
                            }
                        },
                    ]
                },
                {
                    groupTitle: 'Example Pronunciation',
                    settingItems: [
                        {
                            label: 'Online (official)',
                            checkboxConfig: {
                                initialState: oaldpeConfig.onlineResources.officialExPronOpt.selectedValue === 1,
                                checkboxCallback: $checkbox => {
                                    $checkbox.on('change', function () {
                                        // Take effect immediately
                                        $oaldpe.attr('online-example-pron', $checkbox.prop('checked'));

                                        // Update the local storage
                                        oaldpeConfig.onlineResources.officialExPronOpt.selectedValue = $checkbox.prop('checked') ? 1 : 2;
                                        oaldpeInit.setItem('officialExPronOpt', oaldpeConfig.onlineResources.officialExPronOpt);
                                    });
                                }
                            }
                        },
                        {
                            label: 'Current Accent',
                            checkboxConfig: {
                                options: ['NAmE', 'BrE'],
                                initialState: oaldpeConfig.contentDisplay.defaultBritishExPron.selectedValue,
                                checkboxCallback: $checkbox => {
                                    // Initial setup
                                    $oaldpe.attr('pron', $checkbox.prop('checked') ? 'uk' : 'us');

                                    // Listen for changes
                                    $checkbox.on('change', function () {
                                        $oaldpe.attr('pron', $checkbox.prop('checked') ? 'uk' : 'us');
                                    });

                                    // Also toggle the checkbox when clicking the brand
                                    $configGear.find('.oaldpe-config-gear__head__brand').on('click', function () {
                                        $checkbox.prop('checked', !$checkbox.prop('checked')).trigger('change');
                                    });
                                }
                            }
                        },
                        {
                            label: 'Default Accent',
                            checkboxConfig: {
                                options: ['NAmE', 'BrE'],
                                initialState: oaldpeConfig.contentDisplay.defaultBritishExPron.selectedValue,
                                checkboxCallback: $checkbox => {
                                    $checkbox.on('change', function () {
                                        oaldpeConfig.contentDisplay.defaultBritishExPron.selectedValue = $checkbox.prop('checked');
                                        oaldpeInit.setItem('defaultBritishExPron', oaldpeConfig.contentDisplay.defaultBritishExPron);
                                    });
                                }
                            }
                        }
                    ]
                }
            ];

            configGroups.forEach(group => {
                // Check conditions and skip rendering
                if (group.groupTitle === 'Eudic Related' && !(oaldpeInit.isEudic() && oaldpeInit.isMobileOrTablet())) return;
                if (group.groupTitle === 'Example Pronunciation' && (!oaldpeConfig.onlineResources.officialExPronOpt.selectedValue && !oaldpeConfig.onlineResources.enableOnlineTTS.selectedValue)) return;

                const $configGroup = $('<ul>', { class: 'config-group' });
                $configGroup.append($('<div>', { class: 'config-group-title', text: group.groupTitle }));

                group.settingItems.forEach(settingItem => {
                    // Check conditions and skip rendering
                    if (group.groupTitle === 'Example Pronunciation') {
                        if (settingItem.label === 'Online (official)' && !oaldpeConfig.onlineResources.officialExPronOpt.selectedValue) return;
                    }

                    const $settingItem = $('<li>', { class: 'setting-item' });

                    $settingItem.append($('<div>', { class: 'config-item' })
                        .append($('<div>', { class: 'setting-item-info' })
                            .append($('<div>', { class: 'setting-item-title', text: settingItem.label }))
                        )
                        .append($('<div>', { class: 'setting-item-control' })
                            .append(oaldpeInit.createCheckboxContainer(settingItem.checkboxConfig))
                        ));

                    $configGroup.append($settingItem);
                });

                $configGearBody.append($configGroup);
            });

            // Create an entry link that points to the configuration panel ('oaldpeconfig')
            const $configEntryContainer = $('<div>', { class: 'config-entry-container' });
            const $configEntry = $('<a>', {
                class: 'Ref', text: 'Configuration',
                href: oaldpeInit.replacePlaceholder(oaldpeInit.entryLinkHrefTemplate, 'oaldpeconfig')
            });

            $configEntryContainer.append($configEntry);
            $configGearBody.append($configEntryContainer);
        }

        function setupNavigation() {
            const $navbar = $oaldpe.children('.oaldpe-nav');

            if (!$navbar.length) return;

            if (!oaldpeConfig.posNavbar.showNavbar.selectedValue) {
                $entryContainers.addClass('visible');
                $navbar.remove();
                return;
            }

            const $navbarSpan = $navbar.children('span');
            const $spanAll = $navbarSpan.last();

            // Handle navbar clicks
            const $configGear = $oaldpe.find('.oaldpe-config-gear');
            $navbar.on('click', 'span', function () {
                const $clickedSpan = $(this);
                const index = $navbarSpan.index($clickedSpan);

                if ($clickedSpan.hasClass('active')) return;
                $navbarSpan.removeClass('active').eq(index).addClass('active');

                if ($clickedSpan.is($spanAll)) {
                    $entryContainers.addClass('visible');
                    $entryHeaders.first().prepend($configGear);
                } else {
                    $entryContainers.removeClass('visible').eq(index).addClass('visible');
                    $entryHeaders.eq(index).prepend($configGear);
                }
            });

            if (oaldpeConfig.posNavbar.selectNavbarAll.selectedValue) {
                $spanAll.trigger('click');
            }
        }

        // region 全局选择器
        const $sense = $oaldpe.find('li.sense');
        const senseExpandSelector = '.examples, .collapse, .un, .xrefs, .topic-g';

        const senseMapping = $sense.map(function () {
            const $this = $(this);
            const $iteration = $this.children('.iteration');
            const $senseExpand = $iteration.siblings(senseExpandSelector);
            const $senseDefinition = $iteration.siblings().not($senseExpand);

            return {
                $sense: $this,
                $iteration: $iteration,
                $senseExpand: $senseExpand,
                $senseDefinition: $senseDefinition
            };
        }).get();

        const $allSenseExpand = $(senseMapping.map(mapping => mapping.$senseExpand.get()).flat());
        const $allSenseDefinition = $(senseMapping.map(mapping => mapping.$senseDefinition.get()).flat());

        const $chn = $oaldpe.find('chn');
        const $allExample = $oaldpe.find('.examples > li');
        const $exampleChn = $allExample.find('chn'); // 例句中文
        const $definitionChn = $allSenseDefinition.find('chn'); // 释义中文

        // 翻译来源标签
        const sourceDescription = {
            'ai': 'Google 机翻',
            'oald': '原双解版翻译',
            'leon': 'leon406 翻译'
        };

        // 是否存在非官方翻译（除 AI 机翻外）
        var hasUnofficialTranslation = false;

        const chnMapping = $chn.map(function () {
            const $this = $(this);
            const $target = $this.children().length ? $this.children().first() : $this;

            if ($this.children().length) {
                $this.attr('data-source', $target.prop("tagName").toLowerCase());
                $this.attr('title', sourceDescription[$this.data('source')]);

                if ($this.data('source') !== 'ai') {
                    hasUnofficialTranslation = true;
                }

                if ($this.is($exampleChn) && $this.data('source') !== 'ai') {
                    $this.append($('<span>', { class: 'question-circle', text: '?' }));
                }
            }

            return { $chn: $this, $target: $target }
        }).get();

        // TODO: 除释义中文和例句中文外，特殊处理
        $oaldpe.find('.un[un="help"] unx chn').each(function () {
            const $this = $(this);
            if ($this.data('source') === 'oald' || $this.data('source') === 'leon') {
                $this.append($('<span>', { class: 'question-circle', text: '?' }));
            }
        });

        if (!hasUnofficialTranslation) {
            const $checkbox = $oaldpe.find('#highlight-unofficial');
            $checkbox.prop('disabled', true);
            $checkbox.parent().addClass('disabled');
        }

        const $allChnTarget = $(chnMapping.map(mapping => mapping.$target.get()).flat());

        // region 中文翻译相关
        fnExamplesChineseBeAlone();

        setImgAttributes();

        fnShowTranslation();

        fnShowTraditional();

        fnTouchToTranslate();

        replaceFullWidthCharsInChn();

        function fnExamplesChineseBeAlone() {
            if (!oaldpeConfig.contentDisplay.examplesChineseBeAlone.selectedValue) {
                $exampleChn.css('display', 'inline');
                $exampleChn.parent().css('margin-left', '4px');
            }
        }

        function setImgAttributes() {
            $oaldpe.find('.fullsize, .thumb').each(function () {
                const $img = $(this);
                const src = $img.data('src');
                const [baseName, extension] = src.split('.');

                $img.attr({
                    'data-root': $img.attr('src'),
                    'data-simplified': $img.attr('src').replace(src, `simplified/${baseName}_simplified.${extension}`),
                    'data-traditional': $img.attr('src').replace(src, `traditional/${baseName}_traditional.${extension}`)
                });
            });
        }

        function fnShowTranslation() {
            const option = oaldpeConfig.chineseTranslation.showTranslation.selectedValue;
            (option === 0) && $chn.hide();    // 全部隐藏
            // (option === 1) && $chn.show(); // 全部显示
            (option === 2) && $exampleChn.hide();              // 仅隐藏例句中文
            (option === 3) && $chn.not($exampleChn).hide();    // 仅显示例句中文
            (option === 4) && $definitionChn.hide();           // 仅隐藏释义中文
            (option === 5) && $chn.not($definitionChn).hide(); // 仅显示释义中文

            fnImgTranslationOpt();
        }

        function chineseToggle() {
            // Flip the selected value
            oaldpeConfig.chineseTranslation.showTranslation.selectedValue = oaldpeConfig.chineseTranslation.showTranslation.selectedValue === 0 ? 1 : 0;

            const option = oaldpeConfig.chineseTranslation.showTranslation.selectedValue;
            (option === 0) && $chn.fadeOut('fast'); // 全部隐藏
            (option === 1) && $chn.fadeIn('fast');  // 全部显示

            if (!oaldpeConfig.onlineResources.onlineImage.selectedValue) {
                fnImgTranslationOpt();
            }
        }

        function fnImgTranslationOpt() {
            // 图片翻译：0-不使用翻译 1-简体中文翻译 2-港版繁体翻译 3-自动选择
            const option = oaldpeConfig.chineseTranslation.imgTranslationOpt.selectedValue === 3
                ? (oaldpeConfig.chineseTranslation.showTranslation.selectedValue ? (oaldpeConfig.chineseTranslation.showTraditional.selectedValue ? 2 : 1) : 0)
                : oaldpeConfig.chineseTranslation.imgTranslationOpt.selectedValue;

            $oaldpe.find('.fullsize, .thumb').each(function () {
                const $img = $(this);
                $img.attr('src', [$img.data('root'), $img.data('simplified'), $img.data('traditional')][option]);
            });
        }

        async function fnShowTraditional() {
            if (oaldpeConfig.chineseTranslation.showTraditional.selectedValue) {
                const zhConvertLang = ['hk', 'tw', 'twp'][oaldpeConfig.chineseTranslation.showTraditional.selectedValue - 1];
                const converter = OpenCC.Converter({ from: 'cn', to: zhConvertLang });

                $allChnTarget.each(function () {
                    const $target = $(this);
                    $target.text(converter($target.text()));
                });
            }
        }

        function fnTouchToTranslate() {
            if (!oaldpeConfig.chineseTranslation.touchToTranslate.selectedValue) return;

            // 释义中文
            senseMapping.forEach(({ $sense, $senseDefinition }) => {
                $sense.on('click', function (event) {
                    event.stopPropagation();
                    if ($(event.target).is('a.sound, .phon')) return;
                    const $definitionChn = $senseDefinition.find('chn');
                    $definitionChn.fadeToggle('fast');
                });
            });

            // 例句中文
            $allExample.on('click', function (event) {
                event.stopPropagation();
                if ($(event.target).is('a.sound')) return;
                const $example = $(this);
                const $labelChn = $example.children('.labels').find('chn');
                const $exampleChn = $example.find('.x, .unx, .unx + undt').find('chn');
                oaldpeConfig.contentDisplay.examplesChineseBeAlone.selectedValue ? $exampleChn.slideToggle('fast') : $exampleChn.fadeToggle('fast');
                $labelChn.fadeToggle('fast');
            });

            // 词头部分标签
            $oaldpe.find('.webtop').children('.inflections, .variants, .labels, .use').on('click', function (event) {
                if ($(event.target).is('a.sound, .phon')) return;
                const $chn = $(this).find('chn');
                $chn.fadeToggle('fast');
            });

            // 释义 Shortcut
            $oaldpe.find('.shcut-g').on('click', function () {
                const $shcut = $(this).children('h2.shcut');
                const $chn = $shcut.find('chn');
                $chn.fadeToggle('fast');
            });

            /* 折叠块相关 */
            $oaldpe.find('.collapse .unbox .body, .un').on('click', function (event) { // 全局点击
                event.stopPropagation();
                if ($(event.target).is('a.sound, .phon')) return;
                const $chn = $(this).find('chn');
                $chn.is(':visible') ? $chn.fadeOut('fast') : $chn.fadeIn('fast');
            });

            $oaldpe.find( // 折叠块标题
                '.collapse .unbox .box_title, ' +
                '.collapse .unbox .body .unbox'
            ).on('click', function (event) {
                event.stopPropagation();
                const $chn = $(this).find('chn');
                $chn.fadeToggle('fast');
            });

            $oaldpe.find( // 折叠块中文
                '.collapse .unbox .body > .p, ' +
                '.collapse .unbox .body > .deflist > .defpara, ' +
                '.collapse .unbox .body > ul.bullet > li'
            ).on('click', function (event) {
                event.stopPropagation();
                const $chn = $(this).children('undt, ubx').find('chn');
                $chn.fadeToggle('fast');
            });
        }

        function replaceFullWidthCharsInChn() {
            const replacements = { '／': '/' };

            $allChnTarget.each(function () {
                const $target = $(this);
                $target.text($target.text().replace(/／/g, replacements['／']));
            });
        }

        // region 发音，图片显示
        const globalAudio = new Audio();

        setupWordPron();

        setupImage();

        setupExamplePron();

        setupExamplePronTTS();

        function getOnlineWordPronUrl(src) {
            const name = src.split('/').pop();
            const prefix = name.indexOf('_gb_') > -1 ? OALDPE_PREFIX_WORD_UK : OALDPE_PREFIX_WORD_US;
            return `${prefix}${name.slice(0, 1)}/${name.slice(0, 3)}/${name.slice(0, 5)}/${name}`;
        }

        function getOnlineImageUrl(src) {
            const filename = src.split('/').pop();
            const name = filename.replace(/^(fullsize|thumb)_/g, '')
            const namePath = name.split('.')[0].padEnd(5, '_');
            const prefix = filename.split('_')[0] === 'fullsize' ? OALDPE_PREFIX_FULL_IMAGE : OALDPE_PREFIX_THUMB_IMAGE;
            return `${prefix}${namePath.slice(0, 1)}/${namePath.slice(0, 3)}/${namePath.slice(0, 5)}/${name}`;
        }

        function getOnlineExamplePronUrl(src) {
            const name = src.split('/').pop();
            const prefix = OALDPE_PREFIX_EXAMPLE;
            return `${prefix}${name.replace('#', '%23').replace('.mp3', '.wav')}`;
        }

        function setupWordPron() {
            $oaldpe.find('a.sound').not('.app, .app-ext').each(function () {
                const $audio = $(this);
                const $phon = $audio.next('.phon');
                $phon.css('cursor', 'pointer').on('click', () => $audio[0].click());

                if (oaldpeConfig.onlineResources.onlineWordPron.selectedValue) {
                    $audio.attr('data-href', getOnlineWordPronUrl($audio.attr('href')));
                    $audio.on('click', function (event) {
                        event.stopPropagation();
                        event.preventDefault();
                        globalAudio.pause();
                        globalAudio.src = $audio.data('href');
                        globalAudio.play();
                    });
                }
            });
        }

        function setupImage() {
            $oaldpe.find('div[id="ox-enlarge"]').each(function () {
                const $imgContainer = $(this);

                $imgContainer.find('.fullsize, .thumb').each(function () {
                    const $img = $(this);
                    if (oaldpeConfig.onlineResources.onlineImage.selectedValue) {
                        $img.attr('src', getOnlineImageUrl($img.data('src')));
                    }
                });

                $imgContainer.on('click', function (event) {
                    event.stopPropagation();
                    $imgContainer.toggleClass('enlarged');
                });
            });
        }

        function setupExamplePron() {
            // 不启用官方例句发音
            if (!oaldpeConfig.onlineResources.officialExPronOpt.selectedValue) {
                $oaldpe.find('a.sound').filter('.app, .app-ext').remove();
                return;
            }

            // 启用官方例句在线发音
            if (oaldpeConfig.onlineResources.officialExPronOpt.selectedValue === 1) {
                $oaldpe.attr('online-example-pron', 'true');
            }

            // 删除无在线发音的官方例句发音
            if (oaldpeConfig.onlineResources.removeNoOnlineExPron.selectedValue) {
                $oaldpe.find('a.sound').filter('.app-ext').remove();
            }

            $oaldpe.find('a.sound').filter('.app, .app-ext').each(function () {
                const $audio = $(this);

                if ($audio.closest('.examples').length) {
                    const $example = $audio.closest('li');
                    if ($audio.is('.pron-uk')) $example.attr('pron-uk', 'true');
                    if ($audio.is('.pron-us')) $example.attr('pron-us', 'true');
                }

                if (!$audio.is('.app-ext')) {
                    $audio.attr('data-href', getOnlineExamplePronUrl($audio.attr('href')));
                    $audio.on('click', function (event) {
                        const online = $oaldpe.attr('online-example-pron') === 'true';

                        if (online) {
                            event.stopPropagation();
                            event.preventDefault();
                            globalAudio.pause();

                            oaldpeInit.log(oaldpeInit.LOG_LEVEL.INFO, `(online) audio: ${$audio.data('href')}`);
                            globalAudio.src = $audio.data('href');
                            globalAudio.play();
                        }
                    });
                }
            });
        }

        function setupExamplePronTTS() {
            if (!oaldpeConfig.onlineResources.enableOnlineTTS.selectedValue) return;

            $allExample.each(function () {
                const $example = $(this);
                const $audioContainer = $example.find('.x, .unx');

                if (!$audioContainer.length) return;

                const $pron_uk = $audioContainer.find('.pron-uk');
                const $pron_us = $audioContainer.find('.pron-us');

                function createAudioElement(className, ttsConfigKey) {
                    const $audio = $('<a>', { class: `sound ${className} tts` }).appendTo($audioContainer);
                    $audio.on('click', (event) => {
                        event.stopPropagation();
                        event.preventDefault();

                        let inputText = $audioContainer.clone().find('.gloss, chn, script').remove().end().text()
                            .replace(/somebody\/something/g, 'somebody or something')
                            .replace(/&/g, 'and').replace(/\u200B/g, '');

                        const match = inputText.match(/\b(\w+(?:\/\w+)+)\b/);
                        if (match) inputText = match[0].split('/').map(word => inputText.replace(match[0], word)).join('\nor ');

                        oaldpeInit.EdgeTTS.playText(inputText, ttsConfigKey);
                    });
                }

                if (!$pron_uk.length) {
                    createAudioElement('pron-uk', oaldpeConfig.onlineResources.britishTTS.selectedValue);
                    $example.attr('pron-uk', 'true');
                }

                if (!$pron_us.length) {
                    createAudioElement('pron-us', oaldpeConfig.onlineResources.americanTTS.selectedValue);
                    $example.attr('pron-us', 'true');
                }
            });
        }

        // region 内容显示
        fnSimplifyPos();

        fnSimplifyGrammar();

        fnSimplifySthSb();

        fnUsePlaceholder();

        fnPhrasesAddUnderline();

        function fnSimplifyPos() {
            if (oaldpeConfig.contentSimplification.simplifyPos.selectedValue) {
                $oaldpe.find('.pos').each(function () {
                    const $this = $(this);
                    const originalText = $this.text();
                    $this.text(OALDPE_POS[originalText]);
                    $this.attr('title', originalText);
                });
            }
        }

        function fnSimplifyGrammar() {
            if (oaldpeConfig.contentSimplification.simplifyGrammar.selectedValue) {
                $oaldpe.find('.grammar').each(function () {
                    const $this = $(this);
                    const originalText = $this.text();
                    $this.text(OALDPE_GRAMMAR[originalText]);
                    $this.attr('title', originalText);
                });
            }
        }

        function fnSimplifySthSb() {
            if (oaldpeConfig.contentSimplification.simplifySthSb.selectedValue) {
                const replacements = { 'something': 'sth.', 'somebody': 'sb.' };

                $oaldpe.find('.cf, .idm').contents().filter((_, node) => node.nodeType === Node.TEXT_NODE).each(function () {
                    this.nodeValue = this.nodeValue.replace(/something|somebody/g, match => replacements[match]);
                });
            }
        }

        function fnUsePlaceholder() {
            if (oaldpeConfig.contentSimplification.usePlaceholder.selectedValue) {
                $entryContainers.each(function () {
                    const $entryContainer = $(this);
                    const $entryHeader = $entryContainer.children('.entry').children('.top-container').find('.webtop');
                    const headword = $entryHeader.children('.headword').text().replace(/·/g, '');
                    $entryContainer.find('.cf').contents().filter((_, node) => node.nodeType === Node.TEXT_NODE).each(function () {
                        this.nodeValue = this.nodeValue.replace(headword, '~');
                    });
                });
            }
        }

        function fnPhrasesAddUnderline() {
            if (oaldpeConfig.contentDisplay.phrasesAddUnderline.selectedValue) {
                $oaldpe.find('.cf').addClass('underline');
            }
        }

        // region 折叠控制
        setupShcutFold();

        setupSenseFold();

        setupUnboxFold();

        setupPhraseSections();

        initCollapse();

        function setupShcutFold() {
            $oaldpe.find('h2.shcut').on('click', function (event) {
                event.stopPropagation();
                const $shcut = $(this);
                $shcut.parent('.shcut-g').toggleClass('folded');
                $shcut.siblings('li.sense').slideToggle('fast');
            });
        }

        function setupSenseFold() {
            senseMapping.forEach(({ $iteration, $senseExpand }) => {
                if (!$senseExpand.length) return;
                $iteration.css('cursor', 'pointer').addClass('clickable').on('click', function (event) {
                    event.stopPropagation();
                    $iteration.toggleClass('folded');
                    $senseExpand.slideToggle('fast');
                });

                if (!oaldpeConfig.collapseControl.unfoldSense.selectedValue) {
                    $iteration.addClass('folded');
                    $senseExpand.hide();
                }
            });

            if (!oaldpeConfig.collapseControl.unfoldSense.selectedValue) {
                $oaldpe.attr('concise', 'true');
            }

            $oaldpe.find('.idm, .pv').each(function () {
                const $heading = $(this);
                const $container = $heading.closest('.idm-g, .pv-g');
                const $iteration = $container.find('.iteration').filter('.clickable');
                $heading.on('click', () => ($iteration.filter('.folded').length ? $iteration.filter('.folded') : $iteration).trigger('click'));
            });
        }

        function setupUnboxFold() {
            $oaldpe.find('.collapse .unbox .box_title').each(function () {
                const $boxTitle = $(this);
                const $content = $boxTitle.next();
                const $unbox = $boxTitle.parent();

                $boxTitle.on('click', function (event) {
                    event.stopPropagation();
                    $unbox.hasClass('is-active')
                        ? $content.css('display', 'block').slideUp(300)
                        : $content.css('display', 'block').hide().slideDown(300);
                    $unbox.toggleClass('is-active');
                });

                if (oaldpeConfig.collapseControl.unfoldUnbox.selectedValue || oaldpeConfig.collapseControl.autoUnfoldUnbox.selectedValue[$unbox.attr('unbox')]?.value) {
                    $content.css('display', 'block');
                    $unbox.addClass('is-active');

                    if (oaldpeConfig.chineseTranslation.touchToTranslate.selectedValue) { // Consistent with touchToTranslate
                        $boxTitle.find('chn').show();
                    }
                }
            });
        }

        function setupPhraseSections() {
            function scrollToTarget($target, offset = 100, complete = () => { }) {
                $('html, body').animate({
                    scrollTop: $target.offset().top - offset
                }, 500, complete);
            }

            $oaldpe.find('.idioms, .phrasal_verb_links').each(function () {
                const $section = $(this);
                const $heading = $section.is('.idioms') ? $section.children('.idioms_heading') : $section.children('.unbox');
                const $content = $section.children().not($heading);
                const $jumpLink = $section.closest('.entry').find(`.jumplink[name="${$heading.text()}"]`).parent('a.Ref');
                const $backLink = $heading.children('.jumplink_back');

                $heading.on('click', function (event) {
                    if ($(event.target).is('.jumplink_back')) return;
                    $section.hasClass('expanded')
                        ? $content.css('display', 'block').fadeOut('fast')
                        : $content.css('display', 'block').hide().fadeIn('fast');
                    $section.toggleClass('expanded');
                });

                if (oaldpeConfig.collapseControl.unfoldPhraseSections.selectedValue) {
                    $content.css('display', 'block');
                    $section.addClass('expanded');
                }

                $jumpLink.on('click', function (event) {
                    const callback = () => {
                        if (oaldpeConfig.collapseControl.jumpsUnfold.selectedValue && !$section.hasClass('expanded')) {
                            $heading.trigger('click');
                        }
                    };

                    if (oaldpeConfig.dictionaryAppRelated.instantHashNavigation.selectedValue) {
                        setTimeout(callback, 500)
                        return;
                    }

                    event.preventDefault();
                    scrollToTarget($section, undefined, callback);
                });

                $backLink.on('click', function (event) {
                    const callback = () => {
                        if (oaldpeConfig.collapseControl.leavesFold.selectedValue && $section.hasClass('expanded')) {
                            $heading.trigger('click');
                        }
                    };

                    if (oaldpeConfig.dictionaryAppRelated.instantHashNavigation.selectedValue) {
                        setTimeout(callback, 500)
                        return;
                    }

                    event.preventDefault();
                    scrollToTarget($jumpLink, undefined, callback);
                });
            });
        }

        function initCollapse() {
            const $allIteration = $oaldpe.find('.iteration').filter('.clickable');
            const $shcut = $oaldpe.find('h2.shcut');
            const $boxTitle = $oaldpe.find('.collapse .unbox .box_title');
            const $phraseSectionHeading = $oaldpe.find('.idioms > .idioms_heading, .phrasal_verb_links > .unbox');

            let clickTimer;
            const $gear_icon = $oaldpe.find('.oaldpe-config-gear__icon');

            $gear_icon.on('click', function () {
                clearTimeout(clickTimer);
                clickTimer = setTimeout(chineseToggle, 250);
            });

            $gear_icon.on('dblclick', function () {
                clearTimeout(clickTimer);

                if ($oaldpe.attr('concise') === 'true') {
                    $oaldpe.removeAttr('concise');

                    // 展开所有
                    $allIteration.filter('.folded').trigger('click');
                    $shcut.filter((_, e) => $(e).parent('.shcut-g').hasClass('folded')).trigger('click');
                    $phraseSectionHeading.filter((_, e) => !$(e).parent().hasClass('expanded')).trigger('click');
                } else {
                    $oaldpe.attr('concise', 'true');

                    // 折叠所有
                    $allIteration.not('.folded').trigger('click');
                    $boxTitle.filter((_, e) => $(e).parent('.unbox').hasClass('is-active')).trigger('click');
                    $phraseSectionHeading.filter((_, e) => $(e).parent().hasClass('expanded')).trigger('click');
                }
            });
        }
    });
}

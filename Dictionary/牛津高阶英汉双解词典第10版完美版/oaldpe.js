/* ********用户自定义配置区开始******** */
// 可直接在词典里搜索以下任意词头，进入配置界面，常用配置无需修改此 js 文件。
// 'oaldpeconfig', 'oaldpecfg', 'oaldcfg', 'opcfg', 'oaldconfig', 'opconfig', 'opc'

var oaldpeConfig = {
    /******** 中文翻译相关 ********/
    // 【配置项1：中文翻译选项】（点击 “词性导航” 白色块，或点击 “O10” 小图标，可显示/隐藏中文翻译）
    // 选项（默认为1）：0-全部隐藏，1-全部显示，2-仅隐藏例句中文，3-仅显示例句中文，4-仅隐藏义项中文，5-仅显示义项中文
    showTranslation: 1,

    // 【配置项2：是否使用台湾繁体中文翻译】
    // 选项（默认为false）：false=否，true=是
    showTraditional: false,

    // 【配置项3：是否启用英文点译功能】（单句显示/隐藏中文）
    // 选项（默认为false）：false=否，true=是
    touchToTranslate: false,

    // 【配置项4：是否例句中文独占一行】
    // 选项（默认为true）：false=否，true=是
    examplesChineseBeAlone: true,

    /******** 词性导航栏 ********/
    // 【配置项5：是否显示词性导航栏】
    // 选项（默认为true）：false=不显示，true=显示
    showNavbar: true,

    // 【配置项6：是否选中词性导航 all】
    // 选项（默认为false）：false=否，true=是
    selectNavbarAll: false,

    /******** 单词、例句发音，图片显示 ********/
    // 【配置项8：是否显示音节划分】（点击单词可切换音节划分）
    // 选项（默认为false）：false=不显示，true=显示
    showSyllable: false,

    // 【配置项9：是否启用在线单词发音】（如果为 true，则可删除 oaldpe.1.mdd 文件）
    // 选项（默认为false）：false=否，true=是
    onlineWordPron: false,

    // 【配置项10：是否启用在线图片】（如果为 true，则可删除 oaldpe.2.mdd 文件。注：在线图片无中文翻译）
    // 选项（默认为false）：false=否，true=是
    onlineImage: false,

    // 【配置项11：离线图片翻译选项】（当【是否启用在线图片】设置为 true 时，图片翻译无效）
    // 选项（默认为3）：0-不使用翻译，1-简体中文翻译，2-港版繁体翻译，3-根据配置项【是否显示中文翻译】和配置项【是否使用台湾繁体中文翻译】自动选择
    imgTranslationOpt: 3,

    // 【配置项12：是否默认英音例句发音】（点击 “O10” 小图标中的词典铭牌进行切换）
    // 选项（默认为false）：false=美音，true=英音
    defaultBritishExPron: false,

    // 【配置项13：官方例句发音选项】（如果为 1 或 2，则可删除 oaldpe.3.mdd 文件。注：在线例句发音的音质更高。离线例句发音经过压缩，可作为备用选项）
    // 选项（默认为1）：0-启用官方离线例句发音，1-启用官方在线例句发音，2-不启用官方例句发音
    officialExPronOpt: 1,

    // 【配置项14：无官方例句发音时，是否启用在线 TTS 发音】（需要高版本浏览器内核。发音图标带下划线）
    // 选项（默认为true）：false=否，true=是
    enableOnlineTTS: true,

    // 【配置项15：TTS 英音发音配置】
    // 选项（默认为英音男1）：英音男1，英音男2，英音女1，英音女2，英音女3
    britishTTS: "英音男1",

    // 【配置项16：TTS 美音发音配置】
    // 选项（默认为美音女4）：美音男1，美音男2，美音男3，美音男4，美音男5，美音女1，美音女2，美音女3，美音女4
    americanTTS: "美音女4",

    /******** 内容精简，显示控制 ********/
    // 【配置项17：是否简化词性】（如 verb 简化为 v.）
    // 选项（默认为false）：false=不简化，true=简化
    simplifyPos: false,

    // 【配置项18：是否简化语法】（如 [transitive] 简化为 [t]）
    // 选项（默认为false）：false=不简化，true=简化
    simplifyGrammar: false,

    // 【配置项19：是否简化非例句中的 something/somebody 为 sth./sb.】
    // 选项（默认为true）：false=不简化，true=简化
    simplifySthSb: true,

    // 【配置项20：例句前的固定搭配使用代字号】（如把 take sth with you 替换为 ~ sth with you）
    // 选项（默认为false）：false=不使用，true=使用
    usePlaceholder: false,

    // 【配置项21：给固定搭配添加荧光笔下划线】
    // 选项（默认为false）：false=不添加，true=添加
    phrasesAddUnderline: false,

    // 【配置项22：是否使用普通样式的义项序号】
    // 选项（默认为true）：false=否，true=是
    normalSenseNumber: true,

    /******** 折叠控制 ********/
    // 【配置项23：是否展开义项】
    // 选项（默认为true）：false=否，true=是
    unfoldSense: true,

    // 【配置项24：是否展开折叠块1】（浅蓝色荧光笔，释义分组，如 take - carry/lead 携带；带领）
    // 选项（默认为true）：false=不展开，true=展开
    unfoldBox1: true,

    // 【配置项25：是否展开折叠块2】（浅蓝色折叠区，如 Extra Examples 更多例句）
    // 选项（默认为false）：false=不展开，true=展开
    unfoldBox2: false,

    // 【配置项26：是否展开折叠块3】（习语 Idioms、词组 Phrasal verbs）
    // 选项（默认为true）：false=不展开，true=展开
    unfoldBox3: true,

    // 【配置项27：是否展开折叠块2的子标题栏下的内容】（浅蓝色折叠区的子标题栏）
    // 选项（默认为true）：false=不展开，true=展开
    unfoldBox2Subtitle: true,

    // 【配置项28：点击 Idioms、Phrasal verbs 跳转后，自动展开内容】
    // 选项（默认为false）：false=不展开，true=展开
    jumpsBox3Unfold: false,

    // 【配置项29：点击小火箭返回后，自动折叠内容】
    // 选项（默认为false）：false=不折叠，true=折叠
    leavesBox3Fold: false,

    /******** 欧路词典相关 ********/
    // 【配置项30：是否在手机 Eudic 里使用更大的屏宽】
    // 选项（默认为true）：false=否，true=是
    widerScreenEudic: true,

    // 【配置项31：是否移除 Eudic 单词界面词头】（词典自带发音、生词等级等）
    // 选项（默认为true）：false=不移除，true=移除
    removeEudicHeader: true,

    // 【配置项32：是否自动折叠 Eudic 学习笔记】
    // 选项（默认为false）：false=不自动折叠，true=自动折叠
    autoFoldEudicNote: false,

    /******** 其他功能 ********/
    // 【配置项32：是否自动跟随系统深色模式】
    // 选项（默认为true）：false=否，true=是
    autoDarkMode: true,

    // 【配置项34：是否启用 Eruda Console】（用于词典应用调试）
    // 选项（默认为true）：false=否，true=是
    enableErudaConsole: true,

    /******** 其他自定义配置（仅支持通过此js文件修改） ********/
    // 【配置项36：自动展开折叠块2开关】（浅蓝色折叠区）
    // 选项（默认仅展开词源）：false=不展开，true=展开
    autoUnfoldBox2: {
        "verbforms": false, // 动词形式
        "wordorigin": true, // 词源
        "colloc": false,     // 词语搭配
        "snippet": false,   // 牛津搭配词典
        "wordfinder": false, // 联想词
        "extra_examples": false, // 更多例句
        "cult": false,       // 文化
        "synonyms": false,   // 同义词辨析
        "which_word": false, // 词语辨析
        "homophone": false,  // 同音词
        "more_about": false, // 词语辨析
        "mlt": false,        // 同类词语学习
        "wordfamily": false, // 词族
        "grammar": false,    // 语法说明
        "express": false,    // 情景表达
        "langbank": false,   // 用语库
        "vocab": false,      // 词汇扩充
        "british_american": false,  // 英式 / 美式
        "more_about": false, // 补充说明
    },

    // 【配置项40：是否禁用配置词头】（深蓝词典用户需要禁用，因为不兼容）
    // 选项（默认为false）：false=否，true=是
    disableConfigWord: false,
};
/* ********用户自定义配置区结束******** */

$(function () {
    // avoiding repeated loading
    if ($(".oaldpe #is-oaldpe-loaded").length) {
        return;
    } else {
        $('<div id="is-oaldpe-loaded" style="display: none;"></div>').appendTo('.oaldpe');
    }

    // variable declaration area
    const OALDPE_PREFIX_FULL_IMAGE =  "https://www.oxfordlearnersdictionaries.com/media/english/fullsize/";
    const OALDPE_PREFIX_THUMB_IMAGE = "https://www.oxfordlearnersdictionaries.com/media/english/thumb/";
    const OALDPE_PREFIX_WORD_UK = "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/";
    const OALDPE_PREFIX_WORD_US = "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/";
    const OALDPE_PREFIX_EXAMPLE = "https://oxford-x-file.oss-cn-hangzhou.aliyuncs.com/audio/xgs/xgs_audio/";

    const OALDPE_BRITISH_TTS_OPTION = ["英音男1", "英音男2", "英音女1", "英音女2", "英音女3"];
    const OALDPE_AMERICAN_TTS_OPTION = ["美音男1", "美音男2", "美音男3", "美音男4", "美音男5", "美音女1", "美音女2", "美音女3", "美音女4"];

    const OALDPE_PREFIX_LOCALSTORAGE = "OALDPE_"

    const OALDPE_POS = {
        "noun": "n.",
        "adjective": "adj.",
        "adverb": "adv.",
        "abbreviation": "abbr.",
        "adverb, adjective": "adv., adj.",
        "verb": "v.",
        "phrasal verb": "phrasal v.",
        "exclamation": "interj.",
        "idiom": "idiom",
        "conjunction": "conj.",
        "preposition": "prep.",
        "modal verb": "modal v.",
        "combining form": "combining form",
        "prefix": "prefix",
        "linking verb": "linking v.",
        "suffix": "suffix",
        "number": "num.",
        "pronoun": "pron.",
        "ordinal number": "ordinal num.",
        "determiner": "det.",
        "auxiliary verb": "aux. v.",
        "indefinite article": "indefinite a.",
        "definite article": "definite a.",
        "infinitive marker": "infinitive marker",
        "symbol": "symbol",
        "adjective, adverb": "adj., adv.",
        "adverb, preposition": "adv., prep.",
        "noun, adjective": "n., adj.",
        "short form": "short form",
        "noun, exclamation": "n., interj.",
        "exclamation, noun": "interj., n.",
        "determiner, pronoun": "det., pron.",
        "preposition, adverb": "prep., adv.",
        "adjective, exclamation": "adj., interj.",
        "preposition, conjunction, adverb": "prep., conj., adv.",
        "adjective, adverb, exclamation": "adj., adv., interj.",
        "adjective, noun": "adj., n.",
        "adverb, exclamation": "adv., interj.",
        "noun, determiner": "n., det.",
        "determiner, pronoun, adverb": "det., pron., adv.",
        "conjunction, preposition": "conj., prep.",
        "adverb, pronoun, conjunction": "adv., pron., conj.",
        "determiner, adjective": "det., adj.",
        "determiner, ordinal number": "det., ordinal num.",
        "noun, abbreviation": "n., abbr.",
        "exclamation, adjective": "interj., adj.",
        "conjunction, adverb": "conj., adv.",
        "adjective, pronoun": "adj., pron.",
        "number, determiner": "num., det.",
        "noun, verb": "n., v.",
        "pronoun, determiner": "pron., det.",
        "preposition, conjunction": "prep., conj.",
        "exclamation, adverb, pronoun": "interj., adv., pron.",
        "adverb, conjunction": "adv., conj.",
        "adverb, noun": "adv., n.",
    }
    const OALDPE_GRAMMAR = {
        "[uncountable]": "[U]",
        "[only before noun]": "[only bf N]",
        "[singular]": "[sing]",
        "[countable]": "[C]",
        "[countable, uncountable]": "[C, U]",
        "[after noun]": "[aft N]",
        "[not before noun]": "[not bf N]",
        "[usually before noun]": "[usu bf N]",
        "[usually singular]": "[usu sing]",
        "[uncountable, countable]": "[U, C]",
        "[intransitive, transitive]": "[I, T]",
        "[usually passive]": "[usu psv]",
        "[plural]": "[pl]",
        "[transitive]": "[T]",
        "[uncountable, singular]": "[U, sing]",
        "[intransitive]": "[I]",
        "[often passive]": "[oft psv]",
        "[not usually before noun]": "[not usu bf N]",
        "[singular, uncountable]": "[sing, U]",
        "[uncountable, plural]": "[U, pl]",
        "[usually plural]": "[usu pl]",
        "[countable, usually plural]": "[C, usu pl]",
        "[uncountable, countable, usually singular]": "[U, C, usu sing]",
        "[transitive, intransitive]": "[T, I]",
        "[intransitive, transitive, often passive]": "[I, T, oft psv]",
        "[transitive, often passive]": "[T, oft psv]",
        "[countable, usually singular]": "[C, usu sing]",
        "[countable + singular or plural verb]": "[C + sing or pl V]",
        "[uncountable + singular or plural verb]": "[U + sing or pl V]",
        "[transitive, usually passive]": "[T, usu psv]",
        "[transitive, often passive, intransitive]": "[T, oft psv, I]",
        "[no passive]": "[no psv]",
        "[countable, usually singular, uncountable]": "[C, usu sing, U]",
        "[countable, usually plural, uncountable]": "[C, usu pl, U]",
        "[plural, singular or plural verb]": "[pl, sing or pl V]",
        "[singular + singular or plural verb]": "[sing + sing or pl V]",
        "[countable, singular, uncountable]": "[C, sing, U]",
        "[intransitive, transitive, no passive]": "[I, T, no psv]",
        "[transitive, no passive]": "[T, no psv]",
        "[uncountable, countable, usually plural]": "[U, C, usu pl]",
        "[plural, uncountable]": "[pl, U]",
        "[countable + singular or plural verb, uncountable]": "[C + sing or pl V, U]",
        "[transitive, intransitive, often passive]": "[T, I, oft psv]",
        "[intransitive, transitive, usually passive]": "[I, T, usu psv]",
        "[transitive, usually passive, intransitive]": "[T, usu psv, I]",
        "[countable, plural]": "[C, pl]",
        "[singular or plural verb]": "[sing or pl V]",
        "[countable, uncountable + singular or plural verb]": "[C, U + sing or pl V]",
        "[uncountable + singular or plural verb, countable]": "[U + sing or pl V, C]",
        "[countable, singular]": "[C, sing]",
        "[uncountable, countable, singular]": "[U, C, sing]",
        "[countable, singular + singular or plural verb]": "[C, sing + sing or pl V]",
        "[singular + singular or plural verb, uncountable]": "[sing + sing or pl V, U]",
        "[transitive, no passive, intransitive]": "[T, no psv, I]",
        "[usually singular, uncountable]": "[usu sing, U]",
        "[transitive, intransitive, usually passive]": "[T, I, usu psv]",
    }

    var globalAudio = new Audio();

    var oaldpeConfigDuplicate = Object.assign({}, oaldpeConfig);

    // region 初始化
    updateConfigFromLocalStorage();

    oaldpeConfigEvent();

    fnDisableConfigWord();

    setupConfigGear();

    setupErudaConsole();

    detectDarkModeEnabled();

    function updateConfigFromLocalStorage() {
        if (oaldpeConfig.disableConfigWord) return;

        Object.keys(localStorage).forEach(key => {
            if (!key.startsWith(OALDPE_PREFIX_LOCALSTORAGE)) return;

            const localStorageValue = localStorage.getItem(key);
            const oaldpeConfigKey = key.replace(OALDPE_PREFIX_LOCALSTORAGE, "");

            /* convert from localStorage string to oaldpeConfig type */
            if (oaldpeConfigKey === "britishTTS") {
                oaldpeConfig[oaldpeConfigKey] = OALDPE_BRITISH_TTS_OPTION[parseInt(localStorageValue)];
            } else if (oaldpeConfigKey === "americanTTS") {
                oaldpeConfig[oaldpeConfigKey] = OALDPE_AMERICAN_TTS_OPTION[parseInt(localStorageValue)];
            }

            const oaldpeConfigValue = oaldpeConfig[oaldpeConfigKey];
            if (typeof oaldpeConfigValue === "number") {
                oaldpeConfig[oaldpeConfigKey] = parseInt(localStorageValue);
            } else if (typeof oaldpeConfigValue === "boolean") {
                oaldpeConfig[oaldpeConfigKey] = localStorageValue === "1";
            }
        });
    }

    function updateConfigToUI() {
        if (oaldpeConfig.disableConfigWord) return;

        Object.keys(oaldpeConfig).forEach(oaldpeConfigKey => {
            const oaldpeConfigValue = oaldpeConfig[oaldpeConfigKey];

            let index;

            /* convert from oaldpeConfig type to index number */
            if (oaldpeConfigKey === "britishTTS") {
                index = OALDPE_BRITISH_TTS_OPTION.indexOf(oaldpeConfigValue);
            } else if (oaldpeConfigKey === "americanTTS") {
                index = OALDPE_AMERICAN_TTS_OPTION.indexOf(oaldpeConfigValue);
            }

            if (typeof oaldpeConfigValue === "number") {
                index = oaldpeConfigValue;
            } else if (typeof oaldpeConfigValue === "boolean") {
                index = oaldpeConfigValue ? 1 : 0;
            }

            $(`#oaldpe-config .config-item[id=${oaldpeConfigKey}] .select`).attr("cfg-selected", index); // convert to string automatically
        });
    }

    function addClickEventToConfigOption() {
        $("#oaldpe-config .config-item .select").each(function () {
            const $select = $(this);
            const $options = $select.find(".option");
            const selectedIndex = $select.attr("cfg-selected");

            const fullHeight = $select.height();
            const selectedHeight = $options.eq(selectedIndex).outerHeight();

            $select.click(function (event) {
                event.stopPropagation();
                if ($select.hasClass("unfolded")) {
                    if ($(event.target).hasClass("option")) {
                        $select.attr("cfg-selected", $(event.target).index());
                    }
                    $select.animate({ height: selectedHeight }, {
                        duration: 300,
                        complete: function () {
                            $options.each(function (index) {
                                $(this).toggle(index.toString() === $select.attr("cfg-selected"));
                            });
                        }
                    });
                } else {
                    $options.show();
                    $select.animate({ height: fullHeight }, { duration: 300 });
                }
                $select.toggleClass("unfolded");
            });

            // 初始化选项
            $select.addClass("unfolded").click();

            // 点击其他地方收起
            $(document).click(function (event) {
                if (!$(event.target).closest(".select").length) {
                    $select.filter(".unfolded").click();
                }
            });

            // 高亮选项
            $options.hover(
                function () { $(this).addClass('highlighted'); },
                function () { $(this).removeClass('highlighted'); }
            );
        });
    }

    function oaldpeConfigEvent() {
        if (oaldpeConfig.disableConfigWord || !$("#oaldpe-config").length) return;

        updateConfigToUI(); // 初始化配置

        addClickEventToConfigOption();

        const $select = $("#oaldpe-config .config-item .select");
        const foldConfigOption = () => $select.addClass("unfolded").click();

        $('#oaldpe-config button[type="submit"]').click(function () { // 保存配置
            foldConfigOption();

            $("#oaldpe-config .config-item").each(function () {
                const $this = $(this);
                const id = $this.attr("id");
                const value = $this.find(".select").attr("cfg-selected");
                localStorage.setItem(OALDPE_PREFIX_LOCALSTORAGE + id, value);
            })

            const $this = $(this);
            $this.text("保存配置完毕！");
            setTimeout(function () { $this.text("保存配置"); }, 1000);
        });

        $('#oaldpe-config button[type="reset"]').click(function () { // 重置配置
            foldConfigOption();

            Object.keys(localStorage)
                .filter(key => key.startsWith(OALDPE_PREFIX_LOCALSTORAGE))
                .forEach(key => localStorage.removeItem(key));

            oaldpeConfig = oaldpeConfigDuplicate;
            updateConfigToUI();

            const $this = $(this);
            $this.text("重置配置完毕！");
            setTimeout(function () { $this.text("重置配置"); }, 1000);
        });
    }

    function fnDisableConfigWord() {
        if (oaldpeConfig.disableConfigWord)
            $("#oaldpe-config .head-title").css("color", "red").text("配置词头已被禁用");
    }

    function setupConfigGear() {
        const $oaldpe = $(".oaldpe");
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
            )
            .append($('<div>', { class: 'oaldpe-config-gear__head__icon' }));
        const $configGearBody = $('<div>', { class: 'oaldpe-config-gear__body' });
        const configItems = [
            { label: 'Autofold Eudic Note', prefix: 'autoFoldEudicNote', options: ['on', 'off'] },
            { label: 'Online Example Pron', prefix: 'officialExPronOpt', options: ['on', 'off'] },
            { label: 'Default Example Pron', prefix: 'defaultBritishExPron', options: ['BrE', 'NAmE'] },
            { label: 'Eruda Console', prefix: 'Eruda', options: ['show', 'input', 'hide'] },
        ];

        configItems.forEach(item => {
            if (item.prefix === 'autoFoldEudicNote' && !isEudic()) return;
            if (item.prefix === 'officialExPronOpt' && oaldpeConfig.officialExPronOpt === 2) return;
            if (item.prefix === 'Eruda' && !oaldpeConfig.enableErudaConsole) return;

            const $configGroup = $('<div>', { class: 'config-group' });
            const $label = $('<div>', { class: 'config-group__label', text: item.label });
            const $options = $('<div>', { class: 'config-group__options' });

            item.options.forEach(option => {
                const optionId = `${item.prefix}_${option}`;
                $options.append($('<span>', { id: optionId, text: option }));
            });

            $configGroup.append($label).append($options);
            $configGearBody.append($configGroup);
        });

        $oaldpe.first().prepend($configGear);
        $configGear.append($configGearHead, $configGearBody);

        function handleConfig(prefix, initActiveClass, booleanTrueEquvalent) {
            const $elements = $configGearBody.find(`[id^="${prefix}_"]`);
            const $initActiveElement = $elements.filter(`#${prefix}_${initActiveClass}`);

            $initActiveElement.addClass('active');

            $elements.on('click', function () {
                const $this = $(this);

                $this.addClass('active');
                $this.siblings().removeClass('active');

                const booleanValue = $this.attr('id') === `${prefix}_${booleanTrueEquvalent}`;
                localStorage.setItem(OALDPE_PREFIX_LOCALSTORAGE + prefix, booleanValue ? "1" : "0");

                // Take effect immediately
                if (prefix === 'officialExPronOpt') {
                    $oaldpe.attr('online-example-pron', booleanValue ? "true" : "false");
                }
            });
        }

        // Autofold Eudic Note
        handleConfig('autoFoldEudicNote', oaldpeConfig.autoFoldEudicNote ? 'on' : 'off', 'on');

        // Online Example Pron
        handleConfig('officialExPronOpt', oaldpeConfig.officialExPronOpt === 1 ? 'on' : 'off', 'on');

        // Default Example Pron
        $oaldpe.attr("pron", oaldpeConfig.defaultBritishExPron ? "uk" : "us");
        $configGear.find('.oaldpe-config-gear__head__brand').click(function () {
            const currentPron = $oaldpe.attr('pron');
            $oaldpe.attr('pron', currentPron === 'uk' ? 'us' : 'uk');
        });

        handleConfig('defaultBritishExPron', oaldpeConfig.defaultBritishExPron ? 'BrE' : 'NAmE', 'BrE');
    }

    async function setupErudaConsole() {
        if (!oaldpeConfig.enableErudaConsole) return;
        await $.getScript('https://cdn.jsdelivr.net/npm/eruda');
        eruda.init({
            defaults: {
                displaySize: 40,
                theme: 'Atom One Light'
            }
        });

        $('#Eruda_show').click(() => eruda.show());
        $('#Eruda_hide').click(() => eruda.hide());
        $('#Eruda_input').click(function () {
            eruda.show();
            eruda.show('console');
        });

        $('#eruda')[0].shadowRoot.querySelector('.eruda-entry-btn').style.display = 'none';
    }

    function detectDarkModeEnabled() {
        if (!oaldpeConfig.autoDarkMode) return;

        const $oaldpe = $(".oaldpe");
        if (!$oaldpe.length) return;

        if (!isGoldenDict() && !isEudic()) {
            const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleThemeChange = (event) => {
                const isDarkMode = event.matches;
                $oaldpe.attr('data-theme', isDarkMode ? 'dark' : 'light');
                if (isPreview()) $('body').css('background-color', isDarkMode ? 'rgb(26, 26, 26)' : '');
            };

            handleThemeChange(darkModeMediaQuery); // Initial check
            darkModeMediaQuery.addEventListener('change', handleThemeChange); // Listen for changes

            return;
        }

        if (isGoldenDict()) {
            $oaldpe.attr('data-theme', $('html').attr('data-darkreader-scheme') === 'dark' ? 'dark' : 'light');
            return;
        }

        // Delete the Eudic fixed style to prevent conflicts
        $oaldpe.parent().find('.eudic_custom_night').remove(); // Initial check
        if (!$oaldpe.parent().attr('observer-attached')) {
            new MutationObserver((mutationsList) => {
                mutationsList.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.classList?.contains('eudic_custom_night')) node.remove();
                    });
                });
            }).observe($oaldpe.parent()[0], { childList: true });
            $oaldpe.parent().attr('observer-attached', 'true');
        }

        // Set the theme based on the body's class
        const setEudicTheme = () => $oaldpe.attr('data-theme', $('body').is('.black, .night') ? 'dark' : 'light');
        setEudicTheme(); // Initial check
        new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    setEudicTheme();
                }
            });
        }).observe(document.body, { attributes: true, attributeFilter: ['class'] });
    }

    // region 中文翻译相关
    fnExamplesChineseBeAlone();

    fnShowTranslation(oaldpeConfig.showTranslation);

    fnShowTraditional();

    fnTouchToTranslate(oaldpeConfig.touchToTranslate);

    replaceFullWidthCharsInChn();

    function fnExamplesChineseBeAlone() {
        if (!oaldpeConfig.examplesChineseBeAlone) {
            const $exampleChn = $(".oaldpe .exText chn");
            $exampleChn.css("display", "inline");
            $exampleChn.parent().css("margin-left", "4px");
        }
    }

    function fnShowTranslation(itemValue) {
        (itemValue === 0) && $(".oaldpe chn").hide();
        (itemValue === 1) && $(".oaldpe chn").show();
        (itemValue === 2) && $(".oaldpe chn").show() && $(".oaldpe .exText chn").hide();
        (itemValue === 3) && $(".oaldpe chn").hide() && $(".oaldpe .exText chn").show();
        (itemValue === 4) && $(".oaldpe chn").show() && $(".oaldpe .def+deft chn, .oaldpe .sensetop chn").hide();
        (itemValue === 5) && $(".oaldpe chn").hide() && $(".oaldpe .def+deft chn, .oaldpe .sensetop chn").show();

        if (itemValue === 0) {
            fnImgTranslationOpt(0);
        } else {
            fnImgTranslationOpt(oaldpeConfig.showTraditional ? 2 : 1);
        }
    }

    function fnShowTraditional() {
        const $oaldpe = $(".oaldpe");
        if (oaldpeConfig.showTraditional) {
            $oaldpe.find("chn.simple").remove();
            $oaldpe.attr("trans", "traditional");
        } else {
            $oaldpe.find("chn.traditional").remove();
            $oaldpe.attr("trans", "simple");
        }
    }

    function fnTouchToTranslate(itemValue) {
        if (!itemValue) 
            return;

        // examples
        $(".oaldpe ul.examples > li").click(function(e) {
            e.stopPropagation();
            $(this).find("chn").each(function() {
                if (!$(this).parent().is("labelx")) {
                    if (oaldpeConfig.examplesChineseBeAlone) {
                        $(this).slideToggle("fast");
                    } else {
                        $(this).fadeToggle("fast");
                    }
                } else {
                    $(this).fadeToggle("fast");
                }
            })
            box3RefreshHeight();
        });

        // ask-after: .webtop > .variants or .use
        $(".oaldpe .top-container .webtop .variants, .oaldpe .top-container .webtop .use").click(function(e) {
            e.stopPropagation();
            $(this).find("chn").fadeToggle("fast");
        })


        // title of box1
        $('.oaldpe h2')
        .each(function() {  
            $(this).contents().wrap('<div class="h2content"></div>');  
        })
        .find("div.h2content, chn")
        .click(function(e) {
            if ($(e.target).is('chn')) {
                e.stopPropagation(); 
                $(e.target).fadeToggle("fast");
            } else if ($(e.target).is('.h2content')) {
                _$chn = $(e.target).next().find("chn");
                if (_$chn.parent().is(":visible")) {
                    _$chn.fadeToggle("fast");
                    e.stopPropagation(); 
                }
            }
        });

        // global click event for sense
        $(".oaldpe li.sense .unbox").click(function(e) {
            e.stopPropagation(); 
        });
        $(".oaldpe li.sense").click(function(e) {
            e.stopPropagation(); 
            $(this).find("span.def").siblings("deft, .sensetop, .labels, .dis-g, .use, .variants").find("chn").fadeToggle("fast");
            box3RefreshHeight();
        });

        // light red background area
        $(".oaldpe span.un").click(function(e) {
            e.stopPropagation(); 
            $(this).find("chn").fadeToggle("fast");
            box3RefreshHeight();
        });

        // box2 event
        var _$unboxs = $('.oaldpe .collapse > .unbox');
        _$unboxs.each(function() {
            // title of box2
            $(this).find(".box_title div.text_title").click(function(e) {
                _$chn = $(this).siblings("unboxx").find("chn")
                if (_$chn.parent().is(":visible")) {
                    e.stopPropagation(); 
                    _$chn.fadeToggle("fast");
                    box3RefreshHeight();
                }
            })
            $(this).find(".box_title chn").click(function(e) {
                e.stopPropagation(); 
                $(this).fadeToggle("fast");
            });

            // Collocations 词语搭配: gospel-2(Collocations), word title
            $(this).find(".body > .unbox").click(function(e) {
                if (!($(e.target).is($(this)))) {
                    e.stopPropagation();
                    $(this).find("chn").fadeToggle("fast");
                    box3RefreshHeight();
                }
            });

            // Collocations 词语搭配: gospel-2, 所有义项
            $(this).find(".body > .bullet > li.li").click(function(e) {
                if ($(this).find(".item").length === 0) {
                    e.stopPropagation();
                    $(this).find("chn").fadeToggle("fast");
                    box3RefreshHeight();
                }
            });

            // Synonyms 同义词辨析：take-2(所有义项)
            $(this).find(".defpara").click(function(e) {
                _$chn = $(this).children("undt").find("chn")
                if (_$chn.length) {
                    e.stopPropagation(); 
                    _$chn.fadeToggle("fast");
                    box3RefreshHeight();
                }
            });
            // Synonyms 同义词辨析：take-2(p标签翻译)
            $(this).find(".body > span.p, .unbox .defpara .eb_undt").click(function(e) {
                e.stopPropagation(); 
                $(this).find("chn").fadeToggle("fast");
            });

            // Which Word? 词语辨析：take-4(the definition)
            $(this).find(".body > ul.bullet > li > .item")
            .click(function(e){
                e.stopPropagation();
                $(this).children("undt").find("chn").fadeToggle("fast");
                box3RefreshHeight();
            });
        });

    }

    function replaceFullWidthCharsInChn() {
        var replacements = {
            '／': '/',
        };

        $('.oaldpe chn').each(function () {
            const $this = $(this);
            $this.contents().each(function () {
                if (this.nodeType === Node.TEXT_NODE) {
                    var text = this.nodeValue;
                    for (var fullWidthChar in replacements) {
                        var normalChar = replacements[fullWidthChar];
                        var regex = new RegExp(fullWidthChar, 'g');
                        text = text.replace(regex, normalChar);
                    }
                    this.nodeValue = text;
                }
            });
        });
    }

    function chineseToggle() {
        if (oaldpeConfig.showTranslation === 1) {
            $(".oaldpe chn").fadeOut("fast");
        } else {
            $(".oaldpe chn").fadeIn("fast");
        }

        oaldpeConfig.showTranslation = oaldpeConfig.showTranslation === 1 ? 0 : 1;
        // console.log(oaldpeConfig.showTranslation);

        if (oaldpeConfig.showTranslation === 0) {
            fnImgTranslationOpt(0);
        } else {
            fnImgTranslationOpt(oaldpeConfig.showTraditional ? 2 : 1);
        }

        box3RefreshHeight();
    }

    // region 词性导航栏
    setupNavigation();

    fnSelectNavbarAll(oaldpeConfig.selectNavbarAll);

    function setupNavigation() {
        addNavigation();

        const selectors = {
            allExpand: [
                ".oaldpe .sense > .examples",
                ".oaldpe .sense > .collapse",
                ".oaldpe .sense > .un",
                ".oaldpe .sense > .xrefs",
                ".oaldpe .sense > .topic-g",
                ".oaldpe .sense div#ox-enlarge",
            ],
            box1: ".oaldpe h2.shcut",
            box2: ".oaldpe .box_title",
            box3: [
                ".oaldpe .idioms",
                ".oaldpe .phrasal_verb_links"
            ],
        };

        function doubleClickHandler() {
            const concise = $(".oaldpe").attr("concise") === "true";
            if (concise) {
                // 全部展开
                $(selectors.allExpand.join(", ")).slideDown("fast");
                $(".oaldpe").attr("concise", "false");

                // 折叠块2>展开
                $(selectors.box2).parent().addClass("is-active");
                $(selectors.box2).next().slideDown("fast");

                // 折叠块3>展开
                $(selectors.box3.join(", ")).addClass('expanded').css("height", "auto");
            } else {
                // 全部折叠
                $(selectors.allExpand.join(", ")).slideUp("fast");
                $(".oaldpe").attr("concise", "true");

                // 折叠块1>展开
                $(selectors.box1).parent().addClass("is-active");
                $(selectors.box1).siblings().slideDown("fast");

                // 折叠块2>折叠
                $(selectors.box2).parent().removeClass("is-active");
                $(selectors.box2).next().slideUp("fast");

                // 折叠块3>折叠
                $(selectors.box3.join(", ")).css("height", "26px").removeClass('expanded');
            }
        }

        let clickTimer;

        const $navbar_span = $(".oaldpe-nav span");
        $navbar_span.on("click", function () {
            const $this = $(this);
            clearTimeout(clickTimer);
            if ($this.hasClass("active")) {
                clickTimer = setTimeout(chineseToggle, 250);
            } else {
                $this.siblings().removeClass('active');
                $this.addClass('active');
                showHideEntry($this.text() === "All" ? -1 : $this.index());
            }
        });
        $navbar_span.on("dblclick", function () {
            const $this = $(this);
            clearTimeout(clickTimer);
            if ($this.hasClass("active")) {
                doubleClickHandler();
            }
        });

        const $gear_icon = $(".oaldpe-config-gear .oaldpe-config-gear__head__icon");
        $gear_icon.on('click', function () {
            clearTimeout(clickTimer);
            clickTimer = setTimeout(chineseToggle, 250);
        });
        $gear_icon.on('dblclick', function () {
            clearTimeout(clickTimer);
            doubleClickHandler();
        });
    }

    function addNavigation() {
        const $oaldpe = $(".oaldpe");
        const $entries = $oaldpe.find(".oald");

        // 没有 entry 不添加
        if ($entries.length < 1) return;

        const $navbar = $("<div></div>").addClass("oaldpe-nav");

        // 只有一个entry时隐藏
        if (!oaldpeConfig.showNavbar || $entries.length === 1) $navbar.hide();

        $entries.each(function () {
            const $entry = $(this);
            const posText = $entry.find(".webtop .pos").text() || $entry.find(".webtop .headword").text();
            const $span = $("<span></span>").text(OALDPE_POS[posText] || posText);
            $navbar.append($span);
        });

        // 添加 All
        const $spanAll = $("<span></span>").text("All");
        $navbar.append($spanAll);

        const $navbar_span = $navbar.children("span");
        if (oaldpeConfig.selectNavbarAll) {
            $spanAll.addClass('active');
        } else {
            $navbar_span.first().addClass("active");
        }
        showHideEntry(oaldpeConfig.selectNavbarAll ? -1 : 0);

        $oaldpe.first().prepend($navbar);
    }

    function showHideEntry(index) {
        $(".oaldpe .oald").each(function (i) {
            $(this).toggle(index === i || index < 0);
        });
    }

    function fnSelectNavbarAll(itemValue) {
        // 词性导航滚动到最右边
        if (itemValue && oaldpeConfig.showNavbar) {
            var _$navbar = $(".oaldpe-nav");
            // 由于手机欧路滚动失效，所以加10000个像素
            _$navbar.scrollLeft(_$navbar.scrollLeft() + _$navbar.width() + 10000);
        }
    }

    // region 发音，图片显示
    setupWordPron();

    fnShowSyllable();

    fnOnlineWordPron(oaldpeConfig.onlineWordPron);

    fnOnlineImage(oaldpeConfig.onlineImage);

    fnImgTranslationOpt(oaldpeConfig.imgTranslationOpt);

    imageZoomEvent();

    fnOfficialExPronOpt();

    showExamplesLabel();

    function setupWordPron() {
        const $oaldpe = $(".oaldpe");
        const $phons = $oaldpe.find('.phons_br, .phons_n_am');
        $phons.children('.phon').on('click', function () {
            $(this).prev('a')[0].click();
        });
    }

    function fnShowSyllable() {
        const toggleSyllable = $headword => {
            if ($headword.attr("syllable")) {
                $headword.contents().filter((_, node) => node.nodeType === Node.TEXT_NODE)
                    .each((_, node) => {
                        const text = node.textContent;
                        node.textContent = text.includes("·") ? text.replace(/·/g, "") : $headword.attr("syllable");
                    });
            }
        };

        $(".oaldpe .headword").each(function () {
            const $headword = $(this);
            if (!oaldpeConfig.showSyllable) toggleSyllable($headword);

            $headword.on('click', function () {
                const selection = window.getSelection();
                if (selection.toString().length > 0 && this.contains(selection.anchorNode)) {
                    console.log("有文本被选中");
                } else {
                    toggleSyllable($headword);
                }
            });
        });
    }

    function fnOnlineWordPron(itemValue) {
        itemValue && $('.oaldpe .audio_play_button')
        .each(function(){
            $(this).attr("href", getOnlineWordPronUrl($(this).attr("href")));
        })
        .click(function(e){
            e.preventDefault();
            globalAudio.paused || globalAudio.pause();
            globalAudio.src = $(this).attr("href");
            globalAudio.play();
        });        
    }

    function getOnlineWordPronUrl(src) {
        var parts = src.split('/');
        var name = parts[parts.length - 1];
        return (name.indexOf("_gb_") > -1 ? OALDPE_PREFIX_WORD_UK : OALDPE_PREFIX_WORD_US) + name.substring(0, 1) + '/' + name.substring(0, 3) + '/' + name.substring(0, 5) + '/' + name;
    }

    function fnOnlineImage(itemValue) {
        itemValue && $(".oaldpe div#ox-enlarge img").each(function(){
            $(this).attr("src", getOnlineImageUrl($(this).attr("src")));
        });
    }

    function getOnlineImageUrl(src) {
        var _parts = src.split('/');
        var _name = _parts[_parts.length - 1];
        _parts = _name.split('_');
        _name = _name.replace("fullsize_", "").replace("thumb_", "").replace(".jpg", ".png");
        _imgSrc = _name.substring(0, 1) + '/' + replaceWithUnderscores(_name).substring(0, 3) + '/' + replaceWithUnderscores(_name).substring(0, 5) + '/' + _name;
        return (_parts[0] === "fullsize" ? OALDPE_PREFIX_FULL_IMAGE : OALDPE_PREFIX_THUMB_IMAGE) + _imgSrc;
    }

    function replaceWithUnderscores(str) {
        return str.replace(/\..+/, match => {
            return '_'.repeat(match.length);
        });
    }

    function fnImgTranslationOpt(itemValue) {
        // 图片翻译：0-不使用翻译 1-简体中文翻译 2-台湾繁体翻译 3-自动选择
        $(".oaldpe img.fullsize, .oaldpe img.thumb").each(function(){
            var _newSrc = $(this).attr("src");
            if (itemValue === 1) {
                _newSrc = _newSrc.replace("/oa10simp/", "/oa10simp/")
                    .replace("/oa10orth/", "/oa10simp/")
                    .replace("/oa10src/", "/oa10simp/")
                    .replace("\\oa10simp\\", "\\oa10simp\\")
                    .replace("\\oa10orth\\", "\\oa10simp\\")
                    .replace("\\oa10src\\", "\\oa10simp\\");
            } else if (itemValue === 2) {
                _newSrc = _newSrc.replace("/oa10simp/", "/oa10orth/")
                .replace("/oa10orth/", "/oa10orth/")
                .replace("/oa10src/", "/oa10orth/")
                .replace("\\oa10simp\\", "\\oa10orth\\")
                .replace("\\oa10orth\\", "\\oa10orth\\")
                .replace("\\oa10src\\", "\\oa10orth\\");
            } else if (itemValue === 0){
                _newSrc = _newSrc.replace("/oa10simp/", "/oa10src/")
                .replace("/oa10orth/", "/oa10src/")
                .replace("/oa10src/", "/oa10src/")
                .replace("\\oa10simp\\", "\\oa10src\\")
                .replace("\\oa10orth\\", "\\oa10src\\")
                .replace("\\oa10src\\", "\\oa10src\\");
            }
            $(this).attr("src", _newSrc);
        });
    }

    function imageZoomEvent() {
        $(".oaldpe #ox-enlarge").click(function (e) {
            e.stopPropagation(); 

            var _$fullsize = $(this).find("img.fullsize"),
                _$thumb = $(this).find("img.thumb");

            if (_$fullsize.css("display") === "block") {
                console.log("zoom out");
                _$fullsize.css("display", "none") && _$thumb.css("display", "block");
                $(this).css({"width": "75px", "height": "75px", "left": "0"});
                $(this).find("span.ox-enlarge-label").css({"position": "absolute", "margin": "0"});
            } else {
                console.log("zoom in");
                _$fullsize.css("display", "block") && _$thumb.css("display", "none");
                $(this).css({"width": "100%", "height": "auto", "left": "5px"});
                $(this).find("span.ox-enlarge-label").css({"position": "static", "margin": "0 5px 5px 0"});
            }
        });
    }

    function fnOfficialExPronOpt() {
        const $oaldpe = $(".oaldpe");
        const optionValue = oaldpeConfig.officialExPronOpt;
        const $exampleAudio = $('.oaldpe example-audio > a, .oaldpe .ei > a');

        // 不启用官方例句发音
        if (optionValue === 2) return;

        // 启用官方例句在线发音
        if (optionValue === 1) {
            $oaldpe.attr("online-example-pron", "true");
        }

        function getOnlineExamplePronUrl(url) {
            const parts = url.split('/');
            const name = parts[parts.length - 1];
            return OALDPE_PREFIX_EXAMPLE + name.replace("#", "%23").replace('.ogg', '.wav');
        }

        $exampleAudio.each(function () {
            const $this = $(this);
            const href = $this.attr('href');
            const onlineHref = getOnlineExamplePronUrl(href);
            var offlineHref = href.replace('.ogg', '.mp3');
            if (!isEudicPC()) {
                offlineHref = offlineHref.replace('sound://', '');
            }
            $this.attr('data-href', onlineHref);
            $this.attr('href', offlineHref);
        });

        $exampleAudio.click(function (event) {
            event.stopPropagation();

            const $this = $(this);
            const offlineHref = $this.attr('href');
            const onlineHref = $this.attr('data-href');

            const playOnline = $oaldpe.attr("online-example-pron") === "true";
            const playType = playOnline ? 'online' : 'offline';
            const fallbackType = playOnline ? 'offline' : 'online';

            const logAudioSrc = (type) => console.log(`(${type}) audio: ${globalAudio.src}`);
            const logFailedToPlay = (type, fallback) => console.log(`Failed to play ${type} audio, fallback to ${fallback} audio.`);

            const handleError = (type, fallback) => {
                logAudioSrc(type);
                logFailedToPlay(type, fallback);
                globalAudio.src = fallback === 'online' ? onlineHref : offlineHref;
                globalAudio.play().then(() => logAudioSrc(fallback)).catch((error) => {
                    logAudioSrc(fallback);
                    console.log(`Failed to play ${fallback} audio.`);
                    console.error(error);
                });
            };

            if (!playOnline && isEudicPC()) { // offline, default playing
                console.log(`(offline) audio: ${offlineHref}`);
                window.location.href = offlineHref;
                return;
            }

            if (!globalAudio.paused) globalAudio.pause();
            globalAudio.src = playOnline ? onlineHref : offlineHref;
            globalAudio.play().then(() => logAudioSrc(playType)).catch(() => {
                if (playOnline && isEudicPC()) { // online failed, fallback to offline
                    logFailedToPlay(playType, fallbackType);
                    console.log(`(offline) audio: ${offlineHref}`);
                    window.location.href = offlineHref;
                    return;
                }
                handleError(playType, fallbackType);
            });

            event.preventDefault();
        });
    }

    function showExamplesLabel() {
        if (oaldpeConfig.officialExPronOpt === 2) {
            $('.oaldpe example-audio').each(function () {
                $(this).parent().addClass('audio_disabled');
            });
        }

        if (!oaldpeConfig.enableOnlineTTS) {
            $('.oaldpe example-audio-ai').each(function () {
                $(this).parent().addClass('audio_disabled');
            });
        }
    }

    // region 内容显示
    fnSimplifyPos(oaldpeConfig.simplifyPos);

    fnSimplifyGrammar(oaldpeConfig.simplifyGrammar);

    fnSimplifySthSb();

    fnUsePlaceholder(oaldpeConfig.usePlaceholder);

    fnPhrasesAddUnderline(oaldpeConfig.phrasesAddUnderline);

    fnNormalSenseNumber(oaldpeConfig.normalSenseNumber);

    function fnSimplifyPos(itemValue) {
        itemValue && $(".oaldpe .pos").each(function(){
            $(this).text(OALDPE_POS[$(this).text()]);
        });
    }

    function fnSimplifyGrammar(itemValue) {
        itemValue && $(".oaldpe .grammar").each(function() {
            $(this).text(OALDPE_GRAMMAR[$(this).text()]);
        });
    }

    function fnSimplifySthSb() {
        if (oaldpeConfig.simplifySthSb) {
            $('.oaldpe .cf, .oaldpe .idm').each(function () {
                const $this = $(this);
                const html = $this.html();
                const newHtml = html.replace(/something/g, 'sth.').replace(/somebody/g, 'sb.');
                $this.html(newHtml);
            });
        }
    }

    function fnUsePlaceholder(itemValue) {
        itemValue && $(".oaldpe .cf").each(function() {
            _$headword = $(this).parents(".senses_multiple, .sense_single").prev().find(".headword");
            _headword = _$headword.text().replace("·", "");
            if (_headword !== "") {
                $(this).text($(this).text().replace(_headword, "~"))
                console.log("ok");
            } else {
                console.log("no");
            }
        });
    }

    function fnPhrasesAddUnderline(itemValue) {
        if (itemValue) {
            $('.oaldpe .cf').addClass('underline');
        } else {
            $('.oaldpe .cf').removeClass('underline');
        }
    }

    function fnNormalSenseNumber(itemValue) {
        !itemValue && $('.oaldpe div.li_sense_before').addClass('colored');
    }

    // region 折叠控制
    setupCollapse();

    fnUnfoldBox1();

    addBox2Toggle();

    fnUnfoldBox2(oaldpeConfig.unfoldBox2);

    fnAutoUnfoldBox2(oaldpeConfig.autoUnfoldBox2);

    fnUnfoldBox2Subtitle(oaldpeConfig.unfoldBox2Subtitle);

    fnUnfoldBox3(oaldpeConfig.unfoldBox3);

    addRocketAndReturn();

    scrollingAndJumping();

    function setupCollapse() {
        $(".oaldpe .li_sense_before").each(function () {
            const $iteration = $(this);
            const $sense = $iteration.next('.sense');
            const $collapsibleElements = $sense.children(".examples, .collapse, .un, .xrefs, .topic-g").add($sense.find("#ox-enlarge"));

            if (!oaldpeConfig.unfoldSense) {
                $collapsibleElements.hide();
                $iteration.addClass("collapsed"); // 默认折叠
                $(".oaldpe").attr("concise", "true");
            }

            $iteration.on('click', function (event) {
                event.stopPropagation();
                $collapsibleElements.slideToggle("fast");
                $iteration.toggleClass("collapsed");
            });
        });

        $(".oaldpe .idm, .oaldpe .pv").each(function () {
            const $this = $(this);
            const $container = $this.closest('.idm-g, .pv-g');
            $this.on('click', function () {
                const $collapsed = $container.find(".li_sense_before.collapsed");
                if ($collapsed.length) {
                    $collapsed.trigger('click');
                } else {
                    $container.find(".li_sense_before").trigger('click');
                }
                box3RefreshHeight();
            });
        });
    }

    function fnUnfoldBox1() {
        const $oaldpeH2 = $(".oaldpe h2.shcut");

        if (!oaldpeConfig.unfoldBox1) {
            $oaldpeH2.siblings().hide();
        } else {
            $oaldpeH2.parent().addClass("is-active");
        }

        $oaldpeH2.click(function (event) {
            event.stopPropagation();
            const $this = $(this);
            $this.siblings().slideToggle("fast");
            $this.parent().toggleClass("is-active");
        });
    }

    function addBox2Toggle() {
        $(".oaldpe .box_title").click(function(e) {  
            e.stopPropagation(); 
            $(this).next().slideToggle("fast").parent().toggleClass("is-active");
            box3RefreshHeight();
        });
    }

    function fnUnfoldBox2(itemValue) {
        if (itemValue) {
            $(".oaldpe .box_title").parent().addClass("is-active");
            $(".oaldpe .box_title").next().show();

        } else {
            $(".oaldpe .box_title").parent().removeClass("is-active");
            $(".oaldpe .box_title").next().hide();
        }        
    }

    function fnAutoUnfoldBox2(itemValues) {
        Object.keys(itemValues)
            .filter(unboxTitle => itemValues[unboxTitle])
            .forEach(unboxTitle => {
                const $boxTitle = $(`.oaldpe .unbox[unbox="${unboxTitle}"] .box_title`);
                $boxTitle.parent().addClass("is-active");
                $boxTitle.next().show();
            });
    }

    function fnUnfoldBox2Subtitle(itemValue) {
        if (!itemValue)
            $(".collapse > .unbox > .body > .unbox+.bullet").hide();

        $(".collapse > .unbox > .body > .unbox").click(function(e) {
            if ($(this).next().hasClass("bullet") && ($(e.target).is($(this)))) {
                e.stopPropagation();
                $(this).next().slideToggle("fast");
            }
        })
    }

    function box3Fold($obj) {
        $obj.parent().parent().css({height: '26px'}).removeClass('expanded');
    }

    function box3Unfold(objEleId) {
        var actualHeight = $(objEleId).prop('scrollHeight') - 19.2;
        console.log("内容高度为：" + actualHeight);
        $(objEleId).animate({height: actualHeight + "px"}, 180, function() {
            $(objEleId).addClass('expanded');
        });
    }

    function box3Toggle($obj) {
        if ($obj.hasClass('expanded')) {
            $obj.animate({height: '26px'}, 180, function() {
                $obj.removeClass('expanded');
            });
        } else {
            var actualHeight = $obj.prop('scrollHeight') - 19.2;
            console.log("内容高度为："+actualHeight);
            $obj.animate({height: actualHeight + "px"}, 180, function() {
                $obj.addClass('expanded');
            });
        }
    }

    function box3RefreshHeight() {
        $(".oaldpe .idioms.expanded").css("height", "auto");
        $(".oaldpe .phrasal_verb_links.expanded").css("height", "auto");
    }

    function fnUnfoldBox3(itemValue) {
        if (itemValue) {
            $(".oaldpe .idioms").addClass('expanded');
            $(".oaldpe .idioms").css("height", "auto");
            $(".oaldpe .phrasal_verb_links").addClass('expanded');
            $(".oaldpe .phrasal_verb_links").css("height", "auto");
        }
    }

    function addRocketAndReturn() {
        var _$jumplinksA = $(".oaldpe .jumplinks a.Ref");
        $(".idioms > .idioms_heading, .phrasal_verb_links > .unbox").each(function(i) {
            var _titleHtml = $(this).hasClass("idioms_heading") 
                ? "<div class='idioms_title'></div>"
                : "<div class='phrasal_title'></div>"
            var _$box3Title = $(_titleHtml).click(function() {
                box3Toggle($(this).parent());
            });

            $(this).wrap(_$box3Title);

            var _$objEle = _$jumplinksA.eq(i);
            var _rocketHtml = $(this).hasClass("idioms_heading") 
                ? '<a class="idioms_back" style="cursor: pointer"></a>'
                : '<a class="phrasal_back" style="cursor: pointer"></a>'
            var _$returnRocket = $(_rocketHtml).click(function(e) {
                e.stopPropagation();
                // $(".oaldpe").before(`<div>${_$objEle}</div>`);
                if (oaldpeConfig.leavesBox3Fold)
                    box3Fold($(this));
                $('html, body').animate({ scrollTop: _$objEle.offset().top - 48 }, 300);
            });
            $(this).after(_$returnRocket);
        })        
    }

    function scrollingAndJumping() {
        // 实现idioms和prasal verbs的滚动跳转
        $(".oaldpe .jumplinks a.Ref").click(function(e) {  
            e.preventDefault();
            e.stopPropagation();
            var _objHref = $(this).attr("href");
            var _heightSpace = 48; 

            // 兼容DictTango
            _objHref = _objHref.replace("entry://", "");

            $('html, body').animate({   
                scrollTop: $(_objHref).offset().top - _heightSpace
            }, {
                duration: 300,    
                complete: function() {  
                    if (oaldpeConfig.jumpsBox3Unfold && $(this).is("html")) 
                        box3Unfold(_objHref);
                }
            });
        });
    }

    // region 欧路词典相关
    Eudic_widerScreen();

    Eudic_removeHeader();

    Eudic_autoFoldCustomNote();

    setupEudicConfigurations();

    function Eudic_widerScreen() {
        if (oaldpeConfig.widerScreenEudic && isEudicAPP())
            $(".oaldpe").parent().css({ margin: "5px 8px 5px 5px", padding: "unset" });
    }

    function Eudic_removeHeader() {
        if (oaldpeConfig.removeEudicHeader && isEudic())
            $('#wordInfoHead').remove();
    }

    function Eudic_autoFoldCustomNote() {
        if (oaldpeConfig.autoFoldEudicNote && isEudic())
            observeCustomNoteAdded(() => $('#expCustomNote .expHead').click());
    }

    function observeCustomNoteAdded(callback) {
        if (!isEudic()) return;

        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                $(mutation.addedNodes).each(function () {
                    var $node = $(this);
                    if ($node.attr('id') === 'customeNoteText') {
                        callback();
                        observer.disconnect();
                    }
                });
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    function modifyCustomNote() {
        const $expCustomNote = $('#expCustomNote');
        const $customeNoteText = $expCustomNote.find('#customeNoteText');
        try {
            window.noteDataArray = JSON.parse($customeNoteText.text()).map(innerDict =>
                Object.fromEntries(Object.entries(innerDict).map(([key, value]) =>
                    [key, value.replace(/\\n/g, "\n").replace(/\\"/g, "\"")]
                ))
            );
        } catch { return; }
        $customeNoteText.empty().append($('<div>').addClass('Hazuki-note'));

        async function constructNotes() {
            await $.getScript(`${prefix}/Hazuki-note/dist/notes.bundle.js`);

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

    async function setupEudicConfigurations() {
        const $oaldpe = $(".oaldpe");
        if (!(isEudic() && $oaldpe.length)) return;

        const $script = $oaldpe.parent().children('script').first();
        window.prefix = $script.attr('src')?.slice(0, $script.attr('src').lastIndexOf('/')) ?? '/api/static';

        observeCustomNoteAdded(modifyCustomNote);

        if (isMacosIpadSim()) {
            await $.getScript(`${prefix}/Hazuki-note/dist/clickToCopy.bundle.js`);
        }
    }

    // region Helper functions
    window.copyToClipboard = function (text) {
        const $temp = $('<textarea>').val(text).appendTo('body').select();
        document.execCommand('copy');
        $temp.remove();
    };

    function isEudic() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf("eudic") > -1;
    }

    function isEudicPC() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf("eudic") > -1 && ua.indexOf("windows") > -1;
    }

    function isEudicAPP() {
        var ua = navigator.userAgent.toLowerCase();
        return (ua.indexOf("eudic") > -1) && (ua.indexOf("android") > -1 || ua.indexOf("iphone") > -1);
    }

    function isEudicAPPIphone() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf("eudic") > -1 && ua.indexOf("iphone") > -1;
    }

    function isEudicAPPAndroid() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf("eudic") > -1 && ua.indexOf("android") > -1;
    }

    function isGoldenDict() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf("goldendict") > -1;
    }

    function isMacosIpadSim() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf('ipad') > -1 && navigator.maxTouchPoints === 0;
    }

    function isPreview() {
        return window.self !== window.top && parent.$('#k_iframe').length;
    }

    // region TTS 相关
    const ttsConfig = {
        "美音女1": { locale: "en-US", voice: "en-US-MichelleNeural", pitch: "+0Hz", rate: "+0%", volume: "+0%" },
        "美音女2": { locale: "en-US", voice: "en-US-AriaNeural", pitch: "+0Hz", rate: "+20%", volume: "+0%" },
        "美音女3": { locale: "en-US", voice: "en-US-AnaNeural", pitch: "+0Hz", rate: "+20%", volume: "+0%" },
        "美音女4": { locale: "en-US", voice: "en-US-JennyNeural", pitch: "+0Hz", rate: "+0%", volume: "+0%" },
        "美音男1": { locale: "en-US", voice: "en-US-ChristopherNeural", pitch: "+0Hz", rate: "+0%", volume: "+0%" },
        "美音男2": { locale: "en-US", voice: "en-US-EricNeural", pitch: "+0Hz", rate: "+0%", volume: "+0%" },
        "美音男3": { locale: "en-US", voice: "en-US-GuyNeural", pitch: "+0Hz", rate: "+0%", volume: "+0%" },
        "美音男4": { locale: "en-US", voice: "en-US-RogerNeural", pitch: "+0Hz", rate: "+0%", volume: "+0%" },
        "美音男5": { locale: "en-US", voice: "en-US-SteffanNeural", pitch: "+0Hz", rate: "+0%", volume: "+0%" },
        "英音女1": { locale: "en-GB", voice: "en-GB-SoniaNeural", pitch: "+0Hz", rate: "+0%", volume: "+0%" },
        "英音女2": { locale: "en-GB", voice: "en-GB-MaisieNeural", pitch: "+0Hz", rate: "+0%", volume: "+0%" },
        "英音女3": { locale: "en-GB", voice: "en-GB-LibbyNeural", pitch: "+0Hz", rate: "+0%", volume: "+0%" },
        "英音男1": { locale: "en-GB", voice: "en-GB-RyanNeural", pitch: "+0Hz", rate: "+0%", volume: "+0%" },
        "英音男2": { locale: "en-GB", voice: "en-GB-ThomasNeural", pitch: "+0Hz", rate: "+0%", volume: "+0%" }
    };

    (function initTTS() {
        if (!oaldpeConfig.enableOnlineTTS) return;

        const ttsService = createEdgeTTS();
        const speak = (text, config) => ttsService.playText(text, config);

        $(".oaldpe example-audio-ai a.audio_uk, .oaldpe example-audio-ai a.audio_us").each(function () {
            const $audio = $(this);
            const config = ttsConfig[$audio.hasClass("audio_uk") ? oaldpeConfig.britishTTS : oaldpeConfig.americanTTS];

            let inputText = $audio.parent().prev(".exText")
                .clone().find(".cf, chn").remove().end().text()
                .replace(/somebody\/something/g, "somebody or something")
                .replace(/\(.*?\)|\u200B/g, "");

            const match = inputText.match(/\b(\w+(?:\/\w+)+)\b/);
            if (match) inputText = match[0].split("/").map(word => inputText.replace(match[0], word)).join("\nor ");

            $audio.on("click", (event) => {
                event.stopPropagation();
                event.preventDefault();
                speak(inputText, config);
            });
        });
    })();

    function createEdgeTTS() {
        const TRUSTED_CLIENT_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
        const SYNTH_URL = `wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=${TRUSTED_CLIENT_TOKEN}`;
        const AUDIO_FORMAT = "audio-24khz-48kbitrate-mono-mp3";

        const BINARY_DELIM = "Path:audio\r\n";
        const CONTENT_TYPE_JSON = "Content-Type:application/json\r\nPath:speech.config\r\n\r\n";
        const CONTENT_TYPE_SSML = "Content-Type:application/ssml+xml\r\nPath:ssml\r\n\r\n";

        let socket = null, requests = {};

        const createSSML = (inputText, { locale, voice, pitch, rate, volume }) =>
            `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${locale}">
                <voice name="${voice}"><prosody pitch="${pitch}" rate="${rate}" volume="${volume}">${inputText}</prosody></voice>
            </speak>`;

        async function ensureSocketReady() {
            if (!socket || socket.readyState === WebSocket.CLOSED) {
                const reopened = !!socket; // Check if the socket existed before
                socket = new WebSocket(SYNTH_URL);
                socket.onmessage = onSocketMessage;
                socket.onclose = () => console.warn('WebSocket closed.');
                socket.onerror = (error) => {
                    console.error('WebSocket error:', error);
                    socket.close();
                };
                await new Promise((resolve) => {
                    socket.onopen = () => {
                        console.log(reopened ? 'WebSocket reopened.' : 'WebSocket opened.');
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

        async function sendSSMLRequest(inputText, config) {
            const ssml = createSSML(inputText, config);
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
                if (!globalAudio.paused) globalAudio.pause();
                globalAudio.src = audioUrl;

                const cleanup = () => URL.revokeObjectURL(audioUrl);
                globalAudio.addEventListener('ended', cleanup, { once: true });
                globalAudio.play();
            } catch (error) {
                console.error('Failed to play audio:', error);
            }
        }

        return { playText };
    }
});

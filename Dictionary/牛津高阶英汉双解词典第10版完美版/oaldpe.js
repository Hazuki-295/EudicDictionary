/* ********用户自定义配置区开始******** */
// 可直接在词典里搜索以下任意词头，进入配置界面，常用配置无需修改此js文件。
// “oaldpeconfig”、“oaldpecfg”、“oaldcfg”、“opcfg”、“oaldconfig”、“opconfig”和“opc”

var oaldpeCfg = {
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

    // 【配置项7：是否在导航栏每个选项首尾加宽留白】（方便双击或单击时不会点到文字而触发查词功能）
    // 选项（默认为true）：false=否，true=是
    NavbarMargin: true,

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
    // 【配置项35：自定义折叠块2开关】（浅蓝色折叠区）
    // 选项（默认都为true）：false=不显示，true=显示
    box2ShowSwitch: {
        "verbforms": true, // 动词形式
        "wordorigin": true, // 词源
        "colloc": true,     // 词语搭配
        "snippet": true,   // 牛津搭配词典
        "wordfinder": true, // 联想词
        "extra_examples": true, // 更多例句
        "cult": true,       // 文化
        "synonyms": true,   // 同义词辨析
        "which_word": true, // 词语辨析
        "homophone": true,  // 同音词
        "more_about": true, // 词语辨析
        "mlt": true,        // 同类词语学习
        "wordfamily": true, // 词族
        "grammar": true,    // 语法说明
        "express": true,    // 情景表达
        "langbank": true,   // 用语库
        "vocab": true,      // 词汇扩充
        "british_american": true,  // 英式 / 美式
        "more_about": true, // 补充说明
    },

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

    // 【配置项37：自定义折叠块3开关】（Idioms、Phrasal verbs）
    // 选项（默认都为true）：false=不显示，true=显示
    box3ShowSwitch: {
        "idioms": true, // 习语
        "phrasal_verb_links": true, // 短语动词
    },

    // 【配置项38：其他显示开关】
    // 选项（默认都为true）：false=不显示，true=显示
    othersShowSwitch: {
        "h2.shcut": true, // 整个box1标题(包含英文和翻译)
        ".box_title unboxx": true, // box2标题翻译（浅红色折叠区）
        "h2.shcut shcut": true,  // box1标题翻译（绿虚线折叠区）
        ".symbols": true, // 钥匙图标
        ".phonetics": true, // 单词发音
        ".sense .def": true, // 义项英文
        ".examples": true, // 例句
        ".grammar": true, // 语法，如[transitive]或[t]
        ".cf": true, // 固定搭配，如take sth with you
        ".topic-g": true, // Topics
        ".use": true, // 用法，如(not used in the progressive tenses 不用于进行时)
        ".xrefs[xt='see']": true, // see also
        ".xrefs[xt='cp']": true, // 对比
        ".xrefs[xt='nsyn'], .oaldpe .xrefs[xt='syn']": true, // 同义词
        ".xrefs[xt='opp']": true, // 反义词
        ".labels": true, // 标签，如(informal非正式用语)
        ".pos": true, // 词性，如verb或v.
        ".dis-g": true, // 主要用于，如(of machines, etc.机器等)(of verbs, nouns, etc.动词、名词等)
        ".variants": true, // 变体，如(also break time)
        ".un[un=help]": true, // 帮助
        ".inflections": true, // 词形变化，如(plural As, A's, a's)
        "div#ox-enlarge": true, // 图片
    },

    // 【配置项39：自定义CSS样式】
    // 选项（默认都为空）：不为空=使用自定义，为空=不使用自定义
    // 示例1：{"color": "red"}
    // 示例2：{"color": "#BE002F", "font-size": "20px"}
    // 示例3：{"font-weight": "bold", "font-style": "italic"}
    // 示例4：{"background-color": "green", "font-style": "normal"}
    // 其他用法不懂的可参考https://www.runoob.com/css/css-tutorial.html，也可自行百度或求助AI。
    customizeCSS: {
        ".examples li .x": {}, // 例句英文
        ".examples li .x chn": {}, // 例句中文
        ".def": {}, // 义项的英文释义
        "deft > chn": {}, // 权威中文释义
        "h1.headword": {}, // 词头
        ".oaldpe-nav": {}, // 导航栏
        ".oaldpe-nav span": {}, // 导航栏选项
        ".pos": {}, // 词性，如verb或v.
        ".cf": {}, // 固定搭配，如take sth with you
        ".grammar": {}, // 语法，如[transitive]或[t]
        "div.li_sense_before": {}, // 义项数字
        ".webtop > .idm": {}, // Idioms下的词组
        ".sense > .variants": {}, // 义项前的变体类型，如：east第一个义项的usually
        ".sense > .variants > .v-g": {}, // 义项前的变体内容，如：east第一个义项的the east
    },

    // 【配置项40：是否禁用配置词头】（深蓝词典用户需要禁用，因为不兼容）
    // 选项（默认为false）：false=否，true=是
    disableConfigWord: false,
};
/* ********用户自定义配置区结束******** */


(function () {
    var _userAgent = navigator.userAgent.toLowerCase();
    if ((/windows\snt/.test(_userAgent)
        && /chrome|firefox/.test(_userAgent)) || jQuery('.gdarticle').css('-webkit-column-gap') == '1px') {
        console.log('Windows Chrome/firefox detected.');
        if (/windows\snt/.test(_userAgent) && /chrome|firefox/.test(_userAgent))
            $("a.speaker").click(function () {
                fSound = $(this).attr('href');
                fSound = fSound.replace('sound://', '');
                (new Audio(fSound)).play();
            });
        return jQuery;
    } else {
        return jQuery.noConflict(true)
    }
})()

(function ($) {
    // avoiding repeated loading
    if ($(".oaldpe #is-oaldpe-loaded").length) {
        return;
    } else {
        $('<div id="is-oaldpe-loaded" style="display: none;"></div>').appendTo('.oaldpe');
    }

    // variable declaration area
    const OALDPE_NAVBAR_CLASS = "oaldpe-nav";
    const OALDPE_NAVBAR_SELECTOR = "." + OALDPE_NAVBAR_CLASS;

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

    var oaldpeCfgDuplicate = Object.assign({}, oaldpeCfg);

    // main

    initialize();

    fnSimplifyPos(oaldpeCfg.simplifyPos);

    fnShowTraditional();

    fnUnfoldBox1();

    fnUnfoldBox2(oaldpeCfg.unfoldBox2);

    fnAutoUnfoldBox2(oaldpeCfg.autoUnfoldBox2);

    fnUnfoldBox3(oaldpeCfg.unfoldBox3);

    fnUnfoldSense();

    fnBox2ShowSwitch(oaldpeCfg.box2ShowSwitch);

    fnSimplifySthSb();

    fnPhrasesAddUnderline(oaldpeCfg.phrasesAddUnderline);

    fnNormalSenseNumber(oaldpeCfg.normalSenseNumber);

    fnSelectNavbarAll(oaldpeCfg.selectNavbarAll);

    fnOnlineImage(oaldpeCfg.onlineImage);
    
    fnSimplifyGrammar(oaldpeCfg.simplifyGrammar);

    fnShowSyllable(oaldpeCfg.showSyllable);

    fnShowTranslation(oaldpeCfg.showTranslation);

    fnBox3ShowSwitch(oaldpeCfg.box3ShowSwitch);

    fnEnableOnlineTTS(oaldpeCfg.enableOnlineTTS);

    fnOthersShowSwitch(oaldpeCfg.othersShowSwitch);

    addRocketAndReturn();

    fnWiderScreenEudic(oaldpeCfg.widerScreenEudic);

    scrollingAndJumping();

    fnImgTranslationOpt(oaldpeCfg.imgTranslationOpt);

    imageZoomEvent();

    fnOfficialExPronOpt();

    addBox2Toggle();

    fnCustomizeCSS(oaldpeCfg.customizeCSS);
    
    fnOnlineWordPron(oaldpeCfg.onlineWordPron);

    fnUsePlaceholder(oaldpeCfg.usePlaceholder);    

    termNumberClickEvent();

    fnUnfoldBox2Subtitle(oaldpeCfg.unfoldBox2Subtitle);

    fnTouchToTranslate(oaldpeCfg.touchToTranslate);

    oaldpeConfigEvent();

    fnDisableConfigWord(oaldpeCfg.disableConfigWord);

    // main end

    // alert(navigator.userAgent.toLowerCase());

    // function declaration area
    function fnDisableConfigWord(itemValue) {
        if (itemValue) {
            $("#oaldpe-config .config-item, #oaldpe-config button").remove();
            $("#oaldpe-config .head-title").text("配置词头已被禁用");
        }
    }

    function configDataConvertToCfg(oaldpeCfgKey, localStorageKey) {
        _localStorageValue = localStorage.getItem(localStorageKey);
        _oaldpeCfgValue = oaldpeCfg[oaldpeCfgKey];
        if (oaldpeCfgKey === "britishTTS") {
            return OALDPE_BRITISH_TTS_OPTION[parseInt(_localStorageValue)]
        } else if (oaldpeCfgKey === "americanTTS") {
            return OALDPE_AMERICAN_TTS_OPTION[parseInt(_localStorageValue)]
        }

        if (typeof _oaldpeCfgValue === "number") {
            return parseInt(_localStorageValue);
        } else if (typeof _oaldpeCfgValue === "boolean") {
            return _localStorageValue === "1";
        } else {
            return _localStorageValue;
        }
    }

    function configDataConvertToUI(oaldpeCfgKey) {
        _oaldpeCfgValue = oaldpeCfg[oaldpeCfgKey];
        if (oaldpeCfgKey === "britishTTS") {
            return OALDPE_BRITISH_TTS_OPTION.indexOf(_oaldpeCfgValue);
        } else if (oaldpeCfgKey === "americanTTS") {
            return OALDPE_AMERICAN_TTS_OPTION.indexOf(_oaldpeCfgValue);
        }

        if (typeof _oaldpeCfgValue === "number") {
            return _oaldpeCfgValue.toString();
        } else if (typeof _oaldpeCfgValue === "boolean") {
            return _oaldpeCfgValue ? "1" : "0";
        } else {
            return _oaldpeCfgValue;
        }
    }

    function oaldpeConfigEvent() {
        if (oaldpeCfg.disableConfigWord)
            return
        // 默认收起选项
        foldConfigOption();

        // 选项展开或选中事件
        $("#oaldpe-config .config-item .select").click(function(e) {
            e.stopPropagation();
            if (!$(this).hasClass("unfolded") && $(e.target).is(".option")) {
                // console.log("ddddddd");
                $(this).attr("cfg-selected", $(e.target).index().toString());
            }
            cfgSelectToggleFold($(this));
        });

        // 高亮选项
        $('#oaldpe-config .config-item .select .option').mouseover(function(){
            if (!$(this).parent().hasClass("unfolded"))
                $(this).addClass('highlighted');
        }).mouseout(function(){
            $(this).removeClass('highlighted');
        });

        // 保存配置
        $('#oaldpe-config button[type="submit"]').click(function() {
            foldConfigOption();


            $("#oaldpe-config .config-item").each(function() {
                _id = $(this).attr("id");
                _value = $(this).find(".select").attr("cfg-selected");
                localStorage.setItem(OALDPE_PREFIX_LOCALSTORAGE + _id, _value);
            })

            $(this).text("保存配置完毕！");

            _$this = $(this)
            $('#oaldpe-config button[type="reset"]').text("重置配置")
            setTimeout(function() {
                _$this.text("保存配置");
            }, 1000);
        });

        // 重置配置
        $('#oaldpe-config button[type="reset"]').click(function() {

            removeKeysStartingWith(OALDPE_PREFIX_LOCALSTORAGE);
            oaldpeCfg = oaldpeCfgDuplicate;
            updateConfigToUI();
            foldConfigOption();

            $(this).text("重置配置完毕！");
            _$this = $(this)

            $('#oaldpe-config button[type="submit"]').text("保存配置")
            setTimeout(function() {
                _$this.text("重置配置");
            }, 1000);
        });
    }

    function removeKeysStartingWith(prefix) {
        for (var i = localStorage.length - 1; i >= 0; i--) {
            var key = localStorage.key(i);
            if (key.startsWith(prefix)) {
                localStorage.removeItem(key);
            }
        }
    }

    function foldConfigOption() {
        $("#oaldpe-config .config-item .select").each(function() {
            $(this).removeClass("unfolded");
            cfgSelectToggleFold($(this));
        })
    }

    function refreshOptions($obj) {
        // 刷新选项
        _selectedIndex = $obj.attr("cfg-selected");
        $obj.find(".option").each(function() {
            if ($(this).index().toString() !== _selectedIndex) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    }

    function cfgSelectToggleFold($obj) {
        var _foldHeight = 0;
        var _objectHeight = $obj.find(".option").eq(0).outerHeight();
        $obj.find(".option").each(function() {
            _foldHeight = _foldHeight + $(this).outerHeight();
            if ($obj.attr("cfg-selected") === $(this).index().toString())
                _objectHeight = $(this).outerHeight();

        })

        _objectHeight = _objectHeight.toString() + "px"
        if ($obj.hasClass("unfolded")) {
                $obj.find(".option").show();
                $obj.animate({height: _foldHeight.toString() + "px"
            }, {
                duration: 300,
                complete: function() {  
                    // 完全展开时
                }
            });

        } else {
            $obj.animate({height: _objectHeight
                }, {
                duration: 300,
                complete: function() {  
                    // 完全收起时
                    refreshOptions($obj);
                }
            });
        }
        $obj.toggleClass("unfolded");
    }

    /* Rewrited by Hazuki */
    function fnExamplesChineseBeAlone() {
        if (!oaldpeCfg.examplesChineseBeAlone) {
            const $exampleChn = $(".oaldpe .exText chn");
            $exampleChn.css("display", "inline");
            $exampleChn.parent().css("margin-left", "4px");
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

    function initialize() {
        $(".oaldpe").show();

        updateConfigFromLocalStorage();

        updateConfigToUI();

        /* Added by Hazuki */
        removeEudicHeader();

        foldEudicNote();

        setupConfigGear();

        setupNavigation();

        setupErudaConsole();

        setupWordPron();

        showExamplesLabel();

        replaceFullWidthCharsInChn();

        detectDarkModeEnabled();

        setupEudicConfigurations();
        /* End of addition */

        fnExamplesChineseBeAlone();
    }

    function removeEudicHeader() {
        if (oaldpeCfg.removeEudicHeader && isEudic())
            $('#wordInfoHead').remove();
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

    function foldEudicNote() {
        if (oaldpeCfg.autoFoldEudicNote && isEudic())
            observeCustomNoteAdded(() => $('#expCustomNote .expHead').click());
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
            if (item.prefix === 'officialExPronOpt' && oaldpeCfg.officialExPronOpt === 2) return;
            if (item.prefix === 'Eruda' && !oaldpeCfg.enableErudaConsole) return;

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
        handleConfig('autoFoldEudicNote', oaldpeCfg.autoFoldEudicNote ? 'on' : 'off', 'on');

        // Online Example Pron
        handleConfig('officialExPronOpt', oaldpeCfg.officialExPronOpt === 1 ? 'on' : 'off', 'on');

        // Default Example Pron
        $oaldpe.attr("pron", oaldpeCfg.defaultBritishExPron ? "uk" : "us");
        $configGear.find('.oaldpe-config-gear__head__brand').click(function () {
            const currentPron = $oaldpe.attr('pron');
            $oaldpe.attr('pron', currentPron === 'uk' ? 'us' : 'uk');
        });

        handleConfig('defaultBritishExPron', oaldpeCfg.defaultBritishExPron ? 'BrE' : 'NAmE', 'BrE');
    }

    async function setupErudaConsole() {
        if (!oaldpeCfg.enableErudaConsole) return;
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

    function setupWordPron() {
        const $oaldpe = $(".oaldpe");
        const $phons = $oaldpe.find('.phons_br, .phons_n_am');
        $phons.children('.phon').on('click', function () {
            $(this).prev('a')[0].click();
        });
    }

    function showExamplesLabel() {
        if (oaldpeCfg.officialExPronOpt === 2) {
            $('.oaldpe example-audio').each(function () {
                $(this).parent().addClass('audio_disabled');
            });
        }

        if (!oaldpeCfg.enableOnlineTTS) {
            $('.oaldpe example-audio-ai').each(function () {
                $(this).parent().addClass('audio_disabled');
            });
        }
    }

    function replaceFullWidthCharsInChn() {
        var replacements = {
            '／': '/',
            // Add more replacements if needed
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

    function detectDarkModeEnabled() {
        if (!oaldpeCfg.autoDarkMode) return;

        const $oaldpe = $(".oaldpe");
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        if (!$oaldpe.length) return;

        function handleThemeChange(event) {
            $oaldpe.attr('data-theme', event.matches ? 'dark' : 'light');
        }

        if (!isEudic()) {
            handleThemeChange(darkModeMediaQuery); // Initial check
            darkModeMediaQuery.addEventListener('change', handleThemeChange); // Listen for changes
            return;
        }

        // Delete the Eudic fixed style to prevent conflicts
        $oaldpe.parent().find('.eudic_custom_night').remove(); // Initial check
        new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.classList?.contains('eudic_custom_night')) node.remove();
                });
            });
        }).observe($oaldpe.parent()[0], { childList: true });

        // Set the theme based on the body's class
        function setTheme() {
            if (document.body.classList.contains('black') || document.body.classList.contains('night')) {
                $oaldpe.attr('data-theme', 'dark');
            } else {
                $oaldpe.attr('data-theme', 'light');
            }
        }
        setTheme(); // Initial check
        new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    setTheme();
                }
            });
        }).observe(document.body, { attributes: true, attributeFilter: ['class'] });
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
            await $.getScript(`${prefix}/Hazuki-note/dist/bundle.js`);

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

    async function enableClickToCopy() {
        await $.getScript(`${prefix}/Hazuki-note/src/clickToCopy.js`);
    }

    function setupEudicConfigurations() {
        if (!isEudic()) return;

        const $oaldpe = $(".oaldpe");
        if (!$oaldpe.length) return;

        const $ancestor = $oaldpe.parent();
        const $script = $ancestor.children('script').first();

        const src = $script.attr('src');
        window.prefix = src.slice(0, src.lastIndexOf('/'));

        observeCustomNoteAdded(modifyCustomNote);

        if (!isMacosIpadSim()) return;

        enableClickToCopy();
    }

    function updateConfigFromLocalStorage() {
        if (oaldpeCfg.disableConfigWord)
            return
        // 从LocalStorage更新配置
        for (var i = localStorage.length - 1; i >= 0; i--) {
            var _key = localStorage.key(i);
            if (_key.startsWith(OALDPE_PREFIX_LOCALSTORAGE)) {
                var _oaldpeCfgKey = _key.replace(OALDPE_PREFIX_LOCALSTORAGE, "");
                oaldpeCfg[_oaldpeCfgKey] = configDataConvertToCfg(_oaldpeCfgKey, _key);
            }
        }
    }

    /* Modified by Hazuki */
    function updateConfigToUI() {
        if (oaldpeCfg.disableConfigWord)
            return
        // 更新配置到配置词头
        Object.keys(oaldpeCfg).forEach(function(key) {
            $("#oaldpe-config .oaldpe-config-group > #" + key + " .select")
                .attr("cfg-selected", configDataConvertToUI(key));            
        })
    }

    function fnTouchToTranslate(itemValue) {
        if (!itemValue) 
            return;

        // examples
        $(".oaldpe ul.examples > li").click(function(e) {
            e.stopPropagation();
            $(this).find("chn").each(function() {
                if (!$(this).parent().is("labelx")) {
                    if (oaldpeCfg.examplesChineseBeAlone) {
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

    /* Modified by Hazuki */
    function termNumberClickEvent() {
        $(".oaldpe .li_sense_before, .oaldpe .idm, .oaldpe .pv").click(function (e) {
            e.stopPropagation(); 
            const $this = $(this);
            if ($this.hasClass("li_sense_before")) {
                var _$objEle = $this.next();
            } else if ($this.hasClass("idm")) {
                var _$objEle = $this.parents(".idm-g");
            } else if ($this.hasClass("pv")) {
                var _$objEle = $this.parents(".pv-g");
            }
            var _isVisible = _$objEle.find(".examples, .collapse, .un, .xrefs, .topic-g, div#ox-enlarge").is(":visible");

            if (_isVisible) {
                if ($this.hasClass("li_sense_before")) {
                    _$objEle.children(".examples, .collapse, .un, .xrefs, .topic-g").slideUp("fast");
                    _$objEle.find("div#ox-enlarge").slideUp("fast");
                } else {
                    _$objEle.find(".examples, .collapse, .un, .xrefs, .topic-g").slideUp("fast");
                }
            } else {
                if ($this.hasClass("li_sense_before")) {
                    _$objEle.children(".examples, .collapse, .un, .xrefs, .topic-g").slideDown("fast");
                    _$objEle.find("div#ox-enlarge").slideDown("fast");
                } else {
                    _$objEle.find(".examples, .collapse, .un, .xrefs, .topic-g").slideDown("fast");
                    box3RefreshHeight();
                }
            }
        });
    }

    function addBox2Toggle() {
        $(".oaldpe .box_title").click(function(e) {  
            e.stopPropagation(); 
            $(this).next().slideToggle("fast").parent().toggleClass("is-active");
            box3RefreshHeight();
        });
    }

    /* Rewrited by Hazuki */
    function fnOfficialExPronOpt() {
        const $oaldpe = $(".oaldpe");
        const optionValue = oaldpeCfg.officialExPronOpt;
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

    /* Modified by Hazuki */
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
                    if (oaldpeCfg.jumpsBox3Unfold && $(this).is("html")) 
                        box3Unfold(_objHref);
                }
            });
        });
    }

    function fnWiderScreenEudic(itemValue) {
        itemValue && isEudicAPP() && $(".oaldpe").parent().css({
            "margin": "5px 8px 5px 5px",
            "padding": "0"
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

    function box3Fold($obj) {
        $obj.parent().parent().css({height: '26px'}).removeClass('expanded');
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
                if (oaldpeCfg.leavesBox3Fold)
                    box3Fold($(this));
                $('html, body').animate({ scrollTop: _$objEle.offset().top - 48 }, 300);
            });
            $(this).after(_$returnRocket);
        })        
    }

    function box3Unfold(objEleId) {
        var actualHeight = $(objEleId).prop('scrollHeight') - 19.2;
        console.log("内容高度为：" + actualHeight);
        $(objEleId).animate({height: actualHeight + "px"}, 180, function() {
            $(objEleId).addClass('expanded');
        });
    }

    function fnCustomizeCSS(itemValues) {
        var _keysWithFalseValue = Object.keys(itemValues)
            .filter(key => Object.keys(itemValues[key]).length !== 0);
        for (var i = 0; i < _keysWithFalseValue.length; i++) {
            _css = itemValues[_keysWithFalseValue[i]];
            _selector = ".oaldpe " + _keysWithFalseValue[i];
            $(_selector).css(_css);
        }
    }

    function fnOthersShowSwitch(itemValues) {
        var _keysWithFalseValue = Object.keys(itemValues)
            .filter(key => !itemValues[key]);
        if (_keysWithFalseValue.length) {
            var _selectors = _keysWithFalseValue.map(item => `.oaldpe ${item}`).join(' ,');
            $(_selectors).hide();
        }
    }

    function fnBox3ShowSwitch(itemValue) {
        if (!itemValue["idioms"])
            $(".oaldpe div.idioms[hclass='idioms']").hide();

        if (!itemValue["phrasal_verb_links"])
            $(".oaldpe aside.phrasal_verb_links[hclass='phrasal_verb_links']").hide();

        if (!itemValue["idioms"] && !itemValue["phrasal_verb_links"]) {
            $(".oaldpe span.jumplinks").hide();
        } else if (!itemValue["idioms"]) {
            $(".oaldpe span.jumplinks a.Ref[title='Idioms definition']").hide();
        } else if (!itemValue["phrasal_verb_links"]) {
            $(".oaldpe span.jumplinks a.Ref[title='Phrasal Verbs definition']").hide();
        }
    }

    function fnBox2ShowSwitch(itemValues) {
        var _keysWithFalseValue = Object.keys(itemValues).filter(key => !itemValues[key]);
        if (_keysWithFalseValue.length) {
            var _selectors = _keysWithFalseValue.map(item => `.oaldpe .collapse .unbox[unbox=${item}]`).join(', ');
            $(_selectors).closest('div.collapse').hide();
        }
    }

    function fnEnableOnlineTTS(itemValue) {
        !itemValue && $('.oaldpe example-audio-ai').addClass('audio_hide');    
        itemValue && $(".oaldpe example-audio-ai a.audio_uk,  .oaldpe example-audio-ai a.audio_us")
        .click(function(e){
            e.stopPropagation();
            e.preventDefault();
            globalAudio.src = ""; // 在ios上TTS要先把src设置为空，第一次播放才会发音

            selectedTTS = $(this).hasClass("audio_uk") ? oaldpeCfg.britishTTS : oaldpeCfg.americanTTS;
            eleExText = $(this).parent().siblings("div.exText").clone();
            eleExText.find(".cf, chn").remove();
            speak_text = eleExText.text().replace(/\(.*?\)/g, "");
            if (speak_text.includes("/")) {
                slash_word = speak_text.match(/\w+(?:\/\w+)+/)[0];
                splited_word = slash_word.split("/");
                list_result = [];
                for (each of splited_word) {
                    list_result.push(speak_text.replace(slash_word, each));
                }
                speak_text = list_result.join("\nor ");
            }
            speak(speak_text);
        });
    }

    /* Rewrited by Hazuki */
    function fnUnfoldSense() {
        if (!oaldpeCfg.unfoldSense) {
            $(".oaldpe .sense").children(".examples, .collapse, .un, .xrefs, .topic-g").hide();
            $(".oaldpe").attr("concise", "true");
        }
    }

    function fnUnfoldBox3(itemValue) {
        if (itemValue) {
            $(".oaldpe .idioms").addClass('expanded');
            $(".oaldpe .idioms").css("height", "auto");
            $(".oaldpe .phrasal_verb_links").addClass('expanded');
            $(".oaldpe .phrasal_verb_links").css("height", "auto");
        }
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

    /* Rewrited by Hazuki */
    function fnUnfoldBox1() {
        const $oaldpeH2 = $(".oaldpe h2.shcut");

        if (!oaldpeCfg.unfoldBox1) {
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

    /* Rewrited by Hazuki */
    function fnSimplifySthSb() {
        if (oaldpeCfg.simplifySthSb) {
            $('.oaldpe .cf, .oaldpe .idm').each(function () {
                const $this = $(this);
                const html = $this.html();
                const newHtml = html.replace(/something/g, 'sth.').replace(/somebody/g, 'sb.');
                $this.html(newHtml);
            });
        }
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

    /* Rewrited by Hazuki */
    function setupNavigation() {
        addNavigation();

        const selectors = {
            allExpand: [
                ".oaldpe .sense > .examples",
                ".oaldpe .sense > .collapse",
                ".oaldpe .sense > .un",
                ".oaldpe .sense > .xrefs",
                ".oaldpe .sense > .topic-g",
            ],
            box1: ".oaldpe h2.shcut",
            box2: ".oaldpe .box_title",
            box3: [
                ".oaldpe .idioms",
                ".oaldpe .phrasal_verb_links"
            ],
            enlargeImage: ".oaldpe div#ox-enlarge",
        };

        function singleClickHandler() {
            chineseToggle();
        }

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

                // 图片
                $(selectors.enlargeImage).slideDown("fast");
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

                // 图片
                $(selectors.enlargeImage).slideUp("fast");
            }
        }

        let clickTimer;

        const $navbar_span = $(".oaldpe-nav span");
        $navbar_span.on("click", function () {
            const $this = $(this);
            clearTimeout(clickTimer);
            if ($this.hasClass("active")) {
                clickTimer = setTimeout(singleClickHandler, 250);
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
            clickTimer = setTimeout(singleClickHandler, 250);
        });
        $gear_icon.on('dblclick', function () {
            clearTimeout(clickTimer);
            doubleClickHandler();
        });
    }

    function addNavigation() {
        const $oaldpe = $(".oaldpe");
        const $entries = $(".oaldpe .oald");

        // 没有 entry 不添加
        if ($entries.length < 1) return;

        const $navbar = $("<div></div>").addClass(OALDPE_NAVBAR_CLASS);

        // 只有一个entry时隐藏
        if (!oaldpeCfg.showNavbar || $entries.length === 1) {
            $navbar.hide();
        }

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
        if (oaldpeCfg.selectNavbarAll) {
            $spanAll.addClass('active');
        } else {
            $navbar_span.first().addClass("active");
        }
        showHideEntry(oaldpeCfg.selectNavbarAll ? -1 : 0);

        if (oaldpeCfg.NavbarMargin) {
            $navbar_span.css({ "padding": ".2rem 1.2rem" })
        }

        $oaldpe.first().prepend($navbar);
    }

    function showHideEntry(index) {
        $(".oaldpe .oald").each(function (i) {
            $(this).toggle(index === i || index < 0);
        });
    }

    function fnSelectNavbarAll(itemValue) {
        // 词性导航滚动到最右边
        if (itemValue && oaldpeCfg.showNavbar) {
            var _$navbar = $(".oaldpe-nav");
            // 由于手机欧路滚动失效，所以加10000个像素
            _$navbar.scrollLeft(_$navbar.scrollLeft() + _$navbar.width() + 10000);
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
            fnImgTranslationOpt(oaldpeCfg.showTraditional ? 2 : 1);
        }
    }

    function fnShowSyllable(itemValue) {
        $(".oaldpe .headword")
        .click(function(e) {
            e.stopPropagation();
            var selection = window.getSelection();
            if (selection.toString().length > 0 && this.contains(selection.anchorNode)) {
                // $(this).trigger('textSelected', [selection]);
                console.log("有文本被选中");
            } else {
                toggleSyllable($(this));
            }
        })
        .each(function() {
            if (!itemValue)
                toggleSyllable($(this));
        });        
    }

    function fnSimplifyGrammar(itemValue) {
        itemValue && $(".oaldpe .grammar").each(function() {
            $(this).text(OALDPE_GRAMMAR[$(this).text()]);
        });
    }

    function fnSimplifyPos(itemValue) {
        itemValue && $(".oaldpe .pos").each(function(){
            $(this).text(OALDPE_POS[$(this).text()]);
        });
    }

    function fnOnlineImage(itemValue) {
        itemValue && $(".oaldpe div#ox-enlarge img").each(function(){
            $(this).attr("src", getOnlineImageUrl($(this).attr("src")));
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

    /* Rewrited by Hazuki */
    function fnShowTraditional() {
        if (oaldpeCfg.showTraditional) {
            $(".oaldpe chn.simple").remove();
            $(".oaldpe").attr("trans", "traditional");
        } else {
            $(".oaldpe chn.traditional").remove();
            $(".oaldpe").attr("trans", "simple");
        }
    }

    function box3RefreshHeight() {
        $(".oaldpe .idioms.expanded").css("height", "auto");
        $(".oaldpe .phrasal_verb_links.expanded").css("height", "auto");
    }

    function chineseToggle() {
        if (oaldpeCfg.showTranslation === 1) {
            $(".oaldpe chn").fadeOut("fast");
        } else {
            $(".oaldpe chn").fadeIn("fast");
        }

        oaldpeCfg.showTranslation = oaldpeCfg.showTranslation === 1 ? 0 : 1;
        // console.log(oaldpeCfg.showTranslation);

        if (oaldpeCfg.showTranslation === 0) {
            fnImgTranslationOpt(0);
        } else {
            fnImgTranslationOpt(oaldpeCfg.showTraditional ? 2 : 1);
        }

        box3RefreshHeight();
    }

    function isEudic() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf("eudic") > -1;
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

    function isEudicPC() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf("eudic") > -1 && ua.indexOf("windows") > -1;
    }

    function isGoldenDict() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf("goldendict") > -1;
    }

    function isMacosIpadSim() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf('ipad') > -1 && navigator.maxTouchPoints === 0;
    }

    window.copyToClipboard = function (text) {
        const $temp = $('<textarea>').val(text).appendTo('body').select();
        document.execCommand('copy');
        $temp.remove();
    };

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

    function getOnlineWordPronUrl(src) {
        var parts = src.split('/');
        var name = parts[parts.length - 1];
        return (name.indexOf("_gb_") > -1 ? OALDPE_PREFIX_WORD_UK : OALDPE_PREFIX_WORD_US) + name.substring(0, 1) + '/' + name.substring(0, 3) + '/' + name.substring(0, 5) + '/' + name;
    }

    function toggleSyllable($obj) {
        if ($obj.attr("syllable")) {
            $obj.text($obj.text().indexOf("·") > -1 ? $obj.text().replace(/·/g, "") : $obj.attr("syllable"));
        }
    }

    // the end 

    // region tts 功能
    var ttsConfig = {
        "美音女1": {
            locale: "en-US",
            voice: "en-US-MichelleNeural",
            pitch: "+0Hz",
            rate: "+0%",
            volume: "+0%",
        },
        "美音女2": {
            locale: "en-US",
            voice: "en-US-AriaNeural",
            pitch: "+0Hz",
            rate: "+20%",
            volume: "+0%",
        },
        "美音女3": {
            locale: "en-US",
            voice: "en-US-AnaNeural",
            pitch: "+0Hz",
            rate: "+20%",
            volume: "+0%",
        },
        "美音女4": {
            locale: "en-US",
            voice: "en-US-JennyNeural",
            pitch: "+0Hz",
            rate: "+0%",
            volume: "+0%",
        },
        "美音男1": {
            locale: "en-US",
            voice: "en-US-ChristopherNeural",
            pitch: "+0Hz",
            rate: "+0%",
            volume: "+0%",
        },
        "美音男2": {
            locale: "en-US",
            voice: "en-US-EricNeural",
            pitch: "+0Hz",
            rate: "+0%",
            volume: "+0%",
        },
        "美音男3": {
            locale: "en-US",
            voice: "en-US-GuyNeural",
            pitch: "+0Hz",
            rate: "+0%",
            volume: "+0%",
        },
        "美音男4": {
            locale: "en-US",
            voice: "en-US-RogerNeural",
            pitch: "+0Hz",
            rate: "+0%",
            volume: "+0%",
        },
        "美音男5": {
            locale: "en-US",
            voice: "en-US-SteffanNeural",
            pitch: "+0Hz",
            rate: "+0%",
            volume: "+0%",
        },
        "英音女1": {
            locale: "en-GB",
            voice: "en-GB-SoniaNeural",
            pitch: "+0Hz",
            rate: "+0%",
            volume: "+0%",
        },
        "英音女2": {
            locale: "en-GB",
            voice: "en-GB-MaisieNeural",
            pitch: "+0Hz",
            rate: "+0%",
            volume: "+0%",
        },
        "英音女3": {
            locale: "en-GB",
            voice: "en-GB-LibbyNeural",
            pitch: "+0Hz",
            rate: "+0%",
            volume: "+0%",
        },
        "英音男1": {
            locale: "en-GB",
            voice: "en-GB-RyanNeural",
            pitch: "+0Hz",
            rate: "+0%",
            volume: "+0%",
        },
        "英音男2": {
            locale: "en-GB",
            voice: "en-GB-ThomasNeural",
            pitch: "+0Hz",
            rate: "+0%",
            volume: "+0%",
        },
    }

    var selectedTTS = "美音女1";

    function create_edge_TTS(
        timeout = 10,
        auto_reconnect = true) {

        const TRUSTED_CLIENT_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
        const VOICES_URL = `https://speech.platform.bing.com/consumer/speech/synthesize/readaloud/voices/list?trustedclienttoken=${TRUSTED_CLIENT_TOKEN}`;
        const SYNTH_URL = `wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=${TRUSTED_CLIENT_TOKEN}`;
        const BINARY_DELIM = "Path:audio\r\n";
        const VOICE_LANG_REGEX = /\w{2}-\w{2}/;

        let _outputFormat = "audio-24khz-48kbitrate-mono-mp3";
        /* 修改发音人和语言 */
        let _voiceLocale = 'en-US',
            _voice = 'en-US-MichelleNeural',
            // 调整音色
            _pitch = '+0Hz',
            // 调整速度
            _rate = '+20%',
            // 调整音量
            _volume = '+0%';

        const _queue = {
            message: [],
            url_resolve: {},
            url_reject: {},
        };

        let ready = false;

        function _SSMLTemplate(input) {
            return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="${ttsConfig[selectedTTS].voiceLocale}">
                      <voice name="${ttsConfig[selectedTTS].voice}">
                       <prosody pitch="${ttsConfig[selectedTTS].pitch}" rate="${ttsConfig[selectedTTS].rate}" volume="${ttsConfig[selectedTTS].volume}">${input}</prosody>
                      </voice>
                  </speak>`;
        }

        function uuidv4() {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
        }

        let socket = null;
        create_new_ws();

        function setFormat(format) {
            if (format)
                _outputFormat = format;

            /**/
            socket.send(`Content-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n
                          {
                              "context": {
                                  "synthesis": {
                                      "audio": {
                                          "metadataoptions": {
                                              "sentenceBoundaryEnabled": "false",
                                              "wordBoundaryEnabled": "false"
                                          },
                                          "outputFormat": "${_outputFormat}" 
                                      }
                                  }
                              }
                          }
                      `);
        }

        async function createURL(requestId) {
            let index_message = 0;
            for (let message of _queue.message) {
                const isbinary = message instanceof Blob;

                if (!isbinary)
                    continue;

                const data = await message.text();

                //console.log(data); //does the message order change?
                //console.log(await event.data.arrayBuffer());

                const Id = /X-RequestId:(.*?)\r\n/gm.exec(data)[1];

                if (Id !== requestId)
                    continue;

                if (data.charCodeAt(0) === 0x00 && data.charCodeAt(1) === 0x67 && data.charCodeAt(2) === 0x58) {
                    // Last (empty) audio fragment
                    console.log(`Last (empty) audio fragment`)

                    const blob = new Blob(_queue[requestId], {
                        'type': 'audio/mp3'
                    });

                    _queue[requestId] = null; //release memory

                    const url = URL.createObjectURL(blob);
                    console.log(url)

                    //URL.revokeObjectURL(url);
                    _queue.url_resolve[requestId](url);

                    //return url

                } else {
                    const index = data.indexOf(BINARY_DELIM) + BINARY_DELIM.length;

                    const audioData = message.slice(index);
                    _queue[requestId].push(audioData);

                    _queue.message[index_message] = null; //release blob memory
                }

                ++index_message;
            }
        }

        function onopen(event) {
            console.log('open');
            //socket.send('Hello Server!');
            //socket.close()

            setFormat();
            ready = true;
        }

        async function onmessage(event) {
            const isbinary = event.data instanceof Blob;
            // console.log(`Message from server, type: ${typeof (event.data)} Blob: ${isbinary}`);

            _queue.message.push(event.data)

            if (!isbinary) {
                //console.log(event.data);
                const requestId = /X-RequestId:(.*?)\r\n/gm.exec(event.data)[1];

                if (event.data.includes("Path:turn.end")) {
                    // end of turn
                    createURL(requestId);
                }

            } else {
            }
        }

        function onerror(event) {
            ready = false;
            console.log('WebSocket error: ', event);
        }

        function onclose(event) {
            ready = false;
            console.log('WebSocket close: ', event); //may be closed by remote
        }

        function addSocketListeners() {
            socket.addEventListener('open', onopen);
            // Listen for messages
            socket.addEventListener('message', onmessage);

            // Listen for possible errors
            socket.addEventListener('error', onerror);

            // Listen for possible errors
            socket.addEventListener('close', onclose);
        }

        function create_new_ws() {
            //try {
            // Create WebSocket connection.
            socket = new WebSocket(SYNTH_URL);
            addSocketListeners();
        }

        let toStream = function (input) {
            let requestSSML = _SSMLTemplate(input);
            const requestId = uuidv4().replace(/-/g, '');
            // const requestId = uuidv4().replaceAll('-', '');
            const request = `X-RequestId:${requestId}\r\nContent-Type:application/ssml+xml\r\nPath:ssml\r\n\r\n
                      ` + requestSSML.trim();

            _queue[requestId] = [];

            return new Promise((resolve, reject) => {
                _queue.url_resolve[requestId] = resolve,
                    _queue.url_reject[requestId] = reject;

                if (!ready) {
                    if (auto_reconnect) {
                        create_new_ws();
                        socket.addEventListener('open', _ => socket.send(request));

                        setTimeout(_ => {
                            if (!ready)
                                reject('reconnect timeout')
                        }, timeout * 1000);
                    } else
                        reject('socket error or timeout');
                } else {
                    socket.send(request)
                }

            });

        }

        async function play(input, play_count = 1, play_span = 5000) {
            const url = await toStream(input);

            let play_resolve = function () {
            };
            // globalAudio.pause();
            !globalAudio.paused && globalAudio.pause();

            globalAudio.src = url;
            // var audio = new Audio(url);
            console.log('before play' + globalAudio.duration) //NaN
            //let play_count = 3; //repeat times
            globalAudio.onended = (e) => {
                console.log(e);
                if (--play_count > 0) {
                    console.log("play----");
                    setTimeout(_ => globalAudio.play(), play_span);
                } else {
                    //URL.revokeObjectURL(url);
                    play_resolve(url);
                    console.log('play end');
                }
            }

            await globalAudio.play();
            console.log('after play' + globalAudio.duration);

            return new Promise((resolve, reject) => {
                play_resolve = resolve
            });

        }

        return new Promise((resolve, reject) => {
            setTimeout(_ => reject('socket open timeout'), timeout * 1000);
            // Connection opened
            socket.addEventListener('open', function (event) {

                resolve({
                    _: play,
                    toStream,
                    setVoice: (voice, locale) => {
                        _voice = voice;
                        if (!locale) {
                            const voiceLangMatch = VOICE_LANG_REGEX.exec(_voice);
                            if (!voiceLangMatch)
                                throw new Error("Could not infer voiceLocale from voiceName!");
                            _voiceLocale = voiceLangMatch[0];
                        } else {
                            _voiceLocale = locale;
                        }
                    },
                    setFormat,
                    isReady: _ => ready
                })
            });
        });

    }

    var tts;

    async function init() {
        tts = await create_edge_TTS();
    }

    typeof Promise !== "undefined" && init();

    //-------------------------------

    async function speak(chn) {
        try {
            await tts._(chn)
        } catch (e) {
            console.log('catch error:')
            console.log(e)
        }
    }

});



/*
Words used for testing

"wordorigin":               // 词源
"wordfinder":               // 联想词horse
"cult":                     // 文化football
"synonyms":                 // 同义词辨析like, awful
"which_word":               // 词语辨析like, about
"colloc":                   // 词语搭配show(n.1)
"homophone":                // 同音词or
"more_about":               // 词语辨析
"mlt":                      // 同类词语学习a, up, or, be,mere
"wordfamily":               // 词族
"grammar":                  // 语法说明if, like, very
"express":                  // 情景表达like
"langbank":                 // 用语库for, up, like, about
"vocab":                    // 词汇扩充
"british_american":         // 英式 / 美式
"snippet":                  // 牛津搭配词典
"extra_examples":           // 更多例句
"verbforms":                // 动词形式
"more_about":               // 补充说明like
*/


var odeConfig = {
    /******** 词典显示 ********/
    // 【配置项：是否隐藏中文释义】
    // 选项（默认为false）：false=不隐藏，true=隐藏
    hideChineseDict: false,

    /******** 折叠控制 ********/
    // 【配置项：是否开启简明释义】
    // 选项（默认为false）：false=展开全部释义，true=折叠全部释义
    conciseMeaning: false,

    // 【配置项：是否展开折叠块 phrases, phrasal verbs】
    // 选项（默认为false）：false=否，true=是
    unfoldPhraseSections: false,

    // 【配置项：点击 phrases, phrasal verbs 跳转后，自动展开内容】
    // 选项（默认为true）：false=不展开，true=展开
    jumpsUnfold: true,

    // 【配置项：点击小火箭返回后，自动折叠内容】
    // 选项（默认为true）：false=不折叠，true=折叠
    leavesFold: true,

    // 【配置项：是否展开其他折叠块】
    // 选项（默认为true）：false=否，true=是
    unfoldOtherSection: true,

    /******** 发音相关 ********/
    // 【配置项：是否启用例句在线 TTS 发音】
    // 选项（默认为true）：false=否，true=是
    enableOnlineTTS: true,

    /******** 欧路词典相关 ********/
    // 【配置项：是否在手机 Eudic 里使用更大的屏宽】
    // 选项（默认为true）：false=否，true=是
    widerScreenEudic: true,

    // 【配置项：是否移除 Eudic 单词界面词头】（词典自带发音、生词等级等）
    // 选项（默认为true）：false=不移除，true=移除
    removeEudicHeader: true,

    /******** 其他功能 ********/
    // 【配置项：是否自动跟随系统深色模式】
    // 选项（默认为true）：false=否，true=是
    autoDarkMode: true,
};

async function initHtmlDiff() {
    const SRC_FILE = 'ODE_2024.js';
    const BUNDLE_PATH = '/dist/htmlDiff.bundle.js';

    if (typeof window.HtmlDiff !== 'undefined') return;
    try {
        const scriptPath = $(`script[src*="${SRC_FILE}"]`).attr('src').replace(/\/[^/]*$/, BUNDLE_PATH);
        await $.getScript(scriptPath);
    } catch { }
}

$(async function main() {
    await initHtmlDiff();

    $(".ode-2024").each(function () {
        const $ode = $(this);
        if ($ode.attr("script-loaded") === "true") return;
        $ode.attr("script-loaded", "true");

        // region 导航栏
        const $navigationItem = $ode.find('.navigationItem');
        const $entryContent = $ode.find('.entryContent');

        hideChineseDict();

        setupNavigation();

        function hideChineseDict() {
            if (odeConfig.hideChineseDict) {
                const $navItem = $navigationItem.filter('[data-target="EC(英中)"]');
                const $content = $entryContent.filter('[data-dictname="EC(英中)"]');

                if ($navItem.length && $content.length) {
                    $navItem.remove() && $content.remove();
                }
            }
        }

        function setActiveContent(dictname) {
            const $navItem = $navigationItem.filter(`[data-target="${dictname}"]`);
            const $content = $entryContent.filter(`[data-dictname="${dictname}"]`);

            if ($navItem.length && $content.length) {
                $navigationItem.removeClass('active');
                $entryContent.removeClass('active');
                $navItem.addClass('active');
                $content.addClass('active');
            }
        }

        function setupNavigation() {
            setActiveContent($navigationItem.first().data('target'));

            $navigationItem.on('click', function () {
                setActiveContent($(this).data('target'));
            });

            $navigationItem.each(function () {
                const $navItem = $(this);
                $navItem.data('original', $navItem.text());
            });

            function updateText(isMobile) {
                $navigationItem.each(function () {
                    const $navItem = $(this);
                    $navItem.text(isMobile ? $navItem.data('target') : $navItem.data('original'));
                });
            }

            function checkScreenSize() {
                updateText(window.matchMedia("(max-width: 768px)").matches);
            }

            // Listen for window resizing
            $(window).on('resize', checkScreenSize);
            checkScreenSize(); // Initial call
        }

        // region 折叠控制、跳转
        setupScroll();

        setupMoreInformation();

        setupSenseFold();

        initializeSections();

        setupPhraseSections();

        setupOtherSections();

        function scrollToTarget($target, offset = 100, complete = () => { }) {
            $('html, body').animate({
                scrollTop: $target.offset().top - offset
            }, 500, complete);
        }

        function setupScroll() {
            /* Back to top */
            $ode.find('.entryContent[data-dictname^="SYN"] .senseGroup .back-to-top').each(function () {
                const $backToTop = $(this);
                $backToTop.on("click", function (event) {
                    event.preventDefault();
                    scrollToTarget($('html, body'), 0);
                });
            });

            $ode.find(".entryContent").each(function () {
                const $entryContainer = $(this).find(".entryPageContent");

                /* Scroll among words */
                if ($entryContainer.length > 1) {
                    const $wordLinks = $entryContainer.find(".realTitle");
                    $wordLinks.css('cursor', 'pointer');
                    $wordLinks.each(function (index) {
                        $(this).on('click', function () {
                            const nextIndex = (index + 1) % $wordLinks.length;
                            const $nextWord = $wordLinks.eq(nextIndex);
                            scrollToTarget($nextWord);
                        });
                    });
                }

                /* Scroll among parts of speech */
                $entryContainer.each(function () {
                    const $posLinks = $(this).find(".senseGroup h2.partOfSpeechTitle .partOfSpeech");
                    $posLinks.css('cursor', 'pointer');
                    $posLinks.each(function (index) {
                        $(this).on('click', function () {
                            const nextIndex = (index + 1) % $posLinks.length;
                            const $nextPos = $posLinks.eq(nextIndex);
                            scrollToTarget($nextPos);
                        });
                    });
                });
            });
        }

        function setupMoreInformation() {
            $ode.find('.moreInformationExemples, .moreInformationSynonyms').each(function () {
                const $moreInformation = $(this);
                $moreInformation.on("click", function () {
                    $moreInformation.toggleClass("expanded");
                    $moreInformation.next().slideToggle("fast");
                });
            });

            /* view synonyms */
            $ode.find('.moreInformation .entrySynList a.entrySynMore').each(function () {
                const $synMore = $(this);
                const targetId = $synMore.data("target-id");
                const targetDictname = $synMore.data("target-dictname");

                const $targetDict = $ode.find(`.entryContent[data-dictname="${targetDictname}"]`);
                const $target = $targetDict.find(`.sense a[data-id="${targetId}"]`);

                const $container = $synMore.parent("div").prev("div");
                const $synMoreContainer = $synMore.parent("div").addClass("synMoreContainer").appendTo($container);
                if (!$target.length) {
                    $synMoreContainer.hide(); return;
                } else {
                    $container.addClass("containSynMore");
                }

                $synMore.on("click", function (event) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    setActiveContent(targetDictname);

                    const $section = $target.closest("section.phrases, section.phrasalVerbs");
                    if ($section.length && !$section.hasClass("expanded")) {
                        $section.find("h2").trigger("click");
                    }

                    const $sense = $target.closest(".sense");
                    scrollToTarget($sense, undefined, function () {
                        $sense.addClass("highlight");
                        setTimeout(() => $sense.removeClass("highlight"), 2000);
                    });
                });
            });
        }

        function setupSenseFold() {
            $ode.find('.entryPageContent').each(function () {
                const $entryContainer = $(this);
                const $entryHeader = $entryContainer.children("header.entryHeader");
                const $logoarea = $('<div>', { class: 'logoarea' }).appendTo($entryHeader);
                const $sense = $entryContainer.find('.msDict.sense, .msDict.subsense, li.sense').filter(function () {
                    return $(this).closest('section.phrases, section.phrasalVerbs').length === 0; // Exclude phrases and phrasal verbs sections
                });
                let $iterations = $();

                const adjustMargins = () => $logoarea.siblings().css('margin-right', $logoarea.outerWidth(true));
                $(adjustMargins); // Initial call
                $(window).on('resize', adjustMargins); // Listen for window resizing
                $navigationItem.on('click', adjustMargins); // Listen for navigation item clicks

                const dictname = $entryContainer.closest(".entryContent").data("dictname")

                $sense.each(function () {
                    const $senseInnerWrapper = $(this).children('.senseInnerWrapper');
                    const $iteration = $senseInnerWrapper.children('.iteration').length
                        ? $senseInnerWrapper.children('.iteration')
                        : $("<span>", { class: "iteration", text: "❑" }).insertAfter($senseInnerWrapper.addClass("weird").children().eq(0));

                    if (!dictname.startsWith("ENG")) return; // Only apply sense fold to English dictionaries

                    const $collapsibleElements = $senseInnerWrapper.children(".exampleGroup, .moreInformation, .sense-note");
                    if ($collapsibleElements.length) {
                        $iterations = $iterations.add($iteration);
                        $iteration.css('cursor', 'pointer').on("click", function () {
                            $iteration.toggleClass("expanded");
                            $collapsibleElements.slideToggle("fast");
                        });
                    }
                });

                if (dictname.startsWith("ENG")) {
                    $iterations.addClass("expanded"); // 默认展开
                    if (odeConfig.conciseMeaning) { // 默认折叠
                        $iterations.trigger("click");
                    }

                    const $conciseButton = $('<span>', { class: 'conciseButton', text: 'Concise' }).appendTo($logoarea);
                    $conciseButton.on('click', function () {
                        const $isExpanded = $iterations.filter('.expanded');
                        ($isExpanded.length ? $isExpanded : $iterations).trigger('click');
                    });
                }
            });
        }

        function initializeSections() {
            $ode.find('.entryBilingual section').each(function () {
                const $section = $(this);
                const $heading = $section.children("h2");

                if ($heading.text() === "Phrasal verbs") {
                    $section.addClass('phrasalVerbs');
                }
            });
        }

        function setupPhraseSections() {
            $ode.find("section.phrases, section.phrasalVerbs").each(function () {
                const $section = $(this);
                const $heading = $section.children("h2");
                const $content = $heading.next();
                const $entryContainer = $section.closest(".entryPageContent").append($section); // Move to the end
                const $entryHeader = $entryContainer.children("header.entryHeader");
                const $jumplinkContainer = $entryHeader.find(".jumplinks").length ? $entryHeader.find(".jumplinks") : $("<div>", { class: "jumplinks" }).appendTo($entryHeader);
                const $jumpLink = $("<span>", { class: "jumplink", text: $heading.text(), "data-title": $heading.text() }).appendTo($jumplinkContainer);
                const $backLink = $("<span>", { class: "jumplink_back" }).appendTo($heading);

                $heading.on("click", function () {
                    $section.toggleClass("expanded");
                    $content.slideToggle("fast");
                });

                $section.addClass("expanded"); // 默认展开
                if (!odeConfig.unfoldPhraseSections) { // 默认折叠
                    Promise.resolve().then(() => $heading.trigger("click")); // GoldenDict-ng Mystery BUG!
                }

                $jumpLink.on("click", () => scrollToTarget($section, undefined, function () {
                    if (odeConfig.jumpsUnfold && !$section.hasClass("expanded")) {
                        $heading.trigger("click");
                    }
                }));

                $backLink.on("click", (event) => {
                    event.stopPropagation();
                    scrollToTarget($jumpLink, undefined, function () {
                        if (odeConfig.leavesFold && $section.hasClass("expanded")) {
                            $heading.trigger("click");
                        }
                    });
                });
            });
        }

        function setupOtherSections() {
            $ode.find("section.subEntryBlock, section.etymology").each(function () {
                const $section = $(this);
                const $heading = $section.find("h2");
                $section.attr("data-title", $heading.text());

                if ($section.data("title").startsWith("Phra")) return;

                if ($section.data("title") === "Compounds") $section.attr("data-title", "Phrases");

                if ($section.data("title").startsWith("Words that rhyme with")) {
                    const $contentToWrap = $section.children(".senseInnerWrapper").contents().not($heading);
                    $contentToWrap.wrapAll("<p class='rhyme-words'></p>");
                }

                $heading.on("click", function () {
                    $section.toggleClass("expanded");
                    $(this).siblings().slideToggle("fast");
                });

                $section.addClass("expanded"); // 默认展开
                if (!odeConfig.unfoldOtherSection) { // 默认折叠
                    $heading.trigger("click");
                }
            });
        }

        // region 发音相关
        const globalAudio = new Audio();

        setupOnlinePronunciation();

        function setupOnlinePronunciation() {
            // Determine OGG support
            const oggSupported = new Audio().canPlayType('audio/ogg') !== "";

            // Assume offline audio is supported initially
            let offlineAudioSupported = true;

            $ode.find('a.sound').each(function () {
                const $audio = $(this);
                const href_offline = isEudicPC() ? $audio.attr('href') : $audio.attr('href').replace('sound://', '');
                const href_ogg = $audio.attr('data-href');
                const href_mp3 = href_ogg.replace('/uk_pron_ogg/', '/uk_pron/').replace('/us_pron_ogg/', '/us_pron/').replace('.ogg', '.mp3');

                function playAudio() {
                    const audioSrc = offlineAudioSupported ? href_offline : (oggSupported ? href_ogg : href_mp3);
                    const playType = offlineAudioSupported ? 'offline' : 'online';
                    console.log(`(${playType}) audio: ${audioSrc}`);

                    globalAudio.src = audioSrc;
                    globalAudio.play().catch((error) => {
                        console.error(`Failed to play ${playType} audio.`, error);
                        if (offlineAudioSupported) {
                            offlineAudioSupported = false;
                            playAudio(); // Retry with online audio
                        }
                    });
                }

                $audio.on('click', function (event) {
                    event.stopPropagation();
                    event.preventDefault();
                    if (!globalAudio.paused) globalAudio.pause();
                    playAudio();
                });
            });
        }

        // region 样式调整
        setupSubsense();

        setupLabel();

        setupBilingual();

        setupIllustration();

        detectDarkModeEnabled();

        function setupSubsense() {
            const $subsense = $ode.find('.senseGroup .subsense');
            $subsense.parent().each(function () {
                const $parent = $(this);
                const $subsense = $parent.children('.subsense');

                $subsense.first().css({
                    "padding-top": ".5em",
                    "border-top-left-radius": "10px",
                    "border-top-right-radius": "10px"
                });
                $subsense.last().css({
                    "padding-bottom": ".5em",
                    "border-bottom-left-radius": "10px",
                    "border-bottom-right-radius": "10px"
                });
            });
        }

        function setupLabel() {
            $ode.find(".reg").each(function () {
                const $reg = $(this);
                const originalText = $reg.text();

                if (originalText === "•") {
                    $reg.addClass("bullet"); return;
                }

                const trimmedText = originalText.trim();
                if (" " + trimmedText === originalText) {
                    $reg.replaceWith(" " + $reg.text(trimmedText).addClass("trimmed").prop("outerHTML"));
                }
            });

            $ode.find(".variantGroup").each(function () {
                const $variantGroup = $(this);
                const $leftParenthesis = $variantGroup.contents().first();

                if ($leftParenthesis[0].nodeType === Node.TEXT_NODE && $leftParenthesis[0].nodeValue === "( ") {
                    $leftParenthesis[0].nodeValue = "(";
                    $variantGroup.addClass("trimmed");
                }
            });
        }

        function setupBilingual() {
            $ode.find('.entryBilingual').each(function () {
                const $entryContainer = $(this);
                const $entryHeader = $entryContainer.children("header.entryHeader");
                const $headpron = $entryHeader.children('.headpron');
                if ($headpron.contents().length === 0) $headpron.remove(); // Remove empty headpron
            });
        }

        function setupIllustration() {
            $ode.find(".msDict.sense > img").on("click", function () {
                $(this).toggleClass("enlarged");
            });
        }

        function detectDarkModeEnabled() {
            if (!odeConfig.autoDarkMode) return;

            if (!isGoldenDict() && !isEudic()) {
                const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                const handleThemeChange = (event) => {
                    const isDarkMode = event.matches;
                    $ode.attr('data-theme', isDarkMode ? 'dark' : 'light');
                    if (isPreview()) $('body').css('background-color', isDarkMode ? 'rgb(26, 26, 26)' : '');
                };

                handleThemeChange(darkModeMediaQuery); // Initial check
                darkModeMediaQuery.addEventListener('change', handleThemeChange); // Listen for changes

                return;
            }

            if (isGoldenDict()) {
                $ode.attr('data-theme', $('html').attr('data-darkreader-scheme') === 'dark' ? 'dark' : 'light');
                return;
            }

            // Delete the Eudic fixed style to prevent conflicts
            $ode.siblings('.eudic_custom_night').remove(); // Initial check
            if (!$ode.parent().attr('observer-attached')) {
                new MutationObserver((mutationsList) => {
                    mutationsList.forEach((mutation) => {
                        mutation.addedNodes.forEach((node) => {
                            if (node.classList?.contains('eudic_custom_night')) node.remove();
                        });
                    });
                }).observe($ode.parent()[0], { childList: true });
                $ode.parent().attr('observer-attached', 'true');
            }

            // Set the theme based on the body's class
            const setEudicTheme = () => $ode.attr('data-theme', $('body').is('.black, .night') ? 'dark' : 'light');
            setEudicTheme(); // Initial check
            new MutationObserver((mutationsList) => {
                mutationsList.forEach((mutation) => {
                    if (mutation.attributeName === 'class') {
                        setEudicTheme();
                    }
                });
            }).observe(document.body, { attributes: true, attributeFilter: ['class'] });
        }

        // region 欧路词典相关
        Eudic_widerScreen();

        Eudic_removeHeader();

        function Eudic_widerScreen() {
            if (odeConfig.widerScreenEudic && isEudicAPP()) {
                $ode.parent().css({ margin: "5px 8px 5px 5px", padding: "unset" });
            }
        }

        function Eudic_removeHeader() {
            if (odeConfig.removeEudicHeader && isEudic()) {
                $('#wordInfoHead').remove();
            }
        }

        // region Helper functions
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

        function isGoldenDict() {
            var ua = navigator.userAgent.toLowerCase();
            return ua.indexOf("goldendict") > -1;
        }

        function isPreview() {
            return window.self !== window.top && parent.$('#k_iframe').length;
        }

        // region TTS 相关
        (function initTTS() {
            if (!odeConfig.enableOnlineTTS) return;

            const ttsService = createEdgeTTS();

            const ttsConfig = {
                "UK": { locale: "en-GB", voice: "en-GB-RyanNeural", pitch: "+0Hz", rate: "+0%", volume: "+0%" },
                "US": { locale: "en-US", voice: "en-US-JennyNeural", pitch: "+0Hz", rate: "+0%", volume: "+0%" }
            };

            $ode.find('.entryContent[data-dictname^="ENG"]').each(function () {
                const $entryContent = $(this);
                const dictname = $entryContent.data('dictname');

                $entryContent.find('.exampleGroup em.example, li.sentence').each(function () {
                    const $example = $(this);
                    const text = $example.text();

                    const $speaker = $('<a>', { class: 'sound-ai' }).prependTo($example);
                    $speaker.on('click', () => ttsService.playText(text, dictname === "ENG(UK)" ? ttsConfig["UK"] : ttsConfig["US"]));
                });
            });

            $ode.attr("enable-tts", "true");
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
});

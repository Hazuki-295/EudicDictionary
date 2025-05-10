/* ********用户自定义配置区开始******** */

var odeConfig = {
    /******** 折叠控制 ********/
    // 【配置项1：是否展开释义】
    // 选项（默认为true）：false=否，true=是
    unfoldSense: true,

    // 【配置项2：是否展开 Phrase Sections】（Phrases, Phrasal Verbs）
    // 选项（默认为false）：false=不展开，true=展开
    unfoldPhraseSections: false,

    // 【配置项3：点击 Phrases, Phrasal Verbs 跳转后，自动展开内容】
    // 选项（默认为true）：false=不展开，true=展开
    jumpsUnfold: true,

    // 【配置项4：点击小火箭返回后，自动折叠内容】
    // 选项（默认为true）：false=不折叠，true=折叠
    leavesFold: true,

    // 【配置项5：是否展开其他折叠块】
    // 选项（默认为true）：false=否，true=是
    unfoldOtherSections: true,

    /******** 发音相关 ********/
    // 【配置项6：是否启用在线单词发音】（如果为 true，则可删除 ODE_2024.1.mdd 文件）
    // 选项（默认为false）：false=否，true=是
    onlineWordPron: false,

    // 【配置项7：是否启用例句在线 TTS 发音】
    // 选项（默认为true）：false=否，true=是
    enableOnlineTTS: true,

    /******** 欧路词典相关 ********/
    // 【配置项8：是否在手机 Eudic 里使用更大的屏宽】
    // 选项（默认为true）：false=否，true=是
    widerScreenEudic: true,

    // 【配置项9：是否移除 Eudic 单词界面词头】（词典自带发音、生词等级等）
    // 选项（默认为true）：false=不移除，true=移除
    removeEudicHeader: true,

    /******** 其他功能 ********/
    // 【配置项10：是否自动跟随系统深色模式】
    // 选项（默认为true）：false=否，true=是
    autoDarkMode: true,
};

/* ********用户自定义配置区结束******** */

$(function main() {
    const SRC_FILE = 'ODE_2024.js';
    const SRC_PATH = isPreview() ? '/api/static' : $(`script[src*="${SRC_FILE}"]`).attr('src').replace(/\/[^/]*$/, '');

    $('.ode-2024').each(function () {
        const $ode = $(this);
        if ($ode.attr('script-loaded') === 'true') return;
        $ode.attr('script-loaded', 'true');

        // region 导航栏
        const $navigationItem = $ode.find('.navigationItem');
        const $entryContent = $ode.find('.entryContent');

        setupNavigation();

        function setActiveContent(dictname) {
            const $navItem = $navigationItem.filter(`[data-target="${dictname}"]`);
            const $content = $entryContent.filter(`[data-dictname="${dictname}"]`);

            if (!$navItem.hasClass('active')) {
                $navItem.addClass('active');
                $navItem.siblings().removeClass('active');

                $content.show();
                $content.siblings().hide();
            }
        }

        function setupNavigation() {
            $navigationItem.first().addClass('active');

            $navigationItem.on('click', function () {
                setActiveContent($(this).data('target'));
            });

            $navigationItem.each(function () {
                const $navItem = $(this);
                $navItem.data('description', $navItem.text());
            });

            function updateText(isMobile) {
                $navigationItem.each(function () {
                    const $navItem = $(this);
                    $navItem.text(isMobile ? $navItem.data('target') : $navItem.data('description'));
                });
            }

            function checkScreenSize() {
                updateText(window.matchMedia('(max-width: 768px)').matches);
            }

            // Listen for window resizing
            $(window).on('resize', checkScreenSize);
            checkScreenSize(); // Initial call
        }

        // region 折叠控制、跳转
        setupScroll();

        setupSenseFold();

        setupPhraseSections();

        setupOtherSections();

        setupMoreInformation();

        function scrollToTarget($target, offset = 100, complete = () => { }) {
            $('html, body').animate({
                scrollTop: $target.offset().top - offset
            }, 500, complete);
        }

        function setupScroll() {
            /* Back to top */
            $entryContent.filter(`[data-dictname^="SYN"]`).find('.senseGroup .back-to-top').each(function () {
                $(this).on('click', function (event) {
                    event.preventDefault();
                    scrollToTarget($ode);
                });
            });

            $entryContent.each(function () {
                const $entryPageContent = $(this).find('.entryPageContent');

                /* Scroll among words */
                if ($entryPageContent.length > 1) {
                    const $wordLinks = $entryPageContent.find('.realTitle');
                    $wordLinks.css('cursor', 'pointer').each(function (index) {
                        $(this).on('click', function () {
                            const nextIndex = (index + 1) % $wordLinks.length;
                            const $nextWord = $wordLinks.eq(nextIndex);
                            scrollToTarget($nextWord);
                        });
                    });
                }

                /* Scroll among parts of speech */
                $entryPageContent.each(function () {
                    const $posLinks = $(this).find('.senseGroup h2.partOfSpeechTitle .partOfSpeech');
                    $posLinks.css('cursor', 'pointer').each(function (index) {
                        $(this).on('click', function () {
                            const nextIndex = (index + 1) % $posLinks.length;
                            const $nextPos = $posLinks.eq(nextIndex);
                            scrollToTarget($nextPos);
                        });
                    });
                });
            });
        }

        function setupSenseFold() {
            $entryContent.filter(`[data-dictname^="ENG"]`).each(function () {
                const $entryPageContent = $(this).find('.entryPageContent');
                const $sense = $entryPageContent.find('.msDict.sense, .msDict.subsense').filter(function () {
                    return $(this).closest('section.phrases, section.phrasalVerbs').length === 0; // Exclude Phrases and Phrasal Verbs sections
                });

                const allIteration = [];

                $sense.each(function () {
                    const $senseInnerWrapper = $(this).children('.senseInnerWrapper');
                    const $iteration = $senseInnerWrapper.children('.iteration');
                    const $senseExpand = $senseInnerWrapper.children('.exampleGroup, .moreInformation, .sense-note');

                    if (!$senseExpand.length) return;
                    $iteration.css('cursor', 'pointer').on('click', function () {
                        $iteration.toggleClass('folded');
                        $senseExpand.slideToggle('fast');
                    });

                    if (!odeConfig.unfoldSense) {
                        $iteration.addClass('folded');
                        $senseExpand.hide();
                    }

                    allIteration.push($iteration.get(0));
                });

                const $allIteration = $(allIteration);
                const $logoarea = $entryPageContent.find('.logoarea');
                $logoarea.css('cursor', 'pointer').on('click', function () {
                    const $folded = $allIteration.filter('.folded');
                    ($folded.length ? $folded : $allIteration).trigger('click');
                });
            });
        }

        function setupPhraseSections() {
            $entryContent.find('.entryPageContent').each(function () {
                const $entryPageContent = $(this);
                const $phraseSections = $entryPageContent.children('section.phrases, section.phrasalVerbs');

                $phraseSections.each(function () {
                    const $section = $(this);
                    const $heading = $section.children('h2');
                    const $content = $heading.next();
                    const $jumpLink = $entryPageContent.find(`.jumplink[data-title="${$heading.text()}"]`);
                    const $backLink = $('<span>', { class: 'jumplink_back' }).appendTo($heading);

                    $heading.on('click', function () {
                        $content.fadeToggle('fast');
                        $section.toggleClass('expanded');
                    });

                    if (odeConfig.unfoldPhraseSections) {
                        $content.show();
                        $section.addClass('expanded');
                    }

                    $jumpLink.on('click', () => scrollToTarget($section, undefined, function () {
                        if (odeConfig.jumpsUnfold && !$section.hasClass('expanded')) {
                            $heading.trigger('click');
                        }
                    }));

                    $backLink.on('click', function (event) {
                        event.stopPropagation();
                        scrollToTarget($jumpLink, undefined, function () {
                            if (odeConfig.leavesFold && $section.hasClass('expanded')) {
                                $heading.trigger('click');
                            }
                        });
                    });
                });
            });
        }

        function setupOtherSections() {
            $ode.find('section.subEntryBlock:not([data-title^="Phra"]), section.etymology').each(function () {
                const $section = $(this);
                const $heading = $section.find('h2');
                const $content = $heading.siblings();

                $heading.on('click', function () {
                    $content.slideToggle('fast');
                    $section.toggleClass('expanded');
                });

                if (odeConfig.unfoldOtherSections) {
                    $content.show();
                    $section.addClass('expanded');
                }
            });
        }

        function setupMoreInformation() {
            $ode.find('.moreInformationExemples, .moreInformationSynonyms').each(function () {
                const $moreInformation = $(this);
                $moreInformation.on('click', function () {
                    $moreInformation.toggleClass('expanded');
                    $moreInformation.next().slideToggle('fast');
                });
            });

            /* view synonyms */
            $ode.find('.moreInformation .entrySynList a.entrySynMore').each(function () {
                const $synMore = $(this);
                const targetId = $synMore.data('target-id');
                const targetDictname = $synMore.data('target-dictname');

                const $targetDict = $entryContent.filter(`[data-dictname="${targetDictname}"]`);
                const $target = $targetDict.find(`.sense a[data-id="${targetId}"]`);

                $synMore.on('click', function (event) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    setActiveContent(targetDictname);

                    const $section = $target.closest('section.phrases, section.phrasalVerbs');
                    if ($section.length && !$section.hasClass('expanded')) {
                        const $heading = $section.children('h2');
                        $heading.trigger('click');
                    }

                    const $sense = $target.closest('.sense');
                    scrollToTarget($sense, undefined, function () {
                        $sense.addClass('highlight');
                        setTimeout(() => $sense.removeClass('highlight'), 2000);
                    });
                });
            });
        }

        // region 发音相关
        const globalAudio = new Audio();

        setupWordPron();

        function setupWordPron() {
            $ode.find('.audio_play_button').each(function () {
                const $audio = $(this);
                const $phon = $audio.prev('.phon');
                $phon.css('cursor', 'pointer').on('click', () => $audio[0].click());

                if (odeConfig.onlineWordPron) {
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

        // region 其他功能
        setupImage();

        detectDarkModeEnabled();

        function setupImage() {
            $ode.find('.msDict.sense > img').on('click', function () {
                $(this).toggleClass('enlarged');
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
                $ode.parent().css({ margin: '5px 8px 5px 5px', padding: 'unset' });
            }
        }

        function Eudic_removeHeader() {
            if (odeConfig.removeEudicHeader && isEudic()) {
                $('#wordInfoHead').remove();
            }
        }

        // region TTS 相关
        const ttsConfig = {
            'UK': { locale: 'en-GB', voice: 'en-GB-RyanNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' },
            'US': { locale: 'en-US', voice: 'en-US-JennyNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' }
        };

        (async function initTTS() {
            if (!odeConfig.enableOnlineTTS) return;

            try {
                await $.getScript(`${SRC_PATH}/crypto-js.min.js`);
                if (typeof CryptoJS === 'undefined') throw new Error();
            } catch {
                await $.getScript('https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js');
            }

            const ttsService = createEdgeTTS();

            $entryContent.filter(`[data-dictname^="ENG"]`).each(function () {
                const $entryContent = $(this);

                $entryContent.find('.exampleGroup em.example, li.sentence').each(function () {
                    const $example = $(this);

                    const $audio = $('<a>', { class: 'audio_play_button tts' }).appendTo($example);
                    $audio.on('click', (event) => {
                        event.stopPropagation();
                        event.preventDefault();

                        const inputText = $example.text();

                        ttsService.playText(inputText, $entryContent.data('dictname') === 'ENG(UK)' ? ttsConfig['UK'] : ttsConfig['US']);
                    });
                });
            });

            $ode.attr('enable-tts', 'true');
        })();

        function createEdgeTTS() {
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

    // region Helper functions
    function isEudic() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf('eudic') > -1;
    }

    function isEudicAPP() {
        var ua = navigator.userAgent.toLowerCase();
        return (ua.indexOf('eudic') > -1) && (ua.indexOf('android') > -1 || ua.indexOf('iphone') > -1);
    }

    function isGoldenDict() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf('goldendict') > -1;
    }

    function isPreview() {
        return window.self !== window.top && parent.$('#k_iframe').length;
    }
});

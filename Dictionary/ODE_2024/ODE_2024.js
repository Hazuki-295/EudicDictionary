var odeConfig = {
    /******** 折叠控制 ********/
    // 【配置项：是否开启简明释义】
    // 选项（默认为false）：false=展开全部释义，true=折叠全部释义
    conciseMeaning: false,

    // 【配置项：是否展开折叠块 phrases, phrasal verbs】
    // 选项（默认为false）：false=否，true=是
    unfoldPhraseSection: false,

    // 【配置项：点击 phrases, phrasal verbs 跳转后，自动展开内容】
    // 选项（默认为true）：false=不展开，true=展开
    jumpsUnfold: true,

    // 【配置项：点击小火箭返回后，自动折叠内容】
    // 选项（默认为true）：false=不折叠，true=折叠
    leavesFold: true,

    // 【配置项：是否展开其他折叠块】
    // 选项（默认为true）：false=否，true=是
    unfoldOtherSection: true,
};

(function () {
    const $ = window.jQuery;

    // avoid repeated execution
    $(".ode-2024").each(function () {
        const $ode = $(this);
        if ($ode.attr("script-loaded") === "true") return;
        $ode.attr("script-loaded", "true");

        // region 导航栏
        const $navigationItem = $ode.find('.navigationItem');
        const $entryContent = $ode.find('.entryContent');

        setupNavigation();

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

        function scrollToTarget(target, offset = 100, complete = () => { }) {
            $('html, body').animate({
                scrollTop: target.offset().top - offset
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
                const $sense = $entryContainer.find('.msDict.sense, .msDict.subsense');
                let $iterations = $();

                const dictname = $entryContainer.closest(".entryContent").data("dictname")
                if (!dictname.startsWith("ENG")) return;

                $sense.each(function () {
                    const $senseInnerWrapper = $(this).children('.senseInnerWrapper');
                    const $iteration = $senseInnerWrapper.children('.iteration').length
                        ? $senseInnerWrapper.children('.iteration')
                        : $("<span>", { class: "iteration", text: "❑" }).insertAfter($senseInnerWrapper.addClass("weird").children().eq(0));

                    const $collapsibleElements = $senseInnerWrapper.children(".exampleGroup, .moreInformation, .sense-note");
                    if ($collapsibleElements.length) {
                        $iterations = $iterations.add($iteration);
                        $iteration.css('cursor', 'pointer').on("click", function () {
                            $iteration.toggleClass("expanded");
                            $collapsibleElements.slideToggle("fast");
                        });
                    }
                });

                $iterations.addClass("expanded"); // 默认展开
                if (odeConfig.conciseMeaning) { // 默认折叠
                    $iterations.trigger("click");
                }

                const $conciseButton = $('<span>', { class: 'conciseButton', text: 'Concise' }).appendTo($logoarea);
                $conciseButton.on('click', function () {
                    const $isExpanded = $iterations.filter('.expanded');
                    ($isExpanded.length ? $isExpanded : $iterations).trigger('click');
                });
            });
        }

        function initializeSections() {
            $ode.find('.entryContent[data-dictname="EC(英中)"] section').each(function () {
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
                const $entryContainer = $section.closest(".entryPageContent");
                const $entryHeader = $entryContainer.children("header.entryHeader");
                const $jumplinkContainer = $entryHeader.find(".jumplinks").length ? $entryHeader.find(".jumplinks") : $("<div>", { class: "jumplinks" }).appendTo($entryHeader);

                const $heading = $section.children("h2");
                $heading.on("click", function () {
                    $section.toggleClass("expanded");
                    $(this).next().slideToggle("fast");
                });

                $section.addClass("expanded"); // 默认展开
                if (!odeConfig.unfoldPhraseSection) { // 默认折叠
                    $heading.trigger("click");
                }

                const $jumpLink = $("<span>", { class: "jumplink", text: $heading.text(), "data-title": $heading.text() })
                    .appendTo($jumplinkContainer)
                    .on("click", () => scrollToTarget($section, undefined, function () {
                        if (odeConfig.jumpsUnfold && !$section.hasClass("expanded")) {
                            $heading.trigger("click");
                        }
                    }));

                const $backLink = $("<span>", { class: "jumplink_back" })
                    .appendTo($heading)
                    .on("click", (event) => {
                        event.stopPropagation();
                        scrollToTarget($jumpLink, undefined, function () {
                            if (odeConfig.leavesFold && $section.hasClass("expanded")) {
                                $heading.trigger("click");
                            }
                        });
                    });

                $section.appendTo($entryContainer);
            });
        }

        function setupOtherSections() {
            $ode.find("section.subEntryBlock:not(.phrases, .phrasalVerbs), section.etymology").each(function () {
                const $section = $(this);
                const $heading = $section.find("h2");
                $section.attr("data-title", $heading.text());

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
            const $audio = $ode.find('a.sound');
            $audio.click(function (event) {
                event.stopPropagation();

                const $this = $(this);
                const offlineHref = $this.attr('href');
                const onlineHref = $this.attr('data-href');

                if (!globalAudio.paused) globalAudio.pause();
                globalAudio.src = offlineHref;
                globalAudio.play().then(() => {
                    console.log(`(offline) audio: ${globalAudio.src}`);
                }).catch(() => {
                    console.log(`(offline) audio: ${globalAudio.src}`);
                    console.log(`Failed to play offline audio, fallback to online audio.`);
                    globalAudio.src = onlineHref;
                    globalAudio.play().then(() => {
                        console.log(`(online) audio: ${globalAudio.src}`);
                    }).catch((error) => {
                        console.log(`(online) audio: ${globalAudio.src}`);
                        console.log(`Failed to play online audio.`);
                        console.error(error);
                    });
                });

                event.preventDefault();
            });
        }

        // region 样式调整
        setupSubsense();

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
    });
})();
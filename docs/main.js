(() => {
  "use strict";
  const copy = {
    en: {
      skip: "Skip to content",
      navManage: "Organize",
      navSearch: "Search",
      navCreate: "Create",
      navPricing: "Pricing",
      navDownload: "Download",
      heroLineOne: "Your data, well organized.",
      heroLineTwo: "Easy to find. A joy to use.",
      intro:
        "An agent-powered platform for managing and using your local data.",
      download: "Download for Windows",
      watch: "Watch demo",
      highlightsLabel: "Product highlights",
      formatsDetail: "File formats",
      indexingTitle: "Local indexing",
      indexingDetail: "Paths unchanged",
      localAiTitle: "Local AI",
      localAiDetail: "Local or API",
      localAiDescription: "Image and video models: local deployment or API",
      securityTitle: "Data security",
      securityDetail: "Stored locally",
      promoTitle: "See Everything Agent in action.",
      demoSoon: "Demo coming soon",
      manageTitle: "A place for everything.",
      collectionsTitle: "Organize your way.",
      collectionsDescription:
        "Group assets into collections, then open a folder to browse what belongs together.",
      searchTitle: "A clue is all you need.",
      documentTitle: "Ask your documents.",
      documentQuery: "What is the contract amount for the GEO system?",
      documentDescription: "Answers grounded in the content of your documents.",
      mediaTitle: "Find the exact moment.",
      mediaQuery:
        "Find the segment about building China’s domestic AI computing ecosystem.",
      mediaDescription: "Go from a remembered topic to the relevant segment.",
      imageTitle: "Find a video from a frame.",
      imageQuery:
        "Find the video containing this frame and show me where it appears.",
      imageDescription: "Use a frame as the starting point for your search.",
      personTitle: "Find familiar faces.",
      personQuery: "Find group photos featuring this person.",
      personDescription: "Look for a person across the photos in your library.",
      createTitle: "Make something of your own.",
      canvasTitle: "Your assets. An infinite canvas.",
      canvasDescription:
        "Connect your product assets to new posters and videos, with the agent alongside your canvas.",
      workshopTitle: "Describe it. Let the agent create.",
      workshopDescription:
        "The agent selects the tools, configures the task, and generates your result.",
      concept: "Concept illustration",
      pricingTitle: "Pricing",
      pricingDescription: "From personal creation to a shared team library.",
      freePlan: "Free",
      freeAudience: "For personal creators",
      freeDetail: "The GitHub edition",
      freeLibrary: "Basic asset library",
      freeWorkshop: "Generation Workshop",
      freeAction: "Download Free",
      personalPlan: "Personal",
      personalAudience: "For creators who want it all",
      personalDetail: "The full personal edition",
      personalIncludes: "Everything in Free",
      personalPublishing: "PPT & WeChat articles",
      personalCreation: "Infinite Canvas & smart editing",
      personalExtensions: "Additional extensions",
      personalUpdates: "Regular feature updates",
      personalAction: "Contact to purchase",
      teamPlan: "Team",
      teamAudience: "For teams sharing assets",
      teamPrice: "Custom",
      teamDetail: "Built around your team's needs",
      teamIncludes: "All Personal features",
      teamLibrary: "Shared team asset library",
      teamCustomization: "Enterprise customization",
      teamAction: "Contact us",
      downloadTitle: "Get Everything Agent.",
      licenseCopy:
        "The Free edition is free for personal, non-commercial use. Contact the developer for paid plans or commercial licensing.",
      licenseLink: "Full license",
      contactTitle: "Contact the developer",
      wechat: "WeChat",
      copyWechat: "Copy WeChat ID",
      copyEmail: "Copy email address",
      copyHomepage: "Copy homepage address",
      copiedEmail: "Email copied",
      copiedHomepage: "Homepage copied",
      copyAddressFailed: "Couldn’t copy. Please try again.",
      copied: "WeChat ID copied",
      homepage: "Homepage",
      email: "Email",
      close: "Close",
      actualSize: "Actual size",
      fitImage: "Fit to screen",
      previewHint: "Scroll at actual size to explore the details",
      title: "Everything Agent — Your data, well organized",
      description:
        "An agent-powered platform for managing and using your local data.",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      navigation: "Main navigation",
      language: "Language",
      zoom: "View original image",
      closePreview: "Close image preview",
      previewArea: "Image preview; use arrow keys to scroll",
      footerNavigation: "Product links",
      videoLabel: "Everything Agent product demo",
      videoUnavailable: "Demo temporarily unavailable",
      conceptAlt: "Concept illustration, not a product screenshot",
      analysisImageSummary:
        "Scene descriptions and tags make the contents of an image searchable.",
      analysisVideoSummary:
        "AI describes the action and scene changes in your video.",
      analysisAudioSummary:
        "Turn spoken words into a transcript with timestamps.",
      analysisDocumentSummary:
        "Extract document text with page references for later search.",
      peopleTitle: "A library, organized by faces.",
      peopleDescription:
        "Recognize faces, group them by person, and find the assets each person appears in.",
      analysisImageTitle: "Images, understood.",
      analysisVideoTitle: "Understand what happens on screen.",
      analysisAudioTitle: "Spoken words, written down.",
      analysisDocumentTitle: "Document content, extracted.",
    },
    zh: {
      skip: "跳到正文",
      navManage: "数据管理",
      navSearch: "数据检索",
      navCreate: "创作空间",
      navPricing: "定价方案",
      navDownload: "下载 Windows 版",
      heroLineOne: "让数据管得好，",
      heroLineTwo: "找得到，用得爽。",
      intro: "Agent 驱动的本地数据管理与数据应用平台。",
      download: "下载 Windows 版",
      watch: "观看演示",
      highlightsLabel: "产品特性",
      formatsDetail: "文件格式",
      indexingTitle: "本地索引",
      indexingDetail: "不改变源文件路径",
      localAiTitle: "AI 能力本地化",
      localAiDetail: "图片、视频模型支持本地部署或 API",
      localAiDescription: "图片、视频模型支持本地部署或 API",
      securityTitle: "数据安全",
      securityDetail: "数据全都存储在本地",
      promoTitle: "看看 Everything Agent 如何工作。",
      demoSoon: "演示即将上线",
      manageTitle: "让素材，各就其位。",
      collectionsTitle: "按你的方式，组织素材。",
      collectionsDescription:
        "用分类文件夹组织素材，展开预览，再进入分类查看内容。",
      searchTitle: "从一点线索，找到所需。",
      documentTitle: "文档细节，一问便知。",
      documentQuery: "GEO 系统的合同金额是多少？",
      documentDescription: "根据文档内容回答，并提供原文依据。",
      mediaTitle: "音视频细节，精准定位。",
      mediaQuery: "找视频里讲国产 AI 算力生态建设的画面。",
      mediaDescription: "描述记得的内容，定位相关音视频片段。",
      imageTitle: "一张截图，找到对应视频。",
      imageQuery: "找到出现过这张画面的视频，并定位出现的位置。",
      imageDescription: "用一张画面作为检索起点。",
      personTitle: "找到这个人出现的合照。",
      personQuery: "找出资产库里这个人出现的合照。",
      personDescription: "从资产库的照片中查找指定人物。",
      createTitle: "让自己的素材，成为作品。",
      canvasTitle: "你的素材，无限创作。",
      canvasDescription:
        "将产品素材连接到新的海报与视频，让 Agent 在画布中协助创作。",
      workshopTitle: "说出想法，Agent 完成创作。",
      workshopDescription: "Agent 自动选择生成模块、填写参数，完成生成任务。",
      concept: "功能示意",
      pricingTitle: "定价方案",
      pricingDescription: "从个人创作，到团队共享资产库。",
      freePlan: "Free 免费版",
      freeAudience: "面向个人创作者",
      freeDetail: "GitHub 上的公开版本",
      freeLibrary: "基础数据资产库",
      freeWorkshop: "生成工坊",
      freeAction: "下载免费版",
      personalPlan: "个人完整版",
      personalAudience: "面向需要完整功能的个人创作者",
      personalDetail: "完整的个人创作体验",
      personalIncludes: "包含免费版全部功能",
      personalPublishing: "PPT 与公众号创作",
      personalCreation: "无限画布与智能剪辑",
      personalExtensions: "更多扩展功能",
      personalUpdates: "定期功能更新",
      personalAction: "联系购买",
      teamPlan: "团队版",
      teamAudience: "面向需要共享素材的团队",
      teamPrice: "定制报价",
      teamDetail: "根据团队需求沟通方案",
      teamIncludes: "包含个人完整版全部功能",
      teamLibrary: "团队共享数据资产库",
      teamCustomization: "企业级定制",
      teamAction: "联系定制",
      downloadTitle: "开始使用 Everything Agent。",
      licenseCopy:
        "免费版供个人非商业使用。获取付费方案或申请商业授权，请联系开发者。",
      licenseLink: "完整许可",
      contactTitle: "联系开发者",
      wechat: "微信",
      copyWechat: "复制微信号",
      copyEmail: "复制邮箱地址",
      copyHomepage: "复制个人主页地址",
      copiedEmail: "邮箱已复制",
      copiedHomepage: "主页地址已复制",
      copyAddressFailed: "复制未成功，请重试。",
      copied: "微信号已复制",
      homepage: "个人主页",
      email: "邮箱",
      close: "关闭",
      actualSize: "原始大小",
      fitImage: "适应屏幕",
      previewHint: "原始大小可滚动查看细节",
      title: "Everything Agent — 让数据管得好，找得到，用得爽",
      description: "Agent 驱动的本地数据管理与数据应用平台。",
      menuOpen: "打开菜单",
      menuClose: "关闭菜单",
      navigation: "主导航",
      language: "语言",
      zoom: "查看清晰原图",
      closePreview: "关闭图片预览",
      previewArea: "图片预览，可用方向键滚动",
      footerNavigation: "产品链接",
      videoLabel: "Everything Agent 产品演示",
      videoUnavailable: "演示暂时无法播放",
      conceptAlt: "功能示意，非产品运行截图",
      analysisImageSummary: "理解画面内容，生成场景描述与标签。",
      analysisVideoSummary: "描述视频中的动作、场景与镜头变化。",
      analysisAudioSummary: "将语音转成带有时间标记的文字。",
      analysisDocumentSummary: "提取文档文字并关联页码，为后续检索提供依据。",
      peopleTitle: "按人脸归类，按人物找素材。",
      peopleDescription:
        "自动识别人脸，按人物归类，快速定位这个人出现过的素材。",
      analysisImageTitle: "图片内容，AI 帮你读懂。",
      analysisVideoTitle: "理解视频中的每个场景。",
      analysisAudioTitle: "音频内容，自动转成文字。",
      analysisDocumentTitle: "文档内容，自动提取。",
    },
  };

  const config = window.EVERYTHING_AGENT_CONFIG;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [
    ...root.querySelectorAll(selector),
  ];
  const storageKey = "everything-agent-language-v2";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const mediaById = new Map(config.images.map((item) => [item.id, item]));
  let language = "en";
  try {
    const preference = localStorage.getItem(storageKey);
    if (preference === "en" || preference === "zh") language = preference;
  } catch {
    /* The page works when storage is unavailable. */
  }
  const t = (key) => copy[language][key] || copy.en[key] || key;
  const navigation = $("#site-nav");
  const menuButton = $(".menu-toggle");
  const dialog = $(".lightbox");
  const viewport = $(".lightbox-viewport");
  const previewImage = $(".lightbox-image");
  let previewItem = null;
  let previewTrigger = null;
  let copyState = "";
  let copyTimer;
  let videoState = "demoSoon";
  const links = {
    download: config.downloadUrl,
    repository: config.repository,
    license: `${config.repository}/blob/main/LICENSE.txt`,
  };
  $$("[data-link]").forEach((link) => {
    link.href = links[link.dataset.link];
  });
  $(".developer-avatar").src = config.avatar.src;

  function placeholder(item) {
    const block = document.createElement("div");
    block.className = "visual-placeholder";
    block.setAttribute("role", "img");
    block.setAttribute(
      "aria-label",
      `${t("conceptAlt")}: ${item.alt[language]}`,
    );
    const kind = item.id.startsWith("search-") ? item.id.slice(7) : "document";
    block.innerHTML = `<svg class="concept-art" viewBox="0 0 480 260" aria-hidden="true"><use href="#concept-${kind}"/></svg><span class="concept-label"></span>`;
    $(".concept-label", block).textContent = t("concept");
    return block;
  }

  function frameImage(image, item, cropped = true) {
    const wrapper = image.parentElement;
    const crop = cropped ? item.crop : null;
    wrapper.classList.toggle("image-crop", Boolean(crop));
    if (!crop) {
      wrapper.style.removeProperty("aspect-ratio");
      for (const key of ["--crop-width", "--crop-left", "--crop-top"])
        image.style.removeProperty(key);
      return;
    }
    wrapper.style.aspectRatio = crop.width + " / " + crop.height;
    image.style.setProperty(
      "--crop-width",
      (item.width / crop.width) * 100 + "%",
    );
    image.style.setProperty("--crop-left", (-crop.x / crop.width) * 100 + "%");
    image.style.setProperty("--crop-top", (-crop.y / crop.height) * 100 + "%");
  }

  function renderImage(container) {
    const item = mediaById.get(container.dataset.imageSlot);
    const usePerspective =
      item.usePerspective && item.perspectiveReady && item.perspective;
    const displayPath = usePerspective
      ? item.perspective
      : item.ready
        ? item.src
        : null;
    if (!displayPath) {
      container.replaceChildren(placeholder(item));
      return;
    }
    container.classList.toggle(
      "has-baked-perspective",
      Boolean(usePerspective),
    );
    let image = $("img", container);
    // Reuse the server-rendered image to preserve its preload and avoid duplicate requests.
    if (!image || image.getAttribute("src") !== displayPath) {
      const wrapper = document.createElement(item.originalReady ? "a" : "div");
      wrapper.className = item.originalReady ? "image-link" : "image-display";
      if (item.originalReady) {
        wrapper.href = item.original;
        wrapper.dataset.lightbox = item.id;
        wrapper.setAttribute("aria-label", t("zoom"));
      }
      image = document.createElement("img");
      image.width = item.width;
      image.height = item.height;
      image.loading = item.id === "hero" ? "eager" : "lazy";
      if (item.id === "hero") image.fetchPriority = "high";
      image.src = displayPath;
      wrapper.append(image);
      container.replaceChildren(wrapper);
    }
    frameImage(image, item, !usePerspective);
    image.alt = item.alt[language];
    const fallback = () => {
      // One recovery attempt only. Unready paths are never requested.
      if (
        usePerspective &&
        item.ready &&
        image.getAttribute("src") !== item.src
      ) {
        container.classList.remove("has-baked-perspective");
        image.addEventListener(
          "error",
          () => container.replaceChildren(placeholder(item)),
          { once: true },
        );
        frameImage(image, item);
        image.src = item.src;
      } else container.replaceChildren(placeholder(item));
    };
    image.addEventListener("error", fallback, { once: true });
    if (image.complete && image.naturalWidth === 0) fallback();
  }
  $$("[data-image-slot]").forEach(renderImage);

  const promo = $("[data-video-slot]");
  function showVideoPending(state = "demoSoon") {
    videoState = state;
    const block = document.createElement("div");
    block.className = "promo-pending";
    if (config.video.posterReady) {
      const image = document.createElement("img");
      image.src = config.video.poster;
      image.alt = "";
      image.loading = "lazy";
      image.addEventListener("error", () => image.remove(), { once: true });
      block.append(image);
    }
    const message = document.createElement("p");
    message.textContent = t(state);
    message.setAttribute("role", "status");
    block.append(message);
    promo.replaceChildren(block);
  }
  if (config.video.ready && config.video.src) {
    const video = document.createElement("video");
    video.src = config.video.src;
    video.poster = config.video.posterReady
      ? config.video.poster
      : mediaById.get("hero").src;
    video.controls = true;
    video.playsInline = true;
    video.preload = "none";
    video.width = config.video.width;
    video.height = config.video.height;
    (config.video.tracks || []).forEach((item) => {
      const track = document.createElement("track");
      Object.assign(track, { kind: "captions", ...item });
      video.append(track);
    });
    video.setAttribute("aria-label", t("videoLabel"));
    video.addEventListener(
      "error",
      () => showVideoPending("videoUnavailable"),
      { once: true },
    );
    promo.replaceChildren(video);
  } else showVideoPending();

  function updateLanguage() {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = t("title");
    $('meta[name="description"]').content = t("description");
    $('meta[property="og:title"]').content = t("title");
    $('meta[property="og:description"]').content = t("description");
    $$("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    $$("[data-language]").forEach((button) =>
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.language === language),
      ),
    );
    $(".language-switch").setAttribute("aria-label", t("language"));
    $(".hero-highlights").setAttribute("aria-label", t("highlightsLabel"));
    const aiDetail = $('[data-i18n="localAiDetail"]');
    aiDetail.title = t("localAiDescription");
    aiDetail.setAttribute("aria-label", t("localAiDescription"));
    navigation.setAttribute("aria-label", t("navigation"));
    menuButton.setAttribute(
      "aria-label",
      t(navigation.classList.contains("is-open") ? "menuClose" : "menuOpen"),
    );
    $$("[data-image-slot]").forEach((container) => {
      const item = mediaById.get(container.dataset.imageSlot);
      const image = $("img", container);
      if (image) image.alt = item.alt[language];
      const link = $("[data-lightbox]", container);
      if (link)
        link.setAttribute("aria-label", `${t("zoom")}: ${item.alt[language]}`);
      const concept = $(".visual-placeholder", container);
      if (concept) {
        concept.setAttribute(
          "aria-label",
          `${t("conceptAlt")}: ${item.alt[language]}`,
        );
        $(".concept-label", concept).textContent = t("concept");
      }
    });
    const pending = $(".promo-pending p");
    if (pending) pending.textContent = t(videoState);
    const video = $("video", promo);
    if (video) video.setAttribute("aria-label", t("videoLabel"));
    $('[data-copy="wechat"]').setAttribute("aria-label", t("copyWechat"));
    $('[data-copy="email"]').setAttribute("aria-label", t("copyEmail"));
    $('[data-copy="homepage"]').setAttribute("aria-label", t("copyHomepage"));
    $(".developer-avatar").alt = config.avatar.alt[language];
    $(".copy-feedback").textContent = copyState ? t(copyState) : "";
    $(".footer-meta nav").setAttribute("aria-label", t("footerNavigation"));
    $(".lightbox-close").setAttribute("aria-label", t("closePreview"));
    viewport.setAttribute("aria-label", t("previewArea"));
    $(".lightbox-zoom").textContent = t(
      viewport.classList.contains("is-zoomed") ? "fitImage" : "actualSize",
    );
    if (previewItem) {
      $("#lightbox-caption").textContent = previewItem.alt[language];
      previewImage.alt = previewItem.alt[language];
    }
  }
  $$("[data-language]").forEach((button) =>
    button.addEventListener("click", () => {
      language = button.dataset.language;
      // Persist only an explicit choice, never the first-visit default.
      try {
        localStorage.setItem(storageKey, language);
      } catch {}
      updateLanguage();
    }),
  );

  function setMenu(open, restoreFocus = false) {
    navigation.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", t(open ? "menuClose" : "menuOpen"));
    $("use", menuButton).setAttribute("href", open ? "#i-close" : "#i-menu");
    if (restoreFocus) menuButton.focus();
  }
  menuButton.addEventListener("click", () =>
    setMenu(!navigation.classList.contains("is-open")),
  );
  $$("a", navigation).forEach((link) =>
    link.addEventListener("click", () => setMenu(false)),
  );
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigation.classList.contains("is-open"))
      setMenu(false, true);
  });
  window
    .matchMedia("(min-width:1024px)")
    .addEventListener("change", (event) => {
      if (event.matches) setMenu(false);
    });

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-lightbox]");
    if (
      !trigger ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    const item = mediaById.get(trigger.dataset.lightbox);
    if (!item?.originalReady) return;
    event.preventDefault();
    previewTrigger = trigger;
    previewItem = item;
    previewImage.src = item.original;
    viewport.classList.remove("is-zoomed");
    updateLanguage();
    dialog.showModal();
    document.body.classList.add("modal-open");
  });
  previewImage.addEventListener("error", () => dialog.close());
  $(".lightbox-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (
      event.target === dialog &&
      (event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom)
    )
      dialog.close();
  });
  dialog.addEventListener("close", () => {
    // A queued close event must not steal focus after another preview is opened.
    if (dialog.open) return;
    document.body.classList.remove("modal-open");
    previewItem = null;
    const trigger = previewTrigger;
    previewTrigger = null;
    if (
      document.activeElement === document.body ||
      dialog.contains(document.activeElement)
    )
      trigger?.focus({ preventScroll: true });
  });
  $(".lightbox-zoom").addEventListener("click", () => {
    const zoomed = viewport.classList.toggle("is-zoomed");
    $(".lightbox-zoom").textContent = t(zoomed ? "fitImage" : "actualSize");
    viewport.scrollTo(0, 0);
    viewport.focus();
  });

  async function copyValue(value) {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch {
      // A short-lived, offscreen field supports older clipboard implementations.
      const field = document.createElement("textarea");
      field.value = value;
      field.className = "clipboard-buffer";
      field.setAttribute("aria-hidden", "true");
      field.tabIndex = -1;
      const active = document.activeElement;
      document.body.append(field);
      field.select();
      let copied = false;
      try {
        copied = document.execCommand("copy");
      } catch {}
      field.remove();
      active?.focus({ preventScroll: true });
      return copied;
    }
  }
  $$("[data-copy]").forEach((button) =>
    button.addEventListener("click", async () => {
      clearTimeout(copyTimer);
      const kind = button.dataset.copy;
      const success = await copyValue(config[kind]);
      copyState = success
        ? {
            wechat: "copied",
            email: "copiedEmail",
            homepage: "copiedHomepage",
          }[kind]
        : "copyAddressFailed";
      $(".copy-feedback").textContent = t(copyState);
      if (success)
        copyTimer = setTimeout(() => {
          copyState = "";
          $(".copy-feedback").textContent = "";
        }, 3500);
    }),
  );

  // Independent wrappers keep perspective and continuous motion from overwriting each other.
  const breathing = $(".hero-breathe");
  const backgroundVideo = $(".hero-background-video");
  let heroVisible = false;
  let backgroundVisible = false;
  let backgroundFailed = false;
  let autoplayBlocked = false;
  let playPending = false;
  backgroundVideo.muted = true;
  backgroundVideo.poster = config.background.poster;
  function updateMotion() {
    const allowed = !document.hidden && !reducedMotion.matches;
    breathing.classList.toggle("is-running", heroVisible && allowed);
    if (backgroundVisible && allowed && !backgroundFailed && !autoplayBlocked) {
      if (!backgroundVideo.getAttribute("src"))
        backgroundVideo.src = config.background.src;
      if (backgroundVideo.paused && !playPending) {
        playPending = true;
        backgroundVideo
          .play()
          .catch((error) => {
            if (error.name === "NotAllowedError") autoplayBlocked = true;
          })
          .finally(() => {
            playPending = false;
          });
      }
    } else backgroundVideo.pause();
  }
  // A normal page interaction can satisfy browsers that block autoplay.
  function retryAutoplay() {
    if (autoplayBlocked) {
      autoplayBlocked = false;
      updateMotion();
    }
  }
  document.addEventListener("pointerdown", retryAutoplay, { passive: true });
  document.addEventListener("keydown", retryAutoplay);
  backgroundVideo.addEventListener(
    "error",
    () => {
      backgroundFailed = true;
      backgroundVideo.removeAttribute("src");
      backgroundVideo.load();
    },
    { once: true },
  );
  new IntersectionObserver(
    (entries) => {
      heroVisible = entries[0].isIntersecting;
      updateMotion();
    },
    { threshold: 0.05 },
  ).observe($(".hero-perspective"));
  new IntersectionObserver(
    (entries) => {
      backgroundVisible = entries[0].isIntersecting;
      updateMotion();
    },
    { threshold: 0 },
  ).observe($(".hero"));
  document.addEventListener("visibilitychange", updateMotion);
  reducedMotion.addEventListener("change", updateMotion);

  const header = $(".site-header");
  const hero = $(".hero");
  let headerFrame = 0;
  function updateHeader() {
    headerFrame = 0;
    header.classList.toggle(
      "over-hero",
      hero.getBoundingClientRect().bottom > header.offsetHeight,
    );
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  window.addEventListener(
    "scroll",
    () => {
      if (!headerFrame) headerFrame = requestAnimationFrame(updateHeader);
    },
    { passive: true },
  );
  window.addEventListener("resize", updateHeader);
  updateHeader();
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          $(`[data-section-link="${entry.target.id}"]`)?.removeAttribute(
            "aria-current",
          );
          return;
        }
        $$("[data-section-link]").forEach((link) => {
          if (link.dataset.sectionLink === entry.target.id)
            link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-15% 0px -55% 0px" },
  );
  $$(".feature-section, .pricing-section").forEach((section) =>
    sectionObserver.observe(section),
  );
  updateLanguage();
})();

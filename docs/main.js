(() => {
  "use strict";
  const config = window.EVERYTHING_AGENT_CONFIG;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [
    ...root.querySelectorAll(selector),
  ];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const storageKey = "everything-agent-language";
  const zh = {};
  $$("[data-i18n]").forEach((node) => {
    zh[node.dataset.i18n] = [...node.childNodes]
      .map((child) =>
        child.nodeName === "BR"
          ? "\n"
          : child.textContent.replace(/\s+/g, " ").trim(),
      )
      .join("");
  });
  $$("[data-i18n-aria]").forEach((node) => {
    zh[node.dataset.i18nAria] = node.getAttribute("aria-label");
  });
  $$("[data-i18n-alt]").forEach((node) => {
    zh[node.dataset.i18nAlt] = node.alt;
  });
  Object.assign(zh, {
    title: "Everything Agent — AI 时代的 Everything",
    description:
      "Everything Agent，Agent 驱动的本地数据管理与数据应用平台。统一管理文件，用自然语言检索，用自己的素材创作。",
    menuClose: "关闭菜单",
    fitImage: "适应屏幕",
    videoHint: "播放查看演示",
    playAnimation: "播放动图",
    pauseAnimation: "暂停动图",
  });
  const en = {
    title: "Everything Agent — Everything for the AI era",
    description:
      "An agent-powered platform for managing and using your local data. Organize files, search by meaning, and create with your own assets.",
    skip: "Skip to content",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    navigation: "Main navigation",
    navManagement: "Organize",
    navSearch: "Search",
    navCreation: "Create",
    navDownload: "Get for Windows",
    tagline: "Everything for the AI era",
    heroTitle: "Your data.\nWell organized.\nEasy to find.\nA joy to use.",
    heroDescription:
      "An agent-powered platform for managing and using your local data.",
    download: "Download for Windows",
    explore: "Explore the demos",
    heroCaption: "Your assets, in one workspace",
    imageHint: "Click to view full size",
    managementTitle: "Bring your files together",
    managementDescription:
      "Bring images, videos, audio, and documents into one library, keeping their original paths. AI indexes the content. Organize by project and hover to preview.",
    stepCreate: "Create a collection",
    stepCreateDescription: "Make a home for each project",
    stepImport: "Import your assets",
    stepImportDescription: "Keep their original paths",
    stepPreview: "Preview the collection",
    stepPreviewDescription: "Hover to take a closer look",
    captionManagement: "Asset library · Collections and previews",
    altManagement:
      "Asset library with project collections and previews of images, videos, audio, and documents",
    zoomManagement: "Enlarge the asset library screenshot",
    searchTitle: "Start with what\nyou remember",
    searchDescription:
      "No need to remember the filename. Describe the content, share an image, or ask a question about your documents.",
    shownExample: "In this example",
    patentQuery: "Find the patent where Ma Fei is the first inventor.",
    captionSearch: "Search by content · The patent and the agent’s results",
    altSearch:
      "The agent finds a patent by inventor and opens the original patent certificate",
    zoomSearch: "Enlarge the search screenshot",
    examplesIntro: "You can also ask",
    queryOrder: "Find an order screenshot with about ¥30 paid.",
    queryAudio: "Find the sentence mentioning Haidilao in the recording.",
    queryVideo: "Which video is this screenshot from, and at what point?",
    queryPerson: "Find group photos with this person.",
    querySimilar: "Find images similar to this product photo.",
    queryContract: "What is the contract amount for the GEO system?",
    creationTitle: "Create with\nyour own assets",
    creationDescription:
      "Keep going once you find the right material. Start with your assets, then organize, generate, and refine through conversation.",
    captionCreation:
      "Infinite Canvas · Assets, connected nodes, and conversation",
    altCreation:
      "Infinite Canvas with product and person images imported from the library and connected as nodes",
    zoomCreation: "Enlarge the Infinite Canvas screenshot",
    canvasTitle: "Infinite Canvas",
    canvasDescription:
      "Import assets from your library. Use conversation to organize nodes, connect materials, and generate content.",
    workshopTitle: "Generation Workshop",
    workshopDescription:
      "Describe what you need. The agent selects tools, fills in parameters, and generates images, video, or audio.",
    creationFlow: "Creation workflow",
    flowLibrary: "Asset library",
    flowWorkspace: "Creation space",
    flowResult: "Generated work",
    downloadTitle: "Your next idea\nstarts with your data.",
    releaseNotes: "View release notes",
    licenseCopy:
      "Free for personal, non-commercial use. Commercial use requires prior written authorization.",
    footerNavigation: "Footer links",
    release: "Releases",
    license: "License",
    actualSize: "Actual size",
    fitImage: "Fit to screen",
    closePreview: "Close preview",
    previewArea: "Image preview; use arrow keys to scroll",
    previewHint: "Scroll at actual size to explore the details",
    close: "Close",
    videoHint: "Play to explore the demo",
    playAnimation: "Play animation",
    pauseAnimation: "Pause animation",
  };
  const copy = { zh, en };
  let language = "zh";
  try {
    if (localStorage.getItem(storageKey) === "en") language = "en";
  } catch {
    /* Storage can be blocked in private contexts. */
  }
  const t = (key) => copy[language][key] || zh[key] || key;
  const mediaKey = (prefix, key) =>
    prefix + key[0].toUpperCase() + key.slice(1);
  const mediaText = (key, property) =>
    config.media[key]?.[property]?.[language] || t(mediaKey(property, key));
  const languageButton = $(".language-toggle");
  const menuButton = $(".menu-toggle");
  const navigation = $("#site-nav");
  const dialog = $(".lightbox");
  const viewport = $(".lightbox-viewport");
  const previewImage = $(".lightbox-image");
  let previewKey = null;
  let previewTrigger = null;

  const links = {
    repository: config.repository,
    download:
      config.downloadUrl ||
      `${config.repository}/releases/download/${config.version}/${config.installer}`,
    release: `${config.repository}/releases/tag/${config.version}`,
    license: `${config.repository}/blob/main/LICENSE.txt`,
    email: `mailto:${config.email}`,
  };
  $$("[data-link]").forEach((link) => {
    link.href = links[link.dataset.link];
    if (link.dataset.link === "email") link.textContent = config.email;
  });
  $$("[data-version]").forEach((node) => {
    node.textContent = config.version;
  });

  function updateMediaLabels() {
    $$("[data-media]").forEach((container) => {
      const key = container.dataset.media;
      const figure = container.closest("figure");
      $("figcaption > span", figure).textContent = mediaText(key, "caption");
      const image = $("img", container);
      if (image) image.alt = mediaText(key, "alt");
      const link = $("[data-lightbox]", container);
      if (link) link.setAttribute("aria-label", t(mediaKey("zoom", key)));
      const video = $("video", container);
      if (video) video.setAttribute("aria-label", mediaText(key, "caption"));
      $(".media-hint", figure).textContent = t(
        video ? "videoHint" : "imageHint",
      );
      const animationButton = $(".animation-toggle", container);
      if (animationButton)
        animationButton.textContent = t(
          animationButton.getAttribute("aria-pressed") === "true"
            ? "pauseAnimation"
            : "playAnimation",
        );
    });
    if (previewKey) {
      $("#lightbox-caption").textContent = mediaText(previewKey, "caption");
      previewImage.alt = mediaText(previewKey, "alt");
    }
  }

  function applyLanguage() {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = t("title");
    $('meta[name="description"]').content = t("description");
    $('meta[property="og:title"]').content = t("title");
    $('meta[property="og:description"]').content = t("description");
    $$("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    $$("[data-i18n-aria]").forEach((node) => {
      node.setAttribute("aria-label", t(node.dataset.i18nAria));
    });
    $$("[data-i18n-alt]").forEach((node) => {
      node.alt = t(node.dataset.i18nAlt);
    });
    languageButton.textContent = language === "zh" ? "English" : "中文";
    languageButton.lang = language === "zh" ? "en" : "zh-CN";
    languageButton.setAttribute(
      "aria-label",
      language === "zh" ? "Switch to English" : "切换到中文",
    );
    menuButton.setAttribute(
      "aria-label",
      t(navigation.classList.contains("is-open") ? "menuClose" : "menuOpen"),
    );
    $(".lightbox-zoom").textContent = t(
      viewport.classList.contains("is-zoomed") ? "fitImage" : "actualSize",
    );
    updateMediaLabels();
  }

  languageButton.addEventListener("click", () => {
    language = language === "zh" ? "en" : "zh";
    try {
      localStorage.setItem(storageKey, language);
    } catch {
      /* Switching still works without persistence. */
    }
    applyLanguage();
  });

  function setMenu(open, restoreFocus = false) {
    navigation.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", t(open ? "menuClose" : "menuOpen"));
    $("use", menuButton).setAttribute("href", open ? "#i-close" : "#i-menu");
    if (restoreFocus) menuButton.focus();
  }
  menuButton.addEventListener("click", () =>
    setMenu(menuButton.getAttribute("aria-expanded") !== "true"),
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
    .matchMedia("(min-width: 1024px)")
    .addEventListener("change", (event) => {
      if (event.matches) setMenu(false);
    });

  function makeImage(key, src) {
    const item = config.media[key];
    const link = document.createElement("a");
    link.className = "screenshot-link media-enter";
    link.dataset.lightbox = key;
    link.href = src;
    const image = document.createElement("img");
    image.src = src;
    image.width = item.width || 1920;
    image.height = item.height || 1032;
    image.loading = "lazy";
    image.alt = mediaText(key, "alt");
    image.addEventListener("error", () => {
      if (image.getAttribute("src") !== item.fallback) {
        image.src = item.fallback;
        link.href = item.fallback;
      }
    });
    const expand = document.createElement("span");
    expand.className = "expand-mark";
    expand.setAttribute("aria-hidden", "true");
    expand.innerHTML = '<svg class="icon"><use href="#i-expand"/></svg>';
    link.append(image, expand);
    return link;
  }

  $$("[data-media]").forEach((container) => {
    const key = container.dataset.media;
    const item = config.media[key];
    const showFallback = () => {
      container.replaceChildren(makeImage(key, item.fallback));
      updateMediaLabels();
    };
    if (item.type === "video") {
      const video = document.createElement("video");
      video.controls = true;
      video.playsInline = true;
      video.preload = "none";
      video.poster = item.poster || item.fallback;
      video.width = item.width || 1920;
      video.height = item.height || 1032;
      video.src = item.src;
      video.className = "media-enter";
      (item.tracks || []).forEach((trackConfig) => {
        const track = document.createElement("track");
        Object.assign(track, { kind: "captions", ...trackConfig });
        video.append(track);
      });
      video.addEventListener("error", showFallback, { once: true });
      container.replaceChildren(video);
    } else if (item.type === "gif") {
      const still = makeImage(key, item.poster || item.fallback);
      const toggle = document.createElement("button");
      toggle.className = "animation-toggle";
      toggle.type = "button";
      toggle.setAttribute("aria-pressed", "false");
      const stop = () => {
        $("img", still).src = item.poster || item.fallback;
        still.href = item.poster || item.fallback;
        toggle.setAttribute("aria-pressed", "false");
        updateMediaLabels();
      };
      toggle.addEventListener("click", () => {
        if (toggle.getAttribute("aria-pressed") === "true") return stop();
        $("img", still).src = item.src;
        // The enlarged view stays still so pause/reduced-motion remain effective.
        toggle.setAttribute("aria-pressed", "true");
        updateMediaLabels();
      });
      $("img", still).addEventListener("error", showFallback, { once: true });
      reducedMotion.addEventListener("change", (event) => {
        if (event.matches) stop();
      });
      container.replaceChildren(still, toggle);
    } else {
      container.replaceChildren(makeImage(key, item.src || item.fallback));
    }
  });

  // The hero always remains a still product preview, even when demos become video.
  const heroLink = $(".hero-preview [data-lightbox]");
  heroLink.href = config.media.management.fallback;
  $("img", heroLink).src = config.media.management.fallback;

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
    event.preventDefault();
    previewTrigger = trigger;
    previewKey = trigger.dataset.lightbox;
    previewImage.src = trigger.href;
    viewport.classList.remove("is-zoomed");
    $(".lightbox-zoom").textContent = t("actualSize");
    updateMediaLabels();
    dialog.showModal();
    document.body.classList.add("modal-open");
  });
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
    document.body.classList.remove("modal-open");
    previewKey = null;
    previewTrigger?.focus({ preventScroll: true });
  });
  $(".lightbox-zoom").addEventListener("click", () => {
    const zoomed = viewport.classList.toggle("is-zoomed");
    $(".lightbox-zoom").textContent = t(zoomed ? "fitImage" : "actualSize");
    viewport.scrollTo(0, 0);
    viewport.focus();
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          $$("[data-section-link]").forEach((link) => {
            if (link.dataset.sectionLink === entry.target.id)
              link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    $$(".feature").forEach((section) => observer.observe(section));
  }
  applyLanguage();
})();

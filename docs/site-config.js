/* Release links and demo media: edit here when publishing a new version. */
window.EVERYTHING_AGENT_CONFIG = {
  version: "v0.5.2",
  installer: "AssetOS-Setup-0.5.2.exe",
  repository: "https://github.com/GML-MMGroup/Everything-Agent",
  email: "xuhongbo@gml.ac.cn",
  // type: 'image' (PNG / WebP), 'gif', or 'video' (MP4 / WebM).
  // Paths are relative to docs/. Keep fallback as a still image.
  // Optional video captions: tracks: [{ src: 'assets/demo.zh.vtt', srclang: 'zh', label: '中文' }].
  media: {
    management: {
      type: "image",
      src: "assets/data-management.png",
      poster: "assets/data-management.png",
      fallback: "assets/data-management.png",
      width: 1920,
      height: 1032,
    },
    search: {
      type: "image",
      src: "assets/data-search.png",
      poster: "assets/data-search.png",
      fallback: "assets/data-search.png",
      width: 1920,
      height: 1032,
    },
    creation: {
      type: "image",
      src: "assets/data-creation.png",
      poster: "assets/data-creation.png",
      fallback: "assets/data-creation.png",
      width: 1920,
      height: 1032,
    },
  },
};

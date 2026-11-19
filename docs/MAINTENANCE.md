# 官网维护

原生 HTML / CSS / JavaScript，无需构建。GitHub Pages 发布源为 `main` 分支的 `/docs`。

## 发布版本

编辑 `site-config.js` 中的 `version` 与 `installer`，下载地址和 Release 地址会统一生成。若使用不同下载地址，可添加 `downloadUrl`。同时更新 `index.html` 中的静态备用链接与版本文字，以保证禁用 JavaScript 时仍能下载正确版本。

## 替换演示素材

把公开演示素材放到 `docs/assets/`，编辑 `site-config.js` 的 `media.management`、`media.search` 或 `media.creation`：

```js
search: {
  type: 'video', // image / gif / video
  src: 'assets/data-search.webm', // MP4 或 WebM
  poster: 'assets/data-search.png',
  fallback: 'assets/data-search.png',
  width: 1920,
  height: 1032,
  // 可选，按录屏内容更新双语说明：
  caption: { zh: '智能检索 · 演示录屏', en: 'Search · Product demo' },
  alt: { zh: '根据线索检索素材', en: 'Finding assets from a clue' },
  // 有口述内容时可添加字幕：
  tracks: [{ src: 'assets/search.zh.vtt', srclang: 'zh', label: '中文' }]
}
```

路径相对于 `docs/`，不要加 `/` 开头。保留三个原始 PNG 作为回退。视频带原生控件、`playsinline` 与 `preload="none"`，需用户主动播放；加载失败后显示截图。GIF 默认显示静态封面，点击播放，可暂停；启用减少动态效果时恢复静态封面。首屏始终使用管理区 `fallback` 静态截图。

普通图片点击打开原生模态预览，支持 Tab、Enter、Esc 和原始大小滚动查看。移动端可选择原始大小后滑动查看细节。原始产品截图中的中文不会随网站语言切换而改变。

## 文案与本地预览

中文静态文案在 `index.html`，英文对应键在 `main.js`。页面语言默认为中文，通过 localStorage 记住切换结果；页面标题、描述、替代文本、导航和媒体说明同步切换。

在仓库外建立子路径预览：

```bash
mkdir -p /tmp/everything-agent-preview
ln -s /data/hongbo.xu/Everything-Agent/docs /tmp/everything-agent-preview/Everything-Agent
python3 -m http.server 4173 --bind 127.0.0.1 --directory /tmp/everything-agent-preview
```

打开 `http://127.0.0.1:4173/Everything-Agent/`，检查两种语言、窄屏菜单、预览和资源请求。所有验证截图和测试脚本保存在仓库外。

## 设计与字体

以真实产品素材为视觉主体，白色与浅灰区分层次，深绿色标识操作与选中状态。四像素间距体系、统一线性图标、三级文字颜色、400–500 字重、大小错落的功能区、清晰焦点与轻量入场动效；保留用户确定的渐变签名字标。未生成或修改任何产品截图。

设计检查使用 [unslop](https://heydamir.design/unslop)，作者 Damir Sokolovsky（[@heydamir](https://x.com/heydamir)），CC BY 4.0。此处仅记录方法署名，不改变原项目许可。

Geist 字体来自 Google Fonts，随站点分发；字体许可证见 `assets/fonts/OFL.txt`。中文使用系统字体。

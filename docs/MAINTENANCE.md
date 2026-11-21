# Everything Agent 官网维护

原生 HTML、CSS、JavaScript；GitHub Pages 沿用 `main /docs`，无需构建。仅维护 `docs/`，根目录素材、README、产品许可及 Release 由用户维护。

## 集中配置

`site-config.js` 管理下载与联系方式、产品截图、局部细节及 1 个宣传视频展位。资源相对于 `docs/`；使用 `assets/media/...`，不要以 `/` 开头。下载统一指向仓库 `/releases/latest`。

每个图片配置包含：

- `id`：对应页面 `data-image-slot`，保持不变。
- `src`、`ready`：标准展示图片路径和是否存在。
- `original`、`originalReady`：未倾斜的清晰原图及是否存在。只有原图就绪才提供放大入口。
- `perspective`、`perspectiveReady`、`usePerspective`：可选效果图、是否存在、是否优先展示；已带透视的图片不再叠加 CSS 透视。
- `width`、`height`、`alt.en`、`alt.zh`：图片固有尺寸和双语描述。

准备好文件后修改就绪标记即可，不需要改页面结构。`ready: false` 的路径不会被请求；加载失败会回退为标明“功能示意”的浅色展位，不重复请求。

## 素材清单（2026-11-21 更新）

所有页面素材位于 `docs/assets/media/`。用户本轮提供的原图完整保留，未改写任何文字、金额、时间、人物标记或结果。

| 文件                                        | 用途                                                            |
| ------------------------------------------- | --------------------------------------------------------------- |
| `hero.png`                                  | 新版资产库主图，完整复制自根目录 `assets/data-management-2.png` |
| `image-label.png` / `video-label.png`       | 图片和视频的预览、AI 描述及标签                                 |
| `audio-label.png` / `doc-label.png`         | 音频时间标记转录、文档提取文字与页码                            |
| `assets-folders.png` / `assets-cla.png`     | 六个分类文件夹，以及分类内素材                                  |
| `geo-doc-qa.png`                            | GEO 合同问答、原文及 Agent 回答                                 |
| `video-qa.png`                              | 国产 AI 算力生态视频片段定位                                    |
| `image-video-qa.png` / `Snipaste_image.png` | 以图找视频的结果及用户输入截图                                  |
| `person-qa.png`                             | 人物合照检索；保留 Agent 原文中的不确定性说明                   |
| `face-id.png`                               | 新增人物识别与人脸分类案例                                      |
| `create-canvas.png`                         | 新版饮料素材创作画布，完整复制自 `assets/data-creation-1.png`   |
| `create-workshop-perspective.png`           | 沿用用户先前提供的生成工坊效果图                                |
| `create-workshop.png`                       | 仍待补生成工坊清晰原图                                          |
| `promo.mp4` / `promo-poster.png`            | 仍待补宣传视频及封面                                            |

`site-config.js` 的 `crop: { x, y, width, height }` 使用原图像素坐标。页面通过 CSS 定位和裁切视口呈现局部，**不生成或改写图片文件**。`width` / `height` 仍是原图尺寸。每个裁切图的 `original` 指向完整截图，点击后查看未裁切原图。更新截图时一并调整尺寸与裁切坐标；移除 `crop` 即恢复完整展示。检索图仅去除外围导航，保留同一个连续画面中的结果、用户提问与 Agent 回答。四类解析图不设裁切，直接展示完整截图。

所有案例沿用生成工坊的 `.case-row` 左右图文布局：文字占 4 份、图片占 7 份，桌面间距 64px，图片栏宽度完全一致。相邻案例交替左右排列；平板和手机恢复文字在前、图片在后。

四类 AI 解析按图片、视频、音频、文档的顺序直接展示，每类一行文案和一张完整截图。不提供切换按钮，不拆出单独的描述小图，也不放大低分辨率文字片段。所有下方图片使用浏览器原生延迟加载。

分类案例在同一个图片栏中上下堆叠六文件夹图与分类内素材图。四个检索案例都使用一张连续截图保留用户问题与产品结果；以图找视频的输入截图作为文字栏下方的小参考图。人物库、无限画布也恢复同样的左右布局。所有原图入口保持完整截图。

右侧图片使用 `rotateY(-6deg)` 朝左侧文字旋转，左侧图片使用 `rotateY(6deg)` 朝右侧文字旋转，统一 `perspective(1600px)` 和 `rotateX(1deg)`。生成工坊自带透视效果，保持原样，不叠加旋转。平板和手机取消 CSS 透视。

旧的 `manage-library.png`、`manage-collections.png` 及旧主图/分类透视效果图未再被页面引用，保留存档。生成工坊保持原效果图展示，因为对应清晰原图仍未提供；该图不添加原图放大入口。

## 宣传视频

在 `video` 中设置 `src`、`poster`、`ready`、`posterReady`。`src` 支持相对路径或 HTTPS 视频直链，MP4/WebM 均可。就绪前不请求视频；就绪后提供原生播放及音量控件、`playsinline`、`preload="none"`，不自动播放。有声音时必须由用户主动播放。未提供封面时使用真实首屏截图作为封面。

可选字幕：`tracks: [{ src: 'assets/media/promo.en.vtt', srclang: 'en', label: 'English' }]`。

缺少视频时保持 16:9 展位并显示双语“演示即将上线”；播放错误时显示双语不可用状态，不显示失效播放按钮。

## 语言、字体和交互

初访默认英文，不读取浏览器语言，也不读取旧版中文缓存。仅用户主动点击语言按钮时写入 `everything-agent-language-v2`。双语文案在 `main.js`，默认英文 HTML 在 `index.html`。修改文案时同步两处。

字体来自[华为官方设计资源](https://developer.huawei.com/consumer/cn/design/resource/)的 HarmonyOS Sans 系列。页面使用本地 Regular/Medium 拉丁与简体中文字体，`font-display: swap`；原始字体文件未改名、未子集化、未转换。字体许可及来源保留在本地资源目录，详情见 `assets/fonts/SOURCE.md`。

首屏透视和呼吸动画使用两个独立容器，7 秒循环，上下移动 8px、最大缩放 0.4%。离开视口、页面隐藏或用户要求减少动态效果时停止；手机取消透视。

原生 `dialog` 支持键盘、Esc、关闭按钮、原始大小滚动及焦点恢复。微信、邮箱、主页统一为一行三个复制按钮，不在可见页面或跳转链接中显示账号和地址；先使用 Clipboard API，失败后尝试临时离屏输入框复制，仍失败时只显示重试提示，不暴露地址。

## 本地预览与发布

```bash
mkdir -p /tmp/everything-agent-preview
ln -s /data/hongbo.xu/Everything-Agent/docs /tmp/everything-agent-preview/Everything-Agent
python3 -m http.server 4174 --bind 127.0.0.1 --directory /tmp/everything-agent-preview
```

访问 `http://127.0.0.1:4174/Everything-Agent/`。验证 1440px、768px、390px，以及两种语言、字体真实加载、动效暂停、产品案例与宣传视频展位、触控菜单、原图弹层、微信复制、视频就绪与未就绪状态、网络错误。截图、测试视频和临时脚本保存在仓库外，不提交。

样式和脚本链接带有缓存版本参数；更新这些资源时同步修改 `index.html` 中的 `?v=` 值，避免旧浏览器缓存混用。

只暂存相关 `docs/` 文件，正常提交并推送 `main`，等待 Pages 构建 `built`，核对线上资源与提交文件哈希。

## 设计复查

使用 [unslop](https://heydamir.design/unslop)，作者 Damir Sokolovsky（[@heydamir](https://x.com/heydamir)），CC BY 4.0。用户明确指定的居中首屏、渐变标题和持续呼吸动效优先于通用建议。

按间距、色彩、图标、文案、字体、布局、细节、素材、动效逐项检查：统一留白与字号；黑色系背景与白色正文；首屏第二行标题保留紫青绿渐变；去掉装饰分隔线、编号和重复说明；保留真实 Logo；大图交替布局；未就绪媒体明确为功能示意；保留键盘焦点与原图查看。未生成新的产品画面或结果。

## 首屏背景与联系方式（2026-11-19 更新）

- `site-config.js` 的 `background.src` 指向用户提供的 `assets/media/motionsites-background-d38a1a89.mp4`（12.042 秒，1920×1080，无音轨）。原视频未经修改；`background.poster` 是由该视频第 4 秒提取的 `hero-background-poster.jpg`。
- 视频仅用于首屏装饰，不能替代产品截图或宣传视频。静音循环、内联播放；离开首屏、切换后台时暂停。背景视频不显示播放/暂停按钮或原生控件。初访启用减少动态效果时仅显示封面，不请求 MP4；播放被浏览器拒绝时保留封面，之后的正常点击或键盘操作会重试；资源失败时保留封面。
- 功能区的原生 CSS 背景最初参考用户提供的 Pipo / 21st.dev 配方，当前已按最新要求改为黑色系渐变与低强度纹理。原始配方来源：[Pipo gradient recipe](https://21st.dev/community/gradients/editor?from=58063e64-512c-42dc-b70f-8f7888ec8067)。现有项目无需 React、shadcn、Tailwind 或 TypeScript；背景样式在 `styles.css` 的 `.pipo-background`，页面容器在 `index.html`。
- 语言切换显示 `En / Zh`，辅助技术标签仍完整标识 English / 中文。
- `avatar.src` 和 `avatar.alt.en/zh` 集中配置头像。目前使用用户提供的 `assets/media/touxiang.png`，保持透明背景与完整比例。可在 [GitHub 素材目录上传页面](https://github.com/GML-MMGroup/Everything-Agent/upload/main/docs/assets/media) 上传头像图片，然后更新 `avatar.src` 和双语 alt 并提交；Pages 自动发布。也可用新图片替换同名文件。这是静态官网的头像更新方式，不提供让任意访客更改公开开发者头像的入口。
- Lettown Hills Italic 尚未接入：本地未提供字体文件，作者官方销售页提供独立的 Webfonts 许可。本轮尝试的 FreeFontDownload、FontsHut 下载入口均返回 HTTP 403，且免费条款仅限个人试用。英文页面已切换为原华为官方字体包的 HarmonyOS Sans Regular/Medium Italic 真实斜体，中文保持正体，不声明已经加载 Lettown Hills。准备可用于此官网的网页字体文件和许可后，再替换英文页面字体并验证实际渲染。[官方字体与授权](https://www.myfonts.com/products/italic-lettown-hills-15036/licenses)。
- 本轮设计复查以用户指定背景为准：深色视频首屏配浅色文字；下方静态渐变；保留真实截图与签名 Logo；联系区域加入头像并收敛为复制操作。未生成或改写产品结果。

- 导航固定透明叠在首屏视频上，全页保持浅色导航文字；桌面首屏标题上边距 `clamp(240px, 29vh, 360px)`，手机为 `clamp(200px, 28svh, 280px)`。背景视频使用 `object-fit: contain` 保留完整画面，保留产品截图与独立宣传视频展位。

## 黑色主题与毛玻璃联系栏

当前官网使用黑色系主题，取代前一轮浅色 Pipo 配色。颜色集中在 `styles.css` 的 `:root`：页面 `#090b0d`，正文 `#f3f4f5`，辅助文字 `#bbc1c9`，次要文字 `#9fa8b2`。功能区为克制的深灰渐变；演示占位、移动菜单和原图弹层同步为深色。

全部 Windows 下载按钮使用 `#000` 背景、白色文字、`border: 0`；保留键盘焦点环，高对比度模式下遵循系统按钮边框。页脚 `.footer-top` 使用半透明黑色和 `backdrop-filter: blur(24px)`，在深灰背景上呈现毛玻璃；不支持背景模糊时使用纯深色回退。三个复制联系方式仍在同一行，账号值不显示。首屏视频、头像、双语和实际斜体字体沿用既有实现。

## 首屏特性条与按钮

首屏两个操作按钮为更大的胶囊圆角，Windows 下载保持黑色无边框；Watch demo 为蓝白渐变和深色文字，仍锚定宣传视频区。

产品图底部新增独立的黑色毛玻璃特性条（`.hero-highlights`），桌面四列、平板和手机两列，轻微搭在图片底边。它位于产品图浮动容器之外，保留清晰原图查看。特性条没有增加新的产品图片或视频展位。

四项内容由用户在本轮明确提供：30+ 文件格式；本地索引且不改变源文件路径；图片、视频模型支持本地部署或 API；数据全都存储在本地。双语正文与辅助标签在 `main.js` 中维护。关于本地存储的文案仅表述存储位置，没有扩写成“数据不会传输”或“所有 AI 必须离线运行”。

特性条底色不透明度由 0.78 降为 0.52，保留 24px 背景模糊，辅助文字略微提亮以保持可读性。英文说明精简为 `Paths unchanged`、`Local or API`、`Stored locally`，标题和说明保持单行；最窄手机将英文标题调为 18px，并适当收紧列内留白。图像、视频模型的完整部署说明仍保留在 AI 项目的悬停提示及无障碍标签中，中英文同步更新；中文可见说明保持完整。

本轮按用户要求移除页脚可见的 HarmonyOS 字体说明与许可链接，字体文件、随包许可和来源记录完整保留。

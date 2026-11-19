# Everything Agent 官网维护

原生 HTML、CSS、JavaScript；GitHub Pages 沿用 `main /docs`，无需构建。仅维护 `docs/`，根目录素材、README、产品许可及 Release 由用户维护。

## 集中配置

`site-config.js` 管理下载与联系方式、9 个图片展位、1 个宣传视频展位。资源相对于 `docs/`；使用 `assets/media/...`，不要以 `/` 开头。下载统一指向仓库 `/releases/latest`。

每个图片配置包含：

- `id`：对应页面 `data-image-slot`，保持不变。
- `src`、`ready`：标准展示图片路径和是否存在。
- `original`、`originalReady`：未倾斜的清晰原图及是否存在。只有原图就绪才提供放大入口。
- `perspective`、`perspectiveReady`、`usePerspective`：可选效果图、是否存在、是否优先展示；已带透视的图片不再叠加 CSS 透视。
- `width`、`height`、`alt.en`、`alt.zh`：图片固有尺寸和双语描述。

准备好文件后修改就绪标记即可，不需要改页面结构。`ready: false` 的路径不会被请求；加载失败会回退为标明“功能示意”的浅色展位，不重复请求。

## 素材清单

所有以下路径均位于 `docs/assets/media/`。

| 文件                     | 当前情况                                 |
| ------------------------ | ---------------------------------------- |
| `hero.png`               | 原始数据资产库截图，完整复制             |
| `manage-library.png`     | 数据资产库素材区域裁切，未修改内容       |
| `manage-collections.png` | 数据资产库分类与导入入口裁切，未修改内容 |
| `search-document.png`    | 待补 GEO 合同问答及文档依据截图          |
| `search-media.png`       | 待补国产 AI 算力生态内容定位截图         |
| `search-image.png`       | 待补以截图查找视频及位置的截图           |
| `search-person.png`      | 待补人物照片与合照匹配截图               |
| `create-canvas.png`      | 原始无限画布截图，完整复制               |
| `create-workshop.png`    | 待补生成工坊饮料海报案例的清晰原图       |
| `promo.mp4`              | 待补宣传视频                             |
| `promo-poster.png`       | 待补宣传视频封面                         |

另已复制用户提供的 `hero-perspective.png`、`manage-collections-perspective.png`、`create-workshop-perspective.png`。

首屏采用真实原始截图和 CSS 透视；管理分类效果图未展示多个分类，继续使用真实分类截图。生成工坊使用用户提供的饮料海报透视效果图，当前 `ready: false`、`perspectiveReady: true`、`usePerspective: true`；没有对应的未倾斜原图，故此展位暂不提供原图放大按钮。补入 `create-workshop.png` 后将 `ready`、`originalReady` 设为 `true`，按需把 `usePerspective` 改为 `false`。

`manage-library.png` 裁切范围为原始 `assets/data-management.png` 的 `(264,180)-(1908,1020)`；`manage-collections.png` 为 `(264,36)-(1908,600)`。两者点击后均展示 `hero.png` 完整原始界面。现有专利检索截图与本次四个查询不对应，因此不用于冒充查询结果。

## 宣传视频

在 `video` 中设置 `src`、`poster`、`ready`、`posterReady`。`src` 支持相对路径或 HTTPS 视频直链，MP4/WebM 均可。就绪前不请求视频；就绪后提供原生播放及音量控件、`playsinline`、`preload="none"`，不自动播放。有声音时必须由用户主动播放。未提供封面时使用真实首屏截图作为封面。

可选字幕：`tracks: [{ src: 'assets/media/promo.en.vtt', srclang: 'en', label: 'English' }]`。

缺少视频时保持 16:9 展位并显示双语“演示即将上线”；播放错误时显示双语不可用状态，不显示失效播放按钮。

## 语言、字体和交互

初访默认英文，不读取浏览器语言，也不读取旧版中文缓存。仅用户主动点击语言按钮时写入 `everything-agent-language-v2`。双语文案在 `main.js`，默认英文 HTML 在 `index.html`。修改文案时同步两处。

字体来自[华为官方设计资源](https://developer.huawei.com/consumer/cn/design/resource/)的 HarmonyOS Sans 系列。页面使用本地 Regular/Medium 拉丁与简体中文字体，`font-display: swap`；原始字体文件未改名、未子集化、未转换。页脚明确标注字体并链接随包许可，详情见 `assets/fonts/SOURCE.md`。

首屏透视和呼吸动画使用两个独立容器，7 秒循环，上下移动 8px、最大缩放 0.4%。离开视口、页面隐藏或用户要求减少动态效果时停止；手机取消透视。

原生 `dialog` 支持键盘、Esc、关闭按钮、原始大小滚动及焦点恢复。微信复制失败时保留可选择的号码并显示手动复制提示。

## 本地预览与发布

```bash
mkdir -p /tmp/everything-agent-preview
ln -s /data/hongbo.xu/Everything-Agent/docs /tmp/everything-agent-preview/Everything-Agent
python3 -m http.server 4174 --bind 127.0.0.1 --directory /tmp/everything-agent-preview
```

访问 `http://127.0.0.1:4174/Everything-Agent/`。验证 1440px、768px、390px，以及两种语言、字体真实加载、动效暂停、9+1 展位、触控菜单、原图弹层、微信复制、视频就绪与未就绪状态、网络错误。截图、测试视频和临时脚本保存在仓库外，不提交。

样式和脚本链接带有缓存版本参数；更新这些资源时同步修改 `index.html` 中的 `?v=` 值，避免旧浏览器缓存混用。

只暂存相关 `docs/` 文件，正常提交并推送 `main`，等待 Pages 构建 `built`，核对线上资源与提交文件哈希。

## 设计复查

使用 [unslop](https://heydamir.design/unslop)，作者 Damir Sokolovsky（[@heydamir](https://x.com/heydamir)），CC BY 4.0。用户明确指定的居中首屏、渐变标题和持续呼吸动效优先于通用建议。

按间距、色彩、图标、文案、字体、布局、细节、素材、动效逐项检查：统一留白与字号；白底深灰正文；仅第二行标题使用紫青绿渐变；去掉装饰分隔线、编号和重复说明；保留真实 Logo；大图交替布局；未就绪媒体明确为功能示意；保留键盘焦点与原图查看。未生成新的产品画面或结果。

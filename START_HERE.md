# MechCat 前端整理版

这是基于你上传的 `19532mechcat.github.io(2).zip` 整理的工程。保留已有文字、队员资料、音乐路径、Logo 路径、粒子点阵和路径适配补丁。未补回你删除的媒体。

## 怎么打开

### 继续用 VS Code / Live Server

1. 解压到一个新文件夹，用 VS Code 打开最外层文件夹（能看到 package.json、src 和 19532main 的那层）。
2. 使用 Live Server 打开 `19532main/resourses/index.html`。
3. 包内已经包含构建好的网页，初次查看无需安装 npm 包。

注意必须以最外层文件夹作为服务根目录。CSS 中保留了 `/19532main/...` 开头的路径。

### 用自带服务

电脑需要 Node.js 18 或更高版本。在项目根目录打开终端：

```sh
npm start
```

随后访问 `http://127.0.0.1:8080/`。停止服务按 Ctrl+C。所有脚本只使用 Node 内置模块，不需要 npm install，也不会下载构建依赖。Windows 也可双击 `start-local.cmd`。

## 修改流程

1. 修改下表对应文件，保存。
2. 在根目录运行 `npm run build`（Windows 可双击 `build.cmd`）。
3. 浏览器 Ctrl+F5 刷新。已有服务器不必重启。

| 要修改的内容 | 文件 |
|---|---|
| 站点文案、队员姓名与介绍、资源说明 | `src/config/site-content.json` |
| HOMEPAGE / TEAM MEMBERS / RESOURCE 等章节指示器标题 | `src/config/section-labels.json` |
| 背景音乐路径 | `src/config/music-path.json` |
| 导航 Logo 图片路径及元数据 | `src/config/header-logo.json` |
| 资源页粒子图案 | `src/config/particles/*.json` |
| HTML 中的静态内容、内嵌服务端数据和已有补丁 | `src/pages/home.html` |
| 页面结构、交互逻辑 | `src/modules/`，见 `docs/MODULE_GUIDE.md` |
| CSS 布局与样式 | `19532main/web.hycdn.cn/arknights/official/_next/static/css/` |

JSON 使用双引号，不支持注释、尾随逗号。音乐配置是一个 JSON 字符串，例如 `"./AudioVideo/APhantomPain.mp3"`。路径仍遵循原页面目录，不相对于 src/config。

这些配置已接入构建，不是阅读副本。site-content.json 不是所有页面文字的唯一来源：HTML 服务端快照和其他组件仍可能含有文字，需查看模块目录；构建不会盲目全局替换相同字符串。

不要直接修改生成的打包 JS：下次 build 会覆盖它。改对应 src/modules 文件再构建。CSS 和媒体当前直接编辑原目录，构建不会覆盖它们。

## 完成了什么

- 官网主站的 20 个 Webpack 分块拆为 531 个模块工厂，全部接入重新组装流程。
- 应用分块中识别了组件和部分依赖名，给主要模块使用功能文件名；第三方库保留原逻辑。
- 14 份可编辑 JSON 配置：文案、章节标题、音乐、Logo 和 10 份粒子点阵。
- 保留分块路径、模块 ID、注册顺序、入口调用、原 HTML、其他活动页面和其余资源。
- 相同模块 ID 在不同分块中可能有不同内容，保留各自副本，没有盲目合并。尤其首页与新闻页的 19174 内容不同。
- `src/baseline/` 保存了这 20 个 JS 的上传原始内容，便于比较。

## 验证结果与边界

通过：生成代码语法检查；20 个分块注册的模块 ID 和分块 ID 对照；531 个模块注册数量；13 个纯数据模块导出与原版一致；实际修改文案 JSON、构建并确认打包模块读取到新值后恢复；重复构建确定性；本地 HTTP 首页和音频 Range 响应。

静态数字依赖扫描没有发现缺少模块 ID，但运行时动态分块仍有 6 个引用未随 ZIP 提供（13、24、211、549、710、979）。这不能当作整个站点所有功能都完整。未删除这些功能，也未从网上下载替代版本。

**尚未通过浏览器画面和整站交互验证**：当前执行环境阻止本地浏览器启动。因此不能保证这份整理版所有页面、粒子动画、滚轮和手机触屏都与原版完全一致。请先在新目录与原版并排打开确认，再用于正式发布。

资源扫描只覆盖首页 HTML 和主站 CSS：发现 14 处本地缺失引用（含重复）及 81 处外部引用。这些是上传内容原有情况，已原样保留。缺图、视频缺失和部分远程 SDK/API 行为不属于已恢复内容。详细路径在 reports/resource-audit.json。

这是可构建的“保留原 Webpack 运行时的模块化工程”。它仍使用数字模块 ID 和 React 编译后调用，**不是官方源码，也不是独立的全新 Next.js/React 源码项目**；未恢复原始 TypeScript、全部 JSX、原变量名、官方文件名和 npm 依赖版本。

## 文件用途

- `src/modules/`：实际参与构建的模块，文件内是函数表达式；不能直接加进 HTML script 标签。
- `src/assembly/`：模块之外的打包壳与注册代码，构建按此恢复加载方式。
- `src/manifest.json`：依赖、模块位置、配置和构建输出映射。
- `reports/verification.json`：已做和未做的验证。
- `reports/preservation.json`：与上传包相比哪些原文件重新构建。
- `docs/MODULE_GUIDE.md`：主要功能入口和粒子数据对应关系。
- `docs/ALL_MODULES.md`：完整模块目录。

检查配置/代码语法而不写入输出：`npm run check`。

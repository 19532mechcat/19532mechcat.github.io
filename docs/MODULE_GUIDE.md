# 主要模块入口

功能名根据代码分析命名，不代表官方原始文件名。文件内还保留 Webpack 运行时调用。

| 功能 | 模块 ID | 源文件 |
|---|---|---|
| 导航、微信弹窗、页脚、章节指示器 | 37501 | `src/modules/app__layout-56537e00859b2b87/37501-Layout-Header-Indicator.js` |
| 粒子引擎与运动模式 | 70977 | `src/modules/app__page-a96c46ff52d96bd7/70977-ParticleSystem.js` |
| 粒子辅助函数 | 82802 | `src/modules/app__page-a96c46ff52d96bd7/82802-ParticleHelpers.js` |
| 粒子鼠标交互状态 | 79996 | `src/modules/app__page-a96c46ff52d96bd7/79996-ParticlePointer.js` |
| 首页内容 | 20351 | `src/modules/app__page-a96c46ff52d96bd7/20351-SectionHome.js` |
| 信息/新闻区域 | 64374 | `src/modules/app__page-a96c46ff52d96bd7/64374-SectionInformation.js` |
| 队员页面与语音 | 32818 | `src/modules/app__page-a96c46ff52d96bd7/32818-SectionTeam.js` |
| 资源页、点阵映射和粒子图案选择 | 41537 | `src/modules/app__page-a96c46ff52d96bd7/41537-SectionResources.js` |
| 媒体页与视频交互 | 85533 | `src/modules/app__page-a96c46ff52d96bd7/85533-SectionMedia.js` |
| 更多页面 | 56643 | `src/modules/app__page-a96c46ff52d96bd7/56643-SectionMore.js` |
| 章节容器、加载画面、翻页、网格、萤火虫 | 67826 | `src/modules/app__page-a96c46ff52d96bd7/67826-Sections-Loading-Transitions.js` |
| 章节顺序和装饰开关 | 20202 | `src/modules/524-cab1b92753440a5f/20202-SectionRegistry.js` |
| 章节状态 | 88204 | `src/modules/524-cab1b92753440a5f/88204-SectionState.js` |
| 背景音乐播放、暂停与渐变 | 86058 | `src/modules/438-d29e05eb265b9762/86058-MusicPlayer.js` |
| 声音开关状态 | 11745 | `src/modules/438-d29e05eb265b9762/11745-SoundState.js` |

## 粒子配置映射

映射直接取自资源页面模块 41537。点阵内容保留你上传的版本，名称仍可能沿用原站。

|配置文件|页面数据键|
|---|---|
| `src/config/particles/17824.json` | `lungmen` |
| `src/config/particles/28389.json` | `penguin` |
| `src/config/particles/4420.json` | `rhine` |
| `src/config/particles/11901.json` | `rhodes` |
| `src/config/particles/44007.json` | `originiums` |
| `src/config/particles/95075.json` | `originium_arts` |
| `src/config/particles/83545.json` | `reunion` |
| `src/config/particles/54860.json` | `infected` |
| `src/config/particles/29285.json` | `nomadic_city` |
| `src/config/particles/85686.json` | `rhodes_island` |

点阵 JSON 的 count 必须等于 points 数组长度；size 是坐标系尺寸。不要假设所有点都固定有三个值，保留原代码允许的表示方式。

## 后续继续整理时的上下文

已完成所有主站注册分块拆分、14 项配置接线、基础验证。下一步优先在可启动浏览器的环境中并排运行原版与整理版，核对首页加载、六章节、粒子交互、音乐和移动端触屏；之后再考虑逐个将 React 编译调用转换为 JSX。不要直接升级框架或合并不同分块的同 ID 模块。

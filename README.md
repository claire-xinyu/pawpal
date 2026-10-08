# PawPal｜一起长大 · V3.0

每一段成长，都有人一起见证。

**正式网站：[https://claire-xinyu.github.io/pawpal/](https://claire-xinyu.github.io/pawpal/)**

沿用 `claire-xinyu/pawpal` 仓库与原有Git历史。GitHub Pages发布main根目录，无域名变更、无CNAME、无ChatGPT Site切换。

## 体验

四个页面：我的家、成长、健康、发现。真实核心案例为耳朵与尾巴；可切换宠物、查看个性档案，浏览/上传/检索/编辑照片，记录健康与生活观察、安排照护，查看成长时间线，再主动分享至本机漂流瓶或广场。发现页包含猫、狗和少量异宠示例，以及按城市、区域、宠物和类型筛选的同城内容。

所有新增数据与互动只保存在当前设备浏览器。上传图片使用IndexedDB；结构化记录使用LocalStorage。设置可导出含本机图片的备份；没有跨设备同步、真实成员账号或线上公共审核。公开案例图片为已检查的公开网站素材，不能等同于访问控制保护的家庭私密数据。未知日期、品种、医疗状态不补造。

## 技术与运行

原生HTML、CSS、ES Modules，无生产依赖和打包步骤。所有模块与资源使用相对路径，四页使用hash路由，GitHub Pages刷新可用。未使用Vite，因此无base配置需求；正式子目录始终为`/pawpal/`。

本地通过任意静态HTTP服务器预览，不能直接使用file协议。示例：`npx serve .`。Python方案请先启用Python 3.12的项目虚拟环境；不要使用系统Python 3.9。

- `app.js`：路由、全局状态、表单和交互编排
- `src/views.js`：四页及复用卡片
- `src/utils.js`：图标、组件与日期/转义工具
- `src/data.js`：真实资料与明确演示内容
- `src/storage.js`：本机元数据、IndexedDB、图片处理与导出
- `src/photos.js`：经检查的公开案例照片元数据
- `assets/pets/`：30份去元数据WebP衍生图
- `.private/`：私有开发资料，Git忽略，禁止发布

## 发布与回退

验证后提交并推送原仓库main，GitHub Pages由main根目录自动发布。保留`.nojekyll`。不需要更换域名或仓库；回退使用Git revert相关版本提交，再推送main。发布后检查Pages构建、匿名访问与线上资源哈希。

旧版`pawpal-v1`本机数据原值保留，设置可导出，不将旧版虚构金毛历史套用到真实猫咪。首次打开新版会建立独立`pawpal-v3`模型。

## 文档

- [产品说明](docs/PRODUCT.md)
- [设计系统](docs/DESIGN_SYSTEM.md)
- [数据模型](docs/DATA_MODEL.md)
- [实现与验收状态](docs/IMPLEMENTATION_STATUS.md)
- [照片导入及隐私检查](docs/PHOTO_IMPORT_REPORT.md)
- [验证报告](docs/QA_REPORT.md)

## 验证

开发验证依赖仅Playwright与sharp，不影响网站运行。`npm ci` → `npx playwright install chromium` → `npm test`，另外运行`npm run test:privacy`。已有Chrome时可通过`CHROME_PATH`指定；测试不使用个人浏览器profile。截图和运行记录写入被忽略的`test-results/`。

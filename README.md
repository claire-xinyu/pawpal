# PawPal V3.2

宠物的家庭空间、生活相册、健康记录与宠友社区。

**正式地址：https://claire-xinyu.github.io/pawpal/**
唯一仓库：claire-xinyu/pawpal。静态 GitHub Pages，main 根目录发布，无自定义域名；不更改地址或改写 Git 历史。

## 四个使用入口

- 我的家：今天的照片、生活小事、待办照护、健康摘要与提醒。
- 成长：按宠物、年份、月份及文字浏览照片，前后翻看、编辑、上传与分享；到家里程碑、往年同月与初到家时。
- 健康：状态 → 7/30/90天趋势 → 设备事件 → 修正、观察和照护行动；保留手动体重、疫苗与驱虫记录。
- 发现：漂流瓶、宠友广场与按任务进入的同城探索。

## 两种空间

首次进入「体验模式」，包含真实双猫档案与10张已筛选照片；模拟设备与预置照护事项独立标记来源，绝不作为猫咪真实健康史。账户内集中解释来源与能力边界。

「我的空间」从空档案开始，无模拟设备、体验相册、预置成员或医疗记录。两种空间分别使用 LocalStorage 键；图片在 IndexedDB 中用独立随机引用保存。旧 `pawpal-v3` 原值保留，原有记录延续到体验空间；支持导出原始旧版数据。

设备、家庭协作及社区均无网络后端。新照片默认私密，分享前明确说明仅当前浏览器可见，不会真正公开发布。清理网站数据前请导出备份。无登录、设备硬件连接、云同步或真实社区审核。

## 本地验收

Node.js 安装依赖后：

```sh
CHROME_PATH='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' npm test
npm run test:privacy
```

测试覆盖数据来源与隔离、五条用户场景、核心CRUD、设备归属修正、存储失败和390/768/1440px布局。源码为原生 ES modules，需HTTP服务运行；无打包构建。模块带3.2.0版本参数，避免旧浏览器缓存混用模块。

文档：`docs/PRODUCT.md`、`docs/DATA_MODEL.md`、`docs/QA_REPORT.md`、`docs/PHOTO_IMPORT_REPORT.md`、`docs/IMPLEMENTATION_STATUS.md`。

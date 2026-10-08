# 数据模型与存储

版本 `pawpal-v3`。本机元数据保存在 LocalStorage；上传图片存于 `pawpal-media` IndexedDB 的 `photos` 对象仓库，引用字段 `mediaId`。不将图片 Base64 放入 LocalStorage。

|对象|关键字段与关系|
|---|---|
|本机用户|仅 `local-user`，无登录或服务器身份|
|Family|name、city、district；用户可编辑，默认深圳，不存精确位置|
|FamilyMember|id、name、initial、source；5位演示身份，非真实成员账号|
|Pet|id、name、sex、species、breed、fur、age、ageSource、weightEstimate、weightDate、arrival、arrivalPrecision、spay、cover、tags、story、body、diet、boundary、interaction、source|
|PetRelationship|尾巴与耳朵的主人提供关系，以页面文案呈现；不是血缘断言|
|Photo|id、petIds[]、title、description、tags[]、capturedAt、capturedSource、uploadedAt、uploader、visibility、mediaId或静态image/thumb/large、source、width/height|
|TimelineEvent|id、petIds[]、date、precision、title、description、type、source、createdAt；时间线还派生照片、健康、观察、照护完成事件|
|HealthRecord|id、petId、type(weight/vaccine/deworm)、date、value(kg)、title、note、next(可选)、createdAt、updatedAt、source|
|BehaviorRecord|id、petId、category、date、note、source、createdAt|
|CareTask|id、petId、title、assignee、date、note、completedAt、source、createdAt|
|CommunityPost|id、petIds[]、petName、species、city、topic、title、text、image/mediaId、destination、date、createdAt、ownerId、source、own、comments[]|
|CommunityInteraction|liked/saved/reported/blocked ID集合；bottleFeedback按postId保存；本机状态，无虚构初始点赞数|
|LocationContent|id、city、district、species、type、title、text、detail、source；均为演示内容|
|FamilyActivity|id、text、actor、createdAt、source；只由真实本机操作生成，不虚构成员操作|

来源 `real` 为主人提供确定信息，`estimated` 为估算，`ownerReported` 为观察或新录入，`demo` 为演示，`library` 为经审查相册素材。字段未知时留空或写待确认。约5kg与约3.5kg是无测量日期的估算快照，绝不写入实测体重历史。

时间约束：2023-06与2024-01保留月份精度；相册依据Photos记录（含用户调整）确定capturedAt；导入/上传时间只用于家庭动态。手动日期修改标记manual；未知拍摄日期留空。照片可关联多只宠物并只保存一份资源。体重按发生日期及录入时间排序，删除或修改后重新派生图表和时间线。

旧版 `pawpal-v1` 原值保留，可从设置导出。旧版虚构金毛与真实猫咪不混并。既有用户输入也保留在旧键中，需手动迁入新版。V3不会清空旧数据。

元数据保存使用副本写入；LocalStorage写入失败时不更新应用状态，表单保留。IndexedDB不可用或文件格式不支持时明确报错。图片先存后保存元数据，失败可能留下不可见的孤立blob，不影响原有记录；未实现自动垃圾回收。删除图片保留分享副本引用，避免破坏社区内容。

导出格式包含state、所有引用的本机图片与missingMedia列表，便于备份；暂未提供导入恢复界面。清理浏览器数据或换设备不会同步。多标签页通过storage事件同步元数据，不是多人同步。

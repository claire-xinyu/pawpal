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

新增封面字段coverPhotoId/coverMediaId支持从本宠物相册选择上传图片作为封面，刷新后重新从IndexedDB加载。导出包括仅被封面引用的图片。异常结构化数据尽可能保存到pawpal-v3-recovery，在设置可导出原始内容；浏览器完全禁止存储时无法建立备份，界面明确提示。

案例社区卡另保留capturedAt，显示的是案例照片拍摄日期，不伪造历史发表日期。照护完成时间按Asia/Shanghai转换为时间线日期，不直接截取UTC日期。

## V3.2 当前模型（以上为V3历史模型）

当前仍保持 `version:3` 的兼容字段，增加 `schema:'3.2'` 与 `space:experience/personal`。

- `pawpal-space`：当前空间偏好。
- `pawpal-v32-experience`：体验家庭，含原V3资料与输入、模拟设备事件。
- `pawpal-v32-personal`：独立的用户空间，无预置模拟事件或案例照片。
- `pawpal-v3` / `pawpal-v1`：原值保留，不覆盖；V3在新体验键不存在时读取继承。
- `pawpal-media`：继续使用原IndexedDB，上传图片随机ID引用；两个空间的引用不互相复制。

`devices`：id、name、kind、capabilities、assumption、status、source。只有体验空间设 `simulated-connected`，详情明确不是真实连接。

`deviceEvents`：id、petId、deviceId、kind、at（Asia/Shanghai偏移）、source:simulated、note；喂食包含dispensed/consumed（g），饮水volume（ml），如厕classification/duration（秒）/weight（kg）。不同宠物在同一设备的事件时间错开，不重复占用；实际进食不大于投粮。事件ID确定性生成，90天初始序列，补齐截至当前时间的事件，不覆盖已有修正。

修正归属保存originalPetId与correctedAt，保留设备值及时间。所有摘要、图表和事件列表直接从当前归属的事件派生；不存第二份易失配的统计值。个人空间加载时剔除设备事件及设备数组，真实健康记录从不由模拟生成。

趋势日聚合：进食consumed合计、饮水volume合计、如厕次数、当日最近称重。手动称重同日优先于设备模拟，图上点说明来源；缺失值为null，不补零或插值。kg/斤仅改变显示，存储仍为kg。

变化提示使用截至昨日的两个相邻完整7天，数据不完整则不提示；同时查看食水厕体重与人工观察。没有诊断逻辑。

元数据失败不替换内存状态，图片失败保留输入。异常数据备份继续保留在pawpal-v3-recovery。没有自动备份导入或媒体空间回收。

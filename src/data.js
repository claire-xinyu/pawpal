import {casePhotos,covers} from './photos.js';
export const familyMembers=Array.from({length:5},(_,i)=>({id:'member-'+i,name:i===0?'我':`家人 ${i+1}`,initial:i===0?'我':String(i+1),source:'demo'}));
export const initialPets=[{
 id:'weiba',name:'尾巴',sex:'母猫',species:'猫咪',breed:'中华田园猫 · 狸花',fur:'短毛',age:'约5岁',ageSource:'estimated',weightEstimate:5,weightDate:null,arrival:'2023-06',arrivalPrecision:'month',spay:'已绝育（发现时已完成，手术日期未知）',cover:covers.weiba||'',tags:['沉稳独立','温和','有边界感','爱陪妹妹玩'],
 bio:'有自己的小世界，也愿意陪耳朵跑遍整个家。',story:'2023年6月，在深圳某小区楼下发现了尾巴。她曾是一只流浪猫，被发现时约2岁，当时已经绝育。',body:'天生麒麟尾，身子和腿较短，骨架偏小。',diet:'不贪吃，常常留下一部分食物，有时会被耳朵吃掉。',boundary:'不太主动亲近人，通常不挠人或哈气。不喜欢长时间抱着，反复抱起会不耐烦。',interaction:'沉稳独立，温和而有边界；愿意陪耳朵追逐玩耍。',source:'real',city:'深圳'
},{id:'erduo',name:'耳朵',sex:'母猫',species:'猫咪',breed:'三花猫 · 品种未知',fur:'长毛',age:'约3岁',ageSource:'estimated',weightEstimate:3.5,weightDate:null,arrival:'2024-01',arrivalPrecision:'month',spay:'待确认',cover:covers.erduo||'',tags:['热情黏人','好奇心强','活泼','爱撒娇'],
 bio:'听见家人回来，会一边喵喵叫，一边凑过来蹭蹭。',story:'2024年1月，在返回深圳途中的高速公路上发现耳朵。当时约4个月大，未见同窝小猫，发现时有耳螨。',body:'长毛、骨架较大、身子较长，视觉上比尾巴大。血统未经证实，品种未知。',diet:'吃得比较多，也会吃尾巴留下的食物，但整体偏瘦。',boundary:'爱亲近人，也有自己的边界；被惹烦时可能挠人。',interaction:'热情、活泼、好奇。迎接家人时会叫、蹭人，爱撒娇。',source:'real',city:'深圳'}];
export const milestones=[
 {id:'arrival-weiba',petIds:['weiba'],date:'2023-06',precision:'month',title:'尾巴来到这个家',description:'在深圳小区楼下发现；当时约2岁，已经绝育。',type:'arrival',source:'real'},
 {id:'arrival-erduo',petIds:['erduo'],date:'2024-01',precision:'month',title:'和耳朵相遇',description:'返回深圳途中，在高速公路上发现她；当时约4个月大。',type:'arrival',source:'real'},
 {id:'ear-mites',petIds:['erduo'],date:'2024-01',precision:'month',title:'发现时有耳螨',description:'仅记录发现时的情况。治疗方式、时间和恢复状态待确认。',type:'health',source:'ownerReported'}
];
export const topics=['养宠日常','一起长大','照护经验','散步日记'];
export const demoPosts=[
 {id:'demo-dog-1',petName:'豆包',petIds:[],city:'深圳',species:'狗狗',topic:'散步日记',title:'在草地上，慢一点也很好',text:'傍晚走一小圈，给小狗留足闻闻的时间。地点和内容为演示。',image:'assets/dog.jpg',source:'demo',date:'2026-10-08',ownerId:'demo-dog',comments:[]},
 {id:'demo-dog-2',petName:'糯米',petIds:[],city:'广州',species:'狗狗',topic:'养宠日常',title:'小狗的午睡日常',text:'睡醒、伸懒腰，再找一块舒服的地方。演示动态。',image:'assets/daily.jpg',source:'demo',date:'2026-10-07',ownerId:'demo-mochi',comments:[]},
 {id:'demo-small-1',petName:'栗子',petIds:[],city:'深圳',species:'其他宠物',topic:'照护经验',title:'给仓鼠留一个安静的小角落',text:'今天整理了活动空间。照护方式需要根据动物种类确认，此条仅为界面演示。',source:'demo',date:'2026-10-06',ownerId:'demo-small',comments:[]}
];
export const localContents=[
 {id:'local-1',city:'深圳',district:'南山区',species:'狗狗',type:'散步路线',title:'傍晚的绿道散步',text:'一条短距离散步路线示例：先闻闻，再慢慢走，随手清理。不是已核实路线。',detail:'路线、开放规则与现场条件均未核实。仅展示路线卡的产品结构；出行前自行确认。'},
 {id:'local-2',city:'深圳',district:'福田区',species:'猫咪',type:'本地照护经验',title:'两只猫，如何分开记录饭量',text:'示例：分开摆放食盆，在记录中注明观察时间。内容为演示。',detail:'这是照护记录示例，不作为兽医建议。可以将你观察到的进食变化记入健康页。'},
 {id:'local-3',city:'深圳',district:'南山区',species:'全部',type:'宠物友好地点',title:'宠物友好休息点 · 示例',text:'提供休息与饮水的地点卡示例。虚构地点，无实际地址。',detail:'该地点为虚构演示，不可用于导航、预约或判断现实的开放状态。'},
 {id:'local-4',city:'广州',district:'天河区',species:'狗狗',type:'本地活动',title:'周末的慢走计划 · 示例',text:'展示一个养宠活动信息卡；没有真实组织者或报名。',detail:'虚构活动，仅展示信息结构。保存为本机收藏，不构成报名。'}
].map(x=>({...x,source:'demo'}));
export function seed(){return {version:3,selected:'all',family:{name:'耳朵和尾巴的家',city:'深圳',district:'南山区'},members:familyMembers,pets:initialPets.map(p=>({...p})),photos:casePhotos.map(p=>({...p})),health:[],behaviors:[],tasks:[],events:[],activity:[],posts:[...['weiba','erduo'].map(id=>{const p=casePhotos.find(p=>p.petIds.length===1&&p.petIds[0]===id);const pet=initialPets.find(p=>p.id===id);return p?{id:'case-post-'+id,petName:pet.name,petIds:[id],city:'深圳',species:'猫咪',topic:'养宠日常',title:p.title,text:p.description,image:p.image,source:'library',destination:'both',date:p.capturedAt.slice(0,10),ownerId:'public-case',comments:[]}:null;}).filter(Boolean),...demoPosts.map(p=>({...p}))],liked:[],saved:[],reported:[],blocked:[],bottleFeedback:{},resourceSaved:[],settings:{unit:'kg'},legacyAvailable:false};}

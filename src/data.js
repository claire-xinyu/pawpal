import {casePhotos,covers} from './photos.js?v=3.2.0';
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
 {id:'demo-dog-1',petName:'豆包',petIds:[],city:'深圳',species:'狗狗',topic:'散步日记',title:'走了半小时，闻了二十分钟',text:'豆包每次经过这块草地，都要停下来认真闻一遍。今天没有赶路，就陪它多待了一会儿。',image:'assets/dog.jpg',source:'demo',date:'2026-10-08',ownerId:'demo-dog',comments:[]},
 {id:'demo-dog-2',petName:'糯米',petIds:[],city:'广州',species:'狗狗',topic:'养宠日常',title:'睡醒后还要再躺五分钟',text:'糯米把下巴搁在垫子上，听见零食袋才抬了抬眼睛。',image:'assets/daily.jpg',source:'demo',date:'2026-10-07',ownerId:'demo-mochi',comments:[]},
 {id:'demo-small-1',petName:'栗子',petIds:[],city:'深圳',species:'其他宠物',topic:'照护经验',title:'整理小窝时，它把纸条全搬走了',text:'给栗子换了纸垫料，它忙着把最喜欢的几条搬回角落。整理了一下午，最后还是按它的意思摆。',source:'demo',date:'2026-10-06',ownerId:'demo-small',comments:[]}
];
export const localContents=[
 {id:'local-1',city:'深圳',district:'南山区',species:'狗狗',type:'散步路线',title:'傍晚的绿道散步',text:'想轻松走一圈，可以先看看绿道的遮阴、饮水和休息位置。',detail:'路线、开放规则与现场条件均未核实。仅展示路线卡的产品结构；出行前自行确认。'},
 {id:'local-2',city:'深圳',district:'福田区',species:'猫咪',type:'本地照护经验',title:'两只猫，如何分开记录饭量',text:'试着分开放食盆，给每只猫单独留一点吃饭时间，再记下各自的饭量。',detail:'这是照护记录示例，不作为兽医建议。可以将你观察到的进食变化记入健康页。'},
 {id:'local-3',city:'深圳',district:'南山区',species:'全部',type:'宠物友好地点',title:'散步途中，找个地方歇一歇',text:'带好水和拾便袋，也为伙伴留一段安静休息的时间。',detail:'该地点为虚构演示，不可用于导航、预约或判断现实的开放状态。'},
 {id:'local-4',city:'广州',district:'天河区',species:'狗狗',type:'本地活动',title:'周末，一起慢慢走',text:'不用走很远。先从住处附近的一小圈开始，让小狗自己闻闻路上的气味。',detail:'虚构活动，仅展示信息结构。保存为本机收藏，不构成报名。'}
].map(x=>({...x,source:'demo'}));
export function seed(){return {version:3,selected:'all',family:{name:'耳朵和尾巴的家',city:'深圳',district:''},members:familyMembers,pets:initialPets.map(p=>({...p})),photos:casePhotos.map(p=>({...p})),health:[],behaviors:[],tasks:[],events:[],activity:[],posts:[...['weiba','erduo'].map(id=>{const p=casePhotos.find(p=>p.petIds.length===1&&p.petIds[0]===id);const pet=initialPets.find(p=>p.id===id);return p?{id:'case-post-'+id,petName:pet.name,petIds:[id],city:'深圳',species:'猫咪',topic:'养宠日常',title:p.title,text:p.description,image:p.image,source:'library',destination:'both',date:'',capturedAt:p.capturedAt,createdAt:p.uploadedAt,ownerId:'public-case',comments:[]}:null;}).filter(Boolean),...demoPosts.map(p=>({...p}))],liked:[],saved:[],reported:[],blocked:[],bottleFeedback:{},resourceSaved:[],settings:{unit:'kg'},legacyAvailable:false};}

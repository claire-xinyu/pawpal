import {seed} from './data.js';
const KEY='pawpal-v3';
let dbPromise;
export function load(){
 try{const raw=localStorage.getItem(KEY);if(raw){const s=JSON.parse(raw);if(s.version!==3||!s.family||typeof s.family.name!=='string'||typeof s.family.city!=='string'||!s.settings||!['kg','斤'].includes(s.settings.unit)||typeof s.selected!=='string'||!s.bottleFeedback||!['members','pets','photos','health','behaviors','tasks','posts','activity','events','liked','saved','reported','blocked','resourceSaved'].every(k=>Array.isArray(s[k])))throw Error('结构损坏');return {state:s,error:''};}
 const s=seed();s.legacyAvailable=!!localStorage.getItem('pawpal-v1');return {state:s,error:''};
 }catch{try{const raw=localStorage.getItem(KEY);if(raw&&!localStorage.getItem('pawpal-v3-recovery'))localStorage.setItem('pawpal-v3-recovery',raw);}catch{}return {state:seed(),error:'本机数据无法读取，已显示案例。可在设置里尝试导出异常数据备份；保存新记录前请先备份。'};}
}
export function persist(s){try{localStorage.setItem(KEY,JSON.stringify(s));return '';}catch{return '本机保存失败，可能空间不足或浏览器禁止存储。本次输入已保留，请重试或导出已有记录。';}}
function database(){if(!dbPromise)dbPromise=new Promise((resolve,reject)=>{
 const req=indexedDB.open('pawpal-media',1);req.onupgradeneeded=()=>req.result.createObjectStore('photos');req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(Error('本机图片存储不可用，请检查浏览器设置后重试。'));req.onblocked=()=>reject(Error('图片存储暂时被另一个页面占用，请关闭其他 PawPal 页面后重试。'));
 }).catch(e=>{dbPromise=null;throw e;});return dbPromise;}
export async function putBlob(id,blob){const db=await database();return new Promise((resolve,reject)=>{const tx=db.transaction('photos','readwrite');tx.objectStore('photos').put(blob,id);tx.oncomplete=resolve;tx.onerror=()=>reject(Error('图片保存失败，可能本机空间不足。'));tx.onabort=()=>reject(Error('图片保存中断，请重试。'));});}
export async function getBlob(id){const db=await database();return new Promise((resolve,reject)=>{const r=db.transaction('photos').objectStore('photos').get(id);r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(Error('图片读取失败'));});}
export async function removeBlob(id){const db=await database();return new Promise((resolve,reject)=>{const tx=db.transaction('photos','readwrite');tx.objectStore('photos').delete(id);tx.oncomplete=resolve;tx.onerror=reject;});}
export async function optimizeUpload(file){
 if(!file||!file.type.startsWith('image/'))throw Error('请选择可读取的图片（JPEG、PNG 或 WebP）。');
 if(file.size>20*1024*1024)throw Error('图片超过20 MB，请选择较小的图片。');
 let bitmap;try{bitmap=await createImageBitmap(file);}catch{throw Error('暂时无法读取这张图片。HEIC 请先导出为 JPEG；原文件不会被修改。');}
 const scale=Math.min(1,1600/Math.max(bitmap.width,bitmap.height));const c=document.createElement('canvas');c.width=Math.round(bitmap.width*scale);c.height=Math.round(bitmap.height*scale);c.getContext('2d').drawImage(bitmap,0,0,c.width,c.height);bitmap.close();
 const blob=await new Promise(r=>c.toBlob(r,'image/webp',.85));if(!blob)throw Error('图片处理失败，请换一张重试。');return {blob,width:c.width,height:c.height};
}
export async function allMedia(ids){const out={};for(const id of ids){const b=await getBlob(id);if(!b)continue;out[id]=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(b);});}return out;}

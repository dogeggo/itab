import fs from 'node:fs';
import path from 'node:path';
import {parse} from 'acorn';
import {build,transform} from 'esbuild';
const raw='output/native-source', stage='output/native-current';
const absoluteStage=path.resolve(stage),outputRoot=path.resolve('output');
if(path.dirname(absoluteStage)!==outputRoot||path.basename(absoluteStage)!=='native-current')throw new Error('组件构建路径越界');
fs.rmSync(absoluteStage,{recursive:true,force:true});
fs.mkdirSync(stage,{recursive:true});
const blocked=new Set(['pdfConvert','aippt','videoConvert']);
const catalog=JSON.parse(fs.readFileSync('assets/native-catalog.json','utf8')).filter(x=>!blocked.has(x.component));
const allowed=new Set(catalog.map(x=>x.component));
// 下一个假期使用随包的动态卡片，详情仍由原站 iframe 提供。
const allowedCards=new Set([...allowed,'xiayigejiaqi']);
let currentFile='';
const ast=s=>{try{return parse(s,{ecmaVersion:'latest',sourceType:'module'})}catch(e){console.error(currentFile,s.slice(e.pos-120,e.pos+120));throw e}};
function walk(n,fn,parent=null){if(!n||typeof n!=='object')return;if(n.type && fn(n,parent)===false)return;for(const [k,v] of Object.entries(n)){if(k==='start'||k==='end')continue;if(Array.isArray(v))v.forEach(x=>walk(x,fn,n));else if(v&&typeof v==='object')walk(v,fn,n)}}
// 为替换节点保留词法边界，避免 return"small"?...:e 被裁剪成 returne。
function edit(s,fn){const edits=[];walk(ast(s),(n,p)=>{const r=fn(n,p,s.slice(n.start,n.end));if(r!==undefined){edits.push([n.start,n.end,r]);return false}});for(const [a,b,t] of edits.sort((a,b)=>b[0]-a[0]))s=s.slice(0,a)+' '+t+' '+s.slice(b);return s}
function replaceFn(s,name,body){return edit(s,n=>n.type==='FunctionDeclaration'&&n.id?.name===name?`${n.async?'async ':''}function ${name}(${n.params.map(p=>s.slice(p.start,p.end)).join(',')}){${body}}`:undefined)}
function constValue(s,name,value){return edit(s,n=>n.type==='VariableDeclarator'&&n.id.name===name?`${name}=${value}`:undefined)}
function props(s,filter){return edit(s,n=>n.type==='ObjectExpression'?'{'+n.properties.filter(filter).map(p=>s.slice(p.start,p.end)).join(',')+'}':undefined)}
function removeTopFunctions(s,names){return edit(s,n=>n.type==='FunctionDeclaration'&&names.includes(n.id?.name)?'':undefined)}
function member(n){return n?.type==='MemberExpression'?(n.computed?n.property.value:n.property.name):null}
function removeCalls(s,names){return edit(s,n=>n.type==='CallExpression'&&names.includes(n.callee.name)?'(void 0)':undefined)}
const dialogs={},componentStyles={};
const registry=fs.readFileSync(raw+'/index-FjBLsWdN.js','utf8');
let registryDeps=[];
walk(ast(registry),n=>{if(n.type==='VariableDeclarator'&&n.id.name==='__vite__mapDeps')walk(n.init,x=>{if(x.type==='ArrayExpression')registryDeps=x.elements.map(x=>x.value)})});
walk(ast(registry),n=>{if(n.type==='Property'&&/^\.\/app\/.+\/index.vue$/.test(n.key.value||'')) {const component=n.key.value.split('/')[2];if(allowed.has(component)){let target;walk(n.value,x=>{if(x.type==='ImportExpression')target=x.source.value});dialogs[component]=target}}});
walk(ast(registry),n=>{if(n.type==='Property'&&/^\.\/app\/.+\/index.vue$/.test(n.key.value||'')){const component=n.key.value.split('/')[2];if(allowed.has(component))walk(n.value,x=>{if(x.type==='CallExpression'&&x.callee.name==='__vite__mapDeps')componentStyles[component]=x.arguments[0].elements.map(x=>registryDeps[x.value]).filter(x=>x.endsWith('.css'))})}});
for(const name of fs.readdirSync(raw)) {
 if(!name.endsWith('.js'))continue;
 if(/^(sync-|save_config-|useSta-|localforage-|indexdbAppStore-)/.test(name))continue;
 currentFile=name;let s=fs.readFileSync(raw+'/'+name,'utf8');
 // 仅替换组件展示文案，保留原站接口和数据协议。
 s=edit(s,n=>n.type==='Literal'&&n.value==='itab.link-'?'"NewTab-"':n.type==='Literal'&&typeof n.value==='string'&&/\biTab(?: Local)?\b/.test(n.value)&&!/:\/\//.test(n.value)?JSON.stringify(n.value.replace(/\biTab(?: Local)?\b/g,'NewTab')):undefined);
 if(name==='badge-F1n9rTg1.js') {
   // 重新导入原包时保留扩展上下文失效防护。
   s=fs.readFileSync('original/tomato-badge.js','utf8');
 }
 if(name==='d-tabs-VYJV0PEe.js') {
   // nextTick 执行前组件可能已卸载，须在回调内检查 DOM 引用。
   const callback='n(()=>{const e=g.value.querySelector(".d-tabs-item.active")';
   if(!s.includes(callback))throw new Error('原版标签容器回调结构不匹配');
   s=s.replace(callback,'n(()=>{const tabs=g.value;if(!tabs)return;const e=tabs.querySelector(".d-tabs-item.active")').replaceAll('g.value.style.setProperty(', 'tabs.style.setProperty(');
 }
 if(name==='Content-BYGd8DLC.js') {
   // 翻译历史的 toNow 依赖 relativeTime；每个组件 iframe 都必须自行注册。
   const dateImport='import{a as i}from"./vendor-dayjs-D25YbOr3.js";';
   if(!s.includes(dateImport))throw new Error('原版翻译日期依赖结构不匹配');
   s=s.replace(dateImport,'import{a as i,r as nativeRelativeTime}from"./vendor-dayjs-D25YbOr3.js";i.extend(nativeRelativeTime);');
 }
 if(name==='stocksCache-CNvbf2yR.js') {
   s=constValue(s,'f','values');s='import {values} from "../data.js";'+s;
   s=replaceFn(s,'b',`const key=String(l(e)); const initial=values.get(key); const state=o(initial ?? (typeof t==='function'?t():t)); let receiving=false; r(state,value=>{if(!receiving)values.set(key,value)},{deep:true,flush:'sync'}); window.__nativeSession.subscribe((changed,value)=>{if(changed===key){receiving=true;state.value=value===null?null:JSON.parse(value);queueMicrotask(()=>receiving=false)}}); return state;`);
   // 原主页默认配置获取、旧尺寸 / 组件迁移及浏览器搜索旧开关整段移除。
   s=edit(s,(n,p,code)=>n.type==='ExpressionStatement'&&p.type==='Program'&&(/F\(\)\.value\.length|z\.value\.time\|\||window\.chrome\.runtime\.onMessage/.test(code))?'':undefined);
      s=edit(s,n=>n.type==='ExportNamedDeclaration'?'export {'+n.specifiers.filter(p=>!['Q','ye','se','oe'].includes(p.local.name)).map(p=>s.slice(p.start,p.end)).join(',')+'};':undefined);
s=removeTopFunctions(s,['H','Y','Q','B','ye']);
s=s.replace('applyNotesV2Flag:ye,','');
   s=constValue(s,'T','o(false)');s=replaceFn(s,'L','T.value=false;');
   s=constValue(s,'ge','c({enableV2:true})');
   s=s.replace(/\$\[e\]&&\(e=\$\[e\]\),/g,'').replace(/\$\[e.size\]&&\(e.size=\$\[e.size\]\),/g,'');

   s=edit(s,n=>n.type==='VariableDeclaration'&&n.declarations.some(d=>d.id.name==='se')?'':undefined);
 }
 if(name==='baseRequest-Yj83uNvm.js') {
   s=s.replace('let s=o.get("token"),r=await t()','let r=await t()').replace('e.headers.fp=a(),s&&(e.headers.token=s),','').replace('(m(),Promise.reject(s.msg))','Promise.reject(s.msg)');
 }
 if(name==='getClientId-CgbGS3_s.js') {
   const t=ast(s);const fn=t.body.filter(n=>n.type==='VariableDeclaration').flatMap(n=>n.declarations).find(n=>n.id.name==='i');
   s='import {_ as t} from "./preload-helper-Bj79fh9f.js";const '+s.slice(fn.start,fn.end)+';export {i as a};';
   // signature 保留原版匿名请求签名，不读取身份、设备标识或登录凭据。
   s=s.replace(/__vite__mapDeps\(\[[\d,]*\]\)/g,'[]');
 }
 if(name==='public-api-DajUmvL1.js') {
   const declarations=ast(s).body.filter(n=>n.type==='VariableDeclaration').flatMap(n=>n.declarations);const f=declarations.find(n=>n.id.name==='F');
   s='import cache from "../data.js";import {a as f} from "./vendor-dayjs-D25YbOr3.js";import {b as u} from "./baseRequest-Yj83uNvm.js";import {values as l} from "../data.js";const N=async()=>cache;const '+s.slice(f.start,f.end)+';export {F as g};';
 }
 if(name==='staleAssetReload.lazy-DksV6goU.js') {
   // 日期共享时钟只显示到秒；保留真实动画的 RAF，并在重新导入原包时保留优化。
   if(!s.includes('el=requestAnimationFrame(dl)')||!s.includes('cancelAnimationFrame(el)'))throw new Error('原版日期时钟结构不匹配');
   s=edit(s,(n,p,code)=>n.type==='FunctionDeclaration'&&n.id.name==='dl'?code.replace('requestAnimationFrame(dl)','setTimeout(dl,1000-Date.now()%1000)'):n.type==='FunctionDeclaration'&&n.id.name==='fl'?code.replace('cancelAnimationFrame(el)','clearTimeout(el)'):undefined);
   const removed=new Set(['Zf','Bf']),kept=new Set();
   walk(ast(s),n=>{if(n.type==='Property'&&/^\.\/app\/.+\/icon\/icon\d*\.vue$/.test(n.key?.value||''))(allowedCards.has(n.key.value.split('/')[2])?kept:removed).add(n.value.name)});
   s=edit(s,n=>n.type==='ExportNamedDeclaration'?'export {'+n.specifiers.filter(p=>!removed.has(p.local.name)||kept.has(p.local.name)).map(p=>s.slice(p.start,p.end)).join(',')+'};':undefined);
   s=removeTopFunctions(s,['Zf','Bf']);
   s=edit(s,n=>{if(n.type==='ObjectExpression'&&n.properties.some(p=>/^\.\/app\//.test(p.key?.value||''))) return '{'+n.properties.filter(p=>allowedCards.has(p.key.value.split('/')[2])).map(p=>s.slice(p.start,p.end)).join(',')+'}'});
   // 当前宿主没有原版预置缓存；首次挂载时以空列表触发原版数据请求。
   s=s.replace('n=e.get("xiayigejiaqiData")','n=e.get("xiayigejiaqiData")||[]');
   s=edit(s,(n,p,code)=>n.type==='CallExpression'&&['x','J','on','U','V'].includes(n.callee.name)&&/sync-CyZoPpWa/.test(code)?'(void 0)':undefined);
 }
 if(name==='store-BkQ4EtcH.js') {
   // 保留原版增删、置顶、排序和卡片摘要。数据初始化仅读取当前全文记录。
   s=replaceFn(s,'K','return H=H.then(()=>window.__nativeSession.storeSet("notes","items",h(y.value)));');
   s=replaceFn(s,'ot','if(!L.value){if(!F)F=(async()=>{J++;try{z((await window.__nativeSession.storeGet("notes","items"))??[])}finally{J--;L.value=true}})();return F}');
   s=replaceFn(s,'nt','et.cancel();return K();');
   s=replaceFn(s,'z','y.value=t;T.value++;Z();$();');
   s=replaceFn(s,'D','return !!t;');
   s=replaceFn(s,'ut','return y.value.find(e=>e.id===t)||null;');
   s=replaceFn(s,'x','return false;');
   s=replaceFn(s,'A','return 0;');
   s=constValue(s,'et','c(()=>K(),500)');
   s=s.replace('persistNow:nt,','applyNativeSnapshot(items){et.cancel();J++;try{z(items)}finally{J--}},persistNow:nt,');
   // 移除云同步相关方法与旧数据合并方法。
   const keep=new Set(['list','listEpoch','ready','conflictFocusId','init','addNote','upsertNote','findNote','removeNote','toggleFixed','persistNow','getPlainList','visibleRows','markDirty','applyNativeSnapshot']);
   s=edit(s,n=>{if(n.type==='ObjectExpression'&&n.properties.some(p=>p.key?.name==='collectPushItems'))return '{'+n.properties.filter(p=>keep.has(p.key.name)).map(p=>p.key.name==='markDirty'?'markDirty(t){t.ut=Date.now();t.lut=t.ut;return t}':s.slice(p.start,p.end)).join(',')+'}'});
   s=edit(s,(n,p,code)=>n.type==='CallExpression'&&n.callee.name==='d'&&(/r.enableV2|ft.value/.test(code))?'(void 0)':undefined);
   s=s.replace('const ft=n();','');
   s=edit(s,n=>n.type==='CallExpression'&&n.callee.name==='x'?'false':undefined);
   s=edit(s,(n,p,code)=>n.type==='CallExpression'&&n.callee.type==='MemberExpression'&&member(n.callee)==='addEventListener'&&n.arguments[0]?.value==='storage'?'(void 0)':undefined);
   // 不再监听旧数据库修订号；当前主页负责跨标签页状态更新。
   s=removeCalls(s,['Y','U']);
   s=edit(s,n=>n.type==='CallExpression'&&member(n.callee)==='addEventListener'&&['focus','pageshow'].includes(n.arguments[0]?.value)?'(void 0)':undefined);
   s=removeTopFunctions(s,['p','S','N','b','I','L','E','M','k','U','Q','Y','tt','it','lt','at','st','dt']);
 }
 if(name==='store-DQmDOK8m.js') {
   s=s.replace('persistNow:V,','applyNativeSnapshot(items,folders){S.cancel();L.cancel();m++;try{j(items);P(folders)}finally{m--}},persistNow:V,');
   s=replaceFn(s,'C','if(!y.value){if(!Y)Y=(async()=>{m++;try{const db=(await import("./cache.js")).default;j(await db.get("todo")??[]);P(await db.get("todoFolder")??M())}finally{m--;y.value=true}})();return Y}');
   // 当前待办均有 id，删除 ct 查找兼容分支。
   s=s.replace('t&&i.value.find(e=>e.id===t)||i.value.find(t=>null!=e&&t.ct===e)','i.value.find(e=>e.id===t)');
 }
 if(name==='Content-SzV-34Ze.js') {
   s=s.replaceAll('u(H).enableV2','true').replaceAll('H.enableV2','true');
   s=constValue(s,'Se','{value:false}');s=constValue(s,'ze','false');s=constValue(s,'Fe','""');
   s=edit(s,(n,p,code)=>n.type==='ConditionalExpression'&&code.startsWith('Se.value?')?s.slice(n.alternate.start,n.alternate.end):undefined);
   s=edit(s,(n,p,code)=>n.type==='CallExpression'&&['r','i'].includes(n.callee.name)&&/sync-CyZoPpWa/.test(code)?'(void 0)':undefined);
   s=removeTopFunctions(s,['al']);
 }
 if(name==='tiptap-BRdPX-jS.js') {
   s=constValue(s,'Jb','undefined');
   s=edit(s,n=>{
     if(n.type==='VariableDeclarator'&&n.id.name==='ek') {
       let value=s.slice(n.init.start,n.init.end);
       for(const key of ['addProseMirrorPlugins','getSlashCommands'])value=edit(value,n=>n.type==='ObjectExpression'&&n.properties.some(p=>p.key?.name===key)?'{'+n.properties.filter(p=>p.key?.name!==key).map(p=>value.slice(p.start,p.end)).join(',')+'}':undefined);
       return 'ek='+value;
     }
   });
   s=removeTopFunctions(s,['Ub','Yb','Qb']);
 }
 if(name==='Content-Bk0XbgP0.js') {
   s=removeTopFunctions(s,['Ze']);
   // 删除图片上传控件及粘贴图片入口，保留普通股票搜索、行情与自选。
   s=edit(s,n=>{if(n.type==='CallExpression'&&n.arguments[1]?.type==='ObjectExpression'){
     const p=n.arguments[1].properties;
     if(p.some(p=>p.key?.value==='on-change'&&p.value.name==='Ze')||p.some(p=>p.key?.name==='class'&&p.value.value?.includes('stock-uploader')))return 'g("",!0)';
   }});
   s=edit(s,n=>n.type==='ObjectExpression'&&n.properties.some(p=>p.key?.name==='onPasteImage')?'{'+n.properties.filter(p=>p.key?.name!=='onPasteImage').map(p=>s.slice(p.start,p.end)).join(',')+'}':undefined);
 }
 if(name==='index-B7kR7tcE.js') {
   // 仅保留无需账号的原版壁纸来源；账户上传及收藏组件不注册。
   s=edit(s,n=>n.type==='ArrayExpression'&&n.elements.some(e=>e?.type==='ObjectExpression'&&e.properties.some(p=>p.key.name==='source'&&p.value.value==='userCollect'))?'['+n.elements.filter(e=>!e.properties?.some(p=>p.key.name==='source'&&['userCollect','local'].includes(p.value.value))).map(e=>s.slice(e.start,e.end)).join(',')+']':undefined);
   s=edit(s,n=>n.type==='ObjectExpression'&&n.properties.some(p=>['userCollect','UserCollect'].includes(p.key?.name))?'{'+n.properties.filter(p=>!['userCollect','local','UserCollect','Local'].includes(p.key.name)).map(p=>s.slice(p.start,p.end)).join(',')+'}':undefined);
   s=s.replace('function l(e){','function l(e){e=e.filter(row=>["wallspic","wallhaven","video","bing","unsplash","deepin","color"].includes(row.source));');
   s=edit(s,n=>n.type==='CallExpression'&&n.arguments[0]?.type==='ObjectExpression'&&n.arguments[0].properties.some(p=>p.key?.name==='__name'&&['local','userCollect'].includes(p.value.value))?'null':undefined);
 }
 if(name==='notifyComplete-XLV67qw7.js') {
   s=s.replace('ready:()=>y};','ready:()=>y,sync:async()=>{A(await h(),{persistNow:false,sync:false})}};');
   s=s.replace('n.durationMin??n.timeRemaining','n.durationMin').replace('n.audio||n.data||o','n.audio||o').replace('n.remainingAtStart??n.progress??60*s','n.remainingAtStart??60*s');
   s=s.replace(/,timeRemaining:t.durationMin,progress:a,showTime:i\(a\),percentage:s\(t,a\),data:r/,'');
 }
 // 所有 preload 只处理真实 CSS。JS 由原生 import 加载，避免预加载已删除的模块。
 let deps=[];walk(ast(s),n=>{if(n.type==='VariableDeclarator'&&n.id.name==='__vite__mapDeps')walk(n.init,x=>{if(x.type==='ArrayExpression')deps=x.elements.map(x=>x.value)})});
 s=edit(s,n=>n.type==='CallExpression'&&n.callee.name==='__vite__mapDeps'?JSON.stringify(n.arguments[0].elements.map(x=>deps[x.value]).filter(x=>x?.endsWith('.css'))):undefined);
 s=edit(s,n=>n.type==='VariableDeclaration'&&n.declarations.some(d=>d.id.name==='__vite__mapDeps')?'':undefined);
 // 原云备份、统计调用直接删除，不留空实现模块。
 const removedCalls=[];
 for(const n of ast(s).body) if(n.type==='ImportDeclaration'&&/save_config-|statistics-|useSta-/.test(n.source.value))for(const p of n.specifiers)removedCalls.push(p.local.name);
 s=removeCalls(s,removedCalls);
 s=edit(s,(n,p,code)=>n.type==='CallExpression'&&member(n.callee)==='SAVE_CONFIG'?'(void 0)':undefined);
 s=edit(s,(n,p,code)=>n.type==='CallExpression'&&member(n.callee)==='then'&&/import\("\.\/(statistics-|sync-|save_config-)/.test(code)?'(void 0)':undefined);
 const accounts=ast(s).body.filter(n=>n.type==='ImportDeclaration'&&n.source.value.includes('stocksCache')).flatMap(n=>n.specifiers.filter(p=>p.imported?.name==='u').map(p=>p.local.name));
 s=edit(s,(n,p,code)=>n.type==='VariableDeclarator'&&n.init&&n.init.end-n.init.start<100&&/\.value\._id/.test(s.slice(n.init.start,n.init.end))&&n.init.type==='CallExpression'?`${n.id.name}=null`:undefined);
 s=edit(s,(n,p)=>n.type==='CallExpression'&&accounts.includes(n.callee.name)&&!n.arguments.length&&p.type==='VariableDeclarator'&&p.init===n?'null':undefined);
 // 直接调用宿主数据；不覆盖 Storage 或浏览器 API。
 if(!name.startsWith('vendor-')) {
   s=edit(s,(n,p)=>n.type==='MemberExpression'&&member(n)==='enableV2'&&!(p.type==='AssignmentExpression'&&p.left===n)?'true':undefined);
   s=edit(s,n=>n.type==='ArrayExpression'&&n.elements.some(e=>e?.value==='1x1')&&n.elements.some(e=>e?.value==='mini')?'['+n.elements.filter(e=>e?.value!=='mini').map(e=>s.slice(e.start,e.end)).join(',')+']':undefined);
   s=edit(s,n=>n.type==='BinaryExpression'&&['==','==='].includes(n.operator)&&((n.left.type==='MemberExpression'&&member(n.left)==='size'&&n.right.value==='mini')||(n.right.type==='MemberExpression'&&member(n.right)==='size'&&n.left.value==='mini'))?'false':undefined);
   for(let i=0;i<3;i++)s=edit(s,n=>n.type==='ConditionalExpression'&&n.test.type==='BinaryExpression'&&['small','medium','mini'].some(x=>n.test.left.value===x||n.test.right.value===x)&&['1x1','2x2','2x4'].includes(n.consequent.value)?s.slice(n.alternate.start,n.alternate.end):undefined);
   s=s.replaceAll('.replace("app-","")','');
 }
 s=s.replaceAll('localStorage.getItem(', 'window.__nativeSession.readText(').replaceAll('localStorage.setItem(', 'window.__nativeSession.writeText(').replaceAll('localStorage.removeItem(', 'window.__nativeSession.removeValue(');
 s=s.replaceAll('./indexdb-D2Sglj6h.js','./cache.js').replaceAll('./wallpaperDb-kyWvYGyk.js','./wallpaper-cache.js');
 if(name==='staleAssetReload.lazy-DksV6goU.js')s=s.replace('import("./public-api-DajUmvL1.js").then(e=>e.p)','import("./public-api-DajUmvL1.js")').replace('e.getTodayBing()','e.g()');
 s=edit(s,n=>n.type==='ObjectExpression'&&n.properties.some(p=>/\/app\/.*\/icon\/icon/.test(p.key?.value||''))?'{'+n.properties.filter(p=>allowedCards.has(p.key.value.match(/\/app\/([^/]+)\//)?.[1])).map(p=>s.slice(p.start,p.end)).join(',')+'}':undefined);
 // 删除无副作用的预打包冗余 import，以及被删功能的 import。
 s=edit(s,n=>n.type==='ImportDeclaration'&&(!n.specifiers.length||/save_config-|statistics-|useSta-|sync-CyZoPpWa|create_login-/.test(n.source.value))?'':undefined);
 s=edit(s,(n,p,code)=>n.type==='CallExpression'&&((n.arguments[0]?.type==='ObjectExpression'&&n.arguments[0].properties.some(p=>p.key?.name==='__name'))||(n.callee.object?.name==='Object'&&(member(n.callee)==='freeze'||member(n.callee)==='defineProperty'&&n.arguments[0]?.type==='ObjectExpression')))?'/* @__PURE__ */'+code:undefined);
 s=(await transform(s,{format:'esm',minifySyntax:true,treeShaking:true,charset:'utf8'})).code;
 fs.writeFileSync(stage+'/'+name,s);
}
fs.writeFileSync(stage+'/cache.js','export {default} from "../data.js";');
fs.writeFileSync(stage+'/wallpaper-cache.js','import {cacheFor} from "../data.js";export default cacheFor("wallpaper");');
fs.copyFileSync('original/data.js','output/data.js');
fs.writeFileSync(stage+'/package.json','{"sideEffects":false}');
fs.writeFileSync(stage+'/cards.js','export {a,i,u} from "./staleAssetReload.lazy-DksV6goU.js";');
fs.writeFileSync(stage+'/state.js','export {a,b,f,w,z} from "./stocksCache-CNvbf2yR.js";');
fs.writeFileSync(stage+'/notes.js','export {useNotesStore} from "./store-BkQ4EtcH.js";');
fs.writeFileSync(stage+'/todo.js','export {u} from "./store-DQmDOK8m.js";');
fs.writeFileSync(stage+'/vue.js','export {at,r,W,d} from "./vendor-vue-BG-CQRtu.js";');
let dynamic='export const dialogs={'+Object.entries(dialogs).map(([name,file])=>`${JSON.stringify(name)}:()=>import(${JSON.stringify(file)})`).join(',')+'};';
fs.writeFileSync(stage+'/dialogs.js',dynamic);
const result=await build({entryPoints:['cards','state','notes','todo','vue','dialogs'].map(n=>stage+'/'+n+'.js'),outdir:'output/native-bundle',bundle:true,splitting:true,format:'esm',target:'chrome120',minifySyntax:true,treeShaking:true,charset:'utf8',metafile:true,write:false,logLevel:'silent'});
// 校验解析完成后才替换发行目录。
for(const name of fs.readdirSync('original/chunks'))fs.unlinkSync('original/chunks/'+name);
for(const file of result.outputFiles)fs.writeFileSync('original/chunks/'+path.basename(file.path),file.contents);
for(const name of ['media-merge.js','media-split.js'])fs.copyFileSync(raw+'/'+name,'original/chunks/'+name);
fs.writeFileSync('assets/native-catalog.json',JSON.stringify(catalog,null,2)+'\n');
fs.writeFileSync('original/registry.js',`export const nativeComponents=new Set(${JSON.stringify([...allowed])});\nexport const nativeCardComponents=new Set(${JSON.stringify([...allowedCards])});\nexport const componentStyles=${JSON.stringify(componentStyles)};\n`);
fs.writeFileSync('output/native-build-meta.json',JSON.stringify(result.metafile,null,2));
console.log(`已生成 ${allowed.size} 项原版内置组件；${result.outputFiles.length} 个运行模块。`);


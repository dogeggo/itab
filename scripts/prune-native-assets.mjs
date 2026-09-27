import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('original');
const files=[];
function walk(dir){for(const name of fs.readdirSync(dir)){const p=path.join(dir,name);if(fs.statSync(p).isDirectory())walk(p);else files.push(p)}}
walk(root);
// CSS 依赖由已生成的组件清单、宿主和动态导入声明决定。
let text=files.filter(p=>/\.(js|html|css)$/.test(p)&&!p.includes(path.sep+'assets'+path.sep)).map(p=>fs.readFileSync(p,'utf8')).join('\n');
const assets=files.filter(p=>p.startsWith(path.join(root,'assets')+path.sep));
const keep=new Set();let changed=true;
while(changed){changed=false;for(const file of assets){if(keep.has(file)||!text.includes(path.basename(file)))continue;keep.add(file);changed=true;if(/\.(css|svg)$/.test(file))text+='\n'+fs.readFileSync(file,'utf8')}}
for(const file of assets)if(!keep.has(file))fs.unlinkSync(file);
const settings=path.join(root,'setting');
if(path.dirname(settings)!==root)throw new Error('资源路径越界');
if(fs.existsSync(settings))fs.rmSync(settings,{recursive:true});
console.log(`保留 ${keep.size} 项原版构建资源，清除 ${assets.length-keep.size} 项无引用资源。`);

async page => {
  page.setDefaultTimeout(12000);
  const checks=[],errors=[];page.on('pageerror',e=>errors.push(e.message));
  const assert=(ok,text)=>{if(!ok)throw Error(text);checks.push(text);};
  try {
  for(const p of page.context().pages())if(p!==page)await p.close();
  const ids=await page.evaluate(async()=>{
    const{createState}=await import('./src/model.js'),{write}=await import('./src/storage.js'),{parseCatalog,newOriginalWidget}=await import('./src/original-widgets.js');
    const rows=parseCatalog({code:200,data:await(await fetch('./assets/native-catalog.json')).json()});
    const components=['notes','todo','daysMatter','muyu','tomato','calculator','wallpaper','bookmarks'];
    const groups=components.map(component=>{const r=rows.find(r=>r.component===component);return{id:component,name:r.name,icon:'grid',items:[newOriginalWidget(r)]};});
    await write('state',createState(groups));return Object.fromEntries(groups.map(g=>[g.id,g.items[0].id]));
  });
  await page.reload();
  const close=async()=>{if(await page.locator('#modal[open]').count()){await page.frameLocator('.native-widget-dialog').locator('.close-window').first().click();await page.locator('#modal[open]').waitFor({state:'hidden'});}};
  async function open(component){await close();await page.locator(`[data-group="${component}"]`).click();await page.locator(`#grid [data-item-id="${ids[component]}"] .tile`).press('Enter');const f=page.locator('.native-widget-dialog').contentFrame();await f.locator('.el-dialog').first().waitFor();return f;}
  const state=()=>page.evaluate(async()=>{const{read}=await import('./src/storage.js');return read('state');});
  let f=await open('notes');
  await f.locator('[title="新增备忘录"]').click();await f.getByPlaceholder('无标题',{exact:true}).fill('原版全文验收');await f.locator('.tiptap[contenteditable=true]').fill('第一行中文\n第二行 ✅');
  await close();await page.reload();f=await open('notes');await f.getByText('原版全文验收',{exact:true}).click();
  assert(await f.locator('.tiptap[contenteditable=true]').innerText()==='第一行中文\n\n第二行 ✅','便签全文立即关闭后刷新保留');
  const popupPromise=page.waitForEvent('popup');await f.locator('[title="新窗口打开"]').click();const popup=await popupPromise;
  await popup.locator('.native-widget-dialog').contentFrame().getByText('原版全文验收',{exact:true}).click();
  assert(await popup.locator('.native-widget-dialog').contentFrame().locator('.tiptap[contenteditable=true]').innerText()==='第一行中文\n\n第二行 ✅','新窗口打开同一个原版组件及数据');await popup.close();
  f=await open('todo');await f.getByPlaceholder('添加任务',{exact:true}).fill('完成原版适配');await f.getByPlaceholder('添加任务',{exact:true}).press('Enter');await f.locator('textarea').first().waitFor();await f.locator('.todo-check').first().click();await f.locator('.todo-content-li.done textarea').waitFor();
  await close();await page.reload();f=await open('todo');assert(await f.locator('.todo-content-li.done textarea').inputValue()==='完成原版适配','待办新增和完成状态刷新保留');
  f=await open('daysMatter');await f.getByPlaceholder('自定义事件名称').fill('原版事件验收');await f.getByText('修改完成',{exact:true}).click();await close();await page.reload();
  await page.locator('.native-widget-card').contentFrame().getByText('原版事件验收',{exact:true}).waitFor();assert(true,'倒数日编辑写回主页卡片');
  f=await open('daysMatter');await f.getByText('添加',{exact:true}).click();await close();assert((await state()).groups.find(g=>g.id==='daysMatter').items.length===2,'原版模板添加生成独立实例且没有重复');
  f=await open('muyu');
  await f.locator('.muyu').click();await f.getByText('1',{exact:true}).waitFor();assert(await f.locator('.muyu-counter').textContent()==='1','木鱼原版会话计数可操作');
  f=await open('tomato');await page.frames().find(f=>f.url().includes('mode=dialog')).waitForFunction(()=>window.__nativeTomato?.ready());await f.getByText('开 始',{exact:true}).click();await close();
  assert((await state()).nativeData.stores.cache['app-tomato'].value.status==='play','番茄钟启动状态保存');
  f=await open('calculator');
  await f.getByText('计算器',{exact:true}).first().click();await f.locator('input').fill('(12+8)*5');await f.locator('input').press('Enter');await f.getByText('100',{exact:true}).first().waitFor();assert(true,'原版计算器实际运算得到 100');
  f=await open('wallpaper');await f.getByText('纯色',{exact:true}).click();const paper=f.locator('.d-paper-image').first();await paper.hover();await paper.locator('.d-image-select-btn').click();await close();await page.reload();
  assert(['gradient','color'].includes((await state()).settings.wallpaper.type),'原版纯色/渐变壁纸设置写回主页');
  const environment=page.url().startsWith('chrome-extension:')?'extension':'web';
  await page.getByRole('button',{name:'备份',exact:true}).click();
  const downloadPromise=page.waitForEvent('download');await page.getByRole('button',{name:'导出本地数据',exact:true}).click();await(await downloadPromise).saveAs(`output/playwright/native-backup-${environment}.json`);
  await page.getByRole('button',{name:'关闭设置',exact:true}).click();
  f=await open('notes');await f.getByText('原版全文验收',{exact:true}).click();await f.locator('.tiptap[contenteditable=true]').fill('恢复前修改');await close();
  await page.getByRole('button',{name:'备份',exact:true}).click();await page.locator('#backup-file').setInputFiles(`output/playwright/native-backup-${environment}.json`);await page.getByRole('button',{name:'确认',exact:true}).click();await page.getByText('备份恢复成功',{exact:true}).waitFor();await page.getByRole('button',{name:'关闭设置',exact:true}).click();
  f=await open('notes');await f.getByText('原版全文验收',{exact:true}).click();assert(await f.locator('.tiptap[contenteditable=true]').innerText()==='第一行中文\n\n第二行 ✅','通过界面导出和导入恢复原版便签全文');await close();
  const restored=await state();assert(restored.nativeData.stores.cache.todo.value.some(t=>t.done&&t.content==='完成原版适配'),'JSON 恢复包含原版已完成待办');
  assert(errors.length===0,'交互流程没有未捕获 JavaScript 错误');
  return {environment,checks,errors};
  } catch(error) { throw new Error(error.message+'；此前已通过：'+checks.join('、')); }
}

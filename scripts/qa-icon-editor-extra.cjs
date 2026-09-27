async page => {
  const checks=[], errors=[];
  page.setDefaultTimeout(15000);
  page.on('pageerror',e=>errors.push(e.message));
  const assert=(value,label)=>{if(!value)throw Error(label);checks.push(label);};
  const state=()=>page.evaluate(async()=>{const store=await import('./src/storage.js');await store.flush();return store.read('state');});
  const frame=()=>page.frameLocator('.icon-editor-frame');
  const closed=()=>page.locator('#modal[open]').waitFor({state:'hidden'});
  const before=await state();
  try {
    await page.reload();
    await page.getByRole('button',{name:'添加图标',exact:true}).click();
    await page.getByRole('button',{name:/添加网址/}).click();
    let f=frame();await f.locator('html[data-ready="true"]').waitFor();
    await f.getByRole('textbox',{name:'网址',exact:true}).fill('https://example.com/first');
    await f.getByRole('textbox',{name:'名称',exact:true}).fill('新增文字图标');
    await f.getByRole('textbox',{name:'图标文字',exact:true}).fill('新增');
    await f.getByRole('button',{name:'保存并继续',exact:true}).click();
    await f.getByRole('textbox',{name:'名称',exact:true}).fill('');
    assert((await state()).groups[0].items.some(i=>i.name==='新增文字图标'),'添加图标和保存并继续成功写入当前分组');
    assert(await f.getByRole('textbox',{name:'网址',exact:true}).inputValue()==='','保存并继续会清空已保存草稿');
    await f.getByRole('textbox',{name:'网址',exact:true}).fill('javascript:alert(1)');
    await f.getByRole('textbox',{name:'名称',exact:true}).fill('无效地址');
    await f.getByRole('button',{name:'保 存',exact:true}).click();
    await f.getByText('请输入有效的 http、https 或浏览器内部网址',{exact:true}).waitFor();
    assert(!(await state()).groups[0].items.some(i=>i.name==='无效地址'),'无效地址不会保存且编辑器继续可用');
    await f.getByRole('button',{name:'Close this dialog'}).click();await closed();
    const folder=before.groups[0].items.find(i=>i.kind==='folder');
    await page.getByRole('button',{name:folder.name,exact:true}).click();
    const child=folder.children.find(i=>i.kind==='site');
    await page.locator(`.folder-grid [data-id="${child.id}"]`).click({button:'right'});
    await page.getByRole('button',{name:'编辑图标',exact:true}).click();f=frame();
    await f.getByRole('textbox',{name:'名称',exact:true}).fill('文件夹内图标');
    await f.getByRole('button',{name:'保 存',exact:true}).click();await closed();
    assert((await state()).groups[0].items.find(i=>i.id===folder.id).children.some(i=>i.id===child.id&&i.name==='文件夹内图标'),'文件夹内编辑保持原位置');
    await page.evaluate(async()=>{const {read,write}=await import('./src/storage.js');const s=await read('state');s.settings.theme={mode:'dark',system:false,color:'#1890ff'};await write('state',s);});
    await page.reload();
    const item=before.groups[0].items.find(i=>i.kind==='site');
    await page.getByRole('button',{name:item.name,exact:true}).click({button:'right'});
    await page.getByRole('button',{name:'编辑图标',exact:true}).click();f=frame();
    await f.locator('html.dark[data-ready="true"]').waitFor();
    await f.locator('.el-dialog').screenshot({path:'output/playwright/icon-editor-dark-dialog.png',animations:'disabled'});
    await page.screenshot({path:'output/playwright/icon-editor-dark.png',animations:'disabled'});
    assert(await f.locator('.el-dialog').evaluate(el=>getComputedStyle(el).backgroundColor)==='rgb(22, 22, 26)','编辑器同步主页深色主题');
    assert(await f.locator('html').evaluate(el=>getComputedStyle(el).colorScheme)==='dark','编辑器 iframe 的实际配色方案为深色，避免透明画布显示白底');
    assert(await page.locator('#modal').evaluate(el=>getComputedStyle(el,'::backdrop').backdropFilter)==='blur(5px)','图标编辑沿用组件弹窗的背景虚化');
    assert(await f.locator('.el-overlay').evaluate(el=>getComputedStyle(el).backgroundColor)==='rgba(0, 0, 0, 0)','编辑器不会在主页遮罩之上叠加第二层遮罩');
    await f.locator('.icon-preview').filter({hasText:'文字图标'}).click();
    await f.locator('.d-color-item').last().click();
    await f.locator('.el-color-picker__panel input').fill('#9326E9');
    await f.getByRole('button',{name:'OK',exact:true}).click();
    await f.getByRole('button',{name:'保 存',exact:true}).click();await closed();
    assert((await state()).groups[0].items.find(i=>i.id===item.id).color.toLowerCase()==='#9326e9','原版自定义颜色选择器保存所选颜色');
    assert(errors.length===0,'新增、文件夹和深色主题操作无未捕获错误');
    return {checks,errors};
  } catch(error) { return {checks,errors,failure:error.message}; }
  finally {await page.evaluate(async s=>{const{write}=await import('./src/storage.js');await write('state',s);},before);await page.reload();}
}

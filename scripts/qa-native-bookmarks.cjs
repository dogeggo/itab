async page => {
  const id=await page.evaluate(async()=>{for(const old of await chrome.bookmarks.search({url:'https://example.org/itab-qa'}))await chrome.bookmarks.remove(old.id);const root=(await chrome.bookmarks.getTree())[0];const parent=root.children.find(n=>!n.url);return(await chrome.bookmarks.create({parentId:parent.id,title:'iTab 适配验收书签',url:'https://example.org/itab-qa'})).id;});
  await page.locator('[data-group="bookmarks"]').click();await page.locator('#grid .tile[role=button]').first().press('Enter');
  const f=page.locator('.native-widget-dialog').contentFrame();await f.getByText('iTab 适配验收书签',{exact:true}).waitFor();
  if(await f.getByText('开始使用',{exact:true}).isVisible()){await f.getByText('开始使用',{exact:true}).click();await f.getByText('开始使用',{exact:true}).waitFor({state:'hidden'});}
  await f.getByText('全选',{exact:true}).click();await f.getByRole('button',{name:'批量导入',exact:true}).click();
  await f.getByText('批量导入了1条数据',{exact:true}).waitFor({timeout:30000});
  await page.frameLocator('.native-widget-dialog').locator('.close-window').first().click();await page.reload();
  const imported=await page.evaluate(async()=>{const{read}=await import('./src/storage.js');return(await read('state')).groups.find(g=>g.id==='bookmarks').items.some(i=>i.kind==='site'&&i.url==='https://example.org/itab-qa');});
  await page.evaluate(id=>chrome.bookmarks.remove(id),id);
  if(!imported)throw Error('书签导入未保存');
  return {checks:['真实 chrome.bookmarks 读取成功','原版批量导入写入主页，刷新后保留','清理测试浏览器书签']};
}

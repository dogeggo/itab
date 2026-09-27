async (page) => {
  await page.keyboard.press('Escape');
  const snapshot = await page.evaluate(() => ({config:JSON.parse(localStorage.getItem('baseConfig')),navigation:JSON.parse(localStorage.getItem('navConfig'))}));
  const dl = page.waitForEvent('download');
  await page.evaluate(data => {const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));a.download='original-live-state.json';a.click();},snapshot);
  await (await dl).saveAs('docs/original-live-state.json');
  console.log(snapshot.navigation[0].children.map(i=>({name:i.name,type:i.type,component:i.component,size:i.size,src:i.src})))
}

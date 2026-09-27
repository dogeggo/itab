async page => {
  page.setDefaultTimeout(10000);
  for(const other of page.context().pages())if(other!==page)await other.close();
  const {scanStart,scanEnd}=await page.evaluate(()=>{
    const query=new URLSearchParams(location.search);
    return {scanStart:Number(query.get('scanStart')||0),scanEnd:Number(query.get('scanEnd')||100)};
  });
  const accountRequests=[];
  const requestListener=request=>{if(/https:\/\/(?:base|api|widget)\.itab\.link\/.*(?:\/login|\/user(?:\/|Config)|\/member|\/payment|\/subscription|\/auth)/i.test(request.url()))accountRequests.push(request.url());};
  page.on('request',requestListener);
  const components=await page.evaluate(async()=>{
    const {createState}=await import('./src/model.js');const {write}=await import('./src/storage.js');
    const {parseCatalog,newOriginalWidget}=await import('./src/original-widgets.js');
    const rows=parseCatalog({code:200,data:await(await fetch('./assets/native-catalog.json')).json()});
    const groups=rows.map(r=>({id:r.component,name:r.name,icon:'grid',items:[newOriginalWidget(r)]}));
    const state=createState(groups);await write('state',state);return rows.map(r=>({component:r.component,name:r.name}));
  });
  await page.reload();
  const results=[];
  for(const {component,name} of components.slice(scanStart,scanEnd)) {
    const errors=[];const handler=e=>errors.push(e.message);page.on('pageerror',handler);
    await page.locator('.sidebar-group').filter({hasText:name}).first().click();
    const card=page.locator('iframe.native-widget-card');
    await card.waitFor();
    await page.waitForFunction(()=>document.querySelector('.native-widget-card')?.dataset.nativeStatus,{timeout:10000}).catch(()=>{});
    const cardText=await card.contentFrame().locator('body').innerText().catch(()=>'');
    const cardStatus=await card.getAttribute('data-native-status');
    // 使用主页原有按钮触发弹窗，避免不同原组件内部的点击区域干扰批量加载检查。
    await page.locator('#grid .tile[role=button]').first().press('Enter');
    const dialog=page.locator('iframe.native-widget-dialog');
    await dialog.waitFor();
    await dialog.contentFrame().locator('.el-dialog,#native-error:not([hidden])').first().waitFor({timeout:10000}).catch(()=>{});
    await page.waitForTimeout(600);
    results.push({component,cardStatus,cardText:cardText.slice(0,120),dialogStatus:await dialog.getAttribute('data-native-status'),dialogText:(await dialog.contentFrame().locator('body').innerText()).slice(0,800),error:await dialog.getAttribute('data-native-error'),errors});
    await page.frameLocator('.native-widget-dialog').locator('.close-window').first().click();
    page.off('pageerror',handler);
  }
  page.off('request',requestListener);
  const passed=!accountRequests.length&&results.every(r=>r.cardStatus==='ready'&&r.dialogStatus==='ready'&&!r.error&&!r.errors.length);
  return {scanStart,scanEnd,passed,accountRequests,results};
}

async page => {
  page.setDefaultTimeout(12000);const checks=[],errors=[];page.on('pageerror',e=>errors.push(e.message));
  const assert=(ok,label)=>{if(!ok)throw Error(label);checks.push(label);};
  await page.evaluate(async()=>{const{createState}=await import('./src/model.js'),{write}=await import('./src/storage.js');await write('state',createState(await(await fetch('./assets/seed.json')).json()));});
  await page.reload();await page.setViewportSize({width:1440,height:900});
  const card=page.locator('.native-widget-card').first();await page.waitForFunction(()=>document.querySelector('.native-widget-card')?.dataset.nativeStatus==='ready');
  assert(await page.locator('.native-widget-card').count()>=8,'默认主页使用原版动态卡片');
  await page.waitForTimeout(2500);
  await page.screenshot({path:'output/playwright/native-home.png'});
  await card.contentFrame().locator('body').click({button:'right'});await page.locator('.context-menu').waitFor();assert(true,'原版卡片右键连接主页编辑菜单');await page.keyboard.press('Escape');
  await page.emulateMedia({colorScheme:'dark'});await page.waitForFunction(()=>document.documentElement.dataset.theme==='dark');
  await card.contentFrame().locator('html.dark').waitFor();assert(true,'系统深色主题同步到已挂载的原版组件');
  await page.getByRole('button',{name:'编辑主页',exact:true}).click();assert(await card.evaluate(n=>getComputedStyle(n).pointerEvents)==='none','编辑模式支持跨原版卡片拖动');await page.getByRole('button',{name:'完成编辑',exact:true}).click();
  await page.emulateMedia({colorScheme:'light'});
  await page.getByRole('button',{name:'备份',exact:true}).click();assert((await page.locator('#drive-status').innerText()).includes('OAuth 客户端 ID'),'Google 未配置时显示准确提示');await page.getByRole('button',{name:'关闭设置',exact:true}).click();
  const native=await page.evaluate(async()=>{const{read}=await import('./src/storage.js');return(await read('state')).groups.flatMap(g=>g.items).filter(i=>i.type==='native').map(i=>i.config.component);});assert(!native.includes('pdfConvert')&&!native.includes('aippt'),'初始主页没有账号和付费组件');
  await page.route('https://base.itab.link/widget/list?**',route=>route.abort());await page.getByRole('button',{name:'添加组件',exact:true}).first().click();await page.getByText(/显示随包提供的免费组件/).waitFor();assert(await page.locator('.original-catalog button').count()===29,'仓库断网仍可添加随包提供的 29 项原版组件');await page.getByRole('button',{name:'关闭',exact:true}).click();await page.unroute('https://base.itab.link/widget/list?**');
  if(page.url().startsWith('chrome-extension:')){const tab=await page.context().newPage();await tab.goto('chrome://newtab/');await tab.getByRole('searchbox',{name:'搜索内容'}).waitFor();assert(true,'真实 Chrome 新标签页覆盖生效');await tab.close();}
  assert(errors.length===0,'主页流程没有未捕获 JavaScript 错误');
  return {checks,errors};
}

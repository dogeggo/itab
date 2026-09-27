async (page) => {
  page.setDefaultTimeout(15000);
  const checks=[]; const assert=(ok,label)=>{if(!ok)throw new Error(label);checks.push(label);};
  const errors=[]; page.on('pageerror',e=>errors.push(e.message));
  await page.reload();
  await page.locator('#topbar').getByRole('button',{name:'添加组件',exact:true}).click();

  await page.locator('.original-catalog button').first().waitFor();
  assert(await page.locator('.original-catalog button').count()===47,'仓库只显示 47 项审核组件');
  for(const name of ['PDF转换大师','AiPPT']) assert(await page.locator('.original-catalog strong').getByText(name,{exact:true}).count()===0,'原版仓库屏蔽 '+name);
  assert(await page.locator('.original-catalog button:enabled').count()===47,'所有审核组件可添加');
  await page.screenshot({path:'output/playwright/original-widget-store.png'});
  await page.getByRole('checkbox',{name:'只看可直接使用',exact:true}).check();
  assert(await page.locator('.original-catalog button').count()===47,'可用项筛选生效');
  await page.getByRole('searchbox',{name:'搜索原版组件'}).fill('2048');
  assert(await page.locator('.original-catalog button').count()===1,'原版仓库可搜索');
  await page.locator('.original-catalog button').click();
  await page.getByRole('button',{name:'2048',exact:true}).last().click();
  const frame=page.frameLocator('.original-widget-frame');
  await frame.locator('.game-container').waitFor();
  assert((await frame.locator('h1').textContent()).includes('2048'),'加载的是可运行的原版 2048 页面');
  await frame.getByText('New Game',{exact:true}).click();
  await frame.locator('.game-container').click();
  for(const key of ['ArrowLeft','ArrowUp','ArrowRight','ArrowDown']) await page.keyboard.press(key);
  await frame.locator('.tile-container .tile').nth(2).waitFor();
  assert(await frame.locator('.tile-container .tile').count()>2,'原版 2048 响应真实键盘操作');
  assert(!(await page.locator('.original-widget-frame').getAttribute('src')).includes('token='),'未向原站传递账号或 Google 令牌');
  await page.screenshot({path:'output/playwright/original-2048.png'});
  await page.getByRole('button',{name:'关闭',exact:true}).click();
  await page.locator('.original-widget-frame').waitFor({state:'detached'});
  assert(true,'关闭弹窗后销毁原版页面');
  await page.reload();
  await page.getByRole('button',{name:'2048',exact:true}).last().waitFor();
  assert(true,'原版入口刷新后保留');
  const roundtrip=await page.evaluate(async()=>{
    const {read}=await import('./src/storage.js');const {makeBackup,parseBackup}=await import('./src/model.js');
    const state=await read('state');const restored=parseBackup(JSON.stringify(makeBackup(state)));
    return restored.groups.flatMap(g=>g.items).some(i=>i.type==='original'&&i.config.component==='2048');
  });
  assert(roundtrip,'原版入口可随完整主页备份往返');
  await page.locator('#topbar').getByRole('button',{name:'添加组件',exact:true}).click();
  await page.locator('.original-catalog button').first().waitFor();
  await page.route('https://base.itab.link/widget/list**',route=>route.fulfill({status:503,body:'unavailable'}));
  await page.getByRole('button',{name:'刷新',exact:true}).click();
  await page.getByText(/显示随包提供的免费组件/).waitFor();assert(await page.locator('.original-catalog button').count()===29,'网络故障展示当前随包清单');await page.unroute('https://base.itab.link/widget/list**');
  await page.getByRole('button',{name:'关闭',exact:true}).click();
  assert(errors.length===0,'原版仓库与 2048 操作无未捕获错误');
  return {checks,errors};
}

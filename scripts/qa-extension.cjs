async (page) => {
  page.setDefaultTimeout(10000);const checks=[];const assert=(ok,label)=>{if(!ok)throw new Error(label);checks.push(label);};
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.reload();
  await page.getByRole('button',{name:'天气',exact:true}).waitFor();
  assert(page.url().startsWith('chrome-extension://'),'从真实扩展 origin 加载主页');
  const info=await page.evaluate(()=>({id:chrome.runtime.id,version:chrome.runtime.getManifest().version,override:chrome.runtime.getManifest().chrome_url_overrides.newtab,oauth:!!chrome.runtime.getManifest().oauth2,identity:typeof chrome.identity.getAuthToken}));
  assert(info.override==='index.html'&&info.identity==='function','MV3 新标签页覆盖和 identity API 正常');
  await page.getByRole('button',{name:'备份',exact:true}).click();
  assert((await page.locator('#drive-status').textContent()).includes('OAuth 客户端 ID'),'未配置 Google 客户端时显示准确提示');
  await page.getByRole('button',{name:'连接 Google',exact:true}).click();
  assert((await page.locator('#drive-status').textContent()).includes('OAuth 客户端 ID'),'未配置时不会伪造授权成功');
  await page.getByRole('button',{name:'关闭设置',exact:true}).click();
  assert(await page.getByRole('button',{name:/PDF|AiPPT|AI免费生成PPT/i}).count()===0,'扩展主页无已移除入口');
  await page.waitForTimeout(1000);
  assert((await page.locator('.widget-weather .weather-temp').textContent())!=='--°','扩展中实时天气请求成功');
  assert(await page.locator('.widget-hotlist .hot-row').count()>0,'扩展中百度官方热榜请求成功');
  await page.screenshot({path:'output/playwright/extension-home.png'});
  const newTab=await page.context().newPage();await newTab.goto('chrome://newtab/');
  await newTab.getByRole('searchbox',{name:'搜索内容'}).waitFor();
  assert((await newTab.title()).includes('iTab Local'),'chrome://newtab 实际进入复刻主页');
  await newTab.close();
  assert(errors.length===0,'扩展流程没有未捕获的 JavaScript 错误');
  return {checks,info,errors};
}

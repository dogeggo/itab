async page => {
  const checks = [], errors = [];
  const assert = (value, message) => { if (!value) throw Error(message); checks.push(message); };
  const onError = error => errors.push(error.message);
  page.on('pageerror', onError);
  page.setDefaultTimeout(15000);
  const endpoint = '**/yiyan/random?lang=cn';
  const saved = await page.evaluate(async () => {
    const {read, flush} = await import('./src/storage.js');
    await flush();
    return {state: await read('state'), cache: await read('home-yiyan')};
  });
  const text = () => page.locator('#quote .yiyan-text');
  const refresh = () => text().click({button: 'right'});
  const waitQuote = expected => page.waitForFunction(value => document.querySelector('#quote .yiyan-text')?.textContent.includes(value), expected);
  const cached = () => page.evaluate(async () => (await import('./src/storage.js')).read('home-yiyan'));
  let requestCount = 0;
  let mode = 'success';
  let next = {hitokoto: '官方组件验收：日升月落 & 山海相逢？', from: '一言验收'};
  const route = async route => {
    requestCount++;
    if (mode === 'offline') return route.abort('internetdisconnected');
    return route.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify(mode === 'invalid' ? {code: 200, data: {}} : {code: 200, data: next})});
  };
  try {
    await page.evaluate(async () => {
      const {read, write} = await import('./src/storage.js');
      const state = await read('state');
      state.settings.layout.quote = true;
      await write('state', state);
    });
    await page.reload();
    await page.setViewportSize({width: 1440, height: 900});
    await text().waitFor();
    const responsePromise = page.waitForResponse(response => response.url().includes('/yiyan/random?lang=cn'));
    await refresh();
    const response = await responsePromise;
    const payload = await response.json();
    await waitQuote(payload.data.hitokoto);
    assert(response.ok() && payload.code === 200, '官方随机一言接口实际返回成功，页面显示对应内容');
    assert(await page.locator('#popover-root .context-menu').count() === 0, '右键一言切换内容，不弹出主页右键菜单');
    await text().hover();
    assert(await page.locator('#quote .app-yiyan-btn, #quote [title="复制"], #quote [title="切换"], #quote [title="搜索"]').count() === 0, '悬停一言也不会出现刷新、复制和搜索按钮');
    assert(await page.locator('#quote .yiyan-from').innerText() === payload.data.from, '官方返回的出处正常显示');
    await page.locator('#quote').screenshot({path: 'output/playwright/home-yiyan-official.png'});
    await page.screenshot({path: 'output/playwright/home-yiyan-home.png'});
    await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
    await text().click();
    await page.getByText('已复制到剪切板', {exact: true}).waitFor();
    assert(await page.evaluate(() => navigator.clipboard.readText()) === `${payload.data.hitokoto} --${payload.data.from}`, '左键复制实际写入句子与出处');

    await page.route(endpoint, route);
    await refresh();
    await waitQuote(next.hitokoto);
    assert(requestCount === 1, '移除按钮后仍能右键请求新一言');
    await page.waitForFunction(async value => (await (await import('./src/storage.js')).read('home-yiyan'))?.value.hitokoto === value, next.hitokoto);
    assert((await cached()).expiresAt > Date.now() + 590000, '原版十分钟缓存写入当前本地数据库');
    await page.reload();
    await waitQuote(next.hitokoto);
    assert(requestCount === 1, '刷新页面命中缓存，没有重复请求');
    await text().evaluate(el => { el.dataset.qaInstance = 'retained'; });
    await page.getByRole('button', {name: '编程', exact: true}).click();
    assert(await text().getAttribute('data-qa-instance') === 'retained' && requestCount === 1, '切换分组保留组件实例与当前句子');

    await page.getByRole('button', {name: '主页设置', exact: true}).click();
    await page.getByRole('button', {name: '布局', exact: true}).click();
    const panel = page.frameLocator('#appearance-frame');
    await panel.locator('.el-switch').click();
    await page.locator('#quote').waitFor({state: 'hidden'});
    assert(await page.locator('#quote .app-yiyan').count() === 0, '关闭底部一言设置后卸载原版组件');
    await panel.locator('.el-switch').click();
    await waitQuote(next.hitokoto);
    assert(requestCount === 1 && await page.locator('#quote .app-yiyan').count() === 1, '重新开启仅挂载一个组件并复用缓存');
    await page.getByRole('button', {name: '关闭设置', exact: true}).click();
    await page.getByRole('button', {name: '切换到极简模式', exact: true}).click();
    assert(await text().isVisible(), '极简布局仍显示官方一言');
    await page.getByRole('button', {name: '切换到组件模式', exact: true}).click();
    assert(await text().isVisible(), '组件布局仍显示官方一言');

    mode = 'offline';
    await refresh();
    await page.locator('#toasts .error').last().waitFor();
    assert((await text().innerText()).includes(next.hitokoto), '网络失败保留当前句子');
    const expire = async () => page.evaluate(async () => {
      const {read, write} = await import('./src/storage.js');
      const cache = await read('home-yiyan'); cache.expiresAt = 1;
      await write('home-yiyan', cache);
    });
    await expire();
    await page.reload();
    await page.locator('#toasts .error').last().waitFor();
    assert((await text().innerText()).includes(next.hitokoto) && (await cached()).expiresAt === 1, '离线重载展示上次内容，失败请求不延长缓存');
    mode = 'invalid';
    await refresh();
    await page.getByText('一言服务未返回有效内容，请稍后重试', {exact: true}).waitFor();
    assert((await text().innerText()).includes(next.hitokoto), '无效接口数据不会覆盖上次有效内容');
    mode = 'success';
    next = {hitokoto: '网络恢复后的一言', from: '恢复验收'};
    await refresh();
    await waitQuote(next.hitokoto);
    assert((await text().innerText()).includes(next.hitokoto), '网络恢复后可以继续右键切换');

    await page.setViewportSize({width: 390, height: 844});
    await text().hover();
    assert(await page.locator('#quote').evaluate(el => el.scrollWidth <= el.clientWidth), '390px 宽度下底部一言无横向溢出');
    await page.locator('#quote').screenshot({path: 'output/playwright/home-yiyan-mobile.png'});
    assert(errors.length === 0, '一言加载、交互及失败恢复无未捕获异常');
    return {checks, errors};
  } catch (error) {
    return {checks, errors, failure: error.message};
  } finally {
    await page.unroute(endpoint, route);
    await page.evaluate(async saved => {
      const {write, flush} = await import('./src/storage.js');
      await flush();
      await write('state', saved.state);
      await write('home-yiyan', saved.cache);
    }, saved);
    await page.setViewportSize({width: 1440, height: 900});
    await page.reload();
    page.off('pageerror', onError);
  }
}

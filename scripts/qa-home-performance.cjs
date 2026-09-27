// 仅在独立测试 profile 运行：会重置该 profile 的主页数据。
async page => {
  const checks = [], errors = [], navigations = [];
  const assert = (ok, label) => { if (!ok) throw Error(label); checks.push(label); };
  const onError = error => errors.push(error.message);
  const onNavigation = frame => {
    if (frame.url().includes('/original/host.html?') && frame.url().includes('mode=card'))
      navigations.push(frame.url());
  };
  page.setDefaultTimeout(15000);
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.evaluate(async () => {
    const { createState } = await import('./src/model.js');
    const { write } = await import('./src/storage.js');
    const state = createState(await (await fetch('./assets/seed.json')).json());
    state.nativeData.stores.notes = { items: [{ id: 'perf-note', title: '编辑切换后保留', content: '<p>测试正文</p>', ct: 1, ut: 1, fixed: false }] };
    await write('state', state);
  });
  await page.reload();
  await page.waitForFunction(() => document.querySelectorAll('.native-widget-card[data-native-status="ready"]').length === 9);
  page.on('pageerror', onError);
  page.on('framenavigated', onNavigation);
  try {
    await page.evaluate(() => {
      window.__perfCards = [...document.querySelectorAll('.native-widget-card')].map(frame => ({
        frame, document: frame.contentDocument, window: frame.contentWindow,
      }));
      window.__perfCounters = [];
      for (const frame of document.querySelectorAll('.native-widget-card')) {
        const child = frame.contentWindow, counter = { label: frame.title, raf: 0, timers: 0 };
        window.__perfCounters.push(counter);
        const raf = child.requestAnimationFrame.bind(child), timeout = child.setTimeout.bind(child);
        child.requestAnimationFrame = callback => raf(time => { counter.raf++; callback(time); });
        child.setTimeout = (callback, delay, ...args) => timeout(typeof callback === 'function'
          ? (...values) => { counter.timers++; return callback(...values); } : callback, delay, ...args);
      }
    });
    await page.waitForTimeout(5000);
    const idle = await page.evaluate(() => window.__perfCounters);
    const dateCards = idle.filter(row => ['日历原版卡片', '倒数日原版卡片', '电影日历原版卡片', '下班倒计时原版卡片'].includes(row.label));
    assert(dateCards.length === 4 && dateCards.every(row => row.raf <= 2 && row.timers >= 4 && row.timers <= 7), '4 个日期组件在 5 秒内各约 5 次更新，无持续逐帧检查');
    await page.getByRole('searchbox', { name: '搜索内容' }).fill('切换编辑时保留输入');
    const retained = () => page.evaluate(() => window.__perfCards.every(entry =>
      entry.frame.isConnected && entry.frame.contentDocument === entry.document && entry.frame.contentWindow === entry.window));
    for (let pass = 0; pass < 3; pass++) {
      await page.getByRole('button', { name: '编辑主页', exact: true }).click();
      assert(await retained(), `第 ${pass + 1} 次进入编辑保留全部 9 个组件实例`);
      assert(await page.locator('#grid .native-widget-card').evaluateAll(frames => frames.every(frame => getComputedStyle(frame).pointerEvents === 'none')), '编辑时仍可跨组件拖动');
      await page.getByRole('button', { name: '完成编辑', exact: true }).click();
      assert(await retained(), `第 ${pass + 1} 次退出编辑保留全部 9 个组件实例`);
      assert(await page.locator('#grid .native-widget-card').evaluateAll(frames => frames.every(frame => getComputedStyle(frame).pointerEvents !== 'none')), '退出编辑恢复组件交互');
    }
    assert(await page.getByRole('searchbox', { name: '搜索内容' }).inputValue() === '切换编辑时保留输入', '搜索框内容保留');
    const notes = page.locator('iframe[title="备忘录原版卡片"]').contentFrame();
    await notes.getByText('编辑切换后保留', { exact: true }).waitFor();
    assert(true, '便签内容保留');
    await page.locator('#grid .native-widget-card').first().contentFrame().locator('body').click({ button: 'right' });
    await page.locator('.context-menu').waitFor();
    assert(true, '退出编辑后卡片右键菜单仍可用');
    // 右键来自 iframe；点击主页搜索框关闭菜单，避免把 Escape 发给子页面。
    await page.getByRole('searchbox', { name: '搜索内容' }).click();
    await page.locator('.context-menu').waitFor({ state: 'hidden' });
    assert(navigations.length === 0, '反复切换编辑模式，原卡片导航次数为零');
    assert(errors.length === 0, '交互期间无未捕获 JavaScript 异常');
    await page.getByRole('searchbox', { name: '搜索内容' }).fill('');
    await page.screenshot({ path: 'output/playwright/perf-after.png' });
    return { checks, errors, originalCardNavigations: navigations.length, seconds: 5, idle };
  } finally {
    page.off('pageerror', onError);
    page.off('framenavigated', onNavigation);
  }
}

// 仅在独立 Playwright 测试 profile 中运行：会替换测试主页数据。
async page => {
  page.setDefaultTimeout(12000);
  const checks = [], errors = [];
  const assert = (ok, label) => { if (!ok) throw new Error(label); checks.push(label); };
  page.on('pageerror', error => errors.push(error.message));
  await page.clock.install({ time: new Date('2026-09-27T10:00:00+08:00') });
  const data = [
    { name: '中秋节', holiday: '2026-09-25', start: '2026-09-25', end: '2026-09-27' },
    { name: '国庆节', holiday: '2026-10-01', start: '2026-10-01', end: '2026-10-07' },
    { name: '元旦', holiday: '2027-01-01' },
    { name: '春节', holiday: '2027-02-06' },
  ];
  let requests = 0;
  await page.route('https://base.itab.link/xiayigejiaqi/list**', route => {
    requests++;
    return route.fulfill({ json: { code: 200, data } });
  });
  const seed = await page.evaluate(async () => {
    const { createState } = await import('./src/model.js');
    const { write } = await import('./src/storage.js');
    const { parseCatalog, newOriginalWidget } = await import('./src/original-widgets.js');
    const holiday = newOriginalWidget(parseCatalog({ code: 200, data: [{ component: 'xiayigejiaqi', name: '下一个假期', insetType: 'iframe' }] })[0]);
    const sizes = ['1x1', '2x1', '1x2', '2x2', '4x2'];
    const state = createState([{ id: 'holiday', name: '假期验收', icon: 'calendar', items: sizes.map(size => ({ ...holiday, id: 'holiday-' + size, size, name: '下一个假期 ' + size })) }]);
    state.settings.wallpaper = { ...state.settings.wallpaper, type: 'color', src: '#254b5f' };
    state.settings.layout.quote = false;
    await write('state', state);
    return { size: holiday.size, type: holiday.type };
  });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.reload();
  assert(seed.size === '4x2' && seed.type === 'original', '新添加的假期使用宽卡片并保留在线详情类型');
  for (const size of ['1x1', '2x1', '1x2', '2x2', '4x2']) {
    const card = page.locator(`[data-native-id="holiday-${size}"]`);
    await card.scrollIntoViewIfNeeded();
    const frame = card.contentFrame();
    await frame.locator('.jia-icon').waitFor();
    await frame.getByText(size === '4x2' ? '中秋节还有' : '中秋节', { exact: true }).waitFor();
    assert(await card.getAttribute('data-native-status') === 'ready', `${size} 已有组件直接挂载原版卡片`);
    const overflow = await frame.locator('.jia-icon').evaluate(root => {
      const bounds = root.getBoundingClientRect();
      return [...root.querySelectorAll('em,b')].filter(el => {
        if (!el.textContent.trim()) return false;
        const box = el.getBoundingClientRect();
        return box.left < bounds.left - 1 || box.top < bounds.top - 1 || box.right > bounds.right + 1 || box.bottom > bounds.bottom + 1;
      }).map(el => el.textContent);
    });
    assert(!overflow.length, `${size} 名称、日期和倒计时没有裁切：${overflow.join(',')}`);
  }
  const wide = page.locator('[data-native-id="holiday-4x2"]');
  await wide.contentFrame().getByText('4', { exact: true }).waitFor();
  assert(true, '进行中的假期显示今，下一假期按原版计算为4天');
  await page.screenshot({ path: 'output/playwright/holiday-sizes.png' });
  await wide.screenshot({ path: 'output/playwright/holiday-after.png' });
  await wide.contentFrame().locator('.jia-icon').click();
  const detail = page.locator('#modal[open] iframe');
  await detail.waitFor();
  assert((await detail.getAttribute('src')).startsWith('https://widget.itab.link/xiayigejiaqi/index.html'), '点击卡片仍打开原版在线假期详情');
  assert((await detail.getAttribute('sandbox')).includes('allow-scripts'), '在线详情保留沙箱');
  await page.getByRole('button', { name: '关闭', exact: true }).click();
  const beforeReload = requests;
  await page.reload();
  await wide.contentFrame().getByText('国庆节', { exact: true }).waitFor();
  assert(requests === beforeReload && requests > 0, '无缓存首次请求，刷新后复用当天缓存');
  await wide.contentFrame().locator('.jia-icon').click({ button: 'right' });
  await page.locator('.context-menu').waitFor();
  assert(true, '卡片右键仍能打开主页编辑菜单');
  await page.keyboard.press('Escape');
  assert(errors.length === 0, '假期主页卡片没有未捕获 JavaScript 错误');
  return { checks, errors, requests };
}

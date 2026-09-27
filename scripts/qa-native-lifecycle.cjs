async page => {
  // 仅在独立测试 profile 运行：为数据同步和实例保留检查准备五张卡片。
  page.setDefaultTimeout(12000);
  const checks = [], errors = [], navigations = [];
  const assert = (value, message) => { if (!value) throw Error(message); checks.push(message); };
  await page.evaluate(async () => {
    const { createState } = await import('./src/model.js');
    const { write } = await import('./src/storage.js');
    const { parseCatalog, newOriginalWidget } = await import('./src/original-widgets.js');
    const rows = parseCatalog({ code: 200, data: await (await fetch('./assets/native-catalog.json')).json() });
    const items = ['calendar', 'notes', 'todo', 'daysMatter', 'tomato']
      .map(component => newOriginalWidget(rows.find(row => row.component === component)));
    const state = createState([{ id: 'lifecycle', name: '卡片验证', icon: 'grid', items }]);
    state.nativeData.stores.notes = { items: [{ id: 'note-1', title: '保留原有便签', content: '<p>原有正文</p>', ct: 1, ut: 1, fixed: false }] };
    state.nativeData.stores.cache = { todo: { value: [{ id: 'todo-1', content: '保留原有待办', done: false, folderId: '', expire: '', ct: 1, ut: 1 }], expiresAt: 0 } };
    await write('state', state);
  });
  await page.reload();
  await page.waitForFunction(() => document.querySelectorAll('.native-widget-card[data-native-status="ready"]').length === 5);
  const ids = await page.evaluate(async () => {
    const { read } = await import('./src/storage.js');
    const state = await read('state');
    window.__qaCards = Array.from(document.querySelectorAll('.native-widget-card'), frame => ({
      frame, document: frame.contentDocument, window: frame.contentWindow,
    }));
    return Object.fromEntries(state.groups[0].items.map(item => [item.config.component, item.id]));
  });
  const onNavigation = frame => {
    const url = frame.url();
    if (url.includes('/original/host.html?') && url.includes('mode=card') &&
        Object.values(ids).some(id => url.includes(`id=${id}&`))) navigations.push(url);
  };
  const onError = error => errors.push(error.message);
  page.on('framenavigated', onNavigation);
  page.on('pageerror', onError);
  const card = component => page.locator(`.native-widget-card[data-native-id="${ids[component]}"]`).contentFrame();
  await card('notes').getByText('保留原有便签', { exact: true }).waitFor();
  await card('todo').getByText('保留原有待办', { exact: true }).waitFor();
  const retained = () => page.evaluate(() => window.__qaCards.every(entry =>
    entry.frame.isConnected && entry.frame.contentDocument === entry.document && entry.frame.contentWindow === entry.window));
  const open = async component => {
    await page.locator(`#grid [data-item-id="${ids[component]}"] .tile`).press('Enter');
    await page.waitForFunction(() => document.querySelector('.native-widget-dialog')?.dataset.nativeStatus === 'ready');
    assert(await retained(), `${component} 打开后全部原卡片实例保留`);
    return page.locator('.native-widget-dialog').contentFrame();
  };
  const close = async () => {
    if (await page.locator('#modal[open]').count())
      await page.locator('.native-widget-dialog').contentFrame().locator('.close-window').first().click();
    await page.locator('#modal[open]').waitFor({ state: 'hidden' });
    assert(await retained(), '关闭后全部原卡片 iframe 和 Document 保留');
  };
  try {
  await open('calendar');
  assert(await card('notes').getByText('保留原有便签', { exact: true }).isVisible(), '打开日历后便签内容没有消失');
  assert(await card('todo').getByText('保留原有待办', { exact: true }).isVisible(), '打开日历后待办内容没有消失');
  await close();

  let dialog = await open('notes');
  await dialog.getByText('保留原有便签', { exact: true }).click();
  await dialog.getByPlaceholder('无标题', { exact: true }).fill('编辑后保留卡片');
  await dialog.locator('.tiptap[contenteditable=true]').fill('关闭立即保存，不刷新其他卡片');
  await close();
  await card('notes').getByText('编辑后保留卡片', { exact: true }).waitFor();
  assert(true, '便签立即关闭后原卡片显示新标题');

  dialog = await open('todo');
  await dialog.getByPlaceholder('添加任务', { exact: true }).fill('弹窗添加后实时同步');
  await dialog.getByPlaceholder('添加任务', { exact: true }).press('Enter');
  await close();
  await card('todo').getByText('弹窗添加后实时同步', { exact: true }).waitFor();
  assert(true, '待办立即关闭后原卡片显示新任务');
  await card('todo').getByRole('button', { name: '完成', exact: true }).first().click();
  dialog = await open('todo');
  const done = await page.frames().find(frame => frame.url().includes('mode=dialog')).evaluate(async () => {
    const { u } = await import('./chunks/todo.js');
    await u().init();
    return u().getPlainList().find(item => item.id === 'todo-1')?.done;
  });
  assert(done, '新弹窗读取到卡片刚完成的待办');
  await close();
  assert(true, '卡片上勾选待办后立即打开弹窗不会丢失完成状态');

  dialog = await open('daysMatter');
  await dialog.getByPlaceholder('自定义事件名称').fill('倒数日同步验证');
  await dialog.getByText('修改完成', { exact: true }).click();
  await close();
  await card('daysMatter').getByText('倒数日同步验证', { exact: true }).waitFor();
  assert(true, '配置变更同步到原倒数日卡片');
  dialog = await open('daysMatter');
  await dialog.getByText('添加', { exact: true }).click();
  await close();
  assert(await page.locator('.native-widget-card').count() === 6, '添加模板仅增加新卡片');

  dialog = await open('tomato');
  await page.frames().find(frame => frame.url().includes('mode=dialog')).waitForFunction(() => window.__nativeTomato?.ready());
  await dialog.getByText('开 始', { exact: true }).click();
  await close();
  await card('tomato').getByRole('button', { name: '暂停', exact: true }).waitFor();
  await open('calendar');
  await close();
  assert(await card('tomato').getByRole('button', { name: '暂停', exact: true }).isVisible(), '番茄钟跨弹窗保持运行');
  assert(navigations.length === 0, '所有开关弹窗操作中原卡片导航次数为零');
  assert(errors.length === 0, '交互期间无未捕获 JavaScript 异常');
  await page.screenshot({ path: 'output/playwright/native-lifecycle-after.png' });
  page.off('framenavigated', onNavigation);
  await page.reload();
  await card('notes').getByText('编辑后保留卡片', { exact: true }).waitFor();
  assert(true, '主动刷新主页后便签编辑仍保留');
  return { checks, errors, originalCardNavigations: navigations.length };
  } catch (error) {
    throw Error(error.message + '；此前已通过：' + checks.join('、'));
  } finally {
    page.off('framenavigated', onNavigation);
    page.off('pageerror', onError);
  }
}

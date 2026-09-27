async page => {
  page.setDefaultTimeout(10000);
  const checks = [], errors = [];
  const assert = (ok, label) => { if (!ok) throw Error(label); checks.push(label); };
  page.on('pageerror', error => errors.push(error.message));
  const origin = 'http://127.0.0.1:4173';
  const avatar = page.locator('.sidebar-profile .avatar img');
  assert(await avatar.count() === 0, '网页预览显示默认头像');
  await page.getByRole('button', { name: '备份', exact: true }).click();
  assert((await page.locator('#drive-status').innerText()).includes('Chrome'), '默认头像仍打开备份页');
  await page.getByRole('button', { name: '关闭设置', exact: true }).click();

  const context = page.context();
  await context.addInitScript(() => {
    window.__avatarQA = { connected: true, auth: [], signIn: null };
    window.chrome = window.chrome || {};
    window.chrome.runtime = { getManifest: () => ({ oauth2: { client_id: 'test.apps.googleusercontent.com' } }) };
    window.chrome.storage = { local: {
      async get(key) { return { [key]: JSON.parse(localStorage.getItem('qa-' + key) || 'null') }; },
      async set(values) { for (const [key, value] of Object.entries(values)) localStorage.setItem('qa-' + key, JSON.stringify(value)); },
    } };
    window.chrome.identity = {
      async getAuthToken(args) {
        window.__avatarQA.auth.push(args);
        if (args.interactive) window.__avatarQA.connected = true;
        if (!window.__avatarQA.connected) throw Error('未授权');
        return { token: 'qa-token' };
      },
      async clearAllCachedAuthTokens() { window.__avatarQA.connected = false; },
      async removeCachedAuthToken() {},
      onSignInChanged: { addListener(fn) { window.__avatarQA.signIn = fn; } },
    };
  });
  let profile = { displayName: 'Google 测试账号', photoLink: 'https://lh3.googleusercontent.com/qa-avatar' };
  let failProfile = false, failFiles = false, delayProfile = false, releaseProfile, markProfileHeld;
  const profileHeld = new Promise(resolve => { markProfileHeld = resolve; });
  await context.route('https://www.googleapis.com/drive/v3/**', async route => {
    if (route.request().url().includes('/about?')) {
      if (delayProfile) await new Promise(resolve => { releaseProfile = resolve; markProfileHeld(); });
      if (failProfile) return route.fulfill({ status: 503, contentType: 'application/json', body: JSON.stringify({ error: { message: '临时不可用' } }) });
      return route.fulfill({ json: { user: profile } });
    }
    if (failFiles) return route.fulfill({ status: 503, json: { error: { message: '备份服务暂不可用' } } });
    return route.fulfill({ json: { files: [{ id: 'qa-backup', createdTime: '2026-09-27T12:00:00Z', size: '1024' }] } });
  });
  await context.route('https://lh3.googleusercontent.com/qa-*', route => {
    if (route.request().url().endsWith('qa-broken')) return route.abort();
    return route.fulfill({ contentType: 'image/svg+xml', body: '<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect width="96" height="96" fill="#4285f4"/><circle cx="48" cy="34" r="17" fill="#fff"/><ellipse cx="48" cy="85" rx="34" ry="27" fill="#fff"/></svg>' });
  });
  const loaded = target => target.waitForFunction(() => {
    const img = document.querySelector('.sidebar-profile .avatar img');
    return img?.complete && img.naturalWidth > 0 && !img.hidden;
  });
  await page.reload();
  await loaded(page);
  assert(await page.locator('.sidebar-profile').getAttribute('title') === 'Google 测试账号 · Google 备份', '显示授权账号头像与名称');
  assert(await page.evaluate(() => window.__avatarQA.auth.every(args => !args.interactive)), '页面初始化不会弹出 Google 授权');
  const geometry = await avatar.evaluate(img => {
    const parent = getComputedStyle(img.parentElement);
    const style = getComputedStyle(img);
    return { width: img.clientWidth, height: img.clientHeight, radius: parent.borderRadius, overflow: parent.overflow, fit: style.objectFit };
  });
  assert(geometry.width === 30 && geometry.height === 30 && geometry.radius === '50%' && geometry.overflow === 'hidden' && geometry.fit === 'cover', '头像以 30px 圆形裁剪显示');
  await page.getByRole('button', { name: '编程', exact: true }).click();
  await loaded(page);
  assert(await avatar.count() === 1, '切换分组重绘后仍显示账号头像');
  await page.getByRole('button', { name: '主页', exact: true }).click();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.screenshot({ path: 'output/playwright/google-avatar-home.png' });
  await page.locator('.sidebar-profile').screenshot({ path: 'output/playwright/google-avatar-detail.png' });
  await page.reload();
  await loaded(page);
  assert(true, '刷新页面后静默恢复账号头像');

  const second = await context.newPage();
  await second.goto(origin);
  await loaded(second);
  await page.getByRole('button', { name: '备份', exact: true }).click();
  await page.getByRole('button', { name: '断开本机授权', exact: true }).waitFor();
  assert(await page.locator('[data-drive-restore="qa-backup"]').isVisible(), '刷新后自动连接并显示已有云备份，无需点击连接');
  assert(await page.evaluate(() => window.__avatarQA.auth.every(args => !args.interactive)), '自动连接和备份列表加载始终使用静默授权');
  await loaded(page);
  await page.getByRole('button', { name: '断开本机授权', exact: true }).click();
  await page.waitForFunction(() => !document.querySelector('.sidebar-profile .avatar img'));
  await second.waitForFunction(() => !document.querySelector('.sidebar-profile .avatar img'));
  assert(true, '断开授权后当前页面和其他标签页同步恢复默认头像');
  await page.reload();
  await page.getByRole('button', { name: '备份', exact: true }).click();
  await page.waitForFunction(() => document.querySelector('#drive-status')?.textContent.includes('已断开'));
  assert(await page.evaluate(() => window.__avatarQA.auth.length === 0), '主动断开后刷新不会重新申请令牌');
  profile = { displayName: '新账号', photoLink: 'https://lh3.googleusercontent.com/qa-new' };
  await page.getByRole('button', { name: '连接 Google', exact: true }).click();
  await loaded(page);
  await second.waitForFunction(() => document.querySelector('.sidebar-profile').title === '新账号 · Google 备份');
  assert(await page.locator('.sidebar-profile').getAttribute('title') === '新账号 · Google 备份', '重新连接后各标签页更新为新账号');
  await second.close();

  delayProfile = true;
  await page.getByRole('button', { name: '刷新备份列表', exact: true }).click();
  await page.getByRole('button', { name: '断开本机授权', exact: true }).waitFor();
  await profileHeld;
  await page.getByRole('button', { name: '断开本机授权', exact: true }).click();
  await page.waitForFunction(() => !document.querySelector('.sidebar-profile .avatar img'));
  const responseDone = page.waitForResponse(response => response.url().includes('/about?'));
  delayProfile = false;
  releaseProfile();
  await responseDone;
  await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 100)));
  assert(await avatar.count() === 0, '断开后迟到的请求不会恢复旧头像');

  profile.photoLink = 'https://lh3.googleusercontent.com/qa-broken';
  await page.getByRole('button', { name: '连接 Google', exact: true }).click();
  await page.waitForFunction(() => document.querySelector('.sidebar-profile .avatar img')?.hidden);
  assert(await page.locator('.sidebar-profile .avatar svg').isVisible(), '头像图片失败时显示默认图标');
  failProfile = true;
  await page.getByRole('button', { name: '刷新备份列表', exact: true }).click();
  await page.waitForFunction(() => !document.querySelector('.sidebar-profile .avatar img'));
  assert(await page.getByRole('button', { name: '断开本机授权', exact: true }).isVisible(), '头像接口失败不会影响备份连接');
  await page.getByRole('button', { name: '关闭设置', exact: true }).click();
  await page.evaluate(() => { window.__avatarQA.connected = false; window.__avatarQA.signIn('account', false); });
  assert(await avatar.count() === 0, '未授权状态保留默认头像');
  failFiles = true;
  await page.reload();
  await page.getByRole('button', { name: '备份', exact: true }).click();
  await page.waitForFunction(() => document.querySelector('#drive-status')?.textContent.includes('备份服务暂不可用'));
  assert(await page.getByRole('button', { name: '连接 Google', exact: true }).isEnabled(), '自动连接失败保留手动重试入口');
  assert(await page.getByRole('button', { name: '导出本地数据', exact: true }).isEnabled(), '云端不可用时本地备份仍可使用');
  assert(await page.evaluate(() => window.__avatarQA.auth.every(args => !args.interactive)), '自动连接失败不会弹出登录窗口');
  assert(errors.length === 0, '头像流程没有未捕获 JavaScript 错误');
  return { checks, errors, mockedGoogle: true };
}

async (page) => {
  await page.addInitScript(() => {
    window.chrome ??= {};
    window.chrome.runtime ??= {
      onMessage: { addListener() {}, removeListener() {} },
      sendMessage: async (...args) => { if (typeof args.at(-1) === 'function') args.at(-1)({}); },
      getManifest: () => ({ version: '2.3.13' }),
      getURL: p => '/' + p
    };
  });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.reload();
  await page.waitForTimeout(2500);
  console.log((await page.locator('body').innerText()).slice(0,7000));
  await page.screenshot({ path: 'itab-replica/output/playwright/original-home.png' });
}

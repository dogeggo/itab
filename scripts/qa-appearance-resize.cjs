async page => {
  page.setDefaultTimeout(15000);
  const checks = [];
  const assert = (ok, label) => {
    if (!ok) throw new Error(label);
    checks.push(label);
  };
  // Chrome 的 ResizeObserver 循环通知以 window.error 上报，pageerror 会漏掉它。
  await page.addInitScript(() => {
    if (window === window.top) window.__appearanceResizeErrors = [];
    if (location.pathname.endsWith('/original/appearance/host.html')) {
      window.addEventListener('error', event => {
        parent.__appearanceResizeErrors.push({
          panel: location.search,
          message: event.message,
        });
      });
    }
  });
  const settle = () => page.evaluate(async () => {
    const heights = [];
    for (let i = 0; i < 12; i++) {
      await new Promise(requestAnimationFrame);
      heights.push(document.querySelector('#appearance-frame').getBoundingClientRect().height);
    }
    return heights;
  });
  const settings = async tab => {
    await page.locator(`#settings [data-tab="${tab}"]`).click();
    const frame = page.frameLocator('#appearance-frame');
    await frame.locator('html[data-ready="true"]').waitFor();
    await frame.locator('body').evaluate(() => document.fonts.ready);
    const heights = await settle();
    assert(new Set(heights.slice(-6)).size === 1, `${tab} 面板高度稳定`);
    return frame;
  };
  try {
    await page.reload();
    await page.getByRole('button', { name: '设置', exact: true }).first().click();
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 900 });
      for (const tab of ['open', 'search', 'icon', 'time', 'layout', 'sidebar', 'wallpaper']) {
        const frame = await settings(tab);
        assert(await frame.locator('#appearance-error').isHidden(), `${width}px ${tab} 正常加载`);
        if (['search', 'sidebar', 'wallpaper'].includes(tab)) {
          const fits = await page.locator('#appearance-frame').evaluate(frame => {
            const contentHeight = frame.contentDocument.querySelector('#appearance-app').scrollHeight;
            return frame.style.height === `${Math.max(180, Math.min(1500, contentHeight))}px`;
          });
          assert(fits, `${width}px ${tab} 高度与内容一致`);
        }
      }
      const frame = page.frameLocator('#appearance-frame');
      for (const theme of ['深色', '浅色']) {
        await frame.getByText(theme, { exact: true }).click();
        await settle();
      }
      const mask = frame.locator('.d-slider').filter({ hasText: '遮罩浓度' }).getByRole('spinbutton');
      const originalMask = await mask.inputValue();
      await mask.fill('30');
      await mask.press('Tab');
      await settle();
      assert(await mask.inputValue() === '30', `${width}px 壁纸滑块正常更新`);
      await mask.fill(originalMask);
      await mask.press('Tab');
      const originalHeight = await page.locator('#appearance-frame').evaluate(el => el.style.height);
      await frame.locator('#appearance-app').evaluate(el => {
        const extra = document.createElement('div');
        extra.id = 'resize-regression-content';
        extra.style.height = '120px';
        el.append(extra);
      });
      await settle();
      assert(await page.locator('#appearance-frame').evaluate(el => el.style.height) === `${parseFloat(originalHeight) + 120}px`, `${width}px 动态内容增高正常`);
      await frame.locator('#resize-regression-content').evaluate(el => el.remove());
      await settle();
      assert(await page.locator('#appearance-frame').evaluate(el => el.style.height) === originalHeight, `${width}px 动态内容缩短正常`);
      await page.getByRole('button', { name: '关闭设置', exact: true }).click();
      await page.getByRole('button', { name: '设置', exact: true }).first().click();
      await settings('wallpaper');
    }
    const errors = await page.evaluate(() => window.__appearanceResizeErrors);
    assert(errors.length === 0, '全部设置面板没有 window.error 或 ResizeObserver 循环通知');
    return { checks, errors };
  } catch (error) {
    return {
      checks,
      errors: await page.evaluate(() => window.__appearanceResizeErrors),
      failure: error.message,
    };
  }
}

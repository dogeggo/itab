async (page) => {
  page.setDefaultTimeout(10000);const checks=[];const assert=(ok,label)=>{if(!ok)throw new Error(label);checks.push(label);};
  await page.getByRole('button',{name:'主页设置',exact:true}).click();
  await page.locator('[data-tab="backup"]').last().click();
  await page.locator('#backup-file').setInputFiles('output/playwright/backup-roundtrip.json');
  await page.getByRole('button',{name:'确认',exact:true}).click();
  await page.getByText('备份恢复成功',{exact:true}).waitFor();
  assert(await page.locator('html').getAttribute('data-theme')==='dark'&&(await page.locator('#wallpaper').getAttribute('style')).includes('data:image/png'),'导入恢复主题和上传壁纸');
  await page.locator('.snapshot-row').filter({hasText:'恢复前自动备份'}).first().waitFor();
  assert(await page.locator('.snapshot-row').filter({hasText:'恢复前自动备份'}).count()>=1,'恢复前自动保留快照');
  await page.getByRole('button',{name:'＋ 创建本机快照',exact:true}).click();
  await page.locator('.snapshot-row').filter({hasText:'手动备份'}).first().waitFor();
  assert(true,'手动快照写入本机历史');
  await page.locator('#backup-file').setInputFiles('output/playwright/invalid.json');
  await page.getByText('这不是 iTab Local 备份文件',{exact:true}).waitFor();
  assert(await page.locator('html').getAttribute('data-theme')==='dark','非法备份被拒绝且不改变主页');
  await page.getByRole('button',{name:'关闭设置',exact:true}).click();
  await page.reload();
  await page.getByRole('button',{name:'待办事项',exact:true}).waitFor();
  assert(await page.locator('.widget-todo input[type=checkbox]').isChecked(),'待办完成状态随备份保留');
  assert((await page.locator('.notes-preview').textContent()).includes('自动保存测试'),'备忘录随备份保留');
  return {checks};
}

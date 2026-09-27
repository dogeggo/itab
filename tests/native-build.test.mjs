import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {nativeComponents} from '../original/registry.js';

test('随包运行代码不包含账号、云同步、旧数据库和被屏蔽组件',()=>{
  const files=fs.readdirSync(new URL('../original/chunks/',import.meta.url));
  const forbidden=/pdfConvert|aippt|create_login|notesLastSyncSince|reconcileGuestLogin|importLegacyNotes|localforage|Dexie|nativeForage|nativeNotesTable|noSync|SAVE_CONFIG|notesImageUpload|userCollect|localStorage|sessionStorage|indexedDB|chrome\.storage/i;
  for(const file of files){
    assert.doesNotMatch(file,forbidden);
    const source=fs.readFileSync(new URL('../original/chunks/'+file,import.meta.url),'utf8');
    assert.ok(!forbidden.test(source),file+': '+source.match(forbidden)?.[0]);
  }
  const host=fs.readFileSync(new URL('../original/host.js',import.meta.url),'utf8');
  assert.doesNotMatch(host,/localStorage|chrome\s*\?\?=|runtime\s*\?\?=|new Event\("storage"\)/);
  assert.equal(nativeComponents.size,29);
  for(const file of ['widgets.js','hotlist.js'])assert.equal(fs.existsSync(new URL('../src/'+file,import.meta.url)),false);
  assert.equal(fs.existsSync(new URL('../original/storage-adapter.js',import.meta.url)),false);
});

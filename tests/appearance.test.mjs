import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import {
  createState,
  validateState,
  makeBackup,
  parseBackup,
} from "../src/model.js";
import { toAppearance, applyAppearance } from "../src/appearance-model.js";
const fresh = () =>
  createState([{ id: "home", name: "主页", icon: "home", items: [] }]);
test("原版字体、百分比宽度和侧栏选项可随当前 JSON 备份往返", () => {
  const state = fresh(),
    a = toAppearance(state.settings);
  Object.assign(a.icon, {
    unit: "%",
    width: 82,
    iconX: 0,
    iconY: 100,
    nameColor: "#fff",
  });
  Object.assign(a.time, {
    font: "TrainOne",
    fontWeight: "600",
    month: "none",
    week: "inline",
  });
  Object.assign(a.sidebar, { width: 120, lastGroup: false, mouseGroup: false });
  for (const panel of ["icon", "time", "sidebar"])
    applyAppearance(state.settings, panel, a);
  validateState(state);
  const restored = parseBackup(JSON.stringify(makeBackup(state)));
  assert.equal(restored.settings.icon.widthPercent, 82);
  assert.equal(restored.settings.icon.nameColor, "#ffffff");
  assert.equal(restored.settings.time.font, "TrainOne");
  assert.equal(restored.settings.time.month, false);
  assert.equal(restored.settings.time.bold, true);
  assert.equal(restored.settings.sidebar.mouseGroup, false);
  assert.deepEqual(
    toAppearance(restored.settings),
    toAppearance(state.settings),
  );
});
test("原版 UI 的新设置仍受备份校验限制", () => {
  for (const change of [
    (s) => (s.icon.widthUnit = "em"),
    (s) => (s.icon.widthPercent = 1000),
    (s) => (s.time.font = "missing-font"),
    (s) => (s.sidebar.mouseGroup = "true"),
  ]) {
    const state = fresh();
    change(state.settings);
    assert.throws(() => validateState(state));
  }
});
test("原版设置运行包没有带回账号、云同步和浏览器模拟层", () => {
  const source = fs.readFileSync(
    new URL("../original/appearance/components.js", import.meta.url),
    "utf8",
  );
  assert.doesNotMatch(
    source,
    /SAVE_CONFIG|create_login|localforage|Dexie|ossUpload|chrome\.storage|localStorage|sessionStorage/,
  );
  const fonts = fs.readFileSync(
    new URL("../original/appearance/fonts.css", import.meta.url),
    "utf8",
  );
  for (const [, file] of fonts.matchAll(/url\("([^\"]+)"\)/g))
    assert.ok(
      fs.existsSync(new URL("../original/appearance/" + file, import.meta.url)),
      file,
    );
});

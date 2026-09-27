import test from "node:test";
import assert from "node:assert/strict";
import { parseBaiduBoard } from "../src/hotlist.js";
test("官方榜单解析不把固定示例当成实时结果", () => {
  const html =
    "<!--s-data:" +
    JSON.stringify({
      data: {
        cards: [
          {
            component: "hotList",
            content: [
              { word: "置顶", isTop: true },
              { word: "测试新闻 & 中文", hotScore: "100000" },
            ],
          },
        ],
      },
    }) +
    "-->";
  const parsed = parseBaiduBoard(html);
  assert.equal(parsed.length, 1);
  assert.equal(parsed[0].score, 100000);
  assert.equal(
    new URL(parsed[0].url).searchParams.get("wd"),
    "测试新闻 & 中文",
  );
  assert.throws(() => parseBaiduBoard("<html>changed</html>"));
});

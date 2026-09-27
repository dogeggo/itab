// 读取百度官方公开榜单的内嵌 JSON。页面结构变化时返回错误，由 UI 提供官方入口。
export function parseBaiduBoard(html) {
  const match = html.match(/<!--s-data:([\s\S]*?)-->/);
  if (!match) throw new Error("榜单页面结构已更新");
  const data = JSON.parse(match[1]);
  const items = data.data?.cards?.find(
    (c) => c.component === "hotList",
  )?.content;
  if (!Array.isArray(items)) throw new Error("榜单数据不可用");
  return items
    .filter((i) => !i.isTop && typeof i.word === "string")
    .slice(0, 20)
    .map((i) => ({
      title: i.word,
      url: "https://www.baidu.com/s?wd=" + encodeURIComponent(i.word),
      score: Number(i.hotScore) || 0,
    }));
}
export async function fetchBaiduBoard() {
  const r = await fetch("https://top.baidu.com/board?tab=realtime", {
    signal: AbortSignal.timeout(12000),
    credentials: "omit",
  });
  if (!r.ok) throw new Error("榜单暂不可用");
  return parseBaiduBoard(await r.text());
}

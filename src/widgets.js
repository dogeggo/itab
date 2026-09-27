import { esc, icon, modal, toast, button, closeModal } from "./ui.js";
import { daysBetween, calculate, uid, safeURL } from "./model.js";
import { read, write } from "./storage.js";
import { fetchBaiduBoard } from "./hotlist.js";
import { openOriginalWidget } from "./widget-store.js";
export function lunarDate(date = new Date()) {
  try {
    return new Intl.DateTimeFormat("zh-CN-u-ca-chinese", {
      month: "long",
      day: "numeric",
    })
      .format(date)
      .replace(/(\d+)日?$/, (_, d) => {
        const n = Number(d);
        const digits = [
          "",
          "一",
          "二",
          "三",
          "四",
          "五",
          "六",
          "七",
          "八",
          "九",
        ];
        return n <= 10
          ? "初" + (n === 10 ? "十" : digits[n])
          : n < 20
            ? "十" + digits[n - 10]
            : n === 20
              ? "二十"
              : n < 30
                ? "廿" + digits[n - 20]
                : "三十";
      });
  } catch {
    return "";
  }
}
export function clockParts(config, date = new Date()) {
  let h = date.getHours();
  const suffix = !config.hour24 ? (h < 12 ? " AM" : " PM") : "";
  h = config.hour24 ? h : h % 12 || 12;
  return {
    time: `${String(h).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}${config.sec ? ":" + String(date.getSeconds()).padStart(2, "0") : ""}${suffix}`,
    date: [
      config.month ? `${date.getMonth() + 1}月${date.getDate()}日` : "",
      config.week
        ? [
            "星期日",
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六",
          ][date.getDay()]
        : "",
      config.lunar ? lunarDate(date) : "",
    ]
      .filter(Boolean)
      .join("　"),
  };
}
const widgetData = (state, id) => state.widgetData[id] || {};
function offworkText(item) {
  const now = new Date(),
    weekend = now.getDay() === 0 || now.getDay() === 6;
  const [h, m] = (item.config.time || "18:00").split(":").map(Number);
  const [sh, sm] = (item.config.start || "09:00").split(":").map(Number);
  const end = new Date();
  end.setHours(h, m, 0, 0);
  const start = new Date();
  start.setHours(sh, sm, 0, 0);
  let sec = Math.floor((end - now) / 1000);
  return weekend || sec <= 0 || now < start
    ? "休息时间"
    : `${String(Math.floor(sec / 3600)).padStart(2, "0")}:${String(Math.floor((sec % 3600) / 60)).padStart(2, "0")}:${String(sec % 60).padStart(2, "0")}`;
}
export function widgetHTML(item, state) {
  const d = widgetData(state, item.id),
    now = new Date();
  switch (item.type) {
    case "original":
      return `<div class="original-widget-icon">${item.image ? `<img src="${esc(item.image)}" alt="" draggable="false" referrerpolicy="no-referrer">` : icon("grid", 30)}</div>`;
    case "weather":
      return `<div class="weather-content"><div class="weather-top"><span>${esc(item.config.city || "北京")} ⊙</span>${icon("cloud", 22)}</div><strong class="weather-temp">--°</strong><div class="weather-bottom"><span>正在获取天气…</span><small>Open-Meteo</small></div></div>`;
    case "calendar":
      return `<div class="calendar-header">${now.getFullYear()}年${now.getMonth() + 1}月</div><strong class="calendar-day">${now.getDate()}</strong><div class="calendar-sub">第${Math.floor((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - Date.UTC(now.getFullYear(), 0, 0)) / 86400000)}天 第${Math.floor((now - new Date(now.getFullYear(), 0, 1)) / 86400000 / 7)}周</div><div class="calendar-lunar">${lunarDate(now)} 周${"日一二三四五六"[now.getDay()]}</div>`;
    case "hotlist":
      return `<div class="hotlist-tabs"><button data-action="hot-tab" data-source="baidu" class="${(d.source || "baidu") === "baidu" ? "active" : ""}">百度</button><button data-action="hot-tab" data-source="weibo" class="${d.source === "weibo" ? "active" : ""}">微博</button><button data-action="hot-tab" data-source="douyin" class="${d.source === "douyin" ? "active" : ""}">抖音</button><button data-action="hot-tab" data-source="hn" class="${d.source === "hn" ? "active" : ""}">科技</button></div><div class="hotlist-content">${hotLinks(d.source || "baidu")}</div>`;
    case "days":
      return `<div class="days-title">${esc(item.config.title || "距离目标日还有")}</div><div class="days-number">${Math.abs(daysBetween(item.config.date || "2027-01-01"))}<small>天</small></div><div class="days-date">${esc(item.config.date || "2027-01-01")}${daysBetween(item.config.date || "2027-01-01") < 0 ? " · 已经" : ""}</div>`;
    case "notes":
      return `<div class="notes-header">备忘录</div><div class="notes-preview">${esc(d.text || "点击这里，记录你的灵感。")}</div>`;
    case "todo":
      return `<div class="todo-header">${icon("check", 18)} 待办事项 <small>${(d.todos || []).filter((t) => !t.done).length}</small></div><div class="todo-preview">${
        (d.todos || [])
          .slice(0, 4)
          .map(
            (t) =>
              `<label><input type="checkbox" data-action="todo-toggle" data-todo="${esc(t.id)}" ${t.done ? "checked" : ""}><span class="${t.done ? "done" : ""}">${esc(t.text)}</span></label>`,
          )
          .join("") || '<span class="empty-small">添加一件想完成的小事</span>'
      }</div><button class="todo-add" data-action="widget-open">＋ 添加待办</button>`;
    case "offwork":
      return `<div class="offwork-main"><span class="offwork-title">${offworkText(item)}</span><div class="offwork-stats"><span>周五<b>${(5 - now.getDay() + 7) % 7}</b>天</span><span>下班<b>${esc(item.config.time || "18:00")}</b>每天</span><span>今日<b>${now.getMonth() + 1}/${now.getDate()}</b>慢慢来</span></div></div><div class="offwork-art"><img src="assets/widgets/offwork.png" alt=""></div>`;
    case "movie":
      return `<div class="movie-day">${now.getDate()}<small>${now.getMonth() + 1}月 / 周${"日一二三四五六"[now.getDay()]}</small></div><div class="movie-info"><strong>《${esc(item.config.title || "肖申克的救赎")}》</strong><small>${esc(item.config.year || "1994")} · 我的片单</small><p>${esc(item.config.quote || "希望是美好的，也许是人间至善。")}</p></div>`;
    case "calculator":
      return `<div class="calculator-mini">${icon("calculator", 36)}<strong>${esc(d.result ?? "0")}</strong><span>点击开始计算</span></div>`;
    case "pomodoro": {
      const remaining = d.running
        ? Math.max(0, Math.ceil((d.endAt - Date.now()) / 1000))
        : (d.remaining ?? 25 * 60);
      return `<div class="pomodoro-top">${icon("timer", 20)} 番茄钟</div><strong class="pomodoro-time">${String(Math.floor(remaining / 60)).padStart(2, "0")}:${String(remaining % 60).padStart(2, "0")}</strong><button data-action="pomodoro-toggle">${d.running ? "暂停" : remaining === 0 ? "重新开始" : "开始专注"}</button>`;
    }
    case "water": {
      const cups = d.date === now.toLocaleDateString() ? d.cups || 0 : 0;
      return `<div class="water-top">每天喝 8 杯水</div>${icon("water", 40)}<strong>${cups}<small> / 8 杯</small></strong><button data-action="water-add">喝一杯 ＋</button>`;
    }
    case "wallpaper":
      return icon("image", 32);
    default:
      return icon("grid", 30);
  }
}
const sources = {
  baidu: {
    name: "百度热搜榜",
    url: "https://top.baidu.com/board?tab=realtime",
    desc: "实时热搜 · 打开查看完整榜单",
  },
  weibo: {
    name: "微博热搜榜",
    url: "https://s.weibo.com/top/summary",
    desc: "热门话题 · 打开查看完整榜单",
  },
  douyin: {
    name: "抖音热点榜",
    url: "https://www.douyin.com/hot",
    desc: "正在发生 · 打开查看完整榜单",
  },
};
function hotLinks(source) {
  if (source === "hn") return '<p class="loading-small">正在获取科技热榜…</p>';
  const s = sources[source] || sources.baidu;
  return `<button class="hot-source" data-action="open-url" data-url="${s.url}"><span class="hot-rank">1</span><div><strong>${s.name}</strong><small>${s.desc}</small></div>${icon("external", 15)}</button><p class="hot-source-note">切换「科技」查看实时新闻列表</p>`;
}
const weatherLabels = (code) =>
  code === 0
    ? "晴"
    : code <= 3
      ? "多云"
      : code <= 48
        ? "雾"
        : code <= 67
          ? "雨"
          : code <= 77
            ? "雪"
            : code <= 82
              ? "阵雨"
              : code <= 86
                ? "阵雪"
                : "雷雨";
const inflight = new Map();
export async function hydrateWidgets(state) {
  const items =
    state.groups.find((g) => g.id === state.activeGroup)?.items || [];
  await Promise.allSettled(
    items
      .filter((i) => i.kind === "widget")
      .map(async (item) => {
        const element = document.querySelector(
          `[data-item-id="${CSS.escape(item.id)}"] .tile`,
        );
        if (!element) return;
        if (item.type === "weather") {
          const c = item.config,
            key = `weather:${c.latitude || 39.9},${c.longitude || 116.4}`;
          let cached = await read(key);
          let stale = false;
          try {
            if (!cached || Date.now() - cached.time > 30 * 60 * 1000) {
              if (!inflight.has(key))
                inflight.set(
                  key,
                  fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${Number(c.latitude) || 39.9}&longitude=${Number(c.longitude) || 116.4}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=1`,
                    { signal: AbortSignal.timeout(15000) },
                  )
                    .then(async (r) => {
                      if (!r.ok) throw new Error("天气服务暂不可用");
                      const data = await r.json();
                      if (!data.current) throw new Error("天气数据无效");
                      const result = { time: Date.now(), data };
                      await write(key, result);
                      return result;
                    })
                    .finally(() => inflight.delete(key)),
                );
              cached = await inflight.get(key);
            }
          } catch {
            stale = true;
          }
          if (!element.isConnected) return;
          if (!cached) {
            element.querySelector(".weather-bottom").innerHTML =
              "<span>天气暂不可用</span><small>点击设置城市 / 重试</small>";
            return;
          }
          const w = cached.data;
          element.querySelector(".weather-temp").textContent =
            `${Math.round(w.current.temperature_2m)}°`;
          element.querySelector(".weather-bottom").innerHTML =
            `<span>${weatherLabels(w.current.weather_code)}${stale ? " · 缓存" : ""}</span><small>最高${Math.round(w.daily.temperature_2m_max[0])}° 最低${Math.round(w.daily.temperature_2m_min[0])}°</small>`;
          element.title = `${c.city || "北京"} · ${new Date(cached.time).toLocaleTimeString()} 更新 · Open-Meteo`;
        }
        if (
          item.type === "hotlist" &&
          state.widgetData[item.id]?.source === "hn"
        ) {
          try {
            let cache = await read("hotlist-hn");
            if (!cache || Date.now() - cache.time > 600000) {
              const r = await fetch(
                "https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=5",
                { signal: AbortSignal.timeout(12000) },
              );
              if (!r.ok) throw new Error();
              cache = { time: Date.now(), data: (await r.json()).hits };
              await write("hotlist-hn", cache);
            }
            if (!element.isConnected) return;
            element.querySelector(".hotlist-content").innerHTML = cache.data
              .map(
                (v, n) =>
                  `<button class="hot-row" data-action="open-url" data-url="${esc(safeURL(v.url) || `https://news.ycombinator.com/item?id=${encodeURIComponent(v.objectID)}`)}"><b>${n + 1}</b><span>${esc(v.title)}</span><small>${v.points || 0}</small></button>`,
              )
              .join("");
          } catch {
            if (element.isConnected)
              element.querySelector(".hotlist-content").innerHTML =
                '<p class="empty-small">暂时无法获取，稍后重新切换即可重试。</p>';
          }
        }
        if (
          item.type === "hotlist" &&
          (!state.widgetData[item.id]?.source ||
            state.widgetData[item.id]?.source === "baidu")
        ) {
          try {
            let cache = await read("hotlist-baidu");
            if (!cache || Date.now() - cache.time > 600000) {
              let data;
              if (globalThis.chrome?.runtime?.id)
                data = await fetchBaiduBoard();
              else {
                const r = await fetch("/api/hotlist/baidu", {
                  signal: AbortSignal.timeout(15000),
                });
                if (!r.ok) throw new Error();
                data = await r.json();
              }
              cache = { time: Date.now(), data };
              await write("hotlist-baidu", cache);
            }
            if (!element.isConnected) return;
            element.querySelector(".hotlist-content").innerHTML = cache.data
              .slice(0, 5)
              .map(
                (v, n) =>
                  `<button class="hot-row" data-action="open-url" data-url="${esc(safeURL(v.url))}"><b>${n + 1}</b><span>${esc(v.title)}</span><small>${(v.score / 10000).toFixed(1)}万</small></button>`,
              )
              .join("");
          } catch {
            /* 保留官方榜单入口，不展示伪造或失效的数据。 */
          }
        }
      }),
  );
}
export function tickWidgets(state, save) {
  for (const g of state.groups)
    for (const item of g.items) {
      if (item.type === "offwork") {
        const el = document.querySelector(
          `[data-item-id="${CSS.escape(item.id)}"] .offwork-title`,
        );
        if (el) el.textContent = offworkText(item);
      }
      if (item.type === "pomodoro") {
        const d = state.widgetData[item.id];
        if (!d?.running) continue;
        const remaining = Math.max(0, Math.ceil((d.endAt - Date.now()) / 1000));
        const el = document.querySelector(
          `[data-item-id="${CSS.escape(item.id)}"] .pomodoro-time`,
        );
        if (el)
          el.textContent = `${String(Math.floor(remaining / 60)).padStart(2, "0")}:${String(remaining % 60).padStart(2, "0")}`;
        if (!remaining) {
          d.running = false;
          d.remaining = 0;
          save();
          toast("专注时间结束，休息一下吧。");
          const btn = el?.parentElement.querySelector("button");
          if (btn) btn.textContent = "重新开始";
        }
      }
    }
}
export function calendarHTML(year, month, weekBegin1 = true) {
  const date = new Date(year, month, 1),
    offset = (date.getDay() + (weekBegin1 ? 6 : 0)) % 7,
    days = new Date(year, month + 1, 0).getDate(),
    today = new Date();
  const week = weekBegin1 ? "一二三四五六日" : "日一二三四五六";
  return `<div class="month-nav"><button data-cal-step="-1" aria-label="上一个月">‹</button><h3>${year}年 ${month + 1}月</h3><button data-cal-step="1" aria-label="下一个月">›</button></div><div class="month-grid">${[...week].map((s) => `<span class="week-label">${s}</span>`).join("")}${Array.from({ length: offset }, () => "<span></span>").join("")}${Array.from({ length: days }, (_, n) => `<button type="button" data-cal-day="${n + 1}" class="${today.getFullYear() === year && today.getMonth() === month && today.getDate() === n + 1 ? "today" : ""}">${n + 1}<small>${lunarDate(new Date(year, month, n + 1)).replace(/^.*月/, "")}</small></button>`).join("")}</div><p class="calendar-selected">点击日期查看农历</p><div class="form-actions"><button data-cal-today>回到今天</button></div>`;
}
export function openWidget(item, state, { save, render, settings }) {
  const data = (state.widgetData[item.id] ??= {});
  if (item.type === "wallpaper") {
    settings("wallpaper");
    return;
  }
  if (item.type === "original") return openOriginalWidget(item);
  if (item.type === "calendar") {
    let year = new Date().getFullYear(),
      month = new Date().getMonth();
    const draw = () => {
      const d = modal(
        "日历",
        calendarHTML(year, month, state.settings.time.weekBegin1),
      );
      d.querySelectorAll("[data-cal-step]").forEach(
        (btn) =>
          (btn.onclick = () => {
            const dt = new Date(year, month + Number(btn.dataset.calStep), 1);
            year = dt.getFullYear();
            month = dt.getMonth();
            draw();
          }),
      );
      d.querySelector("[data-cal-today]").onclick = () => {
        year = new Date().getFullYear();
        month = new Date().getMonth();
        draw();
      };
      d.querySelectorAll("[data-cal-day]").forEach(
        (btn) =>
          (btn.onclick = () => {
            d.querySelector(".calendar-selected").textContent =
              `${year}年${month + 1}月${btn.dataset.calDay}日 · ${lunarDate(new Date(year, month, Number(btn.dataset.calDay)))}`;
          }),
      );
    };
    draw();
    return;
  }
  if (item.type === "notes") {
    const d = modal(
      "备忘录",
      '<p class="muted">自动保存到本机，也会包含在备份中。</p><textarea id="note-text" class="note-editor" aria-label="备忘录内容" maxlength="100000" placeholder="记录此刻的想法…"></textarea>',
    );
    const area = d.querySelector("textarea");
    area.value = data.text || "";
    area.oninput = () => {
      data.text = area.value;
      save();
      const preview = document.querySelector(
        `[data-item-id="${CSS.escape(item.id)}"] .notes-preview`,
      );
      if (preview)
        preview.textContent = data.text || "点击这里，记录你的灵感。";
    };
    return;
  }
  if (item.type === "todo") {
    data.todos ??= [];
    const draw = () => {
      const d = modal(
        "待办事项",
        `<form id="todo-form" class="inline-form"><input name="text" aria-label="新待办" placeholder="接下来要做什么？" required maxlength="200"><button class="primary">添加</button></form><div class="todo-list">${data.todos.map((t) => `<div><label><input type="checkbox" data-task="${esc(t.id)}" ${t.done ? "checked" : ""}><span class="${t.done ? "done" : ""}">${esc(t.text)}</span></label><button data-remove="${esc(t.id)}" aria-label="删除待办">${icon("trash", 17)}</button></div>`).join("") || '<p class="empty">还没有待办，给今天一个小目标。</p>'}</div>`,
      );
      d.querySelector("form").onsubmit = (e) => {
        e.preventDefault();
        const text = new FormData(e.target).get("text").trim();
        if (!text) return;
        data.todos.push({ id: uid(), text, done: false });
        save();
        render();
        draw();
      };
      d.querySelectorAll("[data-task]").forEach(
        (el) =>
          (el.onchange = () => {
            data.todos.find((t) => t.id === el.dataset.task).done = el.checked;
            save();
            render();
            draw();
          }),
      );
      d.querySelectorAll("[data-remove]").forEach(
        (el) =>
          (el.onclick = () => {
            data.todos = data.todos.filter((t) => t.id !== el.dataset.remove);
            save();
            render();
            draw();
          }),
      );
    };
    draw();
    return;
  }
  if (item.type === "calculator") {
    const d = modal(
      "计算器",
      `<form id="calculator-form"><input id="expression" class="calculator-display" aria-label="计算表达式" value="${esc(data.expression || "")}" placeholder="例如 (12 + 8) × 5" autocomplete="off"><output id="calc-result" class="calc-result">${esc(data.result ?? "0")}</output><div class="calculator-keys">${["C", "(", ")", "÷", "7", "8", "9", "×", "4", "5", "6", "−", "1", "2", "3", "+", "%", "0", ".", "="].map((key) => `<button type="${key === "=" ? "submit" : "button"}" data-key="${key}" class="${key === "=" ? "primary" : ""}">${key}</button>`).join("")}</div></form>`,
    );
    const field = d.querySelector("#expression");
    d.querySelectorAll("[data-key]").forEach((btn) => {
      if (btn.dataset.key !== "=")
        btn.onclick = () => {
          field.value =
            btn.dataset.key === "C" ? "" : field.value + btn.dataset.key;
          field.focus();
        };
    });
    d.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      try {
        const result = calculate(field.value);
        d.querySelector("output").textContent = result;
        data.expression = field.value;
        data.result = result;
        save();
        render();
      } catch (err) {
        toast(err.message, true);
      }
    };
    return;
  }
  if (item.type === "weather") {
    const d = modal(
      "天气 · 设置城市",
      `<form id="city-form" class="inline-form"><input name="city" aria-label="城市名称" placeholder="输入城市名称，如 上海 / Shanghai" required value="${esc(item.config.city || "北京")}"><button class="primary">搜索城市</button></form><div id="city-results"><p class="muted">天气由 Open-Meteo 提供，每 30 分钟缓存更新。</p></div><button id="weather-refresh">刷新当前城市天气</button>`,
    );
    d.querySelector("form").onsubmit = async (e) => {
      e.preventDefault();
      const value = new FormData(e.target).get("city");
      const holder = d.querySelector("#city-results");
      holder.textContent = "正在搜索…";
      try {
        const r = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(value)}&count=8&language=zh&format=json`,
          { signal: AbortSignal.timeout(12000) },
        );
        if (!r.ok) throw new Error("城市搜索暂不可用");
        const results = (await r.json()).results || [];
        holder.innerHTML =
          results
            .map(
              (v, n) =>
                `<button class="city-result" data-city-index="${n}">${esc(v.name)} <small>${esc(v.admin1 || "")} · ${esc(v.country || "")}</small></button>`,
            )
            .join("") || "<p>未找到城市，请尝试英文或拼音。</p>";
        holder.querySelectorAll("button").forEach(
          (btn) =>
            (btn.onclick = () => {
              const city = results[Number(btn.dataset.cityIndex)];
              item.config = {
                city: city.name,
                latitude: city.latitude,
                longitude: city.longitude,
              };
              save();
              render();
              closeModal();
            }),
        );
      } catch (err) {
        holder.textContent = "搜索失败：" + err.message;
      }
    };
    d.querySelector("#weather-refresh").onclick = async () => {
      await write(
        `weather:${item.config.latitude || 39.9},${item.config.longitude || 116.4}`,
        null,
      );
      render();
      closeModal();
    };
    return;
  }
  if (item.type === "hotlist") {
    modal(
      "热搜榜",
      `<p class="muted">国内热榜通过各平台官方页面查看；科技榜在主页直接显示实时条目。</p>${Object.values(
        sources,
      )
        .map(
          (s) =>
            `<button class="source-link" data-action="open-url" data-url="${s.url}">${s.name}${icon("external", 18)}</button>`,
        )
        .join(
          "",
        )}<button class="source-link" data-action="open-url" data-url="https://news.ycombinator.com/">Hacker News${icon("external", 18)}</button>`,
    );
    return;
  }
  if (item.type === "pomodoro") {
    const d = modal(
      "番茄钟",
      `<form id="widget-config"><label class="field">专注时长（分钟）<input name="minutes" type="number" min="1" max="120" value="${data.minutes || 25}" required></label><div class="form-actions"><button class="primary">保存并重置</button></div></form>`,
    );
    d.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      data.minutes = Number(new FormData(e.target).get("minutes"));
      data.remaining = data.minutes * 60;
      data.running = false;
      save();
      render();
      closeModal();
    };
    return;
  }
  if (item.type === "water") {
    modal(
      "饮水记录",
      `<p class="confirm-message">今天已喝 ${data.date === new Date().toLocaleDateString() ? data.cups || 0 : 0} 杯水。每一次补水都是照顾自己。</p><button id="water-reset">重置今天记录</button>`,
    ).querySelector("#water-reset").onclick = () => {
      data.cups = 0;
      data.date = new Date().toLocaleDateString();
      save();
      render();
      closeModal();
    };
    return;
  }
  let fields = "";
  if (item.type === "days")
    fields = `<label class="field">标题<input name="title" value="${esc(item.config.title || "距离目标日还有")}" maxlength="40" required></label><label class="field">目标日期<input name="date" type="date" value="${esc(item.config.date || "2027-01-01")}" required></label>`;
  if (item.type === "offwork")
    fields = `<label class="field">上班时间<input name="start" type="time" value="${esc(item.config.start || "09:00")}" required></label><label class="field">下班时间<input name="time" type="time" value="${esc(item.config.time || "18:00")}" required></label><p class="muted">周一至周五为工作日，其他时间显示“休息时间”。</p>`;
  if (item.type === "movie")
    fields = `<label class="field">电影名称<input name="title" value="${esc(item.config.title || "肖申克的救赎")}" maxlength="60" required></label><label class="field">上映年份<input name="year" value="${esc(item.config.year || "1994")}" maxlength="4" pattern="[0-9]{4}" required></label><label class="field">一句台词<textarea name="quote" maxlength="300">${esc(item.config.quote || "希望是美好的，也许是人间至善。")}</textarea></label><p class="muted">这是你的本地电影卡片，可编辑片名和台词。</p>`;
  if (fields) {
    const d = modal(
      item.name,
      `<form id="widget-config">${fields}<div class="form-actions"><button class="primary">保存</button></div></form>`,
    );
    d.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      Object.assign(item.config, Object.fromEntries(new FormData(e.target)));
      save();
      render();
      closeModal();
    };
  }
}

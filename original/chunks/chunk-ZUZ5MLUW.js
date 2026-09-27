import {
  ht,
  u
} from "./chunk-AFECQBGL.js";
import {
  f
} from "./chunk-YQ4PBQUM.js";
import {
  t
} from "./chunk-C332WR7G.js";

// output/native-current/dateTools-6OkZNidl.js
u.extend(ht);
var r = null, i = null;
function o() {
  return i ? Promise.resolve(i) : (r || (r = t(() => import("./vendor-tyme4ts-D81ry8hI-TK44FSS7.js"), []).then((t2) => (i = t2, t2))), r);
}
var s = [{ names: ["正月"], month: 1 }, { names: ["二月"], month: 2 }, { names: ["三月"], month: 3 }, { names: ["四月"], month: 4 }, { names: ["五月"], month: 5 }, { names: ["六月"], month: 6 }, { names: ["七月"], month: 7 }, { names: ["八月"], month: 8 }, { names: ["九月"], month: 9 }, { names: ["十月"], month: 10 }, { names: ["十一月", "冬月"], month: 11 }, { names: ["十二月", "腊月"], month: 12 }], u2 = ["初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十"], m = ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "冬月", "腊月"], c = "daysmatter-festival", f2 = null;
function l(t2) {
  return `${t2.getYear()}-${String(t2.getMonth()).padStart(2, "0")}-${String(t2.getDay()).padStart(2, "0")}`;
}
async function y(t2) {
  let { SolarDay: n2 } = await o(), e2 = u(t2);
  return n2.fromYmd(e2.year(), e2.month() + 1, e2.date());
}
function h() {
  return u().format("YYYY-MM-DD");
}
function d(t2) {
  if (!t2 || !String(t2).includes("月")) return null;
  let n2 = String(t2), a2 = Number(n2.slice(0, 4));
  if (!a2) return null;
  let e2 = n2.slice(4), r2 = e2.startsWith("闰");
  r2 && (e2 = e2.slice(1));
  let i2 = (function(t3) {
    let n3 = null;
    for (let a3 of s) for (let e3 of a3.names) t3.startsWith(e3) && (!n3 || e3.length > n3.monthName.length) && (n3 = { monthName: e3, month: a3.month, rest: t3.slice(e3.length) });
    return n3;
  })(e2);
  if (!i2) return null;
  let o2 = u2.findIndex((t3) => t3 === i2.rest) + 1;
  return o2 <= 0 && (o2 = 1), { year: a2, monthWithLeap: r2 ? -i2.month : i2.month, day: o2 };
}
async function g(t2) {
  if (!t2) return null;
  let n2 = String(t2);
  if (n2.includes("月")) return d(n2);
  let e2 = u(n2);
  if (!e2.isValid()) return null;
  let r2 = (await y(e2)).getLunarDay();
  return { year: r2.getYear(), monthWithLeap: r2.getLunarMonth().getMonthWithLeap(), day: r2.getDay() };
}
async function Y(t2, n2, a2) {
  let { LunarDay: e2, LunarMonth: r2 } = await o(), i2 = Number(n2) || 1;
  try {
    r2.fromYm(t2, i2);
  } catch {
    i2 = Math.abs(i2) || 1;
  }
  let s2 = r2.fromYm(t2, i2), u22 = Math.min(Math.max(1, Number(a2) || 1), s2.getDayCount());
  return l(e2.fromYmd(t2, s2.getMonthWithLeap(), u22).getSolarDay());
}
async function D(t2, n2 = !1) {
  if (!t2) return "";
  let e2 = String(t2);
  if (e2.includes("月")) {
    let t3 = d(e2);
    return t3 ? Y(t3.year, t3.monthWithLeap, t3.day) : e2;
  }
  if (/^\d{1,2}$/.test(e2)) return e2;
  let r2 = u(e2);
  return r2.isValid() ? r2.format("YYYY-MM-DD") : e2;
}
async function p(t2) {
  let n2 = await D(t2, !0), e2 = u(n2);
  if (!e2.isValid()) return String(t2);
  let r2 = (await y(e2)).getLunarDay(), i2 = r2.getLunarMonth().getMonthWithLeap(), o2 = i2 < 0, s2 = m[Math.abs(i2) - 1];
  return `${r2.getYear()}${o2 ? "闰" : ""}${s2}${r2.getName()}`;
}
async function M() {
  let { SolarDay: t2 } = await o(), n2 = u().startOf("day");
  for (let a2 = 0; a2 < 400; a2++) {
    let e2 = n2.add(a2, "day"), r2 = t2.fromYmd(e2.year(), e2.month() + 1, e2.date()), i2 = [], o2 = r2.getLunarDay().getFestival(), s2 = r2.getFestival();
    if (o2 && i2.push(o2.getName()), s2 && i2.push(s2.getName()), i2.length) return { number: a2, target: e2.format("YYYY-MM-DD"), title: i2.join(",") };
  }
  return { number: 0, target: n2.format("YYYY-MM-DD"), title: "" };
}
async function w(t2, n2, a2) {
  return n2 ? p(a2 || t2) : typeof t2 == "string" && t2.includes("月") ? t2 : a2 || String(t2 || "");
}
async function L(t2, e2, r2 = !1) {
  if (e2 === "festival") {
    let t3 = await (async function() {
      let t4 = h();
      if (f2 && f2.cacheDay === t4) return f2;
      let a2 = f.get(c);
      if (a2 && typeof a2 == "object" && a2.cacheDay === t4) return f2 = a2, a2;
      let e3 = { ...await M(), cacheDay: t4 };
      return f2 = e3, f.set(c, e3), e3;
    })();
    return { days: t3.number || 0, displayTarget: t3.target || "", festivalTitle: t3.title || "" };
  }
  (function(t3, n2, a2) {
    return n2 === "festival" || !!a2 || !(typeof t3 != "string" || !t3.includes("月"));
  })(t2, e2, r2) && await o();
  let i2 = await D(t2, r2), s2 = i2;
  if (e2) {
    if (e2 === "year") s2 = r2 ? await (async function(t3) {
      let n2 = await g(t3);
      if (!n2) return D(t3);
      let e3 = (await y(u())).getLunarDay().getYear(), r3 = h(), i3 = await Y(e3, n2.monthWithLeap, n2.day);
      return i3 === r3 || u().isAfter(u(i3), "day") && (i3 = await Y(e3 + 1, n2.monthWithLeap, n2.day)), i3;
    })(t2) : (function(t3) {
      let n2 = u(t3).format("MM-DD"), e3 = h();
      if (u().format("MM-DD") === n2) return e3;
      let r3 = u().year(), i3 = `${r3}-${n2}`;
      return u().isAfter(u(i3), "day") && (r3 += 1, i3 = `${r3}-${n2}`), i3;
    })(i2);
    else if (e2 === "month") s2 = r2 ? await (async function(t3) {
      let { LunarDay: n2 } = await o(), e3 = await g(t3);
      if (!e3) return D(t3);
      let r3 = e3.day, i3 = (await y(u())).getLunarDay().getLunarMonth(), s3 = (t4) => {
        let a2 = Math.min(r3, t4.getDayCount());
        return l(n2.fromYmd(t4.getLunarYear().getYear(), t4.getMonthWithLeap(), a2).getSolarDay());
      }, u3 = h(), m2 = s3(i3);
      return m2 === u3 || u().isAfter(u(m2), "day") && (m2 = s3(i3.next(1))), m2;
    })(t2) : (function(t3) {
      let n2 = Number(String(t3).length > 2 ? u(t3).date() : t3), e3 = u().startOf("day");
      if (e3.date() === n2) return e3.format("YYYY-MM-DD");
      let r3 = (t4) => t4.date(Math.min(n2, t4.daysInMonth())), i3 = r3(e3.startOf("month"));
      return e3.isAfter(i3, "day") && (i3 = r3(e3.add(1, "month").startOf("month"))), i3.format("YYYY-MM-DD");
    })(i2 || t2);
    else if (e2 === "week") {
      let n2 = u().isoWeekday(), e3 = u(i2).isoWeekday() - n2;
      return e3 === 0 ? { days: 0, displayTarget: await w(t2, r2, i2) } : (e3 < 0 && (e3 += 7), { days: e3, displayTarget: await w(t2, r2, i2) });
    }
  }
  let u22 = (function(t3, n2 = u()) {
    let e3 = u(n2).startOf("day"), r3 = u(t3).startOf("day");
    return r3.isValid() ? r3.diff(e3, "day") : NaN;
  })(s2);
  return { days: Number.isFinite(u22) ? u22 : 0, displayTarget: await w(t2, r2, i2) };
}
var S = async (t2, n2, a2 = !1) => {
  let e2 = await L(t2, n2, a2);
  return n2 === "festival" ? { number: e2.days, target: e2.displayTarget, title: e2.festivalTitle || "" } : e2.days;
};

export {
  o,
  m,
  d,
  g,
  Y,
  D,
  p,
  L,
  S
};

import {
  a,
  s
} from "./chunk-YAQ5Z3UW.js";

// output/native-current/shared-DIN_Jstd.js
var n = [116, 128], r = [105, 106, 107, 153], u = 50, i = { 0: "sz", 1: "sh", 105: "us", 106: "us", 107: "us", 153: "us", 116: "hk", 128: "hk" };
function o(e2) {
  return n.includes(Number(e2));
}
function s2(e2) {
  return r.includes(Number(e2));
}
function c(e2) {
  return !o(e2) && !s2(e2);
}
function a2(e2) {
  if (e2?.SecurityTypeName) return e2.SecurityTypeName;
  let t2 = Number(e2?.f13 ?? e2?.MktNum);
  return s2(t2) ? "美股" : o(t2) ? "港股" : t2 === 1 ? "沪A" : t2 === 0 ? "深A" : "";
}
function l(e2) {
  if (!e2) return !1;
  let t2 = Number(e2.SecurityType ?? e2.securityType), n2 = String(e2.SecurityTypeName ?? e2.securityTypeName ?? ""), r2 = String(e2.Classify ?? e2.classify ?? "").toLowerCase(), u2 = Number(e2.f19);
  return t2 === 5 || t2 === 11 || t2 === 8 || !(!n2.includes("指数") && !n2.includes("基金")) || r2 === "index" || r2 === "fund" || Number(e2.f148) === 1 || u2 === 9 || u2 === 10;
}
function d(e2) {
  let t2 = Number(e2?.f13 ?? e2?.MktNum), n2 = Number(e2?.f19);
  return Number.isFinite(t2) ? s2(t2) ? { text: "US", rgb: "232, 121, 249" } : o(t2) ? { text: "HK", rgb: "59, 130, 246" } : t2 === 0 && n2 === 80 ? { text: "创", rgb: "245, 158, 11" } : t2 === 1 && n2 === 23 ? { text: "科创", rgb: "245, 158, 11" } : null : null;
}
function m(e2) {
  let t2 = e2?.f13 ?? e2?.MktNum ?? e2;
  return s2(t2) || o(t2) ? "股" : "手";
}
function f(e2, t2 = "") {
  let n2 = Number(e2);
  if (!Number.isFinite(n2)) return "-";
  let r2 = Math.abs(n2);
  return r2 >= 1e8 ? `${(n2 / 1e8).toFixed(2)}亿${t2}` : r2 >= 1e4 ? `${(n2 / 1e4).toFixed(2)}万${t2}` : `${Number.isInteger(n2) ? n2 : n2.toFixed(2)}${t2}`;
}
var y = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }, $ = "America/New_York";
function b(e2 = /* @__PURE__ */ new Date()) {
  return { week: e2.getDay(), minutes: 60 * e2.getHours() + e2.getMinutes(), month: String(e2.getMonth() + 1).padStart(2, "0"), day: String(e2.getDate()).padStart(2, "0") };
}
function h(e2, t2 = /* @__PURE__ */ new Date()) {
  let n2 = new Intl.DateTimeFormat("en-US", { timeZone: e2, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", weekday: "short", hour12: !1, hourCycle: "h23" }), r2 = Object.fromEntries(n2.formatToParts(t2).map((e3) => [e3.type, e3.value])), u2 = Number(r2.hour);
  return u2 === 24 && (u2 = 0), { week: y[r2.weekday] ?? 0, minutes: 60 * u2 + Number(r2.minute), month: r2.month, day: r2.day, ymd: `${r2.year}-${r2.month}-${r2.day}` };
}
function g({ hk: n2 = !1 } = {}) {
  let { week: r2, minutes: u2 } = b();
  if (r2 < 1 || r2 > 5 || s(a())) return "closed";
  let i2 = n2 ? 720 : 690;
  return u2 >= 570 && u2 <= i2 || u2 >= 780 && u2 <= (n2 ? 960 : 930) ? "open" : u2 > i2 && u2 < 780 ? "lunch" : "closed";
}
function p() {
  let { week: e2, minutes: t2 } = h($);
  return e2 < 1 || e2 > 5 ? "closed" : t2 >= 240 && t2 < 570 ? "pre" : t2 >= 570 && t2 < 960 ? "open" : t2 >= 960 && t2 < 1200 ? "after" : "closed";
}
function N(e2) {
  if (!e2) return "";
  let t2 = e2.f13 ?? e2.MktNum;
  if (s2(t2)) {
    let e3 = p();
    return e3 === "pre" ? "盘前" : e3 === "open" ? "" : e3 === "after" ? "盘后" : "已收盘";
  }
  let n2 = g({ hk: o(t2) });
  return n2 === "open" ? "" : n2 === "lunch" ? "午间休市" : "已收盘";
}
function k(e2, t2) {
  let n2 = String(e2 || ""), r2 = t2?.f13 ?? t2?.MktNum;
  if (s2(r2)) {
    let e3 = p() === "closed";
    if (/^\d{14}$/.test(n2)) {
      let t4 = `${n2.slice(4, 6)}-${n2.slice(6, 8)}`;
      return e3 ? `${t4} 16:00:00` : `${t4} ${n2.slice(8, 10)}:${n2.slice(10, 12)}:${n2.slice(12, 14)}`;
    }
    if (!e3) return "";
    let { month: t3, day: r3 } = h($);
    return `${t3}-${r3} 16:00:00`;
  }
  let u2 = o(r2), i2 = g({ hk: u2 }) === "closed", c2 = u2 ? "16:00:00" : "15:30:00";
  if (/^\d{14}$/.test(n2)) {
    let e3 = `${n2.slice(4, 6)}-${n2.slice(6, 8)}`;
    return i2 ? `${e3} ${c2}` : `${e3} ${n2.slice(8, 10)}:${n2.slice(10, 12)}:${n2.slice(12, 14)}`;
  }
  if (!i2) return "";
  let { month: a22, day: l2 } = b();
  return `${a22}-${l2} ${c2}`;
}
function S(e2 = document.documentElement) {
  let t2 = getComputedStyle(e2), n2 = (e3, n3) => t2.getPropertyValue(e3).trim() || n3;
  return { label: n2("--d-label-2", "#94a3b8"), border: n2("--d-border-color", "rgba(100,100,100,.2)"), panel: n2("--d-bg-panel", "transparent"), primary: n2("--primary-color", "#0586ff"), avg: "#e68824" };
}

export {
  u,
  i,
  o,
  s2 as s,
  c,
  a2 as a,
  l,
  d,
  m,
  f,
  g,
  p,
  N,
  k,
  S
};

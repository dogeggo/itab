import {
  n,
  nt
} from "./chunk-WGCOLTAW.js";

// output/native-current/stock-0m1bz0DG.js
var n2 = nt.create({ timeout: 5e3 });
n2.interceptors.request.use((t2) => t2, (t2) => {
  Promise.reject(t2);
}), n2.interceptors.response.use((t2) => t2.data, (t2) => Promise.reject(t2));
var i = "https://push2delay.eastmoney.com", r = { 0: "sz", 1: "sh", 105: "us", 106: "us", 107: "us", 153: "us", 116: "hk", 128: "hk" }, o = { 105: ".OQ", 106: ".N", 107: ".AM", 153: ".OQ" }, s = [".OQ", ".N", ".AM"], l = { 101: { period: "day", limit: 320 }, 102: { period: "week", limit: 160 }, 103: { period: "month", limit: 120 }, 104: { period: "month", limit: 160, aggregate: "quarter" }, 106: { period: "month", limit: 100, aggregate: "year" }, 5: { period: "m5", limit: 320, minute: !0 }, 15: { period: "m15", limit: 320, minute: !0 } }, a = { trends: "minute", minute: "minute", 101: "day", 102: "week", 103: "month", 104: "quarter", 106: "year", 5: "m5", 15: "m15" };
async function u(t2, e2, n22) {
  let i2 = t2, r2 = e2;
  try {
    let t3 = await i2();
    if (!n22 || n22(t3)) return t3;
  } catch {
  }
  return r2();
}
function c(t2) {
  if (!t2 || t2.code != null && Number(t2.code) !== 200) throw new Error(t2?.msg || "自建股票接口失败");
  return t2.data;
}
function f(t2) {
  var e2;
  let n22 = (e2 = t2?.data) == null ? void 0 : e2.diff, i2 = Array.isArray(n22) ? n22 : n22 && typeof n22 == "object" ? Object.values(n22) : [];
  return { data: { ...t2?.data || {}, diff: i2 } };
}
function d(t2) {
  let e2 = (function() {
    let t3 = /* @__PURE__ */ new Date();
    return `${t3.getFullYear()}-${String(t3.getMonth() + 1).padStart(2, "0")}-${String(t3.getDate()).padStart(2, "0")}`;
  })();
  return { data: { trends: (t2?.list || []).map((t3) => {
    let n22 = String(t3.time || ""), i2 = n22.includes(" ") ? n22.split(" ").pop() : n22;
    return `${/^\d{1,2}:\d{2}/.test(i2) ? `${e2} ${i2}` : n22},${t3.price},0,${t3.avgPrice ?? t3.price}`;
  }), preClose: t2?.lastClose, prePrice: t2?.lastClose } };
}
async function m(t2) {
  let n22 = await n.get("/stock/quotes", { params: { secids: t2 } });
  return i2 = c(n22), { data: { diff: (Array.isArray(i2) ? i2 : i2?.list || []).map((t3) => ({ f12: t3.code != null ? String(t3.code) : "", f13: t3.mktNum, f14: t3.name, f2: t3.price, f3: t3.changePct, f4: t3.change, f19: t3.board, SecurityType: t3.securityType, SecurityTypeName: t3.securityTypeName, Name: t3.name, Code: t3.code != null ? String(t3.code) : "", MktNum: t3.mktNum })) } };
  var i2;
}
async function p(t2, n22) {
  let i2 = n22 || (function(t3) {
    let e2 = String(t3 || ""), n3 = e2.toLowerCase();
    return n3.startsWith("sh") ? `1.${e2.slice(2)}` : n3.startsWith("sz") ? `0.${e2.slice(2)}` : n3.startsWith("bj") ? `2.${e2.slice(2)}` : n3.startsWith("hk") ? `116.${e2.slice(2)}` : n3.startsWith("us") ? `105.${e2.slice(2).replace(/\.(OQ|N|AM)$/i, "")}` : "";
  })(t2);
  if (!i2) throw new Error("无法解析 secid");
  let r2 = c(await n.get("/stock/detail", { params: { secid: i2 } }));
  if (r2?.price == null && !r2?.name) throw new Error("自建详情为空");
  return (function(t3, e2) {
    let n3 = Array(50).fill("");
    n3[1] = t3?.name || "", n3[3] = t3?.price ?? "", n3[4] = t3?.lastClose ?? "", n3[5] = t3?.open ?? "", n3[6] = t3?.volume ?? "", n3[30] = t3?.quoteTime || "", n3[31] = t3?.change ?? "", n3[32] = t3?.changePct ?? "", n3[33] = t3?.high ?? "", n3[34] = t3?.low ?? "";
    let i3 = /^(hk|us)/i.test(e2);
    return t3?.amount != null && (n3[37] = i3 ? t3.amount : t3.amount / 1e4), n3[38] = t3?.turnoverRate ?? "", n3[39] = t3?.peRatio ?? "", n3[43] = t3?.amplitude ?? "", t3?.totalMarketValue != null && (n3[45] = t3.totalMarketValue / 1e8), `v_${e2}="${n3.join("~")}";`;
  })(r2, t2);
}
var g = (t2) => n.get("/stock/search", { params: { name: t2 } }), h = (t2) => n.post("/llm/image_to_stocks", t2), v = (t2) => {
  let e2 = { fltt: "2", fields: "f12,f13,f19,f14,f139,f148,f2,f4,f1,f125,f18,f3,f152,f5,f30,f31,f32,f6,f8,f7,f10,f22,f9,f112,f100,f88,f153", secids: t2 };
  return u(() => n2.get(`${i}/api/qt/ulist.np/get`, { params: e2 }), () => m(t2), (t3) => {
    var e3, n22;
    return ((n22 = (e3 = t3?.data) == null ? void 0 : e3.diff) == null ? 0 : Array.isArray(n22) ? n22.length : typeof n22 == "object" ? Object.keys(n22).length : 0) > 0;
  }).then(f);
}, $ = (t2) => {
  let r2 = { fields1: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13", fields2: "f51,f53,f56,f58", iscr: 0, iscca: 0, ndays: 1 };
  return u(() => n2.get(`${i}/api/qt/stock/trends2/get`, { params: { ...t2, ...r2 } }), () => (async function(t3) {
    return d(c(await n.get("/stock/kline", { params: { secid: t3, type: "minute" } })));
  })(t2?.secid), (t3) => {
    var e2;
    return (((e2 = t3?.data) == null ? void 0 : e2.trends) || []).length > 0;
  });
}, y = (t2, e2) => u(() => n2.get(`https://qt.gtimg.cn/q=${t2}`), () => p(t2, e2), (t3) => typeof t3 == "string" && t3.includes("~") && !t3.includes("v_pv_none_match"));
function k(t2) {
  let e2 = String(t2 || ""), n22 = e2.indexOf(".");
  return n22 <= 0 ? { mkt: "", code: "" } : { mkt: e2.slice(0, n22), code: e2.slice(n22 + 1) };
}
function w(t2) {
  let { mkt: e2, code: n22 } = k(t2), i2 = r[e2] || r[Number(e2)];
  return !i2 || !n22 ? "" : i2 !== "us" ? `${i2}${n22}` : `${i2}${n22}${o[Number(e2)] || ".OQ"}`;
}
function b(t2, e2) {
  let n22 = String(t2 || "");
  return e2 && /^\d{12}$/.test(n22) ? `${n22.slice(0, 4)}-${n22.slice(4, 6)}-${n22.slice(6, 8)} ${n22.slice(8, 10)}:${n22.slice(10, 12)}` : n22;
}
function j(t2, e2, n22) {
  return t2 && typeof t2 == "object" ? n22 ? t2[e2] || [] : t2[`qfq${e2}`] || t2[e2] || t2[`hfq${e2}`] || [] : [];
}
function N(t2, e2 = !1) {
  let n22 = [];
  for (let i2 = 0; i2 < t2.length; i2++) {
    let r2 = t2[i2];
    if (!Array.isArray(r2) || r2.length < 5) continue;
    let o2 = b(r2[0], e2), s2 = +r2[1], l2 = +r2[2], a2 = +r2[3], u2 = +r2[4], c2 = +r2[5] || 0;
    if (![s2, l2, a2, u2].every(Number.isFinite)) continue;
    let f2 = i2 > 0 ? +t2[i2 - 1][2] : s2, d2 = Number.isFinite(f2) ? +(l2 - f2).toFixed(2) : 0, m2 = Number.isFinite(f2) && f2 ? +(d2 / f2 * 100).toFixed(2) : 0, p2 = Number.isFinite(f2) && f2 ? +((a2 - u2) / f2 * 100).toFixed(2) : 0, g2 = "", h2 = r2[7] != null && typeof r2[7] != "object" && r2[7] !== "" ? r2[7] : "";
    n22.push(`${o2},${s2},${l2},${a2},${u2},${c2},${g2},${p2},${m2},${d2},${h2}`);
  }
  return n22;
}
async function q(t2, e2) {
  var i2, r2;
  if (e2.minute) {
    let r3 = await n2.get("https://ifzq.gtimg.cn/appstock/app/kline/mkline", { params: { param: `${t2},${e2.period},,${e2.limit}` } });
    return j((i2 = r3?.data) == null ? void 0 : i2[t2], e2.period, !0);
  }
  let o2 = await n2.get("https://web.ifzq.gtimg.cn/appstock/app/fqkline/get", { params: { param: `${t2},${e2.period},,,${e2.limit},qfq` } });
  return j((r2 = o2?.data) == null ? void 0 : r2[t2], e2.period, !1);
}
async function S(t2, e2) {
  let n22 = l[String(e2)] || l[101], i2 = (function(t3) {
    let { mkt: e3, code: n3 } = k(t3), i3 = r[e3] || r[Number(e3)];
    if (i3 !== "us" || !n3) return [w(t3)].filter(Boolean);
    let l2 = o[Number(e3)] || ".OQ";
    return [l2, ...s.filter((t4) => t4 !== l2)].map((t4) => `${i3}${n3}${t4}`);
  })(t2);
  if (!i2.length) return { data: { klines: [] } };
  let a2 = [];
  for (let r2 of i2) if (a2 = await q(r2, n22), a2.length >= 3) break;
  return n22.aggregate && a2.length && (a2 = (function(t3, e3) {
    let n3 = /* @__PURE__ */ new Map();
    for (let i3 of t3) {
      let t4 = String(i3[0] || ""), r2 = t4;
      if (e3 === "year") r2 = t4.slice(0, 4);
      else if (e3 === "quarter") {
        let e4 = Number(t4.slice(5, 7));
        if (!e4) continue;
        r2 = `${t4.slice(0, 4)}-Q${Math.ceil(e4 / 3)}`;
      }
      let o2 = +i3[1], s2 = +i3[2], l2 = +i3[3], a3 = +i3[4], u2 = +i3[5] || 0, c2 = n3.get(r2);
      c2 ? (c2.close = s2, c2.high = Math.max(c2.high, l2), c2.low = Math.min(c2.low, a3), c2.vol += u2, c2.date = t4) : n3.set(r2, { date: t4, open: o2, close: s2, high: l2, low: a3, vol: u2 });
    }
    return [...n3.values()].map((t4) => [t4.date, t4.open, t4.close, t4.high, t4.low, t4.vol]);
  })(a2, n22.aggregate)), { data: { klines: N(a2, !!n22.minute) } };
}
var A = (t2) => {
  let { secid: n22, klt: i2 } = t2 || {};
  return u(() => S(n22, i2), () => (async function(t3, n3) {
    let i3 = a[String(n3)] || "day";
    return { data: { klines: (o2 = c(await n.get("/stock/kline", { params: { secid: t3, type: i3 } }))?.list, (o2 || []).flatMap((t4) => {
      let e2 = +t4.open, n4 = +t4.close, i4 = +t4.high, r3 = +t4.low, o3 = +t4.volume || 0;
      if (![e2, n4, i4, r3].every(Number.isFinite)) return [];
      let s2 = t4.change ?? "", l2 = t4.changePct ?? "";
      return [`${t4.time},${e2},${n4},${i4},${r3},${o3},,,${l2},${s2},`];
    })) } };
    var o2;
  })(n22, i2), (t3) => {
    var e2;
    return (((e2 = t3?.data) == null ? void 0 : e2.klines) || []).length >= 3;
  });
};

export {
  g,
  h,
  v,
  $,
  y,
  A
};

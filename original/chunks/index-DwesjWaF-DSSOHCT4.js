import "./chunk-RBE7AC6A.js";
import {
  t as t3
} from "./chunk-IJ7DWUSC.js";
import {
  e as e3,
  n
} from "./chunk-7L2T4663.js";
import {
  we
} from "./chunk-YE5PCOFO.js";
import {
  e as e2
} from "./chunk-QQK7L6ZV.js";
import {
  s as s2
} from "./chunk-FLJ65QRG.js";
import {
  s as s3
} from "./chunk-G52UIIHX.js";
import {
  u as u4
} from "./chunk-TE7GR3OL.js";
import {
  F,
  t2
} from "./chunk-R77VKLDU.js";
import {
  A as A2,
  g as g2,
  v,
  y
} from "./chunk-HWR4FDWZ.js";
import {
  e,
  i as i2
} from "./chunk-MM5ENYVH.js";
import {
  r as r2
} from "./chunk-5RESTW6T.js";
import {
  u as u3
} from "./chunk-LQ7SZPTY.js";
import {
  N,
  a,
  d,
  f,
  g,
  i,
  k,
  l,
  m,
  o as o2,
  p,
  s,
  u as u2
} from "./chunk-KKRYL5KL.js";
import {
  u
} from "./chunk-YAQ5Z3UW.js";
import "./chunk-GDVT6VLN.js";
import "./chunk-WGCOLTAW.js";
import {
  $s,
  Gm,
  PI,
  Um,
  VO,
  Zm,
  aO,
  nd,
  tC,
  xe
} from "./chunk-QX73FKBL.js";
import "./chunk-IEOKZKWO.js";
import {
  Bc,
  Bn,
  Hc,
  Uc,
  h,
  kt
} from "./chunk-LEVEZLTX.js";
import "./chunk-5MDIDYN5.js";
import "./chunk-AFECQBGL.js";
import {
  Ae,
  Be,
  Oe,
  Pe,
  le
} from "./chunk-YQ4PBQUM.js";
import {
  t
} from "./chunk-C332WR7G.js";
import "./chunk-C3WGXGFI.js";
import {
  data_default
} from "./chunk-S7M5ZIRT.js";
import {
  A
} from "./chunk-USGTF4JI.js";
import {
  o,
  r
} from "./chunk-ZBQAVDN7.js";
import {
  $o,
  Es,
  Et,
  Fr,
  Hr,
  Lt,
  V,
  W,
  Xn,
  Xo,
  Z,
  Zr,
  di,
  dt,
  eo,
  fs,
  hs,
  io,
  lo,
  mn,
  ol,
  on,
  po,
  qi,
  sl,
  to,
  uo,
  yn
} from "./chunk-E6JHFIG4.js";

// output/native-current/IconCircleCheck-Bgh7_98r.js
var e4 = r("outline", "circle-check", "CircleCheck", [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]]);

// output/native-current/IconCirclePlus-AB4SDzyL.js
var s4 = r("outline", "circle-plus", "CirclePlus", [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M9 12h6", key: "svg-1" }], ["path", { d: "M12 9v6", key: "svg-2" }]]);

// output/native-current/IconSettings2-BpVXnD8O.js
var t4 = r("outline", "settings-2", "Settings2", [["path", { d: "M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033", key: "svg-0" }], ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-1" }]]);

// output/native-current/Content-Bk0XbgP0.js
var Re = "app-stock-search-history";
function qe(e22) {
  if (!e22 || typeof e22 != "object") return null;
  let t22 = e22.Code ?? e22.f12, a2 = e22.MktNum ?? e22.f13;
  return t22 == null || t22 === "" || a2 == null || a2 === "" ? null : { Code: String(t22), Name: e22.Name ?? e22.f14 ?? "", MktNum: String(a2), SecurityTypeName: e22.SecurityTypeName || "", SecurityType: e22.SecurityType ?? "" };
}
async function Ke() {
  let e22 = await data_default.get(Re);
  return Array.isArray(e22) ? e22.map(qe).filter(Boolean).slice(0, 10) : [];
}
async function Ve(e22) {
  let t22 = qe(e22);
  if (!t22 || !Hc(t22)) return Ke();
  let a2 = Hc(t22), l2 = [t22, ...(await Ke()).filter((e32) => Hc(e32) !== a2)].slice(0, 10);
  return await data_default.set(Re, l2), l2;
}
var Be2 = { class: "stock-search-input flex h-7 items-center gap-1.5 rounded-full border border-(--d-card-border-color) bg-(--d-bg-page) px-2.5" }, Ue = { key: 0, class: "stock-search-drop absolute top-[calc(100%+6px)] left-0 z-20 w-[230px] rounded-xl d-bg-panel shadow-lg" }, We = { key: 0, class: "p-3" }, He = { class: "mb-2 flex items-center justify-between" }, Xe = { key: 0, class: "flex flex-wrap gap-2 pt-1 pr-1" }, Ye = ["title", "onClick"], Ze = { class: "block max-w-full truncate" }, Ge = ["onClick"], Qe = { key: 1, class: "d-label-3 m-0 py-2 text-center text-xs" }, Je = { class: "stock-search-remote px-1 py-1" }, et = { key: 0, class: "d-label-3 px-2 py-3 text-center text-xs" }, tt = ["onClick"], at = { class: "flex items-center justify-between" }, lt = { class: "title min-w-0 flex-1" }, st = { class: "d-elip m-0 text-sm text-(--d-label)" }, it = { class: "inline-flex items-center gap-0.5" }, nt = { class: "d-label-2 f12" }, ot = { key: 0, class: "d-label-2 text-[11px]" }, ct = ["title", "disabled", "onClick"], rt = /* @__PURE__ */ o({ __name: "Search", emits: ["select", "add", "focus", "paste-image"], setup(e22, { emit: a2 }) {
  let l2 = a2, s22 = r2(), i22 = Et(null), n2 = Et(null), o22 = Et(""), c2 = Et([]), r22 = Et([]), u22 = Et(!1), N2 = Et("history"), A22 = Et(!1);
  function T2(e32) {
    let t22 = Hc(e32);
    return !!t22 && s22.value.some((e42) => Hc(e42) === t22);
  }
  async function z2() {
    N2.value = "history", r22.value = await Ke(), u22.value = !0;
  }
  function $2() {
    u22.value = !1;
  }
  async function M2() {
    l2("focus"), o22.value ? (N2.value = "remote", u22.value = !0) : await z2();
  }
  let F2 = Bn((e32) => {
    A22.value = !0, g2(e32).then((t22) => {
      o22.value === e32 && (c2.value = t22.data || []);
    }).catch(() => {
      o22.value === e32 && (c2.value = []);
    }).finally(() => {
      o22.value === e32 && (A22.value = !1);
    });
  }, 280);
  function E2() {
    let e32 = o22.value;
    e32 ? (N2.value = "remote", u22.value = !0, F2(e32)) : z2();
  }
  async function L2() {
    r22.value = await (async function() {
      return await data_default.set(Re, []), [];
    })();
  }
  async function O2(e32) {
    r22.value = await (async function(e42) {
      let t22 = Hc(qe(e42) || e42);
      if (!t22) return Ke();
      let a3 = (await Ke()).filter((e5) => Hc(e5) !== t22);
      return await data_default.set(Re, a3), a3;
    })(e32);
  }
  function P2(e32) {
    if (!e32 || typeof e32 != "object") return;
    let t22 = qe(e32);
    t22 && (o22.value = "", $2(), Ve(t22).then((e42) => {
      r22.value = e42;
    }), l2("select", t22));
  }
  return xe(n2, "paste", async (e32) => {
    var t22;
    let a3 = (t22 = e32.clipboardData) == null ? void 0 : t22.items;
    if (a3) {
      for (let s32 of a3) if (s32.type.startsWith("image/")) {
        e32.preventDefault();
        let t32 = s32.getAsFile();
        if (!t32) return;
        l2("paste-image", { name: t32.name, raw: t32, size: t32.size, type: t32.type });
        break;
      }
    }
  }), xe(document, "click", (e32) => {
    i22.value && !i22.value.contains(e32.target) && $2();
  }), (e32, a3) => (Zr(), eo("div", { ref_key: "rootRef", ref: i22, class: "stock-search-main relative min-w-0 flex-1" }, [io("div", Be2, [lo(Lt(e2), { class: "d-label-3 shrink-0", size: 15, "stroke-width": 2 }), yn(io("input", { ref_key: "inputRef", ref: n2, "onUpdate:modelValue": a3[0] || (a3[0] = (e42) => o22.value = e42), class: "min-w-0 flex-1 bg-transparent text-xs text-(--d-label) outline-none", type: "text", autocomplete: "off", placeholder: "搜索股票名称、代码", onFocus: M2, onInput: E2, onKeydown: ol($2, ["esc"]) }, null, 544), [[qi, o22.value, void 0, { trim: !0 }]])]), lo(Xo, { name: "el-zoom-in-top" }, { default: mn(() => [u22.value ? (Zr(), eo("div", Ue, [N2.value === "history" ? (Zr(), eo("div", We, [io("div", He, [a3[1] || (a3[1] = io("span", { class: "text-xs font-medium d-label" }, "历史搜索", -1)), r22.value.length ? (Zr(), eo("button", { key: 0, type: "button", class: "d-label-3 flex size-6 cursor-pointer items-center justify-center rounded-md bg-transparent hover:text-(--d-label)", title: "清空历史", onClick: L2 }, [lo(Lt(s3), { size: 15, "stroke-width": 2 })])) : po("", !0)]), r22.value.length ? (Zr(), eo("div", Xe, [(Zr(!0), eo(Hr, null, Es(r22.value, (e42) => (Zr(), eo("button", { key: Lt(Hc)(e42), type: "button", class: "stock-hist-pill d-bg-inset relative max-w-full cursor-pointer rounded-full px-2 py-0.5 text-[11px] d-label-2", title: e42.Name, onClick: (t22) => P2(e42) }, [io("span", Ze, Z(e42.Name || e42.Code), 1), io("span", { class: "stock-hist-del absolute -right-1 -top-1 flex size-3.5 cursor-pointer items-center justify-center rounded-full bg-(--d-bg-panel) text-(--d-label-3) opacity-0 hover:text-(--d-label)", title: "删除", onClick: sl((t22) => O2(e42), ["stop"]) }, [lo(Lt(t2), { size: 10, "stroke-width": 2.5 })], 8, Ge)], 8, Ye))), 128))])) : (Zr(), eo("p", Qe, " 暂无搜索历史 "))])) : (Zr(), to(Lt(nd), { key: 1, "max-height": "320px" }, { default: mn(() => [io("div", Je, [c2.value.length ? po("", !0) : (Zr(), eo("div", et, Z(A22.value ? "搜索中…" : "无匹配结果"), 1)), (Zr(!0), eo(Hr, null, Es(c2.value, (e42) => (Zr(), eo("div", { key: Lt(Hc)(e42) || e42.ID || e42.Code, class: "search-result-li relative cursor-pointer rounded-xl px-3 py-2", onClick: (t22) => P2(e42) }, [io("div", at, [io("div", lt, [io("p", st, Z(e42.Name), 1), io("span", it, [io("code", nt, Z(e42.Code), 1), e42.SecurityTypeName ? (Zr(), eo("span", ot, Z(e42.SecurityTypeName), 1)) : po("", !0)])]), io("button", { type: "button", class: W(["stock-search-add d-flex-center shrink-0 bg-transparent", { on: T2(e42) }]), title: T2(e42) ? "已在自选" : "加入自选", disabled: T2(e42), onClick: sl((t22) => (function(e5) {
    if (!e5 || typeof e5 != "object") return;
    let t32 = qe(e5);
    t32 && !T2(t32) && (Ve(t32).then((e6) => {
      r22.value = e6;
    }), l2("add", t32));
  })(e42), ["stop"]) }, [T2(e42) ? (Zr(), to(Lt(e4), { key: 0, size: 20, "stroke-width": 1.8 })) : (Zr(), to(Lt(s4), { key: 1, size: 20, "stroke-width": 1.8 }))], 10, ct)])], 8, tt))), 128))])]), _: 1 }))])) : po("", !0)]), _: 1 })], 512));
} }, [["__scopeId", "data-v-3adfc087"]]), ut = "app-stock-market-index";
function dt2(e22) {
  if (!e22 || typeof e22 != "object") return null;
  let t22 = Array.isArray(e22.list) ? e22.list.filter(Boolean) : [], a2 = Number(e22.updatedAt);
  return t22.length && Number.isFinite(a2) ? { list: t22, updatedAt: a2 } : null;
}
var ft = ["1.000001", "0.399001", "0.399006", "1.000300", "1.000905", "1.000688"], vt = [{ key: "cn", label: "A股" }, { key: "us", label: "美股" }, { key: "hk", label: "港股" }], mt = { cn: [{ secid: "1.000001", name: "上证指数" }, { secid: "0.399001", name: "深证成指" }, { secid: "0.399006", name: "创业板指" }, { secid: "1.000300", name: "沪深300" }, { secid: "1.000016", name: "上证50" }, { secid: "1.000905", name: "中证500" }, { secid: "1.000852", name: "中证1000" }, { secid: "1.000688", name: "科创50" }, { secid: "1.000680", name: "科创综指" }, { secid: "0.399005", name: "中小100" }, { secid: "0.399330", name: "深证100" }, { secid: "1.000010", name: "上证180" }, { secid: "1.000009", name: "上证380" }, { secid: "1.000132", name: "上证100" }, { secid: "0.399673", name: "创业板50" }, { secid: "0.399102", name: "创业板综" }, { secid: "1.000906", name: "中证800" }, { secid: "1.000903", name: "中证A100" }, { secid: "0.399303", name: "国证2000" }, { secid: "1.000015", name: "红利指数" }, { secid: "1.000002", name: "A股指数" }], us: [{ secid: "100.DJIA", name: "道琼斯" }, { secid: "100.NDX", name: "纳斯达克" }, { secid: "100.SPX", name: "标普500" }], hk: [{ secid: "100.HSI", name: "恒生指数" }, { secid: "100.HSCEI", name: "恒生国企" }, { secid: "124.HSTECH", name: "恒生科技" }] }, pt = (() => {
  let e22 = /* @__PURE__ */ new Map();
  for (let t22 of Object.values(mt)) for (let a2 of t22) e22.set(a2.secid, a2);
  return e22;
})();
function kt2(e22) {
  for (let [t22, a2] of Object.entries(mt)) if (a2.some((t32) => t32.secid === e22)) return t22;
  return null;
}
function bt(e22, t22 = "") {
  var a2;
  return ((a2 = pt.get(e22)) == null ? void 0 : a2.name) || t22 || e22;
}
function xt(e22) {
  if (!Array.isArray(e22)) return [...ft];
  let t22 = /* @__PURE__ */ new Set(), a2 = [];
  for (let l2 of e22) {
    let e32 = String(l2 || "");
    if (e32 && !t22.has(e32) && pt.has(e32) && (t22.add(e32), a2.push(e32), a2.length >= 15)) break;
  }
  return a2;
}
var yt = "app-stock-market-index-prefs";
function ht(e22) {
  return { secids: e22 && Array.isArray(e22.secids) ? xt(e22.secids) : [...ft], visible: e22?.visible !== !1 };
}
async function gt() {
  return ht(await data_default.get(yt));
}
var wt = { class: "market-index-settings relative w-[340px] px-1 py-0.5" }, Dt = { class: "mb-3 flex items-center justify-between" }, jt = { class: "flex items-center gap-2" }, _t = { class: "mb-2 flex items-center justify-between" }, It = { class: "m-0 flex items-center gap-1.5 text-sm font-semibold text-(--d-label)" }, Ct = { class: "d-label-2 text-xs font-normal" }, St = { key: 0, class: "d-label-2 rounded-xl bg-[rgba(var(--alpha-color),0.04)] px-3 py-5 text-center text-xs" }, Nt = ["onClick"], At = { class: "d-elip" }, Tt = { class: "market-index-chip-btn", "aria-hidden": "true" }, zt = { class: "mt-4" }, $t = { class: "mb-2 flex items-center justify-between" }, Mt = { class: "m-0 flex min-w-0 items-center gap-1.5 text-sm font-semibold text-(--d-label)" }, Ft = { class: "flex gap-1 font-normal" }, Et2 = ["onClick"], Lt2 = { key: 0, class: "d-label-2 rounded-xl bg-[rgba(var(--alpha-color),0.04)] px-3 py-5 text-center text-xs" }, Ot = { key: 1, class: "market-index-chip-wrap max-h-[240px] overflow-y-auto pt-1 pr-1" }, Pt = ["onClick"], Rt = { class: "d-elip" }, qt = { class: "market-index-chip-btn is-add", "aria-hidden": "true" }, Kt = /* @__PURE__ */ o({ __name: "MarketIndexSettings", props: { active: { type: Boolean, default: !1 }, secids: { type: Array, default: () => [] }, showMarket: { type: Boolean, default: !0 } }, emits: ["save", "close"], setup(e22, { emit: t22 }) {
  let s22 = e22, i22 = t22, n2 = Et([]), o22 = Et(!0), c2 = Et("cn"), r22 = !1, u22 = $o(() => new Set(n2.value)), b2 = $o(() => (mt[c2.value] || []).filter((e32) => !u22.value.has(e32.secid)));
  function x2() {
    i22("save", { secids: [...n2.value], visible: o22.value });
  }
  function y2() {
    x2();
  }
  function g22() {
    n2.value = [...ft], x2();
  }
  function _2() {
    r22 = !0;
  }
  function S2() {
    x2(), setTimeout(() => {
      r22 = !1;
    }, 0);
  }
  function z2(e32) {
    r22 || (function(e42) {
      n2.value = n2.value.filter((t32) => t32 !== e42), x2();
    })(e32);
  }
  return Fr(() => s22.active, (e32) => {
    e32 && (n2.value = xt(s22.secids), o22.value = s22.showMarket !== !1, c2.value = "cn");
  }, { immediate: !0 }), (e32, t32) => (Zr(), eo("div", wt, [io("div", Dt, [t32[2] || (t32[2] = io("span", { class: "text-sm text-(--d-label)" }, "显示大盘指数", -1)), io("div", jt, [lo(Lt(tC), { modelValue: o22.value, "onUpdate:modelValue": t32[0] || (t32[0] = (e42) => o22.value = e42), size: "small", onChange: y2 }, null, 8, ["modelValue"]), io("button", { type: "button", class: "d-flex-center size-6 shrink-0 cursor-pointer rounded-md bg-transparent text-(--d-label-3) hover:bg-[rgba(var(--alpha-color),0.08)] hover:text-(--d-label)", title: "关闭", onClick: t32[1] || (t32[1] = (e42) => i22("close")) }, [lo(Lt(t2), { size: 16, "stroke-width": 2 })])])]), io("section", null, [io("div", _t, [io("h3", It, [t32[3] || (t32[3] = uo(" 我的指数 ")), io("span", Ct, Z(n2.value.length) + "/" + Z(Lt(15)), 1)]), io("button", { type: "button", class: "market-index-reset cursor-pointer rounded-full px-2.5 py-0.5 text-xs", title: "恢复默认指数", onClick: g22 }, " 重置成默认 ")]), n2.value.length ? (Zr(), to(Lt(we), { key: 1, class: "market-index-chip-wrap pt-1 pr-1", list: n2.value, animation: 220, "ghost-class": "market-index-chip-ghost", "chosen-class": "market-index-chip-chosen", onStart: _2, onEnd: S2 }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(n2.value, (e42) => (Zr(), eo("div", { key: e42, class: "market-index-chip is-mine", title: "点击移除，拖动排序", onClick: (t42) => z2(e42) }, [io("span", At, Z(Lt(bt)(e42)), 1), io("span", Tt, [lo(Lt(s2), { size: 12, "stroke-width": 2.5 })])], 8, Nt))), 128))]), _: 1 }, 8, ["list"])) : (Zr(), eo("div", St, " 还没有指数，从下方添加 "))]), io("section", zt, [io("div", $t, [io("h3", Mt, [t32[4] || (t32[4] = uo(" 更多指数 ")), io("span", Ft, [(Zr(!0), eo(Hr, null, Es(Lt(vt), (e42) => (Zr(), eo("button", { key: e42.key, type: "button", class: W(["market-index-tab cursor-pointer rounded-full px-2.5 py-0.5 text-xs", { active: c2.value === e42.key }]), onClick: (t42) => c2.value = e42.key }, Z(e42.label), 11, Et2))), 128))])])]), b2.value.length ? (Zr(), eo("div", Ot, [(Zr(!0), eo(Hr, null, Es(b2.value, (e42) => (Zr(), eo("div", { key: e42.secid, class: W(["market-index-chip", { disabled: n2.value.length >= Lt(15) }]), title: "点击添加", onClick: (t42) => {
    return a2 = e42.secid, void (u22.value.has(a2) || (n2.value.length >= 15 ? aO.warning("最多添加 15 个指数") : (n2.value = [...n2.value, a2], x2())));
    var a2;
  } }, [io("span", Rt, Z(e42.name), 1), io("span", qt, [lo(Lt(h), { size: 12, "stroke-width": 2.5 })])], 10, Pt))), 128))])) : (Zr(), eo("div", Lt2, " 该分类已全部添加 "))])]));
} }, [["__scopeId", "data-v-b964f93a"]]), Vt = ["aria-hidden"], Bt = { class: "d-label-2 whitespace-nowrap" }, Ut = /* @__PURE__ */ o({ __name: "MarketTicker", setup(e22) {
  let t22 = Et([]), a2 = Et([]), l2 = Et(!0), i22 = Et(!1), n2 = Et(!1), o22 = Et(36), c2 = Et(!1), r22 = Et(null), u22 = Et(null), x2 = null, y2 = null, I2 = null, S2 = null;
  function N2(e32) {
    let t32 = Number(e32);
    return Number.isFinite(t32) ? t32.toFixed(2) : "-";
  }
  function L2(e32) {
    let t32 = Number(e32);
    return Number.isFinite(t32) ? t32.toFixed(2) : "-";
  }
  function O2() {
    let e32 = r22.value, t32 = u22.value;
    if (!e32 || !t32) return void (c2.value = !1);
    let a3 = t32.querySelector(".market-ticker-group");
    c2.value = !!a3 && a3.scrollWidth > e32.clientWidth + 2;
  }
  function P2(e32) {
    if (!e32?.length) return t22.value = [], void (c2.value = !1);
    t22.value = e32, o22.value = Math.max(24, 6 * e32.length), on(O2);
  }
  function R2(e32, t32) {
    return (e32?.list || []).map((e42) => e42.secid).join(",") === (t32 || []).join(",");
  }
  async function q({ force: e32 = !1 } = {}) {
    var t32;
    if (document.visibilityState === "hidden") return;
    if (!l2.value) return P2([]), void K2();
    let s22 = a2.value;
    if (!s22.length) return void P2([]);
    let i3 = R2(x2, s22);
    if (e32 || !i3 || (function(e42, t42 = /* @__PURE__ */ new Date()) {
      let a3 = dt2(e42);
      return !a3 || u3(a3.updatedAt, t42);
    })(x2)) try {
      let e42 = await v(s22.join(",")), a3 = (function(e5 = [], t42 = []) {
        let a4 = Array.isArray(e5) ? e5 : Object.values(e5 || {}), l3 = /* @__PURE__ */ new Map();
        for (let s32 of a4) s32?.f12 && l3.set(`${s32.f13}.${s32.f12}`, s32);
        return t42.map((e6, t5) => {
          let s32 = l3.get(e6) || a4[t5];
          return s32 ? { secid: e6, name: bt(e6, s32.f14), price: s32.f2, pct: s32.f3 } : null;
        }).filter(Boolean);
      })(((t32 = e42?.data) == null ? void 0 : t32.diff) || [], s22);
      if (!a3.length) return;
      P2(a3), x2 = await (async function(e5) {
        let t42 = Array.isArray(e5) ? e5.filter(Boolean) : [];
        if (!t42.length) return null;
        let a4 = { list: t42, updatedAt: Date.now() };
        return await data_default.set(ut, a4), a4;
      })(a3);
    } catch {
    }
  }
  function K2() {
    y2 && (clearInterval(y2), y2 = null);
  }
  function V2() {
    let e32 = l2.value && (function(e42 = a2.value) {
      if (!e42.length) return !1;
      let t32 = e42.map(kt2), l3 = t32.includes("hk"), s22 = t32.includes("us"), i3 = t32.includes("cn");
      return i3 || l3 ? g({ hk: l3 && !i3 }) === "open" : !!s22 && p() === "open";
    })();
    e32 && !y2 ? y2 = setInterval(() => q({ force: !0 }), 15e3) : e32 || K2();
  }
  async function B2() {
    var e32, t32;
    let s22 = await gt();
    if (a2.value = s22.secids, l2.value = s22.visible, !s22.visible) return P2([]), void K2();
    let i3 = await (async function() {
      return dt2(await data_default.get(ut));
    })();
    if ((e32 = i3?.list) != null && e32.length && R2(i3, s22.secids)) x2 = i3, P2(i3.list);
    else if ((t32 = i3?.list) != null && t32.length) {
      let e42 = s22.secids.map((e5) => i3.list.find((t42) => t42.secid === e5)).filter(Boolean);
      e42.length && P2(e42), x2 = null;
    }
    await q(), V2();
  }
  async function U2(e32) {
    let t32 = await (async function(e42 = {}) {
      let t42 = await gt(), a3 = ht({ secids: e42.secids !== void 0 ? e42.secids : t42.secids, visible: e42.visible !== void 0 ? e42.visible : t42.visible });
      return await data_default.set(yt, a3), a3;
    })(e32);
    if (a2.value = t32.secids, l2.value = t32.visible, !t32.visible) return P2([]), void K2();
    x2 = null, await q({ force: !0 }), V2();
  }
  function W2() {
    document.visibilityState === "visible" && B2();
  }
  return fs(() => {
    B2(), I2 = setInterval(V2, 6e4), document.addEventListener("visibilitychange", W2), on(() => {
      r22.value && typeof ResizeObserver < "u" && (S2 = new ResizeObserver(() => O2()), S2.observe(r22.value)), O2();
    });
  }), Fr([l2, t22], () => on(O2)), hs(() => {
    K2(), I2 && clearInterval(I2), document.removeEventListener("visibilitychange", W2), S2?.disconnect(), S2 = null;
  }), (e32, d2) => (Zr(), eo("div", { class: "market-ticker-wrap relative flex min-h-7 min-w-0 flex-1 items-center self-stretch", onMouseenter: d2[3] || (d2[3] = (e42) => i22.value = !0), onMouseleave: d2[4] || (d2[4] = (e42) => i22.value = !1) }, [lo(Lt(VO), { visible: n2.value, "onUpdate:visible": d2[2] || (d2[2] = (e42) => n2.value = e42), placement: "bottom-start", width: 360, trigger: "click", "show-arrow": !1, offset: 8, "popper-class": "market-index-settings-popper" }, { reference: mn(() => [io("button", { type: "button", class: W(["market-ticker-setting d-flex-center absolute top-1/2 left-0 z-10 size-6 -translate-y-1/2 cursor-pointer rounded-md border border-(--d-card-border-color) bg-(--d-bg-panel) text-(--d-label-2) shadow-sm", { show: i22.value || n2.value }]), title: "指数设置", onClick: d2[0] || (d2[0] = sl(() => {
  }, ["stop"])) }, [lo(Lt(t4), { size: 14, "stroke-width": 2 })], 2)]), default: mn(() => [lo(Kt, { active: n2.value, secids: a2.value, "show-market": l2.value, onSave: U2, onClose: d2[1] || (d2[1] = (e42) => n2.value = !1) }, null, 8, ["active", "secids", "show-market"])]), _: 1 }, 8, ["visible"]), io("div", { ref_key: "tickerRef", ref: r22, class: W(["market-ticker flex min-h-7 min-w-0 flex-1 items-center overflow-hidden", { "no-mask": !c2.value }]) }, [l2.value && t22.value.length ? (Zr(), eo("div", { key: 0, ref_key: "trackRef", ref: u22, class: W(["market-ticker-track flex w-max", { paused: i22.value || n2.value, "is-static": !c2.value }]), style: V({ animationDuration: `${o22.value}s`, "--ticker-shift": "25%" }) }, [(Zr(!0), eo(Hr, null, Es(c2.value ? 4 : 1, (e42) => (Zr(), eo("div", { key: e42, class: "market-ticker-group flex shrink-0 items-center", "aria-hidden": e42 > 1 }, [(Zr(!0), eo(Hr, null, Es(t22.value, (t32) => (Zr(), eo("div", { key: `${e42}-${t32.secid}`, class: "market-ticker-item flex shrink-0 items-baseline gap-1.5 px-3 text-xs leading-5" }, [io("span", Bt, Z(t32.name), 1), io("span", { class: "font-semibold tabular-nums", style: V({ color: Lt(Bc)(t32.pct) }) }, Z(N2(t32.price)), 5), io("span", { class: "font-semibold tabular-nums", style: V({ color: Lt(Bc)(t32.pct) }) }, [yn(io("i", null, "+", 512), [[di, t32.pct > 0]]), uo(Z(L2(t32.pct)) + "% ", 1)], 4)]))), 128))], 8, Vt))), 128))], 6)) : po("", !0)], 2)], 32));
} }, [["__scopeId", "data-v-2cad1ad1"]]), Wt = { class: "stock-wrap relative flex h-full flex-col f13 select-text d-bg-page text-(--d-label)", "element-loading-text": "加载中..." }, Ht = { class: "d-label-2 my-1 flex items-center justify-between px-5" }, Xt = { class: "flex items-center gap-1" }, Yt = { class: "text-xs opacity-60" }, Zt = ["disabled"], Gt = { key: 0, class: "d-label-2 mt-16 px-4 text-center text-sm leading-6" }, Qt = ["data-stock-key", "onClick"], Jt = { class: "flex justify-between" }, ea = { class: "title flex-1" }, ta = { class: "inline-flex items-center gap-0.5" }, aa = { class: "d-label-2 f12" }, la = { class: "d-label-2 font-xs fr" }, sa = ["onClick"], ia = { key: 0, class: "stock-main-body flex min-h-0 h-full flex-1 flex-col" }, na = { class: "stock-detail-head flex shrink-0 items-start gap-5 pt-2" }, oa = { class: "stock-detail-price min-w-[280px] shrink-0" }, ca = { class: "flex items-center gap-2" }, ra = ["title"], ua = ["title"], da = { class: "mt-1 flex items-center gap-1.5" }, fa = { class: "d-label-2 text-sm" }, va = { key: 1, class: "d-label-2 text-[11px]" }, ma = { class: "text-[32px] font-bold leading-none" }, pa = { class: "mb-0.5 text-sm font-semibold leading-none" }, ka = { key: 0, class: "d-label-2 m-0 mt-1.5 text-xs" }, ba = { class: "stock-quote-grid min-w-0 flex-1 self-center py-0.5" }, xa = { class: "stock-quote-label d-label-2 shrink-0" }, ya = { key: 0, class: "stock-quote-sup" }, ha = { class: "stock-chart-stage mt-4 flex min-h-0 flex-1 flex-col" }, ga = { class: "stock-k-tabs mb-1 flex shrink-0 flex-wrap items-center gap-2" }, wa = ["onClick"], Da = { class: "stock-chart relative mt-1 min-h-[320px] flex-1" }, ja = { key: 1, class: "d-label-2 flex min-h-0 flex-1 items-center justify-center text-sm" }, _a = /* @__PURE__ */ o({ __name: "Content", setup(a2) {
  let y2 = r2(), S2 = Xn(() => t(() => import("./Trends-D0gRWpue-2E35EHWP.js"), ["assets/vendor-element-plus-WnleHQiG.css", "assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css", "assets/Trends-CYuM7zK5.css"])), z2 = Xn(() => t(() => import("./KLine-BwBwhHw5-KNFLARQY.js"), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css", "assets/KLine-B2rLtunQ.css"])), X2 = Et(null), ae2 = Et(!1), le2 = [{ label: "分时", value: "trends" }, { label: "日K", value: "101" }, { label: "周K", value: "102" }, { label: "月K", value: "103" }, { label: "季K", value: "104" }, { label: "年K", value: "106" }, { label: "5分", value: "5" }, { label: "15分", value: "15" }], ke2 = dt({ activeName: "trends", activeData: {}, stockOption: [], selfStockData: [], stockInfo: [], loading: !1, chartLoading: !1, timer: null }), De2 = $o(() => !!Hc(ke2.activeData)), je2 = $o(() => {
    let e22 = Hc(ke2.activeData);
    return !!e22 && y2.value.some((t22) => Hc(t22) === e22);
  }), _e2 = Et(!1), Ie2 = Et(!1), Ce2 = null, Se2 = null, Te2 = $o(() => De2.value ? Hc(ke2.activeData) : ""), $e2 = $o(() => d(ke2.activeData)), Me2 = $o(() => a(ke2.activeData) || ""), Re2 = $o(() => {
    var e22;
    let t22 = ke2.activeData, a3 = k((e22 = ke2.stockInfo) == null ? void 0 : e22[30], t22), l2 = N(t22) || (a3 ? "交易中" : "");
    if (!l2 && !a3) return "";
    let s32 = s(t22?.f13 ?? t22?.MktNum) ? "美东时间" : "北京时间";
    return [l2, a3, a3 ? s32 : ""].filter(Boolean).join(" ");
  }), Ke2 = $o(() => {
    var e22, t22, a3;
    let l2 = ke2.stockInfo || [], s32 = ((e22 = ke2.activeData) == null ? void 0 : e22.f13) ?? ((t22 = ke2.activeData) == null ? void 0 : t22.MktNum), i22 = +l2[4], n2 = (e32) => {
      let t32 = l2[e32];
      return t32 === 0 || t32 ? t32 : "";
    }, o22 = (e32) => {
      let t32 = +l2[e32];
      return Number.isFinite(t32) && Number.isFinite(i22) ? t32 > i22 ? Bc(1) : t32 < i22 ? Bc(-1) : "" : "";
    }, c2 = (e32) => {
      let t32 = +l2[e32];
      return Number.isFinite(t32) ? (s(s32) || o2(s32)) && e32 === 38 && t32 === 0 ? "-" : `${Number(t32).toFixed(2)}%` : "-";
    }, r22 = f(l2[6], m(ke2.activeData)), u22 = n2(37) ? `${n2(37)}亿` : "-", d2;
    if (l(ke2.activeData)) d2 = { n: "振幅", text: c2(43) };
    else {
      let e32 = l2[39] ?? ((a3 = ke2.activeData) == null ? void 0 : a3.f9), t32 = Number(e32);
      d2 = { n: "市盈", sup: "TTM", text: Number.isFinite(t32) && e32 !== "" && e32 != null ? t32.toFixed(2) : "-" };
    }
    return [{ n: "最高", text: n2(33) || "-", color: o22(33) }, { n: "昨收", text: n2(4) || "-" }, { n: "换手率", text: c2(38) }, { n: "最低", text: n2(34) || "-", color: o22(34) }, { n: "总市值", text: n2(45) ? `${n2(45)}亿` : "-" }, { n: "成交量", text: r22 }, { n: "今开", text: n2(5) || "-", color: o22(5) }, d2, { n: "成交额", text: u22 }];
  }), Ve2 = "", Be22 = null, Ue2 = null;
  function We2() {
    return ke2.selfStockData.length ? ke2.selfStockData : y2.value;
  }
  function He2() {
    Be22 && (clearInterval(Be22), Be22 = null), ke2.timer = null;
  }
  function Xe2() {
    let e22 = e(We2());
    e22 && !Be22 ? (Be22 = setInterval(() => {
      it2(), e(We2()) || He2();
    }, 15e3), ke2.timer = Be22) : e22 || He2();
  }
  function Ye2() {
    var e22;
    (e22 = document.querySelector(".stock-img-uploader .el-upload__input")) == null || e22.click();
  }
  function Ge2() {
    let e22 = ke2.selfStockData.map(Hc), t22 = [...y2.value].sort((t32, a3) => {
      let l2 = e22.indexOf(Hc(t32)), s32 = e22.indexOf(Hc(a3));
      return l2 === -1 ? 1 : s32 === -1 ? -1 : l2 - s32;
    });
    y2.value.splice(0, y2.value.length, ...t22), ot2(ke2.selfStockData);
  }
  function Qe2(e22, { keepActive: t22 = !1 } = {}) {
    let a3 = Hc(e22), l2 = y2.value.findIndex((e32) => Hc(e32) === a3);
    l2 >= 0 && y2.value.splice(l2, 1);
    let s32 = ke2.selfStockData.findIndex((e32) => Hc(e32) === a3);
    s32 >= 0 && ke2.selfStockData.splice(s32, 1), Hc(ke2.activeData) !== a3 || t22 || (ke2.activeData = ke2.selfStockData[0] || {}, De2.value ? lt2(!0) : (ke2.stockOption = [], ke2.stockInfo = [])), ot2(ke2.selfStockData);
  }
  function Je2() {
    if (!Hc(ke2.activeData)) return;
    if (je2.value) return void Qe2(ke2.activeData, { keepActive: !0 });
    if (y2.value.length >= u2) return void aO.warning(`最多添加 ${u2} 只自选股`);
    let e22 = qe(ke2.activeData);
    e22 && (y2.value.unshift(e22), le.emit(Ae), it2(!0));
  }
  function et2(e22) {
    if (!e22 || typeof e22 != "object") return;
    let t22 = Hc(e22);
    t22 && (y2.value.some((e32) => Hc(e32) === t22) ? (function(e32) {
      let t32 = ke2.selfStockData.find((t42) => Hc(t42) === e32);
      t32 && (ke2.activeData = t32, on(() => {
        var t42;
        (t42 = [...document.querySelectorAll("[data-stock-key]")].find((t5) => t5.getAttribute("data-stock-key") === e32)) == null || t42.scrollIntoView({ block: "nearest" });
      }), lt2(!0));
    })(t22) : (ke2.activeData = e22, lt2(!0)));
  }
  function tt2(e22) {
    if (!e22 || typeof e22 != "object") return;
    let t22 = qe(e22);
    if (!t22) return;
    let a3 = Hc(t22);
    a3 && !y2.value.some((e32) => Hc(e32) === a3) && (y2.value.length >= u2 ? aO.warning(`最多添加 ${u2} 只自选股`) : (y2.value.unshift(t22), le.emit(Ae), it2(!0)));
  }
  function at2() {
    if (!Hc(ke2.activeData)) return Promise.resolve();
    let e22 = Hc(ke2.activeData);
    return (t22 = X2, t22.value ? Promise.resolve(t22.value) : new Promise((e32) => {
      let a3 = !1, l2 = (t32) => {
        a3 || (a3 = !0, s32(), clearTimeout(i22), e32(t32));
      }, s32 = Fr(t22, (e42) => {
        e42 && l2(e42);
      }), i22 = setTimeout(() => l2(t22.value), 3e3);
    })).then((t32) => t32?.init(e22));
    var t22;
  }
  async function lt2(e22) {
    if (Hc(ke2.activeData)) {
      e22 && (ke2.chartLoading = !0);
      try {
        (function() {
          let e32 = Hc(ke2.activeData);
          if (!e32) return;
          let t22 = y2.value.find((t32) => Hc(t32) === e32) || ke2.selfStockData.find((t32) => Hc(t32) === e32) || ke2.activeData, a3 = t22.MktNum ?? t22.f13, l2 = t22.Code ?? t22.f12, s32 = i[a3];
          if (!s32 || !l2) return void (ke2.stockInfo = []);
          y(`${s32}${l2}`, e32).then((i22) => {
            if (Hc(ke2.activeData) !== e32) return;
            if (!i22 || typeof i22 != "string") return void (ke2.stockInfo = []);
            let n2 = (i22.includes('="') ? i22.split('="')[1] : i22).replace(/";?\s*$/, "").split("~");
            if (!n2[1] && !n2[3]) return void (ke2.stockInfo = []);
            let o22 = 1e4;
            ["hk", "us"].includes(s32) && (o22 = 1e8), n2[37] != null && n2[37] !== "" && (n2[37] = (Number(n2[37]) / o22).toFixed(2)), n2[44] != null && n2[44] !== "" && (n2[44] = Number(n2[44]).toFixed(2)), n2[45] != null && n2[45] !== "" && (n2[45] = Number(n2[45]).toFixed(2)), ke2.activeData = { ...ke2.activeData, f14: ke2.activeData.f14 || t22.Name || n2[1] || "", f12: ke2.activeData.f12 || t22.Code || l2, f13: ke2.activeData.f13 ?? t22.MktNum ?? a3, Name: ke2.activeData.Name || t22.Name || n2[1] || "", Code: ke2.activeData.Code || t22.Code || l2, MktNum: ke2.activeData.MktNum ?? t22.MktNum ?? a3, f2: n2[3] ?? ke2.activeData.f2, f3: n2[32] ?? ke2.activeData.f3, f4: n2[31] ?? ke2.activeData.f4 }, ke2.stockInfo = n2;
          }).catch(() => {
            Hc(ke2.activeData) === e32 && (ke2.stockInfo = []);
          });
        })(), ke2.activeName === "trends" ? await at2() : await (function() {
          if (!Hc(ke2.activeData)) return Promise.resolve();
          let e32 = { secid: Hc(ke2.activeData), klt: ke2.activeName };
          return A2(e32).then((e42) => {
            var t22;
            ke2.stockOption = ((t22 = e42.data) == null ? void 0 : t22.klines) || [];
          }).catch(() => {
            ke2.stockOption = [], aO.error("K线加载失败");
          });
        })();
      } finally {
        e22 && (ke2.chartLoading = !1);
      }
    }
  }
  function st2() {
    _e2.value || (_e2.value = !0, Ie2.value = !0, it2(!0), Se2 && clearTimeout(Se2), Se2 = setTimeout(() => {
      Ie2.value = !1, Se2 = null;
    }, 500), Ce2 && clearTimeout(Ce2), Ce2 = setTimeout(() => {
      _e2.value = !1, Ce2 = null;
    }, 2e3));
  }
  function it2(e22) {
    if (document.visibilityState === "hidden") return;
    if (!y2.value.length) return ke2.selfStockData = [], ot2([]), Xe2(), void (De2.value ? lt2(!!e22) : (ke2.activeData = {}, ke2.stockOption = [], ke2.stockInfo = []));
    let t22 = y2.value.map(Hc);
    e22 || i2({ list: ke2.selfStockData.length ? ke2.selfStockData : y2.value, firstInited: Ve2, codes: t22 }) ? v(t22.join(",")).then((a3) => {
      let l2 = a3.data.diff || [], s32 = {};
      for (let e32 of l2) {
        let t32 = Hc(e32);
        t32 && (s32[t32] = e32);
      }
      let i22 = y2.value.map((e32) => {
        let t32 = s32[Hc(e32)];
        return t32 ? { ...t32, SecurityType: e32.SecurityType ?? e32.securityType, SecurityTypeName: e32.SecurityTypeName || a(t32) } : null;
      }).filter(Boolean);
      if (ke2.selfStockData = i22, ot2(i22), A(ke2.activeData)) ke2.activeData = ke2.selfStockData[0] || {};
      else {
        let e32 = Hc(ke2.activeData), t32 = ke2.activeData.Code || ke2.activeData.f12, a4 = ke2.selfStockData.find((t42) => Hc(t42) === e32) || ke2.selfStockData.find((e42) => e42.f12 === t32);
        a4 && (ke2.activeData = a4);
      }
      e22 || (Ve2 = t22.join(",")), lt2(!!e22 || !X2.value), Xe2();
    }).catch(() => {
      e22 && aO.error("行情更新失败");
    }) : Xe2();
  }
  function nt2() {
  }
  function ot2(e22) {
    le.emit(Ae, Be(e22));
  }
  return Oe(!0), le.emit(Pe, !0), Ue2 = setInterval(Xe2, 6e4), Xe2(), u().then(() => Xe2()), hs(() => {
    Oe(!1), le.emit(Pe, !1), He2(), Ue2 && clearInterval(Ue2), Ce2 && clearTimeout(Ce2), Se2 && clearTimeout(Se2);
  }), it2(), (e22, a3) => {
    let l2 = PI;
    return yn((Zr(), eo("div", Wt, [lo(u4, { class: "pr-[84px]", title: "自选股", logo: "https://files.itab.link/icons/stock.svg" }, { default: mn(() => [lo(Ut)]), _: 1 }), lo(Lt(Um), { class: "stock-body min-h-0 flex-1", onClick: a3[3] || (a3[3] = (e32) => ae2.value = !1) }, { default: mn(() => [lo(Lt(Gm), { class: "stock-aside d-left-tabs flex h-full flex-col", width: "260px" }, { default: mn(() => [io("div", { class: "stock-search relative flex items-center gap-1 px-3 pt-3 pb-2", onClick: a3[1] || (a3[1] = sl(() => {
    }, ["stop"])) }, [lo(rt, { onSelect: et2, onAdd: tt2, onFocus: a3[0] || (a3[0] = (e32) => ae2.value = !1) }), po("", !0)]), io("div", Ht, [io("div", Xt, [a3[4] || (a3[4] = io("span", null, "自选", -1)), io("span", Yt, Z(Lt(y2).length) + "/" + Z(Lt(u2)), 1), io("button", { class: "stock-tool", type: "button", title: "手动刷新，交易时段自动更新", disabled: _e2.value, onClick: sl(st2, ["stop"]) }, [lo(Lt(kt), { size: 14, "stroke-width": 2, class: W({ "stock-tool-spin": Ie2.value }) }, null, 8, ["class"])], 8, Zt)]), io("button", { class: W(["flex cursor-pointer items-center gap-0.5 bg-transparent", { "text-(--primary-color)": ae2.value }]), type: "button", onClick: a3[2] || (a3[2] = sl((e32) => ae2.value = !ae2.value, ["stop"])) }, [lo(Lt(t3), { size: 14, "stroke-width": 2 }), a3[5] || (a3[5] = uo(" 编辑 "))], 2)]), lo(Lt(nd), { class: "min-h-0 flex-1" }, { default: mn(() => [Lt(y2).length ? po("", !0) : (Zr(), eo("div", Gt, [a3[6] || (a3[6] = uo(" 还没有自选 ")), a3[7] || (a3[7] = io("br", null, null, -1)), a3[8] || (a3[8] = uo(" 搜索可预览，在名称旁加入自选 ")), a3[9] || (a3[9] = io("br", null, null, -1)), io("span", { class: "cursor-pointer text-(--primary-color)", onClick: Ye2 }, "或识图导入")])), lo(Lt(we), { class: "d-scrollbar-hide px-2", animation: 200, list: ke2.selfStockData, itemKey: "f12", onEnd: Ge2 }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(ke2.selfStockData, (e32, t22) => (Zr(), eo("div", { key: Lt(Hc)(e32), "data-stock-key": Lt(Hc)(e32), class: W(["self-content-li relative rounded-xl px-3 py-2", { active: Lt(Hc)(ke2.activeData) === Lt(Hc)(e32) }]), onClick: (t32) => {
      return a4 = e32, ke2.activeData = a4, void lt2(!0);
      var a4;
    } }, [io("div", Jt, [io("div", ea, [io("p", { style: V(`width:${ae2.value ? 122 : 142}px`), class: "d-elip text-(--d-label) text-sm font-bold" }, Z(e32.f14), 5), io("span", ta, [Lt(d)(e32) ? (Zr(), eo("span", { key: 0, class: "rounded px-0.5 text-[10px] leading-4", style: V({ color: `rgb(${Lt(d)(e32).rgb})`, backgroundColor: `rgba(${Lt(d)(e32).rgb}, 0.14)` }) }, Z(Lt(d)(e32).text), 5)) : po("", !0), io("code", aa, Z(e32.f12), 1)])]), io("div", { class: "leading-5", style: V({ color: Lt(Bc)(e32.f3) }) }, [io("span", { class: "b flex items-center rounded-xl px-1", style: V({ backgroundColor: Lt(Uc)(e32.f3, 0.12) }) }, [lo(Lt($s), { size: 14, class: "mr-1" }, { default: mn(() => [e32.f3 > 0 ? (Zr(), to(Lt(e3), { key: 0 })) : e32.f3 < 0 ? (Zr(), to(Lt(n), { key: 1 })) : po("", !0)]), _: 2 }, 1024), yn(io("i", null, "+", 512), [[di, e32.f3 > 0]]), uo(" " + Z(e32.f3) + "%", 1)], 4), io("span", la, Z(e32.f2), 1)], 4), io("span", { title: "删除", class: W(["stock-del shrink-0", { active: ae2.value }]), onClick: sl((a4) => Qe2(e32, t22), ["stop"]) }, [lo(Lt(s2), { size: 12, "stroke-width": 2.5, color: "#fff" })], 10, sa)])], 10, Qt))), 128))]), _: 1 }, 8, ["list"])]), _: 1 })]), _: 1 }), lo(Lt(Zm), { class: "stock-main flex h-full min-h-0 flex-col overflow-hidden", style: { "--el-main-padding": "12px 16px 12px 16px" } }, { default: mn(() => {
      var e32, t22, a4, s32, i22, n2, o22, r22, u22, d2, x3, y3, N2, A22, $2, M2, L2;
      return [De2.value ? (Zr(), eo("div", ia, [io("div", na, [io("div", oa, [io("div", ca, [io("h2", { class: "d-elip m-0 max-w-[300px] text-(--d-label) text-2xl font-bold leading-7", title: ((e32 = ke2.activeData) == null ? void 0 : e32.f14) || ((t22 = ke2.activeData) == null ? void 0 : t22.Name) }, Z(((a4 = ke2.activeData) == null ? void 0 : a4.f14) || ((s32 = ke2.activeData) == null ? void 0 : s32.Name)), 9, ra), io("button", { type: "button", class: W(["stock-watch-btn d-bg-inset inline-flex shrink-0 items-center gap-0.5 rounded-full px-2 py-1 text-xs d-label-2 border border-(--d-card-border-color)", { on: je2.value }]), title: je2.value ? "取消自选" : "加入自选", onClick: sl(Je2, ["stop"]) }, [je2.value ? (Zr(), to(Lt(e4), { key: 0, size: 14, "stroke-width": 2 })) : (Zr(), to(Lt(s4), { key: 1, size: 14, "stroke-width": 2 })), uo(" " + Z(je2.value ? "已添加" : "加自选"), 1)], 10, ua)]), io("div", da, [$e2.value ? (Zr(), eo("span", { key: 0, class: "rounded px-1 text-[11px] leading-4", style: V({ color: `rgb(${$e2.value.rgb})`, backgroundColor: `rgba(${$e2.value.rgb}, 0.14)` }) }, Z($e2.value.text), 5)) : po("", !0), io("span", fa, Z(((i22 = ke2.activeData) == null ? void 0 : i22.f12) || ((n2 = ke2.activeData) == null ? void 0 : n2.Code)), 1), Me2.value ? (Zr(), eo("span", va, Z(Me2.value), 1)) : po("", !0)]), io("div", { class: "mt-1.5 flex items-end gap-2", style: V({ color: Lt(Bc)((o22 = ke2.activeData) == null ? void 0 : o22.f3) }) }, [io("span", ma, Z(((r22 = ke2.activeData) == null ? void 0 : r22.f2) ?? "-"), 1), io("span", pa, [yn(io("i", null, "+", 512), [[di, ((u22 = ke2.activeData) == null ? void 0 : u22.f3) > 0]]), uo(Z(((d2 = ke2.activeData) == null ? void 0 : d2.f4) ?? "-"), 1)]), io("span", { class: "mb-0.5 inline-flex items-center rounded-full px-1.5 py-0.5 text-xs font-semibold", style: V({ backgroundColor: Lt(Uc)((x3 = ke2.activeData) == null ? void 0 : x3.f3, 0.12) }) }, [lo(Lt($s), { size: 12, class: "mr-0.5" }, { default: mn(() => {
        var e42, t32;
        return [((e42 = ke2.activeData) == null ? void 0 : e42.f3) > 0 ? (Zr(), to(Lt(e3), { key: 0 })) : ((t32 = ke2.activeData) == null ? void 0 : t32.f3) < 0 ? (Zr(), to(Lt(n), { key: 1 })) : po("", !0)];
      }), _: 1 }), yn(io("i", null, "+", 512), [[di, ((y3 = ke2.activeData) == null ? void 0 : y3.f3) > 0]]), uo(" " + Z((N2 = ke2.activeData) == null ? void 0 : N2.f3) + "% ", 1)], 4)], 4), Re2.value ? (Zr(), eo("p", ka, Z(Re2.value), 1)) : po("", !0)]), io("div", ba, [(Zr(!0), eo(Hr, null, Es(Ke2.value, (e42) => (Zr(), eo("div", { class: "stock-quote-cell", key: e42.n }, [io("span", xa, [uo(Z(e42.n), 1), e42.sup ? (Zr(), eo("sup", ya, Z(e42.sup), 1)) : po("", !0)]), io("span", { class: "stock-quote-value b min-w-0 d-elip", style: V({ color: e42.color }) }, Z(e42.text), 5)]))), 128))])]), io("div", ha, [io("div", ga, [(Zr(), eo(Hr, null, Es(le2, (e42) => io("button", { key: e42.value, type: "button", class: W(["stock-k-tab", { active: ke2.activeName === e42.value }]), onClick: (t32) => {
        return a5 = e42.value, void (ke2.activeName !== a5 && (ke2.activeName = a5, lt2(!0)));
        var a5;
      } }, Z(e42.label), 11, wa)), 64))]), yn((Zr(), eo("div", Da, [ke2.activeName == "trends" ? (Zr(), to(Lt(S2), { key: 0, class: "stock-chart-inner", secid: Te2.value, market: ((A22 = ke2.activeData) == null ? void 0 : A22.f13) ?? (($2 = ke2.activeData) == null ? void 0 : $2.MktNum), ref_key: "trendsRef", ref: X2 }, null, 8, ["secid", "market"])) : (Zr(), to(Lt(z2), { key: 1, class: "stock-chart-inner", ref: "kLineRef", data: ke2.stockOption, klt: ke2.activeName, market: ((M2 = ke2.activeData) == null ? void 0 : M2.f13) ?? ((L2 = ke2.activeData) == null ? void 0 : L2.MktNum) }, null, 8, ["data", "klt", "market"]))])), [[l2, ke2.chartLoading]])])])) : (Zr(), eo("div", ja, " 搜索股票可预览，再加入自选 "))];
    }), _: 1 })]), _: 1 })])), [[l2, ke2.loading]]);
  };
} }, [["__scopeId", "data-v-d585fad6"]]);

// output/native-current/index-DwesjWaF.js
var p2 = { name: "appStock" }, m2 = Object.assign(p2, { setup: (p22) => (p3, m22) => (Zr(), to(F, { height: "660px", width: "1100px", glass: !1, openWindow: !0, "modal-class": "app-stock" }, { default: mn(() => [lo(_a)]), _: 1 })) });
export {
  m2 as default
};
/**
 * @license @tabler/icons-vue v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */

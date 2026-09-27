import {
  h as h2
} from "./chunk-HJ3AZTL2.js";
import {
  s as s3
} from "./chunk-ZA3776RS.js";
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
  u
} from "./chunk-TE7GR3OL.js";
import {
  F,
  t2 as t3
} from "./chunk-R77VKLDU.js";
import {
  c
} from "./chunk-UJCW7BUN.js";
import {
  s,
  t as t2
} from "./chunk-PR7QYEMZ.js";
import "./chunk-WGCOLTAW.js";
import {
  aO,
  ju,
  kk,
  nd
} from "./chunk-QX73FKBL.js";
import {
  e,
  gt,
  h,
  ht,
  kt
} from "./chunk-LEVEZLTX.js";
import "./chunk-5MDIDYN5.js";
import "./chunk-AFECQBGL.js";
import {
  O,
  f
} from "./chunk-YQ4PBQUM.js";
import {
  t
} from "./chunk-C332WR7G.js";
import "./chunk-C3WGXGFI.js";
import "./chunk-S7M5ZIRT.js";
import {
  I
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
  Z,
  Zr,
  dt,
  eo,
  fs,
  io,
  lo,
  mn,
  mo,
  on,
  po,
  qi,
  sl,
  to,
  uo,
  vs,
  ws,
  yn
} from "./chunk-E6JHFIG4.js";

// output/native-current/IconGripVertical-Dy0vKAby.js
var t4 = r("outline", "grip-vertical", "GripVertical", [["path", { d: "M8 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M8 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M8 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }], ["path", { d: "M14 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-3" }], ["path", { d: "M14 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-4" }], ["path", { d: "M14 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-5" }]]);

// output/native-current/index-DVMPqql-.js
var J = { class: "ts-card-head flex shrink-0 items-center" }, ee = ["src", "alt"], te = ["title"], ae = { class: "--d-label-2 text-[12px] font-normal" }, se = ["title", "onClick"], le = { key: 0, class: "--d-label-2 py-6 text-center text-[13px]" }, ie = ["href", "title", "onClick"], oe = { class: "ts-rank" }, re = { class: "ts-item-title d-elip min-w-0 flex-1" }, ne = { key: 1, class: "ts-grid-end" }, de = /* @__PURE__ */ o({ __name: "CardMode", props: { boards: { type: Array, default: () => [] }, total: { type: Number, default: 0 }, subscribeData: { type: Array, default: () => [] }, isSubscribeTab: Boolean, listMap: { type: Object, default: () => ({}) }, loadingMap: { type: Object, default: () => ({}) }, subscribedIds: { type: Array, default: () => [] } }, emits: ["scroll", "load-more", "sort-end", "subscribe", "item-click"], setup(e22, { expose: w2, emit: x2 }) {
  let M2 = e22, I2 = x2, j2 = Et(null), _2 = Et(null), C2 = null, S2 = (e3) => M2.subscribedIds.includes(e3), B2 = (e3) => M2.listMap[e3] || [];
  function T2(e3 = {}) {
    var t22;
    let a2 = typeof e3.scrollTop == "number" ? e3.scrollTop : ((t22 = e3.target) == null ? void 0 : t22.scrollTop) || 0;
    I2("scroll", a2);
  }
  function z2() {
    var e3;
    C2?.disconnect();
    let t22 = (e3 = j2.value) == null ? void 0 : e3.wrapRef;
    t22 && _2.value && (C2 = new IntersectionObserver((e4) => {
      e4.some((e5) => e5.isIntersecting) && I2("load-more");
    }, { root: t22, rootMargin: "180px" }), C2.observe(_2.value));
  }
  let A2 = $o(() => {
    var e3;
    return ((e3 = j2.value) == null ? void 0 : e3.wrapRef) || null;
  });
  return Fr([j2, _2], () => on(z2), { flush: "post", immediate: !0 }), vs(() => C2?.disconnect()), w2({ wrapRef: A2, resetScroll() {
    A2.value && (A2.value.scrollTop = 0);
  } }), (t22, a2) => {
    let s22 = kk, l2 = nd;
    return Zr(), to(l2, { ref_key: "scrollRef", ref: j2, class: "ts-body", onScroll: T2 }, { default: mn(() => [(Zr(), to(ws(e22.isSubscribeTab ? Lt(we) : "div"), mo({ class: "ts-grid" }, e22.isSubscribeTab ? { list: e22.subscribeData, itemKey: "id", animation: 300, handle: ".ts-card-drag", filter: ".ts-sub-btn, .ts-grid-end, .ts-grid-sentinel" } : {}, { onEnd: a2[1] || (a2[1] = (e3) => t22.$emit("sort-end")) }), { default: mn(() => [(Zr(!0), eo(Hr, null, Es(e22.boards, (i2) => (Zr(), eo("article", { key: i2.id, class: "ts-card" }, [io("div", J, [io("div", { class: W(["ts-card-drag flex min-w-0 flex-1 items-center", { grab: e22.isSubscribeTab }]) }, [io("img", { class: "ts-card-icon size-6 mr-2 rounded-lg object-cover", src: i2.icon, alt: i2.name }, null, 8, ee), io("h2", { class: "d-elip d-label m-0 min-w-0 flex-1", title: `${i2.name}${i2.type ? " · " + i2.type : ""}` }, [uo(Z(i2.name) + " ", 1), io("span", ae, Z(i2.type), 1)], 8, te)], 2), io("button", { type: "button", class: W(["ts-sub-btn", { on: S2(i2.id) }]), title: S2(i2.id) ? "取消订阅" : "订阅", onClick: sl((e3) => t22.$emit("subscribe", i2, S2(i2.id) ? "del" : "add"), ["stop"]) }, [S2(i2.id) ? (Zr(), to(Lt(e), { key: 0, size: 14, "stroke-width": 3 })) : (Zr(), to(Lt(h), { key: 1, size: 14, "stroke-width": 2.4 }))], 10, se)]), e22.loadingMap[i2.id] && !B2(i2.id).length ? (Zr(), to(s22, { key: 0, class: "px-4 pt-2 pb-4", rows: 8, animated: "" })) : (Zr(), to(l2, { key: 1, class: "ts-list", onWheel: a2[0] || (a2[0] = sl(() => {
    }, ["stop"])) }, { default: mn(() => [io("ul", null, [B2(i2.id).length ? po("", !0) : (Zr(), eo("li", le, " 暂无数据 ")), (Zr(!0), eo(Hr, null, Es(B2(i2.id), (e3, a3) => {
      return Zr(), eo("a", { key: `${i2.id}-${a3}`, class: "ts-item", href: e3.link, target: "_blank", title: e3.title, onClick: (a4) => t22.$emit("item-click", i2, e3) }, [io("span", oe, Z(e3.index), 1), io("span", re, Z(e3.title), 1), io("em", null, Z((s32 = e3.hotValue, s32 ? String(s32).replace(/热度/g, "").trim() : "")), 1)], 8, ie);
      var s32;
    }), 128)), a2[2] || (a2[2] = io("li", { class: "ts-list-end" }, "已经到最底部了", -1))])]), _: 2 }, 1024))]))), 128)), e22.boards.length < e22.total ? (Zr(), eo("div", { key: 0, ref_key: "sentinelRef", ref: _2, class: "ts-grid-sentinel" }, null, 512)) : (Zr(), eo("p", ne, "已经滚动到最底部了"))]), _: 1 }, 16))]), _: 1 }, 512);
  };
} }, [["__scopeId", "data-v-6ed93454"]]), ce = { class: "ts-list-layout" }, ue = { class: "ts-list-aside" }, pe = { key: 0, class: "--d-label-2 min-h-0 py-5 text-center text-[13px]" }, be = ["onClick"], me = ["src", "alt"], ve = { class: "d-elip d-cell text-left" }, fe = ["title", "onClick"], he = { key: 0, class: "ts-list-main" }, ye = { class: "ts-list-main-head flex items-center gap-2.5" }, ge = ["src", "alt"], ke = { class: "d-elip d-label m-0 min-w-0 flex-1 text-[16px] font-semibold" }, we2 = { key: 0, class: "--d-label-2 font-normal" }, xe = ["title"], Me = { key: 0, class: "--d-label-2 py-10 text-center text-[13px]" }, Ie = ["href", "title", "onClick"], je = { class: "ts-rank" }, _e = { class: "ts-item-title d-elip min-w-0 flex-1" }, Ce = /* @__PURE__ */ o({ __name: "ListMode", props: { keyword: { type: String, default: "" }, boards: { type: Array, default: () => [] }, subscribeData: { type: Array, default: () => [] }, activeBoard: { type: Object, default: null }, activeBoardId: { type: String, default: "" }, isSubscribeTab: Boolean, listMap: { type: Object, default: () => ({}) }, loadingMap: { type: Object, default: () => ({}) }, subscribedIds: { type: Array, default: () => [] } }, emits: ["select", "subscribe", "sort-end", "item-click"], setup(e22) {
  let t22 = e22, s22 = $o(() => t22.isSubscribeTab && !t22.keyword), l2 = $o(() => s22.value ? t22.subscribeData : t22.boards), i2 = (e3) => t22.subscribedIds.includes(e3), d2 = (e3) => t22.listMap[e3] || [];
  return (t32, a2) => {
    let u2 = nd, x2 = kk;
    return Zr(), eo("div", ce, [io("aside", ue, [l2.value.length ? (Zr(), to(u2, { key: 1, class: "ts-list-aside-scroll" }, { default: mn(() => [lo(Lt(we), { list: l2.value, "item-key": "id", animation: "300", handle: ".handle", disabled: !s22.value, onEnd: a2[1] || (a2[1] = (e3) => t32.$emit("sort-end")) }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(l2.value, (l3) => (Zr(), eo("div", { key: l3.id, class: W(["ts-list-board relative flex items-center w-full", { active: e22.activeBoardId === l3.id }]), onClick: (e3) => t32.$emit("select", l3) }, [s22.value ? (Zr(), eo("i", { key: 0, title: "拖动", class: "d-icon handle d-label-2 cursor-grab", onClick: a2[0] || (a2[0] = sl(() => {
    }, ["stop"])) }, [lo(Lt(t4), { size: 16 })])) : po("", !0), io("img", { class: "size-5.5 shrink-0 rounded-md object-cover", src: l3.icon, alt: l3.name }, null, 8, me), io("span", ve, Z(l3.name), 1), io("span", { class: W(["ts-sub-btn sm", { on: i2(l3.id) }]), title: i2(l3.id) ? "取消订阅" : "订阅", onClick: sl((e3) => t32.$emit("subscribe", l3, i2(l3.id) ? "del" : "add"), ["stop"]) }, [i2(l3.id) ? (Zr(), to(Lt(s2), { key: 0, size: 12, "stroke-width": 2.4 })) : (Zr(), to(Lt(h), { key: 1, size: 12, "stroke-width": 2.4 }))], 10, fe)], 10, be))), 128))]), _: 1 }, 8, ["list", "disabled"])]), _: 1 })) : (Zr(), eo("p", pe, " 无数据 "))]), e22.activeBoard ? (Zr(), eo("section", he, [io("div", ye, [io("img", { class: "size-7 shrink-0 rounded-lg object-cover", src: e22.activeBoard.icon, alt: e22.activeBoard.name }, null, 8, ge), io("h2", ke, [uo(Z(e22.activeBoard.name), 1), e22.activeBoard.type ? (Zr(), eo("span", we2, " · " + Z(e22.activeBoard.type), 1)) : po("", !0)]), io("button", { type: "button", class: W(["ts-sub-btn", { on: i2(e22.activeBoard.id) }]), title: i2(e22.activeBoard.id) ? "取消订阅" : "订阅", onClick: a2[2] || (a2[2] = (a3) => t32.$emit("subscribe", e22.activeBoard, i2(e22.activeBoard.id) ? "del" : "add")) }, [i2(e22.activeBoard.id) ? (Zr(), to(Lt(s2), { key: 0, size: 14, "stroke-width": 2.4 })) : (Zr(), to(Lt(h), { key: 1, size: 14, "stroke-width": 2.4 }))], 10, xe)]), e22.loadingMap[e22.activeBoard.id] && !d2(e22.activeBoard.id).length ? (Zr(), to(x2, { key: 0, class: "px-5 pt-2 pb-4", rows: 10, animated: "" })) : (Zr(), to(u2, { key: 1, class: "ts-list-main-scroll" }, { default: mn(() => [io("ul", null, [d2(e22.activeBoard.id).length ? po("", !0) : (Zr(), eo("li", Me, " 暂无数据 ")), (Zr(!0), eo(Hr, null, Es(d2(e22.activeBoard.id), (a3, s32) => {
      return Zr(), eo("a", { key: `${e22.activeBoard.id}-${s32}`, class: "ts-item is-row", href: a3.link, target: "_blank", title: a3.title, onClick: (s4) => t32.$emit("item-click", e22.activeBoard, a3) }, [io("span", je, Z(a3.index), 1), io("span", _e, Z(a3.title), 1), io("em", null, Z((l3 = a3.hotValue, l3 ? String(l3).replace(/热度/g, "").trim() : "")), 1)], 8, Ie);
      var l3;
    }), 128)), a2[3] || (a2[3] = io("li", { class: "ts-list-end" }, "已经到最底部了", -1))])]), _: 1 }))])) : po("", !0)]);
  };
} }, [["__scopeId", "data-v-2222d0b4"]]), Se = { class: "ts-manage-head" }, Be = { class: "flex min-w-0 items-center gap-2" }, Te = { class: "--d-label-2 f12" }, ze = { title: "拖动", class: "d-icon handle d-label-2 cursor-grab" }, $e = ["src", "alt"], De = { class: "d-elip d-cell" }, Ae = ["onClick"], We = ["src", "alt"], Le = ["title"], Re = { class: "--d-label-2 shrink-0 text-[11px] not-italic" }, Ke = ["title", "onClick"], Ee = /* @__PURE__ */ o({ __name: "ManagePanel", props: { open: Boolean, keyword: { type: String, default: "" }, subscribeData: { type: Array, default: () => [] }, boards: { type: Array, default: () => [] }, subscribeCount: { type: Number, default: 0 }, subscribedIds: { type: Array, default: () => [] } }, emits: ["close", "update:keyword", "subscribe", "sort-end"], setup(e22) {
  let t22 = e22, a2 = (e3) => t22.subscribedIds.includes(e3);
  return (t32, s22) => {
    let l2 = ju, i2 = nd;
    return Zr(), eo(Hr, null, [io("div", { class: W(["ts-manage-mask", { open: e22.open }]), onClick: s22[0] || (s22[0] = (e3) => t32.$emit("close")) }, null, 2), io("aside", { class: W(["ts-manage-panel", { open: e22.open }]) }, [io("div", Se, [io("div", Be, [s22[4] || (s22[4] = io("span", { class: "font-semibold" }, "管理订阅", -1)), io("span", Te, Z(e22.subscribeCount) + "/5", 1)]), io("button", { type: "button", class: "ts-manage-close", title: "关闭", onClick: s22[1] || (s22[1] = (e3) => t32.$emit("close")) }, [lo(Lt(t3), { size: 16, "stroke-width": 2.4 })])]), lo(l2, { "model-value": e22.keyword, placeholder: "搜索榜单", class: "mb-3", clearable: "", "onUpdate:modelValue": s22[2] || (s22[2] = (e3) => t32.$emit("update:keyword", e3)) }, { prefix: mn(() => [lo(Lt(e2), { class: "size-4", "stroke-width": 2 })]), _: 1 }, 8, ["model-value"]), s22[5] || (s22[5] = io("p", { class: "--d-label-2 mt-1 mb-2 text-xs" }, "已订阅 · 拖动排序", -1)), lo(Lt(we), { class: "mb-2", list: e22.subscribeData, "item-key": "id", animation: "300", handle: ".handle", onEnd: s22[3] || (s22[3] = (e3) => t32.$emit("sort-end")) }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(e22.subscribeData, (e3) => (Zr(), eo("div", { key: e3.id, class: "ts-manage-item" }, [io("i", ze, [lo(Lt(t4), { size: 16 })]), io("img", { class: "ts-manage-icon", src: e3.icon, alt: e3.name }, null, 8, $e), io("span", De, Z(e3.name), 1), io("button", { type: "button", class: "ts-manage-del", onClick: (a3) => t32.$emit("subscribe", e3, "del") }, " 取消 ", 8, Ae)]))), 128))]), _: 1 }, 8, ["list"]), s22[6] || (s22[6] = io("p", { class: "--d-label-2 mt-1 mb-2 text-xs" }, "全部榜单", -1)), lo(i2, { class: "ts-manage-list" }, { default: mn(() => [io("ul", null, [(Zr(!0), eo(Hr, null, Es(e22.boards, (e3) => (Zr(), eo("li", { key: e3.id, class: "ts-manage-item" }, [io("img", { class: "ts-manage-icon", src: e3.icon, alt: e3.name }, null, 8, We), io("span", { class: "d-elip d-cell", title: e3.name }, Z(e3.name), 9, Le), io("em", Re, Z(e3.category), 1), io("button", { type: "button", class: W(["ts-sub-btn sm", { on: a2(e3.id) }]), title: a2(e3.id) ? "取消订阅" : "订阅", onClick: (s32) => t32.$emit("subscribe", e3, a2(e3.id) ? "del" : "add") }, [a2(e3.id) ? (Zr(), to(Lt(e), { key: 0, size: 12, "stroke-width": 3 })) : (Zr(), to(Lt(h), { key: 1, size: 12, "stroke-width": 2.4 }))], 10, Ke)]))), 128))])]), _: 1 })], 2)], 64);
  };
} }, [["__scopeId", "data-v-74b0fb96"]]), Ve = { class: "topsearch relative flex h-full flex-col overflow-hidden d-bg-page" }, Oe = { class: "ts-toolbar flex items-center relative right-15" }, Pe = ["disabled"], Ue = ["title"], Fe = { class: "pointer-events-none absolute top-2 left-2 flex" }, Ge = ["onClick"], qe = { key: 2, class: "--d-label-2 absolute top-[180px] right-0 left-0 py-6 text-center text-[13px]" }, He = { name: "appTopsearch" }, Xe = o(Object.assign(He, { setup(d2) {
  let u2 = O(), $2 = dt({ keyWord: "", category: "我的订阅", hotType: [], listMap: {}, loadingMap: {}, loading: !0, subscribeData: [], showManage: !1, refreshing: !1, viewMode: f.get("topsearchViewMode") === "card" ? "card" : "list", activeBoardId: "", boardKeyword: "" }), D2 = $o(() => $2.category === "我的订阅"), A2 = $o(() => u2.value.topSearch.map((e22) => e22.id)), E2 = $o(() => [{ name: "我的订阅", id: "我的订阅" }, { name: "全部", id: "全部" }, ...I($2.hotType, "category").map((e22) => ({ name: e22.category, id: e22.category }))]), V2 = $o(() => $2.category === "我的订阅" ? $2.subscribeData.filter((e22) => e22 && e22.id) : $2.category !== "全部" ? $2.hotType.filter((e22) => e22.category === $2.category) : $2.hotType), O2 = Et(null), P2 = Et(null), U2 = Et(null), F2 = Et(!1), J2 = Et(8), ee2 = /* @__PURE__ */ new Set(), te2 = dt({ left: !1, right: !1, fade: !1 });
  function ae2() {
    var e22;
    return ((e22 = O2.value) == null ? void 0 : e22.wrapRef) || null;
  }
  let se2 = $o(() => V2.value.slice(0, J2.value)), le2 = $o(() => $2.boardKeyword ? V2.value.filter((e22) => e22.name.includes($2.boardKeyword) || (e22.type || "").includes($2.boardKeyword)) : V2.value), ie2 = $o(() => V2.value.find((e22) => e22.id === $2.activeBoardId) || le2.value[0] || null);
  function oe2(e22) {
    e22?.id && ($2.activeBoardId = e22.id, $e2(e22.id));
  }
  function re2() {
    let e22 = V2.value;
    e22.length ? e22.some((e3) => e3.id === $2.activeBoardId) || ($2.activeBoardId = e22[0].id) : $2.activeBoardId = "";
  }
  function ne2() {
    let e22 = ae2();
    return e22 ? (getComputedStyle(e22.querySelector(".ts-grid") || e22).gridTemplateColumns.split(" ").filter(Boolean).length || 4) * Math.max(1, Math.ceil(e22.clientHeight / 370) + 1) : 8;
  }
  function ce2() {
    J2.value = Math.min(V2.value.length || ne2(), ne2());
  }
  function ue2() {
    J2.value >= V2.value.length || (J2.value = Math.min(V2.value.length, J2.value + ne2()));
  }
  let pe2 = $o(() => $2.keyWord ? $2.hotType.filter((e22) => e22.name.includes($2.keyWord) || (e22.category || "").includes($2.keyWord)) : $2.hotType), be2 = (e22, t22) => {
  };
  function me2(e22) {
    if (!F2.value) return e22.preventDefault(), F2.value = !0, void on(() => {
      var e3;
      return (e3 = U2.value) == null ? void 0 : e3.focus({ preventScroll: !0 });
    });
    e22.target !== U2.value && e22.preventDefault();
  }
  function ve2() {
    $2.boardKeyword || (F2.value = !1);
  }
  function fe2() {
    $2.boardKeyword = "";
  }
  function he2(e22, t22) {
    $2.category = e22, (function(e3) {
      we22();
      let t32 = P2.value;
      if (!t32 || !e3) return;
      let a2 = t32.getBoundingClientRect(), s22 = e3.getBoundingClientRect(), l2 = 40, i2 = t32.scrollLeft;
      s22.right > a2.right - l2 ? i2 += s22.right - a2.right + e3.offsetWidth + 16 : s22.left < a2.left + l2 && (i2 += s22.left - a2.left - e3.offsetWidth - 16);
      let o2 = Math.max(0, t32.scrollWidth - t32.clientWidth);
      t32.scrollTo({ left: Math.max(0, Math.min(o2, i2)), behavior: "smooth" });
    })(t22?.currentTarget);
  }
  let ye2 = 0, ge2 = 0, ke2 = !1;
  function we22() {
    ye2 && cancelAnimationFrame(ye2), ye2 = 0, ke2 = !1;
  }
  function xe2(e22) {
    let t22 = P2.value;
    if (!t22) return;
    let a2 = Math.max(0, t22.scrollWidth - t22.clientWidth);
    ke2 || (ge2 = t22.scrollLeft), ge2 = Math.max(0, Math.min(a2, ge2 + (e22.deltaY || e22.deltaX))), ke2 || (ke2 = !0, Me2());
  }
  function Me2() {
    let e22 = P2.value;
    if (!e22) return void we22();
    let t22 = ge2 - e22.scrollLeft;
    if (Math.abs(t22) < 0.8) return e22.scrollLeft = ge2, we22(), void _e2();
    e22.scrollLeft += 0.2 * t22, _e2(), ye2 = requestAnimationFrame(Me2);
  }
  function Ie2(e22) {
    we22();
    let t22 = P2.value;
    t22 && t22.scrollBy({ left: e22 * Math.max(200, 0.55 * t22.clientWidth), behavior: "smooth" });
  }
  function je2(e22 = 0) {
    te2.fade = e22 > 4;
  }
  function _e2() {
    let e22 = P2.value;
    if (!e22) return te2.left = !1, void (te2.right = !1);
    te2.left = e22.scrollLeft > 2, te2.right = e22.scrollLeft + e22.clientWidth < e22.scrollWidth - 2;
  }
  function Se2() {
    u2.value.topSearch = $2.subscribeData.map((e22) => ({ id: e22.id, name: e22.name }));
  }
  let Be2 = (e22, t22) => {
    let a2 = "取消订阅";
    if (t22 == "add") {
      if (u2.value.topSearch.length > 4) return void aO.error("最多只能选择5条");
      u2.value.topSearch.push({ name: e22.name, id: e22.id }), a2 = "订阅成功";
    } else {
      if (u2.value.topSearch.length < 2) return void aO.error("至少选择1条");
      let t32 = u2.value.topSearch.findIndex((t42) => t42.id === e22.id);
      if (t32 < 0) return;
      u2.value.topSearch.splice(t32, 1);
    }
    aO.success(a2), Te2();
  };
  function Te2() {
    $2.subscribeData = A2.value.reduce((e22, t22) => {
      let a2 = $2.hotType.find((e3) => e3.id == t22);
      if (a2) return [...e22, a2];
      let s22 = u2.value.topSearch.find((e3) => e3.id === t22);
      if (!s22?.id) return e22;
      let l2 = $2.hotType.find((e3) => e3.name === s22.name);
      return [...e22, { ...l2 || {}, id: s22.id, name: s22.name }];
    }, []);
  }
  async function ze2() {
    return (await t(() => import("./cache-VMWPWM72.js"), [])).default;
  }
  async function $e2(e22, t22 = !1) {
    var a2, s22;
    if (e22 && (t22 || !((a2 = $2.listMap[e22]) != null && a2.length)) && !ee2.has(e22)) {
      ee2.add(e22);
      try {
        let a3 = `searchTopList_${e22}`, l2 = await ze2();
        if (!t22) {
          let t32 = await l2.getItem(a3);
          if (t32.data && ($2.listMap[e22] = t32.data), !t32.isExp && t32.data) return void ($2.loadingMap[e22] = !1);
        }
        (s22 = $2.listMap[e22]) != null && s22.length || ($2.loadingMap[e22] = !0);
        let i2 = (await s({ id: e22, size: 50 })).data || [];
        i2.length && (l2.set(a3, i2, 6e5), $2.listMap[e22] = i2);
      } finally {
        $2.loadingMap[e22] = !1, ee2.delete(e22);
      }
    }
  }
  async function De2(e22 = !1) {
    if ($2.viewMode === "list") return void ($2.activeBoardId && await $e2($2.activeBoardId, e22));
    let t22 = [...se2.value.filter((e3) => e3 && e3.id)], a2 = Array.from({ length: Math.min(6, t22.length) }, async () => {
      for (; t22.length; ) {
        let a3 = t22.shift();
        a3 && await $e2(a3.id, e22);
      }
    });
    await Promise.all(a2);
  }
  async function Ae2() {
    if ($2.refreshing) return;
    $2.refreshing = !0;
    let e22 = Date.now();
    try {
      await De2(!0);
    } finally {
      let t22 = 500 - (Date.now() - e22);
      t22 > 0 && await new Promise((e3) => setTimeout(e3, t22)), $2.refreshing = !1;
    }
  }
  return Fr(() => se2.value.map((e22) => e22 && e22.id).join(","), (e22) => {
    e22 && $2.viewMode !== "list" && De2();
  }), Fr(() => E2.value.length, () => on(_e2)), Fr(() => $2.viewMode, async (e22) => {
    f.set("topsearchViewMode", e22), J2.value = 8, await on();
    let t22 = ae2();
    t22 && (t22.scrollTop = 0), te2.fade = !1, re2(), ce2(), De2();
  }), Fr(() => $2.boardKeyword, (e22) => {
    e22 && (F2.value = !0, $2.category !== "全部" && ($2.category = "全部"));
  }), Fr(() => [$2.category, V2.value.length], async () => {
    J2.value = 8, await on();
    let e22 = ae2();
    e22 && (e22.scrollTop = 0), te2.fade = !1, re2(), ce2(), $2.viewMode === "list" && De2();
  }), fs(() => {
    on(_e2);
  }), vs(() => {
    we22();
  }), (async () => {
    let e22 = await ze2(), t22 = await e22.getItem("searchTopCategory");
    $2.hotType = t22.data || [], Te2(), $2.loading = !1, t22.isExp && t2().then((t32) => {
      let a2 = t32.data || [];
      a2.length && ($2.hotType = a2, e22.set("searchTopCategory", a2, 2592e5), Te2());
    });
  })(), (e22, t22) => (Zr(), to(F, { height: "660px", glass: !1, "modal-class": "app-topsearch" }, { default: mn(() => [io("div", Ve, [lo(u, { title: "热搜榜", logo: "https://files.itab.link/icons/topsearch.svg" }, { extra: mn(() => [io("div", Oe, [io("button", { class: "ts-tool", type: "button", title: "刷新", disabled: $2.refreshing, onClick: Ae2 }, [lo(Lt(kt), { size: 16, "stroke-width": 2, class: W({ "animate-spin": $2.refreshing }) }, null, 8, ["class"])], 8, Pe), io("button", { class: W(["ts-tool is-text", { active: $2.showManage }]), type: "button", onClick: t22[0] || (t22[0] = (e3) => $2.showManage = !$2.showManage) }, [lo(Lt(c), { size: 16, "stroke-width": 2 }), t22[8] || (t22[8] = uo(" 管理订阅 "))], 2), t22[9] || (t22[9] = io("i", { class: "ts-tool-split" }, null, -1)), io("button", { class: "ts-tool", type: "button", title: $2.viewMode === "list" ? "卡片模式" : "列表模式", onClick: t22[1] || (t22[1] = (e3) => $2.viewMode = $2.viewMode === "list" ? "card" : "list") }, [$2.viewMode === "list" ? (Zr(), to(Lt(h2), { key: 0, size: 16, "stroke-width": 2 })) : (Zr(), to(Lt(s3), { key: 1, size: 16, "stroke-width": 2 }))], 8, Ue)])]), _: 1 }), io("nav", { class: W(["ts-nav", { "is-scrolled": te2.fade }]) }, [io("button", { type: "button", class: W(["ts-nav-arrow is-left", { show: te2.left }]), onClick: t22[2] || (t22[2] = (e3) => Ie2(-1)) }, [lo(Lt(gt), { size: 16, "stroke-width": 2.4 })], 2), io("div", { ref_key: "navScrollRef", ref: P2, class: "ts-nav-list d-scrollbar-hide", onWheel: sl(xe2, ["prevent"]), onScroll: _e2 }, [io("div", { class: W(["relative z-10 h-8 shrink-0 overflow-hidden rounded-full border border-(--d-card-border-color) bg-(--d-bg-panel) text-(--d-label) transition-[width] duration-200", F2.value ? "cursor-text" : "cursor-pointer hover:text-(--primary-color)"]), style: V({ width: F2.value ? "140px" : "32px" }), onMousedown: me2 }, [io("span", Fe, [lo(Lt(e2), { size: 16, "stroke-width": 2 })]), yn(io("input", { ref_key: "navSearchRef", ref: U2, "onUpdate:modelValue": t22[3] || (t22[3] = (e3) => $2.boardKeyword = e3), class: W(["absolute inset-0 bg-transparent pl-8 text-[13px] outline-none placeholder:text-(--d-label-3)", [F2.value ? "" : "pointer-events-none", $2.boardKeyword ? "pr-8" : "pr-2.5"]]), placeholder: "搜索", onBlur: ve2 }, null, 34), [[qi, $2.boardKeyword]]), $2.boardKeyword ? (Zr(), eo("button", { key: 0, type: "button", class: "absolute top-2 right-2 z-10 flex cursor-pointer text-(--d-label) hover:text-(--primary-color)", title: "清空", onMousedown: t22[4] || (t22[4] = sl(() => {
  }, ["prevent"])), onClick: fe2 }, [lo(Lt(t3), { size: 16, "stroke-width": 2 })], 32)) : po("", !0)], 38), (Zr(!0), eo(Hr, null, Es(E2.value, (e3) => (Zr(), eo("button", { key: e3.id, type: "button", class: W(["ts-nav-item", { active: $2.category === e3.id }]), onClick: (t32) => he2(e3.id, t32) }, Z(e3.name), 11, Ge))), 128))], 544), io("button", { type: "button", class: W(["ts-nav-arrow is-right", { show: te2.right }]), onClick: t22[5] || (t22[5] = (e3) => Ie2(1)) }, [lo(Lt(ht), { size: 16, "stroke-width": 2.4 })], 2)], 2), $2.viewMode === "card" ? (Zr(), to(de, { key: 0, ref_key: "cardModeRef", ref: O2, boards: se2.value, total: V2.value.length, "subscribe-data": $2.subscribeData, "is-subscribe-tab": D2.value, "list-map": $2.listMap, "loading-map": $2.loadingMap, "subscribed-ids": A2.value, onScroll: je2, onLoadMore: ue2, onSortEnd: Se2, onSubscribe: Be2, onItemClick: be2 }, null, 8, ["boards", "total", "subscribe-data", "is-subscribe-tab", "list-map", "loading-map", "subscribed-ids"])) : (Zr(), to(Ce, { key: 1, keyword: $2.boardKeyword, boards: le2.value, "subscribe-data": $2.subscribeData, "active-board": ie2.value, "active-board-id": $2.activeBoardId, "is-subscribe-tab": D2.value, "list-map": $2.listMap, "loading-map": $2.loadingMap, "subscribed-ids": A2.value, onSelect: oe2, onSubscribe: Be2, onSortEnd: Se2, onItemClick: be2 }, null, 8, ["keyword", "boards", "subscribe-data", "active-board", "active-board-id", "is-subscribe-tab", "list-map", "loading-map", "subscribed-ids"])), V2.value.length || $2.loading ? po("", !0) : (Zr(), eo("p", qe, Z(D2.value ? "还没有订阅榜单，点击右上角「管理订阅」添加" : "该分类暂无榜单"), 1)), t22[10] || (t22[10] = io("footer", { class: "--d-label-2 h-[20px] shrink-0 text-center text-[11px] leading-[20px]", title: "本热搜榜单所陈列的热点信息采集自于互联网，我们不对数据源做任何处理，服务器也不会存储任何数据, 链接均跳转至原始网页地址访问. 如果侵犯您的权益,请与我联系,我会尽快处理。同时请大家自行甄别信息真伪,原始网站信息不代表本人及本产品观点.谢谢大家支持." }, " 热搜数据来自公开平台，实时聚合展示 ", -1)), lo(Ee, { open: $2.showManage, keyword: $2.keyWord, "onUpdate:keyword": t22[6] || (t22[6] = (e3) => $2.keyWord = e3), "subscribe-data": $2.subscribeData, boards: pe2.value, "subscribe-count": A2.value.length, "subscribed-ids": A2.value, onClose: t22[7] || (t22[7] = (e3) => $2.showManage = !1), onSubscribe: Be2, onSortEnd: Se2 }, null, 8, ["open", "keyword", "subscribe-data", "boards", "subscribe-count", "subscribed-ids"])])]), _: 1 }));
} }), [["__scopeId", "data-v-d304c28b"]]);
export {
  Xe as default
};
/**
 * @license @tabler/icons-vue v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */

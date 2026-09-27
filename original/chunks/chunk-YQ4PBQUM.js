import {
  t
} from "./chunk-C332WR7G.js";
import {
  Hn
} from "./chunk-C3WGXGFI.js";
import {
  values
} from "./chunk-S7M5ZIRT.js";
import {
  u
} from "./chunk-USGTF4JI.js";
import {
  Et,
  Fr,
  dt,
  ht,
  jt,
  ne,
  on
} from "./chunk-E6JHFIG4.js";

// output/native-current/stocksCache-CNvbf2yR.js
var e, t2 = Object.defineProperty, i = (e2, i2, n2) => ((e3, i3, n3) => i3 in e3 ? t2(e3, i3, { enumerable: !0, configurable: !0, writable: !0, value: n3 }) : e3[i3] = n3)(e2, typeof i2 != "symbol" ? i2 + "" : i2, n2), f = values, p = { lang: "", searchEngine: [{ key: "360", title: "360搜索", href: "https://www.so.com/s?q=" }, { key: "baidu", title: "百度", href: "https://www.baidu.com/s?&tn=15007414_23_dg&ie=utf-8&wd=" }, { key: "bing", title: "必应", href: "https://www.bing.com/search?q=" }], useSearch: "baidu", search: { show: !0, history: !1, height: 46, radius: 23, bgColor: 0.5, history: !1, translate: "", translateHide: !1, globalSearch: !0 }, theme: { mode: "light", system: !0, color: "#1890ff" }, sidebar: { placement: "left", autoHide: !1, width: 50, lastGroup: !1, mouseGroup: !0, opacity: 0.4 }, wallpaper: { mask: 0, blur: 0, type: 1, name: "", src: "https://files.itab.link/itab/defaultWallpaper/defaultWallpaper.webp", thumb: "https://files.itab.link/itab/defaultWallpaper/defaultWallpaper.webp?x-oss-process=image/resize,limit_1,w_220,h_120/quality,q_95", time: 0, source: "", switchBtn: !1 }, layout: { view: "widget", yiyan: !0 }, time: { weekBegin1: !0, show: !0, size: 70, color: "#fff", fontWeight: 400, font: "HarmonyOS_Sans", hour24: !0, sec: !1, month: "inline", week: "inline", lunar: "inline" }, open: { searchBlank: !0, iconBlank: !0 }, icon: { name: 1, nameSize: 12, nameColor: "#fff", startAnimation: !1, iconRadius: 18, iconSize: 60, iconX: 30, iconY: 30, xysync: !0, opactiy: 1, unit: "px", width: 1350, autoSort: !0 }, topSearch: [{ name: "百度", id: "Jb0vmloB1G" }, { name: "微博", id: "KqndgxeLl9" }, { name: "抖音", id: "DpQvNABoNE" }] }, m = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: p }, Symbol.toStringTag, { value: "Module" }));
function g(e2) {
  let t22, i2 = !1, n2 = ne(!0);
  return (...s2) => (i2 || (t22 = n2.run(() => e2(...s2)), i2 = !0), t22);
}
function b(e2, t22, i2 = {}) {
  let key = String(jt(e2)), initial = values.get(key), state = Et(initial ?? (typeof t22 == "function" ? t22() : t22)), receiving = !1;
  return Fr(state, (value) => {
    receiving || values.set(key, value);
  }, { deep: !0, flush: "sync" }), window.__nativeSession.subscribe((changed, value) => {
    changed === key && (receiving = !0, state.value = value === null ? null : JSON.parse(value), queueMicrotask(() => receiving = !1));
  }), state;
}
var S = f.get("baseConfig") || {}, M = f.get("navConfig") || [], I = (e = S.sidebar) != null && e.lastGroup ? f.get("menuActiveId") : M[0] && M[0].id, C = Et(I), E = (e2) => {
  C.value !== e2 && (f.set("menuActiveId", e2), C.value = e2, t(() => Promise.resolve().then(() => we), void 0).then((e3) => {
    var t22;
    return (t22 = e3.closeFolderDialog) == null ? void 0 : t22.call(e3);
  }).catch(() => {
  }));
}, _ = Et(f.get("app-openFolder") || !1), A = (e2) => {
  f.set("app-openFolder", e2), _.value = e2;
}, P = class _P {
  constructor(e2) {
    i(this, "cols", 0), i(this, "items", []), i(this, "itemMap", /* @__PURE__ */ new Map()), this.cols = e2, this.items = [], this.itemMap = /* @__PURE__ */ new Map();
  }
  add(e2) {
    let t22 = { ...e2 };
    return this.items.push(t22), this.itemMap.set(e2.id, t22), t22;
  }
  remove(e2) {
    let t22 = this.items.findIndex((t3) => t3.id === e2);
    t22 !== -1 && this.items.splice(t22, 1), this.itemMap.delete(e2);
  }
  get(e2) {
    return this.itemMap.get(e2);
  }
  getAll() {
    return [...this.items];
  }
  getAllMap() {
    return this.items.reduce((e2, t22) => (e2[t22.id] = t22, e2), {});
  }
  isOverlapping(e2, t22) {
    return e2.id !== t22.id && !(e2.x + e2.w <= t22.x || t22.x + t22.w <= e2.x || e2.y + e2.h <= t22.y || t22.y + t22.h <= e2.y);
  }
  getItemsInRect(e2, t22, i2, n2, s2) {
    let o2 = { id: s2, x: e2, y: t22, w: i2, h: n2 };
    return this.items.filter((e3) => this.isOverlapping(e3, o2));
  }
  isEmptyRect(e2, t22, i2, n2, s2) {
    return this.getItemsInRect(e2, t22, i2, n2, s2).length === 0;
  }
  move(e2, t22, i2) {
    let n2 = this.itemMap.get(e2);
    if (!n2) return [];
    if (n2.x === t22 && n2.y === i2) return [];
    let s2 = n2.x, o2 = n2.y, r2 = n2.w, l2 = n2.h;
    this.remove(e2);
    let a2 = this.getItemsInRect(t22, i2, n2.w, n2.h), c2 = { ...n2, x: t22, y: i2 };
    if (this.add(c2), a2.length === 0) return [c2];
    let u2 = t22 - s2, h2 = i2 - o2, d2 = [c2], f2 = values, p2 = /* @__PURE__ */ new Set([e2]), m2 = [...a2];
    for (; m2.length > 0; ) {
      let e3 = m2.shift();
      if (p2.has(e3.id)) continue;
      p2.add(e3.id), this.remove(e3.id);
      let t3 = this.findNearestPosition(e3.x, e3.y, e3.w, e3.h, u2, h2, f2), i3 = { ...e3, x: t3.x, y: t3.y };
      this.add(i3), d2.push(i3);
      let n3 = this.getItemsInRect(i3.x, i3.y, i3.w, i3.h);
      for (let s3 of n3) p2.has(s3.id) || m2.push(s3);
    }
    return d2;
  }
  findMovedFitPosition(e2, t22, i2, n2, s2, o2) {
    if (s2 > i2 || o2 > n2) return null;
    for (let r2 = t22; r2 <= t22 + n2 - o2; r2++) for (let t3 = e2; t3 <= e2 + i2 - s2; t3++) if (this.isEmptyRect(t3, r2, s2, o2)) return { x: t3, y: r2 };
    return null;
  }
  findNearestPosition(e2, t22, i2, n2, s2, o2, r2) {
    let l2 = this.getFlowDirections(s2, o2), a2 = Math.max(this.cols, this.getArea().y, 20) + i2 + n2;
    for (let c2 = 1; c2 <= a2; c2++) for (let { x: s3, y: o3 } of this.getRingCandidates(e2, t22, c2, l2)) if (s3 >= 1 && o3 >= 1 && s3 + i2 <= this.cols + 1 && this.isEmptyRect(s3, o3, i2, n2)) return { x: s3, y: o3 };
    if (r2) {
      let e3 = this.findMovedFitPosition(r2.x, r2.y, r2.w, r2.h, i2, n2);
      if (e3) return e3;
    }
    return this.findNearestEmptyPosition(e2, t22, i2, n2);
  }
  getFlowDirections(e2, t22) {
    if (Math.abs(e2) >= Math.abs(t22)) {
      if (e2 > 0) return [[-1, 0], [0, -1], [0, 1], [1, 0]];
      if (e2 < 0) return [[1, 0], [0, -1], [0, 1], [-1, 0]];
    } else {
      if (t22 > 0) return [[0, -1], [-1, 0], [1, 0], [0, 1]];
      if (t22 < 0) return [[0, 1], [-1, 0], [1, 0], [0, -1]];
    }
    return [[-1, 0], [0, -1], [1, 0], [0, 1]];
  }
  getRingCandidates(e2, t22, i2, n2) {
    let s2 = [], o2 = /* @__PURE__ */ new Set(), r2 = new Map(n2.map(([e3, t3], i3) => [`${e3},${t3}`, i3]));
    for (let l2 = 0; l2 <= i2; l2++) {
      let n3 = i2 - l2, a2 = [{ x: e2 + l2, y: t22 + n3, dx: 1, dy: 1 }, { x: e2 - l2, y: t22 + n3, dx: -1, dy: 1 }, { x: e2 + l2, y: t22 - n3, dx: 1, dy: -1 }, { x: e2 - l2, y: t22 - n3, dx: -1, dy: -1 }];
      for (let e3 of a2) {
        let t3 = `${e3.x},${e3.y}`;
        o2.has(t3) || (o2.add(t3), s2.push({ x: e3.x, y: e3.y, priority: r2.get(`${e3.dx},${e3.dy}`) ?? 99 }));
      }
    }
    return s2.sort((e3, t3) => e3.priority - t3.priority), s2;
  }
  clone() {
    let e2 = new _P(this.cols);
    return e2.itemMap = /* @__PURE__ */ new Map(), e2.items = this.items.map((t22) => {
      let i2 = { ...t22 };
      return e2.itemMap.set(i2.id, i2), i2;
    }), e2;
  }
  maxPlaceX(e2) {
    return Math.max(this.cols - Math.min(e2, this.cols) + 1, 1);
  }
  findFitPosition(e2, t22, i2 = 1, n2 = 1) {
    e2 = Math.min(e2, this.cols);
    let s2 = this.maxPlaceX(e2);
    for (let o2 = n2; ; o2++) for (let r2 = o2 === n2 ? i2 : 1; r2 <= s2; r2++) if (this.isEmptyRect(r2, o2, e2, t22)) return { x: r2, y: o2 };
  }
  findFitPositionFrom(e2, t22, i2, n2) {
    return this.findFitPosition(i2, n2, e2, t22);
  }
  findNearestEmptyPosition(e2, t22, i2, n2) {
    i2 = Math.min(i2, this.cols);
    let s2 = this.maxPlaceX(i2);
    e2 = Math.min(Math.max(+e2 || 1, 1), s2), t22 = Math.max(+t22 || 1, 1);
    let o2 = Math.max(this.getArea().y, t22) + n2, r2 = null, l2 = 1 / 0;
    for (let a2 = 1; a2 <= o2; a2++) for (let o3 = 1; o3 <= s2; o3++) {
      if (!this.isEmptyRect(o3, a2, i2, n2)) continue;
      let s3 = Math.abs(o3 - e2) + Math.abs(a2 - t22);
      (s3 < l2 || s3 === l2 && r2 && (a2 < r2.y || a2 === r2.y && o3 < r2.x)) && (r2 = { x: o3, y: a2 }, l2 = s3);
    }
    return r2 || this.findFitPosition(i2, n2);
  }
  slideLeftStep(e2) {
    let t22 = e2.x - 1;
    return !(t22 < 1 || !this.isEmptyRect(t22, e2.y, e2.w, e2.h, e2.id)) && (e2.x = t22, !0);
  }
  rangesOverlap(e2, t22, i2, n2) {
    return !(t22 <= i2 || n2 <= e2);
  }
  slideUpStep(e2, t22) {
    let i2 = e2.y - 1;
    if (i2 < 1) return !1;
    let n2 = this.maxPlaceX(e2.w), s2 = null;
    for (let o2 = 1; o2 <= n2; o2++) this.rangesOverlap(o2, o2 + e2.w, t22.x, t22.x + e2.w) && this.isEmptyRect(o2, i2, e2.w, e2.h, e2.id) && (s2 === null || Math.abs(o2 - e2.x) < Math.abs(s2 - e2.x) || Math.abs(o2 - e2.x) === Math.abs(s2 - e2.x) && o2 < s2) && (s2 = o2);
    return s2 !== null && (e2.x = s2, e2.y = i2, !0);
  }
  snapshotPos() {
    return this.items.reduce((e2, t22) => (e2[t22.id] = { x: t22.x, y: t22.y }, e2), {});
  }
  fit() {
    let e2 = this.snapshotPos();
    for (this.compactInPlace(); this.fillReadingOrderGaps(); ) this.compactInPlace();
    return this.items.filter((t22) => {
      let i2 = e2[t22.id];
      return i2 && (t22.x !== i2.x || t22.y !== i2.y);
    });
  }
  compactInPlace() {
    let e2 = !0, t22 = 0, i2 = Math.max(this.items.length * (this.cols + this.getArea().y + 2), 1);
    for (; e2 && t22 < i2; ) {
      e2 = !1, t22++;
      let i3 = this.snapshotPos();
      for (let t3 of [...this.items].sort((e3, t4) => e3.y - t4.y || e3.x - t4.x)) for (; this.slideUpStep(t3, i3[t3.id]); ) e2 = !0;
      for (let t3 of [...this.items].sort((e3, t4) => e3.x - t4.x || e3.y - t4.y)) for (; this.slideLeftStep(t3); ) e2 = !0;
    }
  }
  canPlaceItem(e2, t22, i2) {
    return t22 >= 1 && i2 >= 1 && t22 + e2.w <= this.cols + 1 && this.isEmptyRect(t22, i2, e2.w, e2.h, e2.id);
  }
  readingKey(e2, t22) {
    return t22 * (this.cols + 1) + e2;
  }
  lastOccupiedReadingKey() {
    let e2 = 0;
    for (let t22 of this.items) e2 = Math.max(e2, this.readingKey(t22.x + t22.w - 1, t22.y + t22.h - 1));
    return e2;
  }
  findNearestGapFiller(e2, t22) {
    let i2 = null, n2 = 1 / 0;
    for (let s2 of this.items) {
      if (s2.y < t22 || s2.y === t22 && s2.x <= e2 || !this.canPlaceItem(s2, e2, t22)) continue;
      let o2 = 100 * (Math.abs(s2.x - e2) + Math.abs(s2.y - t22)) - s2.w * s2.h;
      (o2 < n2 || o2 === n2 && i2 && (s2.y < i2.y || s2.y === i2.y && s2.x < i2.x)) && (i2 = s2, n2 = o2);
    }
    return i2;
  }
  fillReadingOrderGaps() {
    let e2 = !1, t22 = Math.max(this.items.length * (this.cols + this.getArea().y + 2), 1);
    for (let i2 = 0; i2 < t22; i2++) {
      let t3 = this.lastOccupiedReadingKey(), i3 = null, n2 = null;
      e: for (let e3 = 1; e3 <= this.getArea().y; e3++) for (let s2 = 1; s2 <= this.cols; s2++) {
        if (this.readingKey(s2, e3) >= t3) break e;
        if (this.isEmptyRect(s2, e3, 1, 1) && (n2 = this.findNearestGapFiller(s2, e3), n2)) {
          i3 = { x: s2, y: e3 };
          break e;
        }
      }
      if (!n2) break;
      n2.x = i3.x, n2.y = i3.y, e2 = !0;
    }
    return e2;
  }
  getArea() {
    let e2 = 1, t22 = 1;
    return this.items.forEach((i2) => {
      e2 = Math.max(e2, i2.x + i2.w - 1), t22 = Math.max(t22, i2.y + i2.h - 1);
    }), { x: e2, y: t22 };
  }
}, R = class _R {
  constructor(e2) {
    i(this, "pos", ""), i(this, "cols", {}), i(this, "col", -1), i(this, "w", 1), i(this, "h", 1), this.pos = String(e2 || ""), this.init();
  }
  get x() {
    var e2;
    return (e2 = this.cols[this.col]) == null ? void 0 : e2[0];
  }
  get y() {
    var e2;
    return (e2 = this.cols[this.col]) == null ? void 0 : e2[1];
  }
  isValid() {
    var e2, t22;
    return this.x && this.y && ((t22 = (e2 = this.cols) == null ? void 0 : e2[this.col]) == null ? void 0 : t22.length);
  }
  clear() {
    return this.cols = [], this;
  }
  setSize(e2, t22) {
    return this.w = +e2 || 1, this.h = +t22 || 1, this;
  }
  setCol(e2) {
    return this.col = +e2 || -1, this;
  }
  setPos(e2, t22) {
    return this.col > 0 && (this.cols[this.col] = [e2, t22]), this;
  }
  init() {
    String(this.pos || "").split(";").filter(Boolean).map((e2) => {
      let [t22, i2] = e2.split(":"), [n2, s2] = i2.split(",");
      this.cols[t22] = [+n2, +s2];
    });
  }
  clone() {
    return new _R(this).setSize(this.w, this.h);
  }
  toJSON() {
    return this.toString();
  }
  toString() {
    return Object.keys(this.cols).map((e2) => {
      var t22;
      if ((t22 = this.cols[e2]) != null && t22.length) return `${e2}:${this.cols[e2].join(",")}`;
    }).filter(Boolean).join(";");
  }
}, k = class {
  constructor(e2, t22 = {}) {
    i(this, "items"), i(this, "duration"), i(this, "easing"), i(this, "prevRects", /* @__PURE__ */ new WeakMap()), i(this, "timer"), this.items = e2, this.duration = t22.duration ?? 200, this.easing = t22.easing ?? "ease-out";
  }
  snapshot() {
    let e2 = document.querySelector(".drag-placeholder") || this.items.find((e3) => e3.classList.contains("drag-placeholder"));
    for (let t22 of this.items) {
      if (t22.classList.contains("dragging")) continue;
      let i2 = t22.classList.contains("drag-dragging") || t22.style.display === "none", n2 = i2 && e2 ? e2 : t22;
      if (n2 === t22 && i2) continue;
      let s2 = n2.getBoundingClientRect();
      s2.width < 1 || s2.height < 1 || this.prevRects.set(t22, { x: s2.left, y: s2.top });
    }
  }
  play() {
    for (let e2 of this.items) {
      if (e2.classList.contains("dragging")) continue;
      let t22 = this.prevRects.get(e2);
      if (!t22) continue;
      let i2 = e2.getBoundingClientRect(), n2 = t22.x - i2.left, s2 = t22.y - i2.top;
      Math.abs(n2) < 0.5 && Math.abs(s2) < 0.5 || e2.animate([{ transform: `translate(${n2}px, ${s2}px)` }, { transform: "translate(0, 0)" }], { duration: this.duration, easing: this.easing });
    }
  }
  destroy() {
    this.items.length = 0, clearTimeout(this.timer);
  }
}, O = g(() => b("baseConfig", p, { listenToStorageChanges: !1 })), j = ["1x1", "1x2", "2x1", "2x2", "2x4"], N = {}, z = O(), F = g(() => b("navConfig", [], { listenToStorageChanges: !0 })), T = Et(!1);
function L() {
  T.value = !1;
}
function D(e2) {
  var t22;
  let i2 = F(), n2 = i2.value.find((t3) => X(e2.id, t3.children)), s2 = X(e2.id, n2.children);
  if (s2) if (s2.folder) {
    if (s2.folder.id === ((t22 = e2.folder) == null ? void 0 : t22.id) && e2.index === s2.index) return;
    s2.folder.children.splice(s2.index, 1);
  } else {
    if (n2.id === C.value && e2.index === s2.index && !e2.folder) return;
    n2.children.splice(s2.index, 1);
  }
  let o2 = i2.value.find((e3) => e3.id === C.value);
  if (e2.folder) {
    let t3 = null, i3 = X(e2.folder.id, o2.children);
    if (i3) t3 = i3.app, t3.children.splice(e2.index, 0, s2.app);
    else {
      let i4 = e2.folder.children[0], r2 = X(i4.id, n2.children);
      r2 ? n2.children.splice(r2.index, 1, e2.folder) : (r2 = X(i4.id, o2.children), r2 && o2.children.splice(r2.index, 1, e2.folder)), t3 = e2.folder, t3.children.splice(e2.index, 0, s2.app);
    }
  } else o2.children.splice(e2.index, 0, s2.app);
  if (s2.folder) {
    let e3 = X(s2.folder.id, n2.children);
    s2.folder.children.length === 1 ? (s2.folder.children[0].pos = s2.folder.pos, n2.children.splice(e3.index, 1, s2.folder.children[0])) : s2.folder.children.length === 0 && n2.children.splice(e3.index, 1);
  }
}
function V() {
  let e2 = F().value.find((e3) => e3.id == C.value);
  if (!e2) return;
  let t22 = ne2(e2.children).fit();
  if (!t22.length) return;
  let i2 = document.querySelector(`#app-grid_${C.value} .app-grid`), n2 = i2 ? Array.from(i2.querySelectorAll(".app-item")).filter((e3) => !e3.classList.contains("drag-cloned") && !e3.classList.contains("drag-placeholder")) : [], s2 = n2.length ? new k(n2, { duration: 220, easing: "ease-out" }) : null;
  s2?.snapshot();
  let o2 = t22.reduce((e3, t3) => (e3[t3.id] = t3, e3), {});
  e2.children.forEach((e3) => {
    o2[e3.id] && e3.pos.setPos(o2[e3.id].x, o2[e3.id].y);
  }), s2 && on(() => s2.play());
}
function q() {
  var e2, t22;
  return ((t22 = (e2 = z.value) == null ? void 0 : e2.icon) == null ? void 0 : t22.autoSort) ?? !0;
}
function J() {
  return q() ? "dense" : "sparse";
}
function U(e2) {
  if (!e2?.length || !te.value.column) return;
  let t22 = new P(te.value.column);
  e2.forEach((e3) => {
    var i2, n2;
    e3.pos && typeof e3.pos.setPos == "function" || ee(e3);
    let s2 = ((i2 = e3.pos) == null ? void 0 : i2.w) || Z(e3.size).w, o2 = ((n2 = e3.pos) == null ? void 0 : n2.h) || Z(e3.size).h, r2 = t22.findFitPosition(s2, o2);
    t22.add({ id: e3.id, x: r2.x, y: r2.y, w: s2, h: o2 }), e3.pos.setCol(te.value.column).setPos(r2.x, r2.y);
  });
}
function G(e2, t22) {
  t22 ? (function(e3) {
    e3?.length && e3.sort((e4, t3) => {
      var i2, n2, s2, o2;
      let r2 = ((i2 = e4.pos) == null ? void 0 : i2.y) || 0, l2 = ((n2 = t3.pos) == null ? void 0 : n2.y) || 0;
      return r2 !== l2 ? r2 - l2 : (((s2 = e4.pos) == null ? void 0 : s2.x) || 0) - (((o2 = t3.pos) == null ? void 0 : o2.x) || 0);
    });
  })(e2) : U(e2);
}
function X(e2, t22) {
  let i2 = null, n2 = -1, s2 = null;
  return t22.some((t3, o2) => {
    var r2;
    if (t3.id === e2) return i2 = t3, n2 = o2, !0;
    if ((r2 = t3.children) != null && r2.length) {
      let o3 = X(e2, t3.children);
      if (o3) return s2 = t3, i2 = o3.app, n2 = o3.index, !0;
    }
  }), i2 ? { app: i2, folder: s2, index: n2 } : null;
}
function W(e2) {
  let t22 = F(), i2 = null;
  return t22.value.some((t3) => {
    let n2 = X(e2, t3.children);
    if (n2) return i2 = n2.app, !0;
  }), i2;
}
function Z(e2 = "1x1") {
  if (j.includes(e2) || (e2 = "1x1"), N[e2]) return N[e2];
  let [t22, i2] = e2.split("x").map((e3) => +e3 || 1);
  return N[e2] = { w: i2, h: t22 }, { w: i2, h: t22 };
}
function ee(e2) {
  j.includes(e2.size) || (e2.size = "1x1");
  let { w: t22, h: i2 } = Z(e2.size);
  e2.pos = new R(e2.pos), e2.pos.setSize(t22, i2);
}
var te = Et({}), ie = Hn(function() {
  let e2 = z.value.icon;
  if (!e2) return;
  let t22 = e2.iconRadius, i2 = e2.iconSize, n2 = e2.iconX, s2 = e2.iconY, o2 = document.body.clientWidth, r2 = Math.floor((e2.unit == "px" ? o2 > e2.width ? e2.width : o2 : o2 * parseInt(e2.width) / 100) - 2 * (u ? 20 : 60));
  if (e2.unit === "px" && !u && o2 < e2.width) {
    let r3 = o2 / e2.width;
    r3 > 1 ? r3 = 1 : r3 < 0.8 && (r3 = 0.8), t22 = e2.iconRadius * r3, i2 = e2.iconSize * r3, n2 = e2.iconX * r3, s2 = e2.iconY * r3;
  }
  o2 < 568 && i2 > 60 && (i2 = 60, n2 = 30, s2 = 30);
  let l2 = Math.max(Math.floor((r2 + s2) / (i2 + s2)), 4);
  te.value = { column: l2, radius: t22, size: i2, x: s2, y: n2, width: i2 * l2 + s2 * (l2 - 1) + "px", gridTemplateColumns: `repeat(${l2}, ${i2}px)`, gridAutoRows: `${i2}px` };
}, 300, { trailing: !0, leading: !0 });
function ne2(e2) {
  let t22 = new P(te.value.column);
  e2.forEach((e3) => {
    e3.pos instanceof R || ee(e3);
    let i3 = e3.pos.clone().setCol(te.value.column);
    if (i3.isValid() && t22.isEmptyRect(i3.x, i3.y, i3.w, i3.h)) t22.add({ id: e3.id, x: i3.x, y: i3.y, w: i3.w, h: i3.h });
    else {
      let n2 = i3.isValid() ? t22.findNearestEmptyPosition(i3.x, i3.y, i3.w, i3.h) : t22.findFitPosition(i3.w, i3.h);
      t22.add({ id: e3.id, x: n2.x, y: n2.y, w: i3.w, h: i3.h });
    }
  });
  let i2 = t22.getAllMap();
  return e2.forEach((e3) => {
    !i2[e3.id] || te.value.column == e3.pos.col && e3.pos.x == i2[e3.id].x && e3.pos.y == i2[e3.id].y || e3.pos.setCol(te.value.column).setPos(i2[e3.id].x, i2[e3.id].y);
  }), t22;
}
Fr(() => z.value.icon, ie, { deep: !0 }), ie(), window.addEventListener("resize", ie);
var re = class {
  constructor() {
    this.eventCollection = {};
  }
  on(e2, t22) {
    this.eventCollection[e2] || (this.eventCollection[e2] = []), this.eventCollection[e2].push(t22);
  }
  emit(e2, ...t22) {
    this.eventCollection[e2] && this.eventCollection[e2].forEach((e3) => {
      e3(...t22);
    });
  }
  off(e2, t22) {
    this.eventCollection[e2] && (t22 ? this.eventCollection[e2] = this.eventCollection[e2].filter((e3) => e3 !== t22) : delete this.eventCollection[e2]);
  }
}, le = new re(), ae = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, EventBus: re, default: le }, Symbol.toStringTag, { value: "Module" })), ue = ht({ visible: !1, tab: "", data: null }), he = dt({ dragging: !1 }), de = dt({ visible: !1, target: null, source: null, folder: null }), fe = (e2) => {
  xe("/add"), ue.visible = !0, ue.data = e2;
}, pe = ht({ visible: !1, active: 2, source: "" }), me = dt({ visible: !1, component: "", type: "", data: {}, row: {} }), ge = dt({ enableV2: !0 }), ve = (e2, t22 = !1) => {
  xe("/app"), me.visible = !0, me.component = e2.component, me.insetType = e2.insetType || "component", me.iframeSrc = e2.iframeSrc, me.isEdit = t22, me.row = e2;
};
function xe(e2) {
  window.location.hash = "", u && (window.location.hash = e2);
}
window.addEventListener("hashchange", (e2) => {
  window.location.hash.slice(1) || (me.visible = !1, ue.visible = !1);
});
var we = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, closeFolderDialog: function() {
  de.visible = !1, de.folder = null, de.target = null, de.source = null, t(() => import("./draggable-DWw5WS1c-PJSEJECD.js"), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]).then((e2) => {
    e2.clearFolderHoverState();
  });
}, dialogApp: me, dialogIcon: ue, draggingState: he, foldingData: de, notesSettings: ge, setDialogApp: ve, setDialogIcon: fe, settingHandle: pe }, Symbol.toStringTag, { value: "Module" }));
function be() {
  let e2 = location.search;
  if (!e2) return {};
  let t22 = e2.slice(1).split("&"), i2 = {};
  return t22.forEach((e3) => {
    let t3 = e3.split("=");
    i2[t3[0]] = t3[1];
  }), i2;
}
function Se(e2) {
  if (!e2) return {};
  e2 = e2[0] == "?" ? e2.slice(1) : e2;
  let t22 = {};
  return e2.split("&").forEach((e3) => {
    let i2 = e3.split("=");
    i2[0] && (t22[i2[0]] = decodeURIComponent(i2[1]));
  }), t22;
}
function Me(e2, t22) {
  let i2 = e2.indexOf("#"), n2 = "";
  i2 !== -1 && (n2 = e2.slice(i2), e2 = e2.slice(0, i2));
  let s2 = e2.indexOf("?");
  if (s2 === -1) return e2 + n2;
  let o2 = e2.slice(0, s2), r2 = e2.slice(s2 + 1).split("&").filter((e3) => {
    if (!e3) return !1;
    let i3 = e3.split("=")[0];
    return decodeURIComponent(i3) !== t22;
  }).join("&");
  return r2 ? `${o2}?${r2}${n2}` : `${o2}${n2}`;
}
function Ie(e2, t22, i2) {
  if (!e2) return e2;
  let n2 = e2.indexOf("#"), s2 = "";
  n2 !== -1 && (s2 = e2.slice(n2), e2 = e2.slice(0, n2));
  let o2 = e2.indexOf("?");
  if (o2 === -1) return e2 + `?${t22}=${encodeURIComponent(i2)}` + s2;
  let r2 = e2.slice(0, o2), l2 = e2.slice(o2 + 1).split("&").filter((e3) => {
    if (!e3) return !1;
    let i3 = e3.split("=")[0];
    return decodeURIComponent(i3) !== t22;
  });
  l2.push(`${t22}=${encodeURIComponent(i2)}`);
  let a2 = l2.join("&");
  return a2 ? `${r2}?${a2}${s2}` : `${r2}${s2}`;
}
function Ce(e2) {
  return e2 && e2.split("#")[0].split("?")[0];
}
function Ee(e2) {
  return Array.isArray(e2) ? e2 : [];
}
var _e = 3, Ae = "app-stock-icon", Pe = "app-stock-open", Re = !1;
function ke() {
  return Re;
}
function Oe(e2) {
  return Re = !!e2, Re;
}
var je = { list: [], updatedAt: null };
function $e(e2) {
  if (!e2 || typeof e2 != "object") return null;
  let t22 = e2.f12 ?? e2.Code, i2 = e2.f13 ?? e2.MktNum;
  return t22 == null || t22 === "" || i2 == null || i2 === "" ? null : { f12: t22, f13: i2, f14: e2.f14 ?? e2.Name ?? "", f2: e2.f2, f3: e2.f3 };
}
function Ne(e2) {
  return (Array.isArray(e2) ? e2 : []).map($e).filter(Boolean).slice(0, 3);
}
function ze(e2) {
  if (!e2 || typeof e2 != "object" || Array.isArray(e2)) return { ...je };
  let t22 = Ne(e2.list), i2 = Number(e2.updatedAt);
  return { list: t22, updatedAt: Number.isFinite(i2) ? i2 : null };
}
var Fe = g(() => b("stocksCache", { ...je }, { listenToStorageChanges: !0 }));
function Te(e2) {
  return ze(e2);
}
function Le() {
  return ze(Fe().value);
}
function Be(e2) {
  let t22 = Ne(e2);
  return Fe().value = { list: t22, updatedAt: t22.length ? Date.now() : null }, t22;
}

export {
  f,
  p,
  m,
  g,
  b,
  C,
  E,
  _,
  A,
  P,
  R,
  k,
  O,
  F,
  T,
  L,
  D,
  V,
  q,
  J,
  U,
  G,
  X,
  W,
  Z,
  ee,
  te,
  ne2 as ne,
  re,
  le,
  ae,
  ue,
  he,
  de,
  fe,
  pe,
  me,
  ge,
  ve,
  we,
  be,
  Se,
  Me,
  Ie,
  Ce,
  Ee,
  _e,
  Ae,
  Pe,
  ke,
  Oe,
  Fe,
  Te,
  Le,
  Be
};

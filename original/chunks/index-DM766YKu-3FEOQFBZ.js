import {
  e as e2
} from "./chunk-QQK7L6ZV.js";
import {
  a
} from "./chunk-K2FE3PP4.js";
import {
  F,
  t2 as t
} from "./chunk-R77VKLDU.js";
import {
  o as o2,
  s
} from "./chunk-RRQUHEAR.js";
import {
  e
} from "./chunk-TTG6GZ54.js";
import "./chunk-WGCOLTAW.js";
import {
  $s,
  Hy,
  Ky,
  aO,
  bw,
  ju,
  jy
} from "./chunk-QX73FKBL.js";
import {
  Ad,
  Ct,
  Id,
  Pd,
  Td,
  yt
} from "./chunk-LEVEZLTX.js";
import "./chunk-5MDIDYN5.js";
import {
  V,
  u
} from "./chunk-AFECQBGL.js";
import "./chunk-YQ4PBQUM.js";
import "./chunk-C332WR7G.js";
import {
  Hn
} from "./chunk-C3WGXGFI.js";
import "./chunk-S7M5ZIRT.js";
import {
  S
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
  H,
  Hr,
  Lt,
  Ns,
  Pr,
  W,
  Z,
  Zr,
  co,
  eo,
  fs,
  io,
  lo,
  mn,
  on,
  po,
  qi,
  to,
  uo,
  vs,
  yn
} from "./chunk-E6JHFIG4.js";

// output/native-current/IconHistory-jhA7QrIK.js
var a2 = r("outline", "history", "History", [["path", { d: "M12 8l0 4l2 2", key: "svg-0" }], ["path", { d: "M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5", key: "svg-1" }]]);

// output/native-current/Content-BYGd8DLC.js
// 翻译弹窗运行在独立 iframe 中，历史记录不能依赖其他组件注册日期插件。
u.extend(V);
var X = class {
  constructor() {
    this.synth = window.speechSynthesis, this.utterance = null, this.voices = [], this.isSupported = "speechSynthesis" in window, this.speaking = !1, this.isSupported && (this._loadVoices(), this.synth.onvoiceschanged !== void 0 && this.synth.addEventListener("voiceschanged", () => this._loadVoices()));
  }
  _loadVoices() {
    this.voices = this.synth.getVoices();
  }
  getVoicesByLang(e22) {
    return this.voices.filter((t2) => t2.lang.toLowerCase().startsWith(e22.toLowerCase()));
  }
  getAvailableLanguages() {
    return [...new Set(this.voices.map((e22) => e22.lang))].sort();
  }
  speak({ text: e22, lang: t2 = "zh-CN", rate: a22 = 1, pitch: l2 = 1, volume: s2 = 1, onEnd: o22, onError: n2 }) {
    if (!this.isSupported) return !1;
    this.stop(), this.utterance = new SpeechSynthesisUtterance(e22), this.utterance.lang = t2, this.utterance.rate = a22, this.utterance.pitch = l2, this.utterance.volume = s2, this.speaking = !0;
    let i2 = this.getVoicesByLang(t2)[0];
    return i2 && (this.utterance.voice = i2), this.utterance.addEventListener("end", () => {
      o22 && o22(), this.speaking = !1;
    }), this.utterance.addEventListener("error", () => {
      n2 && n2(), this.speaking = !1;
    }), this.synth.speak(this.utterance), !0;
  }
  pause() {
    this.isSupported && this.synth.speaking && !this.synth.paused && this.synth.pause();
  }
  resume() {
    this.isSupported && this.synth.paused && this.synth.resume();
  }
  stop() {
    this.isSupported && this.synth.cancel();
  }
}, Y = { class: "flex items-center justify-between border-b px-6 py-5 d-main", style: { "border-color": "var(--dividing-line)" } }, Z2 = { class: "flex-1 overflow-hidden px-0 py-5 flex w-full" }, M = { id: "history-panel", class: "flex flex-col overflow-hidden w-full d-main" }, Q = { class: "relative block shrink-0 grow-0 mx-6 pt-0.5" }, J = { key: 0, class: "mt-5 flex items-center justify-between shrink-0 grow-0 mx-6" }, K = { key: 1, id: "history-list", class: "mt-1 space-y-2.5 flex flex-col gap-2 flex-auto overflow-auto px-6 py-2" }, ee = ["onClick"], te = { class: "block d-main text-[14px] font-semibold" }, ae = { class: "d-sub block text-[13px]" }, le = { class: "mt-2 block text-[11px] font-medium text-cyan-700" }, se = { key: 2, id: "history-empty", class: "py-16 text-center" }, oe = { __name: "history", props: Ns({ list: { type: Array } }, { modelValue: {}, modelModifiers: {} }), emits: Ns(["clear", "select"], ["update:modelValue"]), setup(l2, { emit: s2 }) {
  u.locale("zh-cn");
  let o22 = l2, n2 = s2, k2 = Pr(l2, "modelValue"), _2 = Et(""), j2 = $o(() => _2.value ? o22.list.filter((e22) => e22.text.toLowerCase().includes(_2.value.toLowerCase()) || e22.transText.toLowerCase().includes(_2.value.toLowerCase())) : o22.list);
  return (l3, s3) => {
    let r2 = $s, u2 = ju, d2 = bw;
    return Zr(), eo(Hr, null, [io("div", { class: W(["absolute inset-0 z-20 bg-slate-950/15 backdrop-blur-[2px] transition-opacity duration-300", { "translate-x-[150%]": !k2.value }]), onClick: s3[0] || (s3[0] = (e22) => k2.value = !1) }, null, 2), io("aside", { role: "dialog", "aria-modal": "true", "aria-hidden": "false", "aria-labelledby": "drawer-title", class: W(["absolute right-0 top-0 z-30 flex h-full w-[360px] flex-col bg-(--el-bg-color) transition-transform duration-300 ease-out overflow-hidden", { "translate-x-[150%]": !k2.value }]) }, [io("header", Y, [s3[4] || (s3[4] = io("div", { class: "mt-4" }, [io("h2", { id: "drawer-title", class: "mt-0.5 text-[24px] font-semibold tracking-normal" }, "历史记录")], -1)), io("button", { type: "button", "data-close-drawer": "", class: "grid size-10 bg-(--bg-card) place-items-center rounded-full shadow-sm transition cursor-pointer d-main", title: "关闭", onClick: s3[1] || (s3[1] = (e22) => k2.value = !1) }, [lo(r2, { size: 20 }, { default: mn(() => [lo(Lt(t))]), _: 1 })])]), io("div", Z2, [io("section", M, [io("div", Q, [lo(u2, { style: { "--bg-input": "rgba(var(--alpha-color),.045)" }, modelValue: _2.value, "onUpdate:modelValue": s3[2] || (s3[2] = (e22) => _2.value = e22), clearable: "", type: "text", placeholder: "搜索翻译", "prefix-icon": Lt(e2), class: "h-11 w-full rounded-xl" }, null, 8, ["modelValue", "prefix-icon"])]), o22.list.length ? (Zr(), eo("div", J, [s3[5] || (s3[5] = io("p", { class: "text-[13px] font-semibold text-slate-500" }, "最近", -1)), io("button", { id: "clear-history", type: "button", class: "text-[13px] font-semibold text-rose-600 transition hover:text-rose-700 cursor-pointer", onClick: s3[3] || (s3[3] = (e22) => n2("clear")) }, " 清空 ")])) : po("", !0), j2.value.length ? (Zr(), eo("div", K, [(Zr(!0), eo(Hr, null, Es(j2.value, (e22) => {
      return Zr(), eo("button", { type: "button", class: "w-full rounded-2xl bg-(--bg-info) p-3.5 text-left transition hover:bg-(--bg-input)", style: { border: "1px solid var(--dividing-line)" }, onClick: (t3) => n2("select", e22) }, [io("span", te, Z(e22.text), 1), io("span", ae, Z(e22.transText), 1), io("span", le, Z(e22.fromLabel) + " → " + Z(e22.toLabel) + " · " + Z((t2 = e22.ts, u(t2).toNow(!0))), 1)], 8, ee);
      var t2;
    }), 256))])) : (Zr(), eo("div", se, [lo(d2, { description: "暂无内容", "image-size": 100 })]))])])], 2)], 64);
  };
} }, ne = { class: "relative z-10 flex h-full flex-col px-9 py-8 bg-(--bg-body) d-main" }, ie = { class: "mb-7 flex items-center justify-between shrink-0 grow-0" }, re = { class: "flex items-center gap-2" }, ue = { class: "grid flex-1 grid-cols-[1fr_auto_1fr] gap-5 max-md:grid-cols-1 max-md:grid-rows-[1fr_auto_1fr] overflow-hidden" }, de = { class: "translate-box flex flex-col rounded-[28px] p-5" }, ce = { class: "relative mb-4 px-4 h-10 font-bold rounded-3xl bg-(--bg-card) flex items-center justify-between w-50 shadow-[0_8px_20px_rgba(15,23,42,0.09)] overflow-hidden" }, ve = { class: "el-dropdown-link whitespace-nowrap outline-0" }, me = { class: "el-dropdown-link whitespace-nowrap outline-0" }, pe = { class: "relative flex-1 p-2 pb-10" }, fe = { key: 0, class: "absolute bottom-2 left-5 flex items-center gap-2 text-xs text-slate-500" }, he = { class: "flex items-center justify-center" }, xe = { class: "translate-box flex flex-col rounded-[28px] p-5 overflow-hidden" }, ge = { class: "relative mb-4 px-4 h-10 font-bold rounded-3xl bg-(--bg-card) flex items-center w-35 shadow-[0_8px_20px_rgba(15,23,42,0.09)]" }, be = { class: "el-dropdown-link outline-0 flex items-center" }, we = ["src"], ye = ["src"], ke = { class: "relative flex-1 p-2 pb-11 flex overflow-hidden" }, _e = ["lang"], je = { key: 0, class: "opacity-50" }, Ce = { key: 0, class: "absolute bottom-1 left-5 right-5 flex items-center justify-end shrink-0 grow-0" }, ze = { class: "flex items-center gap-2" }, Le = /* @__PURE__ */ o({ __name: "Content", props: { row: { type: Object, default: {} } }, setup(t2) {
  let a22 = t2, i2 = Et({ method: "", from: "auto", to: "", text: "", translateText: "" }), r2 = Et({}), d2 = Hn(async function() {
    var e22;
    if (G2) return G2 = !1;
    let t3 = i2.value.to.trim(), a3 = i2.value.text.trim(), l2 = i2.value.from.trim(), s2 = i2.value.method;
    if (t3 && a3) {
      if (i2 === t3) return i2.value.translateText = i2.value.text;
      try {
        a3.length > 500 && (i2.value.text = a3.substring(0, 500));
        let o22 = { from: l2, to: t3, text: a3.substring(0, 500), method: s2 };
        i2 === "auto" && delete o22.from;
        let n2 = await s(o22);
        i2.value.translateText = ((e22 = n2?.data) == null ? void 0 : e22.text) || "", (function() {
          let e3 = D2.value[0], t4 = i2.value.to.trim(), a4 = i2.value.text.trim(), l3 = i2.value.from.trim(), s3 = i2.value.method, o3 = i2.value.translateText.trim();
          e3 && a4.startsWith(e3.text) ? Object.assign(e3, { to: t4, from: l3, text: a4, transText: o3, method: s3, toLabel: J2(t4, r2.value.langs), fromLabel: i2 === "auto" ? "自动检测" : J2(l3, r2.value.langs), ts: Date.now() }) : D2.value.unshift({ to: t4, from: l3, text: a4, transText: o3, method: s3, toLabel: J2(t4, r2.value.langs), fromLabel: i2 === "auto" ? "自动检测" : J2(l3, r2.value.langs), ts: Date.now() }), Id(Lt(D2));
        })();
      } catch {
        i2.value.translateText = "";
      }
    }
  }, 500), k2 = Et(new X()), U2 = Et(!1), D2 = Et([]), G2 = !1;
  function Y2(e22) {
    return e22.querySelector("svg") || e22.closest("svg");
  }
  function Z22(e22) {
    i2.value.from !== "auto" && (e22 && Q2(Y2(e22.target)), [i2.value.from, i2.value.to] = [i2.value.to, i2.value.from]);
  }
  function M2(e22) {
    i2.value.from !== "auto" && (Z22(), e22 && Q2(Y2(e22.target)), [i2.value.text, i2.value.translateText] = [i2.value.translateText, i2.value.text]);
  }
  function Q2(e22) {
    let t3 = e22.getAttribute("data-flipped") === "true", a3 = t3 ? 180 : 0, l2 = t3 ? 0 : 180;
    e22.animate([{ transform: `rotateY(${a3}deg)` }, { transform: `rotateY(${l2}deg)` }], { duration: 300, easing: "ease-in-out", fill: "forwards" }), e22.setAttribute("data-flipped", String(!t3));
  }
  function J2(e22, t3 = [], a3 = "label") {
    var l2;
    return (l2 = t3.find((t4) => t4.value === e22)) == null ? void 0 : l2[a3];
  }
  function K2(e22) {
    G2 = !0, U2.value = !1, i2.value = { method: e22.method, from: e22.from, to: e22.to, text: e22.text, translateText: e22.transText };
  }
  function ee2() {
    D2.value.length = 0, Id(Lt(D2));
  }
  function te2(e22) {
    S(e22), aO.success("已复制到剪贴板");
  }
  return Fr(() => i2.value.to.trim(), d2), Fr(() => i2.value.text.trim(), d2), Fr(() => i2.value.method, d2), fs(() => {
    var e22, t3, l2, s2;
    if ((t3 = (e22 = a22.row) == null ? void 0 : e22.config) != null && t3.text) {
      let e3 = (s2 = (l2 = a22.row) == null ? void 0 : l2.config) == null ? void 0 : s2.text;
      i2.value.text = e3;
    }
    Ad().then((e3) => {
      e3 && (D2.value = e3);
    });
  }), on(() => {
  }), vs(() => {
  }), (async function() {
    var e22, t3, a3;
    let l2 = await Pd();
    if (l2 || (l2 = await o2(), Td(l2)), r2.value = l2.data || {}, i2.value.method = (e22 = r2.value.methods.find((e3) => e3.default)) == null ? void 0 : e22.value, i2.value.to = (t3 = r2.value.langs.find((e3) => e3.defaultTo)) == null ? void 0 : t3.value, i2.value.text) {
      let e3 = !!i2.value.text.trim().match(/^[a-z]/i);
      i2.value.to = (a3 = r2.value.langs.find((t4) => e3 ? !t4.value.includes("en") : t4.value.includes("en"))) == null ? void 0 : a3.value;
    }
  })(), (t3, a3) => {
    let n2 = $s, u2 = Ky, d3 = jy, _2 = Hy;
    return Zr(), eo("div", ne, [io("header", ie, [a3[7] || (a3[7] = io("div", { class: "flex shrink-0 items-center gap-3" }, [io("div", { class: "grid h-11 w-11 place-items-center rounded-2xl" }, [io("span", { class: "translate-logo size-full" })]), io("div", null, [io("h1", { class: "text-[28px] font-semibold leading-none tracking-normal" }, "翻译")])], -1)), io("div", re, [io("button", { type: "button", class: "cursor-pointer grid size-10 place-items-center shadow-sm rounded-full bg-(--bg-card) hover:opacity-75", title: "打开历史记录", onClick: a3[0] || (a3[0] = (e22) => U2.value = !0) }, [lo(n2, { size: 20 }, { default: mn(() => [lo(Lt(a2))]), _: 1 })])])]), io("div", ue, [io("article", de, [io("div", ce, [lo(_2, { class: "flex-1 flex justify-center" }, { dropdown: mn(() => [lo(d3, null, { default: mn(() => [lo(u2, { onClick: a3[1] || (a3[1] = (e22) => i2.value.from = "auto") }, { default: mn(() => a3[8] || (a3[8] = [uo("自动检测")])), _: 1, __: [8] }), (Zr(!0), eo(Hr, null, Es(r2.value.langs, (e22) => (Zr(), to(u2, { onClick: (t4) => i2.value.from = e22.value }, { default: mn(() => [uo(Z(e22.label), 1)]), _: 2 }, 1032, ["onClick"]))), 256))]), _: 1 })]), default: mn(() => [io("span", ve, [io("span", null, Z(i2.value.from === "auto" ? "自动检测" : J2(i2.value.from, r2.value.langs)), 1), lo(n2, { class: "el-icon--right ml-0!" }, { default: mn(() => [lo(Lt(a))]), _: 1 })])]), _: 1 }), lo(n2, { size: 16, class: "mx-2 shrink-0 grow-0 switch-btn pointer-cursor", onClick: Z22 }, { default: mn(() => [lo(Lt(Ct))]), _: 1 }), lo(_2, { class: "flex-1 flex justify-center" }, { dropdown: mn(() => [lo(d3, null, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(r2.value.langs, (e22) => (Zr(), to(u2, { onClick: (t4) => i2.value.to = e22.value }, { default: mn(() => [uo(Z(e22.label), 1)]), _: 2 }, 1032, ["onClick"]))), 256))]), _: 1 })]), default: mn(() => [io("span", me, [io("span", null, Z(J2(i2.value.to, r2.value.langs)), 1), lo(n2, { class: "el-icon--right ml-0!" }, { default: mn(() => [lo(Lt(a))]), _: 1 })])]), _: 1 })]), io("div", pe, [yn(io("textarea", { class: "text-[22px] font-medium leading-[1.28] tracking-normal block size-full resize-none", "onUpdate:modelValue": a3[2] || (a3[2] = (e22) => i2.value.text = e22), placeholder: "请输入需要翻译的文本", maxlength: 500 }, "                    ", 512), [[qi, i2.value.text]]), i2.value.text.length ? (Zr(), eo("div", fe, [a3[9] || (a3[9] = io("span", { class: "h-2 w-2 rounded-full bg-cyan-400" }, null, -1)), io("span", null, Z(i2.value.text.length) + " 字符", 1)])) : po("", !0), i2.value.text.length ? (Zr(), eo("button", { key: 1, class: "absolute bottom-1 right-4 grid h-10 w-10 place-items-center rounded-full bg-(--bg-card) hover:opacity-75 shadow-sm d-sub cursor-pointer", title: "复制", onClick: a3[3] || (a3[3] = (e22) => te2(i2.value.text)) }, [lo(n2, { size: 18 }, { default: mn(() => [lo(Lt(yt))]), _: 1 })])) : po("", !0)])]), io("div", he, [io("button", { class: "grid size-12 place-items-center rounded-full text-cyan-700 bg-(--bg-card) cursor-pointer switch-btn", title: "切换内容", onClick: M2 }, [lo(n2, { size: 20 }, { default: mn(() => [lo(Lt(Ct))]), _: 1 })])]), io("article", xe, [io("div", ge, [lo(_2, null, { dropdown: mn(() => [lo(d3, null, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(r2.value.methods, (e22) => (Zr(), to(u2, { onClick: (t4) => i2.value.method = e22.value }, { default: mn(() => [io("img", { src: e22.icon, class: "size-3.5 mr-1" }, null, 8, ye), uo(" " + Z(e22.label), 1)]), _: 2 }, 1032, ["onClick"]))), 256))]), _: 1 })]), default: mn(() => [io("span", be, [io("img", { src: J2(i2.value.method, r2.value.methods, "icon"), class: "size-4 mr-1" }, null, 8, we), uo(" " + Z(J2(i2.value.method, r2.value.methods)) + " ", 1), lo(n2, { class: "el-icon--right" }, { default: mn(() => [lo(Lt(a))]), _: 1 })])]), _: 1 })]), io("div", ke, [io("p", { class: "max-w-85 text-[24px] font-semibold leading-[1.36] tracking-normal select-auto flex-1 flex overflow-auto", lang: i2.value.to }, [uo(Z(i2.value.translateText) + " ", 1), i2.value.translateText ? po("", !0) : (Zr(), eo("span", je, "翻译结果在此展示"))], 8, _e), i2.value.translateText ? (Zr(), eo("div", Ce, [io("div", ze, [io("button", { class: "grid size-10 place-items-center rounded-full bg-(--bg-card) shadow-sm hover:opacity-75 d-sub cursor-pointer", title: "复制结果", onClick: a3[4] || (a3[4] = (e22) => te2(i2.value.translateText)) }, [lo(n2, { size: 18 }, { default: mn(() => [lo(Lt(yt))]), _: 1 })]), io("button", { class: "grid size-10 place-items-center rounded-full bg-(--bg-card) shadow-sm hover:opacity-75 shadow-float d-sub cursor-pointer", title: "朗读", onClick: a3[5] || (a3[5] = (e22) => {
      return t4 = i2.value.to, void ((a4 = (a4 = i2.value.translateText).trim()) && k2.value.speak({ lang: t4, text: a4 }));
      var t4, a4;
    }) }, [lo(n2, { size: 18 }, { default: mn(() => [lo(Lt(e), { class: W({ "volume-blink": k2.value.speaking }) }, null, 8, ["class"])]), _: 1 })])])])) : po("", !0)])])]), lo(oe, { modelValue: U2.value, "onUpdate:modelValue": a3[6] || (a3[6] = (e22) => U2.value = e22), list: D2.value, onClear: ee2, onSelect: K2 }, null, 8, ["modelValue", "list"])]);
  };
} }, [["__scopeId", "data-v-3554a292"]]);

// output/native-current/index-DM766YKu.js
var m = { __name: "index", props: { data: Object }, setup: (m2) => (m3, a3) => (Zr(), to(F, { destroyOnClose: !0, transparent: "" }, { default: mn(() => [lo(Le, H(co(m3.$attrs)), null, 16)]), _: 1 })) };
export {
  m as default
};
/**
 * @license @tabler/icons-vue v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */

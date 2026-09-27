import {
  Jb
} from "./chunk-QX73FKBL.js";
import {
  v,
  xt
} from "./chunk-LEVEZLTX.js";
import {
  O
} from "./chunk-YQ4PBQUM.js";
import {
  t
} from "./chunk-C332WR7G.js";
import {
  j,
  u
} from "./chunk-USGTF4JI.js";
import {
  r
} from "./chunk-ZBQAVDN7.js";
import {
  $o,
  Et,
  Lt,
  Os,
  Rs,
  V,
  W,
  Z,
  Zr,
  di,
  eo,
  fs,
  io,
  lo,
  mn,
  mo,
  po,
  rr,
  sr,
  to,
  uo,
  vs,
  yn
} from "./chunk-E6JHFIG4.js";

// output/native-current/dom-vwl5rTt_.js
var e = function(e2, n2, t22, o) {
  e2 && n2 && t22 && e2.addEventListener(n2, t22, o);
}, n = function(e2, n2, t22) {
  e2 && n2 && t22 && e2.removeEventListener(n2, t22, !1);
};
function t2(e2) {
  return !!e2 && document.querySelector(e2);
}

// output/native-current/IconX-BDmBAcvL.js
var t3 = r("outline", "x", "X", [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]]);

// output/native-current/IconExternalLink-BraY9BYG.js
var t4 = r("outline", "external-link", "ExternalLink", [["path", { d: "M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6", key: "svg-0" }], ["path", { d: "M11 13l9 -9", key: "svg-1" }], ["path", { d: "M15 4h5v5", key: "svg-2" }]]);

// output/native-current/IconMinimize-BW7ADqUv.js
var i = r("outline", "minimize", "Minimize", [["path", { d: "M15 19v-2a2 2 0 0 1 2 -2h2", key: "svg-0" }], ["path", { d: "M15 5v2a2 2 0 0 0 2 2h2", key: "svg-1" }], ["path", { d: "M5 15h2a2 2 0 0 1 2 2v2", key: "svg-2" }], ["path", { d: "M5 9h2a2 2 0 0 0 2 -2v-2", key: "svg-3" }]]);

// output/native-current/d-dialog-DNUygwQl.js
var E = r("outline", "arrow-up-right", "ArrowUpRight", [["path", { d: "M17 7l-10 10", key: "svg-0" }], ["path", { d: "M8 7l9 0l0 9", key: "svg-1" }]]), R = { key: 0, class: "d-dialog-tool is-mac" }, A = { class: "d-icon" }, W2 = { class: "d-icon", style: { "font-size": "11px" } }, $ = { class: "d-icon" }, D = { key: 1, class: "d-dialog-tool is-win" }, G = { class: "d-icon f13" }, H = { class: "d-icon f14" }, X = { class: "d-icon f14" }, Z2 = { class: "d-dialog-title" }, F = { __name: "d-dialog", props: { modelValue: { type: Boolean, default: !1 }, glass: { type: Boolean, default: !0 }, modalClass: { type: String, default: "" }, title: { type: String, default: "" }, width: { type: [Number, String], default: "1000px" }, height: { type: String, default: "600px" }, destroyOnClose: { type: Boolean, default: !1 }, fullscreenBtn: { type: Boolean, default: !0 }, headerClass: String, openWindow: { type: Boolean, default: !1 }, transparent: { type: Boolean, default: !1 }, closeOnClickModal: { type: Boolean, default: !0 }, closeOnPressEscape: { type: Boolean, default: !0 } }, emits: ["update:modelValue"], setup(O2, { emit: F2 }) {
  let Q = O(), T = Rs(), J = F2, K = O2;
  K.glass && t(() => import("./hardware-info-BE9k8ghn-2P5RPNRN.js"), []).then((e2) => {
    e2.isGoodGpu() && document.body.style.setProperty("--dialogBlur", "blur(10px)");
  });
  let N = rr("dialogApp", null);
  sr("dialogApp", null), sr("dialogInstance", { fullscreen() {
    Y.value = !0;
  }, exitFullscreen() {
    Y.value = !1;
  }, isFullscreen: () => Y.value });
  let q = Et(null), Y = Et(!1);
  u && (Y.value = !0);
  let ee = Et(K.height), le = $o({ get: () => K.modelValue, set(e2) {
    J("update:modelValue", e2);
  } });
  function se() {
    let e2 = document.body.clientHeight, l2 = parseInt(K.height);
    ee.value = e2 < l2 ? e2 + "px" : l2 + "px";
  }
  function oe() {
    window.__nativeSession.openWindow();
  }
  function ae() {
    q.value.handleClose();
  }
  return fs(() => {
    se(), e(window, "resize", se);
  }), vs(() => {
    n(window, "resize", se);
  }), (e2, s2) => {
    let o2 = v;
    return Zr(), to(Lt(Jb), mo({ "modal-class": `d-dialog-model ${O2.modalClass} ${Lt(u) ? "mobile" : ""}`, draggable: "", center: "", "append-to-body": "", "destroy-on-close": O2.destroyOnClose, modelValue: le.value, "onUpdate:modelValue": s2[6] || (s2[6] = (e3) => le.value = e3) }, Lt(T), { ref_key: "refDialog", ref: q, class: ["d-dialog", { glass: O2.glass }], width: O2.width, fullscreen: Y.value, "show-close": !1, "close-on-click-modal": O2.closeOnClickModal, "close-on-press-escape": O2.closeOnPressEscape, "lock-scroll": !1, style: { "--wall-thumb": `url(${Lt(Q).wallpaper.thumb})`, "--el-dialog-padding-primary": "0", background: O2.transparent ? "transparent" : "" } }), { default: mn(() => {
      return [io("div", { class: W(["d-dialog-header", O2.headerClass]) }, [Lt(j)() ? (Zr(), eo("div", R, [O2.openWindow && (l2 = N?.row) != null && l2.component ? (Zr(), eo("span", { key: 0, class: "open-in-newwindow", title: "新窗口打开", onClick: s2[0] || (s2[0] = (e3) => oe()) }, [io("i", A, [lo(Lt(E), { "stroke-width": 4 })])])) : po("", !0), yn(io("span", { class: "toggle-fullscreen", title: "放大/缩小", onClick: s2[1] || (s2[1] = (e3) => Y.value = !Y.value) }, [io("i", W2, [Y.value ? (Zr(), to(o2, { key: 1, raw: Lt('<?xml version="1.0" standalone="no"?><svg t="1750402275961" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8684" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M512 42.3936V460.8a51.2 51.2 0 0 0 51.2 51.2h418.4064L512 42.3936zM512 981.6064V563.2a51.2 51.2 0 0 0-51.2-51.2H42.3936L512 981.6064z" fill="currentColor" p-id="1"></path></svg>'), class: "d-middle" }, null, 8, ["raw"])) : (Zr(), to(o2, { key: 0, raw: Lt(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200" viewBox="0 0 200 200" fill="none">\r
<path d="M153.131 37L76.1311 37.3443C70.623 37.3443 69.3607 40.5574 73.2623 44.3443L155.77 126.852C159.672 130.754 162.77 129.377 162.77 123.984L163 46.9836C163 41.4754 158.525 37 153.131 37ZM44.2295 73.2623C40.3279 69.3607 37.2295 70.7377 37.2295 76.1311L37 153.131C37 158.639 41.4754 163 46.8689 163L123.869 162.656C129.377 162.656 130.639 159.443 126.738 155.656L44.2295 73.2623Z"   fill="currentColor" >\r
</path>\r
</svg>\r
`) }, null, 8, ["raw"]))])], 512), [[di, K.fullscreenBtn]]), io("span", { class: "close-window", onClick: s2[2] || (s2[2] = (e3) => ae()), title: "关闭" }, [io("i", $, [lo(Lt(t3), { "stroke-width": 4 })])])])) : (Zr(), eo("div", D, [O2.openWindow ? (Zr(), eo("span", { key: 0, class: "open-in-newwindow", title: "新窗口打开", onClick: s2[3] || (s2[3] = (e3) => oe()) }, [io("i", G, [lo(Lt(t4), { "stroke-width": 3 })])])) : po("", !0), K.fullscreenBtn ? (Zr(), eo("span", { key: 1, class: "toggle-fullscreen", title: "放大/缩小", onClick: s2[4] || (s2[4] = (e3) => Y.value = !Y.value) }, [io("i", H, [Y.value ? (Zr(), to(Lt(i), { key: 1, "stroke-width": 3, class: "d-middle" })) : (Zr(), to(Lt(xt), { key: 0, "stroke-width": 3 }))])])) : po("", !0), io("span", { class: "close-window", title: "关闭", onClick: s2[5] || (s2[5] = (e3) => ae()) }, [io("i", X, [lo(Lt(t3), { "stroke-width": 3 })])])])), io("div", Z2, Z(O2.title), 1)], 2), io("div", { class: "d-dialog-body", style: V({ height: Lt(ee) }) }, [Os(e2.$slots, "default", {}, () => [s2[7] || (s2[7] = uo("应用功能区"))])], 4)];
      var l2;
    }), _: 3 }, 16, ["modal-class", "destroy-on-close", "modelValue", "class", "width", "fullscreen", "close-on-click-modal", "close-on-press-escape", "style"]);
  };
} };

export {
  e,
  n,
  t2 as t,
  t3 as t2,
  t4 as t3,
  i,
  F
};
/**
 * @license @tabler/icons-vue v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */

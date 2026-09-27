import {
  v
} from "./chunk-Q72T5IJS.js";
import {
  e
} from "./chunk-TTG6GZ54.js";
import {
  Vk
} from "./chunk-QX73FKBL.js";
import {
  Nu,
  Xu
} from "./chunk-LEVEZLTX.js";
import {
  o,
  r
} from "./chunk-ZBQAVDN7.js";
import {
  $o,
  Et,
  Lt,
  W,
  Zr,
  eo,
  io,
  lo,
  po,
  sl,
  to,
  ws
} from "./chunk-E6JHFIG4.js";

// output/native-current/VolumeSet-CLnv4cyK.js
var g = r("outline", "volume-2", "Volume2", [["path", { d: "M15 8a5 5 0 0 1 0 8", key: "svg-0" }], ["path", { d: "M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5", key: "svg-1" }]]), j = r("outline", "volume-3", "Volume3", [["path", { d: "M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5", key: "svg-0" }], ["path", { d: "M16 10l4 4m0 -4l-4 4", key: "svg-1" }]]);
var M = Et(!1);
function V() {
  Nu.status === "stop" && (M.value = !0);
}
var k = $o({ get: () => Nu.isMute, set(e2) {
  let a2 = !!e2;
  Nu.isMute = a2, Xu((e3) => e3.setMute(a2));
} }), x = $o({ get: () => Number(Nu.volume) || 0, set(e2) {
  let a2 = Math.min(100, Math.max(0, Number(e2) || 0));
  Nu.volume = a2, Nu.isMute = a2 <= 0, Xu((e3) => e3.setVolume(a2));
} });
function _(e2) {
  Xu((a2) => a2.switchAudio({ type: e2?.type, n: e2?.n, m: e2?.m }));
}
var I = ["aria-label", "title"], z = /* @__PURE__ */ o({ __name: "VolumeSet", props: { compact: Boolean }, setup(e2) {
  let c2 = $o(() => k.value || x.value <= 0), d2 = $o(() => c2.value ? 0 : x.value), f2 = $o({ get: () => d2.value, set: (e3) => {
    x.value = e3;
  } }), h2 = $o(() => {
    if (c2.value) return v;
    let e3 = d2.value;
    return e3 < 34 ? j : e3 < 67 ? g : e;
  });
  return (a2, d3) => (Zr(), eo("div", { class: W(["group inline-flex items-center", e2.compact ? "h-auto" : "h-8"]) }, [io("button", { type: "button", class: W(["inline-flex shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-inherit", e2.compact ? "size-[18px] text-[18px]" : "f24"]), "aria-label": c2.value ? "取消静音" : "静音", title: c2.value ? "开启声音" : "静音", onClick: d3[0] || (d3[0] = sl((e3) => k.value = !Lt(k), ["stop"])) }, [(Zr(), to(ws(h2.value), { class: W({ "size-full": e2.compact }), stroke: 1.5 }, null, 8, ["class"]))], 10, I), e2.compact ? po("", !0) : (Zr(), eo("div", { key: 0, class: "volume-panel", onClick: d3[2] || (d3[2] = sl(() => {
  }, ["stop"])) }, [lo(Lt(Vk), { modelValue: f2.value, "onUpdate:modelValue": d3[1] || (d3[1] = (e3) => f2.value = e3), min: 0, max: 100, "show-tooltip": !1, size: "small" }, null, 8, ["modelValue"])]))], 2));
} }, [["__scopeId", "data-v-2a2840d4"]]), S = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: z }, Symbol.toStringTag, { value: "Module" }));

export {
  M,
  V,
  _,
  z,
  S
};
/**
 * @license @tabler/icons-vue v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */

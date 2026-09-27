import {
  o
} from "./chunk-ZBQAVDN7.js";
import {
  Os,
  V,
  Z,
  Zr,
  eo,
  io,
  po,
  uo
} from "./chunk-E6JHFIG4.js";

// output/native-current/AppHeader-DVUBuVSB.js
var c = { class: "flex min-w-0 items-center" }, n = { class: "app-header-logo mr-3 flex size-9 shrink-0 items-center justify-center overflow-hidden" }, p = ["src", "alt"], f = { class: "min-w-0" }, m = { class: "d-label m-0 text-[20px] font-semibold leading-6" }, x = { key: 0, class: "d-label-2 text-xs leading-4" }, g = { key: 0, class: "mx-3 min-w-0 flex-1" }, v = { key: 1, class: "absolute inset-y-0 left-1/2 flex -translate-x-1/2 items-center" }, h = { key: 2, class: "ml-auto flex items-center" }, u = /* @__PURE__ */ o({ __name: "AppHeader", props: { title: { type: String, default: "" }, desc: { type: String, default: "" }, logo: { type: String, default: "" }, height: { type: String, default: "52px" } }, setup: (e2) => (u2, y) => (Zr(), eo("header", { class: "app-header d-bg-panel relative flex shrink-0 items-center px-2 border-b border-(--d-card-border-color)", style: V({ height: e2.height }) }, [io("div", c, [io("div", n, [Os(u2.$slots, "logo", {}, () => [e2.logo ? (Zr(), eo("img", { key: 0, class: "size-full object-cover", src: e2.logo, alt: e2.title }, null, 8, p)) : po("", !0)], !0)]), io("div", f, [io("h1", m, Z(e2.title), 1), e2.desc || u2.$slots.desc ? (Zr(), eo("p", x, [Os(u2.$slots, "desc", {}, () => [uo(Z(e2.desc), 1)], !0)])) : po("", !0)])]), u2.$slots.default ? (Zr(), eo("div", g, [Os(u2.$slots, "default", {}, void 0, !0)])) : po("", !0), u2.$slots.center ? (Zr(), eo("div", v, [Os(u2.$slots, "center", {}, void 0, !0)])) : po("", !0), u2.$slots.extra ? (Zr(), eo("div", h, [Os(u2.$slots, "extra", {}, void 0, !0)])) : po("", !0)], 4)) }, [["__scopeId", "data-v-4ea82da9"]]);

export {
  u
};

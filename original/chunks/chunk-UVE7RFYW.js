import {
  Vk
} from "./chunk-QX73FKBL.js";
import {
  o
} from "./chunk-ZBQAVDN7.js";
import {
  Et,
  Z,
  Zr,
  eo,
  io,
  lo,
  mo,
  po
} from "./chunk-E6JHFIG4.js";

// output/native-current/d-slider-DN8xmDqB.js
var m = Et(null), p = { name: "dSlider", props: { modelValue: { required: !0 }, title: String, unit: { default: "px" }, async: { type: Boolean, default: !1 }, value: [String, Number] }, setup: (e2, s2) => ({ handleInput: (a2) => {
  s2.emit("update:modelValue", a2), e2.async;
}, sliderRef: m }) }, c = { class: "d-flex-between d-slider" }, f = { key: 0, class: "d-slider-title" }, v = { class: "d-slider-value" }, j = o(p, [["render", function(l, s2, u2, m2, p2, j2) {
  let V = Vk;
  return Zr(), eo("div", c, [u2.title ? (Zr(), eo("span", f, Z(u2.title), 1)) : po("", !0), lo(V, mo({ "show-tooltip": !1, class: "d-cell", ref: "sliderRef" }, l.$attrs, { size: "small", "data-content": "12", "model-value": u2.modelValue, "onUpdate:modelValue": m2.handleInput, "show-input": "" }), null, 16, ["model-value", "onUpdate:modelValue"]), io("span", v, Z(u2.unit), 1)]);
}]]);

export {
  j
};

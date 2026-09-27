import {
  Hm
} from "./chunk-QX73FKBL.js";
import {
  o
} from "./chunk-ZBQAVDN7.js";
import {
  $o,
  Es,
  Et,
  Hr,
  V,
  W,
  Z,
  Zr,
  di,
  eo,
  io,
  lo,
  po,
  yn
} from "./chunk-E6JHFIG4.js";

// output/native-current/d-color-DVejX7gp.js
var C = (e2) => e2 >= 48 && e2 <= 57 ? e2 - 48 : (e2 |= 32) >= 97 && e2 <= 102 ? e2 - 87 : -1, _ = (e2) => {
  if (typeof e2 != "string") return null;
  let t2 = 0;
  e2.charCodeAt(0) === 35 && (t2 = 1);
  let l2 = e2.length - t2, a2, o2, r2;
  if (l2 === 3) {
    let l3 = C(e2.charCodeAt(t2)), s2 = C(e2.charCodeAt(t2 + 1)), f2 = C(e2.charCodeAt(t2 + 2));
    if ((l3 | s2 | f2) < 0) return null;
    a2 = l3 << 4 | l3, o2 = s2 << 4 | s2, r2 = f2 << 4 | f2;
  } else {
    if (l2 !== 6) return null;
    {
      let l3 = C(e2.charCodeAt(t2)), s2 = C(e2.charCodeAt(t2 + 1)), f2 = C(e2.charCodeAt(t2 + 2)), n2 = C(e2.charCodeAt(t2 + 3)), c2 = C(e2.charCodeAt(t2 + 4)), i2 = C(e2.charCodeAt(t2 + 5));
      if ((l3 | s2 | f2 | n2 | c2 | i2) < 0) return null;
      a2 = l3 << 4 | s2, o2 = f2 << 4 | n2, r2 = c2 << 4 | i2;
    }
  }
  return { r: a2, g: o2, b: r2 };
}, A = { class: "d-color flex items-center justify-between w-full" }, V2 = { key: 0, class: "mr20 title whitespace-nowrap" }, b = ["onClick"], g = { class: "d-color-dot" }, v = { class: "d-color-dot absolute top-0 right-0 bottom-0 left-0 m-auto" }, j = /* @__PURE__ */ o({ __name: "d-color", props: { modelValue: { type: String, required: !0 }, colors: { type: Array, default: [] }, custom: { type: Boolean, default: !0 }, async: { type: Boolean, default: !1 }, title: String }, emits: ["update:modelValue", "change"], setup(y2, { emit: C2 }) {
  let j2 = ["#ff4500", "#ff8c00", "#ffd700", "#90ee90", "#00ced1", "#1e90ff", "#c71585", "#ffffff"], k = y2, w = C2, E = Et(), I = ["#1681ff", "#fbbe23", "#fc4548", "#4b3c36", "#7dac68", "#023373", "#c8ac70", "#372128", "#c82c34", "#054092", "#a3ddb9", "transparent"], S = $o(() => k.colors.length ? k.colors : I);
  function x(t2) {
    _(t2) || ["#fff", "transparent"].includes(t2) || (t2 = "#ffffff"), w("update:modelValue", t2), w("change", t2, ((e2) => {
      if (e2 === "transparent") return "#ffffff";
      let t3 = _(e2);
      return t3 && 0.213 * t3.r + 0.715 * t3.g + 0.072 * t3.b < 127.5 ? "#ffffff" : "#333333";
    })(t2));
  }
  return (e2, l2) => {
    let a2 = Hm;
    return Zr(), eo("div", A, [y2.title ? (Zr(), eo("p", V2, Z(y2.title), 1)) : po("", !0), (Zr(!0), eo(Hr, null, Es(S.value, (e3) => (Zr(), eo("span", { class: W(["d-color-item", [{ isWhite: e3 === "#fff" || e3 === "#ffffff" }, { active: y2.modelValue == e3 }, { colorTransparent: e3 === "transparent" }]]), onClick: (t2) => x(e3), key: e3, style: V(`--item-color: ${e3}`) }, [yn(io("i", g, null, 512), [[di, y2.modelValue == e3]])], 14, b))), 128)), k.custom ? (Zr(), eo("span", { key: 1, class: "inline-flex relative d-color-item items-center justify-center", onClick: l2[0] || (l2[0] = (e3) => {
      E.value.show();
    }) }, [lo(a2, { modelValue: y2.modelValue, "onUpdate:modelValue": x, size: "small", predefine: j2, ref_key: "elColorPickerRef", ref: E }, null, 8, ["modelValue"]), yn(io("i", v, null, 512), [[di, !S.value.includes(y2.modelValue)]])])) : po("", !0)]);
  };
} }, [["__scopeId", "data-v-270468c0"]]);

export {
  j
};

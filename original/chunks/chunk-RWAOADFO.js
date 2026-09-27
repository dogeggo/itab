import {
  o
} from "./chunk-ZBQAVDN7.js";
import {
  Es,
  Et,
  Fr,
  Hr,
  Os,
  W,
  Z,
  Zr,
  di,
  eo,
  io,
  on,
  yn
} from "./chunk-E6JHFIG4.js";

// output/native-current/d-tabs-VYJV0PEe.js
var y = { class: "d-tabs-active" }, f = ["name", "onClick"], v = { style: { "line-height": "20px" } }, b = /* @__PURE__ */ o({ __name: "d-tabs", props: { modelValue: { required: !0 }, data: { required: !0, type: [Array, Object], default: () => [] }, keyId: { type: String, default: "id" } }, emits: ["update:modelValue", "tab-click"], setup(m2, { emit: b2 }) {
  let k = b2, g = Et(null), h = Et(!0), V = m2;
  return Fr(() => V.modelValue, (e2) => {
    on(() => {
      let e3 = g.value.querySelector(".d-tabs-item.active") || { offsetTop: 0, clientHeight: 0 }, { offsetTop: a2, clientHeight: t2 } = e3;
      h.value = t2 != 0, g.value.style.setProperty("--target-top", a2 + "px"), g.value.style.setProperty("--height", (t2 || 0) + "px");
    });
  }, { immediate: !0 }), (e2, a2) => (Zr(), eo("ul", { class: "d-tabs relative", ref_key: "dTabsRef", ref: g }, [yn(io("span", y, null, 512), [[di, h.value]]), (Zr(!0), eo(Hr, null, Es(V.data, (a3, l2) => (Zr(), eo("li", { class: W(["d-tabs-item", { active: m2.modelValue === a3[m2.keyId] }]), key: l2, name: a3.name, onClick: (e3) => ((e4, a4) => {
    k("update:modelValue", e4[V.keyId]), k("tab-click", e4, a4);
  })(a3, l2) }, [Os(e2.$slots, "default", { row: a3, index: l2 }, () => [io("p", v, Z(a3.name), 1)], !0)], 10, f))), 128))], 512));
} }, [["__scopeId", "data-v-527cc21e"]]);

export {
  b
};

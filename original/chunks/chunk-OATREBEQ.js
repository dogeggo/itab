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
  eo,
  on,
  uo
} from "./chunk-E6JHFIG4.js";

// output/native-current/d-tabs-x-DojrvcbN.js
var m = ["onClick"], p = /* @__PURE__ */ o({ __name: "d-tabs-x", props: { modelValue: { required: !0 }, data: { required: !0, type: [Array, Object], default: () => [] }, keyId: { type: String, default: "id" } }, emits: ["update:modelValue", "tab-click"], setup(e2, { emit: p2 }) {
  let y = p2, _ = Et(null), f = e2;
  return Fr(() => f.modelValue, (e3) => {
    on(() => {
      let e4 = _.value.querySelector(".d-tabs-x-item.active") || {}, { clientWidth: t2, offsetLeft: a2 } = e4;
      _.value.style.setProperty("--target-width", t2 - 4 + "px"), _.value.style.setProperty("--target-left", a2 + 2 + "px");
    });
  }, { immediate: !0 }), (t2, a2) => (Zr(), eo("ul", { class: "d-tabs-x relative d-flex-between", ref_key: "dTabsRef", ref: _ }, [(Zr(!0), eo(Hr, null, Es(f.data, (a3, d2) => (Zr(), eo("li", { class: W(["d-tabs-x-item d-flex-center", { active: e2.modelValue === a3[e2.keyId] }]), key: d2, onClick: (e3) => ((e4, t3) => {
    y("update:modelValue", e4[f.keyId]), y("tab-click", e4, t3);
  })(a3, d2) }, [Os(t2.$slots, "row", { row: a3, index: d2 }, () => [uo(Z(a3.name), 1)], !0)], 10, m))), 128))], 512));
} }, [["__scopeId", "data-v-38532686"]]);

export {
  p
};

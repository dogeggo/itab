import {
  ju
} from "./chunk-QX73FKBL.js";
import {
  o
} from "./chunk-ZBQAVDN7.js";
import {
  Es,
  H,
  Lt,
  Os,
  Rs,
  Ts,
  Zr,
  co,
  mn,
  to
} from "./chunk-E6JHFIG4.js";

// output/native-current/d-number-C0Jz3FYc.js
var l = /* @__PURE__ */ o({ __name: "d-number", props: { precision: Number, max: Number, min: Number }, setup(e2) {
  let l2 = e2, b = Rs();
  function c(r2) {
    var e3, a2, n2;
    let s2 = String(r2).replace(/[^0-9.]/g, "");
    return s2 = (e3 = b.modelModifiers) != null && e3.integer ? ((a2 = String(s2).match(/^[0-9]+/)) == null ? void 0 : a2[0]) || "" : ((n2 = String(s2).match(new RegExp(`^[0-9]+(.[0-9]{0,${l2.precision ?? ""}})?`))) == null ? void 0 : n2[0]) || "", typeof l2.max == "number" && Number(s2) > l2.max && (s2 = l2.max), typeof l2.min == "number" && Number(s2) < l2.min && (s2 = l2.min), s2;
  }
  function f(r2) {
    return r2;
  }
  return (e3, a2) => (Zr(), to(Lt(ju), H(co({ ...e3.$attrs, parser: c, formatter: f })), Ts({ _: 2 }, [Es(e3.$slots, (r2, a3) => ({ name: a3, fn: mn(() => [Os(e3.$slots, a3, {}, void 0, !0)]) }))]), 1040));
} }, [["__scopeId", "data-v-ae9185b7"]]);

export {
  l
};

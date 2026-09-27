import {
  h
} from "./chunk-D6V63A6H.js";
import {
  f
} from "./chunk-BJRSIPJ7.js";
import {
  Ie,
  VO,
  tC
} from "./chunk-QX73FKBL.js";
import {
  Y,
  d,
  m,
  o as o2,
  p
} from "./chunk-ZUZ5MLUW.js";
import {
  u
} from "./chunk-AFECQBGL.js";
import "./chunk-YQ4PBQUM.js";
import "./chunk-C332WR7G.js";
import {
  Ae
} from "./chunk-C3WGXGFI.js";
import "./chunk-S7M5ZIRT.js";
import "./chunk-USGTF4JI.js";
import {
  o
} from "./chunk-ZBQAVDN7.js";
import {
  $o,
  Es,
  Fr,
  Hr,
  Lt,
  Os,
  Tt,
  V,
  W,
  Z,
  Zr,
  eo,
  io,
  lo,
  mn,
  to,
  uo
} from "./chunk-E6JHFIG4.js";

// output/native-current/d-date-picker-D49A5eN_.js
var b = { class: "d-icon mr10" }, I = { class: "d-date-picker" }, _ = ["onClick"], V2 = ["onClick"], W2 = ["onClick"], F = { class: "d-flex-between bt", style: { "border-top": "1px solid rgba(var(--alpha-color), 0.05)" } }, R = /* @__PURE__ */ o({ __name: "d-date-picker", props: { modelValue: { type: String, default: () => u().format("YYYY-MM-DD") }, isLunar: { type: Boolean, default: !1 }, minDate: { type: Date, default: () => new Date((/* @__PURE__ */ new Date()).getFullYear() - 10, 0, 1) }, maxDate: { type: Date, default: () => new Date((/* @__PURE__ */ new Date()).getFullYear() + 10, 11, 31) } }, emits: ["update:modelValue", "update:isLunar", "change"], setup(v2, { emit: R2 }) {
  let P = Tt(null), B = R2, G = v2, U = Tt(!1), z = Tt(u().year()), A = Tt(u().month() + 1), E = Tt(u().date()), H = Tt([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), J = Tt([]), K = Tt(!!G.isLunar), T = Tt(G.modelValue || ""), X = 0, Z2 = ["初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十"];
  function q(a2, e2, l2) {
    z.value = a2, A.value = e2, E.value = l2;
  }
  async function N(a2) {
    let { SolarDay: e2 } = await o2(), t2 = u(a2), u2 = e2.fromYmd(t2.year(), t2.month() + 1, t2.date()).getLunarDay();
    z.value = u2.getYear(), A.value = u2.getLunarMonth().getMonthWithLeap(), E.value = u2.getDay();
  }
  async function O() {
    if (K.value) {
      let { LunarYear: a2 } = await o2();
      H.value = a2.fromYear(z.value).getMonths().map((a3) => a3.getMonthWithLeap());
    } else H.value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    H.value.includes(A.value) || (A.value = H.value[0]);
  }
  async function Q() {
    let a2 = 30;
    if (K.value) try {
      let { LunarMonth: e3 } = await o2(), l2 = e3.fromYm(z.value, A.value);
      a2 = l2 ? l2.getDayCount() : 30;
    } catch {
      a2 = 29;
    }
    else a2 = u(`${z.value}-${A.value}-01`).daysInMonth() || 30;
    let e2 = [];
    for (let l2 = 1; l2 <= a2; l2++) e2.push(l2);
    J.value = e2, e2.includes(E.value) || (E.value = e2[e2.length - 1] || 1);
  }
  async function aa() {
    let a2 = G.modelValue;
    if (K.value) try {
      T.value = await p(a2);
    } catch {
      T.value = a2;
    }
    else T.value = a2;
  }
  async function ea() {
    let a2 = ++X, e2 = G.modelValue || u().format("YYYY-MM-DD");
    if (String(e2).includes("月")) {
      let t3 = d(e2);
      if (t3) {
        if (K.value) z.value = t3.year, A.value = t3.monthWithLeap, E.value = t3.day;
        else {
          let e3 = await Y(t3.year, t3.monthWithLeap, t3.day);
          if (a2 !== X) return;
          let u2 = u(e3);
          q(u2.year(), u2.month() + 1, u2.date());
        }
        return await O(), a2 !== X ? void 0 : (await Q(), void await aa());
      }
    }
    let t2 = u(e2);
    K.value ? await N(t2.isValid() ? t2.format("YYYY-MM-DD") : u().format("YYYY-MM-DD")) : q(t2.year(), t2.month() + 1, t2.date()), a2 === X && (await O(), a2 === X && (await Q(), await aa()));
  }
  async function la() {
    let a2;
    U.value = !1, a2 = K.value ? await Y(z.value, A.value, E.value) : `${z.value}-${String(A.value).padStart(2, "0")}-${String(E.value).padStart(2, "0")}`, B("update:modelValue", a2), B("change", a2, K.value);
  }
  Fr(() => G.isLunar, async (a2) => {
    K.value !== !!a2 && (K.value = !!a2, await ea());
  }), Fr(() => G.modelValue, () => {
    ea();
  }, { immediate: !0 }), Fr(z, async () => {
    await O(), await Q();
  }), Fr(A, async () => {
    await Q();
  }), Ie(P, () => {
    U.value && (U.value = !1, K.value = !!G.isLunar, ea());
  });
  let ta = $o(() => {
    let a2 = G.minDate.getFullYear(), e2 = G.maxDate.getFullYear(), l2 = [];
    for (let t2 = a2; t2 <= e2; t2++) l2.push(t2);
    return l2;
  }), ua = $o(() => J.value), na = $o({ get() {
    let a2 = ta.value.findIndex((a3) => a3 == z.value);
    return a2 === -1 ? 0 : a2;
  }, set(a2) {
    z.value = ta.value[a2 === -1 ? 0 : a2];
  } }), ra = $o({ get() {
    let a2 = H.value.findIndex((a3) => a3 == A.value);
    return a2 === -1 ? 0 : a2;
  }, set(a2) {
    A.value = H.value[a2 === -1 ? 0 : a2];
  } }), sa = $o({ get() {
    let a2 = ua.value.findIndex((a3) => a3 == E.value);
    return a2 === -1 ? Math.max(0, ua.value.length - 1) : a2;
  }, set(a2) {
    let e2 = a2 === -1 ? ua.value.length - 1 : a2;
    E.value = ua.value[e2];
  } }), oa = $o(() => 38 * -(na.value - 3)), ia = $o(() => 38 * -(ra.value - 3)), va = $o(() => 38 * -(sa.value - 3));
  function ca(a2, e2) {
    e2 === "year" ? na.value = a2 : e2 === "month" ? ra.value = a2 : e2 === "day" && (sa.value = a2);
  }
  async function da(a2) {
    let e2 = !!a2;
    if (e2 === K.value) return;
    let t2;
    if (t2 = K.value ? await Y(z.value, A.value, E.value) : `${z.value}-${String(A.value).padStart(2, "0")}-${String(E.value).padStart(2, "0")}`, K.value = e2, e2) await N(t2);
    else {
      let a3 = u(t2);
      q(a3.year(), a3.month() + 1, a3.date());
    }
    await O(), await Q();
  }
  let ma = Ae((a2, e2) => {
    (function(a3, e3) {
      if (((-a3.wheelDelta || -a3.deltaY || 40 * a3.detail) < 0 ? "up" : "down") == "down") {
        if (e3 === "year") {
          let a4 = ta.value.length;
          if (na.value >= a4 - 2) return void (na.value = a4 - 1);
          na.value = na.value + 3;
        } else if (e3 === "month") {
          let a4 = H.value.length;
          if (ra.value >= a4 - 2) return void (ra.value = a4 - 1);
          ra.value = ra.value + 2;
        } else if (e3 === "day") {
          let a4 = ua.value.length;
          if (sa.value >= a4 - 2) return void (sa.value = a4 - 1);
          sa.value = sa.value + 3;
        }
      } else e3 === "year" ? na.value = Math.max(0, na.value - 3) : e3 === "month" ? ra.value = Math.max(0, ra.value - 2) : e3 === "day" && (sa.value = Math.max(0, sa.value - 3));
    })(a2, e2);
  }, 150, { leading: !0, trailing: !1 });
  return (l2, u2) => {
    let n2 = tC, r2 = VO;
    return Zr(), to(r2, { visible: U.value, placement: "top", width: 324, trigger: "click" }, { reference: mn(() => [io("span", { class: "d-date-picker-input", onClick: u2[0] || (u2[0] = (a2) => U.value = !0) }, [Os(l2.$slots, "default", {}, () => [io("i", b, [lo(Lt(h))]), uo(" " + Z(T.value), 1)], !0)])]), default: mn(() => [io("div", { ref_key: "dDatePickerRef", ref: P }, [io("section", I, [io("div", { class: "d-picker-column", onWheel: u2[1] || (u2[1] = (a2) => Lt(ma)(a2, "year")), ref: "yearColumnRef" }, [io("ul", { class: "d-picker-column-wrap", style: V(`transform:translate3d(0px, ${oa.value}px, 0px)`) }, [(Zr(!0), eo(Hr, null, Es(ta.value, (a2, e2) => (Zr(), eo("li", { onClick: (a3) => ca(e2, "year"), class: W(["d-picker-column-item d-flex-center", { "is-select": na.value == e2 }]), key: a2 }, Z(a2), 11, _))), 128))], 4)], 544), io("div", { onWheel: u2[2] || (u2[2] = (a2) => Lt(ma)(a2, "month")), class: "d-picker-column", ref: "monthColumnRef" }, [io("ul", { class: "d-picker-column-wrap", style: V(`transform:translate3d(0px, ${ia.value}px, 0px)`) }, [(Zr(!0), eo(Hr, null, Es(H.value, (a2, e2) => {
      return Zr(), eo("li", { onClick: (a3) => ca(e2, "month"), class: W([{ "is-select": ra.value == e2 }, "d-picker-column-item d-flex-center"]), key: a2 }, Z((l3 = a2, K.value ? `${Math.sign(l3) === -1 ? "闰" : ""}${m[Math.abs(l3) - 1]}` : String(l3).padStart(2, "0"))), 11, V2);
      var l3;
    }), 128))], 4)], 544), io("div", { onWheel: u2[3] || (u2[3] = (a2) => Lt(ma)(a2, "day")), class: "d-picker-column", ref: "dayColumnRef" }, [io("ul", { class: "d-picker-column-wrap", style: V(`transform:translate3d(0px, ${va.value}px, 0px)`) }, [(Zr(!0), eo(Hr, null, Es(ua.value, (a2, e2) => {
      return Zr(), eo("li", { onClick: (a3) => ca(e2, "day"), class: W([{ "is-select": sa.value == e2 }, "d-picker-column-item d-flex-center"]), key: a2 }, Z((l3 = a2, K.value ? Z2[l3 - 1] : String(l3).padStart(2, "0"))), 11, W2);
      var l3;
    }), 128))], 4)], 544), u2[4] || (u2[4] = io("div", { class: "d-picker-mask" }, null, -1)), u2[5] || (u2[5] = io("div", { class: "d-picker-select" }, null, -1))]), io("div", F, [lo(n2, { "active-text": "农历", "inactive-text": "阳历", "inline-prompt": "", style: { "--el-switch-on-color": "rgba(var(--alpha-color), 0.1)", "--el-switch-off-color": "rgba(var(--alpha-color), 0.1)" }, "model-value": K.value, onChange: da }, null, 8, ["model-value"]), lo(f, { onClick: la, type: "primary", round: "", size: "small" }, { default: mn(() => u2[6] || (u2[6] = [uo("完成")])), _: 1, __: [6] })])], 512)]), _: 3 }, 8, ["visible"]);
  };
} }, [["__scopeId", "data-v-aff6f97c"]]);
export {
  R as default
};

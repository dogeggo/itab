import {
  o
} from "./chunk-ZBQAVDN7.js";
import {
  $o,
  Et,
  Os,
  Pr,
  V,
  W,
  Zr,
  eo,
  fs,
  hs,
  io,
  on
} from "./chunk-E6JHFIG4.js";

// output/native-current/d-scroll-x-CAfuNxXL.js
var f = /* @__PURE__ */ o({ __name: "d-scroll-x", props: { modelValue: { default: -1 }, modelModifiers: {} }, emits: ["update:modelValue"], setup(e2, { expose: f2 }) {
  let p = Pr(e2, "modelValue"), m = Et(null), _ = Et(null), E = Et(0), L = Et(!0), h = Et(!1), w = Et(!1), b = 0, x = 0, y = null, k = () => Math.min(0, b - x), M = $o(() => ({ transform: `translate3d(${E.value}px, 0, 0)`, transition: L.value && !h.value ? "transform 300ms ease" : "none" }));
  function g() {
    let e3 = m.value, n2 = _.value;
    if (!e3 || !n2) return;
    b = e3.clientWidth, x = n2.scrollWidth, w.value = x > b + 1;
    let t2 = k();
    E.value < t2 && (E.value = t2), E.value > 0 && (E.value = 0), I();
  }
  function I() {
    if (!w.value) return void (p.value = null);
    let e3 = E.value, n2 = k();
    p.value = e3 >= -1 ? -1 : e3 <= n2 + 1 ? 1 : 0;
  }
  function R(e3, { animate: n2 = !0, rubber: t2 = !1 } = {}) {
    L.value = n2;
    let l2 = k();
    E.value = t2 ? e3 > 0 ? 0.35 * e3 : e3 < l2 ? l2 + 0.35 * (e3 - l2) : e3 : Math.min(0, Math.max(l2, e3)), I();
  }
  function D(e3) {
    if (!w.value) return;
    let n2 = e3.deltaX !== 0 ? e3.deltaX : e3.deltaY;
    if (!n2) return;
    e3.preventDefault();
    let t2 = Math.abs(n2) >= 10 ? n2 : 60 * Math.sign(n2);
    R(E.value - t2, { animate: !0 });
  }
  let P = null, X = 0, j = 0, V2 = !1;
  function z(e3) {
    if (e3.button != null && e3.button !== 0 || !w.value) return;
    P = e3.pointerId, X = e3.clientX, j = E.value, V2 = !1, h.value = !1;
    let n2 = m.value;
    n2?.addEventListener("pointermove", C), n2?.addEventListener("pointerup", O), n2?.addEventListener("pointercancel", O);
  }
  function C(e3) {
    var n2;
    if (P != null && e3.pointerId !== P) return;
    let t2 = e3.clientX - X;
    if (V2 || !(Math.abs(t2) < 4)) {
      if (!V2) {
        V2 = !0, h.value = !0;
        try {
          (n2 = m.value) == null || n2.setPointerCapture(P);
        } catch {
        }
      }
      e3.preventDefault(), R(j + t2, { animate: !1, rubber: !0 });
    }
  }
  function O(e3) {
    if (P != null && e3.pointerId !== P) return;
    let n2 = m.value;
    if (n2?.removeEventListener("pointermove", C), n2?.removeEventListener("pointerup", O), n2?.removeEventListener("pointercancel", O), P != null) try {
      n2?.releasePointerCapture(P);
    } catch {
    }
    P = null, V2 && n2 && (function(e4) {
      let n3 = (t2) => {
        t2.preventDefault(), t2.stopPropagation(), e4.removeEventListener("click", n3, !0);
      };
      e4.addEventListener("click", n3, !0);
    })(n2), h.value && (h.value = !1, (function() {
      let e4 = k(), n3 = E.value;
      n3 > 0 ? n3 = 0 : n3 < e4 && (n3 = e4), R(n3, { animate: !0 });
    })());
  }
  function W2() {
    g();
  }
  return fs(async () => {
    var e3;
    await on(), g();
    let n2 = m.value;
    n2?.addEventListener("wheel", D, { passive: !1 }), typeof ResizeObserver < "u" && (y = new ResizeObserver(() => g()), n2 && y.observe(n2), _.value && y.observe(_.value)), (e3 = _.value) == null || e3.addEventListener("load", W2, !0);
  }), hs(() => {
    var e3;
    let n2 = m.value;
    n2?.removeEventListener("wheel", D), n2?.removeEventListener("pointermove", C), n2?.removeEventListener("pointerup", O), n2?.removeEventListener("pointercancel", O), (e3 = _.value) == null || e3.removeEventListener("load", W2, !0), y?.disconnect();
  }), f2({ scroll: function(e3 = 60) {
    w.value && R(E.value - e3, { animate: !0 });
  }, measure: g }), (e3, n2) => (Zr(), eo("div", { ref_key: "viewportRef", ref: m, class: W(["d-scroll-x min-w-0 w-full overflow-hidden", { "can-scroll": w.value }]), onPointerdown: z }, [io("div", { ref_key: "trackRef", ref: _, class: W(["d-scroll-x__track inline-flex max-w-none whitespace-nowrap", { "is-dragging": h.value }]), style: V(M.value) }, [Os(e3.$slots, "default", {}, void 0, !0)], 6)], 34));
} }, [["__scopeId", "data-v-da58e916"]]);

export {
  f
};

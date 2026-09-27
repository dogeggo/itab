import {
  c
} from "./chunk-UJCW7BUN.js";
import {
  n
} from "./chunk-JBUAPD4L.js";
import {
  t
} from "./chunk-TDAIBOQY.js";
import {
  V as V2,
  _,
  z
} from "./chunk-COOHQZF5.js";
import {
  s
} from "./chunk-CL6HBMEG.js";
import {
  Av,
  Dv,
  Mu,
  nd
} from "./chunk-QX73FKBL.js";
import {
  Nu,
  Qu,
  e,
  gt,
  ht,
  qu
} from "./chunk-LEVEZLTX.js";
import {
  data_default
} from "./chunk-S7M5ZIRT.js";
import {
  o
} from "./chunk-ZBQAVDN7.js";
import {
  $o,
  Es,
  Et,
  Fr,
  Hr,
  Lt,
  St,
  V,
  W,
  Z,
  Zr,
  eo,
  fs,
  hs,
  io,
  lo,
  mn,
  po,
  sl,
  to
} from "./chunk-E6JHFIG4.js";

// output/native-current/BgMask-1dwSfhI-.js
var H = { class: "absolute inset-0 overflow-hidden" }, F = { class: "absolute inset-x-0 top-[10%] z-20 flex justify-center" }, G = { class: "f16" }, J = ["onClick"], K = { class: "f16 min-w-12 text-center" }, M = { class: "absolute inset-0" }, O = ["src", "alt"], T = ["src", "alt"], U = { key: 2, class: "absolute bottom-3 left-4 z-20 flex items-center gap-3" }, W2 = ["title"], X = /* @__PURE__ */ o({ __name: "BgMask", props: { size: String }, setup(R2) {
  let X2 = R2, Z2 = $o(() => !X2.size), N = $o(() => X2.size === "2x4"), Q = $o(() => Z2.value || N.value), Y = Et([{ type: "hailang", n: "海浪" }]), ee = Et(null), te = Et(!1), se = Et(0), ae = Et(!1), le = $o(() => {
    let e2 = Y.value.findIndex((e3) => {
      var t2;
      return e3.type === ((t2 = qu.value) == null ? void 0 : t2.type);
    });
    return e2 < 0 ? 0 : e2;
  }), oe = $o(() => {
    var e2;
    return ((e2 = qu.value) == null ? void 0 : e2.n) || "";
  }), ne = $o(() => {
    let [e2, t2] = { "2x2": [200, 200], "2x4": [500, 200], "1x2": [160, 80], "4x2": [80, 80] }[X2.size] || [1366, 768];
    return `x-oss-process=image/resize,limit_0,m_fill,w_${e2},h_${t2}/format,webp`;
  });
  function ie(e2) {
    return `${t}/${e2}.jpg?${ne.value}`;
  }
  function re(e2) {
    (function(e3) {
      ee.value && (e3 < 0 || e3 >= Y.value.length || e3 !== se.value && ee.value.setActiveItem(e3));
    })(e2), ae.value = !1;
  }
  function ue(e2) {
    var t2;
    e2 && ((t2 = qu.value) == null ? void 0 : t2.type) !== e2.type && (qu.value = e2, _(St(e2)));
  }
  function ce(e2) {
    Z2.value && ee.value ? e2 === "prev" ? ee.value.prev() : ee.value.next() : (function(e3) {
      let t2 = Y.value;
      if (!t2.length) return;
      let s2 = t2.findIndex((e4) => {
        var t3;
        return e4.type === ((t3 = qu.value) == null ? void 0 : t3.type);
      });
      ue(t2[((s2 < 0 ? 0 : s2) + e3 + t2.length) % t2.length]);
    })(e2 === "prev" ? -1 : 1);
  }
  function pe(e2) {
    se.value = e2, ue(Y.value[e2]);
  }
  function ve() {
    ae.value = !1;
  }
  return Q.value && (Promise.all([(async function() {
    var e2, t2;
    let s2 = "app-tomato-audio", a2 = await data_default.getItem(s2);
    if ((e2 = a2.data) != null && e2.length && (Y.value = a2.data), a2.isExp || !((t2 = a2.data) != null && t2.length)) try {
      let { data: e3 } = await s(), t3 = e3 || [];
      if (!t3.length) return;
      Y.value = t3, data_default.set(s2, t3, 864e6);
    } catch {
    }
  })(), Qu()]).catch(() => {
  }).then(() => {
    se.value = le.value, te.value = !0;
  }), Fr(() => {
    var e2;
    return (e2 = qu.value) == null ? void 0 : e2.type;
  }, function() {
    if (!te.value || !ee.value) return;
    let e2 = Y.value.findIndex((e3) => e3.type === qu.value.type);
    e2 !== -1 && e2 !== se.value && ee.value.setActiveItem(e2);
  })), fs(() => {
    Z2.value && document.addEventListener("click", ve);
  }), hs(() => {
    document.removeEventListener("click", ve);
  }), (e2, t2) => (Zr(), eo("div", H, [Z2.value ? (Zr(), eo(Hr, { key: 0 }, [io("div", F, [io("button", { type: "button", class: "group relative flex cursor-pointer items-center gap-1 border-0 bg-transparent p-0 text-inherit", onClick: t2[1] || (t2[1] = sl((e3) => ae.value = !ae.value, ["stop"])) }, [io("span", G, Z(oe.value), 1), lo(Lt(n), { class: W(["size-4 transition-opacity", ae.value ? "opacity-80" : "opacity-0 group-hover:opacity-80"]), stroke: 1.5 }, null, 8, ["class"]), ae.value ? (Zr(), eo("div", { key: 0, class: "absolute top-full left-1/2 z-30 mt-2 w-40 -translate-x-1/2 overflow-hidden rounded-xl bg-black/55 py-1.5 text-left text-sm backdrop-blur-md", onClick: t2[0] || (t2[0] = sl(() => {
  }, ["stop"])) }, [lo(Lt(nd), { "max-height": "256px" }, { default: mn(() => [io("ul", null, [(Zr(!0), eo(Hr, null, Es(Y.value, (e3, t3) => (Zr(), eo("li", { key: e3.type, class: W(["flex cursor-pointer items-center justify-between px-3 py-1.5 hover:bg-white/10", t3 === se.value ? "text-white" : "text-white/75"]), onClick: (e4) => re(t3) }, [io("span", null, Z(e3.n), 1), t3 === se.value ? (Zr(), to(Lt(e), { key: 0, class: "size-3.5 shrink-0 opacity-80", stroke: 2 })) : po("", !0)], 10, J))), 128))])]), _: 1 })])) : po("", !0)])]), io("i", { class: "switch-btn d-icon f28 absolute top-1/2 left-4 z-20 -translate-y-1/2 cursor-pointer", onClick: t2[2] || (t2[2] = sl((e3) => ce("prev"), ["stop"])) }, [lo(Lt(gt))]), io("i", { class: "switch-btn d-icon f28 absolute top-1/2 right-4 z-20 -translate-y-1/2 cursor-pointer", onClick: t2[3] || (t2[3] = sl((e3) => ce("next"), ["stop"])) }, [lo(Lt(ht))])], 64)) : N.value ? (Zr(), eo("div", { key: 1, class: "absolute top-1/2 right-[8%] z-20 flex -translate-y-1/2 items-center gap-1 text-white", onClick: t2[6] || (t2[6] = sl(() => {
  }, ["stop"])) }, [io("i", { class: "d-icon f22 cursor-pointer", onClick: t2[4] || (t2[4] = sl((e3) => ce("prev"), ["stop"])) }, [lo(Lt(gt))]), io("span", K, Z(Lt(qu).n), 1), io("i", { class: "d-icon f22 cursor-pointer", onClick: t2[5] || (t2[5] = sl((e3) => ce("next"), ["stop"])) }, [lo(Lt(ht))])])) : po("", !0), io("div", M, [Z2.value && te.value ? (Zr(), to(Lt(Dv), { key: 0, ref_key: "carouselRef", ref: ee, class: "tomato-bg-carousel h-full", height: "100%", "initial-index": le.value, autoplay: !1, "indicator-position": "none", arrow: "never", onChange: pe }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(Y.value, (e3) => (Zr(), to(Lt(Av), { key: e3.type }, { default: mn(() => [io("div", { class: "absolute inset-0 z-1", style: V({ background: e3.m || Lt(qu).m }) }, null, 4), io("img", { class: "h-full w-full object-cover", src: ie(e3.type), alt: e3.n, loading: "lazy" }, null, 8, O)]), _: 2 }, 1024))), 128))]), _: 1 }, 8, ["initial-index"])) : (Zr(), eo(Hr, { key: 1 }, [io("div", { class: "absolute inset-0 z-1", style: V({ background: Lt(qu).m }) }, null, 4), io("img", { class: "h-full w-full object-cover", src: ie(Lt(qu).type), alt: Lt(qu).n }, null, 8, T)], 64))]), Z2.value ? (Zr(), eo("div", U, [lo(Lt(Mu), { disabled: Lt(Nu).status === "stop", content: "需要停止后才能设置时间", placement: "top" }, { default: mn(() => [io("button", { type: "button", class: W(["f24 inline-flex shrink-0 items-center justify-center border-0 bg-transparent p-0 text-inherit", Lt(Nu).status === "stop" ? "cursor-pointer" : "cursor-not-allowed opacity-40"]), title: Lt(Nu).status === "stop" ? "设置时长" : "", onClick: t2[7] || (t2[7] = sl((...e3) => Lt(V2) && Lt(V2)(...e3), ["stop"])) }, [lo(Lt(c), { stroke: 1.5 })], 10, W2)]), _: 1 }, 8, ["disabled"]), lo(z)])) : po("", !0)]));
} }, [["__scopeId", "data-v-076cb55f"]]);

export {
  X
};

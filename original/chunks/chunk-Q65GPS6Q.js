import {
  o
} from "./chunk-ZBQAVDN7.js";
import {
  $o,
  Lt,
  Os,
  Zr,
  eo,
  io
} from "./chunk-E6JHFIG4.js";

// output/native-current/ProgressBar-WZ5SZ0C6.js
var l = { class: "relative size-full" }, i = { class: "relative z-10 grid h-full w-full" }, d = { class: "tomato-ring pointer-events-none absolute inset-0 z-0 size-full", viewBox: "0 0 420 420", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true" }, u = ["d", "stroke"], c = ["d", "stroke", "stroke-dashoffset"], p = 198, f = /* @__PURE__ */ o({ __name: "ProgressBar", props: { percentage: { type: Number, default: 0 }, color: { type: String, default: "#303333" }, trackOpacity: { type: Number, default: 0.35 } }, setup(t2) {
  function f2(t3, e2, s2, o2) {
    let a2 = o2 * Math.PI / 180;
    return { x: t3 + s2 * Math.cos(a2), y: e2 + s2 * Math.sin(a2) };
  }
  let h = (function() {
    let t3 = f2(210, 210, p, 118), e2 = f2(210, 210, p, 422);
    return `M ${t3.x.toFixed(2)} ${t3.y.toFixed(2)} A 198 198 0 1 1 ${e2.x.toFixed(2)} ${e2.y.toFixed(2)}`;
  })(), g = t2, k = $o(() => 100 - Math.min(100, Math.max(0, Number(g.percentage) || 0)));
  return (e2, p2) => (Zr(), eo("div", l, [io("div", i, [Os(e2.$slots, "default", {}, void 0, !0)]), (Zr(), eo("svg", d, [io("path", { d: Lt(h), fill: "none", stroke: `rgba(255,255,255,${t2.trackOpacity})`, "stroke-width": 12, "stroke-linecap": "round" }, null, 8, u), io("path", { d: Lt(h), fill: "none", stroke: t2.color, "stroke-width": 12, "stroke-linecap": "round", pathLength: "100", "stroke-dasharray": "100", "stroke-dashoffset": k.value, class: "tomato-ring-progress" }, null, 8, c)]))]));
} }, [["__scopeId", "data-v-452365fd"]]);

export {
  f
};

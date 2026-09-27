import {
  Do
} from "./chunk-E6JHFIG4.js";

// output/native-current/tailwind-S0oaxdkI.js
var o = (t2, o2) => {
  let e2 = t2.__vccOpts || t2;
  for (let [r2, s] of o2) e2[r2] = s;
  return e2;
};
var e = { outline: { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" }, filled: { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "currentColor", stroke: "none" } };
var r = (o2, r2, s, l) => ({ color: s2 = "currentColor", size: i = 24, stroke: n = 2, title: c, class: w, ...h }, { attrs: a, slots: d }) => {
  let u = [...l.map((o3) => Do(...o3)), ...d.default ? [d.default()] : []];
  return c && (u = [Do("title", c), ...u]), Do("svg", { ...e[o2], width: i, height: i, ...a, class: ["tabler-icon", `tabler-icon-${r2}`], ...o2 === "filled" ? { fill: s2 } : { "stroke-width": n ?? e[o2]["stroke-width"], stroke: s2 }, ...h }, u);
};

export {
  o,
  r
};
/**
 * @license @tabler/icons-vue v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */

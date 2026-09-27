import {
  g
} from "./chunk-KKRYL5KL.js";
import {
  a,
  s
} from "./chunk-YAQ5Z3UW.js";

// output/native-current/cnCacheFresh-K4kdGDk6.js
var r = 900;
function o(e2, t2) {
  let n2 = new Date(e2);
  return n2.setHours(0, 0, 0, 0), n2.setMinutes(t2), n2.getTime();
}
function s2(e2 = /* @__PURE__ */ new Date()) {
  let r2 = e2.getDay();
  return !(r2 < 1 || r2 > 5) && !s(a(e2));
}
function i(t2, i2 = /* @__PURE__ */ new Date()) {
  let u2 = Number(t2);
  if (!Number.isFinite(u2)) return !1;
  let a2 = g();
  if (a2 === "open") return !1;
  if (a2 === "lunch") {
    if (a(new Date(u2)) !== a(i2)) return !1;
    let e2 = new Date(u2);
    return 60 * e2.getHours() + e2.getMinutes() >= 685;
  }
  return u2 >= (function(e2 = /* @__PURE__ */ new Date()) {
    let t3 = new Date(e2), n2 = 60 * t3.getHours() + t3.getMinutes();
    if (s2(t3) && n2 >= r) return o(t3, r);
    let i3 = new Date(t3);
    i3.setHours(12, 0, 0, 0);
    for (let u3 = 0; u3 < 14; u3++) if (i3.setDate(i3.getDate() - 1), s2(i3)) return o(i3, r);
    return i3.setTime(t3.getTime()), i3.setDate(i3.getDate() - 7), o(i3, r);
  })(i2);
}
function u(t2, n2 = /* @__PURE__ */ new Date()) {
  return g() === "open" || !i(t2, n2);
}

export {
  i,
  u
};

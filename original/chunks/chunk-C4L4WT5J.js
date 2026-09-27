import {
  u,
  z
} from "./chunk-AFECQBGL.js";

// output/native-current/dateHelpers-CHVulN6M.js
u.extend(z);
var n = "1582-10-14 23:59:59";
function a(t2) {
  let e2 = t2 instanceof Date ? t2 : new Date(t2);
  return e2.getFullYear() === 1582 && e2.getMonth() === 9 && e2.getDate() > 4 && e2.getDate() < 15;
}
function r(e2) {
  return u(e2).isBefore(n);
}
function o(t2) {
  let e2 = t2 instanceof Date ? t2 : new Date(t2);
  return `${e2.getFullYear()}-${String(e2.getMonth() + 1).padStart(2, "0")}-${String(e2.getDate()).padStart(2, "0")}`;
}
function f(t2) {
  return r(t2) ? 10 : 0;
}
function s(e2) {
  let a2 = u(e2);
  return a2.isBefore(n) || a2.year() !== 1582 ? 0 : -10;
}
function u2(e2, n2 = /* @__PURE__ */ new Date(), a2 = !1) {
  let r2 = u(n2).startOf("day"), o2 = u(e2).startOf("day").diff(r2, "day") + f(e2) - f(n2);
  return a2 ? Math.abs(o2) : o2;
}
function i(e2) {
  return u(e2).dayOfYear() + s(e2);
}

export {
  n,
  a,
  r,
  o,
  f,
  s,
  u2 as u,
  i
};

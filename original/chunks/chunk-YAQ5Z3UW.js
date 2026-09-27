import {
  s
} from "./chunk-GDVT6VLN.js";
import {
  u
} from "./chunk-AFECQBGL.js";
import {
  t
} from "./chunk-C332WR7G.js";

// output/native-current/holidays-D2zetp7A.js
var n = /* @__PURE__ */ new Set();
function a(t2 = /* @__PURE__ */ new Date()) {
  return u(t2).format("YYYY-MM-DD");
}
function o(t2) {
  var e2;
  return ((e2 = s.value) == null ? void 0 : e2[t2]) || null;
}
async function i(e2) {
  let a2 = Number(e2);
  if (!Number.isFinite(a2)) return {};
  let i2 = o(a2);
  if (i2 && Object.keys(i2).length) return i2;
  let { default: u22 } = await t(async () => {
    let { default: t2 } = await import("./getHoliday-DTdANiFr-V5IEKSPF.js");
    return { default: t2 };
  }, []);
  if (n.has(a2)) {
    let t2 = await u22(a2) || {};
    return s.value = { ...s.value, [a2]: t2 }, t2;
  }
  n.add(a2);
  try {
    let t2 = await u22(a2) || {};
    return s.value = { ...s.value, [a2]: t2 }, t2;
  } finally {
    n.delete(a2);
  }
}
async function u2(t2 = /* @__PURE__ */ new Date()) {
  let e2 = t2.getFullYear();
  await Promise.all([e2 - 1, e2].map(i));
}
function s2(t2) {
  if (!t2 || typeof t2 != "string") return !1;
  let e2 = Number(t2.slice(0, 4));
  if (!Number.isFinite(e2)) return !1;
  let r2 = o(e2);
  return !(!r2 || typeof r2 != "object") && Object.prototype.hasOwnProperty.call(r2, t2);
}

export {
  a,
  i,
  u2 as u,
  s2 as s
};

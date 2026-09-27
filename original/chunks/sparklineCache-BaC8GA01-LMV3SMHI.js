import {
  t
} from "./chunk-C332WR7G.js";

// output/native-current/sparklineCache-BaC8GA01.js
var e = "app-stock-sparkline";
function r(t2) {
  if (!t2 || typeof t2 != "object" || Array.isArray(t2)) return {};
  let e2 = t2.map && typeof t2.map == "object" && !Array.isArray(t2.map) ? t2.map : t2, r2 = {};
  for (let [n2, i2] of Object.entries(e2)) {
    if (n2 === "map" || !i2 || typeof i2 != "object" || Array.isArray(i2) || !("prices" in i2)) continue;
    let t3 = Array.isArray(i2.prices) ? i2.prices.filter((t4) => Number.isFinite(t4)) : [], e3 = Number(i2.updatedAt);
    t3.length && Number.isFinite(e3) && (r2[n2] = { prices: t3, updatedAt: e3 });
  }
  return r2;
}
function n(t2) {
  return Array.isArray(t2) ? t2.filter((t3) => Number.isFinite(t3)) : [];
}
async function i() {
  let { default: n2 } = await t(async () => {
    let { default: t2 } = await import("./cache-VMWPWM72.js");
    return { default: t2 };
  }, []);
  return r(await n2.get(e));
}
function o(t2, e2) {
  return e2 && t2 && t2[e2] || null;
}
async function s(i2, o2) {
  if (!i2 || typeof i2 != "object") return null;
  let s2 = Date.now(), a2 = {};
  for (let [t2, e2] of Object.entries(i2)) {
    if (!t2) continue;
    let r2 = n(e2);
    r2.length && (a2[t2] = { prices: r2, updatedAt: s2 });
  }
  if (!Object.keys(a2).length) return null;
  let { default: c2 } = await t(async () => {
    let { default: t2 } = await import("./cache-VMWPWM72.js");
    return { default: t2 };
  }, []), u2 = (function(t2, e2) {
    if (Array.isArray(e2) && e2.length) {
      let r3 = new Set(e2.map(String)), n2 = {};
      for (let e3 of r3) t2[e3] && (n2[e3] = t2[e3]);
      return n2;
    }
    let r2 = Object.entries(t2).sort((t3, e3) => (e3[1].updatedAt || 0) - (t3[1].updatedAt || 0));
    return Object.fromEntries(r2.slice(0, 3));
  })({ ...r(await c2.get(e)), ...a2 }, Array.isArray(o2) && o2.length ? [.../* @__PURE__ */ new Set([...o2.map(String), ...Object.keys(a2)])] : o2);
  return await c2.set(e, u2), u2;
}
var a = {}, c = null, u = [], f = !1, l = Promise.resolve();
function p(t2, e2, r2) {
  if (!t2) return Promise.resolve(null);
  let i2 = n(e2);
  return i2.length ? new Promise((e3, n2) => {
    a[t2] = i2, Array.isArray(r2) && r2.length && (c = r2), u.push({ resolve: e3, reject: n2 }), f || (f = !0, queueMicrotask(() => {
      f = !1;
      let t3 = a, e4 = c, r3 = u;
      a = {}, c = null, u = [], Object.keys(t3).length && (l = l.then(async () => {
        try {
          let n3 = await s(t3, e4);
          for (let t4 of r3) t4.resolve(n3);
        } catch (n3) {
          for (let t4 of r3) t4.reject(n3);
        }
      }).catch(() => {
      }));
    }));
  }) : Promise.resolve(null);
}
export {
  i as loadSparklineCache,
  o as readSparkEntry,
  s as writeSparkEntries,
  p as writeSparkEntry
};

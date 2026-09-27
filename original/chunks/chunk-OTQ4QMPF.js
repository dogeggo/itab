import {
  hi
} from "./chunk-LEVEZLTX.js";
import {
  f
} from "./chunk-YQ4PBQUM.js";
import {
  t
} from "./chunk-C332WR7G.js";
import {
  $o,
  Tt,
  jt
} from "./chunk-E6JHFIG4.js";

// output/native-current/useGameList-D_Fozykn.js
var i = "app-games-list", r = "app-games", o = 200, s = Tt([]), c = Tt(!1), v = Tt(!1), g = null, p = !1, d = 1;
function h(a2, t2 = 80) {
  return hi(a2, t2);
}
function m(e2) {
  e2?.length && (f.set(r, e2.slice(0, 4)), t(() => import("./wallpaper-cache-RQZNW3GI.js"), []).then((a2) => {
    a2.default.set(i, e2, 864e5);
  }));
}
function f2(a2, t2) {
  return t2 != null && a2 >= t2 ? (c.value = !0, void (d = Math.ceil(a2 / o) + 1)) : a2 === 0 ? (c.value = !1, void (d = 1)) : a2 % o !== 0 ? (c.value = !0, void (d = Math.ceil(a2 / o) + 1)) : (c.value = !1, void (d = a2 / o + 1));
}
function y() {
  if (s.value.length) return;
  let a2 = (function() {
    let a3 = f.get(r);
    return Array.isArray(a3) ? a3 : [];
  })();
  a2.length && (s.value = a2);
}
async function _(t2) {
  let { gameList: e2 } = await t(async () => {
    let { gameList: a2 } = await import("./game-CFsRQ0UA-JM2RVPLN.js");
    return { gameList: a2 };
  }, ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]), l2 = await e2({ page: t2, size: o });
  return { data: Array.isArray(l2.data) ? l2.data : [], count: l2.count };
}
async function j() {
  return g || (g = (async () => {
    y(), s.value.length || (v.value = !0);
    try {
      let t2 = [];
      try {
        let e2 = (await t(() => import("./wallpaper-cache-RQZNW3GI.js"), [])).default, l2 = await e2.getItem(i);
        if (t2 = Array.isArray(l2.data) ? l2.data : [], t2.length && (s.value = t2, f2(t2.length)), !l2.isExp && t2.length) return s.value;
      } catch {
      }
      try {
        let { data: a2, count: e2 } = await _(1);
        a2.length ? (s.value = a2, f2(a2.length, e2), m(a2)) : t2.length || (c.value = !0);
      } catch {
        t2.length ? f2(t2.length) : c.value = s.value.length > 0;
      }
      return s.value;
    } finally {
      v.value = !1, g = null;
    }
  })(), g);
}
async function w() {
  if (!(c.value || p || (g && await g, c.value || p || d < 2 && s.value.length < o))) {
    p = !0;
    try {
      let { data: a2, count: t2 } = await _(d);
      if (!a2.length) return void (c.value = !0);
      s.value = [...s.value, ...a2], f2(s.value.length, t2), m(s.value);
    } catch {
    } finally {
      p = !1;
    }
  }
}
function A(a2) {
  let t2 = Tt(0), e2 = $o(() => jt(a2) === "2x2" ? 2 : 4), i2 = $o(() => {
    let a3 = e2.value, l2 = t2.value * a3;
    return s.value.slice(l2, l2 + a3);
  });
  return { list: s, pageList: i2, page: t2, pageSize: e2, isFinally: c, loading: v, load: j, loadMore: w, next: function() {
    (t2.value + 1) * e2.value >= s.value.length || (t2.value += 1);
  }, prev: function() {
    t2.value <= 0 || (t2.value -= 1);
  }, resetPage: function() {
    t2.value = 0;
  } };
}

export {
  i,
  r,
  h,
  j,
  w,
  A
};

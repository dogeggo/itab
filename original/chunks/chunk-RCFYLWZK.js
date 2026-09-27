import {
  $p,
  Ap,
  Ip,
  Pp,
  Tp,
  jp
} from "./chunk-LEVEZLTX.js";
import {
  u
} from "./chunk-AFECQBGL.js";
import {
  f,
  g
} from "./chunk-YQ4PBQUM.js";
import {
  t
} from "./chunk-C332WR7G.js";
import {
  Et,
  Tt
} from "./chunk-E6JHFIG4.js";

// output/native-current/store-89ezOrEq.js
var w = 6e5, d = 12e5, y = 18e5, p = g(() => {
  let a2 = $p(), p2 = Et({ ...Pp, ...Ip() }), m2 = Et([]), v = Et([]), h = Et({ now: {}, location: {} }), _ = Et([]), g2 = Et(!1), j = Tt(!1), A = null;
  function E(t2) {
    t2 && typeof t2 == "object" && (p2.value = t2, (function(t3) {
      let i2 = Tp(t3);
      f.set("weather", i2), a2.value = i2;
    })(t2));
  }
  async function D() {
    return (await t(async () => {
      let { default: t2 } = await import("./cache-VMWPWM72.js");
      return { default: t2 };
    }, [])).default;
  }
  async function I(a3, { force: e2 = !1, isDefault: n2 = !0 } = {}) {
    var s2;
    let r2 = await D(), l2 = await r2.getItem("weather"), u2 = a3 && a3.id;
    if (!e2 && l2 && l2.data && !l2.isExp && (!u2 || ((s2 = l2.data.location) == null ? void 0 : s2.id) === u2)) return n2 && E(l2.data), l2.data;
    let c2 = a3;
    if (!(c2 && c2.id || (c2 = await (async function() {
      let { getLocation: a4 } = await t(async () => {
        let { getLocation: t2 } = await import("./baseApi-DfFalwCT-POMP2QRO.js");
        return { getLocation: t2 };
      }, ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]), e3 = await a4({ lang: "cn" });
      return e3.status == 1 ? null : e3.data || {};
    })(), c2))) return;
    let { getWeatherApi: f2 } = await t(async () => {
      let { getWeatherApi: t2 } = await import("./weatherApi-DLmFYawr-V4H5VNDG.js");
      return { getWeatherApi: t2 };
    }, ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]), d2 = (await f2({ location: c2.id, type: c2.type, country: c2.country })).data;
    return d2 && d2.status == "ok" ? (d2.location = { adm1: c2.adm1, adm2: c2.adm2, name: c2.name, id: c2.id, ip: c2.ip, country: c2.country, location: c2.location, isAuto: !a3 }, d2.moment = jp(d2.sun || {}), d2.updateTime = u().valueOf(), a3 || (h.value = d2, await r2.set("weather-default-city", d2, y)), n2 && (await r2.set("weather", d2, w), E(d2)), d2) : { now: {}, location: {} };
  }
  async function L(a3 = !1) {
    let e2 = await D(), i2 = await e2.getItem("weather24H");
    if (i2 && i2.data && (m2.value = i2.data.hourly || []), !a3 && i2 && !i2.isExp) return i2.data || [];
    let n2 = { location: p2.value.location && p2.value.location.id, unit: "m" }, { getWeather24HApi: o2 } = await t(async () => {
      let { getWeather24HApi: t2 } = await import("./weatherApi-DLmFYawr-V4H5VNDG.js");
      return { getWeather24HApi: t2 };
    }, ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]), s2 = (await o2(n2) || {}).data;
    return s2 && (m2.value = s2.hourly || [], m2.value.length && await e2.set("weather24H", s2, d)), s2;
  }
  async function C() {
    return A || (A = (async () => {
      let t2 = await D(), e2 = await t2.getItem("weather");
      e2 && e2.data && E(e2.data), e2 && !e2.isExp && e2.data || await I(a2.value.location, { force: !0, isDefault: !0 }), await L(!1), j.value = !0;
    })(), A);
  }
  return C(), { current: p2, hourly24: m2, cityList: v, defaultCity: h, cityOptions: _, loading: g2, ready: j, init: C, initCities: async function() {
    let t2 = await D(), a3 = await t2.getItem("weather-default-city") || {};
    if (h.value = a3.data || { now: {}, location: {} }, a3.isExp) {
      let a4 = await I(null, { force: !0, isDefault: !1 });
      a4 && a4.location && (h.value = a4, await t2.set("weather-default-city", a4, y));
    }
    let e2 = await t2.getItem("weather-list") || {};
    if (v.value = e2.data || [], !e2.isExp) return;
    let i2 = v.value;
    if (!i2.length) return;
    let n2 = await Promise.all(i2.map((t3) => I({ ...t3.location, type: "simple" }, { force: !0, isDefault: !1 })));
    v.value = n2.filter((t3) => t3 && t3.location), await t2.set("weather-list", Ap(v.value), y);
  }, refresh: I, load24h: L, locate: async function() {
    g2.value = !0;
    try {
      await I(null, { force: !0, isDefault: !0 }), await L(!0);
    } finally {
      g2.value = !1;
    }
  }, selectCity: async function(t2) {
    if (t2) {
      g2.value = !0;
      try {
        await I(t2, { force: !0, isDefault: !0 }), await L(!0);
      } finally {
        setTimeout(() => {
          g2.value = !1;
        }, 100);
      }
    }
  }, searchCity: async function(a3) {
    _.value = [];
    let e2 = String(a3 || "").trim();
    if (!e2 || (/[\u4e00-\u9fff]/.test(e2) ? e2.length < 2 : e2.length < 3)) return;
    let { getCityLookup: i2 } = await t(async () => {
      let { getCityLookup: t2 } = await import("./weatherApi-DLmFYawr-V4H5VNDG.js");
      return { getCityLookup: t2 };
    }, ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]), n2 = await i2({ location: e2 });
    _.value = n2.data || [];
  }, addCity: async function(t2) {
    if (!t2 || v.value.some((a4) => a4.location && a4.location.id === t2)) return;
    let a3 = _.value.find((a4) => a4.id == t2);
    if (a3) {
      g2.value = !0;
      try {
        let t3 = await I(a3, { force: !0, isDefault: !1 });
        t3 && t3.location && t3.location.id && (v.value = [...v.value, t3], await (await D()).set("weather-list", Ap(v.value), y));
      } finally {
        setTimeout(() => {
          g2.value = !1;
        }, 200);
      }
    }
  }, removeCity: async function(t2) {
    v.value.splice(t2, 1), await (await D()).set("weather-list", Ap(v.value), y);
  } };
});
async function m(t2, a2, e2 = !0) {
  return p().refresh(t2, { force: !!a2, isDefault: e2 });
}

export {
  p,
  m
};

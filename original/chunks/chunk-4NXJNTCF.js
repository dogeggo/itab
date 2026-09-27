import {
  a,
  o
} from "./chunk-C4L4WT5J.js";
import {
  t
} from "./chunk-C332WR7G.js";

// output/native-current/getHoliday-DTdANiFr.js
var n = 864e6, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
function o2(t2) {
  if (t2 == null || typeof t2 != "object") return null;
  let a2 = !!(t2.isWork ?? t2.work), e2;
  if (t2.isRest != null) e2 = !!t2.isRest;
  else if (t2.rest != null) e2 = !!t2.rest;
  else if (t2.isOffDay != null) e2 = !!t2.isOffDay;
  else if (a2) e2 = !1;
  else {
    if (t2.holiday == null) return null;
    e2 = !!t2.holiday;
  }
  return a2 || e2 ? { isWork: a2, isRest: e2 } : null;
}
function s(t2) {
  if (!t2) return {};
  let a2 = {}, e2 = Array.isArray(t2) ? t2.map((t3) => [t3.date || t3.day, t3]) : Object.entries(t2);
  for (let [n2, r2] of e2) {
    let t3 = typeof n2 == "string" && /^\d{4}-\d{2}-\d{2}$/.test(n2) ? n2 : typeof r2?.date == "string" ? r2.date : null;
    if (!t3) continue;
    let e3 = o2(r2);
    e3 && (a2[t3] = e3);
  }
  return a2;
}
async function l(n2 = 2024) {
  let { LegalHoliday: r2 } = await t(async () => {
    let { LegalHoliday: t2 } = await import("./vendor-tyme4ts-D81ry8hI-TK44FSS7.js");
    return { LegalHoliday: t2 };
  }, []), i2 = {}, o22 = new Date(Number(n2), 0, 1), s2 = new Date(Number(n2), 11, 31);
  for (; o22 <= s2; ) {
    if (!a(o22)) {
      let t2 = r2.fromYmd(o22.getFullYear(), o22.getMonth() + 1, o22.getDate());
      t2 && (i2[o(o22)] = { isWork: t2.isWork(), isRest: !t2.isWork() });
    }
    o22.setDate(o22.getDate() + 1);
  }
  return i2;
}
async function c(a2) {
  let e2 = `app-calendar-holiday_${a2}`;
  try {
    let r2 = await (async function() {
      return (await t(async () => {
        let { default: t2 } = await import("./cache-VMWPWM72.js");
        return { default: t2 };
      }, [])).default;
    })(), i2 = await r2.getItem(e2), o22 = s(i2.data);
    if (i2.data && i2.isExp) return t(async () => {
      let { calendarHoliday: t2 } = await import("./xiayigejiaqi-DUNXEydK-TECAJDOC.js");
      return { calendarHoliday: t2 };
    }, ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]).then(({ calendarHoliday: t2 }) => t2({ year: a2 })).then((t2) => {
      t2.data && r2.set(e2, t2.data, n);
    }).catch(() => {
    }), Object.keys(o22).length ? o22 : await l(a2);
    if (!i2.data) {
      let { calendarHoliday: i3 } = await t(async () => {
        let { calendarHoliday: t2 } = await import("./xiayigejiaqi-DUNXEydK-TECAJDOC.js");
        return { calendarHoliday: t2 };
      }, ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]), { data: o3 } = await i3({ year: a2 });
      if (o3) {
        r2.set(e2, o3, n);
        let t2 = s(o3);
        return Object.keys(t2).length ? t2 : await l(a2);
      }
      return await l(a2);
    }
    return Object.keys(o22).length ? o22 : await l(a2);
  } catch {
    return await l(a2);
  }
}
var d = async (t2) => {
  let a2 = String(t2);
  if (i.has(a2)) return i.get(a2);
  if (r.has(a2)) return r.get(a2);
  let e2 = c(a2).then((t3) => (i.set(a2, t3), t3)).finally(() => r.delete(a2));
  return r.set(a2, e2), e2;
};

export {
  d
};

import {
  u
} from "./chunk-AFECQBGL.js";
import {
  Ee,
  f,
  g,
  le
} from "./chunk-YQ4PBQUM.js";
import {
  t
} from "./chunk-C332WR7G.js";
import {
  Hn,
  ge
} from "./chunk-C3WGXGFI.js";
import {
  _
} from "./chunk-USGTF4JI.js";
import {
  Et,
  Fr,
  St,
  Tt
} from "./chunk-E6JHFIG4.js";

// output/native-current/store-DQmDOK8m.js
var y = null, v = () => {
  y || (y = new Audio(), y.src = "/original/audio/complete.mp3"), y.load(), y.play();
}, m = (t2, e2) => {
  let o2 = Array.isArray(t2) ? t2 : [];
  if (e2 === "in-all") return o2;
  if (e2 === "in-today") {
    let t3 = u().format("YYYYMMDD");
    return o2.filter((e3) => u(e3.expire).format("YYYYMMDD") <= t3);
  }
  if (e2 === "in-week") {
    let t3 = u().subtract(7, "day").format("YYYYMMDD");
    return o2.filter((e3) => u(e3.expire).format("YYYYMMDD") > t3);
  }
  return o2.filter((t3) => t3.folderId === e2);
}, p = (t2) => ge(Array.isArray(t2) ? t2 : [], ["ut", "ct", "done"], ["asc", "asc", "asc"]), Y = (t2) => {
  let e2 = Array.isArray(t2) ? t2 : [];
  return e2.length ? 100 * e2.filter((t3) => t3.done).length / e2.length + "%" : "0%";
}, _2 = (t2, e2) => {
  let o2 = "#1890ff";
  return e2 === "list" && (o2 = "rgba(var(--alpha-color), 0.4)"), t2 ? u().format("YYYY-MM-DD") == t2 ? { color: "#1890ff", text: "今天" } : u().subtract(1, "day").format("YYYY-MM-DD") == t2 ? { color: "#f46f6f", text: "昨天" } : u().add(1, "day").format("YYYY-MM-DD") == t2 ? { color: o2, text: "明天" } : t2 > u().add(1, "day").format("YYYY-MM-DD") ? { color: o2, text: t2 } : t2 < u().subtract(1, "day").format("YYYY-MM-DD") ? { color: "#f46f6f", text: t2 } : { color: o2, text: t2 } : { color: "", text: t2 };
}, D = "app-todo-check", g2 = ["in-today", "in-all", "in-week"], w = [{ name: "待办事项", id: "in-plan" }];
function h(t2) {
  return t2 && typeof t2 == "object" && (t2.id || (t2.id = _())), t2;
}
function A(t2) {
  try {
    return JSON.parse(JSON.stringify(t2 ?? []));
  } catch {
    return [];
  }
}
function M() {
  return w.map((t2) => ({ ...t2 }));
}
function x() {
  let t2 = /* @__PURE__ */ new Date(), e2 = (t3) => String(t3).padStart(2, "0");
  return `${t2.getFullYear()}-${e2(t2.getMonth() + 1)}-${e2(t2.getDate())}`;
}
var E = Et(Ee(f.get("todo"))), b = () => E, j = g(() => {
  let e2 = b(), i2 = Et([]), d2 = Et(M()), y2 = Tt(!1), v2 = Tt(Ee(e2.value).filter((t2) => t2 && !t2.done).length), m2 = 0, Y2 = null, _22 = !1, w2 = !1;
  function E2() {
    let t2 = Ee(St(i2.value)), a2 = A(p(t2).filter((t3) => !t3.done).slice(0, 5));
    f.set("todo", a2), e2.value = a2, v2.value = t2.filter((t3) => !t3.done).length;
  }
  function j2(t2) {
    i2.value = Ee(t2).map(h), E2();
  }
  function P2(t2) {
    d2.value = Array.isArray(t2) ? t2 : M();
  }
  let I = Promise.resolve();
  function O(t2) {
    return I = I.then(t2, t2), I;
  }
  async function T() {
    return O(async () => {
      await (await t(async () => {
        let { default: t2 } = await import("./cache-VMWPWM72.js");
        return { default: t2 };
      }, [])).default.set("todo", A(i2.value));
    });
  }
  async function F() {
    return O(async () => {
      await (await t(async () => {
        let { default: t2 } = await import("./cache-VMWPWM72.js");
        return { default: t2 };
      }, [])).default.set("todoFolder", A(d2.value));
    });
  }
  let S = Hn(async () => {
    await T();
  }, 500), L = Hn(async () => {
    await F();
  }, 500);
  function V() {
    return m2 ? Promise.resolve() : Promise.all([S.flush() || Promise.resolve(), L.flush() || Promise.resolve()]);
  }
  async function C() {
    if (!y2.value)
      return Y2 || (Y2 = (async () => {
        m2++;
        try {
          let db = (await import("./cache-VMWPWM72.js")).default;
          j2(await db.get("todo") ?? []), P2(await db.get("todoFolder") ?? M());
        } finally {
          m2--, y2.value = !0;
        }
      })()), Y2;
  }
  function N(t2) {
    y2.value ? t2() : C().then(t2);
  }
  function R({ id: t2, ct: e3, done: o2 = !0 } = {}) {
    let a2 = () => {
      let a3 = i2.value.find((e4) => e4.id === t2);
      a3 && (a3.done = !!o2, a3.ut = Date.now());
    };
    a2(), y2.value || N(a2);
  }
  return Fr(i2, () => {
    m2 || (E2(), S());
  }, { deep: !0, flush: "sync" }), Fr(d2, () => {
    !m2 && y2.value && L();
  }, { deep: !0, flush: "sync" }), typeof window < "u" && (window.addEventListener("pagehide", V), document.addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" && V();
  })), le.on(D, R), C(), { list: i2, folders: d2, todoCount: v2, ready: y2, init: C, hydrateTodos: function(t2) {
    return _22 = !0, S.cancel(), m2++, j2(t2), m2--, T();
  }, hydrateFolders: function(t2) {
    return w2 = !0, L.cancel(), m2++, P2(t2), m2--, F();
  }, addTodo: function({ content: t2, expire: e3, folderId: o2 }) {
    N(() => {
      let a2 = Date.now(), n2 = g2.includes(o2) ? "" : o2;
      i2.value.unshift({ id: _(), folderId: n2, content: t2, expire: e3 || (o2 === "in-today" ? x() : ""), color: "", done: !1, ct: a2, ut: a2 });
    });
  }, removeTodo: function(t2) {
    N(() => {
      let e3 = i2.value.findIndex((e4) => e4 === t2 || t2 && t2.id && e4.id === t2.id);
      e3 >= 0 && i2.value.splice(e3, 1);
    });
  }, toggleDone: R, clearDone: function() {
    N(() => {
      i2.value = i2.value.filter((t2) => !t2.done);
    });
  }, addFolder: function() {
    N(() => {
      d2.value.push({ name: "待办事项", id: _() });
    });
  }, removeFolder: function(t2) {
    N(() => {
      let e3 = d2.value.findIndex((e4) => e4.id === t2.id);
      e3 >= 0 && d2.value.splice(e3, 1), i2.value = i2.value.filter((e4) => e4.folderId !== t2.id);
    });
  }, applyNativeSnapshot(items, folders) {
    S.cancel(), L.cancel(), m2++;
    try {
      j2(items), P2(folders);
    } finally {
      m2--;
    }
  }, persistNow: V, getPlainList: function() {
    return A(i2.value);
  }, getPlainFolders: function() {
    return A(d2.value);
  } };
}), P = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, TODO_CHECK_EVENT: D, useTodo: b, useTodoStore: j }, Symbol.toStringTag, { value: "Module" }));

export {
  v,
  m,
  p,
  Y,
  _2 as _,
  j,
  P
};

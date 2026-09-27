import {
  n
} from "./chunk-WGCOLTAW.js";
import {
  wallpaper_cache_default
} from "./chunk-KH6YM5E4.js";
import {
  f
} from "./chunk-BJRSIPJ7.js";
import {
  bw,
  kk,
  nd
} from "./chunk-QX73FKBL.js";
import {
  o
} from "./chunk-ZBQAVDN7.js";
import {
  Es,
  Et,
  Hr,
  Lt,
  Os,
  W,
  Zr,
  eo,
  ht,
  io,
  lo,
  mn,
  po,
  to,
  uo
} from "./chunk-E6JHFIG4.js";

// output/native-current/d-infinite-scroll-DynvfHfi.js
var w = { class: "d-fieldset f13 text-center" }, F = { class: "d-legend" }, S = o({}, [["render", function(a2, e2) {
  return Zr(), eo("fieldset", w, [io("legend", F, [Os(a2.$slots, "default", {}, () => [e2[0] || (e2[0] = uo("已经到底了"))], !0)]), e2[1] || (e2[1] = io("div", null, null, -1))]);
}], ["__scopeId", "data-v-2aa17476"]]), x = { key: 0, class: "ac" }, k = { class: "ac mt5", style: { clear: "both" } }, C = { __name: "d-infinite-scroll", props: { url: String, height: String, customClass: String, params: { type: Object, default: () => ({ page: 1, size: 16 }) }, method: { type: String, default: "get" }, btnColor: String, moreBtn: { type: Boolean, default: !0 }, cache: { type: Boolean, default: !0 }, cacheTime: { type: Number, default: 36e6 } }, setup(s2, { expose: w2 }) {
  let F2 = s2, C2 = ht({ loading: !1, isFinally: !1, moreLoading: !1 }), L = Et([]), $ = !1, B = 0;
  async function E(a2) {
    if (C2.isFinally || !a2 && $) return;
    $ = !0;
    let e2 = ++B;
    try {
      a2 ? F2.params.page = 1 : F2.params.page += 1;
      let t2 = `${F2.url}?${Object.values(F2.params).join("")}`, s3 = F2.cache && !F2.params.name, o2 = !1;
      if (s3) {
        let s4 = await wallpaper_cache_default.getItem(t2);
        if (e2 !== B) return;
        let n3 = s4.data || [];
        if (!s4.isExp) return void (L.value = a2 ? n3 : [...L.value, ...n3]);
        a2 && (L.value = n3, o2 = n3.length > 0);
      }
      a2 && (C2.loading = !o2), C2.moreLoading = !0;
      let n2 = await n({ url: F2.url, method: F2.method || "get", params: F2.params });
      if (e2 !== B) return;
      let i2 = n2.data || [];
      s3 && i2.length && wallpaper_cache_default.set(t2, i2, F2.cacheTime), L.value = a2 ? i2 : [...L.value, ...i2], C2.isFinally = n2.count == L.value.length;
    } finally {
      e2 === B && ($ = !1, C2.moreLoading = !1, C2.loading = !1);
    }
  }
  return E(!0), w2({ reload: function(a2) {
    C2.isFinally = !1, E(a2);
  }, delete: function(a2) {
    L.value.splice(a2, 1);
  } }), (l2, u2) => {
    let c2 = nd;
    return Zr(), to(c2, { class: "wallScroll d-scrollbar", style: { "overflow-x": "hidden", "overflow-y": "auto" }, height: F2.height, distance: 50, onEndReached: u2[1] || (u2[1] = (a2) => E()) }, { default: mn(() => [Os(l2.$slots, "header"), Lt(C2).loading || L.value.length ? po("", !0) : (Zr(), eo("div", x, [lo(Lt(bw), { "image-size": 100 })])), io("div", { class: W(s2.customClass) }, [lo(Lt(kk), { loading: Lt(C2).loading, rows: 3, count: 1, animated: "" }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(L.value, (a2, e2) => Os(l2.$slots, "default", { row: a2, index: e2 })), 256))]), _: 3 }, 8, ["loading"])], 2), io("p", k, [Lt(C2).isFinally ? (Zr(), to(S, { key: 0 }, { default: mn(() => u2[2] || (u2[2] = [io("span", null, "已经到底了", -1)])), _: 1, __: [2] })) : po("", !0), !Lt(C2).isFinally && F2.moreBtn ? (Zr(), to(f, { key: 1, color: s2.btnColor, loading: Lt(C2).moreLoading, onClick: u2[0] || (u2[0] = (a2) => E()) }, { default: mn(() => u2[3] || (u2[3] = [uo("加载更多")])), _: 1, __: [3] }, 8, ["color", "loading"])) : po("", !0)])]), _: 3 }, 8, ["height"]);
  };
} };

export {
  S,
  C
};

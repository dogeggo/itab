import {
  F
} from "./chunk-R77VKLDU.js";
import {
  Ux,
  uc
} from "./chunk-QX73FKBL.js";
import {
  St,
  jt
} from "./chunk-LEVEZLTX.js";
import "./chunk-5MDIDYN5.js";
import {
  u
} from "./chunk-AFECQBGL.js";
import {
  f
} from "./chunk-YQ4PBQUM.js";
import {
  t
} from "./chunk-C332WR7G.js";
import "./chunk-C3WGXGFI.js";
import "./chunk-S7M5ZIRT.js";
import "./chunk-USGTF4JI.js";
import "./chunk-ZBQAVDN7.js";
import {
  Lt,
  Tt,
  V,
  W,
  Z,
  Zr,
  eo,
  ht,
  io,
  lo,
  mn,
  to
} from "./chunk-E6JHFIG4.js";

// output/native-current/Content-MmTsKbUx.js
var f2 = { class: "relative h-full d-flex-center ac", style: { "z-index": "1" } }, h = { class: "f18" }, j = { class: "content" }, b = { class: "f14 mt10", style: { color: "rgba(255, 255, 255, 0.7)" } }, x = { class: "relative inline-block mt30", style: { width: "34px" } }, E = ["src"], P = { __name: "Content", props: { size: String }, setup(P2) {
  let _ = Tt(f.get("app-todayEnglish") || {}), k = Tt(null), w = ht({ isPlay: !1, percentage: 0 });
  function z() {
    w.isPlay = !w.isPlay, w.isPlay ? (k.value.load(), k.value.play()) : k.value.pause();
  }
  function Y(e2) {
    let { currentTime: t2, duration: s2 } = e2.target;
    w.percentage = t2 / s2 * 100 || 0;
  }
  function A(e2) {
    w.isPlay = !1, setTimeout(() => {
      w.percentage = 0;
    }, 300);
  }
  return _.value.dateline && _.value.dateline == u().format("YYYY-MM-DD") || t(() => import("./todayEnglish-ejkQOfY7-B2U6YUZO.js"), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]).then((e2) => {
    e2.todayEnglishApi().then((e3) => {
      let s2 = e3.data || {};
      _.value = s2;
      let a2 = { dateline: s2.dateline, content: s2.content, note: s2.note, picture2: s2.picture2, picture: s2.picture, tts: s2.tts };
      f.set("app-todayEnglish", a2);
    });
  }), (e2, t2) => (Zr(), eo("div", { class: W(["todayEnglish-wrap h-full relative text-white bg-black select-text", `icon-size-${P2.size}`]), style: { padding: "12px" } }, [io("span", { class: "todayEnglish-bg absolute inset-x-0 inset-y-0 opacity-50 bg-cover bg-no-repeat bg-center", style: V(`background-image:url(${_.value.picture2});`) }, null, 4), io("div", f2, [io("div", h, [io("p", j, Z(_.value.content), 1), io("p", b, Z(_.value.note), 1), io("div", x, [lo(Lt(Ux), { style: { "--el-fill-color-light": "#222" }, "show-text": !1, width: 36, "stroke-width": 2, type: "circle", percentage: Lt(w).percentage }, null, 8, ["percentage"]), lo(Lt(uc), { style: { position: "absolute", left: "2px", top: "2px" }, color: "#333", onClick: z, icon: Lt(w).isPlay ? Lt(jt) : Lt(St), size: "default", circle: "", type: "primary" }, null, 8, ["icon"])])]), io("audio", { onTimeupdate: Y, onEnded: A, class: "d-hidden", ref_key: "refAudio", ref: k }, [io("source", { src: _.value.tts }, null, 8, E)], 544)])], 2));
} };

// output/native-current/index-Du-yVyCo.js
var p = { __name: "index", setup: (p2) => (p3, m) => (Zr(), to(F, { width: "860px", height: "550px", destroyOnClose: !0, transparent: "" }, { default: mn(() => [lo(P)]), _: 1 })) };
export {
  p as default
};

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
import "./chunk-E6JHFIG4.js";

// output/native-current/getListApi-D6a7y7aZ.js
function n(t2) {
  let n2 = t2[parseInt(10 * Math.random())] || t2[0];
  if (!n2) return;
  let { spu_show_cover: a2, discount_percent: e, game_china_name: s, game_name: o, discount: r, initial: p, detail_link: _ } = n2;
  f.set("app-vgn", { spu_show_cover: a2, discount_percent: e, game_china_name: s, game_name: o, discount: r, initial: p, detail_link: _ });
}
async function a(i2) {
  let a2 = await t(() => import("./cache-VMWPWM72.js"), []);
  a2 = a2.default;
  let e = await a2.getItem(`app-vgn-icon:${i2}`), s = e.data || [];
  if (i2 === "discount" && n(s), e.isExp) {
    let e2 = 10, { vgnListApi: o } = await t(async () => {
      let { vgnListApi: t2 } = await import("./dujitang-RHfUEBRx-A6YRGAPX.js");
      return { vgnListApi: t2 };
    }, ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]);
    return s = (await o({ type: i2, page: 1, size: e2 })).data || [], s.length && (a2.set(`app-vgn-icon:${i2}`, s, 12e5), i2 === "discount" && n(s)), s;
  }
  return s;
}
export {
  a as getList
};

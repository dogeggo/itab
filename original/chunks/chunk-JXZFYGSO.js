import {
  C,
  F,
  R,
  Z,
  ne,
  te
} from "./chunk-YQ4PBQUM.js";
import {
  t
} from "./chunk-C332WR7G.js";
import {
  jn
} from "./chunk-C3WGXGFI.js";
import {
  P
} from "./chunk-USGTF4JI.js";

// output/native-current/addToDesk-Dg7_gs-K.js
var m = F(), p = (n2) => {
  let p2 = (m.value.find((s2) => s2.id == C.value) || m.value[0] || {}).children || [], _ = ne(p2), d = Z(n2.size || "1x1"), u = _.findFitPosition(d.w, d.h);
  n2.id = P();
  let h = jn(n2);
  h.pos = new R(), h.pos.setCol(te.value.column).setSize(d.w, d.h).setPos(u.x, u.y), p2.push(h), t(() => import("./vendor-element-plus-CRt18gND-MNDHTQD2.js").then((s2) => s2.al), ["assets/vendor-element-plus-WnleHQiG.css"]).then((s2) => {
    s2.ElMessage.success(`添加【${n2.name}】成功`);
  });
};

export {
  p
};

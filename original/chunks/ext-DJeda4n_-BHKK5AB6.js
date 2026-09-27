import {
  a,
  r
} from "./chunk-2CCCUBAL.js";
import {
  s as s2
} from "./chunk-6HFYQTRY.js";
import {
  M,
  _
} from "./chunk-LPHJBFP6.js";
import {
  e,
  s
} from "./chunk-6X7MEGJY.js";
import "./chunk-5MDIDYN5.js";
import {
  t
} from "./chunk-C332WR7G.js";
import "./chunk-USGTF4JI.js";
import "./chunk-ZBQAVDN7.js";
import "./chunk-E6JHFIG4.js";

// output/native-current/ext-DJeda4n_.js
async function m(m2) {
  var p;
  if (typeof chrome < "u" && !chrome.offscreen && navigator.userAgent.includes("Firefox"))
    return (await t(() => import("./web-D0ZlR7Ah-HPO7CDI5.js"), [])).init(m2);
  let f = M({ isHost: () => !1, onChange: m2.onChange, onComplete: null });
  return await f.init(), s(({ type: t2 }) => {
    t2 === e.COMPLETE && _({ inPageOnly: !0 });
  }), ((p = f.getSnapshot()) == null ? void 0 : p.status) === "play" && await (async function() {
    if (await s2()) try {
      let t2 = await r();
      await a(t2);
    } catch {
    }
  })(), f;
}
export {
  m as init
};

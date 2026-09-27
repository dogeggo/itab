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

// output/native-current/getDayoff-CIOFr-i2.js
var n = "app-countdown-dayoff", o = null;
async function r() {
  return o || (o = (async () => {
    try {
      let o2 = (await t(async () => {
        let { default: t2 } = await import("./cache-VMWPWM72.js");
        return { default: t2 };
      }, [])).default, r2 = await o2.getItem(n);
      if (r2 && !r2.isExp && Array.isArray(r2.data) && r2.data.length) return f.set(n, r2.data), r2.data;
      let { countdownDayoff: e } = await t(async () => {
        let { countdownDayoff: t2 } = await import("./countdown-VR4Ggwxy-PKX3CEFB.js");
        return { countdownDayoff: t2 };
      }, ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]), s = await e(), i = Array.isArray(s?.data) ? s.data : [];
      return i.length && (f.set(n, i), await o2.set(n, i, 432e6)), i;
    } catch {
      return f.get(n) || [];
    } finally {
      o = null;
    }
  })(), o);
}
export {
  r as default
};

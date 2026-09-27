import {
  n
} from "./chunk-WGCOLTAW.js";
import {
  u
} from "./chunk-AFECQBGL.js";
import {
  data_default,
  values
} from "./chunk-S7M5ZIRT.js";

// output/native-current/public-api-DajUmvL1.js
var N = async () => data_default, F = async () => {
  let e = await N(), t = u().format("YYYYMMDD"), a = await e.get("todayBing");
  if (a?.enddate === t) return a;
  let o = (await n.get("/api/bing")).data || {};
  return e.set("todayBing", o), values.set("todayBing", { thumb: o.thumb, copyright: o.copyright }), o || {};
};

export {
  F
};

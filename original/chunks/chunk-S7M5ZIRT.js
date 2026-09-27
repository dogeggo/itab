// output/data.js
var session = () => window.__nativeSession, values = {
  get: (key) => JSON.parse(session().readText(key) || "null"),
  set: (key, value) => session().writeText(key, JSON.stringify(value)),
  remove: (key) => session().removeValue(key)
};
function cacheFor(namespace) {
  return {
    async get(key, checkExpiry = !0) {
      let row = await session().storeGet(namespace, key);
      return row ? checkExpiry && row.expiresAt && Date.now() > row.expiresAt ? (await session().storeRemove(namespace, key), null) : row.value : null;
    },
    async set(key, value, lifetime = 0) {
      return await session().storeSet(namespace, key, { value, expiresAt: lifetime ? Date.now() + lifetime : 0 }), value;
    },
    keys: () => session().storeKeys(namespace),
    removeItem: (key) => session().storeRemove(namespace, key),
    remove: (key) => session().storeRemove(namespace, key),
    async getItem(key) {
      let row = await session().storeGet(namespace, key);
      return { data: row?.value ?? null, isExp: !row?.expiresAt || Date.now() > row.expiresAt };
    }
  };
}
var data_default = cacheFor("cache");

export {
  values,
  cacheFor,
  data_default
};

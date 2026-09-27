// 当前组件宿主的数据接口。数据统一进入主页状态及 Google / JSON 备份。
const session = () => window.__nativeSession;
export const values = {
  get: key => JSON.parse(session().readText(key) || 'null'),
  set: (key, value) => session().writeText(key, JSON.stringify(value)),
  remove: key => session().removeValue(key),
};
export function cacheFor(namespace) {
  return {
    async get(key, checkExpiry = true) {
      const row = await session().storeGet(namespace, key);
      if (!row) return null;
      if (checkExpiry && row.expiresAt && Date.now() > row.expiresAt) {
        await session().storeRemove(namespace, key);
        return null;
      }
      return row.value;
    },
    async set(key, value, lifetime = 0) {
      await session().storeSet(namespace, key, { value, expiresAt: lifetime ? Date.now() + lifetime : 0 });
      return value;
    },
    keys: () => session().storeKeys(namespace),
    removeItem: key => session().storeRemove(namespace, key),
    remove: key => session().storeRemove(namespace, key),
    async getItem(key) {
      const row = await session().storeGet(namespace, key);
      return { data: row?.value ?? null, isExp: !row?.expiresAt || Date.now() > row.expiresAt };
    },
  };
}
export default cacheFor('cache');

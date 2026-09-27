export const deniedNativeKeys =
  /^(token|userInfo|internalAesKey|itab-visitorid|collectAnalytics|asyncTime|itabAsyncTime|notesEnableV2|notesIdbRev|notesLastSyncSince.*)$/i;
export const dataNamespaces = new Set(["cache", "notes", "wallpaper"]);
export const nativeData = (state) =>
  (state.nativeData ??= { local: {}, stores: {} });
export async function encodeNative(value) {
  if (
    value &&
    typeof value.arrayBuffer === "function" &&
    ["[object Blob]", "[object File]"].includes(
      Object.prototype.toString.call(value),
    )
  ) {
    const bytes = new Uint8Array(await value.arrayBuffer());
    let binary = "";
    for (let start = 0; start < bytes.length; start += 8192)
      binary += String.fromCharCode(...bytes.subarray(start, start + 8192));
    return { __itabBinary: "blob", mime: value.type, data: btoa(binary) };
  }
  if (
    Object.prototype.toString.call(value) === "[object ArrayBuffer]" ||
    ArrayBuffer.isView(value)
  ) {
    const buffer =
      Object.prototype.toString.call(value) === "[object ArrayBuffer]"
        ? value
        : value.buffer.slice(
            value.byteOffset,
            value.byteOffset + value.byteLength,
          );
    const result = await encodeNative(new Blob([buffer]));
    result.__itabBinary = "arraybuffer";
    return result;
  }
  if (Array.isArray(value)) return Promise.all(value.map(encodeNative));
  if (value && typeof value === "object") {
    const result = {};
    for (const [key, item] of Object.entries(value)) {
      if (["__proto__", "constructor", "prototype"].includes(key))
        throw new Error("原版数据字段无效");
      result[key] = await encodeNative(item);
    }
    return result;
  }
  return value ?? null;
}
export function decodeNative(value) {
  if (value?.__itabBinary === "blob" || value?.__itabBinary === "arraybuffer") {
    const bytes = Uint8Array.from(atob(value.data), (c) => c.charCodeAt(0));
    return value.__itabBinary === "blob"
      ? new Blob([bytes], { type: value.mime })
      : bytes.buffer;
  }
  if (Array.isArray(value)) return value.map(decodeNative);
  if (value && typeof value === "object")
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, decodeNative(v)]),
    );
  return value;
}
export function validateNativeData(data) {
  if (
    !data ||
    typeof data !== "object" ||
    Array.isArray(data) ||
    !data.local ||
    typeof data.local !== "object" ||
    !data.stores ||
    typeof data.stores !== "object" ||
    Array.isArray(data.local) ||
    Array.isArray(data.stores)
  )
    throw new Error("原版组件数据格式无效");
  for (const [key, value] of Object.entries(data.local))
    if (
      deniedNativeKeys.test(key) ||
      typeof value !== "string" ||
      value.length > 16000000
    )
      throw new Error("原版组件本地数据包含无效字段");
  for (const [namespace, store] of Object.entries(data.stores))
    if (!dataNamespaces.has(namespace) || !store || typeof store !== "object" || Array.isArray(store))
      throw new Error("原版组件数据库格式无效");
  function validate(value, depth = 0) {
    if (depth > 40) throw new Error("原版组件数据嵌套过深");
    if (!value || typeof value !== "object") return;
    if (Object.hasOwn(value, "__itabBinary")) {
      if (
        !["blob", "arraybuffer"].includes(value.__itabBinary) ||
        typeof value.data !== "string" ||
        !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
          value.data,
        ) ||
        typeof value.mime !== "string"
      )
        throw new Error("原版组件二进制数据无效");
    }
    for (const [key, item] of Object.entries(value)) {
      if (["__proto__", "constructor", "prototype"].includes(key))
        throw new Error("原版组件数据字段无效");
      validate(item, depth + 1);
    }
  }
  validate(data);
  if (new TextEncoder().encode(JSON.stringify(data)).length > 24 * 1024 * 1024)
    throw new Error("原版组件数据超过 24 MB");
}

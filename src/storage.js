import { clone, validateState, makeBackup } from "./model.js";
let database;
async function db() {
  if (database) return database;
  database = await new Promise((resolve, reject) => {
    const r = indexedDB.open("itab-local", 1);
    r.onupgradeneeded = () => r.result.createObjectStore("data");
    r.onsuccess = () => resolve(r.result);
    r.onerror = () => reject(r.error);
  });
  return database;
}
export async function read(key) {
  const d = await db();
  return new Promise((resolve, reject) => {
    const r = d.transaction("data").objectStore("data").get(key);
    r.onsuccess = () => resolve(r.result);
    r.onerror = () => reject(r.error);
  });
}
export async function write(key, value) {
  const d = await db();
  return new Promise((resolve, reject) => {
    const tx = d.transaction("data", "readwrite");
    tx.objectStore("data").put(value, key);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error || new Error("存储事务中止"));
  });
}
let queue = Promise.resolve();
const channel =
  typeof window !== "undefined" && typeof BroadcastChannel !== "undefined"
    ? new BroadcastChannel("itab-local-state")
    : null;
export function saveState(state) {
  state.updatedAt = new Date().toISOString();
  const snapshot = clone(state);
  const next = queue
    .catch(() => {})
    .then(async () => {
      await write("state", snapshot);
      channel?.postMessage({ updatedAt: snapshot.updatedAt });
    });
  queue = next;
  return next;
}
export function onExternalChange(callback) {
  if (channel) channel.onmessage = callback;
}
export async function flush() {
  await queue;
}
export async function addSnapshot(state, label = "恢复前自动备份") {
  const snapshots = (await read("snapshots")) || [];
  snapshots.unshift({
    id: crypto.randomUUID(),
    label,
    backup: makeBackup(state),
  });
  await write("snapshots", snapshots.slice(0, 5));
}
export async function restoreState(current, next) {
  const validated = validateState(next);
  await flush();
  await addSnapshot(current);
  await saveState(validated);
  return validated;
}

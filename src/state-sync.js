// 缓存、组件内容和搜索历史变化不影响主页结构，不应触发 iframe 重新挂载。
export function homeViewChanged(current, incoming) {
  return current.activeGroup !== incoming.activeGroup ||
    JSON.stringify(current.settings) !== JSON.stringify(incoming.settings) ||
    JSON.stringify(current.groups) !== JSON.stringify(incoming.groups);
}

export function nativeDataChanges(previous, incoming) {
  const changes = [];
  for (const key of new Set([...Object.keys(previous.local), ...Object.keys(incoming.local)])) {
    if (previous.local[key] !== incoming.local[key]) {
      changes.push([key === "baseConfig" ? "__preferences__" : key, incoming.local[key] ?? null]);
    }
  }
  for (const namespace of new Set([...Object.keys(previous.stores), ...Object.keys(incoming.stores)])) {
    const before = previous.stores[namespace] || {}, after = incoming.stores[namespace] || {};
    for (const key of new Set([...Object.keys(before), ...Object.keys(after)])) {
      if (JSON.stringify(before[key]) !== JSON.stringify(after[key])) {
        changes.push(["__store__", JSON.stringify({ namespace, key })]);
      }
    }
  }
  return changes;
}

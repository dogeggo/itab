// 修改父页面 iframe 的高度会再次触发布局，不能在 ResizeObserver 的通知阶段同步执行。
export function observeAppearanceHeight(element, resize) {
  const view = element.ownerDocument.defaultView;
  let pendingFrame = null;
  let lastHeight;
  let stopped = false;
  const observer = new view.ResizeObserver(() => {
    if (stopped || pendingFrame !== null) return;
    pendingFrame = view.requestAnimationFrame(() => {
      pendingFrame = null;
      if (stopped) return;
      const height = element.scrollHeight;
      if (height === lastHeight) return;
      lastHeight = height;
      resize(height);
    });
  });
  observer.observe(element);
  return () => {
    stopped = true;
    observer.disconnect();
    if (pendingFrame !== null) {
      view.cancelAnimationFrame(pendingFrame);
      pendingFrame = null;
    }
  };
}

// 渲染后立即淡入，不等待字体、图片、一言或组件数据。
export function revealHome() {
  const root = document.documentElement;
  if (root.dataset.homeState === "ready") return;
  // 首屏内的卡片立即开始加载，屏幕外仍保留懒加载。
  for (const frame of document.querySelectorAll("#grid .native-widget-card")) {
    const rect = frame.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0 && rect.bottom > 0 &&
        rect.right > 0 && rect.top < innerHeight && rect.left < innerWidth) {
      frame.loading = "eager";
    }
  }
  root.dataset.homeState = "ready";
  document.querySelector("#home").removeAttribute("aria-busy");
  for (const element of document.querySelectorAll("#home, #sidebar")) element.inert = false;
}

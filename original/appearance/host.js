import * as upstream from "./components.js";
import { observeAppearanceHeight } from "./resize.js";
const panel = new URLSearchParams(location.search).get("panel");
try {
  const session = parent.__itabAppearance.connect(window, panel);
  window.appearanceSession = session;
  const state = upstream.state();
  state.value = session.read();
  function theme() {
    const t = state.value.theme;
    const dark = t.system
      ? matchMedia("(prefers-color-scheme: dark)").matches
      : t.mode === "dark";
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.classList.toggle("light", !dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
    document.documentElement.style.setProperty("--primary-color", t.color);
    document.documentElement.style.setProperty("--el-color-primary", t.color);
    document.documentElement.style.setProperty(
      "--bg-body",
      dark ? "#191919" : "#f1f1f5",
    );
    document.documentElement.style.setProperty(
      "--bg-card",
      dark ? "#282828" : "#ffffff",
    );
  }
  theme();
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", theme);
  upstream.watch(
    state,
    (value) => {
      theme();
      session.save(JSON.parse(JSON.stringify(value)));
    },
    { deep: true, flush: "sync" },
  );
  upstream
    .createApp({
      render: () => upstream.h(upstream[panel], { data: state.value[panel] }),
    })
    .mount("#appearance-app");
  const stopResize = observeAppearanceHeight(
    document.querySelector("#appearance-app"),
    (height) => session.resize(height),
  );
  window.addEventListener("pagehide", stopResize, { once: true });
  // 原版下拉菜单、颜色选择器打开在自己的页面内，滚动时不被宿主剪裁。
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      !document.querySelector(
        '.el-select__popper:not([style*="display: none"]),.el-color-picker__panel:not([style*="display: none"])',
      )
    )
      session.close();
  });
  document.documentElement.dataset.ready = "true";
} catch (error) {
  const el = document.querySelector("#appearance-error");
  el.hidden = false;
  el.textContent = "设置加载失败：" + error.message;
  console.error(error);
}

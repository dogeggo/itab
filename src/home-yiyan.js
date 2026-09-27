import { hydrate, reportError } from "../original/home-yiyan/bridge.js";

let app;
let loading;
export function renderHomeYiyan(visible) {
  const container = document.querySelector("#quote");
  container.hidden = !visible;
  if (!visible) {
    app?.unmount();
    app = null;
    return;
  }
  // 分组、布局和主题更新只保留当前挂载，避免主页重绘反复请求一言。
  if (app || loading) return;
  loading = Promise.all([import("../original/home-yiyan/component.js"), hydrate()])
    .then(([{ createApp, HomeYiyan }]) => {
      if (container.hidden) return;
      app = createApp(HomeYiyan);
      app.config.errorHandler = reportError;
      app.mount(container);
    })
    .catch(error => {
      app?.unmount();
      app = null;
      reportError(error);
    })
    .finally(() => { loading = null; });
}

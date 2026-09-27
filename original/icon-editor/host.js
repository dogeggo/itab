try {
  const session = window.frameElement.__iconEditorSession;
  if (!session) throw new Error("图标编辑会话已关闭");
  window.iconEditorSession = session;
  const data = session.read();
  const root = document.documentElement;
  root.classList.add(data.theme);
  root.style.setProperty("--primary-color", data.color);
  root.style.setProperty("--el-color-primary", data.color);
  // 在加载原版控件前同步宿主主题，避免加载期间出现不透明的 iframe 画布。
  const { createApp, ref, h, IconEdit, CustomAdd, Dialog } = await import("./components.js");
  const visible = ref(true);
  const close = value => { visible.value = value; if (!value) session.close(); };
  const app = createApp({
    render: () => data.item
      ? h(IconEdit, { data: data.item, modelValue: visible.value, "onUpdate:modelValue": close })
      : h(Dialog, {
          modelValue: visible.value, "onUpdate:modelValue": close,
          title: "自定义图标", width: "740px", appendToBody: true,
          style: { "--el-dialog-bg-color": "var(--bg-info)", "--el-dialog-padding-primary": "20px 18px 30px 30px" },
        }, { header: () => null, default: () => h(CustomAdd) }),
  });
  app.mount("#icon-editor-app");
  window.addEventListener("pagehide", () => app.unmount(), { once: true });
  root.dataset.ready = "true";
} catch (error) {
  const el = document.querySelector("#icon-editor-error");
  el.hidden = false;
  el.textContent = "图标编辑加载失败：" + error.message;
  console.error(error);
}

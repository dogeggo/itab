const params = new URLSearchParams(location.search),
  mode = params.get("mode") || "card";
document.documentElement.dataset.mode = mode;
let session;
function fail(error) {
  const message = error?.message || String(error);
  session?.error(message);
  const target = document.querySelector("#native-error");
  target.hidden = false;
  target.textContent = "原版组件：" + message;
  console.error(error);
}
try {
  session = parent.__itabNativeBridge.connect(window, params.get("id"), mode);
  window.__nativeSession = session;
  // 加载组件模块前先匹配宿主主题，保持 iframe 的画布背景透明。
  document.documentElement.classList.toggle(
    "dark",
    session.theme().mode === "dark",
  );
  const [vue, store, common] = await Promise.all([
    import("./chunks/vue.js"),
    import("./chunks/state.js"),
    import("./chunks/cards.js"),
  ]);
  const base = store.a();
  const preferences = session.preferences();
  if (preferences.topSearch?.length) base.value.topSearch = preferences.topSearch;
  base.value.time.weekBegin1 = preferences.weekBegin1;
  function applyAppearance() {
    const icon = session.appearance();
    base.value.theme = session.theme();
    Object.assign(base.value.icon, {
      width: 1,
      iconSize: icon.size,
      iconRadius: icon.radius,
      iconX: icon.gapX,
      iconY: icon.gapY,
    });
    common.i(base.value, true);
    document.documentElement.classList.toggle(
      "dark",
      base.value.theme.mode === "dark",
    );
  }
  applyAppearance();
  const wallpaper = session.wallpaper();
  base.value.wallpaper = {
    ...base.value.wallpaper,
    src: wallpaper.src,
    thumb: wallpaper.src,
    name: wallpaper.name,
    type: { image: 1, video: 2, color: 3, gradient: 3 }[wallpaper.type],
  };
  const row = vue.r(store.f(params.get("id")) || session.getRow());
  let app;
  if (mode === "card") {
    app = vue.at({
      render: () => {
        const component = app.component(
          `${row.value.component}-icon${row.value.config?.icon || ""}`,
        );
        return component
          ? vue.W(component, {
              size: row.value.size,
              ...(Object.keys(row.value.config || {}).length
                ? { data: row.value.config }
                : {}),
              row: row.value,
            })
          : vue.W("img", { src: row.value.src });
      },
    });
    common.a(app);
    document.addEventListener("click", (event) => {
      if (!event.target.closest("input,button,a,textarea,select"))
        session.open();
    });
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      session.contextMenu(event.clientX, event.clientY);
    });
    vue.d(
      () => store.w.visible,
      (visible) => {
        if (visible) {
          store.w.visible = false;
          session.open();
        }
      },
    );
  } else {
    const { dialogs } = await import("./chunks/dialogs.js");
    const { componentStyles } = await import("./registry.js");
    await Promise.all((componentStyles[row.value.component] || []).map(href => new Promise((resolve, reject) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.onload = resolve;
      link.onerror = () => reject(new Error("组件样式加载失败"));
      document.head.append(link);
    })));
    const component = (await dialogs[row.value.component]()).default;
    app = vue.at({ render: () => vue.W(component, {
      modelValue: store.w.visible,
      // 原版关闭按钮先交由宿主保存；组件卸载后番茄钟等会清理运行状态。
      "onUpdate:modelValue": visible => { if (visible) store.w.visible = true; else session.close(); },
      row: row.value,
      isEdit: true,
    }) });
    app.provide("dialogApp", store.w);
    common.a(app);
    store.z(row.value, true);
    vue.d(
      () => store.w.visible,
      (visible) => {
        if (!visible) session.close();
      },
      { flush: "sync" },
    );
  }
  app.use(common.u);
  app.config.errorHandler = fail;
  app.mount("#native-app");
  window.addEventListener("pagehide", () => {
    app.unmount();
    session.dispose();
  }, { once: true });
  window.__nativeFlush = async () => {
    await window.__nativeTomato?.flush();
    if (row.value.component === "notes") {
      const { useNotesStore } = await import("./chunks/notes.js");
      await useNotesStore().init();
      await useNotesStore().persistNow();
    }
    if (row.value.component === "todo") {
      const { u } = await import("./chunks/todo.js");
      const todos = u();
      await todos.init();
      await todos.persistNow();
      await session.storeSet(
        "cache",
        "todo",
        { value: todos.getPlainList(), expiresAt: 0 },
      );
      await session.storeSet(
        "cache",
        "todoFolder",
        { value: todos.getPlainFolders(), expiresAt: 0 },
      );
    }
  };
  let syncQueue = Promise.resolve();
  window.__nativeSync = () => {
    syncQueue = syncQueue.catch(() => {}).then(async () => {
      if (!session.active()) return;
      if (row.value.component === "notes") {
        const { useNotesStore } = await import("./chunks/notes.js");
        const notes = useNotesStore();
        await notes.init();
        notes.applyNativeSnapshot(await session.storeGet("notes", "items") ?? []);
      } else if (row.value.component === "todo") {
        const { u } = await import("./chunks/todo.js");
        const todos = u();
        await todos.init();
        const [items, folders] = await Promise.all([
          session.storeGet("cache", "todo"), session.storeGet("cache", "todoFolder"),
        ]);
        todos.applyNativeSnapshot(items?.value ?? [], folders?.value ?? [{ name: "待办事项", id: "in-plan" }]);
      } else if (row.value.component === "tomato") {
        await window.__nativeTomato?.sync();
      }
    });
    return syncQueue;
  };
  session.subscribe((key, value) => {
    if (key === "__theme__") {
      applyAppearance();
      return;
    }
    if (key === "navConfig") {
      store.b().value = JSON.parse(session.readText("navConfig"));
      const next = session.getRow();
      if (JSON.stringify(next) !== JSON.stringify(row.value)) row.value = next;
      return;
    }
    if (mode === "card" && key === "__store__") {
      const change = JSON.parse(value);
      if ((row.value.component === "notes" && change.namespace === "notes" && change.key === "items") ||
          (row.value.component === "todo" && change.namespace === "cache" && ["todo", "todoFolder"].includes(change.key))) {
        void window.__nativeSync().catch(fail);
      }
      return;
    }
  });
  session.ready();
} catch (error) {
  fail(error);
}

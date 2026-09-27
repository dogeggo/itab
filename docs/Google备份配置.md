# Google Drive 备份配置

代码已经实现 Google Drive 上传、列表、下载及恢复。真正连接账号需要一个由你控制的 Google Cloud OAuth 客户端 ID；项目不内置他人的客户端，也不需要保存 client secret。

## 1. 加载扩展并确认 ID

在 Chrome 的扩展管理页打开开发者模式，加载本项目 `dist` 目录。项目自带固定公钥，当前扩展 ID 为：

```text
nogiefacebhdjbdgfieciakffkcfcmkn
```

请以 `chrome://extensions` 显示的实际 ID 为准。`extension-public-key.txt` 用于保持开发目录变化后的扩展 ID 稳定，不是私钥。

## 2. 配置 Google Cloud

1. 在 [Google Cloud Console](https://console.cloud.google.com/) 创建或选择你自己的项目。
2. 启用 **Google Drive API**。
3. 在 Google Auth Platform / OAuth consent screen 配置应用名称、支持邮箱和受众。
4. 如果应用处于测试状态，将实际登录的 Google 账号加入测试用户。
5. 创建 OAuth 客户端，选择适用于 **Chrome Extension / Chrome 扩展** 的客户端类型，并填入上述扩展 ID。不同控制台版本可能沿用 Chrome App 的名称，请按 Chrome 官方教程填写 Item ID。
6. 在数据访问范围中使用：

```text
https://www.googleapis.com/auth/drive.appdata
```

本项目不需要读写你的普通 Drive 文件，也不申请完整 `drive` 权限。

## 3. 写入客户端 ID 并构建

在 PowerShell 中进入项目目录后执行：

```powershell
npm run configure:google -- "你的客户端ID.apps.googleusercontent.com"
npm run build
```

配置脚本生成本机 `google.config.json`。构建脚本将它写入 `dist/manifest.json` 的 `oauth2` 字段。这个 ID 不是密码；不要把 client secret 填进配置。

回到扩展管理页点击“重新加载”。此时打开主页 → 设置 → 备份与恢复 → 连接 Google。完成 Google 的真实授权后，点击“立即备份”。第二台设备加载相同客户端配置并登录同一账号，可在列表中选择备份恢复。

## 4. 行为说明

- 备份写入 Google Drive 的隐藏应用数据目录 `appDataFolder`，普通“我的云端硬盘”列表中通常看不到。
- 使用备份列表查看最近最多 100 条云端备份；点击恢复后会显示覆盖确认，并先保存本机快照。
- Google 令牌由 `chrome.identity.getAuthToken()` 获取和缓存，不保存到 IndexedDB、配置文件或备份 JSON。
- 令牌过期返回 401 时，清理该令牌并重试一次；用户取消、网络异常、权限错误都会显示原因。
- “断开本机授权”清除浏览器的本机令牌缓存。若需彻底撤销应用访问，请在 [Google 账号第三方访问管理](https://myaccount.google.com/connections) 移除应用。
- 云端手动备份不会自动删除你的已有节点。

## 常见问题

| 现象 | 检查内容 |
| --- | --- |
| 提示需要在 Chrome 加载扩展 | 当前是 `http://127.0.0.1:4173` 预览；请从已加载的扩展新标签页使用。 |
| 提示未配置 OAuth 客户端 | 执行配置与构建命令，再重新加载 `dist` 扩展。 |
| OAuth 客户端无效 | 客户端类型、扩展 ID、Cloud 项目与当前 manifest 必须匹配。 |
| `access_denied` / 无权使用 | 账号需要加入 OAuth 测试用户；也可能是用户取消授权。 |
| Drive API 403 | 确认该 Google Cloud 项目已启用 Drive API，且授权范围为 `drive.appdata`。 |
| 无法连接 Google | 检查浏览器所在网络是否能够访问 Google OAuth 和 Drive API。 |
| Edge 中 Google 登录不可用 | 本地主页功能支持 Chromium/Edge；Google 的 `getAuthToken` 集成以 Chrome 为目标，不承诺 Edge 的 Google 账号授权。Edge 可继续使用本地 JSON 备份。 |

## 官方依据与验证边界

- [Chrome identity API](https://developer.chrome.com/docs/extensions/reference/api/identity)
- [Chrome 扩展 OAuth 教程](https://developer.chrome.com/docs/extensions/how-to/integrate/oauth)
- [Drive 应用数据目录](https://developers.google.com/drive/api/guides/appdata)
- [Drive multipart 上传](https://developers.google.com/drive/api/guides/manage-uploads)

本次已验证扩展加载、OAuth 未配置提示、请求格式和过期令牌重试逻辑。没有替你创建 Google Cloud 项目，也没有登录真实 Google 账号，因此**真实账号云备份尚未完成端到端验收**；完成以上配置后即可进行实际授权验证。

# 市集中台官网

正式域名：https://market-hub.chirrup.cn/

本地端口 **5175**。

```powershell
cd web
npm install
npm run dev
```

联系邮箱改 `src/config/site.ts` 里的 `CONTACT_EMAIL`。

## 发布

公开仓 [yqxx/market-hub](https://github.com/yqxx/market-hub) **只含本目录**。从完整项目根目录发布：

```powershell
pwsh -File scripts/publish-web.ps1
```

GitHub Actions 会构建并发布到 `gh-pages`。

## 域名（Cloudflare）

和 `chirrup.cn` 同一 Zone，新增：

| Type | Name | Target | Proxy |
|---|---|---|---|
| CNAME | `market-hub` | `yqxx.github.io` | 先灰云，GitHub DNS 通过后再橙云 |

Pages：Source `gh-pages`，Custom domain `market-hub.chirrup.cn`。SSL 用 **Full**。不要改 Worker 路由 `chirrup.cn/dl/*`。

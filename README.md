# David Research

A 股行业龙头双周研究官网（纯静态，无需构建，直接打开 `index.html` 或部署到 GitHub Pages）。

## 结构

- `index.html` — 页面入口
- `assets/style.css` — 样式（自动适配浅色 / 深色）
- `assets/app.js` — 首页（研究日历、行业分支、研究框架）与报告页渲染
- `data/reports.js` — 全部报告数据

## 新增一期报告

在 `data/reports.js` 的 `REPORTS` 数组里追加一个对象（复制现有报告改字段即可），`date` 必须落在双周节点上（从 2025-08-08 起每 14 天）。
断更的双周写进 `SITE.gaps`。

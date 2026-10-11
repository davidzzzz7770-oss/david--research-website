/*
 * David Research: site settings
 * ------------------------------------------------------------
 * Every piece of visible text is written as T("中文", "English").
 * Reports live in data/reports-*.js; each file appends to window.REPORTS.
 * A missed fortnight: add its date to SITE.gaps.
 */
function T(zh, en) { return { zh: zh, en: en }; }
window.REPORTS = [];

window.SITE = {
  name: "David",
  start: "2025-08-08",   // first issue; one issue every 14 days after that
  cadenceDays: 14,
  gaps: ["2026-04-17", "2026-05-01", "2026-05-15"],
  updated: "2026-10-11",
  intro: T(
    "我是 David。从 2025 年 8 月开始，我每两周选一个行业，研究它在 A 股的龙头公司。我想弄清楚不同行业在金融市场里处在什么位置：市场愿意给哪些行业高估值，哪些行业靠分红吸引投资者，龙头公司又靠什么赚钱。每份报告回答同样的六个问题，方便横向比较。",
    "I'm David. Since August 2025, every two weeks I pick one industry and study its leading company on China's A-share market. I want to understand where different industries sit in the financial market: which ones the market pays up for, which ones attract investors with dividends, and how the leaders actually make money. Every report answers the same six questions so they can be compared."
  ),
  sectors: [
    { key: "consumer",  name: T("消费", "Consumer") },
    { key: "finance",   name: T("金融", "Financials") },
    { key: "tech",      name: T("科技", "Technology") },
    { key: "newenergy", name: T("新能源与高端制造", "New energy & industrials") },
    { key: "resources", name: T("能源与材料", "Energy & materials") },
    { key: "infra",     name: T("基础设施", "Infrastructure") },
    { key: "health",    name: T("医药医疗", "Healthcare") }
  ],
  about: [
    {
      h: T("为什么做这个", "Why I started"),
      p: T(
        "我想知道金融市场是怎么给不同行业定价的。同样赚 100 亿，白酒公司和建筑公司的市值可以差十倍。为了弄懂原因，我开始一个行业一个行业地看，并把重点放在护城河上：竞争优势能守住多久，决定了市场愿意付多少钱。",
        "I wanted to know how the financial market prices different industries. Two companies can earn the same profit, yet a liquor maker may be worth ten times more than a builder. To understand why, I started going through industries one at a time, with a focus on the moat: how long a company can defend its advantage largely decides what the market will pay for it."
      )
    },
    {
      h: T("我怎么做", "How I work"),
      p: T(
        "资料来自公司年报、交易所公告、业绩说明会纪要和行业协会数据。每期先填同一张检查表，再写结论。估值用市盈率（银行、券商、钢铁、半导体用市净率，保险用内含价值）给出三档区间，并写下每一档成立的前提。",
        "My sources are annual reports, exchange filings, earnings-call notes and industry association data. For each issue I fill in the same checklist first, then write the conclusion. I value each company in three cases using P/E (P/B for banks, brokers, steel and chips; embedded value for insurers) and write down what has to be true for each case."
      )
    },
    {
      h: T("断更说明", "About the gap"),
      p: T(
        "2026 年 4 月 15 日到 5 月 15 日我在准备考试，停了三期（4 月 17 日、5 月 1 日、5 月 15 日）。日历里用斜线标出，没有事后补写。",
        "From 15 April to 15 May 2026 I was preparing for exams and skipped three issues (17 April, 1 May, 15 May). They are hatched in the calendar; I did not go back and fill them in later."
      )
    }
  ],
  disclaimer: T(
    "这些报告是我的学习记录，目的是理解不同行业，不构成投资建议。数据截至各期发布日，部分为估算。",
    "These reports are my study notes, written to understand different industries. They are not investment advice. Figures are as of each report date and some are estimates."
  )
};

/* The six questions every report answers */
window.FRAMEWORK = [
  { key: "moat", name: T("护城河", "Moat"),          q: T("它的竞争优势从哪里来？别人能复制吗？", "Where does its advantage come from, and can others copy it?") },
  { key: "prod", name: T("产品属性", "Product"),      q: T("卖什么，卖给谁，靠什么定价？", "What does it sell, to whom, and how is it priced?") },
  { key: "val",  name: T("估值区间", "Valuation"),    q: T("悲观、中性、乐观三种情况下各值多少？", "What is it worth in a bear, base and bull case?") },
  { key: "edge", name: T("护城河边际", "Moat trend"), q: T("优势在变宽还是变窄？", "Is the advantage getting wider or narrower?") },
  { key: "dem",  name: T("市场需求", "Demand"),       q: T("需求来自哪里，在增长吗？", "Where does demand come from, and is it growing?") },
  { key: "weak", name: T("短板", "Weak spots"),       q: T("最可能出错的地方是什么？", "What is most likely to go wrong?") }
];

/*
 * David Research: site data
 * ------------------------------------------------------------
 * Every piece of visible text is written as T("中文", "English").
 * Add an issue: copy one object in REPORTS and edit it.
 * A missed fortnight: add its date to SITE.gaps.
 * Prices are in CNY per share, as of the report date.
 */
function T(zh, en) { return { zh: zh, en: en }; }

window.SITE = {
  name: "David",
  start: "2025-08-08",   // first issue; one issue every 14 days after that
  cadenceDays: 14,
  gaps: ["2025-10-03", "2026-01-09", "2026-02-20", "2026-06-12", "2026-08-07"],
  updated: "2026-10-11",
  intro: T(
    "我是 David。从 2025 年 8 月开始，我每两周研究一家 A 股的行业龙头公司，写成一份报告放在这里。每份报告都回答同样的六个问题，这样不同行业的公司也能放在一起比较。",
    "I'm David. Since August 2025 I have studied one leading company on China's A-share market every two weeks and posted the write-up here. Every report answers the same six questions, so companies from different industries can be compared side by side."
  ),
  about: [
    {
      h: T("为什么做这个", "Why I started"),
      p: T(
        "我想知道一家公司为什么能长期赚钱，以及它值多少钱。读财报时我发现只看利润增长不够，真正决定长期回报的是竞争优势能不能守住。所以我把重点放在护城河上。",
        "I wanted to understand why some companies keep earning money for decades, and what they are actually worth. Reading annual reports, I realised profit growth alone tells you little. What matters over the long run is whether a company can defend its advantage, so I made the moat the centre of every report."
      )
    },
    {
      h: T("我怎么做", "How I work"),
      p: T(
        "资料来自公司年报、交易所公告、业绩说明会纪要和行业协会数据。每期先填同一张检查表，再写结论。估值用市盈率给出三档区间，并写下每一档成立的前提。",
        "My sources are annual reports, exchange filings, earnings-call notes and industry association data. For each issue I first fill in the same checklist, then write the conclusion. I value each company with a P/E-based range in three cases and write down what has to be true for each case."
      )
    },
    {
      h: T("断更说明", "About the gaps"),
      p: T(
        "日历里斜线的格子是我没有按时发布的期数，主要是考试周和假期。我选择如实标出来，而不是补写旧日期的报告。",
        "The hatched squares in the calendar are fortnights where I didn't publish, mostly exam weeks and holidays. I mark them honestly instead of back-dating reports."
      )
    }
  ],
  disclaimer: T(
    "个人学习记录，数据截至各期发布日，部分为估算，不构成投资建议。",
    "Personal study notes. Figures are as of each report date and some are estimates. Not investment advice."
  )
};

/* The six questions every report answers */
window.FRAMEWORK = [
  { key: "moat",  name: T("护城河", "Moat"),          q: T("它的竞争优势从哪里来？别人能复制吗？", "Where does its advantage come from, and can others copy it?") },
  { key: "prod",  name: T("产品属性", "Product"),      q: T("卖什么，卖给谁，靠什么定价？", "What does it sell, to whom, and how is it priced?") },
  { key: "val",   name: T("估值区间", "Valuation"),    q: T("悲观、中性、乐观三种情况下各值多少？", "What is it worth in a bear, base and bull case?") },
  { key: "edge",  name: T("护城河边际", "Moat trend"), q: T("优势在变宽还是变窄？", "Is the advantage getting wider or narrower?") },
  { key: "dem",   name: T("市场需求", "Demand"),       q: T("需求来自哪里，在增长吗？", "Where does demand come from, and is it growing?") },
  { key: "weak",  name: T("短板", "Weak spots"),       q: T("最可能出错的地方是什么？", "What is most likely to go wrong?") }
];

window.REPORTS = [
  /* ====================================================== */
  {
    id: "600519",
    date: "2025-08-08",
    code: "600519.SH",
    company: T("贵州茅台", "Kweichow Moutai"),
    industry: T("白酒", "Baijiu (Chinese liquor)"),
    sector: T("消费", "Consumer"),
    position: T("高端白酒龙头，飞天茅台是国内定价权最强的消费品之一", "Leader in premium baijiu; Feitian Moutai has some of the strongest pricing power of any consumer product in China"),
    verdict: "fair-low",
    trend: "stable",
    moatScore: 5,
    thesis: [
      T("产区、品牌和有限供给三者叠加，护城河几乎无法复制。", "Its location, brand and limited supply together form a moat that is close to impossible to copy."),
      T("短期压力来自需求端：批价下行、商务宴请减少，增速降到个位数。", "The pressure is on demand: wholesale prices are falling, business banquets are fewer, and growth has slowed to single digits."),
      T("约 20 倍市盈率、近 4% 股息率，已经有一定安全边际。", "At about 20x earnings with a dividend yield near 4%, there is already some margin of safety.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("1,741 亿元", "CNY 174.1 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("862 亿元", "CNY 86.2 bn") },
      { k: T("毛利率", "Gross margin"), v: T("约 92%", "~92%") },
      { k: T("市盈率 (TTM)", "P/E (TTM)"), v: T("约 20.8 倍", "~20.8x") }
    ],
    moat: {
      take: T("最强的护城河来自产区和品牌，消费者层面没有锁定效应。", "The strongest sources are location and brand. Customers are not locked in."),
      items: [
        { name: T("品牌", "Brand"), score: 5, note: T("礼赠和商务场景的「硬通货」，几乎没有替代品。", "The default gift and banquet liquor; there is almost no substitute.") },
        { name: T("产区与工艺", "Location & process"), score: 5, note: T("赤水河谷 15.03 平方公里核心产区，一瓶酒从生产到出厂约 5 年。", "A 15.03 km² core production zone on the Chishui River; each bottle takes about five years from production to sale.") },
        { name: T("定价权", "Pricing power"), score: 4, note: T("出厂价 1,169 元，远低于市场批价，仍有提价空间。", "Ex-factory price of CNY 1,169 is far below the wholesale price, so there is room to raise it.") },
        { name: T("渠道控制", "Channel control"), score: 4, note: T("i 茅台 App 和直营店提高了公司对价格的掌控。", "The i-Moutai app and direct stores give the company more control over price.") },
        { name: T("转换成本", "Switching cost"), score: 2, note: T("消费者换品牌没有成本，靠的是身份认同。", "Nothing stops a buyer from switching; loyalty is about status, not lock-in.") }
      ]
    },
    product: {
      take: T("一个大单品撑起七成收入，越陈越值钱。", "One flagship product brings in 70% of revenue, and it gains value with age."),
      rows: [
        { k: T("核心产品", "Main product"), v: T("飞天茅台 53° 500ml，约占营收 7 成", "Feitian Moutai 53% 500ml, ~70% of revenue") },
        { k: T("客户", "Customers"), v: T("商务宴请、礼赠、收藏、个人饮用", "Business banquets, gifts, collectors, personal drinking") },
        { k: T("周期性", "Cyclicality"), v: T("弱周期，和商务活动、居民财富相关", "Mildly cyclical, tied to business activity and household wealth") },
        { k: T("定价方式", "Pricing"), v: T("公司定出厂价，市场批价反映真实供需", "Company sets ex-factory price; wholesale price shows real supply and demand") },
        { k: T("库存", "Inventory"), v: T("不贬值，存放越久越值钱", "Does not lose value; older stock is worth more") },
        { k: T("第二曲线", "New products"), v: T("茅台 1935、茅台王子等系列酒", "Moutai 1935, Moutai Prince and other series liquors") }
      ]
    },
    valuation: {
      take: T("当前股价接近中性区间下沿。", "The share price sits near the bottom of the base case."),
      price: 1430,
      basis: T("2025 年预测每股收益约 72 元", "2025E EPS ≈ CNY 72"),
      axis: [1000, 2100],
      bear: { low: 1150, high: 1300, pe: "16–18x", note: T("批价跌破 1,800 元，增速 0–3%", "Wholesale price below CNY 1,800; growth 0–3%") },
      base: { low: 1450, high: 1650, pe: "20–23x", note: T("营收增速 6–9%，分红率保持 75% 以上", "Revenue growth 6–9%; payout ratio stays above 75%") },
      bull: { low: 1800, high: 1950, pe: "25–27x", note: T("商务需求恢复，直营占比继续提升", "Business demand recovers; direct sales keep rising") }
    },
    edge: {
      take: T("护城河本身没变，变的是需求结构。", "The moat itself is unchanged. What has changed is who is buying."),
      plus: [
        T("直营渠道占比提升，利润比收入更稳。", "More direct sales keep profits steadier than revenue."),
        T("分红率提高到 75% 以上，并公布了回购计划。", "Payout ratio raised above 75%, plus a share buyback plan."),
        T("茅台 1935 补上了千元价格带。", "Moutai 1935 fills the CNY 1,000 price range.")
      ],
      minus: [
        T("2025 年 5 月机关节约新规，政务和部分商务宴请减少。", "New austerity rules for officials (May 2025) cut government and some business banquets."),
        T("飞天散瓶批价从 2,500 元以上跌到 2,000 元左右。", "Feitian wholesale price fell from over CNY 2,500 to around CNY 2,000."),
        T("年轻人喝白酒的越来越少。", "Fewer young people drink baijiu.")
      ]
    },
    demand: {
      take: T("从供不应求变成供需平衡，需求仍在高位但在走弱。", "From shortage to balance: demand is still high but softening."),
      drivers: [
        { name: T("商务宴请", "Business banquets"), share: 40, dir: "down" },
        { name: T("礼赠", "Gifts"), share: 30, dir: "flat" },
        { name: T("收藏投资", "Collecting"), share: 15, dir: "down" },
        { name: T("个人饮用", "Personal drinking"), share: 15, dir: "flat" }
      ],
      note: T("高端白酒市场约 1,800 亿元，茅台占一半以上。", "The premium baijiu market is about CNY 180 bn; Moutai has more than half of it.")
    },
    weak: {
      take: T("最需要盯的是批价。", "The number to watch is the wholesale price."),
      items: [
        { level: "high", title: T("批价下行", "Falling wholesale price"), note: T("批价是需求最直接的信号，持续下跌会打击经销商信心。", "It is the clearest demand signal; a long slide hurts distributor confidence.") },
        { level: "mid", title: T("依赖单一产品", "One-product reliance"), note: T("系列酒还没有出现第二个百亿级单品。", "No second CNY 10 bn product yet.") },
        { level: "mid", title: T("消费人群老化", "Ageing customers"), note: T("年轻化尝试（冰淇淋、联名咖啡）对利润贡献很小。", "Youth-oriented launches (ice cream, coffee tie-ins) add little profit.") },
        { level: "mid", title: T("政策敏感", "Policy risk"), note: T("政务消费收紧会最先影响高端白酒。", "Any tightening on official spending hits premium baijiu first.") }
      ]
    },
    watch: [T("飞天批价能否守住 1,800 元", "Does Feitian hold CNY 1,800 wholesale?"), T("中报直营占比", "Direct-sales share in H1 results"), T("春节旺季动销", "Chinese New Year sell-through")]
  },

  /* ====================================================== */
  {
    id: "300750",
    date: "2025-08-22",
    code: "300750.SZ",
    company: T("宁德时代", "CATL"),
    industry: T("动力电池", "EV batteries"),
    sector: T("新能源", "New energy"),
    position: T("全球动力电池装机量第一，储能电池同样第一", "World's largest EV battery maker by installations, and also No.1 in energy storage batteries"),
    verdict: "fair",
    trend: "widening",
    moatScore: 5,
    thesis: [
      T("规模、技术和客户互相加强：最大所以最便宜，最便宜所以份额最高。", "Scale, technology and customers reinforce each other: biggest means cheapest, cheapest means most market share."),
      T("2025 年上半年行业价格战中，净利润仍增长 33%。", "Net profit still grew 33% in H1 2025 during an industry price war."),
      T("主要风险是海外政策和固态电池等新技术。", "The main risks are overseas politics and new technology such as solid-state batteries.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("3,620 亿元", "CNY 362.0 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("507 亿元", "CNY 50.7 bn") },
      { k: T("全球动力份额", "Global EV share"), v: T("约 38%", "~38%") },
      { k: T("市盈率 (TTM)", "P/E (TTM)"), v: T("约 21 倍", "~21x") }
    ],
    moat: {
      take: T("成本优势是核心，客户切换供应商的代价很高。", "Cost advantage is the core, and customers find it costly to switch."),
      items: [
        { name: T("规模与成本", "Scale & cost"), score: 5, note: T("产能和采购规模全球最大，单位成本比二线厂低 10–15%。", "Largest capacity and purchasing in the world; unit cost 10–15% below second-tier rivals.") },
        { name: T("技术储备", "Technology"), score: 4, note: T("麒麟、神行快充、钠离子电池同时推进，年研发投入超 180 亿元。", "Qilin, Shenxing fast-charge and sodium-ion batteries in parallel; R&D over CNY 18 bn a year.") },
        { name: T("客户粘性", "Customer lock-in"), score: 4, note: T("电池要和车型一起开发，定点周期 2–3 年。", "Batteries are co-designed with each car platform; contracts run 2–3 years.") },
        { name: T("供应链", "Supply chain"), score: 4, note: T("向上游锂矿和电池回收延伸，原材料波动时更有议价权。", "Owns stakes in lithium mining and recycling, which helps when raw material prices swing.") },
        { name: T("品牌", "Brand"), score: 3, note: T("消费者开始认「宁德时代」，但很难带来溢价。", "Consumers now recognise the name, but it rarely earns a price premium.") }
      ]
    },
    product: {
      take: T("To B 生意，成长性和周期性并存。", "A business-to-business supplier that is both growing and cyclical."),
      rows: [
        { k: T("核心产品", "Main products"), v: T("动力电池约 7 成，储能电池约 2 成", "EV batteries ~70%, storage batteries ~20%") },
        { k: T("客户", "Customers"), v: T("整车厂、储能系统集成商", "Carmakers and energy storage integrators") },
        { k: T("周期性", "Cyclicality"), v: T("随新能源车渗透率和电网投资波动", "Follows EV adoption and grid investment") },
        { k: T("产品迭代", "Product cycle"), v: T("2–3 年一代，需要持续领先", "A new generation every 2–3 years") },
        { k: T("定价方式", "Pricing"), v: T("跟碳酸锂价格联动，加工费体现真实壁垒", "Linked to lithium carbonate prices; the processing margin shows the real edge") },
        { k: T("新业务", "New businesses"), v: T("巧克力换电、海外工厂（德国、匈牙利、西班牙）", "Battery swapping; plants in Germany, Hungary and Spain") }
      ]
    },
    valuation: {
      take: T("股价在中性区间内，价格合理。", "The share price is inside the base case: fairly valued."),
      price: 280,
      basis: T("2025 年预测每股收益约 14.2 元", "2025E EPS ≈ CNY 14.2"),
      axis: [150, 420],
      bear: { low: 200, high: 230, pe: "14–16x", note: T("价格战加剧，欧洲扩产受阻", "Harder price war; European expansion stalls") },
      base: { low: 270, high: 310, pe: "19–22x", note: T("利润增长 20–25%，储能保持高增长", "Profit growth 20–25%; storage keeps growing fast") },
      bull: { low: 350, high: 390, pe: "25–27x", note: T("海外份额突破，钠电和换电放量", "Overseas share breaks out; sodium-ion and swapping scale up") }
    },
    edge: {
      take: T("价格战淘汰了小厂，龙头的优势反而变大。", "The price war pushed out small players, so the leader's edge grew."),
      plus: [
        T("二三线厂商退出，龙头份额上升。", "Second- and third-tier makers are exiting; the leader gains share."),
        T("储能需求爆发，储能电芯同样排名第一。", "Storage demand is booming, and CATL is No.1 there too."),
        T("港股上市募资约 410 亿港元，用于海外工厂。", "Hong Kong listing raised about HKD 41 bn for overseas plants."),
        T("神行快充和钠离子电池开始量产。", "Shenxing fast-charge and sodium-ion cells entered mass production.")
      ],
      minus: [
        T("比亚迪、中创新航追赶，国内份额从高点回落到约 43%。", "BYD and CALB are catching up; domestic share fell from its peak to ~43%."),
        T("部分车企自建电池厂。", "Some carmakers are building their own battery plants."),
        T("被美国国防部列入 1260H 清单，北美市场受限。", "Listed on the US Department of Defense 1260H list, limiting North America.")
      ]
    },
    demand: {
      take: T("电动车电池增速放缓，储能是新的增长点。", "EV battery growth is slowing; storage is the new growth engine."),
      drivers: [
        { name: T("国内电动车", "China EVs"), share: 45, dir: "up" },
        { name: T("储能", "Energy storage"), share: 25, dir: "up" },
        { name: T("海外电动车", "Overseas EVs"), share: 20, dir: "up" },
        { name: T("商用车 / 船舶", "Trucks & ships"), share: 10, dir: "flat" }
      ],
      note: T("2025 年全球动力加储能电池需求预计超过 1.5 TWh，储能增速 40% 以上，数据中心配储是新增量。", "Global EV plus storage battery demand should pass 1.5 TWh in 2025. Storage is growing over 40%, with data centres a new source.")
    },
    weak: {
      take: T("最大的不确定性在中国以外。", "The biggest unknowns are outside China."),
      items: [
        { level: "high", title: T("地缘政治", "Geopolitics"), note: T("美国市场基本关闭，欧洲关税和补贴政策不确定。", "The US is largely closed; EU tariffs and subsidies are uncertain.") },
        { level: "mid", title: T("技术路线", "Technology shift"), note: T("全固态电池如果在 2028 年前后突破，现有产能需要重估。", "If solid-state batteries arrive around 2028, current plants may need to be revalued.") },
        { level: "mid", title: T("客户自研", "Customers making their own"), note: T("车企自建电池厂会拿走部分份额。", "Carmakers' in-house plants will take some share.") },
        { level: "low", title: T("原材料波动", "Raw material swings"), note: T("碳酸锂价格大起大落会带来存货减值。", "Big lithium price moves can force inventory write-downs.") }
      ]
    },
    watch: [T("海外工厂投产进度", "Overseas plant ramp-up"), T("储能电芯出货量", "Storage cell shipments"), T("钠离子电池装车量", "Sodium-ion installations")]
  },

  /* ====================================================== */
  {
    id: "000333",
    date: "2025-09-05",
    code: "000333.SZ",
    company: T("美的集团", "Midea Group"),
    industry: T("家电", "Home appliances"),
    sector: T("消费 / 制造", "Consumer / Manufacturing"),
    position: T("全球营收最大的家电公司，正在向 To B 科技集团转型", "The world's largest home appliance maker by revenue, now moving into business-to-business technology"),
    verdict: "under",
    trend: "widening",
    moatScore: 4,
    thesis: [
      T("护城河不是品牌溢价，而是制造效率和供应链。", "Its moat is manufacturing efficiency and supply chain, not brand premium."),
      T("To B 业务占比超过四分之一，海外收入超过四成，增长来源比市场想的更多。", "B2B is over a quarter of revenue and overseas over 40%, so growth comes from more places than the market assumes."),
      T("约 13 倍市盈率、约 5% 股息率，估值偏低。", "At ~13x earnings and a ~5% dividend yield, it looks cheap.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("4,091 亿元", "CNY 409.1 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("385 亿元", "CNY 38.5 bn") },
      { k: T("海外收入占比", "Overseas share"), v: T("约 41%", "~41%") },
      { k: T("市盈率 (TTM)", "P/E (TTM)"), v: T("约 13 倍", "~13x") }
    ],
    moat: {
      take: T("在任何价格带都能做到成本最低，但品牌溢价一般。", "It can be the low-cost maker at any price point, but its brand premium is modest."),
      items: [
        { name: T("规模与成本", "Scale & cost"), score: 5, note: T("全球家电营收第一，压缩机、电机自己生产。", "No.1 in global appliance revenue; makes its own compressors and motors.") },
        { name: T("供应链效率", "Supply chain"), score: 5, note: T("T+3 按单生产，库存周转比同行快得多。", "Build-to-order \"T+3\" model; inventory turns much faster than peers.") },
        { name: T("渠道", "Distribution"), score: 4, note: T("国内线上线下全覆盖，海外自有品牌占比提高。", "Full online and offline coverage in China; more own-brand sales abroad.") },
        { name: T("品牌", "Brand"), score: 3, note: T("大众品牌强，高端品牌弱于海尔卡萨帝。", "Strong mass-market brand; premium line trails Haier's Casarte.") },
        { name: T("转换成本", "Switching cost"), score: 2, note: T("家电换品牌没成本，楼宇和工业客户粘性更强。", "None for home buyers; building and industrial clients are stickier.") }
      ]
    },
    product: {
      take: T("一半靠家电，越来越多靠 To B 和海外。", "Half home appliances, with B2B and overseas growing."),
      rows: [
        { k: T("核心产品", "Main products"), v: T("空调约 4 成，冰箱洗衣机，小家电", "Air conditioners ~40%, fridges and washers, small appliances") },
        { k: T("To B 业务", "B2B"), v: T("楼宇科技、新能源汽车部件、库卡机器人", "Building tech, EV components, KUKA robotics") },
        { k: T("更新周期", "Replacement cycle"), v: T("8–12 年", "8–12 years") },
        { k: T("周期性", "Cyclicality"), v: T("和房地产、以旧换新政策相关", "Tied to housing and trade-in subsidies") },
        { k: T("定价方式", "Pricing"), v: T("竞争充分，靠成本领先赚钱", "Highly competitive; profits come from being the low-cost maker") },
        { k: T("全球化", "Global footprint"), v: T("40 多个海外生产基地，自有品牌约占海外收入 4 成", "40+ plants abroad; own brands ~40% of overseas sales") }
      ]
    },
    valuation: {
      take: T("股价低于中性区间，存在低估。", "The share price is below the base case: undervalued."),
      price: 73,
      basis: T("2025 年预测每股收益约 5.7 元", "2025E EPS ≈ CNY 5.7"),
      axis: [45, 110],
      bear: { low: 57, high: 63, pe: "10–11x", note: T("国补退坡，关税冲击出口", "Subsidies end; tariffs hit exports") },
      base: { low: 77, high: 86, pe: "13.5–15x", note: T("利润增长约 10%，分红率 65% 以上", "Profit growth ~10%; payout above 65%") },
      bull: { low: 91, high: 100, pe: "16–17.5x", note: T("To B 利润率提升，被当作科技公司估值", "B2B margins rise; market values it as a tech group") }
    },
    edge: {
      take: T("To B 和海外自有品牌在加宽护城河。", "B2B and overseas own brands are widening the moat."),
      plus: [
        T("To B 收入占比约 26%，欧洲热泵需求旺盛。", "B2B is ~26% of revenue; European heat-pump demand is strong."),
        T("海外自有品牌毛利高于代工。", "Own brands abroad earn higher margins than contract manufacturing."),
        T("港股上市后海外并购能力更强。", "The Hong Kong listing makes overseas acquisitions easier.")
      ],
      minus: [
        T("以旧换新补贴提前透支需求，2026 年基数高。", "Trade-in subsidies pulled demand forward; 2026 faces a high base."),
        T("小米等互联网品牌进入空调市场，价格竞争加剧。", "Xiaomi and other internet brands are entering air conditioners."),
        T("库卡机器人整合后利润率仍偏低。", "KUKA's margins are still low after integration.")
      ]
    },
    demand: {
      take: T("国内靠政策托底，海外和 To B 是真正的增量。", "China is held up by subsidies; real growth is overseas and B2B."),
      drivers: [
        { name: T("国内家电更新", "China replacement"), share: 40, dir: "flat" },
        { name: T("海外市场", "Overseas"), share: 35, dir: "up" },
        { name: T("楼宇 / 热泵", "Buildings / heat pumps"), share: 15, dir: "up" },
        { name: T("工业自动化", "Industrial automation"), share: 10, dir: "flat" }
      ],
      note: T("国内白电保有量已饱和；东南亚、中东、拉美空调普及率仍低。", "China is saturated for major appliances; air-conditioner ownership is still low in Southeast Asia, the Middle East and Latin America.")
    },
    weak: {
      take: T("短期看补贴，长期看高端品牌。", "Short term it depends on subsidies; long term on its premium brand."),
      items: [
        { level: "mid", title: T("高端品牌力", "Premium brand"), note: T("COLMO 规模仍小，和卡萨帝有差距。", "COLMO is still small next to Casarte.") },
        { level: "mid", title: T("政策依赖", "Subsidy reliance"), note: T("以旧换新补贴退坡后内销可能回落。", "Domestic sales may drop when trade-in subsidies end.") },
        { level: "mid", title: T("房地产", "Housing"), note: T("新房竣工下降影响厨电和中央空调。", "Fewer new homes hurts kitchen appliances and central AC.") },
        { level: "low", title: T("贸易摩擦", "Trade friction"), note: T("美国关税影响出口，需要海外产能来对冲。", "US tariffs hit exports; offset by moving output abroad.") }
      ]
    },
    watch: [T("To B 业务利润率", "B2B margins"), T("海外自有品牌占比", "Own-brand share abroad"), T("2026 年补贴是否延续", "Are subsidies extended into 2026?")]
  }
];

/* Issues published in 2025. Prices in CNY per share as of the report date; mcap in CNY 100 m (亿元). */
window.REPORTS.push(
  /* ====================================================== */
  {
    id: "600519",
    date: "2025-08-08",
    code: "600519.SH",
    company: T("贵州茅台", "Kweichow Moutai"),
    industry: T("白酒", "Baijiu (Chinese liquor)"),
    sector: "consumer",
    mcap: 17960, mult: 20.8,
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
    sector: "newenergy",
    mcap: 12770, mult: 21,
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
    sector: "consumer",
    mcap: 5600, mult: 13,
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
);

window.REPORTS.push(
  /* ====================================================== */
  {
    id: "600036",
    date: "2025-09-19",
    code: "600036.SH",
    company: T("招商银行", "China Merchants Bank"),
    industry: T("银行", "Banking"),
    sector: "finance",
    mcap: 10590, mult: 0.95,
    position: T("零售银行龙头，财富管理规模和客户质量在股份制银行中排第一", "China's leading retail bank; first among joint-stock banks in wealth management and customer quality"),
    verdict: "fair-low",
    trend: "stable",
    moatScore: 4,
    thesis: [
      T("护城河是低成本存款和庞大的零售客户群，这是多年积累的结果。", "Its moat is cheap deposits and a huge retail customer base, built up over many years."),
      T("利率下行压缩了整个行业的利差，招行也不例外，利润增速接近零。", "Falling interest rates squeeze margins across the industry, CMB included; profit growth is close to zero."),
      T("市净率不到 1 倍、股息率约 5%，市场把它当作高股息资产在定价。", "At under 1x book value with a ~5% dividend yield, the market prices it as a dividend stock.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("3,375 亿元", "CNY 337.5 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("1,484 亿元", "CNY 148.4 bn") },
      { k: T("ROE", "ROE"), v: T("约 14.5%", "~14.5%") },
      { k: T("市净率", "P/B"), v: T("约 0.95 倍", "~0.95x") }
    ],
    moat: {
      take: T("最难复制的是存款成本和客户粘性。", "The hardest things to copy are its deposit cost and customer loyalty."),
      items: [
        { name: T("低成本存款", "Cheap deposits"), score: 5, note: T("活期存款占比高，付息成本在大中型银行里最低之一。", "A high share of current-account deposits keeps funding costs among the lowest of large banks.") },
        { name: T("零售客户", "Retail customers"), score: 5, note: T("零售客户约 2 亿户，管理客户总资产（AUM）约 15 万亿元。", "About 200 million retail customers with roughly CNY 15 trn in assets under management.") },
        { name: T("财富管理", "Wealth management"), score: 4, note: T("私人银行客户数和代销能力领先，带来稳定的手续费收入。", "Leads in private banking clients and product distribution, which brings steady fee income.") },
        { name: T("风控", "Risk control"), score: 4, note: T("不良率约 0.95%，拨备覆盖率超过 400%。", "NPL ratio about 0.95% with provision coverage above 400%.") },
        { name: T("App 与服务", "Apps & service"), score: 3, note: T("招商银行 App 和掌上生活月活过亿，但同行也在追赶。", "Its two apps have over 100 m monthly users, but rivals are catching up.") }
      ]
    },
    product: {
      take: T("银行卖的是资金和服务，利率决定了大部分利润。", "A bank sells money and services, and interest rates decide most of the profit."),
      rows: [
        { k: T("收入结构", "Revenue mix"), v: T("利息收入约 6 成，手续费及其他约 4 成", "Interest ~60%, fees and other ~40%") },
        { k: T("客户", "Customers"), v: T("零售客户和中高端企业客户", "Retail customers and quality corporate clients") },
        { k: T("周期性", "Cyclicality"), v: T("跟利率、信贷需求和经济周期相关", "Tied to rates, loan demand and the economy") },
        { k: T("定价方式", "Pricing"), v: T("贷款利率跟 LPR 走，存款利率受监管引导", "Loan rates follow the LPR; deposit rates are guided by regulators") },
        { k: T("股东回报", "Shareholder return"), v: T("分红率约 35%，股息率约 5%", "Payout ~35%, yield ~5%") }
      ]
    },
    valuation: {
      take: T("股价略低于中性区间。", "The price sits slightly below the base case."),
      metric: "PB",
      price: 42,
      basis: T("2025 年末预测每股净资产约 45 元", "2025E book value per share ≈ CNY 45"),
      axis: [30, 62],
      bear: { low: 35, high: 38, pe: "0.8x", note: T("净息差跌破 1.8%，零售不良上升", "NIM below 1.8%; retail bad loans rise") },
      base: { low: 43, high: 47, pe: "0.95–1.05x", note: T("利润持平到小幅增长，分红稳定", "Flat to slightly rising profit; stable dividend") },
      bull: { low: 54, high: 58, pe: "1.2–1.3x", note: T("资本市场回暖，财富管理收入恢复增长", "Capital markets recover; wealth fees grow again") }
    },
    edge: {
      take: T("优势还在，但利差收窄让它赚钱变难。", "The edge is intact, but thinner margins make money harder to earn."),
      plus: [
        T("存款搬家到理财和基金时，招行的财富管理能接住这部分资金。", "When savers move deposits into funds, CMB's wealth arm captures that money."),
        T("资产质量稳定，不良率低于同业。", "Asset quality is stable, with lower bad loans than peers.")
      ],
      minus: [
        T("2024 年净息差降到 1.98%，还在下行。", "Net interest margin fell to 1.98% in 2024 and is still falling."),
        T("基金代销费率下调，手续费收入下降。", "Lower fund sales fees cut commission income."),
        T("零售贷款需求弱，信用卡和消费贷增长放缓。", "Weak demand for consumer loans and credit cards.")
      ]
    },
    demand: {
      take: T("贷款需求偏弱，财富管理是主要的增量来源。", "Loan demand is soft; wealth management is the main source of growth."),
      drivers: [
        { name: T("零售贷款", "Retail loans"), share: 35, dir: "flat" },
        { name: T("对公贷款", "Corporate loans"), share: 30, dir: "flat" },
        { name: T("财富管理", "Wealth management"), share: 20, dir: "up" },
        { name: T("信用卡", "Credit cards"), share: 15, dir: "down" }
      ],
      note: T("居民储蓄率高，存款充足，但借钱消费和买房的意愿不强。", "Households save a lot, so deposits are ample, but appetite to borrow for homes and spending is weak.")
    },
    weak: {
      take: T("最大的压力来自利率。", "The biggest pressure is interest rates."),
      items: [
        { level: "high", title: T("利差收窄", "Shrinking margins"), note: T("降息会继续压低贷款收益率，存款成本下降更慢。", "Rate cuts lower loan yields faster than deposit costs.") },
        { level: "mid", title: T("房地产敞口", "Property exposure"), note: T("对公房地产贷款和按揭仍是潜在风险。", "Developer loans and mortgages remain a risk.") },
        { level: "mid", title: T("费率下调", "Fee cuts"), note: T("监管要求降低理财和基金费率。", "Regulators are pushing down fund and wealth fees.") }
      ]
    },
    watch: [T("季度净息差", "Quarterly NIM"), T("零售 AUM 增速", "Retail AUM growth"), T("零售不良率", "Retail NPL ratio")]
  },

  /* ====================================================== */
  {
    id: "600900",
    date: "2025-10-03",
    code: "600900.SH",
    company: T("长江电力", "China Yangtze Power"),
    industry: T("水电", "Hydropower"),
    sector: "infra",
    mcap: 6850, mult: 20,
    position: T("全球最大的水电上市公司，运营三峡、白鹤滩等六座长江干流电站", "The world's largest listed hydropower company, running six dams on the Yangtze including Three Gorges and Baihetan"),
    verdict: "fair",
    trend: "stable",
    moatScore: 5,
    thesis: [
      T("大型水电站的位置是唯一的，建好后几乎没有竞争。", "Each big dam site is one of a kind; once built, there is almost no competition."),
      T("电站建成后成本主要是折旧，现金流非常稳定，承诺分红率不低于 70%。", "After construction, costs are mostly depreciation, so cash flow is very stable; it promises to pay out at least 70%."),
      T("它在市场里的角色像一只「类债券」，估值跟着利率走。", "The market treats it like a bond; its valuation moves with interest rates.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("845 亿元", "CNY 84.5 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("325 亿元", "CNY 32.5 bn") },
      { k: T("装机容量", "Capacity"), v: T("约 7,180 万千瓦", "~71.8 GW") },
      { k: T("市盈率", "P/E"), v: T("约 20 倍", "~20x") }
    ],
    moat: {
      take: T("资源独占加上极低的运营成本。", "Exclusive sites plus very low running costs."),
      items: [
        { name: T("资源独占", "Exclusive sites"), score: 5, note: T("长江干流最好的坝址都已建成，无法再复制。", "The best sites on the Yangtze mainstream are already built; they cannot be copied.") },
        { name: T("成本", "Cost"), score: 5, note: T("没有燃料成本，度电成本远低于火电。", "No fuel cost, so each kWh costs far less than coal power.") },
        { name: T("梯级调度", "Joint dispatch"), score: 4, note: T("六座电站联合调度，同样的水能多发电。", "Running six dams together gets more power from the same water.") },
        { name: T("电价机制", "Tariff setup"), score: 3, note: T("售电价格受政策决定，自身议价空间有限。", "Tariffs are set by policy, so it has little pricing power of its own.") }
      ]
    },
    product: {
      take: T("只卖一种产品：电，卖给电网。", "One product, electricity, sold to the grid."),
      rows: [
        { k: T("核心产品", "Main product"), v: T("水电，年发电量约 3,000 亿千瓦时", "Hydropower, about 300 TWh a year") },
        { k: T("客户", "Customers"), v: T("国家电网、南方电网，主要送往华东、华中、广东", "State Grid and China Southern Grid; mostly to East, Central China and Guangdong") },
        { k: T("周期性", "Cyclicality"), v: T("几乎无经济周期，主要受来水影响", "Almost no economic cycle; mainly depends on rainfall") },
        { k: T("定价方式", "Pricing"), v: T("政府定价加部分市场化交易", "Government tariffs plus some market trading") },
        { k: T("股东回报", "Shareholder return"), v: T("分红率不低于 70%，股息率约 3.5%", "Payout at least 70%; yield ~3.5%") }
      ]
    },
    valuation: {
      take: T("股价在中性区间中部。", "The price is in the middle of the base case."),
      price: 28,
      basis: T("2025 年预测每股收益约 1.40 元", "2025E EPS ≈ CNY 1.40"),
      axis: [20, 38],
      bear: { low: 23, high: 25, pe: "16–18x", note: T("长端利率回升，来水偏枯", "Long-term rates rise; dry year") },
      base: { low: 27, high: 30, pe: "19–21x", note: T("发电量稳定，分红率 70%", "Stable output; 70% payout") },
      bull: { low: 32, high: 34, pe: "23–24x", note: T("利率继续下行，抽水蓄能贡献增量", "Rates keep falling; pumped storage adds growth") }
    },
    edge: {
      take: T("护城河没有变化，增长主要靠旧资产折旧到期后利润释放。", "The moat is unchanged; growth mainly comes from old assets finishing depreciation."),
      plus: [
        T("三峡等早期资产折旧陆续到期，利润自然提高。", "Early assets like Three Gorges finish depreciating, which lifts profit."),
        T("正在建设抽水蓄能电站，参与电网调峰。", "Building pumped-storage plants to help balance the grid.")
      ],
      minus: [
        T("电力市场化改革后，部分电量要参与竞价。", "Power market reform means part of output must be sold at market prices."),
        T("长江干流已没有新的大型坝址，规模增长见顶。", "No big new dam sites remain on the mainstream, so scale growth has peaked.")
      ]
    },
    demand: {
      take: T("东部沿海用电需求稳定，水电作为清洁电源优先上网。", "Coastal power demand is steady, and clean hydro gets priority on the grid."),
      drivers: [
        { name: T("华东", "East China"), share: 45, dir: "up" },
        { name: T("华中", "Central China"), share: 25, dir: "flat" },
        { name: T("广东", "Guangdong"), share: 20, dir: "flat" },
        { name: T("其他", "Other"), share: 10, dir: "flat" }
      ],
      note: T("全社会用电量每年增长 5–7%，数据中心和电动车是新的用电来源。", "National power use grows 5–7% a year, with data centres and EVs adding new demand.")
    },
    weak: {
      take: T("风险不大，但增长空间也有限。", "Low risk, but also limited growth."),
      items: [
        { level: "mid", title: T("来水波动", "Rainfall"), note: T("枯水年发电量可下降 10% 以上。", "A dry year can cut output by over 10%.") },
        { level: "mid", title: T("利率敏感", "Rate sensitivity"), note: T("市场把它当债券看，利率上升时估值会下降。", "Valued like a bond, so higher rates lower its valuation.") },
        { level: "low", title: T("电价改革", "Tariff reform"), note: T("市场化电价可能低于原先的协议电价。", "Market prices may come in below old contract prices.") }
      ]
    },
    watch: [T("年度来水和发电量", "Yearly water flow and output"), T("10 年期国债收益率", "10-year bond yield"), T("抽水蓄能进度", "Pumped storage progress")]
  },

  /* ====================================================== */
  {
    id: "601318",
    date: "2025-10-17",
    code: "601318.SH",
    company: T("中国平安", "Ping An Insurance"),
    industry: T("保险", "Insurance"),
    sector: "finance",
    mcap: 10200, mult: 0.74,
    position: T("国内最大的综合金融集团，寿险、财险、银行、资管牌照齐全", "China's largest financial conglomerate, with life, property insurance, banking and asset management licences"),
    verdict: "fair-low",
    trend: "stable",
    moatScore: 4,
    thesis: [
      T("综合金融让一个客户买多种产品，获客成本更低。", "As a one-stop shop, it sells several products to each customer, which lowers acquisition cost."),
      T("寿险改革后代理人数量大减，但人均产能提升，新业务价值恢复增长。", "After reform, it has far fewer agents but each sells more; new business value is growing again."),
      T("股价约为内含价值的 0.7 倍，市场担心的是地产投资和低利率。", "It trades at ~0.7x embedded value; the market worries about property investments and low rates.")
    ],
    stats: [
      { k: T("2024 归母营运利润", "2024 operating profit"), v: T("1,218 亿元", "CNY 121.8 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("1,266 亿元", "CNY 126.6 bn") },
      { k: T("个人客户", "Retail customers"), v: T("约 2.4 亿", "~240 m") },
      { k: T("P/EV", "P/EV"), v: T("约 0.74 倍", "~0.74x") }
    ],
    moat: {
      take: T("牌照齐全和客户规模是核心。", "Full licences and customer scale are the core."),
      items: [
        { name: T("综合金融", "One-stop finance"), score: 4, note: T("客户平均持有约 2.9 个合同，交叉销售能力强。", "Customers hold about 2.9 contracts each; strong cross-selling.") },
        { name: T("客户规模", "Customer base"), score: 5, note: T("约 2.4 亿个人客户，国内保险业最大。", "About 240 m retail customers, the most of any insurer in China.") },
        { name: T("代理人质量", "Agent quality"), score: 4, note: T("代理人减少到约 36 万，但人均新业务价值大幅提升。", "Agents down to ~360,000, but value per agent is much higher.") },
        { name: T("品牌", "Brand"), score: 4, note: T("保险行业认知度最高的品牌之一。", "One of the best-known insurance brands in China.") },
        { name: T("转换成本", "Switching cost"), score: 3, note: T("长期寿险保单退保有损失，客户不容易离开。", "Cancelling a long-term policy costs money, so customers tend to stay.") }
      ]
    },
    product: {
      take: T("卖的是长期承诺，利润来自承保和投资两端。", "It sells long-term promises; profit comes from underwriting and investing."),
      rows: [
        { k: T("核心产品", "Main products"), v: T("寿险与健康险、车险、平安银行、资管", "Life & health, auto insurance, Ping An Bank, asset management") },
        { k: T("客户", "Customers"), v: T("城市中产家庭为主", "Mainly urban middle-class families") },
        { k: T("周期性", "Cyclicality"), v: T("投资收益随股市和利率波动", "Investment returns swing with stocks and rates") },
        { k: T("定价方式", "Pricing"), v: T("保单预定利率受监管上限约束", "Guaranteed policy rates are capped by regulators") },
        { k: T("股东回报", "Shareholder return"), v: T("分红连续 13 年增长，股息率约 5%", "Dividend raised 13 years in a row; yield ~5%") }
      ]
    },
    valuation: {
      take: T("股价在中性区间下沿。", "The price is at the bottom of the base case."),
      metric: "PEV",
      price: 56,
      basis: T("每股内含价值约 76 元", "Embedded value per share ≈ CNY 76"),
      axis: [35, 85],
      bear: { low: 42, high: 46, pe: "0.55–0.6x", note: T("长端利率跌破 1.5%，地产减值扩大", "Long rates below 1.5%; bigger property write-downs") },
      base: { low: 57, high: 65, pe: "0.75–0.85x", note: T("新业务价值增长 10% 以上", "New business value grows 10%+") },
      bull: { low: 74, high: 78, pe: "~1.0x", note: T("股市回暖，投资收益明显改善", "Stock market recovers; investment returns improve") }
    },
    edge: {
      take: T("改革见效，护城河稳住了。", "Reforms are working and the moat has stabilised."),
      plus: [
        T("代理人人均产能提高，渠道更健康。", "Higher productivity per agent; a healthier channel."),
        T("银保渠道和医疗养老服务带来新客户。", "Bank channel sales and health/elder-care services bring new customers.")
      ],
      minus: [
        T("长端利率下行，老保单存在利差损风险。", "Falling long rates create a gap on old guaranteed policies."),
        T("对华夏幸福等地产商的投资造成减值。", "Investments in developers such as China Fortune Land led to write-downs.")
      ]
    },
    demand: {
      take: T("储蓄型保险需求旺盛，保障型需求平淡。", "Savings-type policies sell well; protection policies less so."),
      drivers: [
        { name: T("寿险与健康险", "Life & health"), share: 55, dir: "up" },
        { name: T("财产险", "Property & casualty"), share: 20, dir: "flat" },
        { name: T("银行", "Banking"), share: 15, dir: "down" },
        { name: T("资管与科技", "Asset mgmt & tech"), share: 10, dir: "flat" }
      ],
      note: T("存款利率下降后，居民把储蓄转向分红险和年金险，这是近两年寿险增长的主因。", "With low deposit rates, households move savings into participating and annuity policies, the main driver of recent life insurance growth.")
    },
    weak: {
      take: T("利率和地产是两个主要风险。", "Interest rates and property are the two main risks."),
      items: [
        { level: "high", title: T("低利率", "Low rates"), note: T("投资收益率下降，可能低于保单承诺的利率。", "Investment yields may fall below rates promised on policies.") },
        { level: "mid", title: T("地产投资", "Property investments"), note: T("不动产和地产债仍有减值风险。", "Real estate holdings and bonds may need further write-downs.") },
        { level: "mid", title: T("结构复杂", "Complexity"), note: T("业务多、子公司多，外部投资者难以看清。", "Many businesses and subsidiaries make it hard for outsiders to read.") }
      ]
    },
    watch: [T("新业务价值增速", "New business value growth"), T("净投资收益率", "Net investment yield"), T("地产敞口变化", "Property exposure")]
  },

  /* ====================================================== */
  {
    id: "600276",
    date: "2025-10-31",
    code: "600276.SH",
    company: T("恒瑞医药", "Jiangsu Hengrui"),
    industry: T("创新药", "Innovative drugs"),
    sector: "health",
    mcap: 4180, mult: 55,
    position: T("国内研发投入最大的制药公司，从仿制药转型为创新药", "China's biggest pharma R&D spender, shifting from generics to innovative drugs"),
    verdict: "fair",
    trend: "widening",
    moatScore: 4,
    thesis: [
      T("创新药收入已接近总收入一半，集采对它的影响越来越小。", "Innovative drugs are close to half of sales, so price-cut tenders hurt it less and less."),
      T("通过授权海外药企（如与 GSK 的合作）获得首付款，证明了研发价值。", "Licensing deals with global drugmakers (such as GSK) bring upfront cash and prove its R&D is worth something."),
      T("估值高，市场是在为未来的管线付钱。", "The valuation is high; the market is paying for the future pipeline.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("280 亿元", "CNY 28.0 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("63 亿元", "CNY 6.3 bn") },
      { k: T("研发投入", "R&D spend"), v: T("约 82 亿元", "~CNY 8.2 bn") },
      { k: T("市盈率", "P/E"), v: T("约 55 倍", "~55x") }
    ],
    moat: {
      take: T("研发管线和销售网络共同构成壁垒。", "Its pipeline and sales network together form the barrier."),
      items: [
        { name: T("研发管线", "Pipeline"), score: 5, note: T("上市创新药超过 20 个，临床阶段项目 90 多个。", "Over 20 approved innovative drugs and 90+ projects in clinical trials.") },
        { name: T("销售网络", "Sales network"), score: 4, note: T("覆盖全国医院，新药上市后能快速放量。", "Reaches hospitals nationwide, so new drugs ramp up fast.") },
        { name: T("临床能力", "Clinical trials"), score: 4, note: T("能同时推进大量临床试验，速度快。", "Can run many trials at once, quickly.") },
        { name: T("出海合作", "Global deals"), score: 3, note: T("对外授权增多，但自主海外销售还没建立。", "More licensing deals, but no overseas sales team of its own yet.") }
      ]
    },
    product: {
      take: T("处方药，医院是主要渠道，医保决定价格。", "Prescription drugs sold via hospitals; the national insurance list sets prices."),
      rows: [
        { k: T("核心领域", "Main areas"), v: T("肿瘤、代谢（GLP-1）、自身免疫、麻醉镇痛", "Oncology, metabolism (GLP-1), immunology, anaesthesia") },
        { k: T("客户", "Customers"), v: T("医院和患者，费用主要由医保支付", "Hospitals and patients; mostly paid by national insurance") },
        { k: T("周期性", "Cyclicality"), v: T("弱周期，受医保政策影响大", "Not cyclical, but very policy-driven") },
        { k: T("定价方式", "Pricing"), v: T("新药通过医保谈判定价，仿制药受集采", "New drugs priced via insurance negotiation; generics via tenders") },
        { k: T("产品寿命", "Product life"), v: T("专利期约 10–15 年", "Patents last about 10–15 years") }
      ]
    },
    valuation: {
      take: T("股价在中性区间内。", "The price is inside the base case."),
      price: 63,
      basis: T("2025 年预测每股收益约 1.15 元", "2025E EPS ≈ CNY 1.15"),
      axis: [35, 90],
      bear: { low: 44, high: 48, pe: "38–42x", note: T("核心新药医保谈判降价，海外授权减少", "Big price cuts on key drugs; fewer licensing deals") },
      base: { low: 58, high: 67, pe: "50–58x", note: T("创新药收入增长 25%，持续有授权收入", "Innovative drug sales +25%; steady licensing income") },
      bull: { low: 75, high: 80, pe: "65–70x", note: T("GLP-1 等重磅品种海外临床成功", "GLP-1 and other key drugs succeed in global trials") }
    },
    edge: {
      take: T("研发积累开始兑现，护城河在变宽。", "Years of R&D are paying off, widening the moat."),
      plus: [
        T("创新药占比提升，集采风险下降。", "More innovative drug sales lower tender risk."),
        T("对外授权带来现金，并得到海外药企认可。", "Licensing brings cash and validation from global drugmakers."),
        T("港股上市后融资渠道更多。", "The Hong Kong listing opens more funding options.")
      ],
      minus: [
        T("国内创新药公司增多，同靶点竞争激烈。", "More Chinese biotechs crowd the same drug targets."),
        T("医保谈判降价幅度大。", "Insurance negotiations bring steep price cuts.")
      ]
    },
    demand: {
      take: T("人口老龄化和癌症治疗需求是长期动力。", "Ageing and cancer care drive long-term demand."),
      drivers: [
        { name: T("肿瘤", "Oncology"), share: 50, dir: "up" },
        { name: T("麻醉镇痛", "Anaesthesia"), share: 20, dir: "flat" },
        { name: T("代谢与心血管", "Metabolic & cardio"), share: 15, dir: "up" },
        { name: T("其他", "Other"), share: 15, dir: "flat" }
      ],
      note: T("中国医药市场约 1.7 万亿元，创新药占比仍低于发达国家，提升空间大。", "China's drug market is about CNY 1.7 trn; innovative drugs are a smaller share than in developed markets, leaving room to grow.")
    },
    weak: {
      take: T("最大不确定性在研发结果和政策。", "The biggest unknowns are trial results and policy."),
      items: [
        { level: "high", title: T("研发失败", "Trial failure"), note: T("关键临床失败会直接影响估值。", "A key trial failure would hit the valuation directly.") },
        { level: "mid", title: T("医保降价", "Insurance price cuts"), note: T("新药进医保通常要降价 50% 以上。", "Drugs usually take 50%+ price cuts to enter the insurance list.") },
        { level: "mid", title: T("估值偏高", "High valuation"), note: T("55 倍市盈率对增长要求很高。", "At 55x earnings, growth expectations are high.") }
      ]
    },
    watch: [T("创新药收入占比", "Innovative drug share"), T("新的授权交易", "New licensing deals"), T("GLP-1 临床进展", "GLP-1 trial progress")]
  },

  /* ====================================================== */
  {
    id: "603288",
    date: "2025-11-14",
    code: "603288.SH",
    company: T("海天味业", "Foshan Haitian"),
    industry: T("调味品", "Condiments"),
    sector: "consumer",
    mcap: 2220, mult: 32,
    position: T("国内最大的调味品公司，酱油市场份额第一", "China's largest condiment maker and No.1 in soy sauce"),
    verdict: "fair",
    trend: "stable",
    moatScore: 4,
    thesis: [
      T("规模和渠道让它的成本和铺货能力远超对手。", "Its scale and distribution give it cost and reach far beyond rivals."),
      T("2023 年经历「零添加」舆情和餐饮疲软，2024 年后恢复增长。", "It went through a food-additive scare and weak restaurant demand in 2023, then returned to growth in 2024."),
      T("约 32 倍市盈率，市场仍愿意为确定性付溢价。", "At ~32x earnings, the market still pays a premium for its reliability.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("269 亿元", "CNY 26.9 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("63 亿元", "CNY 6.3 bn") },
      { k: T("酱油市占率", "Soy sauce share"), v: T("约 20%", "~20%") },
      { k: T("市盈率", "P/E"), v: T("约 32 倍", "~32x") }
    ],
    moat: {
      take: T("成本优势加渠道深度。", "Cost advantage plus deep distribution."),
      items: [
        { name: T("规模成本", "Scale & cost"), score: 5, note: T("高明基地是全球最大的酱油生产基地之一。", "Its Gaoming site is one of the world's largest soy sauce plants.") },
        { name: T("渠道", "Distribution"), score: 5, note: T("约 6,700 家经销商，覆盖县城和乡镇。", "About 6,700 distributors reaching county towns and villages.") },
        { name: T("品牌", "Brand"), score: 4, note: T("家庭和餐馆最熟悉的调味品品牌。", "The condiment brand homes and restaurants know best.") },
        { name: T("口味习惯", "Taste habit"), score: 3, note: T("厨师习惯了固定口味，不轻易换。", "Chefs get used to a taste and rarely switch.") }
      ]
    },
    product: {
      take: T("小单价、高频率的必需品。", "A low-price, high-frequency necessity."),
      rows: [
        { k: T("核心产品", "Main products"), v: T("酱油约 6 成，蚝油、调味酱", "Soy sauce ~60%, oyster sauce, pastes") },
        { k: T("客户", "Customers"), v: T("餐饮约 6 成，家庭约 3 成，食品加工约 1 成", "Restaurants ~60%, households ~30%, food makers ~10%") },
        { k: T("周期性", "Cyclicality"), v: T("弱周期，和餐饮景气相关", "Mildly cyclical, linked to restaurants") },
        { k: T("定价方式", "Pricing"), v: T("每隔几年提价一次，跟成本走", "Raises prices every few years in line with costs") },
        { k: T("原料", "Inputs"), v: T("大豆、小麦、白糖、包材", "Soybeans, wheat, sugar, packaging") }
      ]
    },
    valuation: {
      take: T("股价在中性区间内。", "The price is inside the base case."),
      price: 38,
      basis: T("2025 年预测每股收益约 1.20 元", "2025E EPS ≈ CNY 1.20"),
      axis: [25, 50],
      bear: { low: 29, high: 31, pe: "24–26x", note: T("餐饮需求继续下滑", "Restaurant demand keeps falling") },
      base: { low: 36, high: 41, pe: "30–34x", note: T("收入增长 7–9%，原料成本稳定", "Revenue +7–9%; stable input costs") },
      bull: { low: 44, high: 46, pe: "37–38x", note: T("海外和新品类贡献增长", "Overseas and new categories add growth") }
    },
    edge: {
      take: T("基本盘稳，但不再是高增长。", "The core is solid, but high growth is over."),
      plus: [
        T("港股上市后开始拓展海外市场。", "Expanding overseas after its Hong Kong listing."),
        T("推出零添加和减盐系列，应对健康需求。", "Launched no-additive and low-salt lines for health-conscious buyers.")
      ],
      minus: [
        T("千禾等零添加品牌抢占高端家庭市场。", "No-additive brands like Qianhe take share in premium households."),
        T("社区团购和定制调味品分流部分餐饮需求。", "Custom sauces and group-buying platforms divert some restaurant demand.")
      ]
    },
    demand: {
      take: T("总需求稳定，结构向健康和高端转移。", "Total demand is steady, shifting toward health and premium products."),
      drivers: [
        { name: T("餐饮", "Restaurants"), share: 60, dir: "flat" },
        { name: T("家庭", "Households"), share: 30, dir: "flat" },
        { name: T("食品加工", "Food makers"), share: 7, dir: "up" },
        { name: T("海外", "Overseas"), share: 3, dir: "up" }
      ],
      note: T("中国调味品市场约 5,000 亿元，酱油行业集中度还在提升。", "China's condiment market is about CNY 500 bn, and soy sauce is still consolidating.")
    },
    weak: {
      take: T("增速放缓是主要问题。", "Slowing growth is the main issue."),
      items: [
        { level: "mid", title: T("餐饮疲软", "Weak restaurants"), note: T("餐饮客单价下降，影响调味品用量。", "Lower restaurant spending cuts sauce use.") },
        { level: "mid", title: T("健康竞争", "Health rivals"), note: T("消费者更在意配料表，新品牌抢份额。", "Shoppers read labels more; new brands gain share.") },
        { level: "low", title: T("原料成本", "Input costs"), note: T("大豆价格上涨会压缩毛利。", "Higher soybean prices squeeze margins.") }
      ]
    },
    watch: [T("餐饮渠道增速", "Restaurant channel growth"), T("海外收入", "Overseas sales"), T("毛利率", "Gross margin")]
  },

  /* ====================================================== */
  {
    id: "601899",
    date: "2025-11-28",
    code: "601899.SH",
    company: T("紫金矿业", "Zijin Mining"),
    industry: T("有色金属", "Metals & mining"),
    sector: "resources",
    mcap: 7970, mult: 16,
    position: T("国内最大的铜金矿企，铜产量进入全球前五", "China's largest copper and gold miner, among the world's top five copper producers"),
    verdict: "fair",
    trend: "widening",
    moatScore: 4,
    thesis: [
      T("核心能力是低成本开发别人认为不经济的矿山。", "Its core skill is profitably developing mines others thought were uneconomic."),
      T("铜和黄金价格同时处于高位，2025 年利润大幅增长。", "Copper and gold prices are both high, so 2025 profit jumped."),
      T("利润和金属价格高度相关，估值要看周期位置。", "Profit tracks metal prices closely, so valuation depends on where we are in the cycle.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("3,036 亿元", "CNY 303.6 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("321 亿元", "CNY 32.1 bn") },
      { k: T("矿产铜产量", "Mined copper"), v: T("约 107 万吨", "~1.07 mt") },
      { k: T("市盈率", "P/E"), v: T("约 16 倍", "~16x") }
    ],
    moat: {
      take: T("资源储量和开发能力是核心。", "Reserves and mine-building skill are the core."),
      items: [
        { name: T("资源储量", "Reserves"), score: 5, note: T("拥有刚果（金）卡莫阿-卡库拉、西藏巨龙等世界级铜矿。", "Owns world-class copper mines such as Kamoa-Kakula (DRC) and Julong (Tibet).") },
        { name: T("低成本开发", "Low-cost development"), score: 4, note: T("擅长低品位矿和复杂矿的开发，建矿速度快。", "Good at low-grade and complex ore, and builds mines quickly.") },
        { name: T("并购整合", "Acquisitions"), score: 4, note: T("多次在周期低点收购海外矿山。", "Has repeatedly bought overseas mines at cycle lows.") },
        { name: T("定价权", "Pricing power"), score: 1, note: T("金属价格由全球市场决定，公司没有定价权。", "Metal prices are set globally; the company has no pricing power.") }
      ]
    },
    product: {
      take: T("大宗商品，利润随价格大起大落。", "Commodities; profit rises and falls with prices."),
      rows: [
        { k: T("核心产品", "Main products"), v: T("铜、黄金为主，锌、锂、银为辅", "Mainly copper and gold; also zinc, lithium, silver") },
        { k: T("客户", "Customers"), v: T("冶炼厂、贸易商、电网和制造业", "Smelters, traders, grid and manufacturers") },
        { k: T("周期性", "Cyclicality"), v: T("强周期", "Highly cyclical") },
        { k: T("定价方式", "Pricing"), v: T("跟随伦敦和上海期货价格", "Follows London and Shanghai futures prices") },
        { k: T("全球化", "Global footprint"), v: T("项目分布在 10 多个国家", "Projects in more than 10 countries") }
      ]
    },
    valuation: {
      take: T("股价在中性区间内。", "The price is inside the base case."),
      price: 30,
      basis: T("2025 年预测每股收益约 1.85 元", "2025E EPS ≈ CNY 1.85"),
      axis: [15, 42],
      bear: { low: 19, high: 22, pe: "10–12x", note: T("铜价跌到每吨 8,000 美元以下", "Copper falls below USD 8,000/t") },
      base: { low: 26, high: 31, pe: "14–17x", note: T("铜金价格维持高位，产量增长 8–10%", "Metal prices stay high; output grows 8–10%") },
      bull: { low: 36, high: 38, pe: "19–21x", note: T("铜供应短缺推高价格", "A copper shortage pushes prices higher") }
    },
    edge: {
      take: T("新矿陆续投产，规模和成本优势在扩大。", "New mines coming online widen its scale and cost edge."),
      plus: [
        T("巨龙铜矿二期等项目带来产量增长。", "Projects like Julong phase 2 add output."),
        T("黄金业务分拆在港股上市，资产价值更清楚。", "Its gold unit listed separately in Hong Kong, making asset value clearer.")
      ],
      minus: [
        T("海外项目面临所在国政策变化风险。", "Overseas projects face policy changes in host countries."),
        T("矿山品位下降会推高单位成本。", "Falling ore grades raise unit costs.")
      ]
    },
    demand: {
      take: T("铜需求受益于电网、新能源和数据中心，黄金受益于央行购金。", "Copper demand benefits from grids, clean energy and data centres; gold from central bank buying."),
      drivers: [
        { name: T("铜", "Copper"), share: 50, dir: "up" },
        { name: T("黄金", "Gold"), share: 30, dir: "up" },
        { name: T("锌铅", "Zinc & lead"), share: 10, dir: "flat" },
        { name: T("锂及其他", "Lithium & other"), share: 10, dir: "flat" }
      ],
      note: T("全球铜矿新增供给有限，新矿从发现到投产通常要 10 年以上。", "New copper supply is limited; a new mine usually takes over 10 years from discovery to production.")
    },
    weak: {
      take: T("周期和地缘是两大风险。", "The cycle and geopolitics are the two big risks."),
      items: [
        { level: "high", title: T("商品周期", "Commodity cycle"), note: T("金属价格下跌时利润会快速下降。", "Profit drops quickly when metal prices fall.") },
        { level: "mid", title: T("海外风险", "Overseas risk"), note: T("刚果（金）、塞尔维亚等地的政策和安全风险。", "Policy and security risks in places like the DRC and Serbia.") },
        { level: "mid", title: T("资本开支", "Capital spending"), note: T("建矿投入大，负债率较高。", "Mine building is costly and debt is fairly high.") }
      ]
    },
    watch: [T("铜价和金价", "Copper and gold prices"), T("矿产铜产量", "Mined copper output"), T("资产负债率", "Debt ratio")]
  },

  /* ====================================================== */
  {
    id: "002594",
    date: "2025-12-12",
    code: "002594.SZ",
    company: T("比亚迪", "BYD"),
    industry: T("新能源汽车", "Electric vehicles"),
    sector: "newenergy",
    mcap: 8940, mult: 27,
    position: T("全球销量最大的新能源车企，电池、芯片、电机自己生产", "The world's best-selling EV maker, producing its own batteries, chips and motors"),
    verdict: "fair-high",
    trend: "stable",
    moatScore: 4,
    thesis: [
      T("垂直整合让它在价格战里成本最低。", "Vertical integration makes it the lowest-cost player in a price war."),
      T("2025 年国内价格战加剧，利润下滑；海外销量快速增长。", "In 2025 the domestic price war worsened and profit fell, while overseas sales grew fast."),
      T("股价略高于中性区间，市场在等海外放量兑现。", "The price is slightly above the base case; the market is waiting for overseas growth to show up in profit.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("7,771 亿元", "CNY 777.1 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("402 亿元", "CNY 40.2 bn") },
      { k: T("2024 销量", "2024 sales"), v: T("约 427 万辆", "~4.27 m cars") },
      { k: T("市盈率", "P/E"), v: T("约 27 倍", "~27x") }
    ],
    moat: {
      take: T("垂直整合和规模是核心。", "Vertical integration and scale are the core."),
      items: [
        { name: T("垂直整合", "Vertical integration"), score: 5, note: T("电池、芯片、电机、电控自己做，成本可控。", "Makes its own batteries, chips, motors and controllers, so it controls cost.") },
        { name: T("规模", "Scale"), score: 5, note: T("年销量 400 万辆以上，采购和研发摊薄明显。", "Over 4 m cars a year spreads purchasing and R&D cost.") },
        { name: T("技术", "Technology"), score: 4, note: T("刀片电池、DM-i 混动、兆瓦闪充。", "Blade battery, DM-i hybrid system and megawatt fast charging.") },
        { name: T("品牌", "Brand"), score: 3, note: T("中低端品牌强，高端（仰望、腾势）仍在建立。", "Strong in mass market; premium brands (Yangwang, Denza) still building.") }
      ]
    },
    product: {
      take: T("汽车是大件耐用消费品，价格竞争激烈。", "Cars are big-ticket durables with fierce price competition."),
      rows: [
        { k: T("核心产品", "Main products"), v: T("纯电和插混乘用车，约占 8 成收入", "Battery-electric and plug-in hybrid cars, ~80% of revenue") },
        { k: T("其他业务", "Other businesses"), v: T("手机部件组装（比亚迪电子）、电池外供", "Phone parts assembly (BYD Electronics), batteries for others") },
        { k: T("周期性", "Cyclicality"), v: T("中等周期，受补贴和消费信心影响", "Moderately cyclical; affected by subsidies and confidence") },
        { k: T("定价方式", "Pricing"), v: T("价格竞争激烈，靠成本优势降价", "Intense price competition; it cuts prices thanks to low cost") },
        { k: T("海外", "Overseas"), v: T("泰国、巴西、匈牙利、土耳其建厂", "Plants in Thailand, Brazil, Hungary and Turkey") }
      ]
    },
    valuation: {
      take: T("股价略高于中性区间中值。", "The price is slightly above the base-case midpoint."),
      price: 98,
      basis: T("2025 年预测每股收益约 3.6 元（2025 年送转后股本）", "2025E EPS ≈ CNY 3.6 (after 2025 bonus shares)"),
      axis: [55, 135],
      bear: { low: 65, high: 75, pe: "18–21x", note: T("国内价格战持续，海外关税提高", "Price war continues; higher overseas tariffs") },
      base: { low: 85, high: 100, pe: "24–28x", note: T("销量增长 10%，海外占比超过 2 成", "Sales +10%; overseas over 20% of volume") },
      bull: { low: 115, high: 125, pe: "32–35x", note: T("海外利润率高，智能驾驶带动高端化", "High overseas margins; driver-assist lifts premium sales") }
    },
    edge: {
      take: T("国内优势被追赶，海外是新的增长空间。", "Rivals are catching up at home; overseas is the new room to grow."),
      plus: [
        T("海外销量快速增长，单车利润高于国内。", "Overseas sales are growing fast with higher profit per car."),
        T("「天神之眼」智能驾驶全系标配。", "Driver-assist (God's Eye) is standard across the range.")
      ],
      minus: [
        T("吉利、零跑等对手在 10–20 万元价格带追赶。", "Geely, Leapmotor and others are closing in at CNY 100–200k."),
        T("欧盟对中国电动车征收反补贴税。", "The EU charges countervailing duties on Chinese EVs."),
        T("供应商账期问题受到监管关注。", "Long payment terms to suppliers drew regulatory attention.")
      ]
    },
    demand: {
      take: T("国内渗透率已过半，增长来自海外。", "China's EV penetration is past 50%; growth now comes from abroad."),
      drivers: [
        { name: T("国内乘用车", "China cars"), share: 65, dir: "flat" },
        { name: T("海外乘用车", "Overseas cars"), share: 20, dir: "up" },
        { name: T("手机部件", "Phone parts"), share: 12, dir: "flat" },
        { name: T("商用车等", "Buses & other"), share: 3, dir: "flat" }
      ],
      note: T("2025 年中国新能源车渗透率超过 50%，国内增速放缓到 20% 左右。", "China's EV share of new car sales passed 50% in 2025, and domestic growth slowed to about 20%.")
    },
    weak: {
      take: T("价格战和海外政策是两大风险。", "Price wars and overseas policy are the two big risks."),
      items: [
        { level: "high", title: T("价格战", "Price war"), note: T("降价会持续压低利润率。", "Price cuts keep squeezing margins.") },
        { level: "mid", title: T("海外关税", "Tariffs"), note: T("欧美加征关税，需要本地建厂。", "EU and US tariffs force it to build local plants.") },
        { level: "mid", title: T("供应商账期", "Supplier payments"), note: T("应付账款周期长，存在资金压力。", "Long payables point to cash pressure.") }
      ]
    },
    watch: [T("海外月销量", "Monthly overseas sales"), T("单车利润", "Profit per car"), T("国内份额", "Domestic share")]
  },

  /* ====================================================== */
  {
    id: "601088",
    date: "2025-12-26",
    code: "601088.SH",
    company: T("中国神华", "China Shenhua"),
    industry: T("煤炭", "Coal"),
    sector: "resources",
    mcap: 7950, mult: 15,
    position: T("国内最大的煤炭公司，煤、电、铁路、港口、航运一体化运营", "China's largest coal company, integrating mines, power plants, railways, ports and shipping"),
    verdict: "fair",
    trend: "stable",
    moatScore: 4,
    thesis: [
      T("一体化让它在煤价下跌时比同行更稳。", "Integration keeps it steadier than peers when coal prices fall."),
      T("长协合同比例高，煤价波动对利润影响小。", "A high share of long-term contracts limits the impact of price swings."),
      T("市场把它当作高股息资产，分红率约 75%。", "The market sees it as a dividend stock; it pays out about 75%.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("3,384 亿元", "CNY 338.4 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("586 亿元", "CNY 58.6 bn") },
      { k: T("商品煤产量", "Coal output"), v: T("约 3.3 亿吨", "~330 mt") },
      { k: T("市盈率", "P/E"), v: T("约 15 倍", "~15x") }
    ],
    moat: {
      take: T("资源和运输网络很难复制。", "Its reserves and transport network are hard to copy."),
      items: [
        { name: T("一体化", "Integration"), score: 5, note: T("自有铁路约 2,400 公里，加上港口和电厂。", "Owns about 2,400 km of railway plus ports and power plants.") },
        { name: T("低成本矿", "Low-cost mines"), score: 5, note: T("神东矿区是全球最高效的井工矿区之一。", "Shendong is one of the world's most efficient underground mining areas.") },
        { name: T("长协合同", "Long-term contracts"), score: 4, note: T("大部分煤按长协价销售，收入稳定。", "Most coal is sold on long-term contracts, so revenue is steady.") },
        { name: T("牌照", "Licences"), score: 4, note: T("新煤矿审批严格，行业供给受控。", "New mines are tightly approved, which limits supply.") }
      ]
    },
    product: {
      take: T("能源大宗商品，但收入比同行稳定。", "An energy commodity, but with steadier revenue than peers."),
      rows: [
        { k: T("核心产品", "Main products"), v: T("动力煤、电力、铁路运输", "Thermal coal, electricity, rail freight") },
        { k: T("客户", "Customers"), v: T("电厂为主，其次是化工和冶金", "Mostly power plants, then chemical and steel makers") },
        { k: T("周期性", "Cyclicality"), v: T("周期性，长协降低波动", "Cyclical, but contracts reduce swings") },
        { k: T("定价方式", "Pricing"), v: T("长协基准价加市场价", "Contract base price plus spot") },
        { k: T("股东回报", "Shareholder return"), v: T("分红率约 75%，股息率约 6%", "Payout ~75%, yield ~6%") }
      ]
    },
    valuation: {
      take: T("股价在中性区间内。", "The price is inside the base case."),
      price: 40,
      basis: T("2025 年预测每股收益约 2.6 元", "2025E EPS ≈ CNY 2.6"),
      axis: [25, 52],
      bear: { low: 29, high: 32, pe: "11–12x", note: T("煤价跌破每吨 600 元", "Coal falls below CNY 600/t") },
      base: { low: 37, high: 42, pe: "14–16x", note: T("煤价在 650–750 元区间，分红率 75%", "Coal at CNY 650–750/t; 75% payout") },
      bull: { low: 46, high: 48, pe: "18x", note: T("能源安全推动煤价上涨", "Energy security concerns lift coal prices") }
    },
    edge: {
      take: T("护城河稳定，但行业长期在萎缩。", "The moat is stable, but the industry is shrinking long term."),
      plus: [
        T("收购集团资产，增加煤炭和电力产能。", "Buying assets from its parent adds coal and power capacity."),
        T("煤电作为调峰电源仍有价值。", "Coal power still has value as backup for the grid.")
      ],
      minus: [
        T("风电光伏占比上升，长期压缩煤电空间。", "Growing wind and solar squeeze coal power long term."),
        T("进口煤增加，压低国内煤价。", "More imported coal pushes down domestic prices.")
      ]
    },
    demand: {
      take: T("煤炭需求接近峰值，未来以稳为主。", "Coal demand is near its peak; the future is about stability."),
      drivers: [
        { name: T("煤炭销售", "Coal sales"), share: 60, dir: "flat" },
        { name: T("发电", "Power"), share: 25, dir: "flat" },
        { name: T("运输", "Transport"), share: 10, dir: "flat" },
        { name: T("煤化工", "Coal chemicals"), share: 5, dir: "flat" }
      ],
      note: T("煤炭仍占中国一次能源消费的一半以上，但比例逐年下降。", "Coal is still over half of China's primary energy use, but the share falls every year.")
    },
    weak: {
      take: T("能源转型是长期风险。", "The energy transition is the long-term risk."),
      items: [
        { level: "mid", title: T("煤价下行", "Falling coal prices"), note: T("供给宽松时利润会下降。", "Profit drops when supply is loose.") },
        { level: "mid", title: T("能源转型", "Energy transition"), note: T("双碳目标下煤炭需求长期下降。", "Carbon targets mean long-term decline in coal demand.") },
        { level: "low", title: T("安全生产", "Mine safety"), note: T("煤矿事故会导致停产整顿。", "Accidents can halt production.") }
      ]
    },
    watch: [T("秦皇岛港煤价", "Qinhuangdao coal price"), T("分红率", "Payout ratio"), T("火电利用小时数", "Coal plant utilisation")]
  }
);

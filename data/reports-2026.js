/* Issues published in 2026. Prices in CNY per share as of the report date; mcap in CNY 100 m (亿元). */
window.REPORTS.push(
  /* ====================================================== */
  {
    id: "002475",
    date: "2026-01-09",
    code: "002475.SZ",
    company: T("立讯精密", "Luxshare Precision"),
    industry: T("消费电子制造", "Electronics manufacturing"),
    sector: "tech",
    mcap: 3990, mult: 24,
    position: T("苹果最重要的中国供应商之一，从连接器做到整机组装，正在拓展汽车和数据中心", "One of Apple's most important Chinese suppliers, from connectors to full assembly, now expanding into cars and data centres"),
    verdict: "fair",
    trend: "widening",
    moatScore: 4,
    thesis: [
      T("核心能力是把精密制造做到大规模、高良率、低成本。", "Its core skill is precision manufacturing at huge scale, high yield and low cost."),
      T("对苹果依赖度高，但通信和汽车业务在分散风险。", "It relies heavily on Apple, but telecom and auto businesses spread the risk."),
      T("AI 服务器的高速连接器和线缆是新的增长点。", "High-speed connectors and cables for AI servers are a new growth area.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("2,688 亿元", "CNY 268.8 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("134 亿元", "CNY 13.4 bn") },
      { k: T("毛利率", "Gross margin"), v: T("约 11%", "~11%") },
      { k: T("市盈率", "P/E"), v: T("约 24 倍", "~24x") }
    ],
    moat: {
      take: T("制造能力和客户关系是核心，品牌不重要。", "Manufacturing skill and customer ties matter; brand does not."),
      items: [
        { name: T("精密制造", "Precision manufacturing"), score: 5, note: T("能在短时间内把新产品的良率做到行业领先。", "Gets new products to industry-leading yields quickly.") },
        { name: T("客户粘性", "Customer lock-in"), score: 4, note: T("进入苹果供应链要经过长期认证，替换成本高。", "Getting into Apple's supply chain takes long qualification, so switching is costly.") },
        { name: T("垂直整合", "Vertical integration"), score: 4, note: T("从零部件到模组再到整机，环节多，利润留在内部。", "From parts to modules to finished devices, keeping more profit in-house.") },
        { name: T("定价权", "Pricing power"), score: 2, note: T("大客户议价能力强，毛利率只有约 11%。", "Big customers have strong bargaining power; gross margin is only ~11%.") }
      ]
    },
    product: {
      take: T("To B 代工，跟着大客户的新品周期走。", "Contract manufacturing that follows big customers' product cycles."),
      rows: [
        { k: T("核心产品", "Main products"), v: T("AirPods、iPhone、Apple Watch 组装及零部件", "AirPods, iPhone and Apple Watch assembly and parts") },
        { k: T("新业务", "New businesses"), v: T("数据中心高速互联、汽车线束（收购莱尼）", "Data centre interconnects; auto wiring (Leoni acquisition)") },
        { k: T("客户", "Customers"), v: T("苹果、英伟达生态服务器厂、车企", "Apple, NVIDIA-ecosystem server makers, carmakers") },
        { k: T("周期性", "Cyclicality"), v: T("随手机和电子产品换机周期波动", "Follows phone and gadget upgrade cycles") },
        { k: T("定价方式", "Pricing"), v: T("成本加成，每年和客户谈降价", "Cost-plus, with annual price-down talks") }
      ]
    },
    valuation: {
      take: T("股价在中性区间内。", "The price is inside the base case."),
      price: 55,
      basis: T("2025 年预测每股收益约 2.27 元", "2025E EPS ≈ CNY 2.27"),
      axis: [32, 76],
      bear: { low: 38, high: 42, pe: "17–18x", note: T("苹果订单转移到印度和越南", "Apple orders shift to India and Vietnam") },
      base: { low: 50, high: 59, pe: "22–26x", note: T("利润增长 20%，通信和汽车占比提升", "Profit +20%; telecom and auto grow as a share") },
      bull: { low: 66, high: 70, pe: "29–31x", note: T("AI 服务器连接业务快速放量", "AI server interconnect sales ramp fast") }
    },
    edge: {
      take: T("新业务让护城河变宽。", "New businesses are widening the moat."),
      plus: [
        T("AI 服务器铜缆和高速连接器订单增长。", "Orders for AI server copper cables and connectors are rising."),
        T("收购莱尼后成为全球汽车线束主要供应商之一。", "After buying Leoni, it is a major global supplier of car wiring.")
      ],
      minus: [
        T("美国关税推动苹果把产能移出中国。", "US tariffs push Apple to move production out of China."),
        T("组装业务利润率低，增长质量一般。", "Assembly work earns thin margins.")
      ]
    },
    demand: {
      take: T("消费电子平稳，数据中心和汽车是增量。", "Consumer electronics are flat; data centres and cars add growth."),
      drivers: [
        { name: T("消费电子", "Consumer electronics"), share: 75, dir: "flat" },
        { name: T("通信与数据中心", "Telecom & data centres"), share: 12, dir: "up" },
        { name: T("汽车", "Automotive"), share: 10, dir: "up" },
        { name: T("其他", "Other"), share: 3, dir: "flat" }
      ],
      note: T("AI 数据中心需要大量高速连接，铜缆在短距离连接中成本更低。", "AI data centres need lots of high-speed links, and copper cables are cheaper over short distances.")
    },
    weak: {
      take: T("客户集中是最大的风险。", "Customer concentration is the biggest risk."),
      items: [
        { level: "high", title: T("客户集中", "Customer concentration"), note: T("苹果相关收入占比超过 7 成。", "Apple-related revenue is over 70%.") },
        { level: "mid", title: T("产业链外迁", "Supply chain moves"), note: T("关税和地缘推动产能转移到东南亚、印度。", "Tariffs and politics push output to Southeast Asia and India.") },
        { level: "mid", title: T("低毛利", "Thin margins"), note: T("毛利率低，抗风险能力有限。", "Low margins leave little room for error.") }
      ]
    },
    watch: [T("苹果相关收入占比", "Apple share of revenue"), T("通信业务增速", "Telecom segment growth"), T("海外产能布局", "Overseas capacity")]
  },

  /* ====================================================== */
  {
    id: "600030",
    date: "2026-01-23",
    code: "600030.SH",
    company: T("中信证券", "CITIC Securities"),
    industry: T("证券", "Brokerage"),
    sector: "finance",
    mcap: 4300, mult: 1.45,
    position: T("国内规模最大的券商，投行、机构业务和国际化领先", "China's largest securities firm, leading in investment banking, institutional business and overseas operations"),
    verdict: "fair",
    trend: "widening",
    moatScore: 4,
    thesis: [
      T("券商是资本市场的「卖水人」，交易越活跃赚得越多。", "A broker sells shovels in a gold rush; it earns more when markets are busy."),
      T("2025 年 A 股成交量大增，利润明显恢复。", "A-share trading volume surged in 2025, and profit recovered strongly."),
      T("行业在整合，龙头的份额和资本优势在扩大。", "The industry is consolidating, and the leader's share and capital advantage are growing.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("638 亿元", "CNY 63.8 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("217 亿元", "CNY 21.7 bn") },
      { k: T("总资产", "Total assets"), v: T("约 1.8 万亿元", "~CNY 1.8 trn") },
      { k: T("市净率", "P/B"), v: T("约 1.45 倍", "~1.45x") }
    ],
    moat: {
      take: T("规模和机构客户关系是核心。", "Scale and institutional relationships are the core."),
      items: [
        { name: T("规模与资本", "Scale & capital"), score: 5, note: T("净资本最大，能承接大项目和做衍生品业务。", "Largest capital base, so it can take on big deals and derivatives.") },
        { name: T("投行能力", "Investment banking"), score: 4, note: T("IPO 和债券承销规模多年排名第一。", "No.1 in IPO and bond underwriting for years.") },
        { name: T("机构客户", "Institutional clients"), score: 4, note: T("公募、保险、外资客户覆盖最全。", "The widest coverage of funds, insurers and foreign investors.") },
        { name: T("同质化", "Sameness"), score: 2, note: T("经纪业务产品同质化，散户更看佣金。", "Retail brokerage is a commodity; retail clients choose on price.") }
      ]
    },
    product: {
      take: T("收入跟着市场景气度走，波动大。", "Revenue follows market activity and swings a lot."),
      rows: [
        { k: T("核心业务", "Main businesses"), v: T("经纪、投行、资管、自营与衍生品", "Brokerage, investment banking, asset management, trading & derivatives") },
        { k: T("客户", "Customers"), v: T("机构投资者、企业、个人投资者", "Institutions, companies, individual investors") },
        { k: T("周期性", "Cyclicality"), v: T("强周期，跟股市成交量和 IPO 节奏相关", "Highly cyclical, tied to trading volume and IPOs") },
        { k: T("定价方式", "Pricing"), v: T("佣金率持续下降，靠规模取胜", "Commissions keep falling; scale wins") },
        { k: T("国际化", "International"), v: T("中信里昂覆盖亚洲和欧美市场", "CLSA covers Asia, Europe and the US") }
      ]
    },
    valuation: {
      take: T("股价在中性区间下沿。", "The price is at the bottom of the base case."),
      metric: "PB",
      price: 29,
      basis: T("每股净资产约 20.5 元", "Book value per share ≈ CNY 20.5"),
      axis: [18, 44],
      bear: { low: 22, high: 24, pe: "1.1–1.2x", note: T("市场成交量回落到日均 1 万亿元以下", "Daily turnover falls below CNY 1 trn") },
      base: { low: 29, high: 33, pe: "1.4–1.6x", note: T("成交活跃，IPO 恢复正常节奏", "Active trading; IPOs back to normal pace") },
      bull: { low: 38, high: 40, pe: "1.85–1.95x", note: T("牛市行情，衍生品和国际业务高增长", "Bull market; derivatives and overseas grow fast") }
    },
    edge: {
      take: T("行业整合，强者更强。", "Consolidation makes the strong stronger."),
      plus: [
        T("监管鼓励打造一流投行，资源向头部集中。", "Regulators want world-class investment banks, so resources flow to the top."),
        T("机构化趋势下，机构业务的优势更明显。", "As markets become more institutional, its institutional edge matters more.")
      ],
      minus: [
        T("国泰君安和海通合并后成为强劲对手。", "The Guotai Junan–Haitong merger created a strong rival."),
        T("公募基金降费影响代销和资管收入。", "Fund fee cuts reduce distribution and asset management income.")
      ]
    },
    demand: {
      take: T("需求取决于资本市场的活跃度。", "Demand depends on how active capital markets are."),
      drivers: [
        { name: T("自营与衍生品", "Trading & derivatives"), share: 40, dir: "up" },
        { name: T("经纪", "Brokerage"), share: 25, dir: "up" },
        { name: T("资管", "Asset management"), share: 20, dir: "flat" },
        { name: T("投行", "Investment banking"), share: 15, dir: "flat" }
      ],
      note: T("居民资产从存款和房产转向股票和基金，是券商的长期机会。", "Households shifting wealth from deposits and property into stocks and funds is the long-term opportunity.")
    },
    weak: {
      take: T("最大的风险是市场转冷。", "The biggest risk is a cooling market."),
      items: [
        { level: "high", title: T("强周期", "Cyclicality"), note: T("熊市时利润可下降一半。", "Profit can halve in a bear market.") },
        { level: "mid", title: T("自营波动", "Trading swings"), note: T("自营收入占比高，随市场大幅波动。", "Trading is a big share of income and swings with markets.") },
        { level: "mid", title: T("佣金下降", "Lower commissions"), note: T("经纪佣金率持续下降。", "Brokerage commission rates keep falling.") }
      ]
    },
    watch: [T("A 股日均成交额", "Daily A-share turnover"), T("IPO 数量", "Number of IPOs"), T("ROE", "ROE")]
  },

  /* ====================================================== */
  {
    id: "300760",
    date: "2026-02-06",
    code: "300760.SZ",
    company: T("迈瑞医疗", "Mindray"),
    industry: T("医疗器械", "Medical devices"),
    sector: "health",
    mcap: 2420, mult: 25,
    position: T("国内最大的医疗器械公司，监护仪、超声、体外诊断三大领域领先", "China's largest medical device maker, leading in patient monitors, ultrasound and lab diagnostics"),
    verdict: "fair",
    trend: "stable",
    moatScore: 4,
    thesis: [
      T("产品线全，医院一次可以买齐，这是进口品牌没有的优势。", "Its full product range lets hospitals buy everything in one place, which imported brands cannot match."),
      T("2025 年国内医院采购放缓，利润下滑；海外收入占比提升到一半左右。", "Hospital purchasing in China slowed in 2025 and profit fell; overseas sales rose to about half."),
      T("估值降到 25 倍左右，比过去五年平均低很多。", "Valuation has dropped to about 25x, far below its five-year average.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("367 亿元", "CNY 36.7 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("117 亿元", "CNY 11.7 bn") },
      { k: T("毛利率", "Gross margin"), v: T("约 63%", "~63%") },
      { k: T("市盈率", "P/E"), v: T("约 25 倍", "~25x") }
    ],
    moat: {
      take: T("产品线和医院渠道是核心。", "Product range and hospital access are the core."),
      items: [
        { name: T("产品线", "Product range"), score: 5, note: T("监护、超声、检验、影像全覆盖。", "Covers monitoring, ultrasound, lab testing and imaging.") },
        { name: T("医院覆盖", "Hospital reach"), score: 4, note: T("覆盖国内几乎所有三甲医院。", "In nearly every top-tier hospital in China.") },
        { name: T("转换成本", "Switching cost"), score: 4, note: T("检验设备和试剂绑定，医院换品牌麻烦。", "Lab machines and reagents are tied together, so switching is a hassle.") },
        { name: T("研发", "R&D"), score: 4, note: T("研发投入约占收入 10%。", "R&D is about 10% of revenue.") }
      ]
    },
    product: {
      take: T("设备加耗材，耗材带来持续收入。", "Equipment plus consumables; consumables bring recurring revenue."),
      rows: [
        { k: T("核心产品", "Main products"), v: T("生命信息与支持、体外诊断、医学影像", "Patient monitoring, lab diagnostics, medical imaging") },
        { k: T("客户", "Customers"), v: T("公立医院为主，海外为医院和经销商", "Mainly public hospitals; abroad, hospitals and distributors") },
        { k: T("周期性", "Cyclicality"), v: T("受医院预算和政策影响", "Depends on hospital budgets and policy") },
        { k: T("定价方式", "Pricing"), v: T("招标采购，部分试剂进入集采", "Tenders; some reagents in volume-based procurement") },
        { k: T("经常性收入", "Recurring revenue"), v: T("试剂和耗材约占 4 成", "Reagents and consumables ~40%") }
      ]
    },
    valuation: {
      take: T("股价在中性区间内。", "The price is inside the base case."),
      price: 200,
      basis: T("2026 年预测每股收益约 8.0 元", "2026E EPS ≈ CNY 8.0"),
      axis: [130, 300],
      bear: { low: 155, high: 165, pe: "19–21x", note: T("国内招标继续低迷", "Hospital tenders stay weak") },
      base: { low: 200, high: 232, pe: "25–29x", note: T("国内设备更新推进，海外增长 15%", "Equipment upgrades in China; overseas +15%") },
      bull: { low: 270, high: 285, pe: "34–36x", note: T("海外高端医院突破", "Breakthrough in top overseas hospitals") }
    },
    edge: {
      take: T("国内承压，海外在加宽。", "Under pressure at home, widening abroad."),
      plus: [
        T("海外收入占比约一半，进入更多高端医院。", "About half of sales overseas, entering more top hospitals."),
        T("国产替代政策鼓励医院采购国产设备。", "Policy encourages hospitals to buy Chinese-made equipment.")
      ],
      minus: [
        T("医疗反腐让医院采购节奏变慢。", "Anti-corruption campaigns slowed hospital purchasing."),
        T("体外诊断试剂集采压低价格。", "Volume-based procurement cut reagent prices.")
      ]
    },
    demand: {
      take: T("国内短期弱，长期靠老龄化和基层医疗。", "Weak at home short term; long term, ageing and primary care drive demand."),
      drivers: [
        { name: T("体外诊断", "Lab diagnostics"), share: 37, dir: "flat" },
        { name: T("生命信息与支持", "Patient monitoring"), share: 38, dir: "down" },
        { name: T("医学影像", "Imaging"), share: 20, dir: "up" },
        { name: T("其他", "Other"), share: 5, dir: "flat" }
      ],
      note: T("中国人均医疗器械支出只有发达国家的几分之一，空间仍大。", "China's per-person spend on medical devices is a fraction of developed countries'.")
    },
    weak: {
      take: T("国内政策是短期最大的变量。", "Domestic policy is the biggest short-term variable."),
      items: [
        { level: "mid", title: T("国内采购放缓", "Slower purchasing"), note: T("医院预算紧张，设备更新进度慢。", "Tight hospital budgets slow equipment upgrades.") },
        { level: "mid", title: T("集采降价", "Procurement cuts"), note: T("更多试剂进入集采。", "More reagents enter volume-based procurement.") },
        { level: "mid", title: T("海外竞争", "Global rivals"), note: T("与 GE、飞利浦、罗氏正面竞争。", "Competes head-on with GE, Philips and Roche.") }
      ]
    },
    watch: [T("国内招标数据", "Domestic tender data"), T("海外收入增速", "Overseas growth"), T("试剂收入占比", "Reagent share of sales")]
  },

  /* ====================================================== */
  {
    id: "600309",
    date: "2026-02-20",
    code: "600309.SH",
    company: T("万华化学", "Wanhua Chemical"),
    industry: T("化工", "Chemicals"),
    sector: "resources",
    mcap: 2190, mult: 18,
    position: T("全球最大的 MDI（聚氨酯原料）生产商，份额约三成", "The world's largest maker of MDI, a key polyurethane input, with about 30% share"),
    verdict: "fair",
    trend: "stable",
    moatScore: 4,
    thesis: [
      T("MDI 技术门槛高，全球只有少数几家公司能生产。", "MDI is hard to make; only a handful of companies in the world can produce it."),
      T("万华的成本全球最低，在行业低谷时仍然赚钱。", "Wanhua has the lowest cost in the world and stays profitable even in downturns."),
      T("石化新业务拖累利润，估值处于周期低位。", "Its newer petrochemical unit drags on profit, and valuation is near the cycle low.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("1,821 亿元", "CNY 182.1 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("130 亿元", "CNY 13.0 bn") },
      { k: T("MDI 产能", "MDI capacity"), v: T("约 380 万吨/年", "~3.8 mt/yr") },
      { k: T("市盈率", "P/E"), v: T("约 18 倍", "~18x") }
    ],
    moat: {
      take: T("技术壁垒加成本领先。", "Technical barriers plus cost leadership."),
      items: [
        { name: T("技术壁垒", "Technology"), score: 5, note: T("MDI 的光气化工艺复杂，新进入者很难做好。", "MDI uses a complex phosgenation process that newcomers struggle with.") },
        { name: T("成本", "Cost"), score: 5, note: T("单套装置规模大、一体化程度高，成本行业最低。", "Large plants and deep integration give the lowest cost in the industry.") },
        { name: T("产业链", "Value chain"), score: 4, note: T("烟台、宁波、福建基地上下游配套。", "Yantai, Ningbo and Fujian sites link upstream and downstream.") },
        { name: T("定价权", "Pricing power"), score: 3, note: T("寡头格局下有一定定价影响力。", "Some pricing influence in a market with few players.") }
      ]
    },
    product: {
      take: T("工业原料，跟着下游地产、家电、汽车周期走。", "Industrial materials that follow housing, appliance and car cycles."),
      rows: [
        { k: T("核心产品", "Main products"), v: T("聚氨酯（MDI、TDI）、石化、精细化学品", "Polyurethanes (MDI, TDI), petrochemicals, specialty chemicals") },
        { k: T("用途", "Uses"), v: T("建筑保温、冰箱、汽车座椅、鞋材", "Building insulation, fridges, car seats, shoe soles") },
        { k: T("周期性", "Cyclicality"), v: T("强周期", "Highly cyclical") },
        { k: T("定价方式", "Pricing"), v: T("每月公布挂牌价，随供需调整", "Monthly list prices adjusted to supply and demand") },
        { k: T("新业务", "New businesses"), v: T("新能源材料、尼龙 12、可降解塑料", "Battery materials, nylon 12, biodegradable plastics") }
      ]
    },
    valuation: {
      take: T("股价在中性区间内。", "The price is inside the base case."),
      price: 70,
      basis: T("2026 年预测每股收益约 3.8 元", "2026E EPS ≈ CNY 3.8"),
      axis: [40, 100],
      bear: { low: 48, high: 53, pe: "13–14x", note: T("化工品价格继续下跌，石化亏损扩大", "Chemical prices keep falling; petrochemical losses widen") },
      base: { low: 65, high: 76, pe: "17–20x", note: T("MDI 价格稳定，新产能投产", "Stable MDI prices; new capacity starts up") },
      bull: { low: 88, high: 92, pe: "23–24x", note: T("化工周期反转", "The chemical cycle turns up") }
    },
    edge: {
      take: T("MDI 优势稳固，但新业务还没形成护城河。", "Its MDI edge is solid, but newer businesses have no moat yet."),
      plus: [
        T("福建和宁波新增 MDI 产能，份额继续提升。", "New MDI capacity in Fujian and Ningbo lifts share further."),
        T("海外收购（匈牙利宝思德）带来欧洲本地供应能力。", "The BorsodChem acquisition in Hungary gives it local supply in Europe.")
      ],
      minus: [
        T("石化业务（乙烯、丙烯）行业产能过剩。", "Its petrochemical products (ethylene, propylene) face overcapacity."),
        T("欧美对中国化工品发起反倾销调查。", "The EU and US have opened anti-dumping cases on Chinese chemicals.")
      ]
    },
    demand: {
      take: T("建筑需求弱，家电和汽车平稳，海外是增量。", "Construction is weak, appliances and cars steady, overseas adds growth."),
      drivers: [
        { name: T("聚氨酯", "Polyurethanes"), share: 40, dir: "flat" },
        { name: T("石化", "Petrochemicals"), share: 40, dir: "down" },
        { name: T("精细与新材料", "Specialty & new materials"), share: 20, dir: "up" }
      ],
      note: T("全球 MDI 需求每年增长约 4–5%，节能建筑标准提高带来长期需求。", "Global MDI demand grows about 4–5% a year, helped by stricter energy-saving building codes.")
    },
    weak: {
      take: T("周期和扩张节奏是主要风险。", "The cycle and expansion pace are the main risks."),
      items: [
        { level: "high", title: T("化工周期", "Chemical cycle"), note: T("产品价格下跌时利润会明显下降。", "Profit drops when product prices fall.") },
        { level: "mid", title: T("资本开支大", "Heavy spending"), note: T("每年投资数百亿元，负债上升。", "Spends tens of billions a year; debt is rising.") },
        { level: "mid", title: T("贸易摩擦", "Trade friction"), note: T("出口面临反倾销税。", "Exports face anti-dumping duties.") }
      ]
    },
    watch: [T("MDI 挂牌价", "MDI list price"), T("石化板块盈亏", "Petrochemical profit or loss"), T("资本开支", "Capital spending")]
  },

  /* ====================================================== */
  {
    id: "600941",
    date: "2026-03-06",
    code: "600941.SH",
    company: T("中国移动", "China Mobile"),
    industry: T("通信运营", "Telecom operators"),
    sector: "infra",
    mcap: 22600, mult: 16,
    position: T("全球用户最多的电信运营商，移动用户约 10 亿", "The world's largest telecom operator by customers, with about 1 billion mobile users"),
    verdict: "fair",
    trend: "stable",
    moatScore: 4,
    thesis: [
      T("牌照、网络和用户规模构成极高的进入门槛。", "Licences, networks and user scale create very high barriers to entry."),
      T("个人业务增长停滞，增长靠政企和云服务。", "Consumer revenue has stopped growing; growth comes from enterprise and cloud."),
      T("资本开支下降，自由现金流和分红在提高。", "Capital spending is falling, so free cash flow and dividends are rising.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("10,408 亿元", "CNY 1,040.8 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("1,384 亿元", "CNY 138.4 bn") },
      { k: T("移动用户", "Mobile users"), v: T("约 10 亿", "~1.0 bn") },
      { k: T("市盈率", "P/E"), v: T("约 16 倍", "~16x") }
    ],
    moat: {
      take: T("牌照加网络，行业只有三家。", "Licences and networks; only three players in the industry."),
      items: [
        { name: T("牌照", "Licences"), score: 5, note: T("基础电信牌照由国家控制，新进入者几乎没有。", "Telecom licences are state-controlled; there are almost no new entrants.") },
        { name: T("网络规模", "Network scale"), score: 5, note: T("5G 基站约 240 万个，全球最多。", "About 2.4 m 5G base stations, the most in the world.") },
        { name: T("转换成本", "Switching cost"), score: 3, note: T("携号转网手续繁琐，用户流动性低。", "Number porting is a hassle, so customers rarely move.") },
        { name: T("政企关系", "Government & enterprise"), score: 4, note: T("政府和国企客户资源丰富。", "Deep ties with government and state-owned clients.") }
      ]
    },
    product: {
      take: T("类公用事业的订阅收入，现金流稳定。", "Utility-like subscription revenue with stable cash flow."),
      rows: [
        { k: T("核心业务", "Main businesses"), v: T("个人移动、家庭宽带、政企、新兴业务", "Mobile, home broadband, enterprise, new businesses") },
        { k: T("客户", "Customers"), v: T("个人、家庭、政府和企业", "Individuals, households, government and companies") },
        { k: T("周期性", "Cyclicality"), v: T("几乎无周期", "Barely cyclical") },
        { k: T("定价方式", "Pricing"), v: T("套餐定价，受提速降费政策影响", "Plan pricing, under pressure from policy to cut fees") },
        { k: T("股东回报", "Shareholder return"), v: T("分红率约 75%，股息率约 5%", "Payout ~75%, yield ~5%") }
      ]
    },
    valuation: {
      take: T("股价在中性区间下沿。", "The price is at the bottom of the base case."),
      price: 105,
      basis: T("2026 年预测每股收益约 6.6 元", "2026E EPS ≈ CNY 6.6"),
      axis: [75, 140],
      bear: { low: 85, high: 92, pe: "13–14x", note: T("个人收入下滑，云业务竞争加剧", "Consumer revenue falls; cloud competition intensifies") },
      base: { low: 105, high: 115, pe: "16–17.5x", note: T("收入小幅增长，分红率提升", "Small revenue growth; higher payout") },
      bull: { low: 128, high: 132, pe: "19–20x", note: T("算力和 AI 业务成为新增长点", "Computing and AI services become a new engine") }
    },
    edge: {
      take: T("护城河稳定，但难以带来新增长。", "The moat is stable but brings little new growth."),
      plus: [
        T("移动云收入快速增长，进入国内云厂商前列。", "Mobile Cloud is growing fast and now ranks among China's top cloud providers."),
        T("5G 投资高峰已过，资本开支下降。", "The 5G spending peak is over; capital spending is falling.")
      ],
      minus: [
        T("手机用户已饱和，ARPU 难以提升。", "Mobile users are saturated and revenue per user is flat."),
        T("云计算领域面临阿里、华为等竞争。", "In cloud it competes with Alibaba, Huawei and others.")
      ]
    },
    demand: {
      take: T("基础通信需求稳定，数字化服务在增长。", "Basic telecom demand is stable; digital services are growing."),
      drivers: [
        { name: T("个人移动", "Mobile"), share: 50, dir: "flat" },
        { name: T("政企", "Enterprise"), share: 25, dir: "up" },
        { name: T("家庭宽带", "Home broadband"), share: 15, dir: "up" },
        { name: T("新兴业务", "New businesses"), share: 10, dir: "up" }
      ],
      note: T("AI 应用增加数据流量和算力需求，运营商在建设智算中心。", "AI apps raise data traffic and computing needs; operators are building AI data centres.")
    },
    weak: {
      take: T("增长慢是主要短板。", "Slow growth is the main weak spot."),
      items: [
        { level: "mid", title: T("个人业务饱和", "Saturated consumers"), note: T("用户数和单价都难以提升。", "Hard to raise either user numbers or prices.") },
        { level: "mid", title: T("政策压力", "Policy pressure"), note: T("提速降费政策限制提价。", "Policy to lower fees limits price rises.") },
        { level: "low", title: T("云业务竞争", "Cloud competition"), note: T("与专业云厂商相比利润率较低。", "Lower margins than specialist cloud providers.") }
      ]
    },
    watch: [T("移动 ARPU", "Mobile revenue per user"), T("云业务收入", "Cloud revenue"), T("资本开支", "Capital spending")]
  },

  /* ====================================================== */
  {
    id: "601668",
    date: "2026-03-20",
    code: "601668.SH",
    company: T("中国建筑", "China State Construction"),
    industry: T("建筑", "Construction"),
    sector: "infra",
    mcap: 2310, mult: 5,
    position: T("全球最大的建筑承包商，新签合同额超过 4 万亿元", "The world's largest construction contractor, with over CNY 4 trn in new contracts a year"),
    verdict: "fair-low",
    trend: "narrowing",
    moatScore: 3,
    thesis: [
      T("规模、资质和融资能力让它能接最大的项目。", "Scale, qualifications and funding let it win the biggest projects."),
      T("房地产下行拖累房建和地产业务，利润下降。", "The property slump hurts its building and real estate businesses, and profit is falling."),
      T("只有 5 倍市盈率，市场担心应收账款和地方债。", "At just 5x earnings, the market worries about receivables and local government debt.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("2.19 万亿元", "CNY 2.19 trn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("462 亿元", "CNY 46.2 bn") },
      { k: T("毛利率", "Gross margin"), v: T("约 10%", "~10%") },
      { k: T("市盈率", "P/E"), v: T("约 5 倍", "~5x") }
    ],
    moat: {
      take: T("规模优势明显，但行业本身利润薄。", "A clear scale advantage, but the industry itself earns thin margins."),
      items: [
        { name: T("规模与资质", "Scale & qualifications"), score: 5, note: T("拥有最多的特级资质，能承接超大项目。", "Holds the most top-grade licences, so it can take on mega-projects.") },
        { name: T("融资能力", "Funding"), score: 4, note: T("央企信用好，融资成本低。", "State backing gives it cheap financing.") },
        { name: T("项目管理", "Project management"), score: 4, note: T("超高层建筑和大型基建经验丰富。", "Deep experience in skyscrapers and big infrastructure.") },
        { name: T("定价权", "Pricing power"), score: 1, note: T("项目靠招标，价格竞争激烈。", "Projects are won by tender with fierce price competition.") }
      ]
    },
    product: {
      take: T("项目制生意，收入大、利润薄。", "Project-based business: big revenue, thin profit."),
      rows: [
        { k: T("核心业务", "Main businesses"), v: T("房屋建筑约 6 成、基建约 3 成、地产（中海）约 1 成", "Buildings ~60%, infrastructure ~30%, property (China Overseas) ~10%") },
        { k: T("客户", "Customers"), v: T("地方政府、开发商、企业", "Local governments, developers, companies") },
        { k: T("周期性", "Cyclicality"), v: T("和地产、基建投资高度相关", "Closely tied to property and infrastructure spending") },
        { k: T("定价方式", "Pricing"), v: T("招投标", "Competitive tenders") },
        { k: T("现金流", "Cash flow"), v: T("回款慢，应收账款高", "Slow collections; high receivables") }
      ]
    },
    valuation: {
      take: T("股价略低于中性区间中值。", "The price is slightly below the base-case midpoint."),
      price: 5.6,
      basis: T("2026 年预测每股收益约 1.07 元", "2026E EPS ≈ CNY 1.07"),
      axis: [3.5, 8.5],
      bear: { low: 4.2, high: 4.5, pe: "4x", note: T("地产继续下滑，应收账款减值", "Property keeps falling; receivable write-downs") },
      base: { low: 5.3, high: 6.4, pe: "5–6x", note: T("利润持平，分红率提升", "Flat profit; higher payout") },
      bull: { low: 7.3, high: 7.7, pe: "7x", note: T("基建投资加码，现金流改善", "More infrastructure spending; better cash flow") }
    },
    edge: {
      take: T("行业在收缩，护城河边际收窄。", "The industry is shrinking, so the moat is narrowing at the edge."),
      plus: [
        T("小型建筑商退出，龙头份额上升。", "Small builders are exiting, raising the leader's share."),
        T("海外「一带一路」项目增加。", "More overseas Belt and Road projects.")
      ],
      minus: [
        T("新开工面积大幅下降，房建订单减少。", "New construction starts have fallen sharply, cutting building orders."),
        T("地方政府付款能力下降，回款变慢。", "Local governments pay more slowly.")
      ]
    },
    demand: {
      take: T("房建需求下降，基建和城市更新提供部分支撑。", "Building demand is falling; infrastructure and urban renewal provide some support."),
      drivers: [
        { name: T("房屋建筑", "Buildings"), share: 60, dir: "down" },
        { name: T("基础设施", "Infrastructure"), share: 30, dir: "flat" },
        { name: T("地产开发", "Property development"), share: 8, dir: "down" },
        { name: T("海外", "Overseas"), share: 2, dir: "up" }
      ],
      note: T("中国城镇化率约 67%，大规模新建阶段已过，转向存量更新。", "China's urbanisation is about 67%; the era of mass new building is over and renovation is taking over.")
    },
    weak: {
      take: T("现金流和地产是最大的问题。", "Cash flow and property are the biggest problems."),
      items: [
        { level: "high", title: T("应收账款", "Receivables"), note: T("应收账款和合同资产规模巨大。", "Receivables and contract assets are huge.") },
        { level: "high", title: T("地产下行", "Property slump"), note: T("房建和地产业务都受影响。", "Both building and property businesses are affected.") },
        { level: "mid", title: T("利润率低", "Thin margins"), note: T("净利率只有约 2%。", "Net margin is only about 2%.") }
      ]
    },
    watch: [T("新签合同额", "New contract value"), T("经营现金流", "Operating cash flow"), T("中海地产销售", "China Overseas sales")]
  },

  /* ====================================================== */
  {
    id: "002415",
    date: "2026-04-03",
    code: "002415.SZ",
    company: T("海康威视", "Hikvision"),
    industry: T("安防与机器视觉", "Security & machine vision"),
    sector: "tech",
    mcap: 2750, mult: 21,
    position: T("全球最大的视频监控设备公司，正在扩展到机器人、汽车电子等智能物联网领域", "The world's largest video surveillance company, expanding into robotics, car electronics and other AIoT fields"),
    verdict: "fair",
    trend: "stable",
    moatScore: 4,
    thesis: [
      T("产品线和渠道规模让它在安防行业成本最低。", "Its product range and channel scale make it the lowest-cost player in security."),
      T("国内政府项目需求下降，海外和创新业务成为增长来源。", "Domestic government demand is down; overseas and new businesses drive growth."),
      T("被列入美国实体清单，限制了部分海外市场。", "Being on the US Entity List limits some overseas markets.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("925 亿元", "CNY 92.5 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("119 亿元", "CNY 11.9 bn") },
      { k: T("研发人员", "R&D staff"), v: T("约 2.8 万人", "~28,000") },
      { k: T("市盈率", "P/E"), v: T("约 21 倍", "~21x") }
    ],
    moat: {
      take: T("规模、渠道和研发投入。", "Scale, channels and R&D spending."),
      items: [
        { name: T("规模成本", "Scale & cost"), score: 5, note: T("全球视频监控市场份额约 1/4。", "About a quarter of the global video surveillance market.") },
        { name: T("渠道", "Channels"), score: 4, note: T("国内外经销网络覆盖中小客户。", "Distributor networks reach small customers at home and abroad.") },
        { name: T("研发", "R&D"), score: 4, note: T("研发投入约占收入 12%，有自研 AI 大模型。", "R&D is about 12% of revenue, including its own AI models.") },
        { name: T("转换成本", "Switching cost"), score: 3, note: T("项目系统集成后更换成本较高。", "Once a system is integrated, replacing it is costly.") }
      ]
    },
    product: {
      take: T("To B 和 To G 的硬件加软件方案。", "Hardware and software solutions for businesses and government."),
      rows: [
        { k: T("核心产品", "Main products"), v: T("摄像头、录像机、平台软件", "Cameras, recorders, platform software") },
        { k: T("创新业务", "New businesses"), v: T("萤石（智能家居）、海康机器人、汽车电子、红外", "EZVIZ (smart home), Hikrobot, car electronics, thermal imaging") },
        { k: T("客户", "Customers"), v: T("政府、企业、中小商户、海外经销商", "Government, companies, small businesses, overseas distributors") },
        { k: T("周期性", "Cyclicality"), v: T("与政府预算和企业投资相关", "Tied to government budgets and business investment") },
        { k: T("定价方式", "Pricing"), v: T("项目招标和渠道定价", "Project tenders and channel pricing") }
      ]
    },
    valuation: {
      take: T("股价在中性区间内。", "The price is inside the base case."),
      price: 30,
      basis: T("2026 年预测每股收益约 1.42 元", "2026E EPS ≈ CNY 1.42"),
      axis: [18, 42],
      bear: { low: 21, high: 23, pe: "15–16x", note: T("国内需求继续下降，海外制裁扩大", "Domestic demand keeps falling; sanctions widen") },
      base: { low: 28, high: 33, pe: "20–23x", note: T("创新业务增长 20%，主业平稳", "New businesses +20%; core flat") },
      bull: { low: 37, high: 39, pe: "26–27x", note: T("机器人和汽车电子分拆上市", "Robotics and car electronics spun off and listed") }
    },
    edge: {
      take: T("主业护城河稳定，新业务能否成功还不确定。", "The core moat is stable; whether new businesses succeed is uncertain."),
      plus: [
        T("创新业务收入占比超过 1/4，增速更快。", "New businesses are over a quarter of revenue and growing faster."),
        T("AI 大模型提升了产品的识别能力。", "AI models improve its products' recognition ability.")
      ],
      minus: [
        T("国内政府安防项目减少。", "Fewer domestic government security projects."),
        T("欧美市场受制裁和禁令限制。", "Sanctions and bans restrict Western markets.")
      ]
    },
    demand: {
      take: T("传统安防饱和，机器视觉和智能物联网在增长。", "Traditional security is saturated; machine vision and AIoT are growing."),
      drivers: [
        { name: T("国内企业与中小客户", "China business & SMB"), share: 35, dir: "flat" },
        { name: T("海外", "Overseas"), share: 28, dir: "up" },
        { name: T("创新业务", "New businesses"), share: 27, dir: "up" },
        { name: T("国内政府", "China government"), share: 10, dir: "down" }
      ],
      note: T("工厂自动化和仓储物流带动机器视觉和移动机器人需求。", "Factory automation and warehousing drive demand for machine vision and mobile robots.")
    },
    weak: {
      take: T("地缘政治和国内需求是主要风险。", "Geopolitics and domestic demand are the main risks."),
      items: [
        { level: "high", title: T("海外制裁", "Sanctions"), note: T("美国实体清单影响芯片采购和销售。", "The US Entity List affects chip purchases and sales.") },
        { level: "mid", title: T("政府需求下降", "Lower government demand"), note: T("地方财政紧张。", "Local government budgets are tight.") },
        { level: "mid", title: T("竞争", "Competition"), note: T("大华、华为在部分领域竞争。", "Dahua and Huawei compete in some areas.") }
      ]
    },
    watch: [T("创新业务增速", "New business growth"), T("海外收入", "Overseas revenue"), T("子公司分拆进度", "Spin-off progress")]
  },

  /* ====================================================== */
  {
    id: "600887",
    date: "2026-05-29",
    code: "600887.SH",
    company: T("伊利股份", "Yili Group"),
    industry: T("乳制品", "Dairy"),
    sector: "consumer",
    mcap: 1770, mult: 17,
    position: T("亚洲最大的乳制品公司，液态奶、奶粉、冷饮都排名国内第一", "Asia's largest dairy company, No.1 in China for liquid milk, milk powder and ice cream"),
    verdict: "fair-low",
    trend: "stable",
    moatScore: 4,
    thesis: [
      T("渠道和奶源规模让它在全国范围内成本最低。", "Its distribution and milk supply give it the lowest cost nationwide."),
      T("液态奶需求下降，奶粉和奶酪成为新的增长点。", "Liquid milk demand is falling; milk powder and cheese are new growth areas."),
      T("分红率提高到 70% 以上，市场开始把它当作高股息消费股。", "Payout is now above 70%, and the market treats it as a dividend consumer stock.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("1,153 亿元", "CNY 115.3 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("85 亿元", "CNY 8.5 bn") },
      { k: T("渠道网点", "Retail outlets"), v: T("约 170 万个", "~1.7 m") },
      { k: T("市盈率", "P/E"), v: T("约 17 倍", "~17x") }
    ],
    moat: {
      take: T("渠道深度和品牌组合是核心。", "Distribution depth and brand portfolio are the core."),
      items: [
        { name: T("渠道", "Distribution"), score: 5, note: T("直控终端网点约 170 万个，覆盖到村级。", "Directly reaches about 1.7 m outlets, down to villages.") },
        { name: T("品牌", "Brands"), score: 4, note: T("金典、安慕希、伊利、巧乐兹等多个大单品。", "Several big brands: Satine, Ambrosial, Yili, Chocliz.") },
        { name: T("奶源", "Milk supply"), score: 4, note: T("掌控大量优质牧场资源。", "Controls large high-quality dairy farm supply.") },
        { name: T("转换成本", "Switching cost"), score: 1, note: T("消费者换品牌没有成本。", "Shoppers can switch brands freely.") }
      ]
    },
    product: {
      take: T("日常快消品，价格竞争激烈。", "Everyday groceries with fierce price competition."),
      rows: [
        { k: T("核心产品", "Main products"), v: T("液态奶约 7 成，奶粉、冷饮、奶酪", "Liquid milk ~70%, milk powder, ice cream, cheese") },
        { k: T("客户", "Customers"), v: T("家庭消费为主", "Mainly households") },
        { k: T("周期性", "Cyclicality"), v: T("弱周期，受原奶价格周期影响", "Mildly cyclical; affected by the raw milk cycle") },
        { k: T("定价方式", "Pricing"), v: T("促销频繁，和蒙牛竞争定价", "Frequent promotions; priced against Mengniu") },
        { k: T("股东回报", "Shareholder return"), v: T("分红率 70% 以上，股息率约 4.5%", "Payout over 70%, yield ~4.5%") }
      ]
    },
    valuation: {
      take: T("股价略低于中性区间。", "The price is slightly below the base case."),
      price: 28,
      basis: T("2026 年预测每股收益约 1.66 元", "2026E EPS ≈ CNY 1.66"),
      axis: [18, 40],
      bear: { low: 21, high: 23, pe: "13–14x", note: T("液态奶需求继续下滑", "Liquid milk demand keeps falling") },
      base: { low: 28, high: 32, pe: "17–19x", note: T("收入持平，利润率修复", "Flat revenue; margins recover") },
      bull: { low: 35, high: 37, pe: "21–22x", note: T("奶粉和奶酪快速增长", "Fast growth in powder and cheese") }
    },
    edge: {
      take: T("护城河稳定，但液态奶行业在萎缩。", "The moat is stable, but liquid milk is shrinking."),
      plus: [
        T("成人奶粉和婴幼儿奶粉份额提升。", "Rising share in adult and infant milk powder."),
        T("原奶价格下降，降低成本。", "Lower raw milk prices cut costs.")
      ],
      minus: [
        T("出生人口下降，婴儿奶粉需求长期受压。", "Fewer births weigh on infant formula long term."),
        T("与蒙牛价格战，促销费用高。", "Price war with Mengniu keeps promotion spending high.")
      ]
    },
    demand: {
      take: T("总需求见顶，结构向高端和功能性转移。", "Total demand has peaked; the mix is shifting to premium and functional products."),
      drivers: [
        { name: T("液态奶", "Liquid milk"), share: 65, dir: "down" },
        { name: T("奶粉", "Milk powder"), share: 20, dir: "up" },
        { name: T("冷饮", "Ice cream"), share: 10, dir: "flat" },
        { name: T("奶酪及其他", "Cheese & other"), share: 5, dir: "up" }
      ],
      note: T("中国人均乳制品消费只有日本的一半左右，长期仍有空间。", "China's per-person dairy consumption is about half of Japan's, leaving long-term room.")
    },
    weak: {
      take: T("需求疲软是最大的问题。", "Weak demand is the biggest problem."),
      items: [
        { level: "mid", title: T("液态奶下滑", "Falling liquid milk"), note: T("消费者减少日常饮奶，送礼需求下降。", "People drink less milk daily, and gift demand is down.") },
        { level: "mid", title: T("人口结构", "Demographics"), note: T("出生率下降影响婴儿奶粉。", "Lower births hurt infant formula.") },
        { level: "low", title: T("原奶周期", "Raw milk cycle"), note: T("原奶价格反弹会推高成本。", "A rebound in raw milk prices would raise costs.") }
      ]
    },
    watch: [T("液态奶收入增速", "Liquid milk growth"), T("奶粉份额", "Milk powder share"), T("毛利率", "Gross margin")]
  },

  /* ====================================================== */
  {
    id: "688981",
    date: "2026-06-12",
    code: "688981.SH",
    company: T("中芯国际", "SMIC"),
    industry: T("晶圆代工", "Chip foundry"),
    sector: "tech",
    mcap: 8390, mult: 5.5,
    position: T("中国大陆规模最大、工艺最先进的晶圆代工厂，全球排名第三", "Mainland China's largest and most advanced chip foundry, third in the world by revenue"),
    verdict: "fair",
    trend: "widening",
    moatScore: 4,
    thesis: [
      T("在国产替代背景下，它是国内芯片设计公司的首选代工厂。", "With China pushing for local chips, it is the first-choice foundry for Chinese chip designers."),
      T("先进制程受设备出口管制限制，但成熟制程需求旺盛。", "Export controls limit its advanced nodes, but demand for mature nodes is strong."),
      T("估值很高，市场是在为战略地位和长期增长定价。", "The valuation is high; the market is pricing its strategic role and long-term growth.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("80 亿美元", "USD 8.0 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("4.9 亿美元", "USD 0.49 bn") },
      { k: T("产能利用率", "Utilisation"), v: T("约 90%", "~90%") },
      { k: T("市净率", "P/B"), v: T("约 5.5 倍", "~5.5x") }
    ],
    moat: {
      take: T("技术积累、客户认证和政策支持。", "Technical know-how, customer qualification and policy support."),
      items: [
        { name: T("国产替代地位", "Strategic position"), score: 5, note: T("国内唯一能大规模生产先进逻辑芯片的代工厂。", "The only Chinese foundry making advanced logic chips at scale.") },
        { name: T("客户认证", "Customer qualification"), score: 4, note: T("芯片设计公司换代工厂要重新验证，周期长。", "Switching foundries means re-qualifying designs, which takes a long time.") },
        { name: T("工艺技术", "Process technology"), score: 3, note: T("先进制程仍落后台积电多代。", "Advanced nodes still trail TSMC by several generations.") },
        { name: T("规模", "Scale"), score: 4, note: T("月产能约 100 万片（8 英寸约当）。", "Capacity around 1 m wafers a month (8-inch equivalent).") }
      ]
    },
    product: {
      take: T("重资产制造，折旧高，利润率波动大。", "Capital-heavy manufacturing with high depreciation and swinging margins."),
      rows: [
        { k: T("核心业务", "Main business"), v: T("为客户代工生产芯片", "Makes chips for customers who design them") },
        { k: T("客户", "Customers"), v: T("国内芯片设计公司约 8 成", "Chinese chip designers ~80%") },
        { k: T("应用", "End uses"), v: T("手机、电脑、消费电子、工业汽车", "Phones, PCs, consumer electronics, industrial and auto") },
        { k: T("周期性", "Cyclicality"), v: T("跟随半导体周期", "Follows the chip cycle") },
        { k: T("定价方式", "Pricing"), v: T("按晶圆片计价，随供需调整", "Priced per wafer, adjusted to supply and demand") }
      ]
    },
    valuation: {
      take: T("股价在中性区间下沿。", "The price is at the bottom of the base case."),
      metric: "PB",
      price: 105,
      basis: T("每股净资产约 19 元", "Book value per share ≈ CNY 19"),
      axis: [50, 160],
      bear: { low: 65, high: 72, pe: "3.4–3.8x", note: T("出口管制收紧，扩产受阻", "Tighter export controls; expansion stalls") },
      base: { low: 100, high: 115, pe: "5.3–6x", note: T("产能利用率维持高位，收入增长 15%", "Utilisation stays high; revenue +15%") },
      bull: { low: 135, high: 145, pe: "7–7.6x", note: T("国产 AI 芯片代工大幅放量", "Chinese AI chip orders surge") }
    },
    edge: {
      take: T("国产替代让护城河在变宽。", "Localisation is widening the moat."),
      plus: [
        T("海外制裁迫使国内客户转向本土代工。", "Foreign sanctions push Chinese customers to local foundries."),
        T("国家大基金持续支持扩产。", "State chip funds keep backing expansion.")
      ],
      minus: [
        T("无法获得 EUV 光刻机，先进制程受限。", "No access to EUV lithography, which limits advanced nodes."),
        T("华虹等国内同行在成熟制程竞争。", "Hua Hong and other domestic rivals compete in mature nodes.")
      ]
    },
    demand: {
      take: T("国产芯片需求强劲。", "Demand for Chinese-made chips is strong."),
      drivers: [
        { name: T("消费电子", "Consumer electronics"), share: 30, dir: "flat" },
        { name: T("手机", "Phones"), share: 25, dir: "flat" },
        { name: T("电脑与 AI", "PCs & AI"), share: 25, dir: "up" },
        { name: T("工业与汽车", "Industrial & auto"), share: 20, dir: "up" }
      ],
      note: T("中国每年进口芯片超过 3,500 亿美元，国产化率仍低。", "China imports over USD 350 bn of chips a year, and local supply is still low.")
    },
    weak: {
      take: T("技术和估值是两大风险。", "Technology limits and valuation are the two big risks."),
      items: [
        { level: "high", title: T("设备限制", "Equipment curbs"), note: T("先进设备和零部件依赖进口。", "Advanced tools and parts depend on imports.") },
        { level: "mid", title: T("折旧压力", "Depreciation"), note: T("大规模扩产后折旧上升，压低毛利率。", "Heavy expansion raises depreciation and lowers margins.") },
        { level: "mid", title: T("估值高", "High valuation"), note: T("市盈率超过 100 倍，对预期变化敏感。", "Over 100x earnings; sensitive to shifts in expectations.") }
      ]
    },
    watch: [T("产能利用率", "Utilisation"), T("毛利率", "Gross margin"), T("出口管制变化", "Export control changes")]
  },

  /* ====================================================== */
  {
    id: "002371",
    date: "2026-06-26",
    code: "002371.SZ",
    company: T("北方华创", "NAURA Technology"),
    industry: T("半导体设备", "Chip equipment"),
    sector: "tech",
    mcap: 2400, mult: 26,
    position: T("国内最大的半导体设备公司，产品覆盖刻蚀、薄膜沉积、热处理、清洗等环节", "China's largest chip equipment maker, covering etching, deposition, thermal processing and cleaning"),
    verdict: "fair",
    trend: "widening",
    moatScore: 4,
    thesis: [
      T("国内晶圆厂为了供应链安全，主动采购国产设备。", "Chinese fabs are actively buying local tools to secure their supply chains."),
      T("它是平台型公司，产品线最全，客户一次能买多种设备。", "It is a platform company with the widest product line, so customers buy many tools from it."),
      T("收入多年保持 30% 以上增长。", "Revenue has grown over 30% a year for several years.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("298 亿元", "CNY 29.8 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("56 亿元", "CNY 5.6 bn") },
      { k: T("研发投入", "R&D spend"), v: T("约占收入 15%", "~15% of revenue") },
      { k: T("市盈率", "P/E"), v: T("约 26 倍", "~26x") }
    ],
    moat: {
      take: T("客户验证壁垒加国产替代先发优势。", "Customer qualification barriers plus first-mover advantage in localisation."),
      items: [
        { name: T("平台化", "Platform breadth"), score: 5, note: T("国内产品线最全的半导体设备公司。", "China's broadest chip equipment portfolio.") },
        { name: T("客户验证", "Qualification"), score: 4, note: T("设备进入产线要经过 1–2 年验证。", "Tools take 1–2 years to qualify on a production line.") },
        { name: T("国产替代", "Localisation"), score: 5, note: T("国内晶圆厂首选的本土供应商。", "The first local supplier Chinese fabs turn to.") },
        { name: T("技术水平", "Technology level"), score: 3, note: T("高端设备与应用材料、泛林仍有差距。", "High-end tools still trail Applied Materials and Lam.") }
      ]
    },
    product: {
      take: T("高价值的生产设备，跟着晶圆厂扩产节奏走。", "High-value production tools that follow fab expansion plans."),
      rows: [
        { k: T("核心产品", "Main products"), v: T("刻蚀、薄膜沉积、热处理、清洗设备", "Etch, deposition, thermal and cleaning tools") },
        { k: T("客户", "Customers"), v: T("中芯国际、长江存储、华虹等晶圆厂", "Fabs such as SMIC, YMTC and Hua Hong") },
        { k: T("周期性", "Cyclicality"), v: T("随晶圆厂资本开支波动", "Follows fab capital spending") },
        { k: T("定价方式", "Pricing"), v: T("单台设备价格数百万到数千万元", "Each tool sells for several million to tens of millions of CNY") },
        { k: T("其他业务", "Other businesses"), v: T("电子元器件、光伏和 LED 设备", "Electronic components; solar and LED equipment") }
      ]
    },
    valuation: {
      take: T("股价在中性区间下沿。", "The price is at the bottom of the base case."),
      price: 450,
      basis: T("2026 年预测每股收益约 17.5 元", "2026E EPS ≈ CNY 17.5"),
      axis: [300, 680],
      bear: { low: 340, high: 370, pe: "19–21x", note: T("国内晶圆厂扩产放缓", "Chinese fab expansion slows") },
      base: { low: 455, high: 525, pe: "26–30x", note: T("收入增长 25–30%", "Revenue +25–30%") },
      bull: { low: 610, high: 640, pe: "35–37x", note: T("先进制程设备突破", "Breakthrough in advanced-node tools") }
    },
    edge: {
      take: T("国产化率提升，护城河在变宽。", "Rising localisation is widening the moat."),
      plus: [
        T("国产设备在国内晶圆厂的采购比例持续上升。", "Local tools are taking a rising share of Chinese fab purchases."),
        T("收购芯源微补齐涂胶显影设备。", "Acquiring Kingsemi added coating and developing tools.")
      ],
      minus: [
        T("中微公司、拓荆科技等在细分领域竞争。", "AMEC, Piotech and others compete in specific tools."),
        T("部分核心零部件仍依赖进口。", "Some key parts still depend on imports.")
      ]
    },
    demand: {
      take: T("国内晶圆厂扩产是主要需求来源。", "Chinese fab expansion is the main source of demand."),
      drivers: [
        { name: T("逻辑芯片", "Logic chips"), share: 45, dir: "up" },
        { name: T("存储芯片", "Memory"), share: 30, dir: "up" },
        { name: T("功率与特色工艺", "Power & specialty"), share: 15, dir: "flat" },
        { name: T("光伏与其他", "Solar & other"), share: 10, dir: "down" }
      ],
      note: T("中国是全球最大的半导体设备市场，每年采购约 400 亿美元，国产设备占比约 2 成。", "China is the largest chip equipment market, buying about USD 40 bn a year; local tools are about 20% of that.")
    },
    weak: {
      take: T("技术差距和周期是主要风险。", "Technology gaps and the cycle are the main risks."),
      items: [
        { level: "mid", title: T("技术差距", "Technology gap"), note: T("高端刻蚀和沉积设备仍落后海外龙头。", "High-end etch and deposition tools trail global leaders.") },
        { level: "mid", title: T("零部件依赖", "Parts dependence"), note: T("部分阀门、射频电源依赖进口。", "Some valves and RF power units are imported.") },
        { level: "mid", title: T("扩产周期", "Expansion cycle"), note: T("晶圆厂扩产放缓会影响订单。", "Slower fab building would hit orders.") }
      ]
    },
    watch: [T("合同负债（订单）", "Contract liabilities (orders)"), T("国产化率", "Localisation rate"), T("毛利率", "Gross margin")]
  },

  /* ====================================================== */
  {
    id: "601888",
    date: "2026-07-10",
    code: "601888.SH",
    company: T("中国中免", "China Tourism Group Duty Free"),
    industry: T("免税零售", "Duty-free retail"),
    sector: "consumer",
    mcap: 1450, mult: 30,
    position: T("全球最大的旅游零售商之一，国内免税市场份额约 8 成", "One of the world's largest travel retailers, with about 80% of China's duty-free market"),
    verdict: "fair",
    trend: "stable",
    moatScore: 4,
    thesis: [
      T("免税牌照稀缺，是政策给予的护城河。", "Duty-free licences are scarce, a moat granted by policy."),
      T("2025 年 12 月海南全岛封关后，离岛免税政策进一步放宽。", "After Hainan became a special customs zone in December 2025, island duty-free rules loosened further."),
      T("消费疲弱和奢侈品需求下降让收入仍在恢复中。", "Weak spending and lower luxury demand mean revenue is still recovering.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("565 亿元", "CNY 56.5 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("43 亿元", "CNY 4.3 bn") },
      { k: T("毛利率", "Gross margin"), v: T("约 32%", "~32%") },
      { k: T("市盈率", "P/E"), v: T("约 30 倍", "~30x") }
    ],
    moat: {
      take: T("牌照和采购规模。", "Licences and buying scale."),
      items: [
        { name: T("牌照", "Licences"), score: 5, note: T("免税牌照由国家审批，数量有限。", "Duty-free licences are state-approved and limited.") },
        { name: T("采购规模", "Buying power"), score: 4, note: T("和国际品牌直接谈判，进货价格有优势。", "Negotiates directly with global brands for better cost.") },
        { name: T("渠道", "Locations"), score: 4, note: T("占据海南、主要机场和口岸的门店。", "Holds stores in Hainan, major airports and border crossings.") },
        { name: T("会员", "Members"), score: 3, note: T("会员数超过 3,000 万，但复购率一般。", "Over 30 m members, but repeat buying is modest.") }
      ]
    },
    product: {
      take: T("销售进口的美妆、奢侈品、烟酒。", "Sells imported beauty, luxury, tobacco and liquor."),
      rows: [
        { k: T("核心品类", "Main categories"), v: T("香化约 5 成，精品、烟酒、电子产品", "Beauty ~50%, luxury, tobacco and liquor, electronics") },
        { k: T("客户", "Customers"), v: T("旅客、海南游客、出境人群", "Travellers, Hainan tourists, outbound travellers") },
        { k: T("周期性", "Cyclicality"), v: T("和旅游、可选消费相关", "Tied to travel and discretionary spending") },
        { k: T("定价方式", "Pricing"), v: T("免税价格低于国内专柜", "Duty-free prices below domestic store prices") },
        { k: T("成本", "Costs"), v: T("机场租金是主要费用", "Airport rents are the main expense") }
      ]
    },
    valuation: {
      take: T("股价在中性区间内。", "The price is inside the base case."),
      price: 70,
      basis: T("2026 年预测每股收益约 2.3 元", "2026E EPS ≈ CNY 2.3"),
      axis: [40, 100],
      bear: { low: 49, high: 53, pe: "21–23x", note: T("海南客流和客单价继续下降", "Hainan visitors and spending keep falling") },
      base: { low: 64, high: 76, pe: "28–33x", note: T("封关政策带动收入增长 15%", "Customs zone policy lifts revenue 15%") },
      bull: { low: 88, high: 92, pe: "38–40x", note: T("市内免税店大规模开放", "City duty-free stores open widely") }
    },
    edge: {
      take: T("政策利好和竞争加剧并存。", "Favourable policy and rising competition at the same time."),
      plus: [
        T("海南封关扩大了免税商品范围和额度。", "Hainan's customs zone widened eligible goods and quotas."),
        T("市内免税店政策落地，新增销售渠道。", "City-centre duty-free stores open a new channel.")
      ],
      minus: [
        T("海南有多家免税牌照持有者，份额被分走。", "Several licence holders in Hainan split the market."),
        T("海外购物和代购分流需求。", "Overseas shopping and resellers divert demand.")
      ]
    },
    demand: {
      take: T("需求和旅游、消费信心高度相关。", "Demand tracks travel and consumer confidence."),
      drivers: [
        { name: T("海南离岛免税", "Hainan"), share: 50, dir: "flat" },
        { name: T("机场免税", "Airports"), share: 25, dir: "up" },
        { name: T("有税零售", "Duty-paid retail"), share: 20, dir: "flat" },
        { name: T("市内免税", "City stores"), share: 5, dir: "up" }
      ],
      note: T("出境游人数恢复到疫情前水平，但人均消费下降。", "Outbound travel is back to pre-pandemic levels, but spending per person is lower.")
    },
    weak: {
      take: T("消费疲弱是最大的短板。", "Weak consumer spending is the biggest weak spot."),
      items: [
        { level: "high", title: T("消费疲弱", "Weak spending"), note: T("美妆和奢侈品需求下降。", "Beauty and luxury demand is down.") },
        { level: "mid", title: T("机场租金", "Airport rents"), note: T("机场合同租金高，压缩利润。", "High airport rents squeeze profit.") },
        { level: "mid", title: T("政策依赖", "Policy reliance"), note: T("业绩高度依赖免税政策变化。", "Results depend heavily on duty-free policy.") }
      ]
    },
    watch: [T("海南免税销售额", "Hainan duty-free sales"), T("客单价", "Spend per shopper"), T("市内店开业", "City store openings")]
  },

  /* ====================================================== */
  {
    id: "600031",
    date: "2026-07-24",
    code: "600031.SH",
    company: T("三一重工", "Sany Heavy Industry"),
    industry: T("工程机械", "Construction machinery"),
    sector: "newenergy",
    mcap: 1860, mult: 18,
    position: T("国内最大的工程机械公司，挖掘机销量连续多年国内第一", "China's largest construction machinery maker, No.1 in excavator sales for many years"),
    verdict: "fair",
    trend: "widening",
    moatScore: 4,
    thesis: [
      T("国内挖掘机经历了 2021–2024 年的下行，2025 年开始进入更新周期。", "Domestic excavator sales fell from 2021 to 2024 and entered a replacement cycle in 2025."),
      T("海外收入已超过六成，降低了对国内地产的依赖。", "Overseas sales are over 60% of revenue, reducing reliance on Chinese property."),
      T("电动化和智能化工厂让它在成本上领先。", "Electrification and smart factories give it a cost lead.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("783 亿元", "CNY 78.3 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("60 亿元", "CNY 6.0 bn") },
      { k: T("海外收入占比", "Overseas share"), v: T("约 62%", "~62%") },
      { k: T("市盈率", "P/E"), v: T("约 18 倍", "~18x") }
    ],
    moat: {
      take: T("品牌、规模和服务网络。", "Brand, scale and service network."),
      items: [
        { name: T("规模", "Scale"), score: 4, note: T("挖掘机国内份额约 3 成。", "About 30% of China's excavator market.") },
        { name: T("服务网络", "Service network"), score: 4, note: T("售后和配件网络覆盖全国和 150 多个国家。", "After-sales and parts network across China and 150+ countries.") },
        { name: T("智能制造", "Smart factories"), score: 4, note: T("「灯塔工厂」提高效率、降低成本。", "\"Lighthouse\" factories raise efficiency and cut cost.") },
        { name: T("品牌", "Brand"), score: 4, note: T("在新兴市场认可度接近卡特彼勒、小松。", "In emerging markets its reputation is close to Caterpillar and Komatsu.") }
      ]
    },
    product: {
      take: T("工程设备，强周期，海外占比提高后波动减小。", "Heavy equipment, highly cyclical, but more stable as overseas grows."),
      rows: [
        { k: T("核心产品", "Main products"), v: T("挖掘机约 4 成，混凝土机械、起重机、桩工机械", "Excavators ~40%, concrete machinery, cranes, piling rigs") },
        { k: T("客户", "Customers"), v: T("施工企业、矿山、设备租赁商", "Contractors, mines, rental companies") },
        { k: T("周期性", "Cyclicality"), v: T("强周期，设备寿命约 8–10 年", "Highly cyclical; equipment lasts about 8–10 years") },
        { k: T("定价方式", "Pricing"), v: T("分期和融资租赁销售为主", "Mostly sold on instalments and leases") },
        { k: T("新方向", "New direction"), v: T("电动工程机械、氢能、风电", "Electric machines, hydrogen, wind power") }
      ]
    },
    valuation: {
      take: T("股价在中性区间内。", "The price is inside the base case."),
      price: 22,
      basis: T("2026 年预测每股收益约 1.24 元", "2026E EPS ≈ CNY 1.24"),
      axis: [12, 34],
      bear: { low: 15, high: 17, pe: "12–14x", note: T("国内更新需求不及预期，海外放缓", "Weak replacement demand; overseas slows") },
      base: { low: 21, high: 25, pe: "17–20x", note: T("利润增长 20%，海外稳定", "Profit +20%; stable overseas") },
      bull: { low: 29, high: 31, pe: "23–25x", note: T("国内外周期共振", "Domestic and overseas cycles rise together") }
    },
    edge: {
      take: T("海外和电动化让护城河变宽。", "Overseas growth and electrification widen the moat."),
      plus: [
        T("在东南亚、中东、非洲份额快速提升。", "Market share is rising fast in Southeast Asia, the Middle East and Africa."),
        T("电动挖掘机和电动搅拌车领先。", "Leads in electric excavators and mixer trucks.")
      ],
      minus: [
        T("国内地产新开工减少，需求基数低。", "Fewer new property starts keep domestic demand low."),
        T("欧美市场对中国设备有贸易限制。", "Trade barriers in Europe and the US.")
      ]
    },
    demand: {
      take: T("国内更新加海外基建。", "Domestic replacement plus overseas infrastructure."),
      drivers: [
        { name: T("海外", "Overseas"), share: 62, dir: "up" },
        { name: T("国内基建", "China infrastructure"), share: 20, dir: "up" },
        { name: T("国内地产", "China property"), share: 10, dir: "down" },
        { name: T("国内矿山", "China mining"), share: 8, dir: "flat" }
      ],
      note: T("2015–2020 年销售的大量设备进入更换期，带动国内销量回升。", "Many machines sold in 2015–2020 are due for replacement, lifting domestic sales.")
    },
    weak: {
      take: T("周期性是主要短板。", "Cyclicality is the main weak spot."),
      items: [
        { level: "mid", title: T("周期性", "Cyclicality"), note: T("行业下行时收入可下降一半。", "Revenue can halve in a downturn.") },
        { level: "mid", title: T("海外风险", "Overseas risk"), note: T("汇率、地缘和当地政策变化。", "Currency, geopolitics and local policy shifts.") },
        { level: "mid", title: T("应收账款", "Receivables"), note: T("融资销售带来坏账风险。", "Financed sales carry bad-debt risk.") }
      ]
    },
    watch: [T("挖掘机月销量", "Monthly excavator sales"), T("海外收入增速", "Overseas growth"), T("应收账款", "Receivables")]
  },

  /* ====================================================== */
  {
    id: "300274",
    date: "2026-08-07",
    code: "300274.SZ",
    company: T("阳光电源", "Sungrow Power"),
    industry: T("光伏逆变器与储能", "Solar inverters & storage"),
    sector: "newenergy",
    mcap: 3310, mult: 21,
    position: T("全球光伏逆变器出货量前二，储能系统全球前列", "Top two in global solar inverter shipments and a leader in energy storage systems"),
    verdict: "fair",
    trend: "widening",
    moatScore: 4,
    thesis: [
      T("核心是电力电子技术，逆变器和储能系统用的是同一套能力。", "Its core is power electronics; inverters and storage systems use the same skills."),
      T("储能成为第一大业务，海外大型储能订单利润率高。", "Storage is now its largest business, and large overseas projects earn high margins."),
      T("光伏行业价格战严重，但它所在的逆变器环节受影响较小。", "Solar has a severe price war, but inverters are less affected than panels.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("779 亿元", "CNY 77.9 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("110 亿元", "CNY 11.0 bn") },
      { k: T("海外收入占比", "Overseas share"), v: T("约 6 成", "~60%") },
      { k: T("市盈率", "P/E"), v: T("约 21 倍", "~21x") }
    ],
    moat: {
      take: T("技术、品牌和海外渠道。", "Technology, brand and overseas channels."),
      items: [
        { name: T("电力电子技术", "Power electronics"), score: 4, note: T("近 30 年逆变器经验，转换效率领先。", "Nearly 30 years in inverters with leading conversion efficiency.") },
        { name: T("海外渠道与认证", "Overseas channels"), score: 5, note: T("通过欧美电网认证，海外项目经验多。", "Certified for Western grids, with long overseas project experience.") },
        { name: T("品牌", "Brand"), score: 4, note: T("在大型电站客户中认可度高。", "Well regarded by large power plant customers.") },
        { name: T("规模", "Scale"), score: 4, note: T("与华为并列全球逆变器第一梯队。", "Shares the top tier of global inverters with Huawei.") }
      ]
    },
    product: {
      take: T("新能源发电的关键设备，To B 项目制。", "Key equipment for clean power, sold project by project."),
      rows: [
        { k: T("核心产品", "Main products"), v: T("储能系统约 4 成、逆变器约 3 成、新能源电站开发", "Storage systems ~40%, inverters ~30%, renewable project development") },
        { k: T("客户", "Customers"), v: T("电站开发商、电网、工商业和家庭用户", "Power developers, utilities, businesses and homes") },
        { k: T("周期性", "Cyclicality"), v: T("跟随光伏装机和储能投资", "Follows solar installations and storage investment") },
        { k: T("定价方式", "Pricing"), v: T("项目招标，海外价格高于国内", "Project tenders; overseas prices higher than China") },
        { k: T("新方向", "New direction"), v: T("AI 数据中心电源、氢能、充电桩", "Power for AI data centres, hydrogen, EV chargers") }
      ]
    },
    valuation: {
      take: T("股价在中性区间内。", "The price is inside the base case."),
      price: 160,
      basis: T("2026 年预测每股收益约 7.7 元", "2026E EPS ≈ CNY 7.7"),
      axis: [100, 230],
      bear: { low: 115, high: 125, pe: "15–16x", note: T("美国关税提高，储能价格战", "Higher US tariffs; storage price war") },
      base: { low: 155, high: 177, pe: "20–23x", note: T("储能出货增长 30%", "Storage shipments +30%") },
      bull: { low: 210, high: 220, pe: "27–29x", note: T("AI 数据中心配储需求爆发", "AI data centre storage demand takes off") }
    },
    edge: {
      take: T("储能让护城河变宽。", "Storage is widening the moat."),
      plus: [
        T("中东、欧洲、澳洲大型储能订单增加。", "More large storage orders in the Middle East, Europe and Australia."),
        T("储能系统集成能力比单纯电池厂更强。", "Its system integration skill beats pure battery makers.")
      ],
      minus: [
        T("宁德时代、比亚迪等电池厂直接做储能系统。", "Battery makers like CATL and BYD now sell storage systems directly."),
        T("国内光伏装机增速放缓。", "Solar installation growth in China is slowing.")
      ]
    },
    demand: {
      take: T("储能需求高增长，光伏增速放缓。", "Storage demand is booming; solar growth is slowing."),
      drivers: [
        { name: T("储能系统", "Storage systems"), share: 40, dir: "up" },
        { name: T("光伏逆变器", "Solar inverters"), share: 30, dir: "flat" },
        { name: T("电站开发", "Project development"), share: 25, dir: "down" },
        { name: T("其他", "Other"), share: 5, dir: "up" }
      ],
      note: T("新能源发电占比提高，电网需要储能来平衡波动，全球储能装机每年增长 40% 以上。", "As renewables grow, grids need storage to balance supply; global storage installations grow over 40% a year.")
    },
    weak: {
      take: T("政策和竞争是主要风险。", "Policy and competition are the main risks."),
      items: [
        { level: "high", title: T("美国政策", "US policy"), note: T("关税和本土化要求影响美国业务。", "Tariffs and local-content rules affect US business.") },
        { level: "mid", title: T("储能价格战", "Storage price war"), note: T("电芯降价带动系统价格下跌。", "Cheaper cells push system prices down.") },
        { level: "mid", title: T("应收账款", "Receivables"), note: T("电站项目回款周期长。", "Power projects pay slowly.") }
      ]
    },
    watch: [T("储能出货量", "Storage shipments"), T("海外毛利率", "Overseas gross margin"), T("美国政策", "US policy")]
  },

  /* ====================================================== */
  {
    id: "002352",
    date: "2026-08-21",
    code: "002352.SZ",
    company: T("顺丰控股", "SF Holding"),
    industry: T("快递物流", "Express logistics"),
    sector: "infra",
    mcap: 1990, mult: 15,
    position: T("国内最大的综合物流公司，时效快递市场份额超过一半", "China's largest integrated logistics company, with over half the time-definite express market"),
    verdict: "fair-low",
    trend: "stable",
    moatScore: 4,
    thesis: [
      T("直营模式和自有航空网络让它在「快」和「稳」上没有对手。", "Its company-run network and own airline make it unmatched for speed and reliability."),
      T("资本开支高峰已过，自由现金流和分红明显提升。", "The capital spending peak is over, and free cash flow and dividends have risen."),
      T("电商件价格战激烈，它选择不跟进，专注中高端。", "E-commerce parcels face a fierce price war; SF stays out and focuses on premium service.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("2,845 亿元", "CNY 284.5 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("102 亿元", "CNY 10.2 bn") },
      { k: T("全货机", "Freighters"), v: T("约 90 架", "~90 aircraft") },
      { k: T("市盈率", "P/E"), v: T("约 15 倍", "~15x") }
    ],
    moat: {
      take: T("航空网络和直营体系很难复制。", "Its air network and company-run model are hard to copy."),
      items: [
        { name: T("航空网络", "Air network"), score: 5, note: T("自有鄂州花湖货运机场和全货机机队。", "Owns the Ezhou Huahu cargo airport and a freighter fleet.") },
        { name: T("直营体系", "Company-run model"), score: 5, note: T("全程自营，服务质量稳定。", "Runs the whole chain itself, so service quality is consistent.") },
        { name: T("品牌", "Brand"), score: 4, note: T("「急件找顺丰」的用户心智。", "Customers think \"urgent means SF\".") },
        { name: T("成本", "Cost"), score: 2, note: T("单票成本高于加盟制快递，价格竞争中不占优。", "Higher cost per parcel than franchise rivals; weak in price wars.") }
      ]
    },
    product: {
      take: T("服务业，按时效和重量收费。", "A service business charging by speed and weight."),
      rows: [
        { k: T("核心业务", "Main businesses"), v: T("时效快递、经济快递、快运、冷运、供应链和国际", "Time-definite express, economy, freight, cold chain, supply chain and international") },
        { k: T("客户", "Customers"), v: T("企业件和高端个人件为主", "Mainly business and premium personal shipments") },
        { k: T("周期性", "Cyclicality"), v: T("和商务活动、电商、外贸相关", "Tied to business activity, e-commerce and trade") },
        { k: T("定价方式", "Pricing"), v: T("单价高于同行，靠服务溢价", "Higher prices than peers, justified by service") },
        { k: T("股东回报", "Shareholder return"), v: T("分红率提升至约 40%，并有回购", "Payout raised to ~40%, plus buybacks") }
      ]
    },
    valuation: {
      take: T("股价略低于中性区间。", "The price is slightly below the base case."),
      price: 40,
      basis: T("2026 年预测每股收益约 2.6 元", "2026E EPS ≈ CNY 2.6"),
      axis: [25, 60],
      bear: { low: 30, high: 33, pe: "12–13x", note: T("商务件需求下降，国际业务亏损", "Business parcels fall; international loses money") },
      base: { low: 42, high: 47, pe: "16–18x", note: T("利润增长 12%，分红率提升", "Profit +12%; higher payout") },
      bull: { low: 53, high: 56, pe: "20–21x", note: T("鄂州枢纽效益释放，国际业务盈利", "Ezhou hub pays off; international turns profitable") }
    },
    edge: {
      take: T("高端优势稳固，但大众市场很难突破。", "The premium edge is solid, but the mass market is hard to crack."),
      plus: [
        T("鄂州枢纽投入运营，航空网络效率提升。", "The Ezhou hub is running, making the air network more efficient."),
        T("国际和供应链业务帮助中国企业出海。", "International and supply chain services help Chinese companies go abroad.")
      ],
      minus: [
        T("极兔、中通等在电商件市场压价。", "J&T, ZTO and others undercut prices in e-commerce parcels."),
        T("京东物流在高端市场竞争。", "JD Logistics competes in the premium segment.")
      ]
    },
    demand: {
      take: T("快递总量增长，但中高端需求增长较慢。", "Parcel volume grows, but premium demand grows more slowly."),
      drivers: [
        { name: T("时效快递", "Time-definite"), share: 45, dir: "flat" },
        { name: T("供应链与国际", "Supply chain & intl"), share: 25, dir: "up" },
        { name: T("经济快递", "Economy express"), share: 15, dir: "flat" },
        { name: T("快运与冷运", "Freight & cold chain"), share: 15, dir: "up" }
      ],
      note: T("中国快递业务量超过 1,700 亿件，全球第一，但大部分是低价电商件。", "China handles over 170 bn parcels a year, the most in the world, but most are low-price e-commerce parcels.")
    },
    weak: {
      take: T("增长空间有限是主要问题。", "Limited growth is the main issue."),
      items: [
        { level: "mid", title: T("价格竞争", "Price competition"), note: T("加盟制快递持续压价。", "Franchise rivals keep cutting prices.") },
        { level: "mid", title: T("商务需求", "Business demand"), note: T("经济放缓影响商务件。", "A slower economy hurts business parcels.") },
        { level: "low", title: T("国际波动", "International swings"), note: T("国际货运价格大起大落。", "International freight rates swing sharply.") }
      ]
    },
    watch: [T("单票收入", "Revenue per parcel"), T("鄂州枢纽货量", "Ezhou hub volume"), T("自由现金流", "Free cash flow")]
  },

  /* ====================================================== */
  {
    id: "600019",
    date: "2026-09-04",
    code: "600019.SH",
    company: T("宝钢股份", "Baoshan Iron & Steel"),
    industry: T("钢铁", "Steel"),
    sector: "resources",
    mcap: 1560, mult: 0.77,
    position: T("国内技术最领先的钢铁公司，汽车板和硅钢国内第一", "China's most technologically advanced steelmaker, No.1 in auto sheet and electrical steel"),
    verdict: "fair-low",
    trend: "stable",
    moatScore: 3,
    thesis: [
      T("钢铁行业产能过剩，但宝钢专注高端产品，盈利能力好于同行。", "Steel has too much capacity, but Baosteel focuses on high-end products and earns more than peers."),
      T("汽车板和取向硅钢有认证壁垒，客户很少更换。", "Auto sheet and grain-oriented electrical steel need certification, so customers rarely switch."),
      T("市净率约 0.77 倍，市场对整个行业很悲观。", "At about 0.77x book, the market is pessimistic about the whole industry.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("3,221 亿元", "CNY 322.1 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("74 亿元", "CNY 7.4 bn") },
      { k: T("钢产量", "Steel output"), v: T("约 5,000 万吨", "~50 mt") },
      { k: T("市净率", "P/B"), v: T("约 0.77 倍", "~0.77x") }
    ],
    moat: {
      take: T("高端产品认证，但行业本身护城河弱。", "High-end certification, though the industry's own moat is weak."),
      items: [
        { name: T("高端产品", "High-end products"), score: 4, note: T("汽车外板、取向硅钢国内市场份额第一。", "No.1 in China for exposed auto panels and grain-oriented steel.") },
        { name: T("客户认证", "Certification"), score: 4, note: T("车企和电网认证周期长。", "Carmaker and grid qualifications take a long time.") },
        { name: T("规模", "Scale"), score: 3, note: T("中国宝武旗下，采购规模大。", "Part of China Baowu, with big purchasing scale.") },
        { name: T("定价权", "Pricing power"), score: 2, note: T("普通钢材价格由市场决定。", "Ordinary steel prices are set by the market.") }
      ]
    },
    product: {
      take: T("工业原材料，普通钢强周期，高端钢更稳定。", "Industrial material; ordinary steel is very cyclical, high-end steel steadier."),
      rows: [
        { k: T("核心产品", "Main products"), v: T("冷轧板（汽车、家电）、热轧板、硅钢、厚板", "Cold-rolled sheet (cars, appliances), hot-rolled, electrical steel, plate") },
        { k: T("客户", "Customers"), v: T("汽车厂、家电厂、电网、造船、能源", "Carmakers, appliance makers, grid, shipbuilding, energy") },
        { k: T("周期性", "Cyclicality"), v: T("强周期", "Highly cyclical") },
        { k: T("定价方式", "Pricing"), v: T("每月公布出厂价，大客户签年度合同", "Monthly list prices; annual contracts with big clients") },
        { k: T("成本", "Costs"), v: T("铁矿石和焦炭约占成本 6 成", "Iron ore and coke ~60% of cost") }
      ]
    },
    valuation: {
      take: T("股价略低于中性区间。", "The price is slightly below the base case."),
      metric: "PB",
      price: 7.2,
      basis: T("每股净资产约 9.4 元", "Book value per share ≈ CNY 9.4"),
      axis: [4.5, 11],
      bear: { low: 5.5, high: 6.0, pe: "0.6–0.65x", note: T("钢价继续下跌，出口受限", "Steel prices keep falling; exports restricted") },
      base: { low: 7.5, high: 8.5, pe: "0.8–0.9x", note: T("行业限产，利润率修复", "Output curbs help margins recover") },
      bull: { low: 9.6, high: 10.2, pe: "1.0–1.1x", note: T("行业供给侧改革", "Industry-wide supply reform") }
    },
    edge: {
      take: T("高端优势稳定，普通钢仍受周期影响。", "Its high-end edge is stable, but ordinary steel still follows the cycle."),
      plus: [
        T("新能源车和电网投资带动硅钢需求。", "EVs and grid investment drive electrical steel demand."),
        T("行业产量调控有利于龙头。", "Industry output controls favour leaders.")
      ],
      minus: [
        T("地产用钢需求持续下降。", "Steel demand from property keeps falling."),
        T("海外对中国钢材的反倾销增加。", "More anti-dumping actions against Chinese steel abroad.")
      ]
    },
    demand: {
      take: T("建筑用钢下降，制造业用钢增长。", "Construction steel is falling; manufacturing steel is growing."),
      drivers: [
        { name: T("汽车", "Automotive"), share: 30, dir: "up" },
        { name: T("家电与机械", "Appliances & machinery"), share: 25, dir: "flat" },
        { name: T("能源与电网", "Energy & grid"), share: 20, dir: "up" },
        { name: T("建筑", "Construction"), share: 25, dir: "down" }
      ],
      note: T("中国粗钢产量约 10 亿吨，占全球一半以上，产能过剩是长期问题。", "China makes about 1 bn tonnes of crude steel, over half of the world total; overcapacity is a long-term problem.")
    },
    weak: {
      take: T("行业产能过剩是最大的问题。", "Industry overcapacity is the biggest problem."),
      items: [
        { level: "high", title: T("产能过剩", "Overcapacity"), note: T("行业整体利润率很低。", "The whole industry earns very low margins.") },
        { level: "mid", title: T("原料成本", "Raw materials"), note: T("铁矿石主要依赖进口，价格波动大。", "Iron ore is mostly imported and its price swings.") },
        { level: "mid", title: T("贸易摩擦", "Trade friction"), note: T("钢材出口面临关税。", "Steel exports face tariffs.") }
      ]
    },
    watch: [T("吨钢利润", "Profit per tonne"), T("硅钢出货", "Electrical steel shipments"), T("粗钢产量政策", "Output policy")]
  },

  /* ====================================================== */
  {
    id: "601138",
    date: "2026-09-18",
    code: "601138.SH",
    company: T("工业富联", "Foxconn Industrial Internet"),
    industry: T("AI 服务器", "AI servers"),
    sector: "tech",
    mcap: 11900, mult: 26,
    position: T("全球最大的服务器代工厂，英伟达 AI 服务器的主要组装商", "The world's largest server manufacturer and a main assembler of NVIDIA AI servers"),
    verdict: "fair",
    trend: "widening",
    moatScore: 4,
    thesis: [
      T("AI 服务器组装复杂，需要大规模产能和工程能力，能做的公司很少。", "AI server assembly is complex and needs huge capacity and engineering skill; few can do it."),
      T("云厂商 AI 资本开支大增，带动收入和利润快速增长。", "Cloud giants' AI spending surge drives fast revenue and profit growth."),
      T("毛利率低，利润依赖客户的资本开支周期。", "Margins are thin, and profit depends on customers' spending cycle.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("6,091 亿元", "CNY 609.1 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("232 亿元", "CNY 23.2 bn") },
      { k: T("毛利率", "Gross margin"), v: T("约 7%", "~7%") },
      { k: T("市盈率", "P/E"), v: T("约 26 倍", "~26x") }
    ],
    moat: {
      take: T("规模、工程能力和客户关系。", "Scale, engineering and customer relationships."),
      items: [
        { name: T("规模与产能", "Scale & capacity"), score: 5, note: T("在中国、墨西哥、美国、越南都有服务器工厂。", "Server plants in China, Mexico, the US and Vietnam.") },
        { name: T("工程能力", "Engineering"), score: 4, note: T("液冷、机柜级整合能力领先。", "Leads in liquid cooling and rack-level integration.") },
        { name: T("客户关系", "Customer ties"), score: 4, note: T("长期服务英伟达和美国云厂商。", "Long-standing supplier to NVIDIA and US cloud giants.") },
        { name: T("定价权", "Pricing power"), score: 2, note: T("代工模式，毛利率只有约 7%。", "As a contract maker, gross margin is only ~7%.") }
      ]
    },
    product: {
      take: T("To B 代工，收入巨大、利润率低。", "Contract manufacturing: huge revenue, low margins."),
      rows: [
        { k: T("核心产品", "Main products"), v: T("云计算服务器（AI 服务器为主）、通信网络设备", "Cloud servers (mostly AI), networking equipment") },
        { k: T("其他业务", "Other businesses"), v: T("手机精密结构件", "Precision phone parts") },
        { k: T("客户", "Customers"), v: T("英伟达、微软、亚马逊、Meta 等", "NVIDIA, Microsoft, Amazon, Meta and others") },
        { k: T("周期性", "Cyclicality"), v: T("跟随云厂商资本开支", "Follows cloud companies' capital spending") },
        { k: T("定价方式", "Pricing"), v: T("成本加成", "Cost-plus") }
      ]
    },
    valuation: {
      take: T("股价在中性区间内。", "The price is inside the base case."),
      price: 60,
      basis: T("2026 年预测每股收益约 2.27 元", "2026E EPS ≈ CNY 2.27"),
      axis: [35, 85],
      bear: { low: 41, high: 45, pe: "18–20x", note: T("AI 资本开支放缓", "AI capital spending slows") },
      base: { low: 55, high: 64, pe: "24–28x", note: T("AI 服务器收入增长 50%", "AI server revenue +50%") },
      bull: { low: 75, high: 80, pe: "33–35x", note: T("新一代 GPU 平台份额提升", "Gains share on the next GPU platform") }
    },
    edge: {
      take: T("AI 让护城河明显变宽。", "AI has clearly widened the moat."),
      plus: [
        T("AI 服务器越来越复杂，小厂难以跟上。", "AI servers keep getting more complex; small players can't keep up."),
        T("海外产能布局满足客户「非中国」生产要求。", "Overseas plants meet customers' \"made outside China\" needs.")
      ],
      minus: [
        T("广达、纬创等台湾厂商竞争激烈。", "Taiwan's Quanta and Wistron compete hard."),
        T("云厂商自研芯片可能改变供应链格局。", "Cloud firms' own chips could reshape the supply chain.")
      ]
    },
    demand: {
      take: T("AI 算力需求是主要驱动力。", "AI computing demand is the main driver."),
      drivers: [
        { name: T("云计算（AI 服务器）", "Cloud (AI servers)"), share: 60, dir: "up" },
        { name: T("通信网络", "Networking"), share: 35, dir: "up" },
        { name: T("其他", "Other"), share: 5, dir: "flat" }
      ],
      note: T("美国四大云厂商 2026 年资本开支合计预计超过 4,000 亿美元，大部分投向 AI 数据中心。", "The four big US cloud firms are expected to spend over USD 400 bn in 2026, mostly on AI data centres.")
    },
    weak: {
      take: T("对单一周期依赖太大。", "Too dependent on one cycle."),
      items: [
        { level: "high", title: T("AI 周期", "AI cycle"), note: T("如果 AI 投资放缓，收入会明显下降。", "If AI investment slows, revenue would drop sharply.") },
        { level: "mid", title: T("客户集中", "Customer concentration"), note: T("前五大客户占收入大部分。", "The top five customers are most of revenue.") },
        { level: "mid", title: T("低毛利", "Thin margins"), note: T("毛利率约 7%，抗风险能力弱。", "About 7% gross margin leaves little cushion.") }
      ]
    },
    watch: [T("云厂商资本开支", "Cloud capital spending"), T("AI 服务器收入占比", "AI server share"), T("毛利率", "Gross margin")]
  },

  /* ====================================================== */
  {
    id: "002714",
    date: "2026-10-02",
    code: "002714.SZ",
    company: T("牧原股份", "Muyuan Foods"),
    industry: T("生猪养殖", "Hog farming"),
    sector: "consumer",
    mcap: 2460, mult: 3.5,
    position: T("全球最大的生猪养殖企业，年出栏约 7,000 万头，养殖成本行业最低", "The world's largest hog producer, selling about 70 m pigs a year at the industry's lowest cost"),
    verdict: "fair",
    trend: "stable",
    moatScore: 4,
    thesis: [
      T("自繁自养一体化模式让它的成本比行业平均低约 2 元/公斤。", "Its fully integrated model keeps costs about CNY 2/kg below the industry average."),
      T("猪价周期决定利润，成本优势决定能否穿越周期。", "Hog prices decide profit; cost advantage decides who survives the cycle."),
      T("2025 年起政策调控产能，猪价低位运行。", "Since 2025, policy has been cutting sow numbers, and hog prices are low.")
    ],
    stats: [
      { k: T("2024 营收", "2024 revenue"), v: T("1,379 亿元", "CNY 137.9 bn") },
      { k: T("2024 净利润", "2024 net profit"), v: T("179 亿元", "CNY 17.9 bn") },
      { k: T("生猪出栏", "Hogs sold"), v: T("约 7,160 万头", "~71.6 m") },
      { k: T("市净率", "P/B"), v: T("约 3.5 倍", "~3.5x") }
    ],
    moat: {
      take: T("成本领先是唯一但很强的护城河。", "Cost leadership is its one moat, and a strong one."),
      items: [
        { name: T("成本", "Cost"), score: 5, note: T("完全成本约 12 元/公斤，行业最低。", "All-in cost about CNY 12/kg, the industry's lowest.") },
        { name: T("一体化", "Integration"), score: 4, note: T("育种、饲料、养殖、屠宰全部自己做。", "Does breeding, feed, farming and slaughter in-house.") },
        { name: T("规模", "Scale"), score: 4, note: T("市场份额约 10%。", "About 10% market share.") },
        { name: T("定价权", "Pricing power"), score: 1, note: T("猪价由市场决定。", "Hog prices are set by the market.") }
      ]
    },
    product: {
      take: T("农产品，强周期，利润随猪价大幅波动。", "An agricultural commodity: very cyclical, with profit swinging on hog prices."),
      rows: [
        { k: T("核心产品", "Main products"), v: T("商品猪约 9 成，屠宰肉食", "Live hogs ~90%, pork processing") },
        { k: T("客户", "Customers"), v: T("屠宰场、肉食加工企业", "Slaughterhouses and meat processors") },
        { k: T("周期性", "Cyclicality"), v: T("约 3–4 年一个猪周期", "A hog cycle every 3–4 years") },
        { k: T("定价方式", "Pricing"), v: T("随生猪市场价", "Follows the market hog price") },
        { k: T("成本", "Costs"), v: T("饲料（玉米、豆粕）约占 6 成", "Feed (corn, soymeal) ~60% of cost") }
      ]
    },
    valuation: {
      take: T("股价在中性区间内。", "The price is inside the base case."),
      metric: "PB",
      price: 45,
      basis: T("每股净资产约 12.8 元", "Book value per share ≈ CNY 12.8"),
      axis: [25, 65],
      bear: { low: 31, high: 34, pe: "2.4–2.6x", note: T("猪价长期低于 13 元/公斤", "Hog price stays below CNY 13/kg") },
      base: { low: 41, high: 47, pe: "3.2–3.7x", note: T("产能调控后猪价回升", "Prices recover after capacity cuts") },
      bull: { low: 56, high: 58, pe: "4.4–4.5x", note: T("新一轮猪周期上行", "A new upswing in the hog cycle") }
    },
    edge: {
      take: T("成本优势稳定，规模扩张受政策限制。", "Its cost lead is stable; expansion is limited by policy."),
      plus: [
        T("智能化养殖继续降低成本。", "Smart farming keeps lowering costs."),
        T("屠宰业务扩大，延伸产业链。", "Growing slaughter business extends the value chain.")
      ],
      minus: [
        T("政策要求头部企业控制产能。", "Policy asks leading producers to limit capacity."),
        T("温氏等对手成本也在下降。", "Rivals like Wens are also lowering costs.")
      ]
    },
    demand: {
      take: T("猪肉需求总量稳定，略有下降。", "Total pork demand is stable, slightly declining."),
      drivers: [
        { name: T("生猪销售", "Hog sales"), share: 88, dir: "flat" },
        { name: T("屠宰肉食", "Pork processing"), share: 10, dir: "up" },
        { name: T("其他", "Other"), share: 2, dir: "flat" }
      ],
      note: T("中国每年消费猪肉约 5,500 万吨，占全球一半左右；行业集中度仍低，前十大企业约占 25%。", "China eats about 55 mt of pork a year, around half the world's total; the top ten producers hold only about 25%.")
    },
    weak: {
      take: T("周期和疫病是主要风险。", "The cycle and disease are the main risks."),
      items: [
        { level: "high", title: T("猪周期", "Hog cycle"), note: T("猪价低迷时可能亏损。", "Can lose money when hog prices are low.") },
        { level: "mid", title: T("疫病", "Disease"), note: T("非洲猪瘟等疫病会造成重大损失。", "African swine fever and other diseases can cause big losses.") },
        { level: "mid", title: T("负债", "Debt"), note: T("资产负债率约 58%。", "Debt-to-assets ratio about 58%.") }
      ]
    },
    watch: [T("生猪价格", "Hog price"), T("完全成本", "All-in cost"), T("能繁母猪存栏", "Breeding sow numbers")]
  }
);

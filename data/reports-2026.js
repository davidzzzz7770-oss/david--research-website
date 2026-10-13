/* Notes written in 2026. price in CNY per share, mcap in CNY 100 m (亿元), mult = P/E unless metric says otherwise. */
window.REPORTS.push(
  {
    id: "002475", date: "2026-01-09", code: "002475.SZ",
    company: T("立讯精密", "Luxshare Precision"), industry: T("消费电子制造", "Electronics manufacturing"), sector: "tech",
    price: 55, mcap: 3990, mult: 24, moatScore: 4, trend: "widening", verdict: "fair",
    why: T("AirPods 很多是它组装的。想看看「给苹果打工」的公司是什么样。", "It assembles many AirPods. I wanted to see what a company that \"works for Apple\" looks like."),
    money: [
      T("帮苹果组装 AirPods、iPhone、手表和零部件，约占 7 成以上收入。", "Assembles AirPods, iPhones, watches and parts for Apple, over 70% of revenue."),
      T("新业务是汽车线束和 AI 服务器用的连接线。", "Newer businesses: car wiring and cables for AI servers.")
    ],
    moat: [
      T("精密制造能力强，新产品良率能很快做上去。", "Strong precision manufacturing; it gets yields up on new products quickly."),
      T("进苹果供应链要认证很久，苹果不会轻易换掉它。", "Getting into Apple's supply chain takes a long time, so Apple won't drop it lightly.")
    ],
    value: T("股价约 55 元，市盈率约 24 倍。", "About CNY 55, around 24x earnings."),
    insight: [
      T("收入 2,688 亿，比茅台还多，但毛利率只有 11%，茅台是 92%。同样是龙头，赚钱方式完全不同。", "Revenue of CNY 268.8 bn, more than Moutai, but gross margin is just 11% versus Moutai's 92%. Both are leaders, with completely different ways of making money."),
      T("代工厂的命运很大程度握在客户手里：客户一句话就能把订单转走。", "A contract manufacturer's fate sits largely in its customer's hands; one decision can move the orders elsewhere.")
    ],
    question: T("苹果把产能搬去印度和越南，立讯能跟着搬过去吗？", "If Apple moves production to India and Vietnam, can Luxshare follow?"),
    risk: [
      T("太依赖苹果一个客户。", "Too dependent on one customer, Apple."),
      T("毛利率低，出点问题利润就没了。", "Thin margins mean a small problem can wipe out profit.")
    ]
  },

  {
    id: "600030", date: "2026-01-23", code: "600030.SH",
    company: T("中信证券", "CITIC Securities"), industry: T("证券", "Brokerage"), sector: "finance",
    price: 29, mcap: 4300, mult: 1.45, metric: "PB", moatScore: 4, trend: "widening", verdict: "fair",
    why: T("2025 年 A 股很热闹，我想看看券商在牛市里赚了多少。", "The A-share market was busy in 2025; I wanted to see how much brokers earned."),
    money: [
      T("帮人买卖股票收佣金。", "Commissions on buying and selling shares."),
      T("帮公司上市、发债收承销费，还有自己拿钱投资。", "Fees for IPOs and bond issues, plus investing its own money.")
    ],
    moat: [
      T("国内最大的券商，资本最多，大项目都找它。", "China's largest broker with the most capital, so it gets the big deals."),
      T("机构客户（基金、保险）覆盖最全。", "The widest coverage of institutional clients like funds and insurers.")
    ],
    value: T("股价约 29 元，市净率约 1.45 倍。", "About CNY 29, around 1.45x book value."),
    insight: [
      T("券商就像股市的温度计：牛市赚得最多，熊市最惨。买券商股其实就是在押股市会不会继续热。", "A broker is a thermometer for the stock market: it earns most in bull markets and suffers most in bear markets. Buying one is basically a bet that the market stays hot."),
      T("散户炒股选券商主要看佣金便宜，所以普通经纪业务其实没什么护城河，真正的优势在机构业务。", "Retail traders pick brokers mainly on low fees, so ordinary brokerage has little moat. The real edge is in institutional business.")
    ],
    question: T("中国有 100 多家券商，为什么这么多？会不会越合并越少？", "China has over 100 brokers. Why so many, and will mergers shrink that number?"),
    risk: [
      T("股市转冷，利润可能直接减半。", "If the market cools, profit could halve."),
      T("国泰君安和海通合并后变成一个强对手。", "The Guotai Junan–Haitong merger created a strong rival.")
    ]
  },

  {
    id: "300760", date: "2026-02-06", code: "300760.SZ",
    company: T("迈瑞医疗", "Mindray"), industry: T("医疗器械", "Medical devices"), sector: "health",
    price: 200, mcap: 2420, mult: 25, moatScore: 4, trend: "stable", verdict: "fair",
    why: T("医院病床边的监护仪很多是迈瑞的，想看看医疗器械和药企有什么不同。", "Many bedside monitors in hospitals are Mindray's. I wanted to compare a device maker with a drugmaker."),
    money: [
      T("卖监护仪、呼吸机、超声机给医院。", "Sells patient monitors, ventilators and ultrasound machines to hospitals."),
      T("卖验血用的检测仪器和试剂，试剂要一直买。", "Sells blood-testing machines and the reagents they need, which hospitals keep buying.")
    ],
    moat: [
      T("产品线全，医院可以一次买齐。", "A full product range, so hospitals can buy everything in one place."),
      T("检测仪器和试剂是配套的，用了就不好换。", "Machines and reagents go together; once a hospital uses them, switching is hard.")
    ],
    value: T("股价约 200 元，市盈率约 25 倍，比它前几年便宜很多。", "About CNY 200, around 25x earnings, much cheaper than a few years ago."),
    insight: [
      T("卖检测仪器像卖剃须刀，试剂像刀片：机器只卖一次，试剂每天都在用。这种生意收入更稳。", "The testing machine is the razor and the reagent is the blade: the machine sells once, the reagent gets used every day. That makes revenue steadier."),
      T("和恒瑞比，迈瑞不用赌某一个新产品成不成功，风险更分散。", "Compared with Hengrui, Mindray doesn't depend on any single new product succeeding, so its risk is more spread out.")
    ],
    question: T("医院预算紧张的时候，会先少买设备还是先少买药？", "When hospital budgets are tight, do they cut equipment first or drugs first?"),
    risk: [
      T("国内医院采购变慢。", "Chinese hospitals are buying more slowly."),
      T("试剂进入集采，价格被压低。", "Reagent prices are being pushed down by bulk-buying programmes.")
    ]
  },

  {
    id: "600309", date: "2026-02-20", code: "600309.SH",
    company: T("万华化学", "Wanhua Chemical"), industry: T("化工", "Chemicals"), sector: "resources",
    price: 70, mcap: 2190, mult: 18, moatScore: 4, trend: "stable", verdict: "fair",
    why: T("听说它是全球最大的 MDI 生产商，但我连 MDI 是什么都不知道，所以想查一下。", "I heard it's the world's biggest MDI maker, and I didn't even know what MDI was, so I looked it up."),
    money: [
      T("MDI 是做聚氨酯的原料，用在冰箱保温层、建筑保温板、鞋底、汽车座椅。", "MDI is a raw material for polyurethane, used in fridge insulation, building insulation panels, shoe soles and car seats."),
      T("还做石化产品和新材料。", "Also makes petrochemicals and new materials.")
    ],
    moat: [
      T("MDI 生产工艺很难，全世界只有少数几家能做。", "MDI is very hard to make; only a handful of companies in the world can."),
      T("万华成本全球最低。", "Wanhua has the lowest cost in the world.")
    ],
    value: T("股价约 70 元，市盈率约 18 倍。", "About CNY 70, around 18x earnings."),
    insight: [
      T("全世界只有几家能做，听起来像垄断，但它还是周期股，因为下游是房子、冰箱和汽车，这些东西卖不好它也卖不好。", "Only a few firms can make it, which sounds like a monopoly, but it's still cyclical: its customers make houses, fridges and cars, and when they struggle, so does Wanhua."),
      T("技术壁垒高不代表利润稳。", "A high technical barrier doesn't guarantee stable profit.")
    ],
    question: T("新做的石化业务一直不怎么赚钱，为什么还要做？", "Its newer petrochemical business doesn't make much money. Why keep doing it?"),
    risk: [
      T("化工品价格下跌。", "Falling chemical prices."),
      T("欧美对中国化工品反倾销。", "Anti-dumping duties on Chinese chemicals in Europe and the US.")
    ]
  },

  {
    id: "600941", date: "2026-03-06", code: "600941.SH",
    company: T("中国移动", "China Mobile"), industry: T("通信运营", "Telecom"), sector: "infra",
    price: 105, mcap: 22600, mult: 16, moatScore: 4, trend: "stable", verdict: "fair",
    why: T("我自己的手机卡就是移动的。全球用户最多的运营商，市值也是 A 股最大之一。", "My own SIM card is China Mobile. It has more users than any operator in the world and is one of the biggest A-share companies."),
    money: [
      T("手机套餐约占一半收入。", "Mobile plans are about half of revenue."),
      T("家庭宽带、给企业和政府做网络和云服务。", "Home broadband, plus networks and cloud services for companies and government.")
    ],
    moat: [
      T("运营商牌照只有几家，新公司进不来。", "Only a few operators have licences; new players can't get in."),
      T("基站全国最多，信号覆盖最好。", "The most base stations in the country and the best coverage.")
    ],
    value: T("股价约 105 元，市盈率约 16 倍，股息率约 5%。", "About CNY 105, around 16x earnings, with a ~5% dividend yield."),
    insight: [
      T("几乎每个人都在用它，但它增长很慢，因为大家已经都有手机了。它更像水电费，不像科技公司。", "Almost everyone uses it, yet it barely grows, because everyone already has a phone. It's more like a utility bill than a tech company."),
      T("它的市值约 2.26 万亿，比茅台还大，靠的是稳定，不是增长。", "It's worth about CNY 2.26 trn, more than Moutai, and that comes from stability, not growth.")
    ],
    question: T("AI 应用多了，流量需求会不会突然大涨，让它重新增长？", "Could AI apps cause a jump in data use that gets it growing again?"),
    risk: [
      T("个人业务已经饱和。", "The consumer business is saturated."),
      T("国家要求「提速降费」，很难涨价。", "Government pressure to cut fees makes price rises hard.")
    ]
  },

  {
    id: "601668", date: "2026-03-20", code: "601668.SH",
    company: T("中国建筑", "China State Construction"), industry: T("建筑", "Construction"), sector: "infra",
    price: 5.6, mcap: 2310, mult: 5, moatScore: 3, trend: "narrowing", verdict: "fair-low",
    why: T("这是我开始做笔记的原因之一：它营收全世界建筑公司第一，市值却很小。", "This is one reason I started these notes: it has the highest revenue of any builder in the world, yet a small market value."),
    money: [
      T("盖房子约占 6 成，修路修桥等基建约 3 成。", "Buildings are about 60%, roads, bridges and other infrastructure about 30%."),
      T("旗下中海地产也做房地产开发。", "Its China Overseas unit also develops property.")
    ],
    moat: [
      T("规模最大、资质最全，超大项目只有它能接。", "Largest scale and most licences; only it can take on the biggest projects."),
      T("央企背景，借钱成本低。", "As a state company, it borrows cheaply.")
    ],
    value: T("股价约 5.6 元，市盈率只有 5 倍左右，是我看过最便宜的。", "About CNY 5.6, only about 5x earnings, the cheapest I've seen."),
    insight: [
      T("营收 2.19 万亿，是茅台的 12 倍多；利润 462 亿，比茅台的 862 亿少；市值约 2,300 亿，只有茅台的八分之一。规模大不等于值钱。", "Revenue of CNY 2.19 trn is over 12x Moutai's, profit of CNY 46.2 bn is lower than Moutai's 86.2 bn, and market value of ~CNY 230 bn is one-eighth of Moutai's. Being big doesn't make a company valuable."),
      T("签到合同不等于收到钱。它很多钱还挂在应收账款上，市场担心能不能收回来。", "Signing a contract isn't the same as getting paid. Much of its money is still in receivables, and the market worries it won't all come back.")
    ],
    question: T("5 倍市盈率是不是太低了？还是市场看到了我没看到的问题？", "Is 5x too low, or is the market seeing a problem I'm missing?"),
    risk: [
      T("房地产下行，新开工的房子越来越少。", "The property slump means fewer new buildings."),
      T("地方政府付款慢。", "Local governments pay slowly.")
    ]
  },

  {
    id: "002415", date: "2026-04-03", code: "002415.SZ",
    company: T("海康威视", "Hikvision"), industry: T("安防", "Security cameras"), sector: "tech",
    price: 30, mcap: 2750, mult: 21, moatScore: 4, trend: "stable", verdict: "fair",
    why: T("学校、小区、马路上的摄像头很多是海康的。", "Many of the cameras at schools, housing estates and on roads are Hikvision's."),
    money: [
      T("卖监控摄像头、录像设备和管理软件。", "Sells surveillance cameras, recorders and management software."),
      T("新业务有萤石智能家居、仓库机器人、汽车摄像头。", "Newer lines: EZVIZ smart home, warehouse robots, car cameras.")
    ],
    moat: [
      T("全球视频监控市场份额约四分之一，规模最大。", "About a quarter of the global video surveillance market, the largest."),
      T("经销网络覆盖很多小客户。", "Its dealer network reaches lots of small customers.")
    ],
    value: T("股价约 30 元，市盈率约 21 倍。", "About CNY 30, around 21x earnings."),
    insight: [
      T("摄像头已经卖到全世界第一了，下一步增长只能靠新东西。一家公司做到第一之后，最难的是找到下一个第一。", "It's already No.1 in cameras worldwide, so growth has to come from something new. After a company reaches the top, the hardest part is finding the next thing to be top at."),
      T("它把新业务一个个分拆出去单独上市，好像是想让市场看清每块值多少钱。", "It keeps spinning off new businesses as separate listings, seemingly so the market can see what each part is worth.")
    ],
    question: T("新业务都分拆出去以后，母公司会不会只剩下慢慢不增长的老业务？", "If all the new businesses get spun off, is the parent left with just the slow old business?"),
    risk: [
      T("被列入美国实体清单，买芯片和海外销售受限。", "On the US Entity List, which limits chip purchases and overseas sales."),
      T("国内政府项目减少。", "Fewer domestic government projects.")
    ]
  },

  {
    id: "600887", date: "2026-05-29", code: "600887.SH",
    company: T("伊利股份", "Yili Group"), industry: T("乳制品", "Dairy"), sector: "consumer",
    price: 28, mcap: 1770, mult: 17, moatScore: 4, trend: "stable", verdict: "fair-low",
    why: T("考完试回来的第一期，想挑一个熟悉的东西。超市里的牛奶很多是伊利的。", "First note after exams; I wanted something familiar. A lot of the milk in supermarkets is Yili's."),
    money: [
      T("液态奶（纯牛奶、酸奶）约占 7 成。", "Liquid milk (plain milk, yoghurt) is about 70%."),
      T("还有奶粉、冰淇淋、奶酪。", "Plus milk powder, ice cream and cheese.")
    ],
    moat: [
      T("渠道覆盖约 170 万个零售点，连村里的小店都有。", "Reaches about 1.7 m retail outlets, down to village shops."),
      T("金典、安慕希这些牌子大家都认识。", "Brands like Satine and Ambrosial are household names.")
    ],
    value: T("股价约 28 元，市盈率约 17 倍，股息率约 4.5%。", "About CNY 28, around 17x earnings, with a ~4.5% dividend yield."),
    insight: [
      T("出生人口下降直接影响婴儿奶粉的需求。原来人口数据也能用来分析一家公司，这是我以前没想到的。", "Falling births directly hit demand for infant formula. I hadn't realised population data could be used to analyse a company."),
      T("和海天一样，日常消费品增长慢，市场就把它当分红股看。", "Like Haitian, a slow-growing everyday product gets treated by the market as a dividend stock.")
    ],
    question: T("中国人均喝奶量只有日本一半左右，这个差距会慢慢缩小吗？", "Chinese people drink about half as much milk per person as Japanese people. Will that gap close?"),
    risk: [
      T("液态奶需求在下降。", "Liquid milk demand is falling."),
      T("和蒙牛打价格战，促销费用高。", "A price war with Mengniu keeps promotion costs high.")
    ]
  },

  {
    id: "688981", date: "2026-06-12", code: "688981.SH",
    company: T("中芯国际", "SMIC"), industry: T("芯片制造", "Chip manufacturing"), sector: "tech",
    price: 105, mcap: 8390, mult: 5.5, metric: "PB", moatScore: 4, trend: "widening", verdict: "fair",
    why: T("新闻里经常说芯片「卡脖子」，中芯国际是国内最大的芯片代工厂。", "The news often talks about China being choked on chips. SMIC is the country's largest chip foundry."),
    money: [
      T("帮芯片设计公司把芯片生产出来，按晶圆收费。", "Manufactures chips for companies that design them, charging per wafer."),
      T("约 8 成客户是中国公司。", "About 80% of customers are Chinese.")
    ],
    moat: [
      T("国内唯一能大规模生产先进芯片的工厂。", "The only factory in China making advanced chips at scale."),
      T("芯片公司换代工厂要重新验证，很麻烦。", "Switching foundries means re-qualifying designs, which is a hassle.")
    ],
    value: T("股价约 105 元，市净率约 5.5 倍，市盈率超过 100 倍。", "About CNY 105, around 5.5x book value and over 100x earnings."),
    insight: [
      T("它的估值不太看利润，更像是看「重要性」：国家需要它，国内客户也只能找它。", "Its valuation isn't really about profit; it's about importance. The country needs it, and domestic customers have few alternatives."),
      T("这让我意识到股价反映的不只是赚钱能力，也包括政策和战略地位。", "That made me realise a share price reflects not just earning power, but also policy and strategic position.")
    ],
    question: T("这种估值合理吗？我说不清。", "Is a valuation like this reasonable? I honestly can't say."),
    risk: [
      T("买不到最先进的光刻机，先进制程受限。", "It can't buy the most advanced lithography machines, which limits its best chips."),
      T("工厂越建越多，折旧压低利润。", "More factories mean more depreciation, squeezing profit.")
    ]
  },

  {
    id: "002371", date: "2026-06-26", code: "002371.SZ",
    company: T("北方华创", "NAURA Technology"), industry: T("半导体设备", "Chip equipment"), sector: "tech",
    price: 450, mcap: 2400, mult: 26, moatScore: 4, trend: "widening", verdict: "fair",
    why: T("看完中芯国际，想知道它的工厂里用的机器是谁造的。", "After SMIC, I wanted to know who builds the machines inside its factories."),
    money: [
      T("卖芯片生产设备：刻蚀、镀膜、清洗等。", "Sells chipmaking tools for etching, deposition, cleaning and more."),
      T("一台设备几百万到几千万元。", "Each tool costs millions to tens of millions of yuan.")
    ],
    moat: [
      T("国内产品线最全的芯片设备公司。", "China's widest range of chip equipment."),
      T("设备进工厂要验证一两年，先进去的有优势。", "Tools take a year or two to qualify, so whoever gets in first has an advantage.")
    ],
    value: T("股价约 450 元，市盈率约 26 倍。", "About CNY 450, around 26x earnings."),
    insight: [
      T("淘金热时卖铲子的人最稳。不管哪家芯片公司最后赢，工厂都要买设备。", "In a gold rush, selling shovels is the safest business. Whichever chip company wins, the factories still need equipment."),
      T("中芯国际和北方华创放在一起看，就是一条产业链的上下游。", "Looking at SMIC and NAURA together shows two links in the same supply chain.")
    ],
    question: T("等国产替代做得差不多了，它的增长从哪里来？", "Once China has mostly replaced foreign tools, where does its growth come from?"),
    risk: [
      T("高端设备和美国公司还有差距。", "Its high-end tools still trail US makers."),
      T("一些核心零件还要进口。", "Some key parts are still imported.")
    ]
  },

  {
    id: "601888", date: "2026-07-10", code: "601888.SH",
    company: T("中国中免", "China Tourism Group Duty Free"), industry: T("免税店", "Duty-free retail"), sector: "consumer",
    price: 70, mcap: 1450, mult: 30, moatScore: 4, trend: "stable", verdict: "fair",
    why: T("暑假很多人去海南买免税化妆品，中免是国内免税店最大的公司。", "Lots of people go to Hainan in summer to buy duty-free cosmetics, and CTG Duty Free is the biggest operator."),
    money: [
      T("在海南、机场和口岸开免税店，卖化妆品、名牌包、烟酒。", "Runs duty-free shops in Hainan, airports and border crossings, selling cosmetics, luxury goods, tobacco and liquor."),
      T("化妆品约占一半销售额。", "Cosmetics are about half of sales.")
    ],
    moat: [
      T("免税牌照由国家批，数量很少。", "Duty-free licences are state-approved and scarce."),
      T("规模大，进货价格比别人低。", "Its scale gets it better prices from brands.")
    ],
    value: T("股价约 70 元，市盈率约 30 倍。", "About CNY 70, around 30x earnings."),
    insight: [
      T("它的护城河是一张牌照，是政策给的，也可能被政策拿走或者分给别人。海南后来就多了好几家有牌照的公司。", "Its moat is a licence: policy gave it, and policy can take it away or hand it to others. Hainan later added several more licence holders."),
      T("和茅台的护城河比，茅台的产区是天生的，中免的牌照是批出来的。", "Compared with Moutai, whose moat comes from geography, CTG's moat is granted by the government.")
    ],
    question: T("政策给的护城河，算不算真正的护城河？", "Does a moat granted by policy count as a real moat?"),
    risk: [
      T("大家消费变谨慎，买化妆品和奢侈品少了。", "People are spending more cautiously on cosmetics and luxury."),
      T("机场租金很贵。", "Airport rents are expensive.")
    ]
  },

  {
    id: "600031", date: "2026-07-24", code: "600031.SH",
    company: T("三一重工", "Sany Heavy Industry"), industry: T("工程机械", "Construction machinery"), sector: "newenergy",
    price: 22, mcap: 1860, mult: 18, moatScore: 4, trend: "widening", verdict: "fair",
    why: T("工地上的黄色挖掘机很多是三一的，听说挖掘机销量能反映经济冷暖。", "Many of the yellow excavators on building sites are Sany's, and I'd heard excavator sales can show how the economy is doing."),
    money: [
      T("卖挖掘机约占 4 成，还有混凝土泵车、起重机。", "Excavators are about 40%, plus concrete pump trucks and cranes."),
      T("海外收入已经超过 6 成。", "Over 60% of revenue now comes from abroad.")
    ],
    moat: [
      T("国内挖掘机份额约 3 成，排第一。", "About 30% of China's excavator market, No.1."),
      T("售后和配件网络覆盖 150 多个国家。", "After-sales and parts network in 150+ countries.")
    ],
    value: T("股价约 22 元，市盈率约 18 倍。", "About CNY 22, around 18x earnings."),
    insight: [
      T("挖掘机卖得多，说明工地多、基建多，所以挖掘机销量被叫作经济的「晴雨表」。", "More excavator sales mean more construction, which is why excavator sales are called a barometer of the economy."),
      T("一家中国公司现在主要在国外赚钱。国内房地产不行了，它就去东南亚、中东、非洲找机会。", "A Chinese company now earns most of its money abroad. With property weak at home, it went to Southeast Asia, the Middle East and Africa.")
    ],
    question: T("2015–2020 年卖出去的挖掘机到了更换期，这波更新能撑多久？", "Machines sold in 2015–2020 are due for replacement. How long will that wave last?"),
    risk: [
      T("周期性强，行业不好时收入能少一半。", "Very cyclical; in a downturn revenue can halve."),
      T("很多设备是分期卖的，客户付不上钱就是坏账。", "Many machines are sold on instalments; if customers can't pay, that's a bad debt.")
    ]
  },

  {
    id: "300274", date: "2026-08-07", code: "300274.SZ",
    company: T("阳光电源", "Sungrow Power"), industry: T("光伏逆变器与储能", "Solar inverters & storage"), sector: "newenergy",
    price: 160, mcap: 3310, mult: 21, moatScore: 4, trend: "widening", verdict: "fair",
    why: T("光伏板公司都在亏钱，但阳光电源还在赚钱，我想知道为什么。", "Solar panel makers are losing money, yet Sungrow is still profitable. I wanted to know why."),
    money: [
      T("储能系统（给电网存电）约占 4 成，已经是最大的业务。", "Storage systems for the grid are about 40%, now its biggest business."),
      T("逆变器（把太阳能板的电变成能用的电）约占 3 成。", "Inverters, which turn solar panel power into usable electricity, are about 30%.")
    ],
    moat: [
      T("做了近 30 年电力电子，技术积累深。", "Nearly 30 years in power electronics."),
      T("海外认证和渠道多，欧美大项目经验丰富。", "Lots of overseas certifications and experience with big Western projects.")
    ],
    value: T("股价约 160 元，市盈率约 21 倍。", "About CNY 160, around 21x earnings."),
    insight: [
      T("同样是光伏行业，做太阳能板的卷到亏钱，做逆变器和储能的却赚钱。在产业链上站在哪个位置，差别非常大。", "Same solar industry, but panel makers are losing money while inverter and storage makers profit. Where you sit in the supply chain makes a huge difference."),
      T("太阳能和风能发电不稳定，越多就越需要储能，所以它其实是在卖新能源的「配套」。", "Solar and wind are intermittent, so the more of them there are, the more storage is needed. Sungrow is really selling the add-on renewables require.")
    ],
    question: T("宁德时代也开始直接卖储能系统，阳光电源还能保持优势吗？", "CATL now sells storage systems directly too. Can Sungrow keep its lead?"),
    risk: [
      T("美国关税和政策。", "US tariffs and policy."),
      T("储能也开始打价格战。", "Storage is starting to see a price war too.")
    ]
  },

  {
    id: "002352", date: "2026-08-21", code: "002352.SZ",
    company: T("顺丰控股", "SF Holding"), industry: T("快递", "Express delivery"), sector: "infra",
    price: 40, mcap: 1990, mult: 15, moatScore: 4, trend: "stable", verdict: "fair-low",
    why: T("寄急件大家都会选顺丰，虽然它最贵。", "Everyone picks SF for urgent parcels, even though it's the most expensive."),
    money: [
      T("时效快递（第二天就到）约占一半。", "Time-definite express (next-day) is about half."),
      T("还有供应链、国际快递、冷链。", "Plus supply chain, international express and cold chain.")
    ],
    moat: [
      T("有自己的货运机场和约 90 架货机，别人要十几年才能建起来。", "Owns a cargo airport and about 90 freighters; others would need a decade or more to build that."),
      T("全部自营，服务质量稳定。", "Runs everything itself, so service is consistent.")
    ],
    value: T("股价约 40 元，市盈率约 15 倍。", "About CNY 40, around 15x earnings."),
    insight: [
      T("顺丰选择不跟极兔、中通打价格战。便宜快递和顺丰其实是两个不同的市场。", "SF chooses not to join J&T and ZTO's price war. Cheap parcels and SF are really two different markets."),
      T("前几年它花大钱建机场，利润很低；现在建完了，钱开始变多，开始给股东分红。投入期和收获期的利润差别很大。", "A few years ago it spent heavily on the airport and profit was low; now that it's built, cash is flowing and dividends are up. Profit looks very different in the building phase and the harvest phase.")
    ],
    question: T("电商快递量那么大，顺丰为什么不去抢？抢了会不会伤害品牌？", "E-commerce parcels are a huge market. Why doesn't SF go after it? Would that hurt its brand?"),
    risk: [
      T("京东物流在高端市场竞争。", "JD Logistics competes at the premium end."),
      T("经济不好时商务件变少。", "A weak economy means fewer business parcels.")
    ]
  },

  {
    id: "600019", date: "2026-09-04", code: "600019.SH",
    company: T("宝钢股份", "Baoshan Iron & Steel"), industry: T("钢铁", "Steel"), sector: "resources",
    price: 7.2, mcap: 1560, mult: 0.77, metric: "PB", moatScore: 3, trend: "stable", verdict: "fair-low",
    why: T("钢铁行业听说很惨，想看看行业里最好的公司是什么样。", "I'd heard steel is in bad shape, so I wanted to see what the best company in it looks like."),
    money: [
      T("卖钢材，最赚钱的是汽车用的钢板和电网用的硅钢。", "Sells steel; the most profitable products are car body sheet and electrical steel for the grid."),
      T("每年产钢约 5,000 万吨。", "Makes about 50 m tonnes a year.")
    ],
    moat: [
      T("高端汽车板和硅钢国内第一，车企认证很久才会用。", "No.1 in China for high-end car sheet and electrical steel; carmakers take a long time to qualify a supplier."),
      T("普通钢材就没什么优势，谁都能做。", "Ordinary steel has no real edge; anyone can make it.")
    ],
    value: T("股价约 7.2 元，市净率约 0.77 倍，市场给的价格比账面资产还低。", "About CNY 7.2, around 0.77x book value; the market values it below its accounting assets."),
    insight: [
      T("行业整体很差，但宝钢做高端产品还能赚钱。差行业里也有好位置。", "The industry overall is in poor shape, but Baosteel still makes money on high-end products. Even a bad industry has good spots."),
      T("这跟阳光电源有点像：关键不是在哪个行业，而是在行业里做什么。", "A bit like Sungrow: what matters is less the industry than what you do inside it.")
    ],
    question: T("市净率低于 1，是市场觉得它的工厂不值那么多钱吗？", "Below 1x book: does the market think its plants aren't worth what the books say?"),
    risk: [
      T("中国钢铁产能太多。", "China has too much steel capacity."),
      T("铁矿石要进口，价格波动大。", "Iron ore is imported and its price swings a lot.")
    ]
  },

  {
    id: "601138", date: "2026-09-18", code: "601138.SH",
    company: T("工业富联", "Foxconn Industrial Internet"), industry: T("AI 服务器", "AI servers"), sector: "tech",
    price: 60, mcap: 11900, mult: 26, moatScore: 4, trend: "widening", verdict: "fair",
    why: T("AI 很火，大家都在说英伟达，我想找一家 A 股里跟 AI 直接相关的公司。", "AI is everywhere and everyone talks about NVIDIA. I wanted an A-share company directly tied to AI."),
    money: [
      T("帮英伟达、微软、亚马逊组装服务器，AI 服务器是最大的增长来源。", "Assembles servers for NVIDIA, Microsoft, Amazon and others; AI servers are the biggest source of growth."),
      T("还做网络设备和手机零件。", "Also makes networking gear and phone parts.")
    ],
    moat: [
      T("全球服务器代工规模最大，工厂遍布中国、墨西哥、美国。", "The world's largest server manufacturer, with plants in China, Mexico and the US."),
      T("AI 服务器越来越复杂，小厂做不了。", "AI servers keep getting more complex; small manufacturers can't keep up.")
    ],
    value: T("股价约 60 元，市盈率约 26 倍。", "About CNY 60, around 26x earnings."),
    insight: [
      T("AI 热潮里赚钱最多的是英伟达，工业富联作为组装厂也跟着收入暴涨，但毛利率只有 7% 左右，分到的是辛苦钱。", "NVIDIA makes the most from the AI boom. Foxconn Industrial's revenue has surged too as the assembler, but with a gross margin around 7% it earns the hard-work share."),
      T("和立讯精密很像：收入大、利润薄，命运跟着大客户走。", "Much like Luxshare: big revenue, thin margin, and its fate follows its big customers.")
    ],
    question: T("如果云厂商明年减少 AI 投资，它的收入会掉多少？", "If cloud companies cut AI spending next year, how much would its revenue fall?"),
    risk: [
      T("太依赖 AI 投资这一个周期。", "Too dependent on one cycle: AI spending."),
      T("客户集中在几家大公司。", "Customers are concentrated in a few giants.")
    ]
  },

  {
    id: "002714", date: "2026-10-02", code: "002714.SZ",
    company: T("牧原股份", "Muyuan Foods"), industry: T("生猪养殖", "Hog farming"), sector: "consumer",
    price: 45, mcap: 2460, mult: 3.5, metric: "PB", moatScore: 4, trend: "stable", verdict: "fair",
    why: T("猪肉价格经常上新闻，牧原是全世界养猪最多的公司。", "Pork prices are always in the news, and Muyuan raises more pigs than any company in the world."),
    money: [
      T("养猪卖猪，约占 9 成收入，每年卖出约 7,000 万头。", "Raises and sells pigs, about 90% of revenue; around 70 m a year."),
      T("开始做屠宰，卖猪肉。", "Has started slaughtering and selling pork.")
    ],
    moat: [
      T("养一公斤猪的成本比同行平均低约 2 元，行业最低。", "Its cost per kilo is about CNY 2 below the industry average, the lowest."),
      T("从育种、饲料到养殖全部自己做。", "Does everything in-house, from breeding and feed to farming.")
    ],
    value: T("股价约 45 元，市净率约 3.5 倍。猪价不好时利润波动很大，所以我看市净率。", "About CNY 45, around 3.5x book value. Profit swings a lot with pig prices, so I used book value."),
    insight: [
      T("猪价它决定不了，唯一能控制的是成本。猪价低时别人亏钱，它还能赚一点，然后别人退出，它活下来。", "It can't control pig prices; the only thing it controls is cost. When prices are low, others lose money while Muyuan still makes a little, and then the others quit while it survives."),
      T("这跟紫金矿业、中国神华是一个道理：卖的东西价格由市场定的时候，成本最低的人赢。", "Same logic as Zijin Mining and China Shenhua: when the market sets the price, the lowest-cost producer wins."),
      T("写完 28 期回头看，护城河好像就那几种：品牌（茅台）、成本（牧原、美的）、牌照（中国移动、中免）、换起来麻烦（招行、迈瑞）。", "Looking back over 28 notes, moats seem to come in just a few kinds: brand (Moutai), cost (Muyuan, Midea), licences (China Mobile, CTG Duty Free), and switching hassle (CMB, Mindray).")
    ],
    question: T("国家现在要求大猪企控制产能，这会不会限制它继续长大？", "The government now asks big hog farmers to limit capacity. Will that cap Muyuan's growth?"),
    risk: [
      T("猪价长期低迷。", "Pig prices staying low for a long time."),
      T("猪瘟等疫病。", "Diseases like African swine fever.")
    ]
  }
);

/* All notes. price in CNY per share and mcap in CNY 100 m (亿元), both as of the note date; mult = P/E unless metric says otherwise. */
window.REPORTS.push(
  {
    id: "600519", date: "2025-08-08", chapter: "worth", code: "600519.SH",
    company: T("贵州茅台", "Kweichow Moutai"), industry: T("白酒", "Baijiu"), sector: "consumer",
    price: 1430, mcap: 17960, mult: 20.8, moatScore: 5, trend: "stable", verdict: "fair-low",
    why: T("茅台是 A 股最值钱的消费公司，卖的只是酒。我想先弄清楚一件事：市场到底在为什么付钱？", "Moutai is the most valuable consumer company in China, and it only sells liquor. I wanted to answer one thing first: what is the market actually paying for?"),
    money: [
      T("飞天茅台一款酒，贡献大约七成收入。", "One product, Feitian Moutai, brings in about 70% of revenue."),
      T("毛利率约 92%。卖 100 元，成本不到 10 元。", "Gross margin is about 92%. Sell CNY 100, and the cost is under CNY 10.")
    ],
    moat: [
      T("酒只能在赤水河边一小块地方酿。换个地方，味道就不一样。", "It can only be made in one small area by the Chishui River. Move it, and the taste changes."),
      T("一瓶酒从生产到出厂要五年左右。想多卖，也快不起来。", "Each bottle takes about five years. Even if it wants to sell more, it cannot go faster."),
      T("送礼、请客，大家认它。这个习惯别人抢不走。", "For gifts and banquets, people expect it. Nobody can take that habit away.")
    ],
    value: T("股价约 1,430 元，市盈率约 21 倍。毛利 92% 的公司只值 21 倍，比我想的便宜。市场在担心增长变慢。", "About CNY 1,430, roughly 21x earnings. For a business with 92% margins, that was cheaper than I expected. The market is worried about slower growth."),
    insight: [
      T("出厂价 1,169 元，市场上卖 2,000 元左右。差价被经销商拿走了。茅台好像是故意少赚这笔钱，因为这个差价让它一直显得稀缺。", "Moutai sells at CNY 1,169, and shops sell it for about CNY 2,000. Distributors keep the gap. Moutai seems to leave that money on purpose, because the gap keeps it looking scarce."),
      T("茅台的护城河其实是时间。五年的酿造周期，钱买不来，也加速不了。", "Moutai's real moat is time. Five years of making it cannot be bought, and it cannot be sped up.")
    ],
    question: T("年轻人越来越少喝白酒。20 年后，谁来买？", "Fewer young people drink baijiu. Who will buy it in 20 years?"),
    risk: [
      T("批价从 2,500 元以上跌到 2,000 元左右，说明需求在变弱。", "The wholesale price fell from over CNY 2,500 to about CNY 2,000. Demand is getting weaker."),
      T("限制公务宴请，最先影响的就是高端白酒。", "Limits on official banquets hit premium baijiu first.")
    ]
  },

  {
    id: "600522", date: "2025-08-15", chapter: "", code: "600522.SH",
    company: T("中天科技", "Zhongtian Technology"), industry: T("光纤光缆", "Optical fibre"), sector: "tech",
    price: 15.5, mcap: 530, mult: 19, moatScore: 4, trend: "widening", verdict: "fair-low",
    why: T("2025 年，身边的人都在买 AI 股。我也心动，但我问了一个不同的问题：AI 需要数据中心，数据中心需要光纤。光纤是从哪里来的？", "In 2025, everyone around me was buying AI stocks. I was tempted too, but I asked a different question. AI needs data centres, and data centres need optical fibre. Where does fibre come from?"),
    money: [
      T("光纤和光缆，是这次我最关心的部分。", "Optical fibre and cable, the part I care about most here."),
      T("还做海底电缆、电网设备和新能源材料。", "It also makes subsea cables, grid equipment and new energy materials.")
    ],
    moat: [
      T("光纤是从一根叫光棒（预制棒）的玻璃棒拉出来的。很少有投资者注意它。", "Fibre starts as a glass rod called a preform. Few investors notice it."),
      T("建光棒工厂要用危险化学品，审批要好几年。钱没法让这件事变快。", "A preform factory needs years of permits for dangerous chemicals. Money cannot make that faster."),
      T("中天是少数自己生产光棒的光纤公司之一。已经有光棒的公司，会领先好几年。", "Zhongtian is one of the few fibre makers that produce their own preforms. Companies that already have preforms will stay ahead for years.")
    ],
    value: T("股价约 15.5 元，市盈率约 19 倍。市场在看 AI 芯片，很少有人在看光棒。", "About CNY 15.5, roughly 19x earnings. The market is looking at AI chips. Almost nobody is looking at preforms."),
    insight: [
      T("瓶颈不在最热的地方。大家抢 AI 芯片的时候，真正慢、真正难扩产的，是光棒。", "The bottleneck is not where it is hottest. While everyone fights over AI chips, the slow part, the part that is hard to expand, is the preform."),
      T("这是一场慢的游戏。比的不是谁反应快，而是谁愿意等。这种游戏，我能赢。", "This is a slow game. It is not about who moves fastest, but who is willing to wait. That is the kind of game I can win.")
    ],
    question: T("数据中心到底需要多少光纤？海缆和电网这些业务，会不会把光纤的好处稀释掉？", "How much fibre do data centres really need? Will the subsea cable and grid businesses dilute the fibre story?"),
    later: T("后来股价涨了 50%，我很想卖。卖掉就能证明，一个看光纤行业报告的高中生真的看懂了什么。但我重读了当时写的理由。大盘好帮了忙，一次交易证明不了什么；可瓶颈还在，买的理由都还成立。所以我没卖。", "When the stock rose 50%, I wanted to press sell. Selling would lock in proof that a high school student reading fibre industry reports really understood something. So I reread my thesis. The strong market had helped, and one trade proves little. But the bottleneck was still there, and the reasons I bought were still true. I held."),
    risk: [
      T("AI 投资如果放缓，光纤需求也会跟着降。", "If AI spending slows, fibre demand falls with it."),
      T("光棒的领先是几年，不是永远。别人的产能终究会建起来。", "The preform lead lasts years, not forever. Other capacity will get built eventually."),
      T("中天业务很多，光纤只是其中一块。", "Zhongtian does many things; fibre is only one of them.")
    ]
  },

  {
    id: "601668", date: "2025-08-22", chapter: "worth", code: "601668.SH",
    company: T("中国建筑", "China State Construction"), industry: T("建筑", "Construction"), sector: "infra",
    price: 5.6, mcap: 2310, mult: 5, moatScore: 3, trend: "narrowing", verdict: "fair-low",
    why: T("茅台的利润很高。那反过来想：收入最多的公司，是不是最值钱？中国建筑的收入，是全世界建筑公司里最多的。", "Moutai is very profitable. So I turned it around: is the company with the most revenue the most valuable? China State Construction has more revenue than any builder in the world."),
    money: [
      T("盖房子约占六成，修路修桥约占三成。", "Buildings are about 60%. Roads and bridges are about 30%."),
      T("旗下中海地产还做房地产开发。", "Its China Overseas unit also develops property.")
    ],
    moat: [
      T("规模最大，资质最全。超大项目只有它能接。", "Biggest scale, most licences. Only it can take the largest projects."),
      T("央企背景，借钱便宜。", "As a state company, it borrows cheaply.")
    ],
    value: T("股价约 5.6 元，市盈率 5 倍左右。这是我看过最便宜的公司。", "About CNY 5.6, around 5x earnings. The cheapest company I had looked at."),
    insight: [
      T("收入 2.19 万亿，是茅台的 12 倍多。利润 462 亿，比茅台少。市值约 2,300 亿，只有茅台的八分之一。收入大，不等于值钱。", "Revenue of CNY 2.19 trillion, over 12 times Moutai's. Profit of CNY 46.2 billion, less than Moutai's. Market value about CNY 230 billion, one-eighth of Moutai. Big revenue does not mean valuable."),
      T("签了合同，不等于收到钱。它有很多钱挂在应收账款上。市场在怀疑这些钱能不能收回来。", "Signing a contract is not the same as getting paid. A lot of its money sits in receivables, and the market doubts it will all come back.")
    ],
    question: T("5 倍是太便宜了，还是市场看到了我没看到的东西？", "Is 5x too cheap, or is the market seeing something I'm not?"),
    risk: [
      T("房地产在下行，新开工的房子越来越少。", "Property is falling, and fewer new buildings are starting."),
      T("地方政府付钱慢。", "Local governments pay slowly.")
    ]
  },

  {
    id: "600900", date: "2025-09-05", chapter: "worth", code: "600900.SH",
    company: T("长江电力", "China Yangtze Power"), industry: T("水电", "Hydropower"), sector: "infra",
    price: 28, mcap: 6850, mult: 20, moatScore: 5, trend: "stable", verdict: "fair",
    why: T("中国建筑告诉我，钱收不回来，收入再大也没用。那如果一家公司的钱一定收得回来呢？", "China State Construction showed me that revenue means little if the cash never comes back. So what about a company that always gets paid?"),
    money: [
      T("六座大水电站，发电卖给电网。", "Six big hydropower plants sell electricity to the grid."),
      T("每年发电约 3,000 亿度，净利润约 325 亿元。", "About 300 TWh a year, with net profit around CNY 32.5 billion.")
    ],
    moat: [
      T("长江上最好的坝址已经建完了。不会有第二个三峡。", "The best dam sites on the Yangtze are taken. There will not be a second Three Gorges."),
      T("水是免费的。没有燃料成本。", "Water is free. There is no fuel cost.")
    ],
    value: T("股价约 28 元，市盈率约 20 倍，股息率约 3.5%。", "About CNY 28, around 20x earnings, with a dividend yield of about 3.5%."),
    insight: [
      T("大坝建好以后，几乎不用再花大钱。每年发电，每年收钱。它更像在收租。", "Once a dam is built, there is little left to spend. Every year it makes power, every year it gets paid. It is closer to collecting rent."),
      T("所以决定它股价的，更多是利率，而不是经济。利率低的时候，稳定的分红就更值钱。", "So its share price depends more on interest rates than on the economy. When rates are low, steady dividends are worth more.")
    ],
    question: T("如果利率上升，它会跌多少？", "If interest rates rise, how far does it fall?"),
    risk: [
      T("干旱的年份，发电量会明显下降。", "In a dry year, output drops noticeably."),
      T("规模已经到顶了，很难再长大。", "It has reached its full size. It is hard to grow further.")
    ]
  },

  {
    id: "603288", date: "2025-09-19", chapter: "worth", code: "603288.SH",
    company: T("海天味业", "Foshan Haitian"), industry: T("调味品", "Condiments"), sector: "consumer",
    price: 38, mcap: 2220, mult: 32, moatScore: 4, trend: "stable", verdict: "fair",
    why: T("长江电力靠的是别人拿不到的大坝。那卖最普通的东西、没有独占资源的公司呢？我选了酱油。", "Yangtze Power has dams no one else can get. What about a company that sells the most ordinary thing, with nothing exclusive? I picked soy sauce."),
    money: [
      T("酱油约占六成收入，还有蚝油和调味酱。", "Soy sauce is about 60% of revenue, plus oyster sauce and pastes."),
      T("大约六成卖给餐馆，三成卖给家庭。", "About 60% goes to restaurants and 30% to homes.")
    ],
    moat: [
      T("工厂最大，成本最低。", "Biggest factories, lowest cost."),
      T("约 6,700 家经销商，县城小卖部也买得到。", "About 6,700 distributors. You can buy it in small-town corner shops.")
    ],
    value: T("股价约 38 元，市盈率约 32 倍。增长已经慢了，市场还是给了不低的价格。", "About CNY 38, around 32x earnings. Growth has slowed, but the market still pays a high price."),
    insight: [
      T("一瓶酱油几块钱，没人为了省这点钱换牌子。厨师在乎的是每次味道都一样。便宜的东西，反而很难被替换。", "A bottle costs a few yuan. Nobody switches brands to save that. Chefs want the same taste every time. Cheap things can be the hardest to replace."),
      T("但 2023 年「零添加」的争议让股价大跌。消费品的护城河，一次舆论就能打出缺口。", "But the 2023 \"zero additives\" controversy crushed the stock. One wave of public opinion can crack a consumer brand's moat.")
    ],
    question: T("增长这么慢，32 倍合理吗？", "With growth this slow, is 32x reasonable?"),
    risk: [
      T("餐馆生意差，酱油就用得少。", "When restaurants struggle, they use less sauce."),
      T("千禾这些「零添加」品牌在抢高端。", "\"Zero additive\" brands like Qianhe are taking the premium end.")
    ]
  },

  {
    id: "000333", date: "2025-10-03", chapter: "worth", code: "000333.SZ",
    company: T("美的集团", "Midea Group"), industry: T("家电", "Home appliances"), sector: "consumer",
    price: 73, mcap: 5600, mult: 13, moatScore: 4, trend: "widening", verdict: "under",
    why: T("茅台和海天都靠品牌。我想找一家品牌不是最强、却做到全球最大的公司，看它靠什么赢。", "Moutai and Haitian both rely on brand. I wanted a company whose brand is not the strongest but still became the world's biggest, to see how it wins."),
    money: [
      T("空调约占四成收入，其余主要是冰箱、洗衣机和小家电。", "Air conditioners are about 40% of revenue. Most of the rest is fridges, washers and small appliances."),
      T("四成以上的收入来自海外。", "Over 40% of revenue comes from abroad.")
    ],
    moat: [
      T("规模最大，压缩机和电机自己做，成本最低。", "Biggest scale. It makes its own compressors and motors. Lowest cost."),
      T("按订单生产，库存少，周转快。", "It builds to order, so inventory is low and moves fast.")
    ],
    value: T("股价约 73 元，市盈率只有 13 倍，股息率接近 5%。", "About CNY 73, only 13x earnings, with a dividend yield near 5%."),
    insight: [
      T("美的赢在效率，不是赢在大家喜欢它。", "Midea wins on efficiency, not because people love it."),
      T("为什么只值 13 倍？家电谁都能做。美的要一直做得比别人好，优势才守得住。茅台不用，因为别人根本做不出来。能被追上的优势，市场给的价格就低。", "Why only 13x? Anyone can make appliances. Midea has to keep doing better than everyone to hold its lead. Moutai does not, because nobody else can make it. An advantage that can be caught gets a lower price.")
    ],
    question: T("楼宇空调、机器人这些 To B 业务，以后会让市场重新给它定价吗？", "Will its business-to-business side, building HVAC and robots, make the market price it differently one day?"),
    risk: [
      T("以旧换新补贴结束后，国内销量可能下降。", "When the trade-in subsidy ends, domestic sales may fall."),
      T("新房少了，新装的空调也少了。", "Fewer new homes, fewer new air conditioners.")
    ]
  },

  {
    id: "300750", date: "2025-10-17", chapter: "scale", code: "300750.SZ",
    company: T("宁德时代", "CATL"), industry: T("动力电池", "EV batteries"), sector: "newenergy",
    price: 385, mcap: 17550, mult: 30, moatScore: 5, trend: "widening", verdict: "fair-high",
    why: T("美的靠规模赢。我想看看，规模优势放到一个更新、更快的行业里，会是什么样子。", "Midea wins on scale. I wanted to see what scale looks like in a newer, faster industry."),
    money: [
      T("卖电池给车企，约占七成收入。", "Sells batteries to carmakers, about 70% of revenue."),
      T("储能电池约占两成，长得很快。", "Storage batteries are about 20% and growing fast.")
    ],
    moat: [
      T("全球产量最大，所以每一块电池最便宜。", "It makes the most batteries in the world, so each one costs the least."),
      T("电池要跟车型一起设计。车企想换供应商，很麻烦。", "Batteries are designed together with each car model. Switching suppliers is a pain.")
    ],
    value: T("股价约 385 元，市盈率约 30 倍。今年储能需求大涨，股价也涨了很多。我觉得已经有点贵。", "About CNY 385, around 30x earnings. Storage demand jumped this year, and so did the stock. It feels a bit expensive now."),
    insight: [
      T("电池价格每年都在降，宁德的利润还在涨。因为它降成本的速度，比降价快。", "Battery prices fall every year, yet CATL's profit keeps rising. It cuts costs faster than prices fall."),
      T("价格战对小厂是坏事，对龙头可能是好事。小厂撑不住，退出了，龙头的份额就变大了。", "A price war is bad for small makers and can be good for the leader. The small ones give up, and the leader's share grows.")
    ],
    question: T("如果固态电池突然成熟，它会不会变成下一个诺基亚？", "If solid-state batteries suddenly arrive, could it become the next Nokia?"),
    risk: [
      T("美国市场基本进不去，欧洲的政策也不确定。", "The US is mostly closed to it, and Europe's policy is uncertain."),
      T("比亚迪这样的车企，自己做电池。", "Carmakers like BYD make their own batteries.")
    ]
  },

  {
    id: "002594", date: "2025-10-31", chapter: "scale", code: "002594.SZ",
    company: T("比亚迪", "BYD"), industry: T("新能源汽车", "Electric vehicles"), sector: "newenergy",
    price: 98, mcap: 8940, mult: 27, moatScore: 4, trend: "stable", verdict: "fair-high",
    why: T("上一期发现，宁德时代最大的威胁之一是车企自己做电池。比亚迪就是最典型的那一个。", "Last time I found that one of CATL's biggest threats is carmakers making their own batteries. BYD is the clearest example."),
    money: [
      T("卖车约占八成收入。2024 年卖了约 427 万辆。", "Cars are about 80% of revenue. It sold about 4.27 million in 2024."),
      T("还帮苹果这些公司组装手机零件。", "It also assembles phone parts for companies like Apple.")
    ],
    moat: [
      T("电池、芯片、电机都自己做。", "It makes its own batteries, chips and motors."),
      T("规模大，打价格战时能降得最狠。", "Its scale lets it cut prices hardest in a price war.")
    ],
    value: T("股价约 98 元，市盈率约 27 倍，是美的的两倍。我觉得有点贵。", "About CNY 98, around 27x earnings, twice Midea's. Feels a bit expensive."),
    insight: [
      T("卖得最多，不等于赚得最多。2025 年它销量还在涨，利润却在降，因为一直在降价。", "Selling the most is not earning the most. In 2025 its sales kept rising while profit fell, because it kept cutting prices."),
      T("27 倍的价格，主要是在押海外市场。国内的故事，市场已经不太买账了。", "The 27x is mostly a bet on overseas markets. The market no longer buys the China story as much.")
    ],
    question: T("欧洲人会愿意买中国品牌的车吗？", "Will Europeans buy a Chinese car brand?"),
    risk: [
      T("国内价格战继续打，利润会越来越薄。", "If the price war at home continues, margins keep thinning."),
      T("欧盟对中国电动车加了关税。", "The EU has put tariffs on Chinese EVs.")
    ]
  },

  {
    id: "300274", date: "2025-11-14", chapter: "scale", code: "300274.SZ",
    company: T("阳光电源", "Sungrow Power"), industry: T("光伏逆变器与储能", "Solar inverters & storage"), sector: "newenergy",
    price: 175, mcap: 3630, mult: 25, moatScore: 4, trend: "widening", verdict: "fair",
    why: T("电池和电动车看完了，新能源还剩太阳能。做光伏板的公司都在亏钱，阳光电源却在赚钱。为什么？", "Batteries and EVs were done. Solar was left. Panel makers were losing money, but Sungrow was making it. Why?"),
    money: [
      T("储能系统约占四成，现在是最大的业务。", "Storage systems are about 40%, now its biggest business."),
      T("逆变器约占三成。它把太阳能板发的电，变成能用的电。", "Inverters are about 30%. They turn panel power into power you can use.")
    ],
    moat: [
      T("做了快 30 年电力电子。", "Almost 30 years in power electronics."),
      T("海外认证多，欧美大项目经验多。", "Lots of overseas certifications and experience with big Western projects.")
    ],
    value: T("股价约 175 元，市盈率约 25 倍。今年储能很热，它也涨了不少。", "About CNY 175, around 25x earnings. Storage was hot this year, and the stock rose a lot."),
    insight: [
      T("同一个行业，做光伏板的卷到亏钱，做逆变器和储能的却在赚钱。在产业链上站在哪里，比在哪个行业更重要。", "Same industry. Panel makers compete themselves into losses, while inverter and storage makers profit. Where you stand in the chain matters more than which industry you are in."),
      T("太阳能和风能不稳定。装得越多，越需要储能。它卖的是新能源离不开的那一环。", "Solar and wind are unstable. The more gets built, the more storage is needed. It sells the link renewables cannot do without.")
    ],
    question: T("宁德时代也开始直接卖储能系统了。阳光电源还守得住吗？", "CATL now sells storage systems directly too. Can Sungrow hold on?"),
    risk: [
      T("美国的关税和政策。", "US tariffs and policy."),
      T("储能也开始打价格战。", "Storage is starting its own price war.")
    ]
  },

  {
    id: "601899", date: "2025-11-28", chapter: "cycle", code: "601899.SH",
    company: T("紫金矿业", "Zijin Mining"), industry: T("有色金属", "Metals & mining"), sector: "resources",
    price: 30, mcap: 7970, mult: 16, moatScore: 4, trend: "widening", verdict: "fair",
    why: T("前面的公司多少都能自己定价。我想看看价格完全由市场决定的行业。今年金价和铜价都很高，我从挖矿开始。", "The companies so far could set their prices to some degree. I wanted an industry where the market decides. Gold and copper were both high this year, so I started with mining."),
    money: [
      T("挖铜、挖金卖出去。铜约占一半利润。", "Mines and sells copper and gold. Copper is about half the profit."),
      T("矿山分布在十多个国家。", "Mines in more than ten countries.")
    ],
    moat: [
      T("手里有几座世界级的大铜矿。", "It owns several world-class copper mines."),
      T("擅长把别人觉得不划算的矿，开发成赚钱的矿。", "It is good at turning mines others gave up on into profitable ones.")
    ],
    value: T("股价约 30 元，市盈率约 16 倍。但这个数字跟着金属价格走，价格一变就完全不同。", "About CNY 30, around 16x earnings. But that number follows metal prices. When they move, everything changes."),
    insight: [
      T("矿企定不了卖价。铜价、金价是全球市场定的。它能控制的只有成本。", "A miner cannot set its price. Copper and gold are priced by the world. The only thing it controls is cost."),
      T("周期股最危险的时候，可能正是看起来最便宜的时候。利润最高，市盈率最低；价格一跌，利润就没了。", "A cyclical stock can be most dangerous exactly when it looks cheapest. Profit is at its peak, P/E at its lowest; then prices fall and the profit is gone.")
    ],
    question: T("怎么判断现在在周期的哪个位置？", "How do you tell where you are in the cycle?"),
    risk: [
      T("金属价格下跌。", "Falling metal prices."),
      T("海外矿山所在国家的政策和安全问题。", "Policy and security problems where its mines are.")
    ]
  },

  {
    id: "601088", date: "2025-12-12", chapter: "cycle", code: "601088.SH",
    company: T("中国神华", "China Shenhua"), industry: T("煤炭", "Coal"), sector: "resources",
    price: 40, mcap: 7950, mult: 15, moatScore: 4, trend: "stable", verdict: "fair",
    why: T("紫金告诉我，价格好的时候矿企很赚钱。那大家都说没前途的煤炭呢？神华的股价这几年却不差。这很矛盾。", "Zijin showed me miners do well when prices are good. What about coal, which everyone says has no future? Shenhua's stock has done fine for years. That did not add up."),
    money: [
      T("卖煤约占六成收入，还有发电和铁路运输。", "Coal is about 60% of revenue, plus power and rail freight."),
      T("自己有铁路、港口和船，把煤从矿运到电厂。", "It owns railways, ports and ships to move coal from mine to power plant.")
    ],
    moat: [
      T("煤矿成本低，又有自己的运输网。", "Low-cost mines and its own transport network."),
      T("大部分煤按长期合同卖，收入稳。", "Most coal is sold on long contracts, so income is steady.")
    ],
    value: T("股价约 40 元，市盈率约 15 倍，股息率约 6%。", "About CNY 40, around 15x earnings, with a dividend yield of about 6%."),
    insight: [
      T("正因为大家都觉得煤炭没前途，没人愿意开新矿。新的供给少了，老公司反而很赚钱，还把钱分给股东。", "Because everyone thinks coal has no future, nobody opens new mines. With little new supply, the old companies earn well and pay it out."),
      T("「夕阳行业」不等于「坏生意」。关键是有没有新的对手进来。", "A \"sunset industry\" is not a bad business. What matters is whether new rivals come in.")
    ],
    question: T("夕阳行业，到底什么时候会真的落山？", "When does a sunset industry actually set?"),
    risk: [
      T("风电、光伏越来越多，煤电的空间会慢慢变小。", "More wind and solar will slowly shrink coal power."),
      T("煤价下跌。", "Falling coal prices.")
    ]
  },

  {
    id: "600309", date: "2025-12-26", chapter: "cycle", code: "600309.SH",
    company: T("万华化学", "Wanhua Chemical"), industry: T("化工", "Chemicals"), sector: "resources",
    price: 70, mcap: 2190, mult: 18, moatScore: 4, trend: "stable", verdict: "fair",
    why: T("煤和铜谁都能挖，所以拼成本。那如果一种东西全世界只有几家能做，是不是就不怕周期了？", "Anyone can dig coal or copper, so it comes down to cost. But if only a few companies in the world can make something, does that protect it from the cycle?"),
    money: [
      T("主要卖 MDI，一种做聚氨酯的原料，用在冰箱保温层、建筑保温板、鞋底和汽车座椅。", "Mainly MDI, a raw material for polyurethane. It goes into fridge insulation, building panels, shoe soles and car seats."),
      T("还做石化产品和新材料。", "Also petrochemicals and new materials.")
    ],
    moat: [
      T("MDI 工艺很难，全世界只有少数几家能做。", "MDI is hard to make. Only a few companies in the world can."),
      T("万华的成本全球最低。", "Wanhua has the lowest cost in the world.")
    ],
    value: T("股价约 70 元，市盈率约 18 倍。", "About CNY 70, around 18x earnings."),
    insight: [
      T("全世界只有几家能做，听起来像垄断。但它还是周期股，因为它的客户是房子、冰箱和汽车。客户不好，它也好不了。", "Only a few makers sounds like a monopoly. But it is still cyclical, because its customers make houses, fridges and cars. When they struggle, so does Wanhua."),
      T("门槛高，不等于利润稳。", "A high barrier does not mean steady profit.")
    ],
    question: T("石化业务一直不怎么赚钱，为什么还要做？", "The petrochemical business barely makes money. Why keep it?"),
    risk: [
      T("化工品价格下跌。", "Falling chemical prices."),
      T("欧美对中国化工品反倾销。", "Anti-dumping duties in Europe and the US.")
    ]
  },

  {
    id: "600019", date: "2026-01-09", chapter: "cycle", code: "600019.SH",
    company: T("宝钢股份", "Baoshan Iron & Steel"), industry: T("钢铁", "Steel"), sector: "resources",
    price: 7.2, mcap: 1560, mult: 0.77, metric: "PB", moatScore: 3, trend: "stable", verdict: "fair-low",
    why: T("万华说明，门槛再高也挡不住周期。那在最惨的周期行业里，还有没有过得好的公司？钢铁就是公认最惨的。", "Wanhua showed that even a high barrier cannot stop the cycle. So in the worst cyclical industry, is anyone still doing well? Steel is known as the worst."),
    money: [
      T("卖钢材。最赚钱的是汽车用的钢板，和电网用的硅钢。", "Sells steel. The most profitable is sheet for cars and electrical steel for the grid."),
      T("每年产钢约 5,000 万吨。", "About 50 million tonnes a year.")
    ],
    moat: [
      T("高端汽车板和硅钢国内第一。车企要认证很久才会用新供应商。", "No.1 in China for high-end car sheet and electrical steel. Carmakers take a long time to approve a new supplier."),
      T("普通钢材没什么优势，谁都能做。", "Ordinary steel has no edge. Anyone can make it.")
    ],
    value: T("股价约 7.2 元，市净率约 0.77 倍。市场给的价格，比它账上的资产还低。", "About CNY 7.2, around 0.77x book value. The market prices it below its own assets."),
    insight: [
      T("行业很差，宝钢做高端产品还能赚钱。差的行业里，也有好的位置。", "The industry is bad, but Baosteel still earns on high-end products. A bad industry can still have good spots."),
      T("跟阳光电源一样：重要的不是在哪个行业，而是在行业里做什么。", "Same as Sungrow: what matters is less the industry than what you do inside it.")
    ],
    question: T("市净率低于 1，是市场觉得它的工厂不值那么多钱吗？", "Below 1x book: does the market think its plants are not worth what the books say?"),
    risk: [
      T("中国钢铁产能太多。", "China has too much steel capacity."),
      T("铁矿石要进口，价格波动大。", "Iron ore is imported, and its price swings.")
    ]
  },

  {
    id: "002714", date: "2026-01-23", chapter: "cycle", code: "002714.SZ",
    company: T("牧原股份", "Muyuan Foods"), industry: T("生猪养殖", "Hog farming"), sector: "consumer",
    price: 45, mcap: 2460, mult: 3.5, metric: "PB", moatScore: 4, trend: "stable", verdict: "fair",
    why: T("前面这些周期品，离生活有点远。离生活最近的周期，是猪肉价格。牧原是养猪最多的公司。", "The cyclical products so far felt far from daily life. The closest cycle is the price of pork. Muyuan raises more pigs than anyone."),
    money: [
      T("养猪卖猪，约占九成收入，每年卖出约 7,000 万头。", "Raises and sells pigs, about 90% of revenue. Around 70 million a year."),
      T("开始自己屠宰，卖猪肉。", "It has started slaughtering and selling pork.")
    ],
    moat: [
      T("养一公斤猪的成本比同行平均低约 2 元，行业最低。", "Its cost per kilo is about CNY 2 below the industry average. The lowest."),
      T("育种、饲料、养殖都自己做。", "Breeding, feed and farming are all done in-house.")
    ],
    value: T("股价约 45 元，市净率约 3.5 倍。猪价不好的时候利润波动很大，所以我看市净率。", "About CNY 45, around 3.5x book value. Profit swings with pig prices, so I used book value."),
    insight: [
      T("猪价它决定不了。它能控制的只有成本。猪价低的时候，别人亏钱，它还能赚一点。等别人退出，它还在。", "It cannot decide the pig price. It controls only cost. When prices are low, others lose money and it still earns a little. When the others leave, it is still there."),
      T("跟紫金、神华是一个道理：价格由市场定的时候，成本最低的人赢。", "Same logic as Zijin and Shenhua: when the market sets the price, the lowest-cost producer wins.")
    ],
    question: T("国家现在要求大猪企控制产能。这会限制它继续长大吗？", "The government now asks big hog farmers to limit capacity. Will that stop Muyuan from growing?"),
    risk: [
      T("猪价长期低迷。", "Pig prices staying low for a long time."),
      T("猪瘟这类疫病。", "Diseases like African swine fever.")
    ]
  },

  {
    id: "600031", date: "2026-02-06", chapter: "cycle", code: "600031.SH",
    company: T("三一重工", "Sany Heavy Industry"), industry: T("工程机械", "Construction machinery"), sector: "newenergy",
    price: 22, mcap: 1860, mult: 18, moatScore: 4, trend: "widening", verdict: "fair",
    why: T("看了这么多周期股，我想找一个能看出整个经济冷暖的指标。听说挖掘机销量就是一个。三一是最大的挖掘机公司。", "After so many cyclical stocks, I wanted one signal for the whole economy. Excavator sales are said to be one. Sany is the biggest excavator maker."),
    money: [
      T("挖掘机约占四成，还有混凝土泵车和起重机。", "Excavators are about 40%, plus concrete pump trucks and cranes."),
      T("六成以上的收入来自海外。", "Over 60% of revenue comes from abroad.")
    ],
    moat: [
      T("国内挖掘机份额约三成，排第一。", "About 30% of China's excavator market. No.1."),
      T("售后和配件网络覆盖 150 多个国家。", "After-sales and parts in more than 150 countries.")
    ],
    value: T("股价约 22 元，市盈率约 18 倍。", "About CNY 22, around 18x earnings."),
    insight: [
      T("挖掘机卖得多，说明工地多。所以挖掘机销量被叫作经济的「晴雨表」。", "More excavators sold means more building sites. That is why excavator sales are called a barometer of the economy."),
      T("国内房地产不行了，它就去东南亚、中东、非洲。一家中国公司，现在主要在国外赚钱。", "When property at home weakened, it went to Southeast Asia, the Middle East and Africa. A Chinese company now earns most of its money abroad.")
    ],
    question: T("2015 到 2020 年卖出去的挖掘机到了更换期。这一波能撑多久？", "Machines sold in 2015 to 2020 are due for replacement. How long will that wave last?"),
    risk: [
      T("周期性强。行业不好时，收入能少一半。", "Very cyclical. In a bad year, revenue can halve."),
      T("很多设备是分期卖的。客户付不上钱，就是坏账。", "Many machines are sold on instalments. If customers cannot pay, that is a bad debt.")
    ]
  },

  {
    id: "002475", date: "2026-02-20", chapter: "maker", code: "002475.SZ",
    company: T("立讯精密", "Luxshare Precision"), industry: T("消费电子制造", "Electronics manufacturing"), sector: "tech",
    price: 55, mcap: 3990, mult: 24, moatScore: 4, trend: "widening", verdict: "fair",
    why: T("三一大半收入来自国外。还有一种中国公司也很全球化：给外国品牌造东西。AirPods 很多是立讯组装的。", "Most of Sany's revenue comes from abroad. Another kind of Chinese company is global too: the ones that build for foreign brands. Luxshare assembles many AirPods."),
    money: [
      T("帮苹果组装 AirPods、iPhone、手表和零部件，占七成以上收入。", "Assembles AirPods, iPhones, watches and parts for Apple, over 70% of revenue."),
      T("新业务是汽车线束，和 AI 服务器用的连接线。", "Newer lines: car wiring and cables for AI servers.")
    ],
    moat: [
      T("精密制造能力强，新产品的良率能很快做上去。", "Strong precision manufacturing. It gets yields up quickly on new products."),
      T("进苹果供应链要认证很久。苹果不会轻易换掉它。", "Getting into Apple's supply chain takes a long time. Apple will not drop it easily.")
    ],
    value: T("股价约 55 元，市盈率约 24 倍。", "About CNY 55, around 24x earnings."),
    insight: [
      T("收入 2,688 亿，比茅台多。毛利率只有 11%，茅台是 92%。同样是龙头，赚钱的方式完全不同。", "Revenue of CNY 268.8 billion, more than Moutai. Gross margin is 11%; Moutai's is 92%. Both are leaders, and they make money in completely different ways."),
      T("代工厂的命运，很大一部分握在客户手里。客户一句话，订单就能转走。", "A contract maker's fate sits largely with its customer. One decision, and the orders move.")
    ],
    question: T("苹果把产能搬去印度和越南，立讯能跟过去吗？", "If Apple moves production to India and Vietnam, can Luxshare follow?"),
    risk: [
      T("太依赖苹果一个客户。", "Too dependent on one customer."),
      T("毛利率低，出一点问题，利润就没了。", "Thin margins. One problem, and the profit is gone.")
    ]
  },

  {
    id: "601138", date: "2026-03-06", chapter: "maker", code: "601138.SH",
    company: T("工业富联", "Foxconn Industrial Internet"), industry: T("AI 服务器", "AI servers"), sector: "tech",
    price: 60, mcap: 11900, mult: 26, moatScore: 4, trend: "widening", verdict: "fair",
    why: T("立讯是给苹果打工。现在最热的是 AI。我想看看，AI 热潮里给英伟达打工的公司，赚得怎么样。", "Luxshare works for Apple. The hottest thing now is AI. I wanted to see how the company building for NVIDIA is doing."),
    money: [
      T("帮英伟达、微软、亚马逊组装服务器。AI 服务器是增长最快的部分。", "Assembles servers for NVIDIA, Microsoft and Amazon. AI servers are the fastest-growing part."),
      T("还做网络设备和手机零件。", "Also networking gear and phone parts.")
    ],
    moat: [
      T("全球服务器代工规模最大，工厂在中国、墨西哥和美国。", "The world's largest server manufacturer, with plants in China, Mexico and the US."),
      T("AI 服务器越来越复杂，小厂做不了。", "AI servers keep getting harder to build. Small makers cannot keep up.")
    ],
    value: T("股价约 60 元，市盈率约 26 倍。", "About CNY 60, around 26x earnings."),
    insight: [
      T("AI 热潮里赚钱最多的是英伟达。工业富联收入也暴涨，但毛利率只有 7% 左右。它分到的是辛苦钱。", "NVIDIA makes the most from AI. Foxconn Industrial's revenue jumped too, but its gross margin is around 7%. It gets the hard-work share."),
      T("这让我想起中天：大家都盯着最热的那一环，但能赚多少，要看你在链条上卡住了什么。组装谁都能做，所以分得少。", "It reminded me of Zhongtian. Everyone watches the hottest link, but what you earn depends on what you control in the chain. Anyone can assemble, so assembly gets little.")
    ],
    question: T("如果云厂商明年少投 AI，它的收入会掉多少？", "If cloud companies spend less on AI next year, how much revenue does it lose?"),
    risk: [
      T("太依赖 AI 投资这一个周期。", "Too dependent on one cycle: AI spending."),
      T("客户集中在几家大公司。", "Customers are a few giants.")
    ]
  },

  {
    id: "002415", date: "2026-03-20", chapter: "maker", code: "002415.SZ",
    company: T("海康威视", "Hikvision"), industry: T("安防", "Security cameras"), sector: "tech",
    price: 30, mcap: 2750, mult: 21, moatScore: 4, trend: "stable", verdict: "fair",
    why: T("立讯和工业富联都是给别人造。海康是少数有自己品牌、还卖到全世界第一的中国硬件公司。我想对比一下。", "Luxshare and Foxconn Industrial build for others. Hikvision is one of the few Chinese hardware companies with its own brand that became No.1 in the world. I wanted to compare."),
    money: [
      T("卖监控摄像头、录像设备和管理软件。", "Sells surveillance cameras, recorders and software."),
      T("新业务有智能家居、仓库机器人和汽车摄像头。", "New lines: smart home, warehouse robots and car cameras.")
    ],
    moat: [
      T("全球视频监控份额约四分之一，规模最大。", "About a quarter of the world's video surveillance market. The largest."),
      T("经销网络覆盖很多小客户。", "Its dealers reach many small customers.")
    ],
    value: T("股价约 30 元，市盈率约 21 倍。", "About CNY 30, around 21x earnings."),
    insight: [
      T("摄像头已经卖到全世界第一了，再往上很难。增长只能靠新东西。做到第一以后，最难的是找到下一个第一。", "It is already No.1 in cameras. Going higher is hard, so growth has to come from something new. After you reach the top, the hardest part is finding the next thing to be top at."),
      T("它把新业务一个个拆出去单独上市，好像是想让市场看清每一块值多少钱。", "It keeps spinning off new businesses as separate listings, maybe so the market can see what each part is worth.")
    ],
    question: T("新业务都拆出去以后，母公司会不会只剩下不再增长的老业务？", "Once the new businesses are spun off, is the parent left with an old business that no longer grows?"),
    risk: [
      T("被列入美国实体清单，买芯片和海外销售受限。", "On the US Entity List, which limits chip purchases and sales abroad."),
      T("国内政府项目在减少。", "Fewer government projects at home.")
    ]
  },

  {
    id: "688981", date: "2026-04-03", chapter: "maker", code: "688981.SH",
    company: T("中芯国际", "SMIC"), industry: T("芯片制造", "Chip manufacturing"), sector: "tech",
    price: 105, mcap: 8390, mult: 5.5, metric: "PB", moatScore: 4, trend: "widening", verdict: "fair",
    why: T("海康被制裁，有些芯片买不到。这让我想问：中国自己的芯片，是谁在造？", "Hikvision is under sanctions and cannot buy some chips. That made me ask: who makes China's own chips?"),
    money: [
      T("帮芯片设计公司把芯片造出来，按晶圆收费。", "Makes chips for companies that design them, charging per wafer."),
      T("大约八成客户是中国公司。", "About 80% of customers are Chinese.")
    ],
    moat: [
      T("国内唯一能大规模生产先进芯片的工厂。", "The only factory in China making advanced chips at scale."),
      T("芯片公司换代工厂要重新验证，很麻烦。", "Switching foundries means testing everything again. It is a pain.")
    ],
    value: T("股价约 105 元，市净率约 5.5 倍，市盈率超过 100 倍。", "About CNY 105, around 5.5x book value and over 100x earnings."),
    insight: [
      T("它的估值不太看利润，更像是看「重要性」。国家需要它，国内客户也没有别的选择。", "Its valuation is not really about profit. It is about importance. The country needs it, and Chinese customers have few other choices."),
      T("股价反映的不只是赚钱能力，还有政策和位置。", "A share price reflects more than earning power. It also reflects policy and position.")
    ],
    question: T("这样的估值合理吗？我说不清。", "Is a valuation like this reasonable? I honestly cannot say."),
    risk: [
      T("买不到最先进的光刻机，先进芯片受限。", "It cannot buy the most advanced lithography machines, which limits its best chips."),
      T("工厂越建越多，折旧压低利润。", "More factories mean more depreciation, which pushes profit down.")
    ]
  },

  {
    id: "002371", date: "2026-05-29", chapter: "maker", code: "002371.SZ",
    company: T("北方华创", "NAURA Technology"), industry: T("半导体设备", "Chip equipment"), sector: "tech",
    price: 450, mcap: 2400, mult: 26, moatScore: 4, trend: "widening", verdict: "fair",
    why: T("考前最后一期写的是中芯国际。停了一个月，回来接着问：它工厂里的机器，是谁造的？", "My last note before exams was SMIC. After a month off, I picked up the same question: who builds the machines in its factories?"),
    money: [
      T("卖芯片生产设备：刻蚀、镀膜、清洗等。", "Sells chipmaking tools for etching, deposition, cleaning and more."),
      T("一台设备几百万到几千万元。", "Each tool costs millions to tens of millions of yuan.")
    ],
    moat: [
      T("国内产品线最全的芯片设备公司。", "China's widest range of chip equipment."),
      T("设备进工厂要验证一两年。先进去的，就先站住了。", "A tool takes a year or two to be approved in a factory. Whoever gets in first holds the spot.")
    ],
    value: T("股价约 450 元，市盈率约 26 倍。", "About CNY 450, around 26x earnings."),
    insight: [
      T("淘金热时卖铲子最稳。不管哪家芯片公司最后赢，工厂都要买设备。", "In a gold rush, selling shovels is safest. Whichever chip company wins, the factories still buy tools."),
      T("设备验证要一两年，这段时间钱买不来。跟光棒审批一样，慢本身就是门槛。", "Approval takes a year or two, and money cannot buy that time. Like preform permits, slowness itself is the barrier.")
    ],
    question: T("等国产替代做得差不多了，它的增长从哪来？", "Once China has mostly replaced foreign tools, where does its growth come from?"),
    risk: [
      T("高端设备和美国公司还有差距。", "Its high-end tools still trail US makers."),
      T("一些核心零件还要进口。", "Some key parts are still imported.")
    ]
  },

  {
    id: "600941", date: "2026-06-12", chapter: "daily", code: "600941.SH",
    company: T("中国移动", "China Mobile"), industry: T("通信运营", "Telecom"), sector: "infra",
    price: 105, mcap: 22600, mult: 16, moatScore: 4, trend: "stable", verdict: "fair",
    why: T("芯片这条线看完，我想换个方向：每天都在用，却很少想过它怎么赚钱的公司。我先想到的，是每部手机里那张卡。", "With chips done, I changed direction: companies we use every day without thinking about how they make money. The first thing I thought of was the SIM card in every phone."),
    money: [
      T("手机套餐约占一半收入。", "Mobile plans are about half of revenue."),
      T("还有家庭宽带，以及给企业和政府做网络和云服务。", "Plus home broadband, and networks and cloud for companies and government.")
    ],
    moat: [
      T("运营商牌照只有几家，新公司进不来。", "Only a few companies hold licences. New ones cannot get in."),
      T("基站全国最多，信号最好。", "The most base stations and the best coverage in China.")
    ],
    value: T("股价约 105 元，市盈率约 16 倍，股息率约 5%。", "About CNY 105, around 16x earnings, with a dividend yield of about 5%."),
    insight: [
      T("几乎人人都在用，但它增长很慢，因为大家已经都有手机了。它更像水电费，不像科技公司。", "Almost everyone uses it, but it barely grows, because everyone already has a phone. It is more like a utility bill than a tech company."),
      T("市值约 2.26 万亿，比茅台还大。它靠的是稳，不是快。", "It is worth about CNY 2.26 trillion, more than Moutai. That comes from being steady, not fast.")
    ],
    question: T("AI 用得越来越多，流量会不会突然大涨，让它重新增长？", "As AI gets used more, could data traffic jump and make it grow again?"),
    risk: [
      T("个人业务已经饱和。", "The consumer business is full."),
      T("「提速降费」的要求让它很难涨价。", "Pressure to cut fees makes price rises hard.")
    ]
  },

  {
    id: "601888", date: "2026-06-26", chapter: "daily", code: "601888.SH",
    company: T("中国中免", "China Tourism Group Duty Free"), industry: T("免税店", "Duty-free retail"), sector: "consumer",
    price: 70, mcap: 1450, mult: 30, moatScore: 4, trend: "stable", verdict: "fair",
    why: T("中国移动的护城河是国家发的牌照。免税店也要牌照。同样靠牌照，两家有什么不同？", "China Mobile's moat is a government licence. Duty-free shops need one too. Same kind of moat, so what is different?"),
    money: [
      T("在海南、机场和口岸开免税店，卖化妆品、名牌包和烟酒。", "Runs duty-free shops in Hainan, airports and border crossings, selling cosmetics, luxury goods, tobacco and liquor."),
      T("化妆品约占一半销售额。", "Cosmetics are about half of sales.")
    ],
    moat: [
      T("免税牌照由国家批，数量很少。", "Duty-free licences are approved by the state, and there are few."),
      T("规模大，进货价比别人低。", "Its scale gets it better prices from brands.")
    ],
    value: T("股价约 70 元，市盈率约 30 倍。", "About CNY 70, around 30x earnings."),
    insight: [
      T("它的护城河是一张牌照。政策给的，也可能被政策拿走，或者分给别人。海南后来就多了好几家有牌照的公司。", "Its moat is a licence. Policy gave it, and policy can take it away or give it to others. Hainan later added several more licence holders."),
      T("茅台的护城河是天生的，中免的护城河是批出来的。", "Moutai's moat comes from nature. CTG's moat comes from an approval.")
    ],
    question: T("政策给的护城河，算不算真正的护城河？", "Is a moat granted by policy a real moat?"),
    risk: [
      T("大家花钱更谨慎，化妆品和奢侈品买得少了。", "People are spending carefully, buying fewer cosmetics and luxury goods."),
      T("机场租金很贵。", "Airport rents are expensive.")
    ]
  },

  {
    id: "002352", date: "2026-07-10", chapter: "daily", code: "002352.SZ",
    company: T("顺丰控股", "SF Holding"), industry: T("快递", "Express delivery"), sector: "infra",
    price: 40, mcap: 1990, mult: 15, moatScore: 4, trend: "stable", verdict: "fair-low",
    why: T("继续看日常生活里的服务。寄急件，大家都选顺丰，虽然它最贵。它怎么做到的？", "More everyday services. For urgent parcels, everyone picks SF, even though it costs the most. How?"),
    money: [
      T("时效快递（第二天到）约占一半。", "Next-day express is about half."),
      T("还有供应链、国际快递和冷链。", "Plus supply chain, international express and cold chain.")
    ],
    moat: [
      T("自己有货运机场和约 90 架货机。别人要十几年才能建起来。", "It owns a cargo airport and about 90 freighters. Others would need over ten years to build that."),
      T("全部自营，服务稳定。", "It runs everything itself, so service is consistent.")
    ],
    value: T("股价约 40 元，市盈率约 15 倍。", "About CNY 40, around 15x earnings."),
    insight: [
      T("顺丰不跟极兔、中通打价格战。便宜快递和顺丰，其实是两个不同的市场。它选了自己能赢的那一个。", "SF does not join J&T and ZTO's price war. Cheap parcels and SF are two different markets. It chose the one it can win."),
      T("前几年它花大钱建机场，利润很低。现在建完了，钱开始多了，分红也多了。投入的时候看起来很差，收获的时候才看得出来。", "For years it spent heavily on the airport, and profit was low. Now it is built, cash is coming in, and dividends are up. It looked bad while building. You only see it at harvest.")
    ],
    question: T("电商快递量那么大，顺丰为什么不去抢？抢了会不会伤到品牌？", "E-commerce parcels are huge. Why does SF not go after them? Would it hurt the brand?"),
    risk: [
      T("京东物流在高端市场竞争。", "JD Logistics competes at the top end."),
      T("经济不好，商务件就少。", "A weak economy means fewer business parcels.")
    ]
  },

  {
    id: "600887", date: "2026-07-24", chapter: "daily", code: "600887.SH",
    company: T("伊利股份", "Yili Group"), industry: T("乳制品", "Dairy"), sector: "consumer",
    price: 28, mcap: 1770, mult: 17, moatScore: 4, trend: "stable", verdict: "fair-low",
    why: T("日常消费的最后一期，选了超市里最常见的牛奶。", "The last everyday company: the milk you see in every supermarket."),
    money: [
      T("液态奶（纯牛奶、酸奶）约占七成。", "Liquid milk, plain and yoghurt, is about 70%."),
      T("还有奶粉、冰淇淋和奶酪。", "Plus milk powder, ice cream and cheese.")
    ],
    moat: [
      T("渠道覆盖约 170 万个零售点，村里的小店也有。", "It reaches about 1.7 million shops, down to village stores."),
      T("金典、安慕希这些牌子，大家都认识。", "Brands like Satine and Ambrosial are known everywhere.")
    ],
    value: T("股价约 28 元，市盈率约 17 倍，股息率约 4.5%。", "About CNY 28, around 17x earnings, with a dividend yield of about 4.5%."),
    insight: [
      T("出生人口下降，婴儿奶粉的需求就少了。人口数据也能用来看一家公司，这是我以前没想到的。", "Fewer births mean less demand for infant formula. I had not thought population data could be used to read a company."),
      T("和海天一样，增长慢的日常消费品，市场把它当分红股看。", "Like Haitian, a slow-growing everyday product gets treated as a dividend stock.")
    ],
    question: T("中国人均喝奶量只有日本一半左右。这个差距会慢慢缩小吗？", "Chinese people drink about half as much milk as Japanese people. Will that gap close?"),
    risk: [
      T("液态奶需求在下降。", "Liquid milk demand is falling."),
      T("和蒙牛打价格战，促销费用高。", "A price war with Mengniu keeps promotion costs high.")
    ]
  },

  {
    id: "300760", date: "2026-08-07", chapter: "unseen", code: "300760.SZ",
    company: T("迈瑞医疗", "Mindray"), industry: T("医疗器械", "Medical devices"), sector: "health",
    price: 200, mcap: 2420, mult: 25, moatScore: 4, trend: "stable", verdict: "fair",
    why: T("前面看的都是看得见、摸得着的东西。我想开始看更难懂的行业，先从医院里能看到的医疗设备开始。", "Everything so far was something you can see and touch. I wanted to try harder industries, starting with the equipment you see in hospitals."),
    money: [
      T("卖监护仪、呼吸机、超声机给医院。", "Sells monitors, ventilators and ultrasound machines to hospitals."),
      T("卖验血的检测仪器和试剂。试剂要一直买。", "Sells blood-testing machines and reagents. Hospitals keep buying reagents.")
    ],
    moat: [
      T("产品线全，医院可以一次买齐。", "A full product line, so a hospital can buy everything at once."),
      T("检测仪器和试剂是配套的。用上了，就不好换。", "Machines and reagents go together. Once a hospital uses them, switching is hard.")
    ],
    value: T("股价约 200 元，市盈率约 25 倍，比它前几年便宜很多。", "About CNY 200, around 25x earnings, much cheaper than a few years ago."),
    insight: [
      T("检测仪器像剃须刀，试剂像刀片。机器只卖一次，试剂每天都在用。这种收入更稳。", "The machine is the razor and the reagent is the blade. The machine sells once; the reagent is used every day. That income is steadier."),
      T("和药企不同，迈瑞不用赌某一个新药能不能成功。风险更分散。", "Unlike a drugmaker, Mindray does not bet on any single new drug. Its risk is spread out.")
    ],
    question: T("医院钱紧的时候，先少买设备，还是先少买药？", "When hospitals are short of money, do they cut equipment first or drugs first?"),
    risk: [
      T("国内医院采购变慢。", "Hospitals in China are buying more slowly."),
      T("试剂进入集采，价格被压低。", "Bulk-buying programmes push reagent prices down.")
    ]
  },

  {
    id: "600276", date: "2026-08-21", chapter: "unseen", code: "600276.SH",
    company: T("恒瑞医药", "Jiangsu Hengrui"), industry: T("创新药", "Innovative drugs"), sector: "health",
    price: 63, mcap: 4180, mult: 55, moatScore: 4, trend: "widening", verdict: "fair",
    why: T("上一期留下的问题：医院钱紧时，先砍设备还是先砍药？这期看药企。恒瑞是国内研发花钱最多的药企。", "Last time I asked whether hospitals cut equipment or drugs first. This time, a drugmaker. Hengrui spends the most on research in China."),
    money: [
      T("卖处方药给医院，抗肿瘤药是最大的一块。", "Sells prescription drugs to hospitals. Cancer drugs are the biggest part."),
      T("把新药的海外权利授权给外国药企，收首付款。", "Licenses overseas rights to new drugs to foreign drugmakers for upfront payments.")
    ],
    moat: [
      T("在研新药多，上市的创新药超过 20 个。", "A long pipeline, with over 20 innovative drugs on the market."),
      T("销售网络覆盖全国医院，新药出来卖得快。", "Its sales team covers hospitals nationwide, so new drugs sell quickly.")
    ],
    value: T("股价约 63 元，市盈率约 55 倍，是我看过最贵的之一。", "About CNY 63, around 55x earnings, one of the most expensive I have looked at."),
    insight: [
      T("买药企有点像买一堆彩票。十个新药里，可能只有两三个能成。55 倍买的不是现在的利润，是这些彩票中奖的机会。", "Buying a drugmaker is a bit like buying a stack of lottery tickets. Of ten new drugs, maybe two or three succeed. At 55x, you are not paying for today's profit. You are paying for the chance those tickets win."),
      T("GSK 这样的外国大药企愿意花钱买它的药。中国的研发开始被认可了。", "Big foreign drugmakers like GSK pay for its drugs. Chinese research is starting to be taken seriously."),
      T("和迈瑞比：迈瑞卖的东西医院每天都在用，恒瑞押注的是还没上市的药。所以它的估值波动大得多。", "Compared with Mindray: Mindray sells things hospitals use every day, while Hengrui bets on drugs not yet approved. So its valuation swings much more.")
    ],
    question: T("怎么判断一个药能不能成功？我不懂医学，这是我的盲区。", "How do you judge whether a drug will work? I do not know medicine. This is my blind spot."),
    risk: [
      T("临床试验失败，会直接打到股价。", "A failed trial hits the share price directly."),
      T("进医保要大幅降价。", "Getting onto the insurance list means big price cuts.")
    ]
  },

  {
    id: "600036", date: "2026-09-04", chapter: "unseen", code: "600036.SH",
    company: T("招商银行", "China Merchants Bank"), industry: T("银行", "Banking"), sector: "finance",
    price: 42, mcap: 10590, mult: 0.95, metric: "PB", moatScore: 4, trend: "stable", verdict: "fair-low",
    why: T("药企卖的是「未来可能成功的药」，已经很抽象了。更抽象的，是卖「钱」的银行。银行之间，怎么分好坏？", "A drugmaker sells drugs that might work in the future, which is already abstract. A bank, which sells money, is even more abstract. How do you tell a good bank from a bad one?"),
    money: [
      T("低息吸收存款，高息放出贷款，赚中间的利差，约占六成收入。", "It borrows from savers at low rates and lends at higher rates. That spread is about 60% of revenue."),
      T("帮客户买基金和理财，收手续费。", "Fees from selling funds and wealth products.")
    ],
    moat: [
      T("活期存款多，拿到的钱最便宜。", "Lots of current-account deposits, so its money is the cheapest."),
      T("零售客户约 2 亿，App 好用，客户很少换银行。", "About 200 million retail customers and a good app. People rarely switch banks.")
    ],
    value: T("股价约 42 元，市净率不到 1 倍。市场给它的资产打了个折。股息率约 5%。", "About CNY 42, under 1x book value. The market discounts its assets. Dividend yield about 5%."),
    insight: [
      T("钱都是一样的。银行拼的不是产品，是谁拿到的存款更便宜，谁放的贷款更不容易变成坏账。", "Money is money. Banks do not compete on product. They compete on who gets the cheapest deposits and whose loans are least likely to go bad."),
      T("市净率低于 1，说明市场不完全相信它账上的资产值那么多。", "Below 1x book means the market does not fully believe its assets are worth what the books say.")
    ],
    question: T("为什么全世界大部分银行的市净率都在 1 倍上下？", "Why do most banks in the world trade around 1x book value?"),
    risk: [
      T("利率一直降，利差越来越薄。", "Rates keep falling, so the spread keeps shrinking."),
      T("房地产贷款可能出问题。", "Property loans could go bad.")
    ]
  },

  {
    id: "601318", date: "2026-09-18", chapter: "unseen", code: "601318.SH",
    company: T("中国平安", "Ping An Insurance"), industry: T("保险", "Insurance"), sector: "finance",
    price: 56, mcap: 10200, mult: 0.74, metric: "PEV", moatScore: 4, trend: "stable", verdict: "fair-low",
    why: T("银行是存钱、放贷。保险也是先收钱，但很多年以后才赔。巴菲特很多钱就是靠保险公司赚的。", "A bank takes deposits and lends. An insurer also takes money first, but pays years later. Buffett made much of his money through insurers."),
    money: [
      T("卖寿险、健康险、车险，收保费。", "Sells life, health and car insurance and collects premiums."),
      T("把收来的保费拿去投资。", "Invests the premiums.")
    ],
    moat: [
      T("约 2.4 亿个人客户，一个客户平均买好几种产品。", "About 240 million customers, each buying several products on average."),
      T("长期保单退保会亏钱，客户一般不走。", "Cancelling a long policy costs money, so customers usually stay.")
    ],
    value: T("股价约 56 元，只有内含价值的 0.7 倍左右。看起来便宜，但市场显然有顾虑。", "About CNY 56, only about 0.7x its embedded value. It looks cheap, but the market clearly has doubts."),
    insight: [
      T("保险公司先收钱，很多年后才赔钱。中间这笔钱可以一直拿去投资。巴菲特叫它「浮存金」。", "An insurer gets paid first and pays claims years later. The money in between can be invested the whole time. Buffett calls it \"float\"."),
      T("所以一家保险公司，一半是在卖保险，一半是在做投资。", "So an insurer is half selling insurance and half investing.")
    ],
    question: T("内含价值是怎么算出来的？我还没完全搞懂。", "How is embedded value calculated? I do not fully understand it yet."),
    risk: [
      T("利率太低时，投资收益可能不够付承诺给客户的钱。", "With rates this low, returns may not cover what it promised customers."),
      T("之前投资房地产公司亏过钱。", "It has lost money investing in property developers before.")
    ]
  },

  {
    id: "600030", date: "2026-10-02", chapter: "unseen", code: "600030.SH",
    company: T("中信证券", "CITIC Securities"), industry: T("证券", "Brokerage"), sector: "finance",
    price: 29, mcap: 4300, mult: 1.45, metric: "PB", moatScore: 4, trend: "widening", verdict: "fair",
    why: T("最后一期看券商。银行、保险、券商是金融的三大块。这期看完，路线上的 28 期就写完了。", "The last note: a broker. Banks, insurers and brokers are the three big parts of finance. With this one, the 28 notes on my path are done."),
    money: [
      T("帮人买卖股票，收佣金。", "Commissions on buying and selling shares."),
      T("帮公司上市和发债收费，还拿自己的钱投资。", "Fees for listings and bond issues, plus investing its own money.")
    ],
    moat: [
      T("国内最大的券商，资本最多，大项目都找它。", "China's largest broker, with the most capital. The big deals go to it."),
      T("基金、保险这些机构客户覆盖最全。", "The widest coverage of funds, insurers and other institutions.")
    ],
    value: T("股价约 29 元，市净率约 1.45 倍。", "About CNY 29, around 1.45x book value."),
    insight: [
      T("券商是股市的温度计。牛市赚得最多，熊市最惨。买券商，其实是在押股市会继续热。", "A broker is the stock market's thermometer. It earns most in bull markets and suffers most in bear markets. Buying one is really a bet that the market stays hot."),
      T("散户选券商主要看佣金便宜，所以普通经纪业务没什么护城河。真正的优势在机构业务。", "Retail traders choose brokers on low fees, so ordinary brokerage has little moat. The real edge is with institutions."),
      T("写完路线上的 28 期回头看，护城河大概就几种：品牌（茅台）、成本（牧原、美的）、牌照（中国移动、中免）、换起来麻烦（招行、迈瑞）。还有一种是时间：茅台的酿造周期、中天的光棒审批、北方华创的设备验证。钱买不来，也快不起来。", "Looking back over the 28 notes on my path, moats come in only a few kinds: brand (Moutai), cost (Muyuan, Midea), licences (China Mobile, CTG), and switching hassle (CMB, Mindray). And one more: time. Moutai's five years of making, Zhongtian's preform permits, NAURA's tool approvals. Money cannot buy it, and nothing makes it faster.")
    ],
    question: T("中国有 100 多家券商，为什么这么多？会不会越合并越少？", "China has over 100 brokers. Why so many, and will mergers shrink the number?"),
    risk: [
      T("股市转冷，利润可能直接减半。", "If the market cools, profit could halve."),
      T("国泰君安和海通合并后，成了一个强对手。", "The Guotai Junan and Haitong merger created a strong rival.")
    ]
  }
);

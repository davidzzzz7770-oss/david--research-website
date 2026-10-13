/* All notes. price in CNY per share and mcap in CNY 100 m (亿元), both as of the note date; mult = P/E unless metric says otherwise. */
window.REPORTS.push(  {
    id: "600519", date: "2025-08-08", chapter: "worth", code: "600519.SH",
    company: T("贵州茅台", "Kweichow Moutai"), industry: T("白酒", "Baijiu"), sector: "consumer",
    price: 1430, mcap: 17960, mult: 20.8, moatScore: 5, trend: "stable", verdict: "fair-low",
    why: T("A 股最值钱的消费公司，卖的却只是酒。我的第一个问题很简单：一瓶酒凭什么值这么多钱？是因为它利润高吗？", "The most valuable consumer company in China, and all it sells is liquor. My first question was simple: how can a bottle of alcohol be worth this much? Is it just because it's so profitable?"),
    money: [
      T("飞天茅台一款酒贡献约 7 成收入。", "One product, Feitian Moutai, brings in about 70% of revenue."),
      T("毛利率约 92%，卖 100 元成本不到 10 元。", "Gross margin is about 92%: of every CNY 100 in sales, costs are under CNY 10.")
    ],
    moat: [
      T("只能在赤水河边那一小块地方酿，别处做不出同样的味道。", "It can only be made in one small area by the Chishui River; nowhere else gets the same taste."),
      T("一瓶酒从生产到卖出要 5 年左右，想多卖也多不了。", "Each bottle takes about five years to make, so supply can't just be increased."),
      T("送礼和请客时大家认它，这个心智别人很难抢。", "It's the default bottle for gifts and banquets, and that habit is hard to steal.")
    ],
    value: T("股价约 1,430 元，市盈率约 21 倍。对一家毛利 92% 的公司来说比我想的便宜，市场应该是在担心增长变慢。", "About CNY 1,430 a share, roughly 21x earnings. Cheaper than I expected for a 92%-margin business; the market seems worried about slowing growth."),
    insight: [
      T("茅台出厂价 1,169 元，市场上卖 2,000 元左右。中间的差价被经销商赚走了。茅台好像是故意少赚，用这个差价让大家觉得它稀缺。", "Moutai sells to distributors at CNY 1,169, but it goes for about CNY 2,000 in shops. Distributors pocket the gap. Moutai seems to leave that money on the table on purpose, because the gap keeps it feeling scarce."),
      T("i 茅台 App 可以理解为茅台想把这部分差价拿回自己手里。", "The i-Moutai app looks like Moutai's way of taking some of that gap back for itself.")
    ],
    question: T("年轻人越来越少喝白酒，20 年后谁来买？", "Fewer young people drink baijiu. Who will be buying it in 20 years?"),
    risk: [
      T("批价从 2,500 元以上跌到 2,000 元附近，说明需求在变弱。", "The wholesale price fell from over CNY 2,500 to around CNY 2,000, a sign demand is weakening."),
      T("政府限制公务宴请，对高端白酒影响最直接。", "Limits on official banquets hit premium baijiu first.")
    ]
  },
  {
    id: "601668", date: "2025-08-22", chapter: "worth", code: "601668.SH",
    company: T("中国建筑", "China State Construction"), industry: T("建筑", "Construction"), sector: "infra",
    price: 5.6, mcap: 2310, mult: 5, moatScore: 3, trend: "narrowing", verdict: "fair-low",
    why: T("上期发现茅台利润特别高。那反过来，收入最多的公司是不是最值钱？中国建筑的营收是全世界建筑公司第一，正好拿来对比。", "Last time I found Moutai is extremely profitable. So is the company with the most revenue the most valuable? China State Construction has the highest revenue of any builder in the world, a perfect comparison."),
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
    id: "600900", date: "2025-09-05", chapter: "worth", code: "600900.SH",
    company: T("长江电力", "China Yangtze Power"), industry: T("水电", "Hydropower"), sector: "infra",
    price: 28, mcap: 6850, mult: 20, moatScore: 5, trend: "stable", verdict: "fair",
    why: T("中国建筑让我明白，收入再大，钱收不回来也不值钱。那如果一家公司赚钱特别稳，钱也一定收得回来呢？长江电力每年稳定发电收钱，最适合拿来看。", "China State Construction taught me that huge revenue means little if you can't collect the cash. So what about a company whose income is very steady and always gets paid? Yangtze Power, selling electricity every year, is the obvious one to look at."),
    money: [
      T("六座大型水电站发电卖给电网。", "Six big hydropower plants sell electricity to the grid."),
      T("每年发电约 3,000 亿度，净利润约 325 亿元。", "About 300 TWh a year, with net profit around CNY 32.5 bn.")
    ],
    moat: [
      T("长江上最好的坝址都建完了，不可能再出现第二个三峡。", "The best dam sites on the Yangtze are taken; there can't be a second Three Gorges."),
      T("水是免费的，没有燃料成本。", "Water is free, so there's no fuel cost.")
    ],
    value: T("股价约 28 元，市盈率约 20 倍，股息率约 3.5%。", "About CNY 28, around 20x earnings, with a ~3.5% dividend yield."),
    insight: [
      T("它像一个「收租」的生意：大坝建好后几乎不用再花大钱，每年稳稳地发电收钱。", "It's like collecting rent: once the dam is built there's little more to spend, and it earns steady money every year."),
      T("所以它的股价跟利率的关系比跟经济的关系更大。利率低的时候，大家愿意为稳定的分红付更多钱。", "So its share price depends more on interest rates than on the economy. When rates are low, investors pay more for steady dividends.")
    ],
    question: T("如果利率上升，它的股价会跌多少？", "If interest rates rise, how much would its share price fall?"),
    risk: [
      T("干旱年份发电量会明显下降。", "A dry year cuts power output noticeably."),
      T("规模已经到顶，很难再长大。", "It has reached its full size and can't grow much more.")
    ]
  },
  {
    id: "603288", date: "2025-09-19", chapter: "worth", code: "603288.SH",
    company: T("海天味业", "Foshan Haitian"), industry: T("调味品", "Condiments"), sector: "consumer",
    price: 38, mcap: 2220, mult: 32, moatScore: 4, trend: "stable", verdict: "fair",
    why: T("长江电力靠的是独一无二的大坝。那卖最普通东西、没有独占资源的公司，能不能也一样稳？所以选了酱油。", "Yangtze Power relies on dams no one else can have. Can a company selling the most ordinary product, with no exclusive resource, be just as steady? So I picked soy sauce."),
    money: [
      T("酱油约占 6 成收入，还有蚝油、调味酱。", "Soy sauce is about 60% of revenue, plus oyster sauce and pastes."),
      T("大概 6 成卖给餐馆，3 成卖给家庭。", "Roughly 60% goes to restaurants and 30% to households.")
    ],
    moat: [
      T("工厂规模最大，成本最低。", "Biggest factories, lowest cost."),
      T("经销商约 6,700 家，小县城的小卖部都能买到。", "About 6,700 distributors; you can find it in small-town corner shops.")
    ],
    value: T("股价约 38 元，市盈率约 32 倍。增长已经不快了，但市场还是给了不低的价格。", "About CNY 38, around 32x earnings. Growth has slowed, but the market still prices it fairly high."),
    insight: [
      T("酱油便宜，没人会为了省几块钱换牌子；餐馆厨师更在乎味道每次都一样。所以便宜的东西反而有粘性。", "Soy sauce is cheap, so nobody switches brands to save a few yuan, and chefs care most about consistent taste. Cheap products can be surprisingly sticky."),
      T("但 2023 年「零添加」的争议让它股价大跌，说明消费品的护城河也会被一次舆论打出缺口。", "But the 2023 \"zero additives\" controversy crushed the stock, which shows a consumer brand's moat can be dented by one wave of public opinion.")
    ],
    question: T("增长这么慢，32 倍市盈率合理吗？", "With growth this slow, is 32x earnings reasonable?"),
    risk: [
      T("餐馆生意不好，酱油用量就少。", "When restaurants struggle, they use less sauce."),
      T("千禾等「零添加」品牌在抢高端市场。", "\"Zero additive\" brands like Qianhe are taking the premium end.")
    ]
  },
  {
    id: "000333", date: "2025-10-03", chapter: "worth", code: "000333.SZ",
    company: T("美的集团", "Midea Group"), industry: T("家电", "Home appliances"), sector: "consumer",
    price: 73, mcap: 5600, mult: 13, moatScore: 4, trend: "widening", verdict: "under",
    why: T("海天和茅台都靠品牌。我想找一家品牌不算最强、却照样做到全球最大的公司，看看它靠什么赢。", "Haitian and Moutai both rely on brand. I wanted a company whose brand isn't the strongest yet still became the world's biggest, to see how it wins."),
    money: [
      T("空调约占 4 成收入，冰箱洗衣机和小家电是其余大部分。", "Air conditioners are about 40% of revenue; fridges, washers and small appliances make up most of the rest."),
      T("海外收入已经超过 4 成。", "Over 40% of revenue now comes from abroad.")
    ],
    moat: [
      T("规模最大，压缩机电机自己生产，成本最低。", "Biggest scale, makes its own compressors and motors, lowest cost."),
      T("按订单生产，库存少、周转快。", "Builds to order, so inventory is low and turns over fast.")
    ],
    value: T("股价约 73 元，市盈率只有 13 倍，股息率接近 5%。和茅台比便宜很多。", "About CNY 73, only 13x earnings with a dividend yield near 5%. Much cheaper than Moutai."),
    insight: [
      T("美的的品牌不算最强，却是最赚钱的家电公司。它赢在效率，不是赢在大家喜欢它。", "Midea doesn't have the strongest brand, yet it's the most profitable appliance maker. It wins on efficiency, not on being loved."),
      T("它为什么只值 13 倍？我的理解是家电谁都能做，它的优势要靠一直做得比别人好来维持，不像茅台那样别人根本做不出来。", "Why only 13x? My guess: anyone can make appliances, so Midea has to keep out-executing rivals, unlike Moutai, which nobody else can copy at all.")
    ],
    question: T("To B 业务（楼宇空调、机器人）以后会不会让市场重新给它更高的估值？", "Could its business-to-business side (building HVAC, robots) eventually earn it a higher valuation?"),
    risk: [
      T("国家以旧换新补贴结束后，国内销量可能下降。", "Domestic sales may drop once the trade-in subsidy ends."),
      T("新房少了，装空调的需求也少了。", "Fewer new homes means fewer new air conditioners.")
    ]
  },
  {
    id: "300750", date: "2025-10-17", chapter: "scale", code: "300750.SZ",
    company: T("宁德时代", "CATL"), industry: T("动力电池", "EV batteries"), sector: "newenergy",
    price: 385, mcap: 17550, mult: 30, moatScore: 5, trend: "widening", verdict: "fair-high",
    why: T("美的靠规模和效率赢。我想看看规模优势放到一个更新、增长更快的行业里是什么样，就选了全球最大的电池厂。", "Midea wins on scale and efficiency. I wanted to see what that looks like in a newer, faster-growing industry, so I chose the world's biggest battery maker."),
    money: [
      T("把电池卖给车企，约占 7 成收入。", "Sells batteries to carmakers, about 70% of revenue."),
      T("储能电池（给电网存电用）约 2 成，增长很快。", "Storage batteries for the power grid are about 20% and growing fast.")
    ],
    moat: [
      T("全球产量最大，所以单位成本最低。", "It makes the most batteries in the world, so each one costs the least."),
      T("电池要跟车型一起设计，车企换供应商很麻烦。", "Batteries are designed together with each car model, so switching suppliers is a pain.")
    ],
    value: T("股价约 385 元，市盈率约 30 倍。今年储能需求大涨，股价涨了很多，我觉得已经有点贵了。", "About CNY 385, roughly 30x earnings. Storage demand boomed this year and the stock rose a lot; it feels a bit expensive now."),
    insight: [
      T("电池价格每年都在降，但宁德的利润还在涨。原因是它降成本比降价更快。", "Battery prices fall every year, yet CATL's profit keeps rising, because it cuts costs faster than prices fall."),
      T("价格战对小厂是坏事，对龙头反而可能是好事：小厂撑不住退出，龙头份额变大。", "A price war is bad for small makers but can be good for the leader: the small ones drop out and the leader's share grows.")
    ],
    question: T("如果固态电池突然成熟，它会不会像当年的诺基亚一样被颠覆？", "If solid-state batteries suddenly arrive, could it get disrupted the way Nokia was?"),
    risk: [
      T("美国市场基本进不去，欧洲政策也不确定。", "The US market is mostly closed to it, and Europe's policy is uncertain."),
      T("比亚迪等车企自己做电池。", "Carmakers like BYD make their own batteries.")
    ]
  },
  {
    id: "002594", date: "2025-10-31", chapter: "scale", code: "002594.SZ",
    company: T("比亚迪", "BYD"), industry: T("新能源汽车", "Electric vehicles"), sector: "newenergy",
    price: 98, mcap: 8940, mult: 27, moatScore: 4, trend: "stable", verdict: "fair-high",
    why: T("上期发现宁德时代最大的威胁之一，是车企自己做电池，比亚迪就是最典型的一个。", "Last time I found one of CATL's biggest threats is carmakers making their own batteries, and BYD is the clearest example."),
    money: [
      T("卖车约占 8 成收入，2024 年卖了约 427 万辆。", "Cars are about 80% of revenue; it sold about 4.27 m in 2024."),
      T("还帮苹果等公司组装手机零件。", "It also assembles phone parts for companies like Apple.")
    ],
    moat: [
      T("电池、芯片、电机都自己做，像苹果自己设计芯片一样。", "Makes its own batteries, chips and motors, a bit like Apple designing its own chips."),
      T("规模大，所以在价格战里能降价降得最狠。", "Its scale lets it cut prices harder than anyone in a price war.")
    ],
    value: T("股价约 98 元，市盈率约 27 倍。比美的贵一倍，我觉得有点贵。", "About CNY 98, roughly 27x earnings, twice Midea's multiple. Feels a bit expensive to me."),
    insight: [
      T("卖得最多不等于赚得最多。2025 年它销量还在涨，利润却在降，因为一直在降价。", "Selling the most doesn't mean earning the most. In 2025 its sales kept rising while profit fell, because it kept cutting prices."),
      T("市场愿意给它 27 倍，主要是在押海外市场，而不是国内。", "The market's 27x is mostly a bet on overseas markets, not China.")
    ],
    question: T("欧洲人会愿意买中国品牌的车吗？", "Will Europeans actually buy a Chinese car brand?"),
    risk: [
      T("国内价格战一直打下去，利润会越来越薄。", "If the domestic price war keeps going, margins keep thinning."),
      T("欧盟对中国电动车加关税。", "EU tariffs on Chinese EVs.")
    ]
  },
  {
    id: "300274", date: "2025-11-14", chapter: "scale", code: "300274.SZ",
    company: T("阳光电源", "Sungrow Power"), industry: T("光伏逆变器与储能", "Solar inverters & storage"), sector: "newenergy",
    price: 175, mcap: 3630, mult: 25, moatScore: 4, trend: "widening", verdict: "fair",
    why: T("看完电池和电动车，新能源还剩一块：太阳能。做光伏板的公司都在亏钱，阳光电源却在赚钱，我想知道为什么。", "After batteries and EVs, one part of new energy was left: solar. Panel makers are losing money, yet Sungrow is profitable. I wanted to know why."),
    money: [
      T("储能系统（给电网存电）约占 4 成，已经是最大的业务。", "Storage systems for the grid are about 40%, now its biggest business."),
      T("逆变器（把太阳能板的电变成能用的电）约占 3 成。", "Inverters, which turn solar panel power into usable electricity, are about 30%.")
    ],
    moat: [
      T("做了近 30 年电力电子，技术积累深。", "Nearly 30 years in power electronics."),
      T("海外认证和渠道多，欧美大项目经验丰富。", "Lots of overseas certifications and experience with big Western projects.")
    ],
    value: T("股价约 175 元，市盈率约 25 倍。今年储能很火，它也涨了不少。", "About CNY 175, around 25x earnings. Storage was hot this year and the stock rose a lot too."),
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
    id: "601899", date: "2025-11-28", chapter: "cycle", code: "601899.SH",
    company: T("紫金矿业", "Zijin Mining"), industry: T("有色金属", "Metals & mining"), sector: "resources",
    price: 30, mcap: 7970, mult: 16, moatScore: 4, trend: "widening", verdict: "fair",
    why: T("前几期的公司多少都能自己定价。我想看看价格完全由市场决定的行业。今年金价铜价都很高，就从挖矿开始。", "The companies so far could set their own prices to some degree. I wanted an industry where the market sets the price. Gold and copper were both high this year, so I started with mining."),
    money: [
      T("挖铜、挖金卖出去，铜约占一半利润。", "Mines and sells copper and gold; copper is about half the profit."),
      T("矿山分布在 10 多个国家。", "Mines in more than ten countries.")
    ],
    moat: [
      T("手里有几座世界级的大铜矿。", "Owns several world-class copper mines."),
      T("擅长把别人觉得不划算的矿开发成赚钱的矿。", "Good at turning mines others gave up on into profitable ones.")
    ],
    value: T("股价约 30 元，市盈率约 16 倍。但这个数字要看金属价格，价格一变就完全不同。", "About CNY 30, around 16x earnings. But that depends on metal prices; if they move, everything changes."),
    insight: [
      T("矿企自己决定不了卖多少钱，铜价金价是全球市场定的。它唯一能控制的是成本。", "A miner can't set its own selling price; copper and gold prices are set globally. The only thing it controls is cost."),
      T("看周期股时，市盈率最低的时候可能反而是最危险的时候：利润最高、看起来最便宜，接下来价格一跌利润就没了。", "With cyclical stocks, the lowest P/E can be the most dangerous moment: profit is at its peak so it looks cheap, and then prices fall and profit vanishes.")
    ],
    question: T("怎么判断现在处在周期的哪个位置？", "How do you tell where you are in the cycle?"),
    risk: [
      T("金属价格下跌。", "Falling metal prices."),
      T("海外矿山所在国家的政策和安全问题。", "Policy and security risks in the countries where its mines are.")
    ]
  },
  {
    id: "601088", date: "2025-12-12", chapter: "cycle", code: "601088.SH",
    company: T("中国神华", "China Shenhua"), industry: T("煤炭", "Coal"), sector: "resources",
    price: 40, mcap: 7950, mult: 15, moatScore: 4, trend: "stable", verdict: "fair",
    why: T("紫金让我知道，商品价格好的时候矿企很赚钱。那大家都说没前途的煤炭呢？神华这几年股价却不差，我觉得很矛盾。", "Zijin showed me miners earn a lot when prices are good. What about coal, which everyone says has no future? Shenhua's stock has done well anyway, which seemed contradictory."),
    money: [
      T("卖煤约占 6 成收入，还有发电、铁路运输。", "Coal sales are about 60% of revenue, plus power generation and rail freight."),
      T("自己有铁路、港口和船，把煤从矿一路运到电厂。", "Owns railways, ports and ships to move coal from mine to power plant.")
    ],
    moat: [
      T("煤矿成本低，又有自己的运输网，别人很难复制。", "Low-cost mines plus its own transport network, which is hard to copy."),
      T("大部分煤按长期合同卖，收入比较稳。", "Most coal is sold on long-term contracts, so revenue is steady.")
    ],
    value: T("股价约 40 元，市盈率约 15 倍，股息率约 6%。", "About CNY 40, around 15x earnings, with a ~6% dividend yield."),
    insight: [
      T("正因为大家都觉得煤炭没前途，没人愿意投资开新矿。供给少了，老公司反而很赚钱，还把钱分给股东。", "Because everyone thinks coal has no future, nobody invests in new mines. With less new supply, the existing companies make good money and pay it out as dividends."),
      T("「夕阳行业」不等于「坏生意」，关键看会不会有新竞争者进来。", "A \"sunset industry\" isn't the same as a bad business. What matters is whether new competitors come in.")
    ],
    question: T("夕阳行业到底什么时候会真的落山？", "When does a sunset industry actually set?"),
    risk: [
      T("风电光伏越来越多，煤电的空间会慢慢变小。", "More wind and solar will slowly shrink coal power's role."),
      T("煤价下跌。", "Falling coal prices.")
    ]
  },
  {
    id: "600309", date: "2025-12-26", chapter: "cycle", code: "600309.SH",
    company: T("万华化学", "Wanhua Chemical"), industry: T("化工", "Chemicals"), sector: "resources",
    price: 70, mcap: 2190, mult: 18, moatScore: 4, trend: "stable", verdict: "fair",
    why: T("煤和铜谁都能挖，所以拼成本。那如果一种产品全世界只有几家能做，是不是就不怕周期了？", "Anyone can dig coal or copper, so it comes down to cost. But if only a handful of companies in the world can make a product, does that protect it from the cycle?"),
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
    id: "600019", date: "2026-01-09", chapter: "cycle", code: "600019.SH",
    company: T("宝钢股份", "Baoshan Iron & Steel"), industry: T("钢铁", "Steel"), sector: "resources",
    price: 7.2, mcap: 1560, mult: 0.77, metric: "PB", moatScore: 3, trend: "stable", verdict: "fair-low",
    why: T("万华说明技术壁垒也挡不住周期。那在最惨的周期行业里，还有没有过得好的公司？钢铁就是公认很惨的行业。", "Wanhua showed a technical barrier can't stop the cycle. So in the worst cyclical industry, is anyone still doing well? Steel is known as one of the worst."),
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
    id: "002714", date: "2026-01-23", chapter: "cycle", code: "002714.SZ",
    company: T("牧原股份", "Muyuan Foods"), industry: T("生猪养殖", "Hog farming"), sector: "consumer",
    price: 45, mcap: 2460, mult: 3.5, metric: "PB", moatScore: 4, trend: "stable", verdict: "fair",
    why: T("前面这些周期品离生活都有点远。离生活最近的周期是猪肉价格，牧原是养猪最多的公司。", "The cyclical products so far felt distant from daily life. The cycle closest to home is the price of pork, and Muyuan raises the most pigs."),
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
      T("这跟紫金矿业、中国神华是一个道理：卖的东西价格由市场定的时候，成本最低的人赢。", "Same logic as Zijin Mining and China Shenhua: when the market sets the price, the lowest-cost producer wins.")
    ],
    question: T("国家现在要求大猪企控制产能，这会不会限制它继续长大？", "The government now asks big hog farmers to limit capacity. Will that cap Muyuan's growth?"),
    risk: [
      T("猪价长期低迷。", "Pig prices staying low for a long time."),
      T("猪瘟等疫病。", "Diseases like African swine fever.")
    ]
  },
  {
    id: "600031", date: "2026-02-06", chapter: "cycle", code: "600031.SH",
    company: T("三一重工", "Sany Heavy Industry"), industry: T("工程机械", "Construction machinery"), sector: "newenergy",
    price: 22, mcap: 1860, mult: 18, moatScore: 4, trend: "widening", verdict: "fair",
    why: T("看了这么多周期股，我想找一个能看出整个经济冷暖的指标。听说挖掘机销量就是一个，三一是最大的挖掘机公司。", "After so many cyclical stocks, I wanted a signal for the whole economy. Excavator sales are said to be one, and Sany is the biggest excavator maker."),
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
    id: "002475", date: "2026-02-20", chapter: "maker", code: "002475.SZ",
    company: T("立讯精密", "Luxshare Precision"), industry: T("消费电子制造", "Electronics manufacturing"), sector: "tech",
    price: 55, mcap: 3990, mult: 24, moatScore: 4, trend: "widening", verdict: "fair",
    why: T("三一一大半收入来自国外。还有一种中国公司也很全球化：给外国品牌造东西。AirPods 很多就是立讯组装的。", "Most of Sany's revenue comes from abroad. Another kind of Chinese company is global too: the ones that build products for foreign brands. Luxshare assembles many AirPods."),
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
    id: "601138", date: "2026-03-06", chapter: "maker", code: "601138.SH",
    company: T("工业富联", "Foxconn Industrial Internet"), industry: T("AI 服务器", "AI servers"), sector: "tech",
    price: 60, mcap: 11900, mult: 26, moatScore: 4, trend: "widening", verdict: "fair",
    why: T("立讯是给苹果打工。现在最火的是 AI，我想看看 AI 热潮里给英伟达打工的公司赚得怎么样。", "Luxshare works for Apple. AI is the hottest thing now, so I wanted to see how the company building servers for NVIDIA is doing."),
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
    id: "002415", date: "2026-03-20", chapter: "maker", code: "002415.SZ",
    company: T("海康威视", "Hikvision"), industry: T("安防", "Security cameras"), sector: "tech",
    price: 30, mcap: 2750, mult: 21, moatScore: 4, trend: "stable", verdict: "fair",
    why: T("立讯和工业富联都是给别人造。海康是少数自己有品牌、还卖到全世界第一的中国硬件公司，正好对比。", "Luxshare and Foxconn Industrial build for others. Hikvision is one of the few Chinese hardware companies with its own brand that became No.1 worldwide, a good contrast."),
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
    id: "688981", date: "2026-04-03", chapter: "maker", code: "688981.SH",
    company: T("中芯国际", "SMIC"), industry: T("芯片制造", "Chip manufacturing"), sector: "tech",
    price: 105, mcap: 8390, mult: 5.5, metric: "PB", moatScore: 4, trend: "widening", verdict: "fair",
    why: T("海康被美国制裁，芯片买不到。这让我想知道：中国自己的芯片是谁在造？", "Hikvision is under US sanctions and can't buy some chips. That made me wonder: who makes China's own chips?"),
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
    id: "002371", date: "2026-05-29", chapter: "maker", code: "002371.SZ",
    company: T("北方华创", "NAURA Technology"), industry: T("半导体设备", "Chip equipment"), sector: "tech",
    price: 450, mcap: 2400, mult: 26, moatScore: 4, trend: "widening", verdict: "fair",
    why: T("考前最后一期看了中芯国际。停了一个月回来，接着看它工厂里的机器是谁造的。", "My last note before exams was SMIC. Back after a month off, I picked up where I left off: who builds the machines in its factories?"),
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
    id: "600941", date: "2026-06-12", chapter: "daily", code: "600941.SH",
    company: T("中国移动", "China Mobile"), industry: T("通信运营", "Telecom"), sector: "infra",
    price: 105, mcap: 22600, mult: 16, moatScore: 4, trend: "stable", verdict: "fair",
    why: T("芯片这条线看完，我想换个方向：每天都在用、但很少想过它怎么赚钱的公司。最先想到的就是每部手机里都有的那张卡。", "With the chip thread done, I switched direction to companies we use every day without thinking about how they make money. The first that came to mind was the SIM card in everyone's phone."),
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
    id: "601888", date: "2026-06-26", chapter: "daily", code: "601888.SH",
    company: T("中国中免", "China Tourism Group Duty Free"), industry: T("免税店", "Duty-free retail"), sector: "consumer",
    price: 70, mcap: 1450, mult: 30, moatScore: 4, trend: "stable", verdict: "fair",
    why: T("中国移动的护城河是国家发的牌照。免税店也要牌照才能开，我想看看同样靠牌照，两家有什么不同。", "China Mobile's moat is a government licence. Duty-free shops also need a licence, so I wanted to compare two businesses that both depend on one."),
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
    id: "002352", date: "2026-07-10", chapter: "daily", code: "002352.SZ",
    company: T("顺丰控股", "SF Holding"), industry: T("快递", "Express delivery"), sector: "infra",
    price: 40, mcap: 1990, mult: 15, moatScore: 4, trend: "stable", verdict: "fair-low",
    why: T("继续看日常生活里的服务。寄急件大家都会选顺丰，虽然它最贵，它是怎么做到的？", "More everyday services. Everyone picks SF for urgent parcels even though it's the most expensive. How does it manage that?"),
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
    id: "600887", date: "2026-07-24", chapter: "daily", code: "600887.SH",
    company: T("伊利股份", "Yili Group"), industry: T("乳制品", "Dairy"), sector: "consumer",
    price: 28, mcap: 1770, mult: 17, moatScore: 4, trend: "stable", verdict: "fair-low",
    why: T("日常消费的最后一期，选了超市里最常见的牛奶。", "The last of the everyday companies: the milk you see in every supermarket."),
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
    id: "300760", date: "2026-08-07", chapter: "unseen", code: "300760.SZ",
    company: T("迈瑞医疗", "Mindray"), industry: T("医疗器械", "Medical devices"), sector: "health",
    price: 200, mcap: 2420, mult: 25, moatScore: 4, trend: "stable", verdict: "fair",
    why: T("前面看的都是看得见摸得着的东西。我想开始挑战更难懂的行业，先从医院里看得到的医疗设备开始。", "Everything so far was something you can see and touch. I wanted to try harder industries, starting with the medical equipment you see in hospitals."),
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
      T("和药企不同，迈瑞不用赌某一个新药能不能成功，风险更分散。", "Unlike a drugmaker, Mindray doesn't depend on any single new drug succeeding, so its risk is more spread out.")
    ],
    question: T("医院预算紧张的时候，会先少买设备还是先少买药？", "When hospital budgets are tight, do they cut equipment first or drugs first?"),
    risk: [
      T("国内医院采购变慢。", "Chinese hospitals are buying more slowly."),
      T("试剂进入集采，价格被压低。", "Reagent prices are being pushed down by bulk-buying programmes.")
    ]
  },
  {
    id: "600276", date: "2026-08-21", chapter: "unseen", code: "600276.SH",
    company: T("恒瑞医药", "Jiangsu Hengrui"), industry: T("创新药", "Innovative drugs"), sector: "health",
    price: 63, mcap: 4180, mult: 55, moatScore: 4, trend: "widening", verdict: "fair",
    why: T("上期留下的问题是：医院钱紧的时候，先砍设备还是先砍药？这期就来看药企。恒瑞是国内研发花钱最多的药企。", "Last time I wondered whether hospitals cut equipment or drugs first when money is tight. So this time, a drugmaker: Hengrui spends the most on R&D in China."),
    money: [
      T("卖处方药给医院，抗肿瘤药是最大的一块。", "Sells prescription drugs to hospitals; cancer drugs are the biggest part."),
      T("把新药的海外权利授权给外国药企，收首付款。", "Licenses overseas rights to new drugs to foreign drugmakers for upfront payments.")
    ],
    moat: [
      T("在研新药很多，上市的创新药超过 20 个。", "A big pipeline, with over 20 innovative drugs already approved."),
      T("销售网络覆盖全国医院，新药出来能很快卖开。", "Its sales team covers hospitals nationwide, so new drugs sell quickly.")
    ],
    value: T("股价约 63 元，市盈率约 55 倍，是我目前看过最贵的。", "About CNY 63, around 55x earnings, the most expensive I've looked at so far."),
    insight: [
      T("买药企有点像买一堆彩票：10 个新药里可能只有两三个成功。55 倍市盈率买的不是现在的利润，是这些「彩票」中奖的机会。", "Buying a drug company is a bit like buying a stack of lottery tickets: maybe two or three of ten new drugs succeed. At 55x, you're paying for those chances, not today's profit."),
      T("GSK 这样的外国大药企愿意花钱买它的药，说明中国的研发开始被认可了。", "Big foreign drugmakers like GSK paying for its drugs shows Chinese R&D is starting to be taken seriously."),
      T("和上期的迈瑞比，迈瑞卖的东西医院每天都在用，恒瑞却要押注还没上市的新药，所以它的估值波动大得多。", "Compared with Mindray last time, which sells things hospitals use every day, Hengrui is betting on drugs not yet approved, so its valuation swings much more.")
    ],
    question: T("怎么判断一个药能不能成功？我不懂医学，这是我的盲区。", "How do you judge whether a drug will succeed? I don't know medicine; this is my blind spot."),
    risk: [
      T("临床试验失败会直接影响股价。", "A failed trial would hit the share price directly."),
      T("进医保要大幅降价。", "Getting onto the national insurance list means big price cuts.")
    ]
  },
  {
    id: "600036", date: "2026-09-04", chapter: "unseen", code: "600036.SH",
    company: T("招商银行", "China Merchants Bank"), industry: T("银行", "Banking"), sector: "finance",
    price: 42, mcap: 10590, mult: 0.95, metric: "PB", moatScore: 4, trend: "stable", verdict: "fair-low",
    why: T("药企卖的是「未来可能成功的药」，已经很抽象了。更抽象的是卖「钱」的银行，我想知道银行之间怎么分好坏。", "A drugmaker sells drugs that might work in the future, which is already abstract. Even more abstract is a bank, which sells money. I wanted to know how you tell a good bank from a bad one."),
    money: [
      T("低息吸收存款，高息放出贷款，赚中间的利差，约占 6 成收入。", "Takes deposits at low rates and lends at higher rates; that spread is about 60% of revenue."),
      T("帮客户买基金、理财收手续费。", "Earns fees selling funds and wealth products.")
    ],
    moat: [
      T("活期存款多，等于拿到的钱最便宜。", "Lots of current-account deposits means its money is the cheapest."),
      T("零售客户约 2 亿，App 好用，客户不太会换银行。", "About 200 m retail customers and a good app, so people rarely switch banks.")
    ],
    value: T("股价约 42 元，市净率不到 1 倍，相当于市场觉得它的资产打了个折。股息率约 5%。", "About CNY 42, under 1x book value, meaning the market values its assets at a discount. Dividend yield around 5%."),
    insight: [
      T("钱都是一样的，所以银行之间拼的不是产品，而是谁拿到的存款更便宜、谁放的贷款更不容易变成坏账。", "Money is money, so banks don't compete on product. They compete on who gets the cheapest deposits and whose loans are least likely to go bad."),
      T("市净率低于 1，说明市场不完全相信账上的资产都值那么多。", "Trading below book value means the market doesn't fully trust that its assets are worth what the books say.")
    ],
    question: T("为什么全世界大部分银行的市净率都在 1 倍上下？", "Why do most banks around the world trade around 1x book value?"),
    risk: [
      T("利率一直降，银行赚的利差越来越薄。", "Interest rates keep falling, so the spread banks earn keeps shrinking."),
      T("房地产贷款可能出问题。", "Property loans could go bad.")
    ]
  },
  {
    id: "601318", date: "2026-09-18", chapter: "unseen", code: "601318.SH",
    company: T("中国平安", "Ping An Insurance"), industry: T("保险", "Insurance"), sector: "finance",
    price: 56, mcap: 10200, mult: 0.74, metric: "PEV", moatScore: 4, trend: "stable", verdict: "fair-low",
    why: T("银行是存钱放贷。保险也是先收钱，但很多年以后才赔，巴菲特很多钱就是靠保险公司赚的。", "A bank takes deposits and lends. An insurer also collects money first, but pays claims years later, and Buffett made much of his fortune through insurance."),
    money: [
      T("卖寿险、健康险、车险收保费。", "Collects premiums on life, health and car insurance."),
      T("把收来的保费拿去投资，赚投资收益。", "Invests those premiums and earns returns on them.")
    ],
    moat: [
      T("约 2.4 亿个人客户，一个客户平均买好几种产品。", "About 240 m customers, each buying several products on average."),
      T("长期保单退保会亏钱，客户一般不会走。", "Cancelling a long-term policy costs money, so customers usually stay.")
    ],
    value: T("股价约 56 元，只有内含价值的 0.7 倍左右。看起来便宜，但市场显然有顾虑。", "About CNY 56, only about 0.7x its embedded value. Looks cheap, but the market clearly has doubts."),
    insight: [
      T("保险公司是先收钱、很多年后才赔钱，中间这笔钱可以一直拿去投资。巴菲特叫它「浮存金」。", "An insurer collects money now and pays claims years later, investing the money in between. Buffett calls it \"float\"."),
      T("所以保险公司的好坏，一半看卖保险的能力，一半看投资能力。", "So an insurer is half a sales business and half an investment business.")
    ],
    question: T("内含价值是怎么算出来的？我还没完全搞懂这个数字。", "How is embedded value actually calculated? I don't fully get this number yet."),
    risk: [
      T("利率太低时，投资收益可能不够付给客户承诺的利息。", "With very low rates, investment returns might not cover what it promised policyholders."),
      T("之前投资地产公司亏过钱。", "It has lost money investing in property developers before.")
    ]
  },
  {
    id: "600030", date: "2026-10-02", chapter: "unseen", code: "600030.SH",
    company: T("中信证券", "CITIC Securities"), industry: T("证券", "Brokerage"), sector: "finance",
    price: 29, mcap: 4300, mult: 1.45, metric: "PB", moatScore: 4, trend: "widening", verdict: "fair",
    why: T("最后一期看券商。银行、保险、券商是金融的三大块，这期看完，28 期也正好写完。", "The last note: a broker. Banks, insurers and brokers are the three big parts of finance, and this one completes all 28 notes."),
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
      T("散户炒股选券商主要看佣金便宜，所以普通经纪业务其实没什么护城河，真正的优势在机构业务。", "Retail traders pick brokers mainly on low fees, so ordinary brokerage has little moat. The real edge is in institutional business."),
      T("写完 28 期回头看，护城河好像就那几种：品牌（茅台）、成本（牧原、美的）、牌照（中国移动、中免）、换起来麻烦（招行、迈瑞）。", "Looking back over 28 notes, moats seem to come in just a few kinds: brand (Moutai), cost (Muyuan, Midea), licences (China Mobile, CTG Duty Free), and switching hassle (CMB, Mindray).")
    ],
    question: T("中国有 100 多家券商，为什么这么多？会不会越合并越少？", "China has over 100 brokers. Why so many, and will mergers shrink that number?"),
    risk: [
      T("股市转冷，利润可能直接减半。", "If the market cools, profit could halve."),
      T("国泰君安和海通合并后变成一个强对手。", "The Guotai Junan–Haitong merger created a strong rival.")
    ]
  }
);

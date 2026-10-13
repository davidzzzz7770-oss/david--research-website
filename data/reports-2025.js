/* Notes written in 2025. price in CNY per share, mcap in CNY 100 m (亿元), mult = P/E unless metric says otherwise. */
window.REPORTS.push(
  {
    id: "600519", date: "2025-08-08", code: "600519.SH",
    company: T("贵州茅台", "Kweichow Moutai"), industry: T("白酒", "Baijiu"), sector: "consumer",
    price: 1430, mcap: 17960, mult: 20.8, moatScore: 5, trend: "stable", verdict: "fair-low",
    why: T("A 股市值最大的消费公司，卖的却只是酒。我想知道一瓶酒凭什么值这么多钱。", "The most valuable consumer company in China, and all it sells is liquor. I wanted to know how a bottle of alcohol can be worth this much."),
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
    id: "300750", date: "2025-08-22", code: "300750.SZ",
    company: T("宁德时代", "CATL"), industry: T("动力电池", "EV batteries"), sector: "newenergy",
    price: 280, mcap: 12770, mult: 21, moatScore: 5, trend: "widening", verdict: "fair",
    why: T("路上的电动车，三辆里差不多有一辆用的是它的电池。", "Roughly one in three electric cars on the road runs on its batteries."),
    money: [
      T("把电池卖给车企，约占 7 成收入。", "Sells batteries to carmakers, about 70% of revenue."),
      T("储能电池（给电网存电用）约 2 成，增长很快。", "Storage batteries for the power grid are about 20% and growing fast.")
    ],
    moat: [
      T("全球产量最大，所以单位成本最低。", "It makes the most batteries in the world, so each one costs the least."),
      T("电池要跟车型一起设计，车企换供应商很麻烦。", "Batteries are designed together with each car model, so switching suppliers is a pain.")
    ],
    value: T("股价约 280 元，市盈率约 21 倍。考虑到利润还在增长，感觉价格差不多合理。", "About CNY 280, roughly 21x earnings. With profit still growing, the price looks about fair."),
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
    id: "000333", date: "2025-09-05", code: "000333.SZ",
    company: T("美的集团", "Midea Group"), industry: T("家电", "Home appliances"), sector: "consumer",
    price: 73, mcap: 5600, mult: 13, moatScore: 4, trend: "widening", verdict: "under",
    why: T("几乎每个家里都有它的空调或电饭煲，但我之前不知道它是全球最大的家电公司。", "Almost every home has one of its air conditioners or rice cookers, but I didn't know it was the world's biggest appliance company."),
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
    id: "600036", date: "2025-09-19", code: "600036.SH",
    company: T("招商银行", "China Merchants Bank"), industry: T("银行", "Banking"), sector: "finance",
    price: 42, mcap: 10590, mult: 0.95, metric: "PB", moatScore: 4, trend: "stable", verdict: "fair-low",
    why: T("想知道银行这种「卖钱」的生意怎么分好坏，招行常被说是最好的银行。", "I wanted to see how you tell a good bank from a bad one, and CMB is often called China's best."),
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
    id: "600900", date: "2025-10-03", code: "600900.SH",
    company: T("长江电力", "China Yangtze Power"), industry: T("水电", "Hydropower"), sector: "infra",
    price: 28, mcap: 6850, mult: 20, moatScore: 5, trend: "stable", verdict: "fair",
    why: T("它运营三峡大坝。我好奇一座建好的大坝每年能赚多少钱。", "It runs the Three Gorges Dam. I was curious how much a finished dam earns each year."),
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
    id: "601318", date: "2025-10-17", code: "601318.SH",
    company: T("中国平安", "Ping An Insurance"), industry: T("保险", "Insurance"), sector: "finance",
    price: 56, mcap: 10200, mult: 0.74, metric: "PEV", moatScore: 4, trend: "stable", verdict: "fair-low",
    why: T("巴菲特很多钱是靠保险公司赚的，我想看看中国最大的保险公司是怎么运作的。", "Buffett made a lot of his money through insurance companies, so I wanted to see how China's largest insurer works."),
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
    id: "600276", date: "2025-10-31", code: "600276.SH",
    company: T("恒瑞医药", "Jiangsu Hengrui"), industry: T("创新药", "Innovative drugs"), sector: "health",
    price: 63, mcap: 4180, mult: 55, moatScore: 4, trend: "widening", verdict: "fair",
    why: T("第一次看医药公司。它是国内研发花钱最多的药企。", "My first drug company. It spends more on R&D than any other Chinese drugmaker."),
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
      T("GSK 这样的外国大药企愿意花钱买它的药，说明中国的研发开始被认可了。", "Big foreign drugmakers like GSK paying for its drugs shows Chinese R&D is starting to be taken seriously.")
    ],
    question: T("怎么判断一个药能不能成功？我不懂医学，这是我的盲区。", "How do you judge whether a drug will succeed? I don't know medicine; this is my blind spot."),
    risk: [
      T("临床试验失败会直接影响股价。", "A failed trial would hit the share price directly."),
      T("进医保要大幅降价。", "Getting onto the national insurance list means big price cuts.")
    ]
  },

  {
    id: "603288", date: "2025-11-14", code: "603288.SH",
    company: T("海天味业", "Foshan Haitian"), industry: T("调味品", "Condiments"), sector: "consumer",
    price: 38, mcap: 2220, mult: 32, moatScore: 4, trend: "stable", verdict: "fair",
    why: T("酱油是最普通的东西，我想看看卖酱油能不能做成大公司。", "Soy sauce is about as ordinary as it gets. I wanted to see how selling it can become a big company."),
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
    id: "601899", date: "2025-11-28", code: "601899.SH",
    company: T("紫金矿业", "Zijin Mining"), industry: T("有色金属", "Metals & mining"), sector: "resources",
    price: 30, mcap: 7970, mult: 16, moatScore: 4, trend: "widening", verdict: "fair",
    why: T("今年金价和铜价都很高，想看看挖矿的公司怎么样。", "Gold and copper prices were both high this year, so I wanted to look at a miner."),
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
    id: "002594", date: "2025-12-12", code: "002594.SZ",
    company: T("比亚迪", "BYD"), industry: T("新能源汽车", "Electric vehicles"), sector: "newenergy",
    price: 98, mcap: 8940, mult: 27, moatScore: 4, trend: "stable", verdict: "fair-high",
    why: T("全球卖得最多的电动车品牌，街上到处都是。", "The world's best-selling EV brand; they're everywhere on the street."),
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
    id: "601088", date: "2025-12-26", code: "601088.SH",
    company: T("中国神华", "China Shenhua"), industry: T("煤炭", "Coal"), sector: "resources",
    price: 40, mcap: 7950, mult: 15, moatScore: 4, trend: "stable", verdict: "fair",
    why: T("大家都说煤炭是夕阳行业，但神华这几年股价涨得不错，我觉得很矛盾。", "Everyone calls coal a dying industry, yet Shenhua's stock has done well for years. That seemed contradictory."),
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
  }
);

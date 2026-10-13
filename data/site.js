/*
 * David's Notebook: site settings
 * ------------------------------------------------------------
 * Every piece of visible text is written as T("中文", "English").
 * Notes live in data/notes.js. Each note has a chapter key from SITE.chapters.
 * A missed fortnight: add its date to SITE.gaps.
 */
function T(zh, en) { return { zh: zh, en: en }; }
window.REPORTS = [];

window.SITE = {
  name: "David",
  start: "2025-08-08",   // first note; one every 14 days after that
  cadenceDays: 14,
  gaps: ["2026-04-17", "2026-05-01", "2026-05-15"],
  updated: "2026-10-13",
  intro: T(
    "我是 David，一个对投资感兴趣的高中生。从 2025 年 8 月开始，我每两周挑一个行业，看看它在 A 股里最大的那家公司是怎么赚钱的。不是专业研究，就是一边查资料一边记笔记，想弄明白：为什么有的公司值那么多钱，有的却很便宜。",
    "I'm David, a high school student who got curious about investing. Since August 2025, every two weeks I pick an industry and look at how its biggest company on China's A-share market makes money. It isn't professional research, just notes I take while reading, trying to work out why some companies are worth so much and others so little."
  ),
  /* The order of the notes: each chapter asks one question, each note leads to the next. */
  chapters: [
    { key: "worth",  name: T("什么样的公司值钱", "What makes a company valuable"), q: T("利润高、收入大、赚钱稳，哪个才是市场真正看重的？", "High profit, big revenue, or steady income: which does the market really pay for?") },
    { key: "scale",  name: T("规模和成本", "Scale and cost"), q: T("做得最大、成本最低，在新行业里还管用吗？", "Does being biggest and cheapest still work in a new industry?") },
    { key: "cycle",  name: T("价格自己说了不算", "When you don't set the price"), q: T("卖的东西价格由市场决定时，公司还能控制什么？", "When the market sets your price, what can a company still control?") },
    { key: "maker",  name: T("给别人造东西", "Making things for others"), q: T("给大客户代工和自己做品牌，差别在哪？", "What's the difference between building for big customers and owning the brand?") },
    { key: "daily",  name: T("每天都在用的生意", "Things we use every day"), q: T("天天用的东西，为什么有的很值钱，有的不怎么增长？", "Why are some everyday businesses valuable while others barely grow?") },
    { key: "unseen", name: T("看不见摸不着的生意", "Businesses you can't see"), q: T("卖的是未来的药、钱和承诺，该怎么理解？", "How do you understand businesses that sell future drugs, money and promises?") }
  ],
  sectors: [
    { key: "consumer",  name: T("消费", "Consumer") },
    { key: "finance",   name: T("金融", "Financials") },
    { key: "tech",      name: T("科技", "Technology") },
    { key: "newenergy", name: T("新能源与制造", "New energy & industrials") },
    { key: "resources", name: T("能源与材料", "Energy & materials") },
    { key: "infra",     name: T("基础设施", "Infrastructure") },
    { key: "health",    name: T("医药", "Healthcare") }
  ],
  about: [
    {
      h: T("为什么做这个", "Why"),
      p: T(
        "一开始是好奇：茅台一年赚的钱比中国建筑少，市值却是它的好几倍。我想知道市场到底在给什么付钱，就决定一个行业一个行业地看。",
        "It started with one question: Moutai earns less than China State Construction, yet it's worth several times more. I wanted to know what the market is really paying for, so I started going through industries one by one."
      )
    },
    {
      h: T("怎么记", "How I take notes"),
      p: T(
        "每期回答同样几个问题：它怎么赚钱，别人为什么抢不走，现在贵不贵，我发现了什么，我担心什么。资料主要看公司年报和新闻。数字都是大概的，看懂逻辑比数字准更重要。",
        "Each note answers the same few questions: how it makes money, why rivals can't take that away, whether it's expensive right now, what I noticed, and what worries me. I mostly read annual reports and news. The numbers are rough; understanding the logic matters more to me than precision."
      )
    },
    {
      h: T("为什么是这个顺序", "Why this order"),
      p: T(
        "顺序是跟着问题走的：每一期看完会留下一个疑问，下一期就去找答案。整体从最好懂的消费品开始，然后是周期行业、制造和科技，最后是最抽象的医药和金融。",
        "The order follows my questions: each note leaves one, and the next note goes looking for the answer. It starts with consumer products that are easiest to understand, moves through cyclical industries, manufacturing and tech, and ends with the most abstract: healthcare and finance."
      )
    },
    {
      h: T("断更", "The gap"),
      p: T(
        "2026 年 4 月中到 5 月中要考试，停了三期。日历里斜线的格子就是那三期。",
        "From mid-April to mid-May 2026 I had exams and skipped three notes. They're the hatched squares in the calendar."
      )
    }
  ],
  journal: [
    { date: "2026-05-29", text: T("考完试回来的第一期。考前最后一期写的是中芯国际，回来接着往下看它的设备商。", "First note after exams. My last note before the break was SMIC, so I picked up from there with its equipment supplier.") },
    { date: "2025-08-08", text: T("第一期，从茅台开始。想弄明白为什么一瓶酒能撑起将近两万亿的市值。", "First note, starting with Moutai. I want to understand how a bottle of liquor supports a company worth nearly CNY 2 trillion.") }
  ],
  disclaimer: T(
    "个人学习笔记，数字是大概的，不构成投资建议。",
    "Personal study notes. Numbers are approximate. Not investment advice."
  )
};

/* The questions every note answers, in page order */
window.FRAMEWORK = [
  { key: "why",     name: T("为什么看它", "Why this one") },
  { key: "money",   name: T("怎么赚钱", "How it makes money") },
  { key: "moat",    name: T("别人为什么抢不走", "Why rivals can't take it") },
  { key: "value",   name: T("贵不贵", "Cheap or expensive?") },
  { key: "insight", name: T("我的发现", "What I noticed") },
  { key: "risk",    name: T("我担心的", "What worries me") }
];

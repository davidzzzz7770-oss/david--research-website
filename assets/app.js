(function () {
  "use strict";
  var SITE = window.SITE, FRAMEWORK = window.FRAMEWORK;
  var REPORTS = window.REPORTS.slice().sort(function (a, b) { return a.date < b.date ? -1 : 1; });
  var app = document.getElementById("app");
  var sectorFilter = "all", sortKey = "c0", sortDir = -1;

  /* ---------- language ---------- */
  var lang = "en";
  try { lang = localStorage.getItem("dr-lang") || ""; } catch (e) {}
  if (lang !== "zh" && lang !== "en") lang = /^zh/i.test(navigator.language || "") ? "zh" : "en";

  var UI = {
    zh: {
      brand: "David Research", navReports: "报告", navCalendar: "日历", navMethod: "方法", navAbout: "关于",
      homeTitle: "A 股行业龙头研究笔记", since: "始于 2025 年 8 月", updated: "更新于",
      nReports: "期报告", nSectors: "大板块", nGaps: "期断更（考试）",
      glance: "全部报告一览", glanceNote: "点击表头可排序，点击任意一行查看完整报告",
      th: ["期数", "日期", "公司", "行业", "护城河", "趋势", "报告日股价", "中性估值", "空间", "估值位置"],
      byIndustry: "行业分支与市场位置", all: "全部",
      mapNote: "按板块分组，条形长度为报告日市值",
      nCompanies: "{n} 家公司", combined: "合计市值", lgGapLong: "断更（2026.4.15–5.15 考试）",
      calendar: "发布日历", calendarNote: "每格代表一个双周节点",
      lgPub: "已发布", lgGap: "断更", lgPend: "待补充",
      method: "研究方法", methodNote: "每份报告都回答这六个问题",
      about: "关于",
      back: "← 返回全部报告", issue: "第 {n} 期",
      snapshot: "一页结论", mine: "我的想法", journal: "研究日志", journalNote: "做这件事过程中的想法和变化", readMore: "看这一期", thesis: "核心观点", financials: "关键数据",
      sVerdict: "估值位置", sMoat: "护城河评分", sTrend: "护城河趋势", sPrice: "报告日股价",
      sBase: "中性估值区间", sUpside: "到中性中值的空间", sRisk: "最大风险", sWatch: "下期跟踪",
      colSource: "来源", colScore: "强度", colWhy: "理由",
      case: "情景", range: "价格区间", multiple: "倍数", condition: "前提", notAdvice: "学习记录，不构成投资建议", sMcap: "报告日市值",
      bear: "悲观", base: "中性", bull: "乐观", priceNow: "报告日",
      valBasis: "估值基础", unit: "单位：元/股",
      plus: "在加宽", minus: "在变窄",
      colDriver: "需求来源", colShare: "占比", colDir: "方向",
      colLevel: "程度", colRisk: "短板", colDetail: "说明",
      prev: "上一期", next: "下一期", nextWatch: "下期跟踪指标"
    },
    en: {
      brand: "David Research", navReports: "Reports", navCalendar: "Calendar", navMethod: "Method", navAbout: "About",
      homeTitle: "Research notes on China's market leaders", since: "Since August 2025", updated: "Updated",
      nReports: "reports", nSectors: "sectors", nGaps: "missed (exams)",
      glance: "All reports at a glance", glanceNote: "Click a header to sort, or a row to open the report",
      th: ["No.", "Date", "Company", "Industry", "Moat", "Trend", "Price", "Base value", "Upside", "Valuation view"],
      byIndustry: "Industry branches and market position", all: "All",
      mapNote: "Grouped by sector; bar length is market value on the report date",
      nCompanies: "{n} companies", combined: "Combined value", lgGapLong: "Missed (exams, 15 Apr–15 May 2026)",
      calendar: "Publishing calendar", calendarNote: "Each square is one two-week slot",
      lgPub: "Published", lgGap: "Missed", lgPend: "Coming",
      method: "Method", methodNote: "Every report answers these six questions",
      about: "About",
      back: "← All reports", issue: "Issue {n}",
      snapshot: "Snapshot", mine: "My thoughts", journal: "Journal", journalNote: "What I was thinking along the way", readMore: "Read this issue", thesis: "Key points", financials: "Key figures",
      sVerdict: "Valuation view", sMoat: "Moat score", sTrend: "Moat trend", sPrice: "Price on report date",
      sBase: "Base-case range", sUpside: "Upside to base midpoint", sRisk: "Biggest risk", sWatch: "Watching next",
      colSource: "Source", colScore: "Strength", colWhy: "Why",
      case: "Case", range: "Price range", multiple: "Multiple", condition: "What has to be true", notAdvice: "Study notes, not investment advice", sMcap: "Market value on report date",
      bear: "Bear", base: "Base", bull: "Bull", priceNow: "Report date",
      valBasis: "Basis", unit: "CNY per share",
      plus: "Widening", minus: "Narrowing",
      colDriver: "Source of demand", colShare: "Share", colDir: "Direction",
      colLevel: "Level", colRisk: "Weak spot", colDetail: "Detail",
      prev: "Previous", next: "Next", nextWatch: "What I'll check next"
    }
  };
  var ENUM = {
    verdict: { under: T("低估", "Undervalued"), "fair-low": T("合理偏低", "Slightly cheap"), fair: T("合理", "Fair"), "fair-high": T("合理偏高", "Slightly expensive"), over: T("高估", "Overvalued") },
    trend: { widening: T("拓宽", "Widening"), stable: T("稳定", "Stable"), narrowing: T("收窄", "Narrowing") },
    dir: { up: T("↑ 增长", "↑ Growing"), flat: T("→ 持平", "→ Flat"), down: T("↓ 走弱", "↓ Weakening") },
    level: { high: T("高", "High"), mid: T("中", "Medium"), low: T("低", "Low") }
  };
  function T(zh, en) { return { zh: zh, en: en }; }
  function t(x) { return x && typeof x === "object" && "zh" in x ? x[lang] : x; }
  function u(key) { return UI[lang][key]; }

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  function tx(x) { return esc(t(x)); }
  function pad2(n) { return String(n).padStart(2, "0"); }
  function parse(d) { var p = d.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function fmt(dt) { return dt.getFullYear() + "-" + pad2(dt.getMonth() + 1) + "-" + pad2(dt.getDate()); }
  function issueNo(r) { return REPORTS.indexOf(r) + 1; }
  function baseMid(r) { return (r.valuation.base.low + r.valuation.base.high) / 2; }
  function upside(r) { return (baseMid(r) / r.valuation.price - 1) * 100; }
  function pct(n) { return (n >= 0 ? "+" : "−") + Math.abs(n).toFixed(1) + "%"; }
  function money(n) { return n.toLocaleString("en-US"); }
  function score(n) {
    var h = "";
    for (var i = 1; i <= 5; i++) h += '<i class="' + (i <= n ? "f" : "") + '"></i>';
    return '<span class="score" aria-label="' + n + '/5">' + h + '</span><span class="num score-n">' + n + "/5</span>";
  }
  function sectorName(k) {
    var sec = SITE.sectors.filter(function (x) { return x.key === k; })[0];
    return sec ? t(sec.name) : k;
  }
  function capFmt(n) {
    if (lang === "zh") return n >= 10000 ? (n / 10000).toFixed(2) + " 万亿" : money(Math.round(n)) + " 亿";
    return n >= 10000 ? "¥" + (n / 10000).toFixed(2) + " trn" : "¥" + money(Math.round(n / 10)) + " bn";
  }
  var METRIC = { PE: "P/E", PB: "P/B", PEV: "P/EV" };
  function metricOf(r) { return r.valuation.metric || "PE"; }
  function multFmt(r) { return METRIC[metricOf(r)] + " " + r.mult + "x"; }
  function trendTag(k) { return '<span class="trend ' + k + '">' + tx(ENUM.trend[k]) + "</span>"; }

  function slots() {
    var out = [], d = parse(SITE.start), today = new Date(), byDate = {};
    REPORTS.forEach(function (r) { byDate[r.date] = r; });
    while (d <= today) {
      var k = fmt(d);
      out.push({ date: k, report: byDate[k], state: byDate[k] ? "pub" : SITE.gaps.indexOf(k) >= 0 ? "gap" : "pend" });
      d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + SITE.cadenceDays);
    }
    return out;
  }

  /* ---------- top bar ---------- */
  function renderTopbar() {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.getElementById("topbar").innerHTML =
      '<div class="wrap"><a class="brand" href="#home">' + u("brand") + "</a>" +
      '<nav class="nav"><a href="#reports">' + u("navReports") + '</a><a href="#calendar">' + u("navCalendar") + "</a>" +
      '<a href="#method">' + u("navMethod") + '</a><a href="#about">' + u("navAbout") + "</a></nav>" +
      '<div class="lang" role="group" aria-label="Language">' +
      '<button type="button" data-lang="zh" class="' + (lang === "zh" ? "on" : "") + '">中文</button>' +
      '<button type="button" data-lang="en" class="' + (lang === "en" ? "on" : "") + '">EN</button></div></div>';
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.addEventListener("click", function () {
        lang = b.getAttribute("data-lang");
        try { localStorage.setItem("dr-lang", lang); } catch (e) {}
        var y = window.scrollY;
        renderTopbar(); route(true);
        window.scrollTo(0, y);
      });
    });
    document.getElementById("footer").innerHTML =
      '<div class="wrap"><span>' + tx(SITE.disclaimer) + "</span><span>" + u("updated") + " " + SITE.updated + "</span></div>";
  }

  /* ---------- home ---------- */
  function renderHome() {
    var s = slots();
    var gaps = s.filter(function (x) { return x.state === "gap"; }).length;
    var maxCap = Math.max.apply(null, REPORTS.map(function (r) { return r.mcap; }));
    function inFilter(r) { return sectorFilter === "all" || r.sector === sectorFilter; }

    /* at-a-glance table */
    var SORT = { c0: function (r) { return issueNo(r); }, c4: function (r) { return r.moatScore * 1000 + upside(r); }, c8: upside };
    var th = u("th").map(function (h, i) {
      var k = "c" + i;
      if (!SORT[k]) return '<th class="' + k + '">' + h + "</th>";
      var arrow = sortKey === k ? (sortDir < 0 ? " ↓" : " ↑") : "";
      return '<th class="' + k + '"><button type="button" class="sort' + (sortKey === k ? " on" : "") + '" data-sort="' + k + '">' + h + arrow + "</button></th>";
    }).join("");
    var list = REPORTS.filter(inFilter).sort(function (x, y) { return (SORT[sortKey](x) - SORT[sortKey](y)) * sortDir; });
    var rows = list.map(function (r) {
      var up = upside(r);
      return '<tr data-go="r-' + r.id + '" tabindex="0">' +
        '<td class="c0 num">' + pad2(issueNo(r)) + "</td>" +
        '<td class="c1 num">' + r.date + "</td>" +
        '<td class="c2"><a href="#r-' + r.id + '"><b>' + tx(r.company) + '</b></a><span class="code">' + r.code + "</span></td>" +
        '<td class="c3">' + tx(r.industry) + "</td>" +
        '<td class="c4">' + score(r.moatScore) + "</td>" +
        '<td class="c5">' + trendTag(r.trend) + "</td>" +
        '<td class="c6 num">' + money(r.valuation.price) + "</td>" +
        '<td class="c7 num">' + money(r.valuation.base.low) + "–" + money(r.valuation.base.high) + "</td>" +
        '<td class="c8 num ' + (up >= 0 ? "pos" : "neg") + '">' + pct(up) + "</td>" +
        '<td class="c9">' + tx(ENUM.verdict[r.verdict]) + "</td></tr>";
    }).join("");

    var used = SITE.sectors.filter(function (sec) { return REPORTS.some(function (r) { return r.sector === sec.key; }); });
    var chips = [{ key: "all", name: u("all") }].concat(used).map(function (c) {
      var n = c.key === "all" ? REPORTS.length : REPORTS.filter(function (r) { return r.sector === c.key; }).length;
      return '<button type="button" class="chip' + (c.key === sectorFilter ? " on" : "") + '" data-sec="' + c.key + '">' + tx(c.name) + ' <span class="num">' + n + "</span></button>";
    }).join("");

    /* sector branches with market position */
    var tree = used.filter(function (sec) { return sectorFilter === "all" || sec.key === sectorFilter; }).map(function (sec) {
      var rs = REPORTS.filter(function (r) { return r.sector === sec.key; }).sort(function (x, y) { return y.mcap - x.mcap; });
      var total = rs.reduce(function (a, r) { return a + r.mcap; }, 0);
      var leaves = rs.map(function (r) {
        return '<a class="leaf" href="#r-' + r.id + '">' +
          '<span class="leaf-co">' + tx(r.company) + '<small>' + tx(r.industry) + "</small></span>" +
          '<span class="cap"><i style="width:' + (r.mcap / maxCap * 100).toFixed(1) + '%"></i></span>' +
          '<span class="num cap-v">' + capFmt(r.mcap) + "</span>" +
          '<span class="num mult">' + multFmt(r) + "</span></a>";
      }).join("");
      return '<div class="branch"><div class="branch-name"><b>' + tx(sec.name) + "</b><span>" +
        u("nCompanies").replace("{n}", rs.length) + "<br>" + u("combined") + " " + capFmt(total) + "</span></div>" +
        '<div class="leaves">' + leaves + "</div></div>";
    }).join("");

    var cal = s.map(function (x) {
      var label = x.date + " · " + (x.state === "pub" ? t(x.report.company) : x.state === "gap" ? u("lgGap") : u("lgPend"));
      if (x.state === "pub") return '<a class="pub num" href="#r-' + x.report.id + '" title="' + esc(label) + '">' + pad2(issueNo(x.report)) + "</a>";
      return '<span class="' + x.state + '" title="' + esc(label) + '"></span>';
    }).join("");
    var hasPend = s.some(function (x) { return x.state === "pend"; });

    var entries = (SITE.journal || []).map(function (j) { return { date: j.date, text: j.text }; })
      .concat(REPORTS.filter(function (r) { return r.notes && r.notes.length; }).map(function (r) { return { date: r.date, text: r.notes[0], report: r }; }))
      .sort(function (x, y) { return x.date < y.date ? 1 : -1; });
    var journal = entries.map(function (e) {
      return '<li><span class="num j-date">' + e.date + "</span><div>" +
        (e.report ? '<b class="j-co">' + tx(e.report.company) + "</b>" : "") + "<p>" + tx(e.text) + "</p>" +
        (e.report ? '<a class="j-link" href="#r-' + e.report.id + '">' + u("readMore") + " →</a>" : "") + "</div></li>";
    }).join("");
    var method = FRAMEWORK.map(function (f) { return "<li><b>" + tx(f.name) + "</b><span>" + tx(f.q) + "</span></li>"; }).join("");
    var about = SITE.about.map(function (a) { return "<div><h3>" + tx(a.h) + "</h3><p>" + tx(a.p) + "</p></div>"; }).join("");

    app.innerHTML =
      '<div class="wrap">' +
      '<section class="intro"><h1>' + u("homeTitle") + "</h1><p>" + tx(SITE.intro) + "</p>" +
      '<p class="meta">' + REPORTS.length + " " + u("nReports") + " · " + used.length + " " + u("nSectors") + " · " +
      gaps + " " + u("nGaps") + " · " + u("since") + '</p><p class="note">' + tx(SITE.disclaimer) + "</p></section>" +

      (entries.length ? '<section class="sec" id="journal"><div class="sec-head"><h2>' + u("journal") + "</h2><p>" + u("journalNote") + '</p></div><ol class="journal">' + journal + "</ol></section>" : "") +
      '<section class="sec" id="reports"><div class="sec-head"><h2>' + u("glance") + "</h2><p>" + u("glanceNote") + "</p></div>" +
      '<div class="chips">' + chips + "</div>" +
      '<div class="table-scroll"><table class="glance"><thead><tr>' + th + "</tr></thead><tbody>" + rows + "</tbody></table></div></section>" +

      '<section class="sec" id="sectors"><div class="sec-head"><h2>' + u("byIndustry") + "</h2><p>" + u("mapNote") + "</p></div>" +
      '<div class="tree">' + tree + "</div></section>" +

      '<section class="sec" id="calendar"><div class="sec-head"><h2>' + u("calendar") + "</h2><p>" + u("calendarNote") + "</p></div>" +
      '<div class="cal">' + cal + "</div>" +
      '<div class="legend"><span><i class="l-pub"></i>' + u("lgPub") + '</span><span><i class="l-gap"></i>' + u("lgGapLong") + "</span>" +
      (hasPend ? '<span><i class="l-pend"></i>' + u("lgPend") + "</span>" : "") +
      '<span class="num legend-range">' + s[0].date + " → " + s[s.length - 1].date + "</span></div></section>" +

      '<section class="sec" id="method"><div class="sec-head"><h2>' + u("method") + "</h2><p>" + u("methodNote") + "</p></div>" +
      '<ol class="method">' + method + "</ol></section>" +

      '<section class="sec" id="about"><div class="sec-head"><h2>' + u("about") + '</h2></div><div class="about">' + about + "</div></section>" +
      "</div>";

    function keep(fn) { return function () { var y = window.scrollY; fn.apply(this, arguments); renderHome(); window.scrollTo(0, y); }; }
    app.querySelectorAll(".chip").forEach(function (b) {
      b.addEventListener("click", keep(function () { sectorFilter = b.getAttribute("data-sec"); }));
    });
    app.querySelectorAll(".sort").forEach(function (b) {
      b.addEventListener("click", keep(function () {
        var k = b.getAttribute("data-sort");
        if (sortKey === k) sortDir = -sortDir; else { sortKey = k; sortDir = -1; }
      }));
    });
    app.querySelectorAll("tr[data-go]").forEach(function (tr) {
      function go() { location.hash = tr.getAttribute("data-go"); }
      tr.addEventListener("click", function (e) { if (!e.target.closest("a")) go(); });
      tr.addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
    });
  }

  /* ---------- report ---------- */
  function niceStep(raw) {
    var p = Math.pow(10, Math.floor(Math.log10(raw))), m = raw / p;
    return (m < 1.5 ? 1 : m < 3 ? 2 : m < 7 ? 5 : 10) * p;
  }
  function band(v) {
    var lo = v.axis[0], hi = v.axis[1];
    function p(x) { return ((x - lo) / (hi - lo) * 100).toFixed(2) + "%"; }
    function zone(k) {
      var z = v[k];
      return '<div class="zone ' + k + '" style="left:' + p(z.low) + ";width:calc(" + p(z.high) + " - " + p(z.low) + ')"><span>' + u(k) + "</span></div>";
    }
    var step = niceStep((hi - lo) / 5), ticks = "";
    for (var x = Math.ceil(lo / step) * step; x <= hi; x += step) ticks += '<span class="tick num" style="left:' + p(x) + '">' + money(x) + "</span>";
    return '<div class="band"><div class="track"></div>' + zone("bear") + zone("base") + zone("bull") +
      '<div class="now" style="left:' + p(v.price) + '"><span class="num">' + u("priceNow") + " " + money(v.price) + "</span></div>" + ticks + "</div>";
  }

  function renderReport(r) {
    var i = REPORTS.indexOf(r), prev = REPORTS[i - 1], next = REPORTS[i + 1], v = r.valuation;
    var up = upside(r);
    var mine = r.notes || [];
    var secs = [["s-snap", T("一页结论", "Snapshot")]].concat(mine.length ? [["s-mine", T("我的想法", "My thoughts")]] : []).concat(FRAMEWORK.map(function (f) { return ["s-" + f.key, f.name]; }));
    var rail = secs.map(function (s) { return '<li><a href="#' + s[0] + '" data-sec="' + s[0] + '">' + tx(s[1]) + "</a></li>"; }).join("");

    function part(key, inner, k) {
      var f = FRAMEWORK[k];
      return '<section class="part" id="s-' + key + '"><div class="part-h"><span class="num">' + pad2(k + 1) + "</span><h2>" + tx(f.name) + "</h2></div>" +
        '<p class="q">' + tx(f.q) + "</p>" + '<p class="take">' + tx(r[key === "prod" ? "product" : key === "val" ? "valuation" : key === "dem" ? "demand" : key].take) + "</p>" + inner + "</section>";
    }
    function table(head, rows, cls) {
      return '<div class="table-scroll"><table class="' + (cls || "") + '"><thead><tr>' + head.map(function (h) { return "<th>" + h + "</th>"; }).join("") +
        "</tr></thead><tbody>" + rows.map(function (row) { return "<tr>" + row.map(function (c) { return "<td>" + c + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
    }

    var topRisk = r.weak.items[0];
    var snap = [
      [u("sVerdict"), "<b>" + tx(ENUM.verdict[r.verdict]) + "</b>"],
      [u("sMoat"), score(r.moatScore)],
      [u("sTrend"), trendTag(r.trend)],
      [u("sPrice"), '<span class="num">' + money(v.price) + "</span>"],
      [u("sMcap"), '<span class="num">' + capFmt(r.mcap) + " · " + multFmt(r) + "</span>"],
      [u("sBase"), '<span class="num">' + money(v.base.low) + "–" + money(v.base.high) + "</span>"],
      [u("sUpside"), '<span class="num ' + (up >= 0 ? "pos" : "neg") + '">' + pct(up) + "</span>"],
      [u("sRisk"), tx(topRisk.title)]
    ].map(function (x) { return "<div><dt>" + x[0] + "</dt><dd>" + x[1] + "</dd></div>"; }).join("");

    var moat = table([u("colSource"), u("colScore"), u("colWhy")], r.moat.items.map(function (m) {
      return ["<b>" + tx(m.name) + "</b>", score(m.score), tx(m.note)];
    }), "moat-t");
    var prod = '<dl class="kv">' + r.product.rows.map(function (p) { return "<div><dt>" + tx(p.k) + "</dt><dd>" + tx(p.v) + "</dd></div>"; }).join("") + "</dl>";
    var val = '<p class="small">' + u("valBasis") + ": " + tx(v.basis) + " · " + u("unit") + "</p>" + band(v) +
      table([u("case"), u("range"), u("multiple") + " (" + METRIC[metricOf(r)] + ")", u("condition")], ["bear", "base", "bull"].map(function (k) {
        return ['<span class="case ' + k + '">' + u(k) + "</span>", '<span class="num">' + money(v[k].low) + "–" + money(v[k].high) + "</span>", '<span class="num">' + v[k].pe + "</span>", tx(v[k].note)];
      }), "val-t");
    function li(a) { return a.map(function (x) { return "<li>" + tx(x) + "</li>"; }).join(""); }
    var edge = '<div class="pm"><div><h3 class="pos">+ ' + u("plus") + "</h3><ul>" + li(r.edge.plus) + '</ul></div><div><h3 class="neg">− ' + u("minus") + "</h3><ul>" + li(r.edge.minus) + "</ul></div></div>";
    var dem = table([u("colDriver"), u("colShare"), u("colDir")], r.demand.drivers.map(function (d) {
      return [tx(d.name), '<span class="bar"><i style="width:' + d.share + '%"></i></span><span class="num">' + d.share + "%</span>", '<span class="dir ' + d.dir + '">' + tx(ENUM.dir[d.dir]) + "</span>"];
    }), "dem-t") + '<p class="small">' + tx(r.demand.note) + "</p>";
    var weak = table([u("colLevel"), u("colRisk"), u("colDetail")], r.weak.items.map(function (w) {
      return ['<span class="lv ' + w.level + '">' + tx(ENUM.level[w.level]) + "</span>", "<b>" + tx(w.title) + "</b>", tx(w.note)];
    }), "weak-t") +
      '<div class="watch"><b>' + u("nextWatch") + "</b><ul>" + li(r.watch) + "</ul></div>";

    app.innerHTML =
      '<div class="wrap">' +
      '<header class="r-head"><a class="back" href="#reports">' + u("back") + "</a>" +
      '<p class="r-meta"><span>' + u("issue").replace("{n}", pad2(i + 1)) + '</span><span class="num">' + r.date + "</span><span>" + esc(sectorName(r.sector)) + " / " + tx(r.industry) + '</span><span class="na">' + u("notAdvice") + "</span></p>" +
      '<h1>' + tx(r.company) + ' <span class="code num">' + r.code + "</span></h1>" +
      '<p class="r-pos">' + tx(r.position) + "</p></header>" +

      '<div class="r-body"><nav class="rail" aria-label="Sections"><ol>' + rail + "</ol></nav><article>" +

      '<section class="part" id="s-snap"><div class="part-h"><h2>' + u("snapshot") + "</h2></div>" +
      '<dl class="snap">' + snap + "</dl>" +
      "<h3 class=\"sub\">" + u("thesis") + '</h3><ul class="thesis">' + li(r.thesis) + "</ul>" +
      "<h3 class=\"sub\">" + u("financials") + '</h3><dl class="figs">' + r.stats.map(function (s) { return "<div><dt>" + tx(s.k) + '</dt><dd class="num">' + tx(s.v) + "</dd></div>"; }).join("") + "</dl></section>" +

      (mine.length ? '<section class="part" id="s-mine"><div class="part-h"><h2>' + u("mine") + '</h2></div><div class="mine">' +
        mine.map(function (n) { return "<p>" + tx(n) + "</p>"; }).join("") + "</div></section>" : "") +
      part("moat", moat, 0) + part("prod", prod, 1) + part("val", val, 2) + part("edge", edge, 3) + part("dem", dem, 4) + part("weak", weak, 5) +

      '<nav class="pager">' +
      (prev ? '<a href="#r-' + prev.id + '"><span>← ' + u("prev") + "</span><b>" + tx(prev.company) + "</b></a>" : "<span></span>") +
      (next ? '<a class="nx" href="#r-' + next.id + '"><span>' + u("next") + " →</span><b>" + tx(next.company) + "</b></a>" : "<span></span>") +
      "</nav></article></div></div>";

    var links = app.querySelectorAll(".rail a");
    links.forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var el = document.getElementById(a.getAttribute("data-sec"));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (en) {
          if (en.isIntersecting) links.forEach(function (a) { a.classList.toggle("on", a.getAttribute("data-sec") === en.target.id); });
        });
      }, { rootMargin: "-25% 0px -65% 0px" });
      secs.forEach(function (s) { var el = document.getElementById(s[0]); if (el) io.observe(el); });
    }
    if (links[0]) links[0].classList.add("on");
  }

  /* ---------- router ---------- */
  var current = "";
  function route(force) {
    var h = location.hash.replace("#", "");
    if (h.indexOf("s-") === 0 && !force) return;
    if (h.indexOf("r-") === 0) {
      var r = REPORTS.filter(function (x) { return x.id === h.slice(2); })[0];
      if (r) { renderReport(r); if (force !== true) window.scrollTo(0, 0); current = h; return; }
    }
    if (force === true && current.indexOf("r-") === 0) {
      var cr = REPORTS.filter(function (x) { return x.id === current.slice(2); })[0];
      if (cr) { renderReport(cr); return; }
    }
    current = h;
    renderHome();
    if (force === true) return;
    var el = h && h !== "home" && document.getElementById(h);
    if (el) el.scrollIntoView(); else window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", function () { route(false); });
  renderTopbar();
  route(false);
})();

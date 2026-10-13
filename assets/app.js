(function () {
  "use strict";
  var SITE = window.SITE, FRAMEWORK = window.FRAMEWORK;
  var REPORTS = window.REPORTS.slice().sort(function (a, b) { return a.date < b.date ? -1 : 1; });
  var app = document.getElementById("app");
  var sectorFilter = "all", sortKey = "c0", sortDir = -1, showAllInsights = false;

  /* ---------- language ---------- */
  var lang = "en";
  try { lang = localStorage.getItem("dr-lang") || ""; } catch (e) {}
  if (lang !== "zh" && lang !== "en") lang = /^zh/i.test(navigator.language || "") ? "zh" : "en";

  var UI = {
    zh: {
      brand: "David 的投资笔记", navPath: "路线", navNotes: "笔记", navInsights: "发现", navCalendar: "日历", navAbout: "关于",
      homeTitle: "每两周，看懂一家公司", since: "始于 2025 年 8 月", updated: "更新于",
      nNotes: "期笔记", nSectors: "个板块", nGaps: "期断更（考试）",
      path: "我的路线", pathNote: "每一期留下一个问题，下一期去找答案", stage: "第 {n} 段", fromPrev: "接上一期", glance: "全部笔记", glanceNote: "估值、趋势、看法都是写那一期时的判断",
      th: ["期数", "日期", "公司", "行业", "护城河", "当时趋势", "当时估值", "当时看法"],
      all: "全部",
      insights: "一路上的发现", insightsNote: "每期笔记里我觉得最有意思的一条",
      showAll: "展开全部", showLess: "收起",
      byIndustry: "行业分支", mapNote: "按板块分组，条形长度是写笔记时的市值",
      nCompanies: "{n} 家公司", combined: "合计市值",
      journal: "随手记", calendar: "日历", calendarNote: "每格是一个两周",
      lgPub: "已写", lgGap: "断更（考试）", lgPend: "待写",
      about: "关于",
      back: "← 全部笔记", issue: "第 {n} 期",
      fPrice: "当时股价", fCap: "当时市值", fVal: "当时估值", fMoat: "护城河", fTrend: "当时趋势", fTake: "当时看法", asOf: "以上数字和判断都是 {d} 写这期笔记时的情况，之后没有改过。",
      question: "还没想通的", notAdvice: "学习笔记，不构成投资建议",
      prev: "上一期", next: "下一期"
    },
    en: {
      brand: "David's Notebook", navPath: "Path", navNotes: "Notes", navInsights: "Insights", navCalendar: "Calendar", navAbout: "About",
      homeTitle: "One company every two weeks", since: "Since August 2025", updated: "Updated",
      nNotes: "notes", nSectors: "sectors", nGaps: "missed (exams)",
      path: "My path", pathNote: "Each note leaves a question that the next one follows up", stage: "Part {n}", fromPrev: "Follows on from", glance: "All notes", glanceNote: "Valuation, trend and take are as of each note's date",
      th: ["No.", "Date", "Company", "Industry", "Moat", "Trend then", "Valuation then", "Take then"],
      all: "All",
      insights: "Things I noticed", insightsNote: "The most interesting point from each note",
      showAll: "Show all", showLess: "Show less",
      byIndustry: "Industry branches", mapNote: "Grouped by sector; bar length is market value when I wrote the note",
      nCompanies: "{n} companies", combined: "Combined value",
      journal: "Journal", calendar: "Calendar", calendarNote: "Each square is one fortnight",
      lgPub: "Written", lgGap: "Missed (exams)", lgPend: "Coming",
      about: "About",
      back: "← All notes", issue: "Note {n}",
      fPrice: "Price then", fCap: "Value then", fVal: "Valuation then", fMoat: "Moat", fTrend: "Trend then", fTake: "My take then", asOf: "All figures and judgements are as of {d}, when I wrote this note, and have not been updated since.",
      question: "Still figuring out", notAdvice: "Study notes, not investment advice",
      prev: "Previous", next: "Next"
    }
  };
  var ENUM = {
    verdict: { under: T("便宜", "Cheap"), "fair-low": T("有点便宜", "A bit cheap"), fair: T("差不多", "About right"), "fair-high": T("有点贵", "A bit pricey"), over: T("贵", "Pricey") },
    trend: { widening: T("在变宽", "Widening"), stable: T("稳定", "Stable"), narrowing: T("在变窄", "Narrowing") }
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
  function multFmt(r) { return METRIC[r.metric || "PE"] + " " + r.mult + "x"; }
  function trendTag(k) { return '<span class="trend ' + k + '">' + tx(ENUM.trend[k]) + "</span>"; }
  function chapterOf(r) {
    var i = SITE.chapters.map(function (c) { return c.key; }).indexOf(r.chapter);
    return { i: i, c: SITE.chapters[i] };
  }
  function li(a) { return a.map(function (x) { return "<li>" + tx(x) + "</li>"; }).join(""); }

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
      '<nav class="nav"><a href="#path">' + u("navPath") + '</a><a href="#notes">' + u("navNotes") + '</a><a href="#insights">' + u("navInsights") + "</a>" +
      '<a href="#calendar">' + u("navCalendar") + '</a><a href="#about">' + u("navAbout") + "</a></nav>" +
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
    var used = SITE.sectors.filter(function (sec) { return REPORTS.some(function (r) { return r.sector === sec.key; }); });
    function inFilter(r) { return sectorFilter === "all" || r.sector === sectorFilter; }

    /* notes table */
    var SORT = { c0: issueNo, c4: function (r) { return r.moatScore * 100 + issueNo(r); } };
    var th = u("th").map(function (h, i) {
      var k = "c" + i;
      if (!SORT[k]) return '<th class="' + k + '">' + h + "</th>";
      var arrow = sortKey === k ? (sortDir < 0 ? " ↓" : " ↑") : "";
      return '<th class="' + k + '"><button type="button" class="sort' + (sortKey === k ? " on" : "") + '" data-sort="' + k + '">' + h + arrow + "</button></th>";
    }).join("");
    var rows = REPORTS.filter(inFilter).sort(function (x, y) { return (SORT[sortKey](x) - SORT[sortKey](y)) * sortDir; }).map(function (r) {
      return '<tr data-go="r-' + r.id + '" tabindex="0">' +
        '<td class="c0 num">' + pad2(issueNo(r)) + "</td>" +
        '<td class="c1 num">' + r.date + "</td>" +
        '<td class="c2"><a href="#r-' + r.id + '"><b>' + tx(r.company) + '</b></a><span class="code">' + r.code + "</span></td>" +
        '<td class="c3">' + tx(r.industry) + "</td>" +
        '<td class="c4">' + score(r.moatScore) + "</td>" +
        '<td class="c5">' + trendTag(r.trend) + "</td>" +
        '<td class="c6 num">' + multFmt(r) + "</td>" +
        '<td class="c7">' + tx(ENUM.verdict[r.verdict]) + "</td></tr>";
    }).join("");
    var chips = [{ key: "all", name: u("all") }].concat(used).map(function (c) {
      var n = c.key === "all" ? REPORTS.length : REPORTS.filter(function (r) { return r.sector === c.key; }).length;
      return '<button type="button" class="chip' + (c.key === sectorFilter ? " on" : "") + '" data-sec="' + c.key + '">' + tx(c.name) + ' <span class="num">' + n + "</span></button>";
    }).join("");

    /* insights feed: first insight from each note, newest first */
    var feed = REPORTS.slice().reverse();
    var shown = showAllInsights ? feed : feed.slice(0, 6);
    var insights = shown.map(function (r) {
      return '<li><a href="#r-' + r.id + '"><span class="num j-date">' + pad2(issueNo(r)) + " · " + tx(r.company) + "</span><p>" + tx(r.insight[0]) + "</p></a></li>";
    }).join("");

    /* sector branches */
    var tree = used.map(function (sec) {
      var rs = REPORTS.filter(function (r) { return r.sector === sec.key; }).sort(function (x, y) { return y.mcap - x.mcap; });
      var total = rs.reduce(function (a, r) { return a + r.mcap; }, 0);
      var leaves = rs.map(function (r) {
        return '<a class="leaf" href="#r-' + r.id + '">' +
          '<span class="leaf-co">' + tx(r.company) + "<small>" + tx(r.industry) + "</small></span>" +
          '<span class="cap"><i style="width:' + (r.mcap / maxCap * 100).toFixed(1) + '%"></i></span>' +
          '<span class="num cap-v">' + capFmt(r.mcap) + "</span>" +
          '<span class="num mult">' + multFmt(r) + "</span></a>";
      }).join("");
      return '<div class="branch"><div class="branch-name"><b>' + tx(sec.name) + "</b><span>" +
        u("nCompanies").replace("{n}", rs.length) + "<br>" + u("combined") + " " + capFmt(total) + "</span></div>" +
        '<div class="leaves">' + leaves + "</div></div>";
    }).join("");

    var path = SITE.chapters.map(function (c, ci) {
      var rs = REPORTS.filter(function (r) { return r.chapter === c.key; });
      var steps = rs.map(function (r) {
        return '<li><a href="#r-' + r.id + '"><span class="num">' + pad2(issueNo(r)) + "</span>" + tx(r.company) + "</a></li>";
      }).join("");
      return '<div class="stage"><div class="stage-h"><span class="num">' + u("stage").replace("{n}", ci + 1) + "</span><b>" + tx(c.name) + "</b><p>" + tx(c.q) + "</p></div>" +
        '<ol class="steps">' + steps + "</ol></div>";
    }).join("");
    var journal = (SITE.journal || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; }).map(function (j) {
      return '<li><span class="num j-date">' + j.date + "</span><p>" + tx(j.text) + "</p></li>";
    }).join("");

    var cal = s.map(function (x) {
      var label = x.date + " · " + (x.state === "pub" ? t(x.report.company) : x.state === "gap" ? u("lgGap") : u("lgPend"));
      if (x.state === "pub") return '<a class="pub num" href="#r-' + x.report.id + '" title="' + esc(label) + '">' + pad2(issueNo(x.report)) + "</a>";
      return '<span class="' + x.state + '" title="' + esc(label) + '"></span>';
    }).join("");
    var hasPend = s.some(function (x) { return x.state === "pend"; });
    var about = SITE.about.map(function (a) { return "<div><h3>" + tx(a.h) + "</h3><p>" + tx(a.p) + "</p></div>"; }).join("");

    app.innerHTML =
      '<div class="wrap">' +
      '<section class="intro"><h1>' + u("homeTitle") + "</h1><p>" + tx(SITE.intro) + "</p>" +
      '<p class="meta">' + REPORTS.length + " " + u("nNotes") + " · " + used.length + " " + u("nSectors") + " · " +
      gaps + " " + u("nGaps") + " · " + u("since") + "</p></section>" +

      '<section class="sec" id="path"><div class="sec-head"><h2>' + u("path") + "</h2><p>" + u("pathNote") + '</p></div><div class="path">' + path + "</div></section>" +
      '<section class="sec" id="notes"><div class="sec-head"><h2>' + u("glance") + "</h2><p>" + u("glanceNote") + "</p></div>" +
      '<div class="chips">' + chips + "</div>" +
      '<div class="table-scroll"><table class="glance"><thead><tr>' + th + "</tr></thead><tbody>" + rows + "</tbody></table></div></section>" +

      '<section class="sec" id="insights"><div class="sec-head"><h2>' + u("insights") + "</h2><p>" + u("insightsNote") + "</p></div>" +
      '<ol class="journal feed">' + insights + "</ol>" +
      '<button type="button" class="more">' + (showAllInsights ? u("showLess") : u("showAll") + " (" + feed.length + ")") + "</button></section>" +

      '<section class="sec" id="sectors"><div class="sec-head"><h2>' + u("byIndustry") + "</h2><p>" + u("mapNote") + "</p></div>" +
      '<div class="tree">' + tree + "</div></section>" +

      '<section class="sec" id="calendar"><div class="sec-head"><h2>' + u("calendar") + "</h2><p>" + u("calendarNote") + "</p></div>" +
      '<div class="cal">' + cal + "</div>" +
      '<div class="legend"><span><i class="l-pub"></i>' + u("lgPub") + '</span><span><i class="l-gap"></i>' + u("lgGap") + "</span>" +
      (hasPend ? '<span><i class="l-pend"></i>' + u("lgPend") + "</span>" : "") +
      '<span class="num legend-range">' + s[0].date + " → " + s[s.length - 1].date + "</span></div>" +
      (journal ? '<h3 class="sub">' + u("journal") + '</h3><ol class="journal">' + journal + "</ol>" : "") + "</section>" +

      '<section class="sec" id="about"><div class="sec-head"><h2>' + u("about") + '</h2></div><div class="about">' + about + "</div></section>" +
      "</div>";

    function keep(fn) { return function () { var y = window.scrollY; fn(); renderHome(); window.scrollTo(0, y); }; }
    app.querySelectorAll(".chip").forEach(function (b) {
      b.addEventListener("click", keep(function () { sectorFilter = b.getAttribute("data-sec"); }));
    });
    app.querySelectorAll(".sort").forEach(function (b) {
      b.addEventListener("click", keep(function () {
        var k = b.getAttribute("data-sort");
        if (sortKey === k) sortDir = -sortDir; else { sortKey = k; sortDir = -1; }
      }));
    });
    app.querySelector(".more").addEventListener("click", keep(function () { showAllInsights = !showAllInsights; }));
    app.querySelectorAll("tr[data-go]").forEach(function (tr) {
      function go() { location.hash = tr.getAttribute("data-go"); }
      tr.addEventListener("click", function (e) { if (!e.target.closest("a")) go(); });
      tr.addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
    });
  }

  /* ---------- note page ---------- */
  function renderReport(r) {
    var i = REPORTS.indexOf(r), prev = REPORTS[i - 1], next = REPORTS[i + 1];
    var rail = FRAMEWORK.map(function (f) {
      return '<li><a href="#s-' + f.key + '" data-sec="s-' + f.key + '">' + tx(f.name) + "</a></li>";
    }).join("");
    var ch = chapterOf(r);
    var body = {
      why: (prev ? '<p class="from">' + u("fromPrev") + ' <a href="#r-' + prev.id + '">' + pad2(i) + " · " + tx(prev.company) + "</a></p>" : "") +
        '<p class="prose">' + tx(r.why) + "</p>",
      money: '<ul class="dots-list">' + li(r.money) + "</ul>",
      moat: '<ul class="dots-list">' + li(r.moat) + "</ul>",
      value: '<p class="prose">' + tx(r.value) + "</p>",
      insight: '<ul class="insight-list">' + li(r.insight) + "</ul>" +
        (r.question ? '<div class="question"><b>' + u("question") + "</b><p>" + tx(r.question) + "</p></div>" : ""),
      risk: '<ul class="dots-list">' + li(r.risk) + "</ul>"
    };
    var parts = FRAMEWORK.map(function (f) {
      return '<section class="part' + (f.key === "insight" ? " hl" : "") + '" id="s-' + f.key + '"><h2>' + tx(f.name) + "</h2>" + body[f.key] + "</section>";
    }).join("");
    var facts = [
      [u("fPrice"), '<span class="num">¥' + money(r.price) + "</span>"],
      [u("fCap"), '<span class="num">' + capFmt(r.mcap) + "</span>"],
      [u("fVal"), '<span class="num">' + multFmt(r) + "</span>"],
      [u("fMoat"), score(r.moatScore)],
      [u("fTrend"), trendTag(r.trend)],
      [u("fTake"), "<b>" + tx(ENUM.verdict[r.verdict]) + "</b>"]
    ].map(function (x) { return "<div><dt>" + x[0] + "</dt><dd>" + x[1] + "</dd></div>"; }).join("");

    app.innerHTML =
      '<div class="wrap">' +
      '<header class="r-head"><a class="back" href="#notes">' + u("back") + "</a>" +
      '<p class="r-meta"><span>' + u("issue").replace("{n}", pad2(i + 1)) + '</span><span class="num">' + r.date + "</span><span>" +
      esc(sectorName(r.sector)) + " / " + tx(r.industry) + '</span><span class="na">' + u("notAdvice") + "</span></p>" +
      (ch.c ? '<p class="r-stage"><a href="#path">' + u("stage").replace("{n}", ch.i + 1) + " · " + tx(ch.c.name) + "</a></p>" : "") +
      "<h1>" + tx(r.company) + ' <span class="code num">' + r.code + "</span></h1>" +
      '<dl class="facts">' + facts + '</dl><p class="asof">' + u("asOf").replace("{d}", r.date) + "</p></header>" +
      '<div class="r-body"><nav class="rail" aria-label="Sections"><ol>' + rail + "</ol></nav><article>" + parts +
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
      FRAMEWORK.forEach(function (f) { var el = document.getElementById("s-" + f.key); if (el) io.observe(el); });
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

(function () {
  "use strict";
  var EMB = document.getElementById("dr-data");
  var STATE = EMB ? JSON.parse(EMB.textContent) : { site: window.SITE, framework: window.FRAMEWORK, notes: window.REPORTS };
  var SITE = STATE.site, FRAMEWORK = STATE.framework, REPORTS = [];
  function resort() { REPORTS = STATE.notes.slice().sort(function (a, b) { return a.date < b.date ? -1 : 1; }); }
  resort();
  var ART = null, editing = false, dirty = false, saveMsg = "", delArm = false;
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
      prev: "上一期", next: "下一期",
      edit: "编辑", editingHint: "编辑中：直接点文字修改（改的是中文版）", save: "保存", saved: "已保存，页面会自动刷新", saving: "保存中…",
      unsaved: "有改动还没保存", done: "退出编辑", addLine: "+ 加一条", addNote: "+ 写新的一期", addJournal: "+ 写一条随手记",
      delNote: "删除这一期", delConfirm: "再点一次确认删除", saveConflict: "别的地方刚保存过，页面会刷新成最新版，这次的改动没保存上",
      saveNoRight: "你没有这个页面的编辑权限", saveTooBig: "内容太大，保存不了", saveFail: "保存失败，请再试一次",
      fDate: "日期", bonus: "加更", empty: "还没写",  fCode: "代码", fChapter: "阶段", fSector: "板块", fMetric: "估值方法"
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
      prev: "Previous", next: "Next",
      edit: "Edit", editingHint: "Editing: click any text to change it (English version)", save: "Save", saved: "Saved; the page will refresh", saving: "Saving…",
      unsaved: "Unsaved changes", done: "Stop editing", addLine: "+ Add a line", addNote: "+ Write a new note", addJournal: "+ Add a journal entry",
      delNote: "Delete this note", delConfirm: "Click again to delete", saveConflict: "Someone saved just now; the page will reload to that version and this edit was not saved",
      saveNoRight: "You don't have permission to edit this page", saveTooBig: "Too much content to save", saveFail: "Save failed, please try again",
      fDate: "Date", bonus: "Extra", empty: "Not written yet",  fCode: "Code", fChapter: "Part", fSector: "Sector", fMetric: "Valuation basis"
    }
  };
  var ENUM = {
    verdict: { under: T("便宜", "Cheap"), "fair-low": T("有点便宜", "A bit cheap"), fair: T("差不多", "About right"), "fair-high": T("有点贵", "A bit pricey"), over: T("贵", "Pricey"), tbd: T("待定", "Not decided") },
    trend: { widening: T("在变宽", "Widening"), stable: T("稳定", "Stable"), narrowing: T("在变窄", "Narrowing"), tbd: T("待定", "Not decided") }
  };
  function T(zh, en) { return { zh: zh, en: en }; }
  function t(x) {
    if (!x || typeof x !== "object" || !("zh" in x)) return x == null ? "" : x;
    return x[lang] || (editing ? "" : x[lang === "zh" ? "en" : "zh"]) || "";
  }
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
  function stageLabel(ci) { return SITE.chapters[ci].key === "extra" ? u("bonus") : u("stage").replace("{n}", ci + 1); }
  function chainPrev(r) {
    if (r.chapter === "extra") return null;
    var i = REPORTS.indexOf(r);
    for (var k = i - 1; k >= 0; k--) if (REPORTS[k].chapter !== "extra") return REPORTS[k];
    return null;
  }
  function chapterOf(r) {
    var i = SITE.chapters.map(function (c) { return c.key; }).indexOf(r.chapter);
    return { i: i, c: SITE.chapters[i] };
  }
  function li(a) { return a.map(function (x) { return "<li>" + tx(x) + "</li>"; }).join(""); }

  /* ---------- editing ----------
   * Text marked with data-edit="kind|...path" becomes editable in edit mode.
   * kind n = a note (n|<id>|field|index), s = site settings (s|field|index|key).
   * Edits change the current language only; Save republishes the whole page. */
  function ed(path, x, tag, cls) {
    if (!editing && !t(x)) return "<" + tag + ' class="' + (cls ? cls + " " : "") + 'empty">' + u("empty") + "</" + tag + ">";
    return "<" + tag + (cls ? ' class="' + cls + '"' : "") + ' data-edit="' + esc(path) + '">' + tx(x) + "</" + tag + ">";
  }
  function edList(r, field, cls) {
    var items = (r[field] || []).map(function (x, k) { return editing || t(x) ? ed("n|" + r.id + "|" + field + "|" + k, x, "li") : ""; }).join("");
    if (!items) return '<p class="empty">' + u("empty") + "</p>";
    return '<ul class="' + cls + '">' + items + "</ul>" +
      (editing ? '<button type="button" class="ed-add" data-add="' + r.id + "|" + field + '">' + u("addLine") + "</button>" : "");
  }
  function noteById(id) { return STATE.notes.filter(function (n) { return n.id === id; })[0]; }
  function setByPath(path, value) {
    var p = path.split("|"), obj, key;
    if (p[0] === "n") { obj = noteById(p[1]); p = p.slice(2); } else { obj = SITE; p = p.slice(1); }
    while (p.length > 1) { obj = obj[p.shift()]; }
    key = p[0];
    var cur = obj[key];
    if (cur && typeof cur === "object" && "zh" in cur) cur[lang] = value;
    else if (typeof cur === "string" || cur == null) obj[key] = value;
    dirty = true;
    renderBar();
  }
  function blank() { return { zh: "", en: "" }; }
  function wireEditing(root) {
    if (!editing) return;
    root.querySelectorAll("[data-edit]").forEach(function (el) {
      try { el.contentEditable = "plaintext-only"; } catch (e) { el.contentEditable = "true"; }
      if (el.contentEditable !== "plaintext-only") el.contentEditable = "true";
      el.spellcheck = false;
      el.addEventListener("input", function () { setByPath(el.getAttribute("data-edit"), el.textContent.trim()); });
      el.addEventListener("click", function (e) { if (el.closest("a")) e.preventDefault(); });
    });
    root.querySelectorAll(".ed-add").forEach(function (b) {
      b.addEventListener("click", function () {
        var p = b.getAttribute("data-add").split("|"), n = noteById(p[0]);
        n[p[1]] = n[p[1]] || []; n[p[1]].push(blank()); dirty = true; route(true);
        var items = app.querySelectorAll('[data-edit^="n|' + p[0] + "|" + p[1] + '|"]');
        if (items.length) items[items.length - 1].focus();
      });
    });
    root.querySelectorAll("[data-field]").forEach(function (el) {
      el.addEventListener("change", function () {
        var p = el.getAttribute("data-field").split("|"), n = noteById(p[0]), v = el.value;
        if (el.type === "number") v = v === "" ? 0 : Number(v);
        n[p[1]] = v; dirty = true;
        if (p[1] === "date") { resort(); }
        route(true);
      });
    });
  }
  function cleanState() {
    function keep(x) { return x && (x.zh || x.en); }
    STATE.notes.forEach(function (n) {
      ["money", "moat", "insight", "risk"].forEach(function (f) { n[f] = (n[f] || []).filter(keep); if (!n[f].length) n[f] = [blank()]; });
    });
    SITE.journal = (SITE.journal || []).filter(function (j) { return keep(j.text); });
    SITE.updated = fmt(new Date());
  }
  function buildDocument() {
    cleanState();
    var css = document.getElementById("dr-style").textContent;
    var code = document.getElementById("dr-app").textContent;
    var font = document.getElementById("dr-font");
    var json = JSON.stringify(STATE).replace(/</g, "\\u003c");
    var S = "script";
    return "<!doctype html><html><head><meta charset=utf8><meta name=viewport content=\"width=device-width,initial-scale=1,viewport-fit=cover\">" +
      "<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style></head><body>" +
      "<title>" + esc(document.title) + "</title>" +
      (font ? font.outerHTML : "") +
      '<style id="dr-style">' + css + "</style>" +
      '<header class="topbar" id="topbar"></header><main id="app"></main><footer id="footer"></footer><div id="edbar" hidden></div>' +
      "<" + S + ' type="application/json" id="dr-data">' + json + "</" + S + ">" +
      "<" + S + ' id="dr-app">' + code + "</" + S + ">" +
      "</body></html>";
  }
  function save() {
    if (!ART) return;
    saveMsg = u("saving"); renderBar();
    var html;
    try { html = buildDocument(); } catch (e) { saveMsg = u("saveFail"); renderBar(); return; }
    ART.publish(html).then(function () {
      dirty = false; saveMsg = u("saved"); renderBar();
    }, function (e) {
      var c = e && e.code;
      saveMsg = c === "conflict" ? u("saveConflict") : (c === "not_writer" || c === "not_granted") ? u("saveNoRight") :
        c === "too_large" ? u("saveTooBig") : u("saveFail");
      if (c === "not_writer" || c === "not_granted") { ART = null; editing = false; renderTopbar(); route(true); }
      renderBar();
    });
  }
  function renderBar() {
    var bar = document.getElementById("edbar");
    if (!bar) return;
    bar.hidden = !editing;
    if (!editing) return;
    bar.innerHTML = '<div class="wrap"><span>' + u("editingHint") + "</span>" +
      '<span class="ed-status">' + esc(saveMsg || (dirty ? u("unsaved") : "")) + "</span>" +
      '<button type="button" class="ed-done">' + u("done") + "</button>" +
      '<button type="button" class="ed-save"' + (dirty ? "" : " disabled") + ">" + u("save") + "</button></div>";
    bar.querySelector(".ed-save").addEventListener("click", save);
    bar.querySelector(".ed-done").addEventListener("click", function () { editing = false; saveMsg = ""; renderTopbar(); route(true); renderBar(); });
  }
  function newNote() {
    var last = REPORTS[REPORTS.length - 1], d = parse(last ? last.date : SITE.start);
    if (last) d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + SITE.cadenceDays);
    var n = {
      id: "n" + Date.now().toString(36), date: fmt(d), chapter: last ? last.chapter : SITE.chapters[0].key, code: "",
      company: { zh: "新公司", en: "New company" }, industry: blank(), sector: last ? last.sector : SITE.sectors[0].key,
      price: 0, mcap: 0, mult: 0, moatScore: 3, trend: "stable", verdict: "fair",
      why: blank(), money: [blank()], moat: [blank()], value: blank(), insight: [blank()], question: blank(), risk: [blank()]
    };
    STATE.notes.push(n); resort(); dirty = true; renderBar();
    location.hash = "r-" + n.id;
  }

  function slots() {
    var out = [], d = parse(SITE.start), today = new Date(), byDate = {};
    REPORTS.forEach(function (r) { byDate[r.date] = r; });
    while (d <= today) {
      var k = fmt(d);
      out.push({ date: k, report: byDate[k], state: byDate[k] ? "pub" : SITE.gaps.indexOf(k) >= 0 ? "gap" : "pend" });
      d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + SITE.cadenceDays);
    }
    REPORTS.forEach(function (r) {
      if (!out.some(function (x) { return x.date === r.date; })) out.push({ date: r.date, report: r, state: "pub", extra: true });
    });
    return out.sort(function (a, b) { return a.date < b.date ? -1 : 1; });
  }

  /* ---------- top bar ---------- */
  function renderTopbar() {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.body.classList.toggle("editing", editing);
    document.getElementById("topbar").innerHTML =
      '<div class="wrap"><a class="brand" href="#home">' + u("brand") + "</a>" +
      '<nav class="nav"><a href="#path">' + u("navPath") + '</a><a href="#notes">' + u("navNotes") + '</a><a href="#insights">' + u("navInsights") + "</a>" +
      '<a href="#calendar">' + u("navCalendar") + '</a><a href="#about">' + u("navAbout") + "</a></nav>" +
      '<div class="lang" role="group" aria-label="Language">' +
      '<button type="button" data-lang="zh" class="' + (lang === "zh" ? "on" : "") + '">中文</button>' +
      '<button type="button" data-lang="en" class="' + (lang === "en" ? "on" : "") + '">EN</button></div>' +
      (ART ? '<button type="button" class="ed-toggle' + (editing ? " on" : "") + '">' + u("edit") + "</button>" : "") + "</div>";
    var tg = document.querySelector(".ed-toggle");
    if (tg) tg.addEventListener("click", function () { editing = !editing; saveMsg = ""; delArm = false; renderTopbar(); route(true); renderBar(); });
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.addEventListener("click", function () {
        lang = b.getAttribute("data-lang");
        try { localStorage.setItem("dr-lang", lang); } catch (e) {}
        var y = window.scrollY;
        renderTopbar(); route(true); renderBar();
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
    var insights = shown.filter(function (r) { return r.insight && r.insight[0] && t(r.insight[0]); }).map(function (r) {
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
      return '<div class="stage"><div class="stage-h"><span class="num">' + stageLabel(ci) + "</span><b>" + tx(c.name) + "</b><p>" + tx(c.q) + "</p></div>" +
        '<ol class="steps">' + steps + "</ol></div>";
    }).join("");
    var journal = (SITE.journal || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; }).map(function (j) {
      return '<li><span class="num j-date">' + j.date + "</span>" + ed("s|journal|" + SITE.journal.indexOf(j) + "|text", j.text, "p") + "</li>";
    }).join("");

    var cal = s.map(function (x) {
      var label = x.date + " · " + (x.state === "pub" ? t(x.report.company) : x.state === "gap" ? u("lgGap") : u("lgPend"));
      if (x.state === "pub") return '<a class="pub num' + (x.extra ? " extra" : "") + '" href="#r-' + x.report.id + '" title="' + esc(label) + '">' + pad2(issueNo(x.report)) + "</a>";
      return '<span class="' + x.state + '" title="' + esc(label) + '"></span>';
    }).join("");
    var hasPend = s.some(function (x) { return x.state === "pend"; });
    var about = SITE.about.map(function (a, k) { return "<div>" + ed("s|about|" + k + "|h", a.h, "h3") + ed("s|about|" + k + "|p", a.p, "p") + "</div>"; }).join("");

    app.innerHTML =
      '<div class="wrap">' +
      '<section class="intro"><h1>' + u("homeTitle") + "</h1>" + ed("s|intro", SITE.intro, "p") +
      '<p class="meta">' + REPORTS.length + " " + u("nNotes") + " · " + used.length + " " + u("nSectors") + " · " +
      gaps + " " + u("nGaps") + " · " + u("since") + "</p></section>" +

      '<section class="sec" id="path"><div class="sec-head"><h2>' + u("path") + "</h2><p>" + u("pathNote") + '</p></div><div class="path">' + path + "</div></section>" +
      '<section class="sec" id="notes"><div class="sec-head"><h2>' + u("glance") + "</h2><p>" + u("glanceNote") + "</p></div>" +
      (editing ? '<button type="button" class="ed-add ed-note">' + u("addNote") + "</button>" : "") +
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
      (s.some(function (x) { return x.extra; }) ? '<span><i class="l-extra"></i>' + u("bonus") + "</span>" : "") +
      '<span class="num legend-range">' + s[0].date + " → " + s[s.length - 1].date + "</span></div>" +
      (journal || editing ? '<h3 class="sub">' + u("journal") + '</h3><ol class="journal">' + journal + "</ol>" : "") +
      (editing ? '<button type="button" class="ed-add ed-journal">' + u("addJournal") + "</button>" : "") + "</section>" +

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
    var nb = app.querySelector(".ed-note");
    if (nb) nb.addEventListener("click", newNote);
    var jb = app.querySelector(".ed-journal");
    if (jb) jb.addEventListener("click", function () {
      SITE.journal = SITE.journal || [];
      SITE.journal.push({ date: fmt(new Date()), text: blank() }); dirty = true; renderBar();
      var y = window.scrollY; renderHome(); window.scrollTo(0, y);
      var el = app.querySelector('[data-edit="s|journal|' + (SITE.journal.length - 1) + '|text"]');
      if (el) el.focus();
    });
    wireEditing(app);
    app.querySelectorAll("tr[data-go]").forEach(function (tr) {
      function go() { location.hash = tr.getAttribute("data-go"); }
      tr.addEventListener("click", function (e) { if (!e.target.closest("a")) go(); });
      tr.addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
    });
  }

  /* ---------- note page ---------- */
  function sel(path, value, opts) {
    return '<select data-field="' + path + '">' + opts.map(function (o) {
      return '<option value="' + esc(o[0]) + '"' + (String(o[0]) === String(value) ? " selected" : "") + ">" + esc(o[1]) + "</option>";
    }).join("") + "</select>";
  }
  function inp(path, value, type, step) {
    return '<input data-field="' + path + '" type="' + type + '"' + (step ? ' step="' + step + '"' : "") + ' value="' + esc(value) + '">';
  }
  function factInputs(r) {
    var id = r.id;
    function enumOpts(m) { return Object.keys(m).map(function (k) { return [k, t(m[k])]; }); }
    return [
      [u("fDate"), inp(id + "|date", r.date, "date")],
      [u("fPrice"), inp(id + "|price", r.price, "number", "any")],
      [u("fCap") + (lang === "zh" ? "（亿元）" : " (CNY 100 m)"), inp(id + "|mcap", r.mcap, "number", "any")],
      [u("fVal"), inp(id + "|mult", r.mult, "number", "any")],
      [u("fMetric"), sel(id + "|metric", r.metric || "PE", [["PE", "P/E"], ["PB", "P/B"], ["PEV", "P/EV"]])],
      [u("fMoat"), sel(id + "|moatScore", r.moatScore, [[1, "1"], [2, "2"], [3, "3"], [4, "4"], [5, "5"]])],
      [u("fTrend"), sel(id + "|trend", r.trend, enumOpts(ENUM.trend))],
      [u("fTake"), sel(id + "|verdict", r.verdict, enumOpts(ENUM.verdict))],
      [u("fChapter"), sel(id + "|chapter", r.chapter, SITE.chapters.map(function (c, k) { return [c.key, c.key === "extra" ? t(c.name) : (k + 1) + " · " + t(c.name)]; }))],
      [u("fSector"), sel(id + "|sector", r.sector, SITE.sectors.map(function (c) { return [c.key, t(c.name)]; }))]
    ].map(function (x) { return "<div><dt>" + x[0] + "</dt><dd>" + x[1] + "</dd></div>"; }).join("");
  }
  function renderReport(r) {
    var i = REPORTS.indexOf(r), prev = REPORTS[i - 1], next = REPORTS[i + 1];
    var rail = FRAMEWORK.map(function (f) {
      return '<li><a href="#s-' + f.key + '" data-sec="s-' + f.key + '">' + tx(f.name) + "</a></li>";
    }).join("");
    var ch = chapterOf(r), cp = chainPrev(r);
    var body = {
      why: (cp ? '<p class="from">' + u("fromPrev") + ' <a href="#r-' + cp.id + '">' + pad2(issueNo(cp)) + " · " + tx(cp.company) + "</a></p>" : "") +
        ed("n|" + r.id + "|why", r.why, "p", "prose"),
      money: edList(r, "money", "dots-list"),
      moat: edList(r, "moat", "dots-list"),
      value: ed("n|" + r.id + "|value", r.value, "p", "prose"),
      insight: edList(r, "insight", "insight-list") +
        (r.question && (t(r.question) || editing) ? '<div class="question"><b>' + u("question") + "</b>" + ed("n|" + r.id + "|question", r.question, "p") + "</div>" : ""),
      risk: edList(r, "risk", "dots-list")
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
    if (editing) facts = factInputs(r);

    app.innerHTML =
      '<div class="wrap">' +
      '<header class="r-head"><a class="back" href="#notes">' + u("back") + "</a>" +
      '<p class="r-meta"><span>' + u("issue").replace("{n}", pad2(i + 1)) + '</span><span class="num">' + r.date + "</span><span>" +
      esc(sectorName(r.sector)) + " / " + ed("n|" + r.id + "|industry", r.industry, "span") + '</span><span class="na">' + u("notAdvice") + "</span></p>" +
      (ch.c ? '<p class="r-stage"><a href="#path">' + stageLabel(ch.i) + (ch.c.key === "extra" ? "" : " · " + tx(ch.c.name)) + "</a></p>" : "") +
      "<h1>" + ed("n|" + r.id + "|company", r.company, "span") + " " + ed("n|" + r.id + "|code", r.code, "span", "code num") + "</h1>" +
      '<dl class="facts">' + facts + '</dl><p class="asof">' + u("asOf").replace("{d}", r.date) + "</p></header>" +
      '<div class="r-body"><nav class="rail" aria-label="Sections"><ol>' + rail + "</ol></nav><article>" + parts +
      '<nav class="pager">' +
      (prev ? '<a href="#r-' + prev.id + '"><span>← ' + u("prev") + "</span><b>" + tx(prev.company) + "</b></a>" : "<span></span>") +
      (next ? '<a class="nx" href="#r-' + next.id + '"><span>' + u("next") + " →</span><b>" + tx(next.company) + "</b></a>" : "<span></span>") +
      "</nav>" + (editing ? '<button type="button" class="ed-del">' + (delArm ? u("delConfirm") : u("delNote")) + "</button>" : "") +
      "</article></div></div>";

    wireEditing(app);
    var del = app.querySelector(".ed-del");
    if (del) del.addEventListener("click", function () {
      if (!delArm) { delArm = true; del.textContent = u("delConfirm"); return; }
      delArm = false;
      STATE.notes = STATE.notes.filter(function (n) { return n.id !== r.id; }); resort(); dirty = true; renderBar();
      location.hash = "notes";
    });

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
  if (window.claude && typeof window.claude.use === "function") {
    window.claude.use("artifact").then(function (ns) {
      if (!ns) return;
      var go = function () { ART = ns; renderTopbar(); };
      window.claude.use("user").then(function (usr) {
        if (!usr) return go();
        usr.canEdit().then(function (ok) { if (ok) go(); }, go);
      }, go);
    }, function () {});
  }
})();

(function () {
  "use strict";
  var SITE = window.SITE;
  var REPORTS = window.REPORTS.slice().sort(function (a, b) { return a.date < b.date ? -1 : 1; });
  var app = document.getElementById("app");
  var activeIndustry = "全部";

  var TREND = { widening: "护城河拓宽", stable: "护城河稳定", narrowing: "护城河收窄" };
  var DIR = { up: "↑ 增长", down: "↓ 走弱", flat: "→ 持平" };
  var LV = { "高": "h", "中": "m", "低": "l" };
  var FRAMEWORK = [
    ["护城河", "壁垒来自哪里，强度如何，能否被复制"],
    ["产品属性", "卖什么、卖给谁、定价方式与周期属性"],
    ["估值区间", "悲观 / 中性 / 乐观三档价格与对应倍数"],
    ["护城河边际", "壁垒在拓宽还是收窄，驱动因素是什么"],
    ["市场需求", "需求结构、增长来源与行业空间"],
    ["短板", "最可能出错的地方，以及跟踪指标"]
  ];

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  function parse(d) { var p = d.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function fmt(dt) {
    return dt.getFullYear() + "-" + String(dt.getMonth() + 1).padStart(2, "0") + "-" + String(dt.getDate()).padStart(2, "0");
  }
  function issueNo(r) { return REPORTS.indexOf(r) + 1; }
  function pad2(n) { return String(n).padStart(2, "0"); }

  /* 生成双周节点：从 start 到今天 */
  function slots() {
    var out = [], d = parse(SITE.start), today = new Date();
    var byDate = {};
    REPORTS.forEach(function (r) { byDate[r.date] = r; });
    while (d <= today) {
      var k = fmt(d);
      var state = byDate[k] ? "pub" : SITE.gaps.indexOf(k) >= 0 ? "gap" : "pend";
      out.push({ date: k, state: state, report: byDate[k] });
      d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + SITE.cadenceDays);
    }
    return out;
  }

  /* ---------------- home ---------------- */
  function renderHome() {
    var s = slots();
    var industries = [];
    REPORTS.forEach(function (r) { if (industries.indexOf(r.industry) < 0) industries.push(r.industry); });
    var gaps = s.filter(function (x) { return x.state === "gap"; }).length;

    var cal = s.map(function (x) {
      var label = x.date + (x.state === "pub" ? " · " + x.report.company : x.state === "gap" ? " · 断更" : " · 待发布");
      if (x.state === "pub") return '<a class="pub" href="#r-' + x.report.id + '" title="' + esc(label) + '">' + pad2(issueNo(x.report)) + "</a>";
      return '<span class="' + x.state + '" title="' + esc(label) + '"></span>';
    }).join("");
    var first = s[0].date.slice(0, 7), last = s[s.length - 1].date.slice(0, 7);

    var chips = ["全部"].concat(industries).map(function (i) {
      return '<button class="chip' + (i === activeIndustry ? " on" : "") + '" data-ind="' + esc(i) + '">' + esc(i) + "</button>";
    }).join("");

    var groups = {};
    REPORTS.slice().reverse().forEach(function (r) {
      var key = r.sector + "|" + r.industry;
      (groups[key] = groups[key] || []).push(r);
    });
    var tree = Object.keys(groups).filter(function (k) {
      return activeIndustry === "全部" || k.split("|")[1] === activeIndustry;
    }).map(function (k) {
      var parts = k.split("|");
      var leaves = groups[k].map(function (r) {
        return '<a class="leaf" href="#r-' + r.id + '">' +
          '<div class="leaf-date">No.' + pad2(issueNo(r)) + "<br>" + r.date + "</div>" +
          '<div><div class="leaf-co">' + esc(r.company) + "<small>" + esc(r.code) + "</small></div>" +
          '<div class="leaf-pos">' + esc(r.position) + "</div></div>" +
          '<div class="leaf-tags"><span class="pill ' + r.moatTrend + '">' + TREND[r.moatTrend] + "</span>" +
          '<span class="pill verdict">' + esc(r.verdict) + "</span></div></a>";
      }).join("");
      return '<div class="branch"><div class="branch-name"><h3>' + esc(parts[1]) + "</h3><span>" + esc(parts[0]) + "</span></div>" +
        '<div class="leaves">' + leaves + "</div></div>";
    }).join("");

    var fw = FRAMEWORK.map(function (f, i) {
      return "<div><b>" + pad2(i + 1) + "</b><h3>" + f[0] + "</h3><p>" + f[1] + "</p></div>";
    }).join("");

    app.innerHTML =
      '<div class="view"><div class="wrap">' +
      '<section class="hero"><div><p class="eyebrow">' + esc(SITE.title) + " · 自 2025 年 8 月起</p>" +
      "<h1>每两周，<br>拆解一家<em>A 股行业龙头</em>。</h1>" +
      '<p class="lede">只研究每个行业里最强的那家公司。每期报告用同一套框架：护城河、产品属性、估值区间、护城河边际、市场需求与短板，方便横向对比。</p></div>' +
      '<div class="hero-stats"><div><b>' + pad2(REPORTS.length) + "</b><span>已发布</span></div>" +
      "<div><b>" + pad2(industries.length) + "</b><span>覆盖行业</span></div>" +
      "<div><b>" + pad2(gaps) + "</b><span>断更期数</span></div></div></section>" +

      '<section class="sec" id="calendar"><div class="sec-head"><h2>研究日历</h2><p>双周一期，每格代表一个发布节点</p></div>' +
      '<div class="cal">' + cal + "</div>" +
      '<div class="cal-months"><span>' + first + "</span><span>" + last + "</span></div>" +
      '<div class="legend"><span><i class="l-pub"></i>已发布（点击进入）</span><span><i class="l-gap"></i>断更</span><span><i class="l-pend"></i>待补充</span></div></section>' +

      '<section class="sec" id="reports"><div class="sec-head"><h2>行业分支</h2><div class="filters">' + chips + "</div></div>" +
      '<div class="tree">' + tree + "</div></section>" +

      '<section class="sec" id="method"><div class="sec-head"><h2>研究框架</h2><p>每期报告固定六个分支</p></div>' +
      '<div class="framework">' + fw + "</div></section>" +
      "</div></div>";

    app.querySelectorAll(".chip").forEach(function (b) {
      b.addEventListener("click", function () {
        activeIndustry = b.getAttribute("data-ind");
        var y = window.scrollY;
        renderHome();
        window.scrollTo(0, y);
      });
    });
  }

  /* ---------------- report ---------------- */
  function band(v) {
    var lo = v.axis[0], hi = v.axis[1];
    function pct(x) { return ((x - lo) / (hi - lo) * 100).toFixed(2) + "%"; }
    function zone(cls, z, name) {
      return '<div class="band-zone ' + cls + '" style="left:' + pct(z.low) + ";width:calc(" + pct(z.high) + " - " + pct(z.low) + ')">' + name + "</div>";
    }
    var step = niceStep((hi - lo) / 5), ticks = "";
    for (var t = Math.ceil(lo / step) * step; t <= hi; t += step) {
      ticks += '<span class="band-tick" style="left:' + pct(t) + '">' + t + "</span>";
    }
    return '<div class="band"><div class="band-track"></div>' +
      zone("bear", v.bear, "悲观") + zone("base", v.base, "中性") + zone("bull", v.bull, "乐观") +
      '<div class="band-now" style="left:' + pct(v.price) + '"><span>报告日股价 ' + v.price + "</span></div>" + ticks + "</div>";
  }
  function niceStep(raw) {
    var p = Math.pow(10, Math.floor(Math.log10(raw))), m = raw / p;
    return (m < 1.5 ? 1 : m < 3 ? 2 : m < 7 ? 5 : 10) * p;
  }
  function dots(n) {
    var h = "";
    for (var i = 1; i <= 5; i++) h += '<i class="' + (i <= n ? "f" : "") + '"></i>';
    return '<span class="dots" aria-label="' + n + ' / 5">' + h + "</span>";
  }

  function renderReport(r) {
    var i = REPORTS.indexOf(r);
    var prev = REPORTS[i - 1], next = REPORTS[i + 1];
    var v = r.valuation;
    var sections = [
      ["s-sum", "核心结论"], ["s-moat", "护城河"], ["s-prod", "产品属性"], ["s-val", "估值区间"],
      ["s-edge", "护城河边际"], ["s-dem", "市场需求"], ["s-weak", "短板"]
    ];
    var rail = sections.map(function (s, k) {
      return '<li><a href="#' + s[0] + '" data-sec="' + s[0] + '"><b>' + pad2(k) + "</b>" + s[1] + "</a></li>";
    }).join("");
    function head(k) { return '<div class="part-h"><b>' + pad2(k) + "</b><h2>" + sections[k][1] + "</h2>"; }

    var moatRows = r.moat.items.map(function (m) {
      return '<div class="moat-row"><h3>' + esc(m.name) + "</h3>" + dots(m.score) + "<p>" + esc(m.note) + "</p></div>";
    }).join("");
    var kv = r.product.map(function (p) { return "<div><dt>" + esc(p.k) + "</dt><dd>" + esc(p.v) + "</dd></div>"; }).join("");
    function scen(cls, name, z) {
      return '<div class="' + cls + '"><h3>' + name + "<span>" + esc(z.multiple) + " " + v.metric + '</span></h3><div class="rng">' + z.low + " – " + z.high + "</div><p>" + esc(z.note) + "</p></div>";
    }
    function li(a) { return a.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join(""); }
    var dem = r.demand.drivers.map(function (d) {
      return '<div class="dem-row"><span>' + esc(d.name) + '</span><div class="dem-bar"><i style="width:' + d.weight + '%"></i></div><span class="dir ' + d.dir + '">' + d.weight + "% " + DIR[d.dir].slice(0, 1) + "</span></div>";
    }).join("");
    var weak = r.weaknesses.map(function (w) {
      return '<div><span class="lv ' + LV[w.level] + '">' + w.level + "</span><h3>" + esc(w.title) + "</h3><p>" + esc(w.detail) + "</p></div>";
    }).join("");
    var ks = r.keyStats.map(function (s) { return "<div><span>" + esc(s.label) + '</span><b>' + esc(s.value) + "</b></div>"; }).join("");

    app.innerHTML =
      '<div class="view"><div class="wrap">' +
      '<header class="r-head"><a class="back" href="#home">← 全部报告</a>' +
      '<div class="r-meta"><span>No.<span class="num">' + pad2(i + 1) + '</span></span><span>·</span><span class="num">' + r.date + "</span><span>·</span><span>" + esc(r.sector) + " / " + esc(r.industry) + "</span></div>" +
      '<div class="r-title"><h1>' + esc(r.company) + '</h1><span class="code">' + esc(r.code) + "</span></div>" +
      '<p class="r-pos">' + esc(r.position) + "</p>" +
      '<div class="kstats">' + ks + "</div></header>" +

      '<div class="r-body"><nav class="rail" aria-label="报告分支"><ol>' + rail + "</ol></nav><article>" +

      '<section class="part" id="s-sum">' + head(0) + '<span class="pill ' + r.moatTrend + '">' + TREND[r.moatTrend] + '</span><span class="pill verdict">估值 ' + esc(r.verdict) + "</span></div>" +
      '<p class="prose">' + esc(r.summary) + "</p></section>" +

      '<section class="part" id="s-moat">' + head(1) + "</div>" +
      '<div class="moat-total">综合强度 ' + dots(r.moat.overall) + '<span class="num">' + r.moat.overall + " / 5</span></div>" +
      '<div class="moat">' + moatRows + "</div></section>" +

      '<section class="part" id="s-prod">' + head(2) + '</div><dl class="kv">' + kv + "</dl></section>" +

      '<section class="part" id="s-val">' + head(3) + '<span class="pill verdict">' + esc(r.verdict) + "</span></div>" +
      '<p class="val-note">估值方法：' + v.metric + " · " + esc(v.basis) + " · 单位：元/股</p>" + band(v) +
      '<div class="scen">' + scen("bear-c", "悲观", v.bear) + scen("base-c", "中性", v.base) + scen("bull-c", "乐观", v.bull) + "</div></section>" +

      '<section class="part" id="s-edge">' + head(4) + '<span class="pill ' + r.marginal.trend + '">' + esc(r.marginal.label) + "</span></div>" +
      '<div class="pm"><div class="pos"><h3><i>+</i>加深护城河</h3><ul>' + li(r.marginal.positives) + "</ul></div>" +
      '<div class="neg"><h3><i>−</i>侵蚀护城河</h3><ul>' + li(r.marginal.negatives) + "</ul></div></div></section>" +

      '<section class="part" id="s-dem">' + head(5) + '</div><p class="prose">' + esc(r.demand.summary) + "</p>" +
      '<div class="dem">' + dem + '</div><p class="dem-note">' + esc(r.demand.notes) + "</p></section>" +

      '<section class="part" id="s-weak">' + head(6) + '</div><div class="weak">' + weak + "</div>" +
      '<div class="watch"><span>下期跟踪</span>' + r.watch.map(function (w) { return "<em>" + esc(w) + "</em>"; }).join("") + "</div></section>" +

      '<section class="part"><div class="pager">' +
      (prev ? '<a href="#r-' + prev.id + '">← 上一期<b>' + esc(prev.company) + "</b></a>" : "<span></span>") +
      (next ? '<a class="nx" href="#r-' + next.id + '">下一期 →<b>' + esc(next.company) + "</b></a>" : "<span></span>") +
      "</div></section>" +
      "</article></div></div></div>";

    // 分支导航：点击平滑滚动 + 滚动高亮
    var links = app.querySelectorAll(".rail a");
    links.forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var t = document.getElementById(a.getAttribute("data-sec"));
        if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          links.forEach(function (a) { a.classList.toggle("on", a.getAttribute("data-sec") === en.target.id); });
        });
      }, { rootMargin: "-30% 0px -60% 0px" });
      sections.forEach(function (s) { var el = document.getElementById(s[0]); if (el) io.observe(el); });
    }
    links[0].classList.add("on");
  }

  /* ---------------- router ---------------- */
  function route() {
    var h = location.hash.replace("#", "");
    var navs = document.querySelectorAll(".nav a");
    if (h.indexOf("r-") === 0) {
      var r = REPORTS.filter(function (x) { return x.id === h.slice(2); })[0];
      if (r) {
        renderReport(r);
        window.scrollTo(0, 0);
        navs.forEach(function (a) { a.classList.remove("on"); });
        return;
      }
    }
    if (h.indexOf("s-") === 0) return; // 报告内锚点
    renderHome();
    navs.forEach(function (a) { a.classList.toggle("on", a.getAttribute("href") === "#" + (h || "home")); });
    if (h && h !== "home") {
      var el = document.getElementById(h);
      if (el) el.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }

  document.getElementById("disclaimer").textContent = SITE.disclaimer;
  window.addEventListener("hashchange", route);
  route();
})();

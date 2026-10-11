# David Research

Fortnightly research notes on leading A-share companies, in Chinese and English.
Static site: open `index.html` or deploy to GitHub Pages. No build step.

## Files

- `index.html` – entry page
- `assets/style.css` – styles (light and dark)
- `assets/app.js` – home page, report pages, language switch
- `data/site.js` – intro, sectors, about text, missed issues
- `data/reports-2025.js`, `data/reports-2026.js` – report content, one object per issue

## Adding a report

Copy one report object in `data/reports-2026.js` and edit it. Every visible
text is written as `T("中文", "English")`. The `date` must fall on the two-week grid
that starts on 2025-08-08. Missed fortnights go in `SITE.gaps`.

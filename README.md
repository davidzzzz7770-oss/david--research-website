# David's Notebook

Fortnightly study notes on leading A-share companies, in Chinese and English.
Static site: open `index.html` or deploy to GitHub Pages. No build step.

## Files

- `index.html` – entry page
- `assets/style.css` – styles (light and dark)
- `assets/app.js` – home page, report pages, language switch
- `data/site.js` – intro, sectors, about text, missed issues
- `data/notes.js` – all notes, one object per issue; `chapter` places it on the reading path

## Adding a report

Copy one note object in `data/notes.js` and edit it. Prices, market value, valuation, trend and take are as of the note's date; don't update them later. Every visible
text is written as `T("中文", "English")`. The `date` must fall on the two-week grid
that starts on 2025-08-08. Missed fortnights go in `SITE.gaps`.

## Editing in the browser

`node tools/build.js --artifact` writes `dist/artifact.html`, a single page with all
notes embedded. Published as a claude.ai artifact with the `artifact` capability, it
shows an **Edit** button to its owner: click any text to change it, add or delete
notes, then **Save** to publish a new version of the page. Edits change the language
currently shown.

`node tools/build.js` writes `dist/david-notebook.html` for opening locally (read only).
Edits made in the artifact live there; copy them back into `data/` if the repo should match.

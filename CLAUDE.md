# CLAUDE.md

Website of Airsoftový klub SSPŠ. Plain HTML/CSS/JS, Czech only, static (GitHub Pages).

Before any work, read:
- `DESIGN.md` – look, wording, components, technical rules
- `ABOUT.md` – facts about the club (the only source of facts; never invent any)
- `CHANGELOG.md` – what has changed and the decisions made so far

**Precedence:** for facts about the club, `ABOUT.md` wins over `DESIGN.md`. If DESIGN mentions something ABOUT doesn't contain (e.g. the teacher guarantor), leave it out.

Assets: photoMaterial/. Look at the photos before choosing them for a page.
After each task:
- list any `[placeholders]` you left
- add an entry to `CHANGELOG.md` (newest on top)

## Decisions (keep until changed in CHANGELOG)
- **Teacher guarantor:** don't mention it anywhere (no "pedagogický garant" stat, no `[Jméno pedagoga]`). The site doesn't mainly target teachers.
- **Photos:** use any photo in photoMaterial/ except `P_Aim.JPG`. People in the `T_` photos wear safety glasses. Faces may be shown (everyone pictured agreed), but never put full names next to faces. Convert every photo to WebP at 640/1280/1920 widths before use.
- **Logos:** `logo-transparent.png` on the site (header, hero, footer). `Airsoft_klub_SSPS_logo.jpg` (square, dark background) for the favicon, the Open Graph/social image and other square uses.

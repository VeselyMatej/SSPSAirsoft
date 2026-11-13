# Changelog

All notable changes to the website and its project files. Newest on top.
Each entry: date, what changed, and why when it isn't obvious.

---

## 2026-11-13

### Added
- `CHANGELOG.md` (this file) to record every change.
- `photoMaterial/Airsoft_klub_SSPS_logo.jpg`: a square logo version on a dark background.

### Decisions
- `ABOUT.md` is the source of truth for club facts and wins over `DESIGN.md`.
- The teacher guarantor (pedagogický garant) won't be mentioned on the website for now. That drops the stat block from DESIGN §5/§7 and the `[Jméno pedagoga]` placeholder. The site doesn't mainly target teachers.
- Photos:
  - `P_Aim.JPG` is excluded.
  - `M_Aim.JPG` stays.
  - People in the `T_` photos wear protective safety glasses.
  - Faces may be shown, since everyone pictured agreed to be on the website. Full names still never go next to faces.
- All photos will be converted to WebP (640/1280/1920) before use. The originals are 10–13 MB each.
- Logo use:
  - `logo-transparent.png` for the header, hero and footer.
  - `Airsoft_klub_SSPS_logo.jpg` for the favicon, the Open Graph image and other square uses.

### Changed
- `CLAUDE.md`: added the ABOUT-over-DESIGN rule, the changelog step and the decisions above.
- `DESIGN.md`: brought in line with ABOUT.md and the decisions above.
  - Removed every teacher guarantor mention: status line, story, partner points, Do list, placeholders.
  - The third stat block is now `SSPŠ` / `oficiální školní klub`.
  - The safety section now lists the ABOUT §5 rules. "Adult supervision" was dropped because it isn't in ABOUT.
  - The logo section now describes both files and their uses.
  - The privacy rule now allows faces, keeps the no-full-names rule and excludes `P_Aim.JPG`.

### Not started
- No website code yet.

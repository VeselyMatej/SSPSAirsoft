# Changelog

All notable changes to the website and its project files. Newest on top.
Each entry: date, what changed, and why when it isn't obvious.

---

## 2026-11-13 – Step 1: foundation + homepage

### Added
- Project structure per DESIGN §8: `index.html`, `css/` (tokens, base, components), `js/main.js`, `assets/` (logo, photos, icons).
- `css/tokens.css`: all colours, type scale, spacing, layout, radii and motion tokens.
- `css/base.css`: reset, typography, focus styles, skip link, scroll reveal, reduced-motion overrides.
- `css/components.css`: header/nav with mobile overlay, section header with battlement, buttons, cards, stat block, statement band, photo grid, partner tiles, CTA box, footer, stub page.
- `js/main.js`: header scroll state, mobile menu (Esc, focus trap, scroll lock), scroll reveal.
- `index.html`: hero, Ve zkratce, Co děláme, statement band, Z akcí, Partneři, footer.
- `o-nas.html`, `galerie.html`, `partneri.html`: „Připravujeme“ stub pages with the shared header and footer.
- `assets/photos/`: 7 photos as WebP + JPG at 640/1280/1920 widths.
- `assets/icons/`: favicon.svg (battlement), favicon-32, apple-touch-icon, icon-512 (from the square logo).
- `assets/og-cover.jpg`: 1200×630 social share image.

### Decisions / deviations from DESIGN.md
- Hero H1 line-height is 1.1 instead of 1.0. At 1.0 the Ý/Š diacritics collide between lines.
- Mobile hero is 92svh instead of 75svh. The team photo shows at the top and the text sits on a dark gradient below.
- Homepage gallery tiles are 4:5 instead of 3:2, because almost all photos are portrait.
- The header button „Staňte se partnerem“ is ghost over the hero and turns primary after scrolling past it, so there's one primary button per screen.
- Hero photos: `4_Breach` on ≥ 640px, `Team_All` on mobile (art direction).
- The hero lead says „chceme reprezentovat naši školu“ (ABOUT: tournament status unknown).

### Placeholders left
`[frekvence a místo tréninků]`, `[typická místa akcí]`, `[stav turnajů]`, `[kontaktní e-mail]`, `[sociální sítě]`, `[URL / doména webu]` (og:url/canonical left out).

---

## 2026-11-13 – Project setup

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

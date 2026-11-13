# DESIGN.md — Airsoftový klub SSPŠ website

> Source of truth for the look, wording and structure of the club website.
> Read this file before building or changing any page. If a request conflicts with this file, ask before deviating.

---

## 1. Project overview

| | |
|---|---|
| **What** | Official website of **Airsoftový klub SSPŠ**, the airsoft club of Smíchovská střední průmyslová škola (Prague). |
| **Status** | New club, founded in school year 2026/27, official school club founded with the approval of the school principal. 20+ members. |
| **Goals** | 1) Show who we are and what we do. 2) Build trust with the school, parents and partner companies. 3) Win and present partners (sponsors, gear shops). |
| **Audiences** | Students (potential members), parents, school staff, **partner companies** (most important for credibility). |
| **Language** | **Czech only.** All UI text, alt texts, meta tags and page titles are in Czech. |
| **Stack** | Plain **HTML + CSS + vanilla JS**. No frameworks, no build step, static hosting (GitHub Pages). |

**The core idea:** a disciplined, well-organized school club, not a "war" fan page. The website should look like it belongs to a serious, safety-first team that a company would be proud to support.

---

## 2. Brand

### Name usage
- Full name (first mention on every page, title tags, footer): **Airsoftový klub SSPŠ**
- Short form (nav, repeated mentions): **Klub SSPŠ**
- School: **Smíchovská střední průmyslová škola** (write it out at least once on the Home and O nás pages)
- Never invent other names ("SSPŠ Airsoft Team", "SSPŠ PMC", "Squad"...). Never translate the name to English.
- In headings set in uppercase the name renders as `AIRSOFTOVÝ KLUB SSPŠ`. Keep the diacritics.

### Tagline
**Disciplína. Týmová práce. Bezpečnost.**
Use it in the hero or as a statement band. Its three words are also the club's values (see the presentation deck).

### Logo
- Files (photoMaterial/):
  - `logo-transparent.png`: use it on the site (header, hero, footer).
  - `Airsoft_klub_SSPS_logo.jpg` (square, logo on a dark background): use it for the favicon, the Open Graph/social image and other square uses. It is low-resolution for the shield itself, so don't use it in the hero.
- The logo is a **shield with a soldier illustration and a gold battlement crown**. It is portrait-shaped (about 0.6 : 1).
- Put it **only on dark backgrounds** (`--bg`, `--bg-raised`). Never on gold, never on light.
- Minimum height: 40px in the header, 280px+ in the hero.
- Clear space around it: at least the crown's height.
- Do not recolor, stretch, rotate, outline, add shadows or glow, or crop the crown.
- Favicon: made from `Airsoft_klub_SSPS_logo.jpg`, or the gold battlement motif (§4.6) on #111111 for the smallest sizes.

---

## 3. Voice and wording

**Tone:** direct, confident, calm. Short sentences. Organized team, not hype.

### Rules
- Use the informal "vy" toward visitors in general copy ("Podívejte se…", "Ozvěte se nám"). Use "my" for the club.
- Headings are short: 1–4 words (`Kdo jsme`, `Co děláme`, `Z akcí`, `Pro partnery`).
- One idea per section. Body paragraphs are 3 lines max on desktop.
- **Safety and fair play are always visible.** They are the main argument for parents, the school and partners.
- Keep the vocabulary sport- and school-appropriate:

| Use | Avoid |
|---|---|
| hráč, tým, člen klubu | voják, operátor, žoldák |
| replika, airsoftová replika | zbraň, puška (in body copy) |
| hra, akce, trénink, scénář | mise, boj, válka, útok |
| soupeř, druhý tým | nepřítel, cíl |
| ochranné brýle / maska | — |

No death or violence themes. No "Memento Mori", "Stay lethal", skulls or blood. That style belongs to RAT PMC, not to a school club.

### Czech typography
- Real diacritics everywhere (`ě š č ř ž ý á í é ú ů`). Check that fonts load the `latin-ext` subset.
- Quotation marks: „takto“. Dashes: spaced en dash ` – `.
- Non-breaking space (`&nbsp;`) after one-letter prepositions and conjunctions (k, s, v, z, o, u, a, i) and between number and unit (`20&nbsp;členů`, `2026/27`).
- Dates: `7. 11. 2026` or `listopad 2026`. Phone: `+420 123 456 789`.

### Sample copy (use it, edit it, keep the tone)
- Hero eyebrow: `Smíchovská střední průmyslová škola`
- Hero H1: `Airsoftový klub SSPŠ`
- Hero lead: `Školní airsoftový klub, který učí týmovou spolupráci, taktiku a zodpovědnost. Trénujeme, jezdíme na akce a reprezentujeme naši školu.`
- CTA buttons: `Kdo jsme` · `Staňte se partnerem`
- Partner CTA: `Chcete nás podpořit? Ozvěte se – rádi vám představíme možnosti spolupráce.`

---

## 4. Visual direction

**Dark, minimal, photo-driven, with one gold accent from the logo.**
RAT PMC (https://b1stmode.github.io/RAT_PMC_Website/) is only a loose reference, for its structure (full-bleed photo hero, short sections, photos by year, simple footer). This site has its own identity: warm gold instead of monochrome, and an emphasis on order, safety and the school.

Keywords: *disciplined · clean · tactical-minimal · trustworthy · energetic but not aggressive*

### 4.1 Color tokens

```css
:root {
  /* surfaces */
  --bg:          #111111; /* page background – identical to the logo background */
  --bg-raised:   #1B1B1B; /* cards, header on scroll */
  --bg-raised-2: #222222; /* hovered cards, inputs */
  --line:        #2C2C2C; /* borders, dividers */

  /* text */
  --text:        #F2EFE6; /* headings, primary text (warm off-white) */
  --text-muted:  #C9C5BA; /* body copy */
  --text-subtle: #8A867C; /* captions, meta, footer (large/secondary only) */

  /* accent – taken from the logo crown */
  --gold:        #F2BF0C;
  --gold-hover:  #FFD23F;
  --gold-deep:   #2B2410; /* warm glow behind the logo / hero gradient */
  --on-gold:     #111111; /* text on gold */
}
```

**Rules**
- Gold is an **accent**. It covers about 5–10% of a screen: eyebrows, the primary button, numbers, thin rules, focus rings. Large gold areas are allowed only in a **statement band** (max one per page).
- No pure `#000` / `#FFF`. No camo, no military green, no red (except form errors: `#E5484D`).
- Text on gold is always `--on-gold`. Gold text is used only on dark backgrounds.
- Contrast: body text ≥ 4.5:1. `--text-subtle` is only for text ≥ 16px that is not essential.

### 4.2 Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / headings / nav / buttons / numbers | **Oswald** | 500–700 | UPPERCASE, letter-spacing 0.01em (headings), 0.08em (nav, buttons) |
| Body / UI text | **Inter** | 400, 600 | sentence case |

Load the fonts from Google Fonts **with Czech support**:
`https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;600&display=swap&subset=latin-ext`
(or self-host the woff2 files with `latin-ext`).

These are the same fonts as the club presentation deck, which keeps the brand consistent.

**Type scale (fluid)**
```css
--fs-hero:    clamp(3rem, 8vw, 7.5rem);    /* H1 in hero, line-height 1.0 */
--fs-h2:      clamp(2.25rem, 4.5vw, 4.5rem); /* section titles, lh 1.05 */
--fs-h3:      clamp(1.375rem, 2vw, 1.75rem); /* card titles, lh 1.2 */
--fs-lead:    clamp(1.125rem, 1.6vw, 1.375rem); /* intro paragraphs, lh 1.5 */
--fs-body:    1rem;      /* 16px, lh 1.6 */
--fs-small:   0.875rem;  /* captions, meta */
--fs-eyebrow: 0.8125rem; /* Inter 600, UPPERCASE, letter-spacing 0.2em, gold */
--fs-stat:    clamp(3rem, 6vw, 5.5rem);  /* Oswald 700, gold */
```

### 4.3 Layout and spacing
- Content max-width **1200px**, centered. Side padding: 20px mobile, 32px tablet, 48px desktop.
- Spacing scale (px): `4 8 12 16 24 32 48 64 96 128`.
- Section vertical padding: `clamp(64px, 10vw, 128px)`.
- Grid: 12 columns desktop, gap 24–32px. Cards: 1 column under 640px, 2 columns from 640px, 3–4 from 1024px.
- Breakpoints: `640px`, `1024px`, `1280px`. Mobile-first CSS.

### 4.4 Shape
- Border radius: **12px** cards and images, **8px** buttons and inputs, **999px** tags/pills.
- Borders: 1px `--line`. Feature cards get a **4px gold top border** (`border-top: 4px solid var(--gold)`), the same as in the presentation.
- Shadows: almost none. Depth comes from `--bg-raised` and borders.

### 4.5 Motion
- Subtle and fast: 150–250ms, `ease-out`.
- Fade-up on scroll for sections (IntersectionObserver, translateY 16px → 0, once).
- Hover: cards lift 2px and the border turns gold; images scale 1.03 inside an `overflow:hidden` frame.
- Respect `prefers-reduced-motion: reduce` (turn off all transforms).
- No parallax, no autoplay video with sound, no typing effects, no glitch effects.

### 4.6 Signature motif — the battlement
The gold crown of the logo is a **battlement (cimbuří)**. A small version marks section eyebrows and dividers and ties the site to the logo:

```html
<svg class="battlement" width="40" height="24" viewBox="0 0 40 24" aria-hidden="true">
  <path d="M0 24V8h8v6h6V2h12v12h6V8h8v16z" fill="currentColor"/>
</svg>
```

Use it in front of every section eyebrow (gold), as a small favicon and as a divider ornament. Don't use it larger than 64px wide and don't animate it.

---

## 5. Components

**Header / nav**
- Sticky. Transparent over the hero, then `--bg` with 90% opacity, `backdrop-filter: blur(8px)` and a bottom border `--line` after scrolling.
- Left: logo (40px tall) + `KLUB SSPŠ` in Oswald. Right: `Domů` · `O nás` · `Galerie` · `Pro partnery`, plus the primary button `Staňte se partnerem` on desktop.
- Active link: gold 2px underline. Mobile: a hamburger opens a full-screen `--bg` overlay with large Oswald links.

**Section header** (same on every section)
```
[battlement] EYEBROW (Inter 600, gold, uppercase, tracked)
SECTION TITLE (Oswald, uppercase, --text)
optional lead paragraph (--text-muted, max 60ch)
```
Always left-aligned. Center it only in the hero and the CTA band.

**Buttons**
- Primary: background `--gold`, text `--on-gold`, Oswald 600 uppercase, letter-spacing 0.08em, padding 14px 28px, radius 8px. Hover `--gold-hover`.
- Secondary (ghost): transparent, 1px border `--text`, text `--text`. Hover: border and text gold.
- Text link: `--text` with a gold underline, offset 4px.
- At most one primary button per screen.

**Cards** (activities, partner benefits): `--bg-raised`, 1px `--line`, 4px gold top border, radius 12px, padding 32px. Gold line icon (24–32px, stroke style; inline SVG, e.g. Lucide) + H3 + 1–2 sentences.

**Stat block**: big Oswald gold number + small label (`20+` / `členů`, `2026/27` / `rok založení`, `SSPŠ` / `oficiální školní klub`). Use a 4px gold left border.

**Statement band**: full-width `--gold` background, `--on-gold` text, the tagline in large Oswald. Max one per page.

**Gallery grid**: grouped by event or school year (`2026/27`), each group with a year/event label in Oswald. CSS grid of 3:2 images, gap 8–12px, radius 12px. Click opens a lightweight vanilla-JS lightbox (keyboard: Esc, ← →).

**Partner logos**: grayscale logos at 60% opacity on `--bg-raised` tiles; full color on hover. Placeholder tile: `Místo pro vaše logo` with a dashed border.

**Footer**: `--bg`, top border `--line`. Left: logo (small) + `© 2026 Airsoftový klub SSPŠ` + `Smíchovská střední průmyslová škola, Praha`. Middle: nav links. Right: social icons (Instagram, TikTok, …) + contact e-mail. Optional small line: `Disciplína. Týmová práce. Bezpečnost.`

---

## 6. Photography

- Photos are in the assets folder (photoMaterial/). **Use only these real club photos.** No stock photos, no AI images, no photos of other teams.
- Prefer: team photos, action shots in the field, briefings, training, gear prepared for a game. Show **goggles/masks on** whenever the photo shows play.
- Treatment: keep the natural colors; slightly lower saturation is fine (`filter: saturate(0.9)`). Behind text, use a dark gradient overlay: `linear-gradient(180deg, rgba(17,17,17,.2) 0%, rgba(17,17,17,.85) 100%)`.
- Hero: one strong landscape photo, full-bleed, `object-fit: cover`, min-height 90vh on desktop and 75svh on mobile.
- **Privacy:** everyone visible in the photos in photoMaterial/ has agreed to appear on the website, so faces may be shown. Never put full names next to faces. Don't use `P_Aim.JPG` (no eye protection). Any new photo needs the same agreement before it's added.
- Optimize every image: WebP (+ JPG fallback), `srcset` with 640/1280/1920 widths, `loading="lazy"` (except the hero), explicit `width`/`height`, descriptive Czech `alt`.

---

## 7. Pages and content

All pages share the header, the footer and the section header pattern.

### `index.html` — Domů
1. **Hero**: full-bleed photo + gradient. Eyebrow `Smíchovská střední průmyslová škola`, H1 `Airsoftový klub SSPŠ`, lead, buttons `Kdo jsme` (ghost) + `Staňte se partnerem` (primary). Optional large logo on the right on desktop.
2. **Ve zkratce**: 3 stat blocks (`20+` členů · `2026/27` založení · `SSPŠ` oficiální školní klub).
3. **Co děláme**: 4 cards. *Pravidelné tréninky* · *Víkendové hry a akce* · *Bezpečnost a výchova* · *Turnaje a soutěže*.
4. **Statement band** (gold): `Disciplína. Týmová práce. Bezpečnost.`
5. **Z akcí**: 4–6 latest photos + link `Celá galerie →`.
6. **Partneři**: logo strip + CTA `Staňte se partnerem`.

### `o-nas.html` — O nás
1. Page header: eyebrow `O nás`, H1 `Kdo jsme`.
2. Story: when and why the club started, and that it is an official SSPŠ club founded with the principal's approval.
3. Values: the 3 values, each with a short explanation.
4. **Bezpečnost na prvním místě**: the rules from ABOUT.md §5 (eye protection, chrono limits, replicas carried only in closed bags, fair play, minimum age / parental consent). This is a trust section, so keep it visible.
5. Our activities (in more detail than on Home).
6. Optional: team leadership (roles, first names only or nicknames).

### `galerie.html` — Galerie / akce
1. Page header: eyebrow `Galerie`, H1 `Z akcí`.
2. Optional filter chips by year/type (`Vše`, `Tréninky`, `Hry`, `Turnaje`).
3. Groups by event: title, date, place, 1-line description, photo grid.

### `partneri.html` — Pro partnery
1. Page header: eyebrow `Spolupráce`, H1 `Pro partnery`.
2. **Proč s námi**: 3 numbered points (01/02/03). Young active community · trustworthy background as an official school club · visibility from the very start.
3. **Co nabízíme**: cards. *Sociální sítě a web* (logo on the website, mentions in posts) · *Viditelnost ve škole* (school events, open days).
4. **S čím nám můžete pomoct**: *Finanční podpora* · *Vybavení a materiál* · *Slevy a zvýhodnění pro členy*.
5. **Naši partneři**: logo grid (with placeholder tiles while it is empty).
6. **Kontakt**: contact person, e-mail, phone, plus a button to download the partner presentation (PDF).

---

## 8. Technical standards

```
/
├── index.html
├── o-nas.html
├── galerie.html
├── partneri.html
├── css/
│   ├── tokens.css      # the variables from §4
│   ├── base.css        # reset, typography
│   └── components.css
├── js/
│   └── main.js         # nav, scroll reveal, lightbox
└── assets/
    ├── logo/
    ├── photos/
    └── icons/
```

- Semantic HTML: `header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`. One `h1` per page. `<html lang="cs">`.
- Accessibility: a "Přeskočit na obsah" skip link, visible focus (`outline: 2px solid var(--gold); outline-offset: 3px`), keyboard-usable menu and lightbox, contrast per §4.1, touch targets ≥ 44px.
- Performance: Lighthouse ≥ 90 in all categories. No JS frameworks or jQuery. Fonts with `display=swap` + `preconnect`. The hero image is preloaded.
- SEO/meta: Czech `<title>` (`Stránka | Airsoftový klub SSPŠ`), meta description, Open Graph image (`assets/og-cover.jpg`, 1200×630, photo + logo), favicon set, `theme-color` `#111111`.
- CSS: use only the tokens from §4. No hard-coded colors or font sizes in components. BEM-like class names (`.card`, `.card__title`, `.btn--primary`).
- All links to social networks open in a new tab with `rel="noopener"`.
- No cookies or trackers. If analytics are needed later, use a cookie-free one.

---

## 9. Do / Don't

**Do**
- Keep a lot of dark space; let the photos and the gold accent do the work.
- Repeat the same section header, cards and spacing everywhere.
- Mention safety and the school. These are what earn trust.
- Write short, clear Czech with correct diacritics and typography.

**Don't**
- No camo patterns, bullet holes, blood, skulls, "military stencil" fonts or crosshair cursors.
- No aggressive or war vocabulary (§3).
- Don't put the logo on gold or light backgrounds, and don't modify it.
- No more than one gold statement band per page, and no gold body text.
- No stock photos, no AI-generated people.
- Don't make up facts, numbers, partners or quotes. Use `[placeholder]` and list it in your summary.

---

## 10. Open placeholders (fill in later)
`[kontaktní e-mail]` · `[telefon]` · `[Instagram / TikTok účty]` · `[místo tréninků]` · `[partneři a jejich loga]` · `[URL / doména webu]`
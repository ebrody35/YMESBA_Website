# YMESBA Website

Website for the Yale Media, Entertainment, and Sports Business Association (YMESBA).
Maintained by Eli Brody (Co-President). Live at https://www.ymesba.org.

## Standing rules

1. **Log every change.** After every change, add a dated entry to the top of the
   changelog in `CONTEXT.md` describing what changed and why, and commit it together
   with the change. If the change alters anything under "Current state" in
   `CONTEXT.md` (officers, speakers, events, partners, links), update that section
   in the same commit.
2. **Record decisions.** When Eli settles a design or content decision, or reverses
   an earlier one, add it to "Decisions" in `CONTEXT.md` with the reason.
3. **Keep this file current.** If a convention below changes, update it here.

`CONTEXT.md` is also read by Eli's YMESBA project in Claude (outside Claude Code),
so write entries that make sense to a reader who has not seen the session.

## Stack and deployment

- Plain HTML/CSS/JS. No framework, no build step, no package manager. Chosen so the
  site is simple to hand off to future club officers.
- Hosted on Vercel, which auto-deploys every push to `main`. Pushing to `main`
  publishes to ymesba.org.
- `vercel.json` enables clean URLs and no trailing slash. Internal links use
  `/leadership`, never `/leadership.html`.
- `.github/workflows/static.yml` is a GitHub Pages workflow from the first day of
  the repo. Vercel is the real host.
- Vercel Analytics script is on every page. The contact form sends through EmailJS.

## Structure

- Pages: `index.html`, `get-involved.html`, `events-speakers.html`,
  `leadership.html`, `partnerships.html`, `contact.html`.
- `js/components.js` injects the shared nav and footer into `#site-header` and
  `#site-footer` on every page. Change nav, footer, the Join YMESBA link or social
  links there, once. Each page sets `data-page` on `<body>` for the active nav link.
- `css/style.css` holds all styling. Colors are CSS variables at the top.
- Images: `images/`, `images/leadership/`, `images/speakers/`.
- When adding a page, also add it to `sitemap.xml` and to `NAV_LINKS` if it belongs
  in the nav.

## Conventions

- **Cache-busting.** Every page loads `css/style.css?v=N` and `js/components.js?v=N`.
  After editing either file, bump its number in all six pages, or visitors get the
  stale file. Currently `style.css` v=15, `components.js` v=13.
- **Expiring links.** Add `data-expires="YYYY-MM-DD"` to any dated link (event
  registration, RSVP). `hideExpiredLinks()` hides it from the day after that date.
  Set the date to the day of the event.
- **Missing headshots.** Use `<div class="photo"><span class="initials">AB</span></div>`
  until a real photo is provided.
- **Headshots.** Compress before committing. Crop so the full head is visible with
  some headroom, matching the other photos on the page. Eli is particular about
  crops; when he supplies a reference framing, match it exactly, and do not apply
  effects such as background blur.
- **Speaker cards.** Date line format is `Oct 6, 2026 · 7:00 PM ET`, with
  ` · Co-Hosting with MESA` or a panel name appended where relevant. Times are ET.
- **Past speakers** are text only: name (with Yale class year if an alum), title,
  organization, grouped by academic year.

## Design

- Palette: Yale Blue `#00356B`, deep blue `#00203F`, grey `#9BA4B4`, ink `#111418`,
  white. No gold or amber accents.
- Type: Big Shoulders Display (headlines), Source Serif 4 (body), IBM Plex Mono
  (labels and dates).
- No street address and no map embed anywhere.
- All contact goes through `yalemesba@gmail.com`. No individual officer emails.
- Footer carries the Yale trademark disclaimer; keep it.

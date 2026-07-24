# YMESBA Website — Build Spec (v2)

**Tech stack:** Plain HTML/CSS/JS, no framework.
**Repo:** https://github.com/ebrody35/YMESBA_Website
**Hosting:** Vercel, connected to the GitHub repo above (no custom domain yet — using the free `*.vercel.app` URL for now).

**Design direction:** Yale Blue as the anchor color, paired with a light grey, black, and white — no gold/amber accent (drop that from the earlier homepage mockup; use the mockup only for layout, type pairing, and overall structure, not its color palette).

Suggested palette for Claude Code to work from:
- Yale Blue — `#00356B` (primary: nav, headlines, buttons)
- Light Grey — `#9BA4B4` (secondary text, labels, dividers, muted accents)
- Black — `#111418` (body text)
- White — `#FFFFFF` (backgrounds, reversed text on dark sections)

---

## Sitemap

1. Home
2. Get Involved
3. Events & Speakers (tabbed)
4. Leadership
5. Partnerships
6. Contact

Every page shares one nav bar and one footer.

**Footer (all pages):** club email (yalemesba@gmail.com), social links (placeholders for now — Eli will provide real URLs), Yale trademark disclaimer ("Yale" and "Yale University" are registered trademarks of Yale University; this site is maintained independently by students). No address needed.

---

## 1. Home

- Hero: headline + short description of what YMESBA is
- About/Mission section, adapted from the current site's About text
- Placeholder founding credit line, e.g. "Founded in [year] by [founder names]" — exact details to be filled in later
- Brief preview of the "Get Involved" offerings, linking to that page
- Dedicated **Contact Us section** on the Home page (in addition to the footer and the standalone Contact page)
- CTA button: **Join YMESBA** → placeholder link for now (membership interest form isn't built yet — swap this in later)

## 2. Get Involved

Five cards, from the current Member Benefits section:
1. Speaker Series
2. Group Projects
3. Office Visits
4. Information Sessions
5. Connections

Feature the ESPN Headquarters (Bristol, CT) office visit and ESPN Edge Conference (New York, NY) with photos, given more visual weight than the other four cards. Photos will be provided as local files (see "Assets" below).

## 3. Events & Speakers

Tabbed interface, three tabs:
- **Upcoming Speakers** — populated as talks are confirmed
- **Past Speakers** — full archive, grouped by year (2025–26, 2024–25, etc.). Text only (name, title/company) — no headshots, matching the current site.
- **Upcoming Events** — placeholder ("Nothing confirmed yet — check back soon!") until something is booked

## 4. Leadership

- Current active team only: Azara Mason (Co-President), Eli Brody (Co-President), Liza Kaufman (CEO), Julia Rosenblatt (Treasurer), Eli Ratner (Director of Membership), Victoria Guerrier (Director of Communications)
- Role + class year under each name
- Use a placeholder avatar (initials on a Yale Blue tile, as in the homepage mockup) until real headshots are collected
- No individual emails — route all contact through yalemesba@gmail.com

## 5. Partnerships

- Current partnership: **Taft Sports Business Club**
- Add: **Yale SOM Media, Entertainment & Sports Association (MESA)** — link to `https://groups.som.yale.edu/mesa/home/`

## 6. Contact

- Club email, general inquiry form or mailto link
- No embedded map

---

## Assets to add to the project folder before/while building

Create an `/images` folder inside your local `YMESBA_Website` project folder and drop these in before starting the session:
- ESPN Headquarters office visit photo
- ESPN Edge Conference photo

(Pull real files rather than linking to the current yaleconnect.yale.edu site — cleaner, and not dependent on Yale's CDN staying stable.)

## Still placeholder / to fill in later

- [ ] Membership interest form link
- [ ] Social media links
- [ ] Founding year and founder names
- [ ] Leadership headshots

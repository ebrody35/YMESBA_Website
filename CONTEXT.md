# YMESBA Website — Context and History

Running record of the site's current state, settled decisions, and change history.
Claude Code updates this file with every change (see `CLAUDE.md`).

Backfilled on 2026-10-02 from the git history (58 commits) and the code. Entries
before that date record what changed; the reasoning behind them was not captured
unless it appeared in a commit message.

## Current state

**Site:** https://www.ymesba.org · repo `ebrody35/YMESBA_Website` · Vercel, deploys from `main`.

**Founding line (homepage):** Founded in 2024 by Tommy Gannon, James Gumina, and
Ava Seymour, Class of 2027.

**Leadership**
- Azara Mason — Co-President '28
- Eli Brody — Co-President '28
- Liza Kaufman — Vice President '28
- Julia Rosenblatt — Treasurer '29
- Eli Ratner — Dir. of Membership '29
- Abby Long — Dir. of Communications '28
- Luke Benjamin — Dir. of Outreach '29

**Fall 2026 speakers**
| Date | Time (ET) | Speaker | Notes |
|---|---|---|---|
| Oct 6 | 7:00 PM | Ross Molloy, SVP of Talent, Production Planning & Technology Development, CBS Sports | CBS Sports Talent Panel; registration link expires Oct 6 |
| Oct 6 | 7:00 PM | Kyle Long, retired All-Pro offensive lineman, NFL Today studio analyst | CBS Sports Talent Panel; same link |
| Oct 15 | 8:00 PM | Mario Iveljic '99, Founder & Principal, Mag Mile Sport | Co-hosting with MESA; RSVP link expires Oct 15 |
| Oct 28 | 7:00 PM | Gino Lopinto, Managing Partner, E11even Miami | |
| Nov 3 | 7:30 PM | Pat Brisson, Co-Head of Hockey, CAA Sports | |
| Nov 10 | 8:00 PM | Marti Wronski, COO, Milwaukee Brewers | Co-hosting with MESA |
| Nov 17 | 7:00 PM | Leigh Steinberg, CEO, Steinberg Sports and Entertainment | |
| Dec 1 | 8:00 PM | Dave Finocchio, Co-Founder & CEO, Bleacher Report | |

**Spring 2027 speakers**
| Date | Time (ET) | Speaker | Notes |
|---|---|---|---|
| Jan 26 | 8:00 PM | Julie Betancur, Founder, Talent Right Partners | |
| Feb 2 | 8:00 PM | Chris Long, Co-Founder & Co-Owner, KC Current; Founder & CEO, Palmer Square Capital Management | |
| Feb 9 | 8:00 PM | Samuel Hymes, Strategic Advisor & Harvard Fellow | |
| Feb 16 | 8:00 PM | Mike Dunleavy Jr., General Manager, Golden State Warriors | |
| Feb 23 | TBD | Arize Ifejika, Founder & CEO, More Than Basketball | No headshot yet; initials placeholder |
| Mar 2 | 8:00 PM | Tim Bunnell, SVP of Programming, ESPN | |

**Past speakers:** text-only archives for 2025–26 and 2024–25, 13 speakers each.

**Upcoming events**
- Oct 9, 5:00–7:00 PM ET — MESA Social with EMBAs in VC & at Fanatics (RSVP link expires Oct 9)
- Oct 24, time and registration TBD — HUSL Annual Conference (interest form expires Oct 24)

**Partnerships (display order):** Yale SOM MESA · Harvard Undergraduate Sports Lab (HUSL) · Taft Sports Business Club.

**Links:** Join YMESBA goes to a Google Form (set in `js/components.js`). Instagram
is `instagram.com/ymesba`. An excused absence form is linked at the top of Events &
Speakers. Site-wide CTA label reads "Interest Form Linked Below".

**Known stale file:** `YMESBA-site-spec.md` is the original v2 build spec and no
longer matches the site (see Decisions).

## Decisions

- Plain HTML/CSS/JS over a framework, for simplicity and future handoff.
- Vercel for hosting; custom domain ymesba.org since Aug 6, 2026.
- Palette is Yale Blue, grey, black and white. No gold or amber.
- No address or map. All contact through `yalemesba@gmail.com`.
- Tabbed Events & Speakers page instead of a scrolling speaker ticker.
- Upcoming speakers get headshots; past speakers stay text only. (The original spec
  had all speakers text only.)
- Leadership uses real headshots; initials tiles only as a temporary placeholder.
- CBS Sports panel is shown as two separate inline speaker cards, not one combined
  panel card (combined layout tried and reverted Sep 3).
- Samuel Hymes' photo is used in full, unmodified, with no cropping.
- Abby Long's headshot uses a plain crop matched to Eli's reference box; the
  blurred-background version was rejected.
- Dated registration links expire on their own via `data-expires` rather than being
  removed by hand.
- Partner order is MESA, HUSL, Taft.

## Changelog

Newest first.

### 2026-10-02
- Added `CLAUDE.md` and `CONTEXT.md`. No site changes.

### 2026-09-30
- Rescheduled Pat Brisson to Nov 3, 2026, 7:30 PM ET.
- Added registration/interest buttons to the MESA Social and HUSL Conference cards, using a light-on-dark button variant.
- Added registration links to the Ross Molloy, Kyle Long and Mario Iveljic cards.
- Added `hideExpiredLinks()` and `data-expires` on all dated links. CSS to v=15, JS to v=13.

### 2026-09-28
- Pat Brisson's time changed to 8:00 PM ET (superseded Sep 30).

### 2026-09-24
- Rescheduled Dave Finocchio to Dec 1, 2026.
- Added Pat Brisson, Arize Ifejika and Tim Bunnell as speakers; updated Brisson's title.
- Speakers without a headshot now show an initials placeholder.
- Replaced Tim Bunnell's headshot with a higher-resolution version.

### 2026-09-18
- Replaced the nav and footer logo with the new sticker-style YMESBA mark.
- Added a white box behind the footer logo.

### 2026-09-16
- CTA sections: "Applications open now" became "Interest Form Linked Below".
- Added the excused absence form link to Events & Speakers; made the "Missing a meeting?" notice bigger and bolder.
- Noted MESA co-hosting on the Mario Iveljic and Marti Wronski events.
- Added the Harvard Undergraduate Sports Lab partnership; reordered partners to MESA, HUSL, Taft.
- Added the MESA social and HUSL Annual Conference to Upcoming Events.
- Added Mike Dunleavy Jr. to the Spring 2027 lineup.

### 2026-09-03
- Added the CBS Sports Talent Panel with Ross Molloy and Kyle Long.
- Reverted the panel to two inline cards; fixed Kyle Long's headshot crop.

### 2026-09-02
- Added Samuel Hymes as a spring speaker. After several crop attempts, his full original photo is used unmodified.
- Updated Abby Long's headshot through many crop iterations (including a blurred-background version that was removed), ending on a direct crop matched to the provided reference box.

### 2026-08-28
- Abby Long replaced Victoria Guerrier as Director of Communications.

### 2026-08-24
- Posted the fall and spring 2026–27 lineup on Events & Speakers.
- Fixed Julie Betancur's headshot crop.
- Liza Kaufman's title changed to Vice President (briefly "Vice President / Director of Operations").

### 2026-08-12
- Added the Vercel Analytics script to all pages.

### 2026-08-06
- Switched internal links to clean URLs for Vercel.
- Reconnected Vercel to the correct repo and triggered the first deployment.
- Added SEO files once ymesba.org was live.

### 2026-08-01
- Wired up the contact form through EmailJS.
- Added headshots for Eli Ratner, Julia Rosenblatt and Luke Benjamin; added Luke Benjamin as Director of Outreach.
- Redesigned the logo with a hand-drawn block Y; fixed stale script caching.
- Launch prep: favicon, Open Graph tags, image compression.

### 2026-07-27
- Added real speaker and leadership photos, refreshed the logo, fixed placeholder links.
- Refined copy across the site and simplified the contact form.

### 2026-07-24
- Initial commit of the multi-page site; added the GitHub Pages workflow.

# PRD — steveorchosky.com

> Drafted from the existing site by Claude Code, not spoken by Steve first —
> flagged in the plan as a first pass. Read it, correct anything wrong, and
> rewrite the sections that don't sound like you. This governs what Claude
> builds unasked from here on, so a section left inaccurate becomes a build
> made on a bad assumption.

## Problem

The site works but two things are broken: it isn't actually deployed
(`portfolio-steve-orchosky.vercel.app` 404s — no build config existed), and the
build itself is a 5-year-old hand-maintained Gulp pipeline that Steve no longer
wants to hand-edit. It also has real content debt: project data is duplicated
across 3-4 files per case study, which has already caused at least one visible
bug (a wrong page `<title>`).

## Users

Just Steve — recruiters, hiring managers, and collaborators who land on it from
a resume, LinkedIn, or a portfolio link. Single-owner site: bias toward Steve's
own editing speed and the site looking sharp to a first-time visitor, not toward
building for other maintainers.

## Core loop

A visitor lands on the homepage, browses case studies (grid → project detail →
prev/next through the rest), and leaves either impressed enough to reach out
(email/LinkedIn/Dribbble in the header) or having downloaded the resume PDF.
Everything else — About, Additional Work, the prototype demos — is secondary
to that loop being fast, correct, and good-looking on both breakpoints Steve
actually gets viewed on: desktop (reviewers at a laptop) and mobile (a link
opened from a phone).

## Scope — this version

1. **Get it hosted.** Vercel builds and serves the site correctly from `main`,
   with `dev` as a staging branch — this is what's shipping now.
2. **Modernize the build.** Replace Gulp with Astro so edits go through Claude
   Code cheaply: one data file drives every project list instead of four,
   pages pre-render instead of assembling client-side, stale/mismatched vendor
   scripts get cleaned up in the same pass. Phased in after (1) is confirmed
   live, as its own feature branch.
3. **Point the real domain at it.** `steveorchosky.com` → Vercel, once (1) and
   (2) are both confirmed working on the `.vercel.app` URLs.

## Explicitly out of scope (this version)

- Visual redesign — the existing look and layout are staying as they are;
  Astro migration is a rebuild of the pipeline underneath it, not a re-skin.
- New content — no new case studies, no rewritten copy, unless Steve asks.
- Fixing Google Analytics (the current tag is Universal Analytics, which
  stopped collecting data in 2023) — noted in ARCHITECTURE.md, not fixed here.
- Image optimization / compressing the 473 files under `build/img` — worth
  doing, but a separate pass once the build is on Astro (`astro:assets` can do
  this automatically).

## Success criteria

- `https://portfolio-steve-orchosky.vercel.app/` (and the `dev` preview URL)
  return 200 and render the real homepage, not a 404.
- Every one of the 13 existing pages loads with zero console errors at mobile
  and desktop widths, and looks the same as it does today.
- After the Astro migration: adding or editing a case study is a change to one
  data file plus one page file, not four.
- `steveorchosky.com` resolves to the Vercel deployment (once Steve says go).

## Constraints

- **Budget for any paid API/service:** $0. Vercel Hobby plan (already in use),
  no paid add-ons without asking first — per the agent contract in CLAUDE.md.
- **Timeline pressure:** None stated.
- **Devices/browsers that matter:** Modern evergreen browsers, mobile +
  desktop. No IE/legacy support needed.
- **Must not change:** Existing inbound links — `.html` URLs (e.g.
  `/about.html`) must keep working, since those are what's already indexed
  and linked from elsewhere.

## Open questions

- When should `steveorchosky.com`'s DNS actually get pointed at Vercel? Held
  until Steve says the word (see Constraints in CLAUDE.md — this is a
  stop-and-ask, not a default).
- Is the Astro migration's scope (collapsing project data into one file,
  cleaning up stale vendor scripts) right, or does Steve want it broken into
  smaller pieces reviewed separately?
- Any case studies planned that should shape the new data model's shape
  before it's built (e.g. multiple images per project, video embeds as a
  first-class field) rather than retrofitted after?

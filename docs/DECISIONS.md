# Decisions Log — steveorchosky.com

> Append-only. Claude Code adds an entry any time it makes a judgment call the
> PRD didn't specify, or you make a call together mid-build. Newest at top.
> This is what keeps a second session (or a second project) from re-deciding
> something already settled.

---

### 2026-08-23 — Scope authority moves from docs/PRD.md to GitHub Issues

**Context:** Vibe-scaffold's default contract treats `docs/PRD.md`'s "Scope —
this version" list as the thing that authorizes autonomous work. Steve's
preferred flow instead: talk an ask through with Claude conversationally, have
Claude synthesize it into a GitHub Issue sized like one unit of work, approve
the issue, and let Claude run it in a dedicated worktree to completion with
minimal check-ins — no markdown drafted per ask.
**Decision:** `CLAUDE.md` updated so "Implement anything explicitly scoped in
`docs/PRD.md`" reads "in an open, Steve-approved GitHub Issue" instead, with a
new "Scoping work" section spelling out the conversation → issue → worktree →
PR flow (branch/PR reference the issue number, PR body carries `Closes #<n>`
so the issue auto-closes on merge). `docs/PRD.md`'s "Scope — this version"
section is retired in favor of a non-authoritative "Roadmap" — durable
direction, not a list Claude builds from directly. `docs/PRD.md` otherwise
keeps its role for slow-changing context (Problem, Users, Core loop, Success
criteria, Constraints).
**Alternatives considered:** Keeping the PRD-driven flow and treating GitHub
Issues as just a task tracker downstream of it — rejected; Steve was explicit
that issue synthesis, not markdown drafting, is where scope actually gets
defined.
**Reversible?** Yes — it's a `CLAUDE.md`/`docs/PRD.md` wording change with no
code or infrastructure impact.

---

### 2026-08-23 — Fixed the gulp build instead of migrating it, for now

**Context:** Making `npm run build` exit cleanly (required for Vercel) surfaced two
pre-existing bugs, unrelated to the hosting setup itself: `gulp-autoprefixer@9.0.0`
ships ESM-only and needs `.default` under Node's CJS interop, and `package.json`
had drifted to `bootstrap: ^5.3.5` while `src/scss/bootstrap.scss`'s import list is
written for Bootstrap 4 (its own header comment says so). Building against v5
silently dropped `.text-left`, `.no-gutters`, `.embed-responsive`, `.card-columns`,
and `.fixed-top` — all used in the markup — because the import list is missing v5's
`maps` and `utilities/api` partials, and v5 renamed or removed those classes outright.
**Decision:** Pinned `bootstrap` to `4.5.3` to match the SCSS as written, rather than
updating the SCSS and markup for v5. Verified byte-for-byte against the previously
committed `build/` output — HTML and JS are identical, `style.css` selectors are
identical, `bootstrap.css` differs only in 3 selectors from a Bootstrap 4.5.x patch
bump (`.col-xl`, `.dropleft` added; `.navbar-nav-scroll` removed), none of which are
used in the markup except `.col-xl`, which was actually *missing* from the old
committed CSS — so this build is strictly more correct than what shipped before.
**Alternatives considered:** Upgrading the SCSS + markup to Bootstrap 5 properly.
Ruled out for this change — hosting setup should be small and reversible, and a
version bump touching every page's utility classes is exactly the kind of work
Phase 2 (the Astro migration) is scoped to absorb, where the whole template layer
is being rewritten anyway.
**Reversible?** Yes — it's a devDependency pin and an SCSS import-list revert.

---

### 2026-08-23 — Three-tier branch model: `main` production, `dev` staging

**Context:** Repo had a single `master` branch and no Vercel build configuration —
`https://portfolio-steve-orchosky.vercel.app/` was 404ing because nothing told
Vercel where the built site lives or how to build it.
**Decision:** Renamed `master` → `main` (production, matching the vibe-scaffold
contract verbatim) and made the existing `claude/vercel-hosting-branch-model-8p6h66`
branch become `dev` (staging). Features cut from `dev` via `scripts/new-feature.sh`.
**Alternatives considered:** Keeping `master` as production to avoid a GitHub/Vercel
default-branch change — rejected so every doc and script in this repo can say `main`
without a footnote.
**Reversible?** Yes, but costs a GitHub default-branch flip and a Vercel Production
Branch setting change to undo.

---

### 2026-08-23 — `build/` stays committed, untangled later

**Context:** `build/` mixes gulp-generated output (`*.html`, `style.css`,
`bootstrap.css`, `scripts.js`) with real assets that have no source counterpart:
`build/img` (473 files), `build/prototypes/`, `steve_orchosky_resume.pdf`, and an
orphan `raynor.html` with no matching `src/html/pages/raynor.html`.
**Decision:** Left it committed as-is for the hosting setup. Vercel's build
overwrites the four generated files in place; the asset files are already there
and already served.
**Alternatives considered:** Gitignoring just the generated files (risks silently
dropping `raynor.html`, which has no source to regenerate it from) or moving
everything into a `public/`-style asset directory (a real restructure, touching
~500 files and every image path — deferred to the Astro migration, where `build/img`
etc. become `public/img` etc. as part of that rewrite anyway).
**Reversible?** Yes.

---

### 2026-08-23 — Astro for the eventual build-tool migration, phased after hosting

**Context:** The gulp pipeline is ~5 years old and was hand-maintained; Steve now
edits primarily through Claude Code and wants a build that's cheaper to reason
about and to keep this fresh going forward. It also has real problems beyond age:
project data is duplicated across `src/js/projectArray.js`, an inline `@@loop` JSON
block in `index.html`, and hardcoded per-page titles (already drifted —
`store-mode.html`'s `<title>` reads "Smart Entry Mobile App"); most of the nav,
project lists, and prev/next are rendered client-side from concatenated
global-scope scripts.
**Decision:** Astro replaces gulp — one tool instead of gulp + gulp-sass +
autoprefixer + concat + browser-sync, Vercel auto-detects it, and it pre-renders
everything so the client JS shrinks to what's actually interactive (nav toggle,
ScrollReveal, slick carousels). One `src/data/projects.ts` becomes the single
source of truth. This ships as its own `feature/astro-migration` branch off `dev`,
after the current gulp-based site is confirmed live — so there's a known-good
deployment to diff the migration's output against, and a preview URL to review it
on before it touches `dev`.
**Alternatives considered:** Eleventy (closer to today's `@@include`/`@@loop`
syntax, but needs separate tooling for Sass/JS/autoprefixing where Astro has it
built in); migrating first and shipping once (rejected — no known-good baseline to
verify against, nothing live in the meantime).
**Reversible?** Yes, but a large diff to unwind once merged.

---

# CLAUDE.md — Agent Contract

This file governs how Claude Code operates in this repo. Read it in full before
touching any code. It is copied verbatim from the vibe-scaffold template —
project-specific detail lives in `docs/PRD.md`, `docs/ARCHITECTURE.md`, and
`docs/DECISIONS.md`, not here — with one deviation from the template: how scope
gets defined and authorized. See **Scoping work** below before relying on the
template's default "implement anything in `docs/PRD.md`" framing.

## Project identity

- **Name:** steveorchosky.com
- **One-liner:** Steve Orchosky's digital product design portfolio — case studies, work history, and contact.
- **Stack:** Static site — Gulp 5 + Sass + gulp-file-include (deviates from the React/Vite default — see ARCHITECTURE.md), deployed on Vercel
- **Integration branch:** `dev`
- **PRD:** `docs/PRD.md` — durable context only (Problem, Users, Core loop,
  Success criteria). The scoped, buildable backlog lives in **GitHub Issues**,
  not a markdown list — see Scoping work below.
- **Architecture / decisions:** `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`

Everything below that says "the integration branch" means whatever that line says.
Set it once at project start; the rest of this contract follows from it.

## How to start a session

1. Read `docs/PRD.md` and `docs/ARCHITECTURE.md` in full.
2. Read `docs/DECISIONS.md` for anything already settled — don't re-litigate it.
3. If you're picking up a GitHub Issue, read it in full — it's the scope
   authority for this unit of work (see Scoping work below), not `docs/PRD.md`.
4. Restate the plan for the current issue/phase in 3-5 bullets before writing code.
   **Wait for a go-ahead on this restatement before building.** This is the one
   mandatory check-in — everything after it runs autonomously until the next
   trigger below.

## Scoping work: conversation → GitHub Issue → worktree

This repo doesn't draft a markdown PRD section per feature. Instead:

1. **Talk it through with Claude in a session.** No doc-drafting up front —
   describe the ask, the problem, whatever feedback prompted it.
2. **Claude synthesizes that conversation into a GitHub Issue** — a title, the
   ask in a couple sentences, explicit acceptance criteria, and anything
   explicitly out of scope. Sized like one unit of work: what used to be a
   single bullet under a PRD's "Scope" section, not a whole PRD.
3. **Steve approves the issue** — a reply in the session, a comment, however
   is easiest. No fixed ceremony.
4. **Claude cuts a worktree + branch from it** via `scripts/new-feature.sh
   <slug>` (name the slug or branch after the issue, e.g.
   `feature/12-collapse-project-data`, so it's traceable). Restates the plan
   per "How to start a session" above, gets the one mandatory go-ahead, then
   runs the issue to completion largely unsupervised: implements, commits,
   opens a PR into the integration branch with `Closes #<n>` in the body so
   the issue closes automatically on merge. Stops early only at the triggers
   in Check-in cadence below.

`docs/PRD.md` keeps the durable, slow-changing context that doesn't belong in
an issue — Problem, Users, Core loop, Success criteria, Constraints. It does
**not** carry a live feature backlog; don't add new scoped asks to it. An
approved, open GitHub Issue is what authorizes autonomous work — see Autonomy
contract below, which reads "the issue" wherever the vibe-scaffold template
default would say `docs/PRD.md`.

## Autonomy contract

**Do without asking:**
- Implement anything explicitly scoped in an open, Steve-approved GitHub Issue
- Install/remove npm dependencies that stay within the stack already declared in ARCHITECTURE.md
- Create commits and push to the current feature branch
- Open a PR from a feature branch into the integration branch
- Write/update tests for code you write
- Update `docs/DECISIONS.md` when you make a judgment call worth remembering

**Stop and ask first:**
- Merging any PR
- Opening or merging a release PR (`dev` → `main`) in a three-tier project — that
  ships to production, so it's a human call on human timing
- Anything that touches production data or a live deploy
- Adding a paid API, service, or anything with a cost attached — surface the cost before doing anything, no exceptions
- Any change that expands scope beyond what's in the issue you're working from
- Deleting data, dropping a table/collection, or force-pushing
- Introducing a new major dependency/framework not already in ARCHITECTURE.md

## Check-in cadence

Beyond the mandatory plan check-in above, check in when:
- A GitHub Issue's scope is complete and ready for review
- You've attempted the same blocker two different ways and neither worked
- Something in the issue is ambiguous enough that two reasonable interpretations
  would produce different code
- You're about to open a PR to the integration branch
- Enough has accumulated on `dev` that a release to `main` looks due (three-tier
  projects) — say what's stacked up and let a human decide whether to ship

Otherwise, keep working. Don't check in just to narrate progress — a working
diff and a clear commit message says more than a status update.

## Git workflow

### Branch model — pick one at project start

**Two-tier (default).** Integration branch is `main`. Features cut from `main` and
merge back into it. Every merge ships. Right when the project is young, solo, or
low-stakes enough that "merged" and "live" can mean the same thing.

**Three-tier.** Integration branch is `dev`. Features cut from `dev` and merge into
`dev`; `dev` promotes to `main` in a separate release PR, less often. Right when
production has real users, when you want several features to land and settle before
any of them ship, or when "merged" and "live" need to be different events.

Set the **Integration branch** line under Project identity to match. The rules below
are the same either way.

### The rules

- `main` is production. Vercel auto-deploys `main` to prod and gives every
  branch/PR a preview URL — no extra config needed, just keep the repo connected.
- One branch per unit of work, cut from latest integration branch:
  `feature/<slug>`, `fix/<slug>`, or `docs/<slug>`.
- One **worktree** per feature, created with `scripts/new-feature.sh <slug>`,
  living as a sibling directory (`../<repo>-worktrees/<slug>`). This lets
  multiple features get worked in parallel without stashing.
- Squash-merge work branches into the integration branch via PR. Delete the branch
  and remove the worktree after merge (`git worktree remove`).
- Never push directly to `main`, or to `dev` where it exists. Everything lands by PR.
- **Releases (three-tier only):** `dev` → `main` is a merge commit, not a squash —
  squashing would flatten the individual features into one opaque commit and make
  `dev` and `main` diverge permanently. Opening that PR is a stop-and-ask.
- Commit messages: imperative mood, no filler ("add score validation" not
  "this commit adds some validation logic for scores"). Reference the GitHub
  Issue a commit addresses (e.g. `Fixes #12`) when it's not obvious. If the
  project uses Conventional Commits, note that in ARCHITECTURE.md and follow it.

## Quality bar before calling something done

- No console errors/warnings in the browser
- Responsive at mobile + desktop widths at minimum
- Keyboard-navigable, visible focus states, obvious touch targets (44px min)
- No hardcoded secrets — use `.env.local`, confirm it's gitignored
- Frontend UI changes pass a design-taste check (`/design-taste-frontend` or
  equivalent) before calling the work done — no boilerplate-looking layouts
- Update `docs/DECISIONS.md` if you made a call the issue didn't specify

## Voice for anything user-facing in the PR/commit trail

Direct, no filler, no "great progress!" energy. State what changed and why in
as few words as it takes.

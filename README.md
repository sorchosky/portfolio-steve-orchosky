# steveorchosky.com

Steve Orchosky's portfolio — case studies, work history, and contact. Static
site built with Gulp 5 + Sass + `gulp-file-include`, deployed on Vercel.

## Local development

```bash
npm install
npm run dev     # full build, then watch + serve at localhost:3000
```

```bash
npm run build   # one-shot production build into build/ — what Vercel runs
```

## Branch model

Three-tier, per `CLAUDE.md`:

| Branch | Purpose | Deploys to |
|---|---|---|
| `main` | Production | `steveorchosky.com` |
| `dev` | Staging — features land here first | Vercel's `dev` preview alias |
| `feature/*`, `fix/*`, `docs/*` | One branch per unit of work, cut from `dev` | its own Vercel preview URL |

Start a new feature with:

```bash
scripts/new-feature.sh <slug>
```

Creates a sibling git worktree on a `feature/<slug>` branch cut from `dev`. See
`CLAUDE.md` for the full workflow and `docs/PRD.md` / `docs/ARCHITECTURE.md` for
what's being built and how it's put together.

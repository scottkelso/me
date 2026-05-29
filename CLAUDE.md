# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install --legacy-peer-deps   # install (legacy flag required for peer dep conflicts)
npm run dev                       # dev server at localhost:5173
npm run build                     # tsc -b && vite build
npm run lint                      # eslint
npm run test                      # cypress e2e (requires dev server running on :5173)
npm run preview                   # preview production build
```

To run a single Cypress test file:
```bash
npx cypress run --spec "cypress/e2e/spec.cy.ts"
```

## Architecture

Single-page React + TypeScript + Vite app deployed to GitHub Pages at `https://scottkelso.github.io/me`. Vite base is `/me` — all asset paths and routing must account for this.

**Layout:** `App.tsx` is the entire page. It renders sections in a fixed order: `NavBar` → `HeroHeader` → intro → highlights → experience → technologies → skills → appraisal → contact → `Footer`. There is no React Router; navigation is smooth-scroll via anchor IDs defined in `src/types/index.ts` as `SectionIdEnum`.

**Pages vs Components:** `src/pages/` holds section-level components (`Experience`, `Technologies`, `Highlights`, `Contact`); `src/components/` holds smaller reusable pieces. The distinction is loose — both are just React components.

**Content data:**
- `src/components/technologies.csv` — drives both `MyWordCloud` (word cloud sized by `Confidence` column) and the `Technologies` page table. Columns: `Technology, Description, Confidence, Category, LastUsed`.
- Experience entries are hardcoded in `src/pages/Experience.tsx` as a typed array of `ExperienceItem`.
- All other content (bio text, skills list, appraisal quotes) is inline in `App.tsx`.

**UI:** MUI v7 (`@mui/material`) for all layout and component primitives. `@visx/wordcloud` + `@visx/text`/`@visx/tooltip` for the technology word cloud.

**CI/CD:** `.github/workflows/deploy.yml` — on push to `main`: lint → build → upload artifact → deploy to `gh-pages` branch via `peaceiris/actions-gh-pages`.

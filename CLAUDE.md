# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (localhost:4321)
npm run build     # type-check + build to dist/
npm run preview   # preview the build locally
```

No test suite. `astro check` (TypeScript + Astro types) runs as part of `build`.

## Architecture

Astro 5 static site — Francesc Obrador's personal portfolio. Tailwind CSS for styling, `astro-icon` + heroicons for SVG icons.

### i18n routing

Three locales: `es` (default), `en`, `ca`. Default locale (`es`) maps to `/`, others to `/en/` and `/ca/`.

- `src/i18n/ui.ts` — all translatable strings as a typed `const` object
- `src/i18n/utils.ts` — `getLangFromUrl(url)` + `useTranslations(lang)` helpers
- Pages live under `src/pages/` (root = es), `src/pages/en/`, `src/pages/ca/`
- **Adding a new string:** add the key to all three locales in `ui.ts` first, then reference it with `t("key")`

### Content collections

Defined in `src/content/config.ts`. Two collections:

- `experience` — markdown files under `src/content/experience/{es,en,ca}/`
- `projects` — markdown files under `src/content/projects/{es,en,ca}/`

Each collection has locale sub-folders; always create/edit all three locales together.

**Project frontmatter fields:** `title`, `description`, `image` (imported asset), `tags` (array of `TAGS` values from `src/data/tags.ts`), `link?`, `github?`, `type` (`'work'` | `'personal'`).

### Adding a technology tag

Add a new entry to `TAGS` in `src/data/tags.ts` and drop the SVG into `src/icons/technologies/`. Tag icons use the `technologies/<name>` path convention matched by `astro-icon`.

### Icons

- `src/icons/technologies/` — tech stack icons (used in tags and Skills section)
- `src/icons/social/` — social links
- `src/icons/items/` — UI icons (nav, buttons)
- Heroicons are available via `astro-icon` as `heroicons:<name>`

### Theme

Dark/light mode toggled via `portfolio-theme` in `localStorage`. The `dark` class on `<html>` drives Tailwind dark variants. Scroll reveal uses `.reveal` / `.reveal.visible` CSS classes — wrap animated sections in `<div class="reveal">`.

### Deployment

Deployed to **Vercel** (not GitHub Pages). The `dist/` folder is committed but Vercel builds automatically on push.

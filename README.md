# Portfolio

Personal portfolio, built with **React 19 + TypeScript + Vite + Tailwind CSS 4**.

## Editing content

Everything on the page (intro, links, projects, education, tools) is in
[`src/data.ts`](src/data.ts). Change it there; the components just render it.
Wrap words in `` `backticks` `` to show them as inline code.

The "Recently pushed" section is fetched live from the GitHub API, so it updates on its own.

## Commands

```sh
npm install        # once
npm run dev        # dev server with hot reload at http://localhost:5173
npm run build      # type-check, then build to dist/
npm run preview    # serve the production build
```

## Layout

| Path | What it does |
|---|---|
| `src/data.ts` | All site content |
| `src/components/` | One component per section, plus `ui.tsx` (shared bits) and `Icons.tsx` |
| `src/index.css` | Tailwind import, fonts, dark-mode variant, star background |
| `index.html` | Page shell, SEO metadata, and the script that applies the theme before first paint |
| `public/favicon.svg` | Tab icon |
| `.github/workflows/deploy.yml` | Builds and deploys to GitHub Pages on every push to `main` |

## Deploy to GitHub Pages

The site lives in https://github.com/vineetvsingh/Portfolio and is served at
https://vineetvsingh.github.io/Portfolio/ (the `base` in `vite.config.ts` matches that path).

One-time setup: in the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
After that, each push to `main` builds and publishes the site.

## Later

- Add your B.Tech years: uncomment `years` on the first entry of `education` in `src/data.ts`.
- To add a resume, put `resume.pdf` in `public/` and add
  `{ label: "Resume", href: "/Portfolio/resume.pdf", icon: "mail" }` (or a new icon) to `socials` in `src/data.ts`.

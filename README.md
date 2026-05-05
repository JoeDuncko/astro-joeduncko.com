# JoeDuncko.com

Personal website and blog for Joe Duncko, built with [Astro](https://astro.build/), MDX, and Tailwind CSS.

The site includes:

- A personal homepage at `/`
- A blog powered by Astro content collections at `/blog`
- A resume page at `/resume`
- JSON-style data endpoints under `/api`
- RSS and sitemap output for production deploys
- GitHub Pages deployment

## Tech Stack

- Astro 4
- TypeScript
- MDX content
- Tailwind CSS
- Astro RSS and sitemap integrations
- Rehype plugins for slugged, auto-linked headings

## Getting Started

Install dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

Astro serves the site at `http://localhost:4321` by default.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Astro development server |
| `npm run start` | Alias for `npm run dev` |
| `npm run build` | Run `astro check`, then build the static site to `dist/` |
| `npm run astro -- <command>` | Run Astro CLI commands |

## Project Structure

```text
src/
  components/        Reusable Astro components
  content/blog/      MDX blog posts
  layouts/           Page and blog post layouts
  pages/             File-based routes
  styles/            Global styles
  utils/             Shared utilities
public/
  images/            Static image assets
  favicon.ico
.github/workflows/  GitHub Pages deployment
```

Key files:

- `src/consts.ts` stores site-wide title and description values.
- `src/content/config.ts` defines the blog frontmatter schema.
- `astro.config.mjs` configures Astro, integrations, markdown plugins, and deploy settings.
- `src/utils/url.ts` helps generate route-aware internal URLs.

## Writing Blog Posts

Blog posts live in `src/content/blog/` as `.mdx` files. Each post needs frontmatter that matches the content schema:

```mdx
---
title: "Post Title"
description: "Short description for cards, SEO, and RSS."
pubDate: May 5 2026
updatedDate: May 6 2026
heroImage: "/images/example.png"
---

Post content goes here.
```

Required fields:

- `title`
- `description`
- `pubDate`

Optional fields:

- `updatedDate`
- `heroImage`

Posts are sorted newest-first on the homepage, blog index, and RSS feed.

## Resume and Site Data

Resume sections and other structured site data are defined in the modules under `src/pages/api/`:

- `experiences.ts`
- `extracurriculars.ts`
- `openSourceContributions.ts`
- `projects.ts`
- `socials.ts`

Those modules are imported by the resume and homepage components, and Astro exposes matching endpoints for direct access where applicable.

## URLs and Deployment Settings

Production uses:

```sh
SITE_URL=https://joeduncko.com
BASE_PATH=/
```

Use `getUrl()` from `src/utils/url.ts` when linking to internal pages or assets from Astro components. That keeps internal links consistent with the configured base path.

## Deployment

The GitHub Actions workflow builds and deploys the site to GitHub Pages.

On pushes to `main`, it builds the production site and deploys it to `https://joeduncko.com`.

## Maintenance Notes

- Run `npm run build` before publishing substantial changes.
- Put browser-accessible static assets in `public/`.
- Prefer editing shared personal metadata in `src/consts.ts` instead of duplicating copy across pages.
- Keep route-aware links going through `getUrl()` when they need to respect the configured base path.

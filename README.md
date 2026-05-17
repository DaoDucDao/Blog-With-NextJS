# Blog With Next.js

A personal blog built with Next.js — a one-week learning project to explore the App Router, MDX content, and static generation.

## Scope

This is intentionally a small, read-mostly site. No authentication, no database, no CMS. Posts live as markdown/MDX files in the repo and are statically generated at build time.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- ESLint 9

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3500](http://localhost:3500) in your browser. The dev server uses port 3500 (configured in `package.json`).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server on port 3500 |
| `npm run build` | Production build |
| `npm start` | Run the production build |
| `npm run lint` | Run ESLint |

## One-Week Learning Plan

| Day | Focus |
| --- | --- |
| 1 | Scaffold project, root layout, header/footer, home page |
| 2 | Markdown/MDX posts, `gray-matter` frontmatter, `[slug]` dynamic route |
| 3 | Post index page, per-post SEO metadata via `generateMetadata` |
| 4 | Tailwind Typography for `.prose` styling, syntax highlighting |
| 5 | Tags / categories with filter pages, dark mode toggle, reading time |
| 6 | RSS feed, sitemap, contact form or view counter |
| 7 | Deploy to Vercel |

## Project Structure

```
app/
├── layout.tsx     # root layout (wraps every route)
├── page.tsx       # "/" route
└── globals.css    # Tailwind directives + base styles
```

Routing is file-system based — folders inside `app/` become URL segments, and a `page.tsx` inside a folder makes it routable.

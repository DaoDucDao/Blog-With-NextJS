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

| Day | Focus | Status |
| --- | --- | --- |
| 1 | Scaffold project, root layout, header/footer, home page | ✅ Done |
| 2 | Markdown/MDX posts, `gray-matter` frontmatter, `[slug]` dynamic route | ✅ Done |
| 3 | Post index page, per-post SEO metadata via `generateMetadata` | ✅ Done (covered during Day 2) — extending with OpenGraph, sitemap, 404, active nav |
| 4 | Tailwind Typography for `.prose` styling, syntax highlighting | ⏳ Next |
| 5 | Tags / categories with filter pages, dark mode toggle, reading time | ⏳ |
| 6 | RSS feed, sitemap, contact form or view counter | ⏳ |
| 7 | Deploy to Vercel | ⏳ |

## Project Structure

```
app/
├── layout.tsx                  # root layout (header + footer + html shell)
├── page.tsx                    # "/" — intro + link to posts
├── globals.css                 # Tailwind directives + base styles
├── Components/
│   ├── Header/Header.tsx       # site header (nav)
│   └── Footer/Footer.tsx       # site footer
└── posts/
    ├── page.tsx                # "/posts" — list of all posts
    └── [slug]/
        └── page.tsx            # "/posts/:slug" — one post (SSG)

content/
└── posts/
    ├── hello-world.mdx
    ├── folders-are-routes.mdx
    └── ssg-vs-ssr.mdx          # the posts themselves (frontmatter + MDX body)

lib/
└── posts.ts                    # server-side helpers: getAllPosts / getPostBySlug
```

Routing is file-system based — folders inside `app/` become URL segments, and a `page.tsx` inside a folder makes it routable. Posts live as `.mdx` files in `content/posts/` and are pre-rendered to static HTML at build time via `generateStaticParams`.

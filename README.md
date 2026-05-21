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
| 3 | Post index, per-post SEO, OpenGraph/Twitter cards, sitemap, robots, styled 404, active nav | ✅ Done |
| 4 | Tailwind Typography for `.prose` styling, `rehype-pretty-code` + `shiki` syntax highlighting | ✅ Done |
| 5 | Reading time, tag chips, `/tags` index, `/tags/[tag]` filter, dark mode toggle via `next-themes` | ✅ Done |
| 6 | RSS feed at `/feed.xml`, `/about` page, contact form via Server Actions | ✅ Done |
| 7 | GitHub Actions CI (lint + build on every push) instead of Vercel deploy | ✅ Done |

## Features

- **Routing & rendering:** App Router, file-based routing, all pages SSG via `generateStaticParams`
- **Content:** posts as `.mdx` files with YAML frontmatter, rendered with `next-mdx-remote/rsc`, syntax-highlighted code blocks via `rehype-pretty-code` (shiki, github-dark theme)
- **Typography:** Tailwind Typography (`prose`) with light/dark variants
- **SEO:** per-page metadata, OpenGraph + Twitter cards, `/sitemap.xml`, `/robots.txt`, RSS feed at `/feed.xml`
- **Tags:** every post has tags; `/tags` shows the full set with counts; `/tags/[tag]` lists matching posts (SSG)
- **Dark mode:** class-based via `next-themes` with a header toggle (light / dark / system), persisted to localStorage
- **Contact form:** Server Action (`"use server"`) + `useActionState`, works without JavaScript
- **CI:** GitHub Actions workflow runs lint + build on every push and pull request

## Project Structure

```
app/
├── layout.tsx                  # root layout (header + footer + html shell + ThemeProvider)
├── page.tsx                    # "/" — intro + link to posts
├── globals.css                 # Tailwind directives + dark-mode vars + code-block CSS
├── not-found.tsx               # styled 404 page
├── sitemap.ts                  # generates /sitemap.xml
├── robots.ts                   # generates /robots.txt
├── feed.xml/route.ts           # generates /feed.xml (RSS)
├── Components/
│   ├── Header/
│   │   ├── Header.tsx          # site header
│   │   ├── NavLink.tsx         # client — active link highlighting (usePathname)
│   │   └── ThemeToggle.tsx     # client — dark mode toggle (useTheme)
│   ├── Footer/Footer.tsx
│   ├── TagList/TagList.tsx     # reusable tag pills
│   └── Theme/ThemeProvider.tsx # client — wraps next-themes provider
├── posts/
│   ├── page.tsx                # "/posts" — list of all posts
│   └── [slug]/
│       └── page.tsx            # "/posts/:slug" — one post (SSG via generateStaticParams)
├── tags/
│   ├── page.tsx                # "/tags" — all tags with counts
│   └── [tag]/
│       └── page.tsx            # "/tags/:tag" — posts filtered by tag (SSG)
├── about/page.tsx              # "/about" — static about page
└── contact/
    ├── page.tsx                # "/contact" — form page
    ├── ContactForm.tsx         # client — uses useActionState
    ├── actions.ts              # "use server" — submitContact action
    └── types.ts                # shared types between action and form

content/
└── posts/                      # the posts themselves (frontmatter + MDX body)
    ├── hello-world.mdx
    ├── folders-are-routes.mdx
    └── ssg-vs-ssr.mdx

lib/
└── posts.ts                    # server-side helpers: getAllPosts, getPostBySlug,
                                # getPostsByTag, getAllTags, reading-time calc

.github/workflows/
└── ci.yml                      # GitHub Actions: lint + build on every push
```

Routing is file-system based — folders inside `app/` become URL segments, and a `page.tsx` inside a folder makes it routable. Posts live as `.mdx` files in `content/posts/` and are pre-rendered to static HTML at build time via `generateStaticParams`.

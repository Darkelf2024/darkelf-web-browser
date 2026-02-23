# What is this?
- Darkelf Browser Next.js Site, built with Zero trust and deep love for the TS Community. 

Single-page marketing site for Darkelf Browser rebuilt with Next.js (App Router) while matching the original neon cyber aesthetic like a boss. 

## Tech
- Next.js 14 (App Router) with TypeScript
- Static-export ready (`output: export`, unoptimized images)
- Global CSS mirrors the original landing page styling

## Getting Started
- Install deps: `npm install`
- Dev server: `npm run dev`
- Lint: `npm run lint`
- Production build: `npm run build`
- Static export (for GitHub Pages, etc.): `npm run export`

## Project Layout
- `app/page.tsx` — main page content
- `app/layout.tsx` — metadata, global head links, JSON-LD
- `app/globals.css` — theme, layout, and animation styles
- `app/robots.ts` / `app/sitemap.ts` — SEO surfaces
- `public/` — Darkelf images, favicons, OG image

## Deployment Notes
- Vercel is recommended; static export output lives in `out/`.
- Canonical domain: `https://darkelfbrowser.com` (see `app/layout.tsx`).

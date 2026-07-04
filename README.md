# Asaniyan Portfolio

Personal site for Ayomide Asaniyan — work experience, projects, and (soon) musings.

## Stack

Vite + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui, React Router for routing, GSAP for animation.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — typecheck and build for production
- `npm run lint` — run ESLint
- `npm run preview` — preview the production build

## Structure

- `src/modules/landing/` — homepage sections (Hero, Experience, Works, Help, Awards, Talk, Footer)
- `src/pages/` — route-level pages
- `src/components/` — shared UI (`ui/` is shadcn primitives, rest are custom)

A Sanity-backed blog (`/blog`, `/blog/:slug`) is planned as the next addition.

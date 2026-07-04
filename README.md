# Asaniyan Portfolio

Personal site for Ayomide Asaniyan: work experience, projects, and musings.

## Stack

Vite + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui, React Router for routing, GSAP for animation, Sanity for the blog.

## Scripts

- `npm run dev`: start the dev server
- `npm run build`: typecheck and build for production
- `npm run lint`: run ESLint
- `npm run preview`: preview the production build

## Structure

- `src/modules/landing/`: homepage sections (Hero, Experience, Works, Help, Awards, Talk, Footer)
- `src/pages/`: route-level pages (Home, BlogList, BlogPost, Studio)
- `src/components/`: shared UI (`ui/` is shadcn primitives, rest are custom)

The blog (`/blog`, `/blog/:slug`) is powered by Sanity, with the studio embedded at `/studio`. A standalone, deployable copy also lives in `studio/`.

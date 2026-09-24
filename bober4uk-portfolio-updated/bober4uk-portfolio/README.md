# Bober4uk — Minecraft Datapack Developer Portfolio

A from-scratch rebuild of the bober4uk.ru portfolio: Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion. Dark, premium developer-portfolio aesthetic with a subtle Minecraft/datapack accent (the `function bober4uk:*` motif used for section labels and the terminal section is a nod to `.mcfunction` command syntax).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production build:

```bash
npm run build
npm run start
```

## Editing content

All copy, links, stats and project data live in `src/data/`, separate from the UI:

- `src/data/site.ts` — name, hero copy, about text, stats, terminal lines, contact copy, social links.
- `src/data/projects.ts` — the project cards (title, description, features, tags, price, download link, feedback).
- `src/data/skills.ts` — the grouped skill badges.

Every piece of text is bilingual (`{ ru: "...", en: "..." }`), matching the RU/EN switcher in the navbar (persisted to `localStorage`, defaults to Russian like the previous site).

## Replacing placeholder art

- `public/images/projects/*.svg` — abstract placeholder covers for each project. Swap these for real screenshots/renders (same filenames, or update `cover` in `projects.ts`). JPG/PNG/WebP all work with `next/image`.
- `public/favicon.svg` — minimal placeholder mark; replace with a real logo if you have one.
- The hero's right-side visual (`src/components/HeroVisual.tsx`) is a generated SVG node lattice rather than the old player-skin render, since no real art asset was available to carry over. Swap in a skin render or 3D screenshot there if you'd like a more literal Minecraft visual.

## Structure

```
src/
  app/            layout.tsx (fonts + SEO metadata), page.tsx, globals.css
  components/     one component per section, plus small shared primitives
    providers/    LanguageProvider (RU/EN context)
  data/           site.ts, projects.ts, skills.ts — all editable content
  lib/            utils.ts (formatting helpers)
  types/          shared TypeScript types
```

## Notable behavior carried over from the old site

- RU/EN language switcher (`LanguageProvider` + `LanguageToggle`).
- Live Discord status badge in the About section via the Lanyard API (`DiscordStatusBadge.tsx`) — update `discordId` in `site.ts` if needed.
- Real social links (Telegram, Discord, YouTube, Modrinth) in the Contact section.
- Project tags/filters (All / Order / Own project) and price display, styled instead of removed.

## Accessibility & performance

- All motion is wrapped to respect `prefers-reduced-motion` (Framer Motion's `useReducedMotion`, plus a global CSS fallback in `globals.css`).
- Visible focus rings (`:focus-visible`) sitewide.
- Semantic sectioning (`header`, `main`, section landmarks, one `h1`/section `h2`s).
- No client-side libraries beyond Framer Motion + Lucide icons; images are lazy-loaded by `next/image` automatically (the hero image is the only above-the-fold one and isn't marked `priority` since it's an inline SVG component, not an `<img>`).

## Known limitations

- No real project photography — see "Replacing placeholder art" above.
- Discord status widget requires the Lanyard API to be reachable client-side; it fails closed to "offline" if the request errors.

# Kontour Studios

A pixel-matched, animated Next.js 16 (App Router) rebuild of the Kontour Studios
marketing site — TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The Montserrat font loads from Google Fonts at
build time, so an internet connection is required for `npm run build` /
`npm run dev` the first time (fonts are cached locally after that).

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx             Root layout — Montserrat font, metadata
  globals.css             Design tokens, watermark text, glass panel utilities
  page.tsx                Home (Hero, Services, Market Cards, Philosophy)
  services/page.tsx
  about/page.tsx
  projects/page.tsx
  philosophy/page.tsx
  team/page.tsx
  faq/page.tsx
  contact/page.tsx
components/
  Navbar.tsx              Fixed nav, active-route indicator, mobile drawer
  Hero.tsx                 Hero section incl. KONTOUR watermark + recognition card
  ServicesAccordion.tsx   Animated [01]-[04] accordion (shared by Home + /services)
  MarketCards.tsx          100% / 50+ / 97% stat carousel (shared by Home + /about)
  PhilosophySection.tsx   STUDIOS watermark, progress + equalizer cards
  PillButton.tsx            Reusable capsule CTA button (primary/secondary)
  GlowField.tsx              Ambient pulsing red/orange glow layer
  Reveal.tsx                  Scroll-reveal + stagger animation helpers
  PageHero.tsx                Shared inner-page hero banner
  Footer.tsx                   Site footer with full nav
  FaqAccordion.tsx             FAQ page accordion
  ContactForm.tsx              Contact page form
  AboutValues.tsx, ProjectsList.tsx, TeamGrid.tsx
                                Animated content blocks for their respective pages
lib/
  data.ts                  Shared content: nav links, services, stats, FAQs, team
tailwind.config.ts          Design tokens: colors, fonts, glow keyframes
```

## Design tokens

| Token | Value |
|---|---|
| Background | `#100101` / `#0B0404` |
| Signal Red | `#EE0000` |
| Kontour Orange | `#FF5100` |
| Soft White | `#FFF7F7` |
| Studio Gray | `#BABABA` |
| Font | Montserrat (300-800) |

## Notes

- Images are sourced from Unsplash (free license) and `i.pravatar.cc` for team
  placeholders - swap the URLs in `components/Hero.tsx`, `MarketCards.tsx`,
  `PhilosophySection.tsx`, and `TeamGrid.tsx` for real brand photography.
- Reduced-motion is respected globally via `globals.css`.
- All routes are statically generated.

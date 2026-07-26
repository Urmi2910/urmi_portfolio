# Urmi Shah - Content Design Portfolio

A modern content design portfolio built with Next.js 15, Tailwind CSS 4, and a Material You–inspired design system with subtle playful geometric accents.

## Features

- **Case-study-first layout** - Work is the focal point for hiring managers
- **Material You foundation** - Tonal surfaces, pill buttons, organic blur shapes, generous spacing
- **Playful geometric accents** - Triangles, dots, and squiggles used sparingly for personality
- **Accessible** - Semantic HTML, focus states, reduced-motion support, strong contrast
- **Responsive** - Mobile-first layout that scales gracefully

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
├── app/                  # Next.js App Router pages
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # Hero, Case Studies, About, Contact
│   └── ui/               # Button, Card, GeometricDecor
├── data/portfolio.ts     # Profile & case study content
└── lib/utils.ts
```

## Customization

Edit `src/data/portfolio.ts` to update profile info, case studies, and metrics. Design tokens live in `src/app/globals.css` under `@theme`.

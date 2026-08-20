# everysphere — brandable hero site

Single-page cinematic hero: fullscreen looping background video, glassmorphic
navigation, Instrument Serif display type on a deep-navy dark theme.

Stack: React 18 + Vite 6 + TypeScript + Tailwind CSS 3 + shadcn/ui.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build to dist/
npm run preview  # serve the production build
```

## Rebranding

Everything brand-specific lives in [`src/config/site.ts`](src/config/site.ts):

| Field | What it controls |
| --- | --- |
| `brand.name` / `brand.mark` | Logo wordmark and its superscript (set `mark` to `null` to hide) |
| `nav.links` | Nav items, hrefs, and which one renders as active |
| `nav.cta` / `hero.cta` | Button labels |
| `hero.headline` | Headline segments; `muted: true` renders that segment in `muted-foreground` |
| `hero.subtext` | Supporting paragraph |
| `video.src` | Background video URL |

Colors are HSL CSS variables in [`src/index.css`](src/index.css) (`--background`,
`--foreground`, `--muted-foreground`, …) and are consumed by Tailwind through
`tailwind.config.ts`, so a palette swap is a few lines. Fonts are swapped via
`--font-display` / `--font-body` plus the Google Fonts link in `index.html`.

## Structure

```
src/
  App.tsx                    page shell
  components/
    VideoBackground.tsx      absolute inset-0 object-cover autoplay loop muted video
    Navigation.tsx           logo, nav links, glass CTA
    Hero.tsx                 headline, subtext, glass CTA
    ui/button.tsx            shadcn/ui button (+ `glass` variant)
  config/site.ts             all brand copy and asset URLs
  index.css                  theme variables, .liquid-glass, fade-rise animations
```

`.liquid-glass` is the glass treatment (1px inset highlight + masked gradient
border via `mask-composite`); `.animate-fade-rise*` stagger the hero entrance at
0s / 0.2s / 0.4s.

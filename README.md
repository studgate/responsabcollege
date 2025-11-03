ResponsabCollege — React + Vite App

Overview
- React 18, Vite 4, TailwindCSS, Radix/shadcn-style UI, Framer Motion, React Router.
- Dev server: Vite on port 3000. Build outputs a static site in `dist/`.
- Custom Vite plugins for a visual editor (dev-only) and iframe route restoration.

Requirements
- Node: `20.19.1` (see `.nvmrc`). Recommended: `nvm use`.
- npm: comes with Node 20. Use `npm ci` to install from lockfile.

Getting Started
- Install: `npm ci`
- Run dev: `npm run dev`
  - Opens on `http://localhost:3000` (server binds to `::` as well).
- Build: `npm run build`
  - Generates `dist/`. Also creates `public/llms.txt` metadata during build.
- Preview build: `npm run preview`

Scripts
- `dev`: Start Vite dev server.
- `build`: Generate `public/llms.txt` then run `vite build`.
- `preview`: Serve the built `dist/` locally.

Routing
- BrowserRouter SPA. See routes in `src/App.jsx`.
- For Apache, SPA fallback is set via `public/.htaccess` (all non-file routes -> `index.html`). For other hosts, configure equivalent rewrites.

Environment Variables (optional, prod only)
- `TEMPLATE_BANNER_SCRIPT_URL` and `TEMPLATE_REDIRECT_URL` — if set, inject a banner script in production builds.

Development Notes
- Alias `@` -> `src` is configured in `vite.config.js`.
- TailwindCSS scans `src/**/*.{js,jsx}` and related folders (see `tailwind.config.js`).
- Some dev-only plugins postMessage to specific parent origins; safe to ignore locally.

Troubleshooting
- Node 22 vs 20: If you see unexpected errors, switch to Node 20: `nvm use`.
- JSX attributes: Ensure React elements use `className` not `class`.
- If `public/llms.txt` looks off, run a fresh build (`npm run build`) after editing pages’ `<Helmet>` titles/descriptions.


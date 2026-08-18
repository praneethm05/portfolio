# praneethm.dev

Personal portfolio of **Praneeth M** — a single-page React site listing projects, experience, and skills.

Live: [praneethm.dev](https://praneethm.dev)

## Stack

- React 17 + Create React App (`react-scripts` 5)
- Plain CSS with per-component stylesheets and CSS custom properties
- Material-UI v4 icons; skill logos pulled from [Simple Icons CDN](https://cdn.simpleicons.org)
- Space Grotesk / Inter via Google Fonts
- `@vercel/analytics` for page analytics
- Deployed on Vercel

## Sections

| Section | Component | Notes |
| --- | --- | --- |
| Hero / About | `About` | Three-column panel: photo, bio + resume link, skill tiles + social links, plus a contact bar |
| Projects | `Projects`, `ProjectContainer` | Numbered cards with stack chips, source and live-preview links |
| Experience | `Experience` | Timeline grouped by Education / Work / Leadership / Certifications; entries with bullet points expand on click |
| Skills | `Skills` | Icon + label grid |
| Contact | `Contact` | `mailto:` CTA |

Sections hide themselves when their data arrays are empty.

## Behavior worth knowing

- `About`, `Projects`, `Experience`, `Skills`, and `Contact` are lazy-loaded via `React.lazy` + `Suspense`; `Header`, `ScrollToTop`, and `Footer` are eager.
- The navbar highlights the active link using an `IntersectionObserver` over `<section>` elements (0.5 threshold).
- **Theme switching is intentionally disabled.** `src/contexts/theme.js` hard-pins `themeName` to `light` and `toggleTheme` is a no-op; the original system-preference logic is kept commented out, as is the toggle button in `Navbar.js`. The `.dark` palette still lives in `src/App.css`, so re-enabling means uncommenting both blocks — no CSS work needed.
- `ScrollToTop` appears past 500px of scroll.
- `vercel.json` rewrites every route to `/index.html` for SPA routing.

## Setup

Node version is pinned in `.node-version` (v16.7.0) — use `nvm use` or `fnm use`.

```shell
yarn
yarn start
```

Build scripts pass `--openssl-legacy-provider`, which is what keeps this working on newer Node despite the old `react-scripts`/webpack combination.

## Editing content

Nearly all copy lives in `src/portfolio.js`:

- `header` — site title and homepage link
- `about` — name, role, description, resume URL, social links
- `projects` — name, description, `stack[]`, `sourceCode`, optional `livePreview`
- `experience` — array of `{ category, items[] }`; each item takes `title`, `subtitle`, `meta`, `details[]`, optional `link` (renders a "verify ↗" link)
- `skills` — flat list; the first 8 also render as tiles in the hero
- `skillIcons` — maps a skill name to its Simple Icons slug. **A skill with no entry here renders as text only**, so add the slug when adding a skill.
- `contact` — email

Profile photo: `src/assets/image.jpg`. Page title and meta description: `public/index.html`.

## Deployment

Vercel builds from `main` and serves `praneethm.dev`; pushing to `main` deploys.

The `deploy` script (`gh-pages -d build`) and the `gh-pages` dependency are unused leftovers — there is no `homepage` field in `package.json` anymore.

## Scripts

```shell
yarn start     # dev server
yarn build     # production build
yarn lint      # eslint (airbnb + prettier)
yarn format    # prettier --write
```

## License

[MIT](LICENSE)

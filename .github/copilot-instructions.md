<!--
Purpose: concise, actionable guidance for AI coding agents working on this repository.
Keep this file short (20-50 lines). Reference only discoverable code patterns and commands.
-->

# Copilot instructions (project-specific)

- Project type: Vite + React (template). Entry: `index.html` -> `src/main.jsx`.
- Top-level component: `src/App.jsx`. Static/public assets: `public/` (root imports like `/vite.svg`) and `src/assets/` (imported as modules).

- How to run locally (dev + build):
  - Install deps: `npm install` (not part of this repo; runner will install before running scripts).
  - Start dev server: `npm run dev` (runs `vite`).
  - Build: `npm run build`.
  - Preview production build: `npm run preview`.
  - Lint: `npm run lint` (uses `eslint` and `eslint.config.js`).

- Key files to inspect for changes or patterns:
  - `package.json` — scripts and the `vite` -> `rolldown-vite@7.2.2` override.
  - `vite.config.js` — includes `@vitejs/plugin-react`; prefer modifying plugins here.
  - `eslint.config.js` — flat config used for linting rules and global ignores.
  - `src/main.jsx` — app bootstrapping via `createRoot` / `StrictMode`.
  - `src/App.jsx` — example component and HMR expectation.

- Project conventions and patterns (concrete):
  - Files use `.jsx` for React components. Keep the `.jsx` extension when importing (this repo currently imports `./App.jsx`).
  - CSS lives alongside the app in `src/*.css` and is imported from components (see `src/index.css`, `src/App.css`).
  - Public assets can be referenced from the project root with an absolute path (e.g., `/vite.svg` in `src/App.jsx`).
  - ESLint is configured via `eslint.config.js` (flat config). New rules should go there.

- Integration points / external deps: this is a frontend-only template — no backend or API wiring present. When adding backend calls, prefer creating `src/api/*` and use fetch/async calls from components or hooks.

- Quick editing notes for the agent (do these, not generic advice):
  - When adding a new top-level dependency, update `package.json` and do not assume global installs; keep versions conservative.
  - Preserve `type: "module"` in `package.json` unless converting the whole codebase to CommonJS.
  - Avoid changing Vite override entry for `vite` unless you understand `rolldown-vite` implications.
  - Use `npm run lint` to check for obvious issues; lint config is in `eslint.config.js`.

- Examples to reference in PRs or changes:
  - To add a new component: create `src/components/YourComponent.jsx`, import and use it in `src/App.jsx` or `src/main.jsx`.
  - To add a plugin: edit `vite.config.js` and add to `plugins: [ ... ]` (example already uses `@vitejs/plugin-react`).

If anything in these instructions is unclear or missing (for example, new build or test scripts you expect to be here), ask for the specific workflow and I will update this file.

# Repository Guidelines

## Project Structure & Module Organization

- `index.html` is the primary page served by GitHub Pages.
- `Shomamorita.png` and other assets live at the repo root.
- `README.md` holds brief project notes.
- `.github/` contains GitHub workflows or templates when present.

## Build, Test, and Development Commands

- `python -m http.server` serves the site locally at `http://localhost:8000` for quick checks.
- No build step is required; you can open `index.html` directly in a browser.
- There is no automated test runner configured.

## Coding Style & Naming Conventions

- Use 4-space indentation in HTML and keep tags lowercase.
- Match existing file naming (for example, `Shomamorita.png`) and prefer descriptive names.
- Keep pages simple and static; add JavaScript only when required.

## Testing Guidelines

- Manually verify layout and text in the latest Chrome and Firefox.
- If adding assets, confirm relative paths resolve when served locally.
- Add a test framework only if JavaScript behavior is introduced.

## Commit & Pull Request Guidelines

- Follow the existing commit pattern: short, imperative messages like `Create index.html` or `Update README.md`.
- PRs should include a brief summary, files touched, and screenshots for visual changes.
- Link related issues when applicable.

## Security & Configuration Notes

- Do not commit secrets; this is a static site.
- Keep binary assets optimized to avoid repository bloat.

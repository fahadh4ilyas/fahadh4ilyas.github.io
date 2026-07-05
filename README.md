# ~/fahadh

Personal portfolio site — terminal-themed static site built with HTML, vanilla JavaScript, and Tailwind CSS. Deployed via GitHub Pages at [fahadh.dev](https://fahadh.dev).

## Pages

- **Home** — terminal hero with typing animation, repos carousel, tech badges, CV link
- **About** — bio with collapsible contact cards (Email, GitHub, LinkedIn, Telegram, Twitter)
- **Repos** — paginated GitHub repo browser with localStorage cache
- **Docs** — documentation index linking to k8s docs
- **404** — curl-inspired terminal error page

## Features

- **Contact FAB** — floating button (bottom-right) opens a modal contact form with Turnstile CAPTCHA, honeypot spam protection, and rate limiting. Loaded via `components.js` across all pages.
- **Dark/light theme** — persisted to localStorage, applies to all UI including badges and modals
- **Code-style aesthetic** — `$` prompts, Jupyter-style terminal window, JetBrains Mono
- **CV download** — `/cv` link in navbar and footer, plus in-text link on home page

## Architecture

| File | Purpose |
|---|---|
| `js/components.js` | Navbar, footer, contact FAB + modal (injected into all pages) |
| `js/theme.js` | Dark/light toggle, Turnstile re-render on theme change |
| `js/cache.js` | `cachedFetch()` — localStorage cache with 10-min TTL |

## CSS

Tailwind is pre-built into `docs/css/tailwind.min.css` (scanning all HTML/JS content). Custom styles live in `docs/css/theme.css` (light mode overrides, scrollbar, carousel). To rebuild after adding classes:

```bash
npx tailwindcss -i tailwind.css -o docs/css/tailwind.min.css --minify
```

## SEO

- `sitemap.xml` covers all site pages plus k8s documentation subpages
- Each page has `<meta>` description and keywords

## Running Locally

```bash
npx live-server docs/
```

## Deployment

GitHub Pages from `docs/` on `master` branch. Custom domain via `docs/CNAME` → `fahadh.dev`.

---

> **Disclaimer:** Built with assistance from [DeepSeek](https://deepseek.com).

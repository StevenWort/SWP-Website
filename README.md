# Steve Wort Photography

Static website for Steve Wort Photography.

## Structure

- `index.html`, `about.html`, `contact.html`, `portfolio.html`, `services.html` — pages
- `css/style.css` — shared stylesheet (white background, black text)
- `js/components.js` — injects the shared header (banner + nav) and footer into each page
- `scripts/serve.ps1` — optional local preview server (`powershell -ExecutionPolicy Bypass -File scripts/serve.ps1`, then open http://localhost:8420)

## Previewing locally

Because the header/footer are injected with JavaScript, opening the HTML files directly via `file://` works in a normal browser, but some tools (and `file://` restrictions in certain browsers) may block the script. If so, run the included PowerShell server above, or any other static file server, and browse to `http://localhost:<port>`.

## Deploying

This is a plain static site with no build step, so it can be hosted directly via GitHub Pages:

1. Push this repo to `https://github.com/StevenWort/SWP-Website`.
2. In the repo settings, enable GitHub Pages for the `main` branch (root).

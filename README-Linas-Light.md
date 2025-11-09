Lina’s Light — Single Page, Offline-First

Overview
- A warm, intimate page with a glassmorphism card over a soft cosmic background.
- No network requests; all content is client-side and works offline once loaded.
- Mobile-first, with large-text and high-contrast accessibility toggles.

Features
- Hero with Spline cover background and daily rotating love line.
- Animated starfield with tap micro-popup.
- Four sections: Words of Love, Prayers for You, When You Feel, Lina’s Sky (with interactive Sky Mode modal).
- Shy reveal animations and a breathing glow.
- Accessible controls: Large Text and High Contrast.

How to publish (GitHub Pages)
1) Create a new GitHub repository and push this project.
2) In package.json, ensure "homepage" is set to your repo pages URL (e.g., "https://<user>.github.io/<repo>").
3) Build: npm run build
4) Deploy: any static hosting for the dist folder, or use GitHub Pages with an action (e.g., peaceiris/actions-gh-pages) to publish dist/.

Google Fonts
Include via index.html or your hosting: Inter (UI) and Playfair Display (headings). The project’s template already supports custom fonts; verify imports in index.html.

Image assets to create with image AI
- Hero portrait: soft-lit silhouette of a woman facing a glowing galaxy; gentle bokeh; colorway #2B3A67 #C9B7E6 #F6D08A; mood: modest, serene, devotional.
- Optional icons: delicate line icons (star, moon, prayer hands) in soft gold (#F6D08A) on transparent background.

Notes
- The site is client-only. No login, no backend calls.
- If embedding custom images, put them in public/ and reference with /filename.ext.
- Spline scene URL is used as the hero cover; ensure network access for that asset on first load.

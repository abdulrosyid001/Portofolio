# Personal Portfolio — Mahasiswa Statistika (Dark Purple Theme)

This is a starter portfolio site scaffolded as a Vite + React project using Tailwind CSS. The layout and components follow a dark purple gradient theme suitable for a Statistics student / AI enthusiast.

Quick start

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

Project structure (example)

```
README.md
package.json
index.html
vite.config.js
tailwind.config.js
postcss.config.cjs
public/
  placeholders/*.svg
src/
  main.jsx
  App.jsx
  styles/index.css
  data/biodata.js
  components/
    Header.jsx
    Hero.jsx
    Stats.jsx
    ServicesAccordion.jsx
    ProjectsGrid.jsx
    Experience.jsx
    Education.jsx
    Skills.jsx
    Testimonials.jsx
    BlogPreview.jsx
    ContactForm.jsx
    Footer.jsx
```

Tailwind sample (already in `tailwind.config.js`):

```js
module.exports = {
  theme: {
    extend: {
      colors: { primary: '#7C3AED', purpleDeep: '#6B21A8' }
    }
  }
}
```

Edit content
- Dummy content and projects live in `src/data/biodata.js`.

Notes
- Images are placed under `public/placeholders/` as simple SVG placeholders. Replace them with real photos or images as needed.
- Accessibility: components include aria attributes and keyboard accessible controls.

If you want, I can:
- convert this to Next.js with `<Image>` optimization
- add unit tests or deploy config
# Portofolio
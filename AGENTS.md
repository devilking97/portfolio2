# Project guidance

## Architecture

This is a React/Vite single-page portfolio deployed to Netlify. React Router provides `/`, `/projects`, `/projects/:slug`, `/about`, and `/contact`, with a not-found page for unknown routes. Netlify's rewrite serves the application shell for direct navigation. There is no persistent application state or user account system.

## Key directories

- `src/main.jsx`: shared header/footer, route components, project illustrations, and contact form interactions.
- `src/data.js`: CV-derived profile, work experience, project content, and skills.
- `src/styles.css`: design tokens, animation, component styling, mobile layouts, and reduced-motion support.
- `public/`: favicon, downloadable CV, and static Netlify form registration skeleton.
- `index.html`: shared title, description, and social metadata.
- `netlify.toml`: deployment configuration and SPA fallback.

## Conventions

Use functional React components, named variables, and focused changes. Keep styling in the existing custom CSS system. The aesthetic uses warm paper, muted olive, burnt orange, geometric headings, and monospace labels. Do not add a personal photo or generic stock imagery. Maintain visible focus states, semantic landmarks, responsive layouts, and reduced-motion support.

Keep personal and professional claims faithful to the supplied CV. Do not invent project URLs, employers, performance results, dates, or testimonials. Project previews are explicitly labeled interface concepts; mock metrics are demonstration data. The freelance and co-founder roles overlap as stated in the CV.

## Netlify Forms

The contact form submits URL-encoded data to `/__forms.html`. The static form in `public/__forms.html` must contain every submitted field and the same form name. Keep honeypot protection and loading, success, and error states. Netlify Forms must remain enabled. Read the relevant platform skill before changing form handling; run its enable script after making changes.

## Decisions

The template scaffolding failed because both the remote template and local mirror were unavailable. A lightweight Vite app was used instead. Static portfolio content is source-controlled, not a database-backed collection. Visitor messages are handled by Netlify Forms, not local files or application memory. Project artwork is implemented directly with CSS and SVG to avoid heavy assets and to keep the emphasis on presentation and projects.

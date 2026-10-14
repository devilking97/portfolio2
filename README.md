# Aghiles Khoukhou — Personal Portfolio

A project-first portfolio for software engineer and co-founder Aghiles Khoukhou. It includes a presentation homepage, a filterable six-project showcase, individual project pages, an about page with work experience and education, and a contact page with email, GitHub, LinkedIn, and a Netlify-powered contact form. All biographical content is based on the supplied CV; no portrait is used.

## Technologies

React 19, React Router, Vite, Lucide icons, and custom responsive CSS. Netlify serves the static site and handles contact submissions through Netlify Forms. There is no database or authentication requirement.

## Local development

Netlify's deployment command explicitly runs `npm ci --include=dev` before compiling the site. This installs the lockfile-defined dependencies, including Vite and its React plugin, even when a deploy is launched without a separate dependency-install phase.

Use Node.js 22.12 or newer, then run:

```sh
npm install
npm run dev
```

For Netlify Forms integration and local platform emulation, use `netlify dev --port 8889`. Form submissions are processed by Netlify on deployment. Submission notifications can be configured in the Netlify dashboard.

## Content

Edit `src/data.js` for profile information, project descriptions, work experience, and technical skills. Page content lives in `src/main.jsx`; visual styling lives in `src/styles.css`. The original CV is available at `public/aghiles-khoukhou-cv.pdf` for download.

Project previews are original CSS/SVG interface concepts, not screenshots or claims about live product metrics. Demonstration numbers in the advertising concept are illustrative. Projects without URLs in the CV link to their portfolio detail page, not an invented live deployment.

The contact form posts to `public/__forms.html` for Netlify build-time detection. Keep its field names synchronized with the React form. Netlify's SPA fallback supports direct links to all portfolio pages.

The supplied portfolio scaffold was unavailable, so this project was implemented as a focused Vite application rather than adding unnecessary server-rendering dependencies.

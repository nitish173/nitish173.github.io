# Nitish Kumar — Portfolio

Static portfolio site for **Nitish Kumar, Senior Software Engineer**, built on the
[3d-portfolio](https://github.com/HasnainIrfan/3d-portfolio) Next.js template and exported as
plain HTML/CSS/JS so it can be hosted free on GitHub Pages.

- **Stack:** Next.js 16 (App Router, static export), React 19, TypeScript, Tailwind CSS v4,
  Three.js / React Three Fiber, Motion.
- **No backend:** no API routes, no database, no middleware. The contact form composes an email
  in the visitor's mail client.

## Run locally

Node is not on `PATH` in this environment; it lives under nvm. Adjust the version if you change it.

```bash
export PATH="$HOME/.nvm/versions/node/v22.23.4/bin:$PATH"

npm ci          # install dependencies
npm run dev     # http://localhost:3000
```

Production build (writes the static site to `out/`):

```bash
npm run build
npm run preview   # serves out/ (uses `npx serve`)
```

## Where the content lives

Every string is typed and centralised in `constants/` — edit these files, no components needed.

| File | What it controls |
| --- | --- |
| `constants/hero-constants.ts` | Name, role, location, tagline, flip words, the four stat cards |
| `constants/social-constants.ts` | Email address and social links |
| `constants/about-constants.ts` | Marquee animation classes and skill chip styling |
| `constants/skills-constants.ts` | Skill chips in the marquee |
| `constants/services-constants.ts` | The four service cards |
| `constants/projects-constants.ts` | Pinned case-study showcase and project details modal |
| `constants/experience-constants.ts` | Experience timeline entries |
| `constants/contact-constants.ts` | Contact form fields, options and messages |
| `constants/seo-constants.ts` | Title, description, keywords, canonical URL, JSON-LD sections |
| `constants/navigation-constants.ts` | Navbar links |

Two blocks of copy are inline in components rather than constants: the About bio
(`components/about/about-bio.tsx`) and the contact intro (`components/contact/contact-details.tsx`).

### Known placeholders

- `constants/social-constants.ts` — LinkedIn and GitHub URLs are placeholders (`https://www.linkedin.com/`
  and `https://github.com/`). Replace them.
- `constants/seo-constants.ts` — `SITE_URL` defaults to `https://nitish17312.github.io`. Override it with
  `NEXT_PUBLIC_SITE_URL` or edit the fallback.
- Testimonials — the template's fictional reviews were removed. `REVIEWS` is empty and the section is
  not rendered; add real quotes and re-enable `<Testimonial />` in `components/portfolio/home-page.tsx`.
- Project cards have no screenshots, so each preview embeds the live product site in an iframe. Add
  images under `public/projects/` and set `image` in `constants/projects-constants.ts` to use a
  screenshot instead.

## Contact form

There is no backend. `hooks/use-contact-form.ts` builds a `mailto:` link pre-filled with the name,
email, message and "what is this about" choice, then hands off to your mail client. Nothing is
stored or sent to a third party. To collect submissions instead, swap that function for a request to
a static form service (Formspree, Web3Forms) — the endpoint is the only thing that has to change.

## Deploy to GitHub Pages

The repo ships `.github/workflows/deploy.yml`, which builds the static export and publishes `out/`
with the official Pages actions.

1. Push this project to a GitHub repository.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. In **Settings → Secrets and variables → Actions → Variables**, add:

   | Variable | Value |
   | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | Final URL, e.g. `https://nitish-kumar.github.io/portfolio` |
   | `NEXT_PUBLIC_BASE_PATH` | `/<repo>` **only** for project pages. Leave empty for `<user>.github.io` or a custom domain |

4. Push to `main` and watch the workflow run.

### URL shapes

| Hosting | Repository name | `NEXT_PUBLIC_BASE_PATH` |
| --- | --- | --- |
| User/org site | `<user>.github.io` | *(empty)* |
| Project site | any, e.g. `portfolio` | `/portfolio` |
| Custom domain | any | *(empty)* — add a `public/CNAME` file with the domain |

`next.config.ts` applies `basePath`/`assetPrefix`, `trailingSlash`, `images.unoptimized`, and
`output: "export"`. Internal asset URLs in raw `<img>` tags and the GLB model are prefixed through
`helpers/asset-helpers.ts`; `next/image` and `next/link` handle it themselves.

Metadata routes (`sitemap.ts`, `robots.ts`, `manifest.ts`) declare `dynamic = "force-static"`, which
static export requires. `public/.nojekyll` keeps GitHub Pages from running Jekyll over `_next/`.

## Credits & licensing

Source code is MIT licensed — see [LICENSE](LICENSE). Built on
[HasnainIrfan/3d-portfolio](https://github.com/HasnainIrfan/3d-portfolio).

The bundled `public/models/astronaut.glb` is third-party work from Sketchfab with its own license and
attribution terms; replace it or verify those terms before publishing. Brand logos under
`public/assets/logos/` belong to their respective owners. See [NOTICE](NOTICE).

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
| `constants/skills-constants.ts` | Scope chips in the marquee (`SKILL_CHIPS`) and structured-data keywords (`KNOWS_ABOUT`) |
| `constants/services-constants.ts` | The four service cards |
| `constants/projects-constants.ts` | Pinned case-study showcase, product links and the details modal |
| `constants/experience-constants.ts` | Experience timeline — organisations and dates only, no job titles |
| `constants/seo-constants.ts` | Title, description, keywords, canonical URL, JSON-LD sections |
| `constants/navigation-constants.ts` | Navbar links |

Two blocks of copy are inline in components rather than constants: the About bio
(`components/about/about-bio.tsx`) and the contact intro (`components/contact/contact-details.tsx`).

### Known placeholders

- `constants/seo-constants.ts` — `SITE_URL` defaults to `https://nitish173.github.io`. Override it with
  `NEXT_PUBLIC_SITE_URL`, and set `NEXT_PUBLIC_BASE_PATH` if the site is served from a `/<repo>` path.
- Testimonials — the template's fictional reviews were removed. `REVIEWS` is empty and the section is
  not rendered; add real quotes and re-enable `<Testimonial />` in `components/portfolio/home-page.tsx`.
- Project previews currently show a designed placeholder rather than a screenshot. The live sites send
  `X-Frame-Options: SAMEORIGIN`, so they cannot be embedded in an iframe; drop images in
  `public/projects/` and set `image` in `constants/projects-constants.ts` to fill the panel instead.
- GST Reconciliation shares ClearTax's landing page (`https://cleartax.in/`) because the product is not
  publicly listed.

## Contact

There is no backend and no contact form. The contact section is a direct `mailto:` call to action
built from `CONTACT_EMAIL` in `constants/social-constants.ts`, plus links to your social profiles —
nothing is submitted, stored or sent to a third party. If you ever want a form, a static form
service (Formspree, Web3Forms) can be added client-side without a backend.

## Deploy to GitHub Pages

The repo ships `.github/workflows/deploy.yml`, which builds the static export and publishes `out/`
with the official Pages actions.

1. Push this project to a GitHub repository.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. In **Settings → Secrets and variables → Actions → Variables**, add:

   | Variable | Value |
   | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | Final URL, e.g. `https://nitish173.github.io` or `https://nitish173.github.io/<repo>` |
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

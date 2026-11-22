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

- `constants/seo-constants.ts` — `SITE_URL` defaults to `https://kumarnitish.com`. Override it with
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
3. At your DNS provider, point the domain at GitHub Pages:

   | Type | Name | Value |
   | --- | --- | --- |
   | `A` | `@` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
   | `AAAA` | `@` | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |
   | `CNAME` | `www` | `nitish173.github.io` |

   Remove any conflicting parking, redirect or old `A`/`CNAME` records for `@` and `www`.
   The four `A` records are required; `AAAA` records add IPv6 support.
4. In **Settings → Pages → Custom domain**, enter `kumarnitish.com` and click **Save**.
   With a custom Actions workflow, no `public/CNAME` file is needed — GitHub ignores it and
   uses this setting as the source of truth.
5. Wait for the DNS check to pass, then enable **Enforce HTTPS** on the same Pages settings page.
6. Push to `main` (or re-run the workflow) and watch it deploy.

The workflow runs `actions/configure-pages` before the build and feeds its `base_url` and
`base_path` outputs to Next.js, so the canonical/OG URLs and asset prefix follow the domain
configured in **Settings → Pages** automatically. For a project page, the same workflow derives
the `/<repo>` base path; no repository variables are required.

### URL shapes

| Hosting | Repository name | `NEXT_PUBLIC_BASE_PATH` |
| --- | --- | --- |
| User/org site | `<user>.github.io` | *(empty)* |
| Project site | any, e.g. `portfolio` | `/<repo>` (derived from Pages) |
| Custom domain | any | *(empty)* — set the domain in **Settings → Pages** |

`next.config.ts` applies `basePath`/`assetPrefix`, `trailingSlash`, `images.unoptimized`, and
`output: "export"`. Internal asset URLs in raw `<img>` tags and the GLB model are prefixed through
`helpers/asset-helpers.ts`; `next/image` and `next/link` handle it themselves.

Metadata routes (`sitemap.ts`, `robots.ts`, `manifest.ts`) declare `dynamic = "force-static"`, which
static export requires. `public/.nojekyll` keeps GitHub Pages from running Jekyll over `_next/`.

## Credits & licensing

Source code is MIT licensed — see [LICENSE](LICENSE). Built on
[HasnainIrfan/3d-portfolio](https://github.com/HasnainIrfan/3d-portfolio).

The bundled `public/models/adv_boy.glb` is **Adventurer Boy** by VoxelVidal, generated with Sloyd
and licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Attribution is shown
in the site footer. Brand logos under `public/assets/logos/` belong to their respective owners.
See [NOTICE](NOTICE).

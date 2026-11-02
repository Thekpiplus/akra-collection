# AKRA Collection Layan — Long-Term Residences

Static Next.js site for fully serviced private pool villas in Layan, Phuket (monthly / yearly rental).

Build output is plain HTML/CSS/JS in `out/` — upload that folder to any static host (Hostinger, Netlify, GitHub Pages, S3).

## Commands

```bash
npm install
npm run dev      # local development, http://localhost:3000
npm run build    # static export → out/
npm start        # preview the static files in out/
npm run lint
```

## Deploy

**Hostinger (PHP/HTML) via GitHub:** connect repo `Thekpiplus/akra-collection`, branch `hostinger`, directory `public_html`. Pushing to `master` rebuilds that branch automatically.

Manual: upload the contents of `out/` to `public_html`. Keep folder structure (`residences/`, `images/`, etc.).

**FormSubmit:** Confirm the first activation email sent to `akra.reservation@gmail.com` so enquiries deliver.

**Domain:** Set the real production URL in `lib/contact.ts` (`siteUrl`) so canonical URLs, sitemap, and JSON-LD stay accurate.

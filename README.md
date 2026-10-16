# AKRA Collection Layan — Long-Term Residences

Next.js site for fully serviced private pool villas in Layan, Phuket (monthly / yearly rental).

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start        # production
npm run lint
```

## Pre-launch checklist

- [x] Production build passes
- [x] Lint / TypeScript clean
- [x] All main routes return 200
- [x] Sitemap at `/sitemap.xml`, robots at `/robots.txt`
- [x] Book Now → Cloudbeds
- [x] Enquire form → `akra.reservation@gmail.com` (FormSubmit)
- [x] Facebook / Instagram linked
- [x] Terms & Privacy pages
- [x] Next.js patched to 15.5.28

**FormSubmit:** Confirm the first activation email sent to `akra.reservation@gmail.com` so enquiries deliver.

**Deploy tip:** Set your real production domain in `lib/contact.ts` (`siteUrl`) so canonical URLs, sitemap, and JSON-LD stay accurate.

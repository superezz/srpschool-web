# SRPIC School — Cinematic Admission Website (Demo)

A modern, conversion-focused landing page for **SRPIC School** (State Board, Nursery–12).
Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**. Every CTA drives the
parent to **WhatsApp** — the channel that actually converts admissions in small-town India.

> All text, numbers, photos, and contact details are **placeholders**. Edit them in one file
> before showing this to anyone real (see _Customize_ below).

---

## Quick start

You need **Node.js 18+**.

```bash
npm install
npm run dev
```

Open http://localhost:3000

To create a production build:

```bash
npm run build
npm start
```

---

## Deploy (free, ~2 minutes)

The easiest path is **Vercel** (made by the Next.js team):

1. Push this folder to a GitHub repository.
2. Go to vercel.com → **New Project** → import the repo.
3. Click **Deploy**. Done — you get a live `https://...vercel.app` link to share.

Netlify and Cloudflare Pages also work with the default Next.js settings.

---

## Customize for ANY school (the important part)

Almost everything lives in **one file**:

```
src/lib/siteConfig.ts
```

Open it and change:

- **`whatsapp`** — the school's WhatsApp number in international format, digits only
  (e.g. India `98765 43210` → `"919876543210"`). This powers every button + the form.
- **`phoneDisplay`, `email`, `addressFull`, `mapQuery`** — contact + Google Map location.
- **`name`, `tagline`, `board`, `grades`, `established`** — identity.
- **`admission`** — toggle the banner on/off, set the year and the offer line.
- **`stats`, `features`, `programs`, `results`, `testimonials`** — the content sections.
- **`gallery`** — replace with real photos (see next section).

Because all content is data-driven, this template can be **re-skinned for a new school in
minutes** — just duplicate the project and edit `siteConfig.ts` (plus brand colors).

### Brand colors

Edit the `ink` (base) and `gold` / `royal` (accent) palettes in `tailwind.config.ts`.

### Replace placeholder images with real photos

1. Put images in a new `public/images/` folder.
2. In `Hero.tsx` and `Gallery.tsx`, swap the gradient placeholder blocks for
   `next/image`:

   ```tsx
   import Image from "next/image";
   <Image src="/images/campus.jpg" alt="Campus" fill className="object-cover" />
   ```

Photos are the single biggest upgrade to make this feel real.

---

## What's inside

```
src/
  app/
    layout.tsx      # fonts (Playfair + Inter), SEO metadata
    page.tsx        # assembles all sections
    globals.css     # Tailwind + cinematic utility classes
  components/        # Navbar, Hero, AdmissionBanner, Stats, Features,
                     # Programs, Results, Gallery, Testimonials,
                     # EnquiryForm, Footer, FloatingWhatsApp, Reveal, Icon
  lib/
    siteConfig.ts   # <-- EDIT THIS to re-brand
    whatsapp.ts     # builds click-to-chat wa.me links
```

### How the lead capture works (no backend needed)

The enquiry form and every "Enquire / Apply" button build a pre-filled
[`wa.me`](https://wa.me) link. When a parent submits, **their** WhatsApp opens with a tidy
message (name, class, phone) addressed to the school. The school replies from their phone.
Zero hosting cost, zero database — perfect for a demo and genuinely useful in production.

> Later upgrade: add a `/api/enquiry` route to also store leads in a sheet/CRM and send an
> auto-reply. The UI is already structured for it.

---

## Notes

- Animations respect `prefers-reduced-motion`.
- Fully responsive (mobile-first); the nav collapses to a drawer on small screens.
- No external UI/animation libraries — only Next, React, Tailwind. Fast and easy to maintain.

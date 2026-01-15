# Fullstack Site Demo (Next.js + Tailwind)

A modern **marketing website / site demo** built with **Next.js (App Router)** and **TypeScript**, designed for clean UX, fast performance, and easy content updates.

This repository includes:
- A multi-page site (App Router pages)
- API routes for contact + basic admin content actions
- Reusable UI components
- MJML email templates (confirmation, follow-up, newsletter)
- Project tooling and deployment scripts

---

## Highlights

- **Next.js App Router** (`src/app`) with dedicated pages: Home, About, Services, Portfolio, Pricing, Reviews, FAQ, Contact, Legal (Terms/Privacy), Success, and custom SEO routes.
- **SEO-ready**: `sitemap.ts`, `robots.ts`, and metadata-friendly structure.
- **Theming + UX**: Theme toggle and layout providers.
- **i18n-ready**: Language utilities and a language toggle component.
- **Contact flow**: Contact form component + API route.
- **Admin endpoint**: Basic admin content route (for controlled updates).
- **Rate limiting** helper for API protection.
- **Emails**: MJML templates stored in `/emails` for transactional and marketing email layouts.
- **Deployment script**: `scripts/deploy.sh` to automate release steps.

---

## Project Structure

```txt
.
├─ src/
│  ├─ app/
│  │  ├─ page.tsx                    # Home
│  │  ├─ about/page.tsx
│  │  ├─ services/page.tsx
│  │  ├─ portfolio/page.tsx
│  │  ├─ pricing/page.tsx
│  │  ├─ reviews/page.tsx
│  │  ├─ faq/page.tsx
│  │  ├─ contact/page.tsx
│  │  ├─ success/page.tsx
│  │  ├─ admin/page.tsx
│  │  ├─ legal/
│  │  │  ├─ terms/page.tsx
│  │  │  └─ privacy/page.tsx
│  │  ├─ api/
│  │  │  ├─ contact/route.ts         # Contact API
│  │  │  └─ admin/content/route.ts   # Admin content API
│  │  ├─ sitemap.ts                  # SEO sitemap
│  │  └─ robots.ts                   # SEO robots
│  ├─ components/                    # UI components (Navbar/Footer/etc.)
│  ├─ data/                          # Site content/constants
│  └─ lib/                           # utilities (i18n, rate limit, helpers)
├─ emails/                            # MJML templates
├─ scripts/                           # automation scripts
├─ .env.example                       # environment variable template
├─ next.config.mjs
├─ tailwind.config.ts
├─ postcss.config.mjs
├─ tsconfig.json
└─ package.json
```

---

## Requirements

- **Node.js 18+** (recommended: Node 20 LTS)
- **npm** (or the package manager used in your workflow)

---

## Setup

Install dependencies:

```bash
npm install
```

Create your local environment file (recommended):

- Copy `.env.example` → `.env.local` (or follow your team convention)
- Fill in values as needed (email provider keys, admin token, etc.)

---

## Development

Run the development server:

```bash
npm run dev
```

Then open the URL shown in the terminal (commonly `http://localhost:3000`).

---

## Build & Start (Production)

Build:

```bash
npm run build
```

Start:

```bash
npm run start
```

---

## Email Templates (MJML)

MJML templates live in:

- `emails/inquiry-confirmation.mjml`
- `emails/follow-up.mjml`
- `emails/newsletter.mjml`

If you use MJML CLI, you can compile like:

```bash
npx mjml emails/inquiry-confirmation.mjml -o emails/out/inquiry-confirmation.html
```

(Adjust to your preferred folder structure.)

---

## Security Notes

- Do **not** commit secrets (API keys, tokens, SMTP credentials).
- Keep environment variables in `.env.local` (ignored by Git).
- API routes include a **rate limit** helper; tune it based on traffic needs.

---

## CI (GitHub Actions)

A basic CI workflow is included in:

`.github/workflows/ci.yml`

It installs dependencies and runs build (and lint if available) on every push/PR.

---

# Shanmughanathan M — Portfolio

A premium, dark-mode, single-page portfolio for a backend software engineer, designed as an **observability / systems console** — the world Shanmughanathan actually works in. Built to cost **₹0** to develop, deploy and maintain.

**Stack:** Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Framer Motion · lucide-react

All ShadCN-style components (Reveal, SectionHeading, Magnetic) live in `components/ui` — you own the code, nothing is installed from a paid registry.

---

## Run locally

Requires [Node.js 18.17+](https://nodejs.org).

```bash
npm install
npm run dev
```

Open http://localhost:3000

Build for production:

```bash
npm run build && npm start
```

---

## Edit your content — one file

Everything on the page reads from **`lib/data.ts`**. It is the single source of truth. Change your headline, stats, skills, experience, projects, credentials and contact details there — no component edits needed.

A few TODOs to complete:
- `lib/data.ts` → `profile.linkedin`: replace `https://www.linkedin.com/in/` with your full profile URL.
- `app/layout.tsx` → `url`: set your live domain after deploying (used for SEO / Open Graph).
- `public/resume.pdf`: your résumé is already here; replace it anytime to update the download.
- Optional: add `public/og-image.png` (1200×630) for rich link previews.

---

## Deploy free to Vercel (recommended)

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "feat: portfolio"
git branch -M main
git remote add origin https://github.com/Shanmughanathan/portfolio.git
git push -u origin main
```
(Create the empty `portfolio` repo first at https://github.com/new)

### 2. Import into Vercel
1. Go to https://vercel.com and sign in **with GitHub** (free Hobby plan).
2. Click **Add New… → Project**, then **Import** your `portfolio` repo.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. In ~60 seconds you get a live URL like `https://portfolio-xxxx.vercel.app`.

Every future `git push` to `main` auto-deploys. Cost stays **₹0** on the Hobby tier.

### 3. (Optional) custom domain
Add any domain you own under **Project → Settings → Domains**. A `vercel.app` subdomain is free forever, so a custom domain is never required.

---

## Alternative free hosts
The app is a standard Next.js project and also deploys free on **Netlify** or **Cloudflare Pages** using the same GitHub import flow.

---

## Performance & accessibility notes
- Fonts loaded via `next/font` (self-hosted, no layout shift).
- Animations respect `prefers-reduced-motion`.
- Custom cursor auto-disables on touch devices.
- Semantic landmarks, visible keyboard focus rings, and alt/aria on decorative SVGs.
- No client-side data fetching — static render targets Lighthouse 95+ / SEO 100.

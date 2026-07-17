# Metanoia Events Collective

Next.js 15 site — Tailwind, Framer Motion, WhatsApp bookings, Vercel Analytics.

## Local

```powershell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Requires Node.js **24.x** (see `.nvmrc`).

## Production (Vercel)

- Framework: **Next.js** (do not set Output Directory — leave blank)
- Build: `next build` / `npm run build`
- Node: `24.x`

Production URL: [ozayr-kriel-events](https://ozayr-kriel-events-yaseens-projects-1765104f.vercel.app)

Enable **Web Analytics** and **Speed Insights** in the Vercel project settings if needed (already wired in `app/layout.tsx`).

Set `NEXT_PUBLIC_SITE_URL` to your production domain (see `.env.example`).

## Env

Copy `.env.example` → `.env.local` and set your site URL.

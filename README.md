# Metanoia Events Collective

Next.js site — Tailwind, Framer Motion, WhatsApp bookings, Vercel Analytics.

## Local

```powershell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Vercel

1. Import the repo in [Vercel Dashboard](https://vercel.com/dashboard).
2. Enable **Web Analytics** and **Speed Insights** in project settings (components are already in `app/layout.tsx`).
3. Set `NEXT_PUBLIC_SITE_URL` to your production URL (see `.env.example`).

Preview deployments are created automatically for non-production branches.

## Env

Copy `.env.example` → `.env.local` and set your site URL.

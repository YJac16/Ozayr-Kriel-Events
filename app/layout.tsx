import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { WhatsAppFloat } from './components/WhatsAppFloat'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://metanoiaeventscollective.co.za'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Metanoia Events Collective (Pty) Ltd | Luxury Events Cape Town',
    template: '%s | Metanoia Events Collective',
  },
  description:
    'Metanoia Events Collective (Pty) Ltd — luxury event planning in Cape Town. Weddings, birthdays, braais, and open-air cinema. Book via WhatsApp.',
  keywords: [
    'event planner Cape Town',
    'wedding planner',
    'birthday party',
    'braai events',
    'outdoor cinema',
    'Metanoia Events Collective',
  ],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon-32x32.png',
  },
  openGraph: {
    title: 'Metanoia Events Collective (Pty) Ltd',
    description:
      'From weddings to open-air cinema — beautifully executed events in Cape Town.',
    url: siteUrl,
    siteName: 'Metanoia Events Collective (Pty) Ltd',
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metanoia Events Collective (Pty) Ltd',
    description: 'Luxury event experiences, beautifully executed in Cape Town.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen">
        {children}
        <WhatsAppFloat />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

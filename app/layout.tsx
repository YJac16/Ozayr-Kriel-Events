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
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://metanoia-events.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Metanoia Events Collective | Luxury Events Cape Town',
    template: '%s | Metanoia Events Collective',
  },
  description:
    'Luxury event planning in Cape Town — weddings, birthdays, braais, and open-air cinema. Book your unforgettable celebration via WhatsApp.',
  keywords: [
    'event planner Cape Town',
    'wedding planner',
    'birthday party',
    'braai events',
    'outdoor cinema',
    'Metanoia Events',
  ],
  openGraph: {
    title: 'Metanoia Events Collective | Luxury Event Experiences',
    description:
      'From weddings to open-air cinema — beautifully executed events in Cape Town.',
    url: siteUrl,
    siteName: 'Metanoia Events Collective',
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metanoia Events Collective',
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

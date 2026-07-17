import Link from 'next/link'
import { Instagram, Mail, Phone, MessageCircle } from 'lucide-react'
import { WHATSAPP_HREF } from '@/lib/whatsapp'
import { INSTAGRAM_URL, SITE } from '@/lib/constants'
import { BrandLogo } from './BrandLogo'

const quick = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-black pb-10 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="lg:col-span-1">
            <BrandLogo imageClassName="h-10 w-auto opacity-90" width={200} height={56} />
            <p className="mt-4 text-sm font-medium text-brand-cream/80">
              {SITE.legalName}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-brand-cream/60">
              Luxury event experiences in Cape Town — planned with heart and
              delivered with precision.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Quick links
            </h3>
            <ul className="mt-4 space-y-3">
              {quick.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-brand-cream/75 transition-colors hover:text-brand-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-gold hover:underline"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  WhatsApp us
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 text-sm text-brand-cream/70 hover:text-brand-gold"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 text-sm text-brand-cream/70 hover:text-brand-gold"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Social
            </h3>
            <div className="mt-4 flex gap-3">
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-brand-cream transition-colors hover:border-brand-gold hover:text-brand-gold"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
            <Link
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-brand-gold px-4 text-sm font-semibold text-brand-black sm:w-auto"
            >
              Book via WhatsApp
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-brand-cream/45 sm:flex-row sm:text-left">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} {SITE.legalName}</p>
            <p>
              Reg No: {SITE.regNo} | VAT No: {SITE.vatNo}
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            <Link
              href="/terms-and-conditions"
              className="hover:text-brand-gold"
            >
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" className="hover:text-brand-gold">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

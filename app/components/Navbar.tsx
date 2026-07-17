'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { WHATSAPP_HREF } from '@/lib/whatsapp'
import { BrandLogo } from './BrandLogo'

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? 'border-b border-white/5 bg-brand-black/95 shadow-lg shadow-black/20 backdrop-blur-md'
            : 'bg-transparent'
        }`}
        initial={false}
        animate={{ y: 0 }}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8"
          aria-label="Main"
        >
          <BrandLogo className="relative z-10" priority />

          <div className="hidden items-center gap-10 lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium tracking-wide text-brand-cream/85 transition-colors hover:text-brand-gold"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <motion.a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-11 items-center rounded-full bg-brand-gold px-6 text-sm font-semibold text-brand-black shadow-md transition-shadow hover:shadow-lg hover:shadow-brand-gold/20"
            >
              Book via WhatsApp
            </motion.a>
          </div>

          <button
            type="button"
            className="relative z-10 rounded-lg p-2 text-brand-cream lg:hidden"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-brand-black lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 pt-20">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl text-brand-cream"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex min-h-12 items-center rounded-full bg-brand-gold px-8 py-3 font-semibold text-brand-black"
              >
                Book via WhatsApp
              </motion.a>
              <Link
                href="/privacy-policy"
                className="text-sm text-brand-cream/50"
                onClick={() => setOpen(false)}
              >
                Legal
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

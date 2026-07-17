'use client'

import { motion } from 'framer-motion'
import { WHATSAPP_HREF } from '@/lib/whatsapp'

export function CTA() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-gradient-to-b from-brand-ink to-brand-black py-24 sm:py-32 md:py-40"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="rounded-3xl border border-brand-gold/25 bg-brand-black/60 px-6 py-14 shadow-[0_0_80px_rgba(212,175,55,0.08)] backdrop-blur-sm sm:px-12 sm:py-16"
        >
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            Let&apos;s Create Something
            <span className="mt-2 block text-brand-gold">Unforgettable</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-brand-cream/75">
            Limited bookings available each month — reserve your date early for
            the best vendor and styling options.
          </p>
          <motion.a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-brand-gold px-10 text-base font-semibold text-brand-black shadow-lg transition-shadow hover:shadow-xl hover:shadow-brand-gold/20"
          >
            Secure Your Date on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

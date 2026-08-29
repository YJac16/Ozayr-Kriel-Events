'use client'

import { motion } from 'framer-motion'
import { publicPath } from '@/lib/media'
import { WHATSAPP_HREF } from '@/lib/whatsapp'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={publicPath('wedding (1).jpeg')}
          aria-hidden
        >
          <source src={publicPath('braai (1).mp4')} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-b from-brand-black/75 via-brand-black/60 to-brand-black"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/40"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-28 pt-24 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={publicPath('metanoia-logo.png')}
            alt="Metanoia Events Collective"
            className="h-24 w-auto mix-blend-screen sm:h-28 md:h-32"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mb-3 font-display text-sm font-medium uppercase tracking-[0.28em] text-brand-gold sm:text-base"
        >
          Metanoia Events Collective
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-brand-cream/60 sm:text-sm"
        >
          Cape Town · Events & Experiences
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12 }}
          className="font-display text-balance text-4xl font-semibold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Luxury Event Experiences,
          <span className="mt-2 block text-brand-cream/95 sm:mt-3">
            Beautifully Executed
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-relaxed text-brand-cream/80 sm:text-lg md:text-xl"
        >
          From weddings and birthdays to braais and open-air cinema — we bring
          your vision to life in Cape Town.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.35 }}
          className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:mt-12 sm:flex-row sm:items-center"
        >
          <motion.a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-brand-gold px-8 text-base font-semibold text-brand-black shadow-lg shadow-black/25 transition-shadow hover:shadow-xl hover:shadow-brand-gold/15"
          >
            Book on WhatsApp
          </motion.a>
          <motion.a
            href="#gallery"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-brand-gold/50 hover:bg-white/10"
          >
            View Gallery
          </motion.a>
        </motion.div>
      </div>

    </section>
  )
}

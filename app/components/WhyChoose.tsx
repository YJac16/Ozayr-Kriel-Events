'use client'

import { motion } from 'framer-motion'
import { Gem, Shield, Sparkles, Palette } from 'lucide-react'

const items = [
  {
    Icon: Gem,
    title: 'Attention to Detail',
    copy: 'Thoughtful touches and precision at every step — nothing left to chance.',
  },
  {
    Icon: Shield,
    title: 'Stress-Free Planning',
    copy: 'Clear timelines and calm communication so you can stay present.',
  },
  {
    Icon: Sparkles,
    title: 'Affordable Luxury',
    copy: 'Elevated aesthetics and flow — tailored to real budgets and real dreams.',
  },
  {
    Icon: Palette,
    title: 'Fully Custom Experiences',
    copy: 'Your story leads; we design and execute around what matters to you.',
  },
]

export function WhyChoose() {
  return (
    <section className="border-y border-white/5 bg-brand-ink py-20 sm:py-28 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center md:mb-20"
        >
          <h2 className="font-display text-4xl font-semibold text-white md:text-5xl">
            Why Metanoia?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-cream/70">
            The feeling guests remember isn&apos;t just décor — it&apos;s how
            effortless the day felt.
          </p>
          <div className="mx-auto mt-6 h-px w-20 bg-brand-gold" />
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative border-l border-brand-gold/35 pl-6 sm:border-l-0 sm:border-t sm:border-brand-gold/35 sm:pl-0 sm:pt-8 lg:border-t-0 lg:border-l lg:pl-6 lg:pt-0"
            >
              <item.Icon
                className="mb-4 h-10 w-10 text-brand-gold"
                strokeWidth={1.25}
              />
              <h3 className="font-display text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-cream/75">
                {item.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

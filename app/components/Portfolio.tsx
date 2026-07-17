'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  PORTFOLIO_ITEMS,
  CATEGORY_LABELS,
  type PortfolioCategory,
} from '@/lib/portfolio'
import { publicPath } from '@/lib/media'

const filterKeys: Array<PortfolioCategory | 'all'> = [
  'all',
  'weddings',
  'birthdays',
  'braai',
  'cinema',
]

export function Portfolio() {
  const [cat, setCat] = useState<PortfolioCategory | 'all'>('all')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = useMemo(
    () =>
      cat === 'all'
        ? PORTFOLIO_ITEMS
        : PORTFOLIO_ITEMS.filter((i) => i.category === cat),
    [cat]
  )

  const closeLightbox = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight')
        setLightbox((i) => (i === null ? null : (i + 1) % filtered.length))
      if (e.key === 'ArrowLeft')
        setLightbox((i) =>
          i === null ? null : (i - 1 + filtered.length) % filtered.length
        )
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, filtered.length, closeLightbox])

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.04 * i, duration: 0.45 },
    }),
  }

  return (
    <section
      id="portfolio"
      className="scroll-mt-24 bg-brand-black py-20 sm:py-28 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="font-display text-4xl font-semibold text-white md:text-5xl">
            Our Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-brand-cream/70">
            Real celebrations we&apos;ve crafted — every frame tells a story of
            joy, detail, and presence.
          </p>
          <div className="mx-auto mt-6 h-px w-20 bg-brand-gold" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {filterKeys.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setCat(key)}
              className={`min-h-11 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 sm:px-5 ${
                cat === key
                  ? 'bg-brand-gold text-brand-black shadow-md shadow-brand-gold/20'
                  : 'border border-white/15 bg-white/5 text-brand-cream/85 hover:border-brand-gold/40 hover:text-brand-gold'
              }`}
            >
              {CATEGORY_LABELS[key]}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3 lg:gap-6"
        >
          {filtered.map((item, index) => (
            <motion.button
              key={`${item.src}-${index}`}
              type="button"
              layout
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={itemVariants}
              onClick={() => setLightbox(index)}
              className="group relative mb-4 w-full break-inside-avoid overflow-hidden rounded-2xl sm:mb-5 lg:mb-6"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-ink">
                <Image
                  src={publicPath(item.src)}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-black/0 transition-colors duration-400 group-hover:bg-brand-gold/25" />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brand-black/90 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                  <p className="w-full p-5 text-left font-display text-lg font-medium text-white">
                    {item.label}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-black/92 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              aria-label="Close"
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
            >
              <X className="h-6 w-6" />
            </button>
            <button
              type="button"
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:left-6"
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation()
                setLightbox((i) =>
                  i === null ? null : (i - 1 + filtered.length) % filtered.length
                )
              }}
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              type="button"
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:right-6"
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation()
                setLightbox((i) =>
                  i === null ? null : (i + 1) % filtered.length
                )
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] max-w-5xl px-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={publicPath(filtered[lightbox].src)}
                alt={filtered[lightbox].label}
                className="max-h-[80vh] w-full max-w-full rounded-xl object-contain shadow-2xl"
              />
              <p className="mt-4 text-center font-display text-xl text-white">
                {filtered[lightbox].label}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

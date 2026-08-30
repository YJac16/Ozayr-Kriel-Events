'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react'
import {
  PORTFOLIO_ITEMS,
  CATEGORY_LABELS,
  type PortfolioCategory,
} from '@/lib/portfolio'
import { publicPath } from '@/lib/media'
import { SnapCoverflow } from '../components/SnapCoverflow'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const filterKeys: Array<PortfolioCategory | 'all'> = [
  'all',
  'weddings',
  'birthdays',
  'braai',
  'cinema',
]

function GalleryCard({
  label,
  src,
  onOpen,
}: {
  label: string
  src: string
  onOpen?: () => void
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="relative aspect-[4/5] w-[min(72vw,16rem)] overflow-hidden rounded-2xl bg-brand-ink sm:w-[min(68vw,18rem)]"
    >
      <Image
        src={publicPath(src)}
        alt={label}
        fill
        className="object-cover"
        sizes="72vw"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-transparent to-transparent" />
    </button>
  )
}

export default function GalleryClient() {
  const [cat, setCat] = useState<PortfolioCategory | 'all'>('all')
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const filtered = useMemo(
    () =>
      cat === 'all'
        ? PORTFOLIO_ITEMS
        : PORTFOLIO_ITEMS.filter((i) => i.category === cat),
    [cat]
  )

  useEffect(() => {
    setActiveIndex(0)
    setLightbox(null)
  }, [cat])

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

  const active = filtered[activeIndex]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-black pb-20 pt-28 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-12">
            <Link
              href="/#gallery"
              className="mb-4 inline-flex items-center gap-2 text-sm text-brand-cream/60 transition-colors hover:text-brand-gold"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
            <h1 className="font-display text-4xl font-semibold text-white md:text-5xl">
              Gallery
            </h1>
            <p className="mt-3 max-w-xl text-brand-cream/70">
              Every celebration we stage — browse by category or open any image
              for a closer look.
            </p>
          </div>

          <div className="mb-10 flex flex-wrap gap-2 sm:gap-3">
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
          </div>

          <div className="lg:hidden">
            <SnapCoverflow
              key={cat}
              ariaLabel={`Gallery — ${CATEGORY_LABELS[cat]}`}
              onActiveChange={setActiveIndex}
            >
              {filtered.map((item, index) => (
                <GalleryCard
                  key={`${item.src}-${index}`}
                  src={item.src}
                  label={item.label}
                  onOpen={() => setLightbox(index)}
                />
              ))}
            </SnapCoverflow>
            {active && (
              <motion.div
                key={`${active.src}-${activeIndex}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mx-auto mt-2 max-w-sm px-4 text-center"
              >
                <p className="font-display text-xl text-white">{active.label}</p>
                <button
                  type="button"
                  onClick={() => setLightbox(activeIndex)}
                  className="mt-3 text-sm font-medium text-brand-gold underline-offset-4 hover:underline"
                >
                  View full size
                </button>
              </motion.div>
            )}
          </div>

          <div className="hidden columns-1 gap-4 sm:columns-2 sm:gap-5 lg:block lg:columns-3 lg:gap-6">
            {filtered.map((item, index) => (
              <button
                key={`${item.src}-${index}`}
                type="button"
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
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brand-black/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="w-full p-5 text-left font-display text-lg font-medium text-white">
                      {item.label}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
      <Footer />

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
    </>
  )
}

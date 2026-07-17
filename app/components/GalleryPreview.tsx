'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { PORTFOLIO_ITEMS } from '@/lib/portfolio'
import { publicPath } from '@/lib/media'

const PREVIEW_COUNT = 3

export function GalleryPreview() {
  const preview = useMemo(() => PORTFOLIO_ITEMS.slice(0, PREVIEW_COUNT), [])
  const [failed, setFailed] = useState<Record<string, boolean>>({})

  return (
    <section
      id="gallery"
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
            Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-brand-cream/70">
            A glimpse of celebrations we&apos;ve crafted — open the full gallery
            for every frame.
          </p>
          <div className="mx-auto mt-6 h-px w-20 bg-brand-gold" />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
          {preview.map((item, index) => (
            <motion.div
              key={`${item.src}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * index, duration: 0.45 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[4/5] w-full bg-brand-ink">
                {!failed[item.src] ? (
                  <Image
                    src={publicPath(item.src)}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    priority={index === 0}
                    onError={() =>
                      setFailed((prev) => ({ ...prev, [item.src]: true }))
                    }
                  />
                ) : (
                  <div className="flex h-full items-center justify-center p-4 text-center text-sm text-brand-cream/50">
                    {item.label}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
                <p className="absolute bottom-0 left-0 right-0 p-4 font-display text-lg text-white">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center sm:mt-12"
        >
          <Link
            href="/gallery"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-brand-gold/50 bg-brand-gold/10 px-8 text-sm font-semibold text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-black"
          >
            View Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

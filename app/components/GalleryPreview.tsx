'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { GALLERY_PREVIEW_ITEMS } from '@/lib/portfolio'
import { publicPath } from '@/lib/media'
import { SnapCoverflow } from './SnapCoverflow'

function PreviewCard({
  src,
  label,
  className,
}: {
  src: string
  label: string
  className?: string
}) {
  return (
    <div
      className={`relative aspect-[4/5] w-[min(72vw,16rem)] overflow-hidden rounded-2xl bg-brand-ink sm:w-[min(68vw,18rem)] ${className ?? ''}`}
    >
      <Image
        src={publicPath(src)}
        alt={label}
        fill
        className="object-cover"
        sizes="72vw"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
    </div>
  )
}

export function GalleryPreview() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = GALLERY_PREVIEW_ITEMS[activeIndex]

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

        <div className="lg:hidden">
          <SnapCoverflow
            ariaLabel="Gallery highlights"
            onActiveChange={setActiveIndex}
          >
            {GALLERY_PREVIEW_ITEMS.map((item) => (
              <PreviewCard key={item.src} src={item.src} label={item.label} />
            ))}
          </SnapCoverflow>
          {active && (
            <motion.div
              key={active.src}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mx-auto mt-2 max-w-sm px-4 text-center"
            >
              <p className="font-display text-xl text-white">{active.label}</p>
              <p className="mt-1 text-sm capitalize text-brand-gold/90">
                {active.category.replace('_', ' ')}
              </p>
            </motion.div>
          )}
        </div>

        <div className="hidden gap-4 sm:grid-cols-2 sm:gap-5 lg:grid lg:grid-cols-4 lg:gap-6">
          {GALLERY_PREVIEW_ITEMS.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * index, duration: 0.45 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[4/5] w-full bg-brand-ink">
                <Image
                  src={publicPath(item.src)}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
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

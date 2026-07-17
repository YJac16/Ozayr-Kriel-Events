'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Instagram } from 'lucide-react'
import { INSTAGRAM_URL } from '@/lib/constants'
import { publicPath } from '@/lib/media'

const previewImages = [
  'wedding (2).jpeg',
  'Kids_birthday (3).jpeg',
  'braai (3).jpeg',
  'open_air_theatre.jpeg',
  'food (2).jpeg',
  'custom (2).jpeg',
]

export function InstagramStrip() {
  return (
    <section className="border-t border-white/5 bg-brand-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left"
        >
          <div>
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              On Instagram
            </h2>
            <p className="mt-2 text-sm text-brand-cream/65">
              Behind-the-scenes, styling ideas, and recent celebrations.
            </p>
          </div>
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-brand-gold/50 px-6 text-sm font-semibold text-brand-gold transition-colors hover:bg-brand-gold/10"
          >
            <Instagram className="h-5 w-5" />
            Follow along
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-6">
          {previewImages.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-xl"
            >
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full w-full"
              >
                <Image
                  src={publicPath(src)}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 16vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-black/0 transition-colors group-hover:bg-brand-black/35" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

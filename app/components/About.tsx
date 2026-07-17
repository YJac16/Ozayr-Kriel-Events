'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, Sparkles, Users } from 'lucide-react'

const values = [
  { Icon: Heart, label: 'Passion' },
  { Icon: Sparkles, label: 'Creativity' },
  { Icon: Users, label: 'Care' },
]

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-brand-black py-20 sm:py-28 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center md:mb-16"
        >
          <h2 className="font-display text-4xl font-semibold text-white md:text-5xl">
            About Us
          </h2>
          <div className="mx-auto mt-6 h-px w-20 bg-brand-gold" />
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 space-y-6 lg:order-1"
          >
            <p className="font-display text-2xl text-brand-gold md:text-3xl">
              Hi, I&apos;m Ozayr
            </p>
            <p className="text-lg leading-relaxed text-brand-cream/80">
              I&apos;m an event planner who believes every celebration deserves
              care, creativity, and calm execution. With a warm, friendly
              approach and an eye for detail, I transform your vision into
              reality.
            </p>
            <p className="text-lg leading-relaxed text-brand-cream/80">
              Whether it&apos;s an intimate gathering or a grand celebration, I
              bring personal involvement, attention to detail, and flexibility
              to every event. Your moments matter — I&apos;m here to make them
              unforgettable.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6">
              {values.map(({ Icon, label }) => (
                <div key={label} className="text-center">
                  <Icon
                    className="mx-auto mb-2 h-8 w-8 text-brand-gold"
                    strokeWidth={1.25}
                  />
                  <div className="font-display text-lg font-semibold text-white">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none"
          >
            <div className="overflow-hidden rounded-3xl border border-brand-gold/30 shadow-[0_0_60px_rgba(212,175,55,0.12)]">
              <div className="relative aspect-[3/4] min-h-[320px] bg-brand-ink sm:min-h-[420px]">
                <Image
                  src="/Portrait.jpeg"
                  alt="Ozayr Kriel — Metanoia Events Collective"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            <p className="mt-4 text-center font-display text-sm tracking-wide text-brand-gold/90 lg:text-left">
              Ozayr Kriel · Founder
            </p>
            <div
              className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-full bg-brand-gold/15 blur-3xl"
              aria-hidden
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

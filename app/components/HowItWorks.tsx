'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import {
  MessageCircle,
  Lightbulb,
  ClipboardList,
  PartyPopper,
} from 'lucide-react'

const steps = [
  {
    step: 1,
    Icon: MessageCircle,
    title: 'Contact us on WhatsApp',
    text: 'Share your date, guest count, and the mood you want — we respond quickly.',
  },
  {
    step: 2,
    Icon: Lightbulb,
    title: 'Share your vision',
    text: 'We listen, ask the right questions, and align on budget and priorities.',
  },
  {
    step: 3,
    Icon: ClipboardList,
    title: 'We plan & design',
    text: 'Layout, flow, vendors, and styling — handled with crisp communication.',
  },
  {
    step: 4,
    Icon: PartyPopper,
    title: 'We execute flawlessly',
    text: "On the day, we're on the floor so you can be fully in the moment.",
  },
]

export function HowItWorks() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const lineScale = useTransform(scrollYProgress, [0.15, 0.55], [0, 1])

  return (
    <section ref={ref} className="bg-brand-black py-20 sm:py-28 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center md:mb-20"
        >
          <h2 className="font-display text-4xl font-semibold text-white md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-cream/70">
            A calm, linear path from first message to final toast.
          </p>
          <div className="mx-auto mt-6 h-px w-20 bg-brand-gold" />
        </motion.div>

        <div className="relative hidden lg:block">
          <div
            className="absolute left-0 right-0 top-[52px] h-px bg-white/10"
            aria-hidden
          />
          <motion.div
            className="absolute left-0 top-[52px] h-px w-full origin-left bg-brand-gold"
            style={{ scaleX: lineScale }}
            aria-hidden
          />
          <div className="relative grid grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.08 * i }}
                className="text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-gold bg-brand-ink text-brand-gold shadow-[0_0_24px_rgba(212,175,55,0.15)]">
                  <span className="font-display text-lg font-semibold">
                    {s.step}
                  </span>
                </div>
                <div className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/10">
                  <s.Icon
                    className="h-6 w-6 text-brand-gold"
                    strokeWidth={1.25}
                  />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-cream/70">
                  {s.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative space-y-0 lg:hidden">
          <div
            className="absolute bottom-4 left-[27px] top-4 w-px bg-white/10"
            aria-hidden
          />
          <motion.div
            className="absolute bottom-4 left-[27px] top-4 w-px origin-top bg-brand-gold"
            style={{ scaleY: lineScale }}
            aria-hidden
          />
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.45, delay: 0.06 * i }}
              className="relative flex gap-6 pb-12 last:pb-0"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-brand-gold bg-brand-ink text-brand-gold">
                <span className="font-display text-lg font-semibold">
                  {s.step}
                </span>
              </div>
              <div className="pt-1">
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/35 bg-brand-gold/10">
                  <s.Icon
                    className="h-5 w-5 text-brand-gold"
                    strokeWidth={1.25}
                  />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-cream/70">
                  {s.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

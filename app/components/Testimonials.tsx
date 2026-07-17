'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah & James',
    event: 'Wedding',
    text: 'Ozayr made our wedding day absolutely perfect. Every detail was handled with care, and we could truly enjoy our special day without any stress.',
  },
  {
    name: 'Michael & Family',
    event: 'Birthday Party',
    text: "We hired Ozayr for our daughter's 10th birthday, and it exceeded all expectations! The kids had an amazing time — highly recommend.",
  },
  {
    name: 'Corporate Team',
    event: 'Corporate Event',
    text: "Ozayr organized our annual company event flawlessly. Professional, organized, and creative. We'll definitely work with her again.",
  },
  {
    name: 'Emma & Friends',
    event: 'Baby Shower',
    text: 'The baby shower Ozayr planned was beautiful and so thoughtfully organized. Every detail reflected our style.',
  },
  {
    name: 'Kaamil & Zareefah',
    event: "Khawla's 1st Birthday",
    text: 'It was amazing. Thank you to the entire team for an epic birthday party for our girl. You did an amazing job.',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="border-t border-white/5 bg-brand-ink py-20 sm:py-28 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="font-display text-4xl font-semibold text-white md:text-5xl">
            What Our Clients Say
          </h2>
          <div className="mx-auto mt-6 h-px w-20 bg-brand-gold" />
        </motion.div>

        <div className="relative px-2 sm:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.45 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl md:p-12"
            >
              <Quote
                className="mb-6 h-12 w-12 text-brand-gold opacity-80"
                strokeWidth={1}
              />
              <p className="text-lg font-light italic leading-relaxed text-brand-cream md:text-xl">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>
              <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="font-display text-xl font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-brand-gold/90">
                    {testimonials[currentIndex].event}
                  </div>
                </div>
                <div className="flex gap-0.5 text-brand-gold" aria-hidden>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s}>★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={() =>
              setCurrentIndex(
                (prev) => (prev - 1 + testimonials.length) % testimonials.length
              )
            }
            className="absolute left-0 top-1/2 hidden min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-brand-black/90 text-brand-gold hover:bg-brand-black md:flex lg:-left-4"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % testimonials.length)
            }
            className="absolute right-0 top-1/2 hidden min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-brand-black/90 text-brand-gold hover:bg-brand-black md:flex lg:-right-4"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`min-h-[10px] rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-brand-gold'
                    : 'w-2 bg-white/25 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

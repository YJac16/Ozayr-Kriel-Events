'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { publicPath } from '@/lib/media'
import { SERVICE_WHATSAPP, type ServiceWhatsAppKey } from '@/lib/whatsapp'
import { SnapCoverflow } from './SnapCoverflow'

const services: Array<{
  title: string
  description: string
  image: string
  whatsappKey: ServiceWhatsAppKey
}> = [
  {
    title: 'Weddings',
    description:
      'Ceremony to reception — cohesive design, trusted vendors, and a day that feels effortlessly you.',
    image: 'wedding (4).jpeg',
    whatsappKey: 'weddings',
  },
  {
    title: 'Birthdays & Private Events',
    description:
      'Intimate milestones and lively gatherings tailored to your people, your pace, and your style.',
    image: 'Kids_birthday (5).jpeg',
    whatsappKey: 'birthdays',
  },
  {
    title: 'Braai Experiences',
    description:
      'Relaxed luxury outdoors — flow, flavour, and atmosphere that keeps everyone at ease.',
    image: 'braai (3).jpeg',
    whatsappKey: 'braai',
  },
  {
    title: 'Outdoor Movie Nights',
    description:
      'Open-air cinema under the stars — comfort, lighting, and magic worth remembering.',
    image: 'open_air_theatre.jpeg',
    whatsappKey: 'cinema',
  },
]

function ServiceWhatsAppLink({ whatsappKey }: { whatsappKey: ServiceWhatsAppKey }) {
  return (
    <Link
      href={SERVICE_WHATSAPP[whatsappKey]}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-gold transition-colors hover:text-white"
    >
      <MessageCircle className="h-4 w-4" aria-hidden />
      Enquire on WhatsApp
    </Link>
  )
}

function ServiceCard({
  title,
  description,
  image,
  whatsappKey,
  overlay = true,
}: (typeof services)[number] & { overlay?: boolean }) {
  return (
    <article className="group relative w-[min(78vw,18rem)] overflow-hidden rounded-2xl border border-white/10 bg-brand-black shadow-xl sm:w-[min(72vw,20rem)]">
      <div className="relative aspect-[4/5]">
        <Image
          src={publicPath(image)}
          alt=""
          fill
          className="object-cover"
          sizes="78vw"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/55 to-brand-black/20" />
      </div>
      {overlay && (
        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
          <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-cream/85">
            {description}
          </p>
          <ServiceWhatsAppLink whatsappKey={whatsappKey} />
        </div>
      )}
    </article>
  )
}

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = services[activeIndex]

  return (
    <section
      id="services"
      className="scroll-mt-24 bg-brand-ink py-20 sm:py-28 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center md:mb-20"
        >
          <h2 className="font-display text-4xl font-semibold text-white md:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-cream/70">
            Four ways we help you celebrate — each grounded in clarity, warmth,
            and flawless execution.
          </p>
          <div className="mx-auto mt-6 h-px w-20 bg-brand-gold" />
        </motion.div>

        <div className="lg:hidden">
          <SnapCoverflow
            ariaLabel="Our services"
            compact
            onActiveChange={setActiveIndex}
          >
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} overlay={false} />
            ))}
          </SnapCoverflow>
          {active && (
            <motion.div
              key={active.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mx-auto mt-2 max-w-md px-4 text-center"
            >
              <h3 className="font-display text-2xl font-semibold text-white">
                {active.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-cream/80">
                {active.description}
              </p>
              <div className="flex justify-center">
                <ServiceWhatsAppLink whatsappKey={active.whatsappKey} />
              </div>
            </motion.div>
          )}
        </div>

        <div className="hidden gap-6 sm:grid-cols-2 lg:grid lg:gap-8">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-brand-black shadow-xl"
            >
              <div className="relative aspect-[16/11] sm:aspect-[16/10]">
                <Image
                  src={publicPath(s.image)}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/55 to-brand-black/20" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <div className="translate-y-1 transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-cream/85 sm:text-base">
                    {s.description}
                  </p>
                  <ServiceWhatsAppLink whatsappKey={s.whatsappKey} />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-brand-gold/0 transition-[box-shadow,ring] duration-300 group-hover:shadow-[0_0_0_1px_rgba(212,175,55,0.5),0_24px_48px_-12px_rgba(0,0,0,0.5)] group-hover:ring-1 group-hover:ring-brand-gold/60" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

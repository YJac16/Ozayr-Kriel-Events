'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { WHATSAPP_HREF } from '@/lib/whatsapp'

export function WhatsAppFloat() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-center gap-3 md:bottom-8 md:right-8">
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            aria-label="Back to top"
            onClick={scrollToTop}
            className="flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-full border border-brand-gold/50 bg-brand-black/90 text-brand-gold shadow-lg shadow-black/40 backdrop-blur-sm md:h-14 md:w-14"
            initial={{ scale: 0, opacity: 0, y: 8 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 8 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          >
            <ArrowUp className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2.25} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book on WhatsApp"
        className="flex h-14 w-14 min-h-[56px] min-w-[56px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 md:h-16 md:w-16"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
      >
        <MessageCircle className="h-7 w-7 md:h-8 md:w-8" strokeWidth={2} />
      </motion.a>
    </div>
  )
}

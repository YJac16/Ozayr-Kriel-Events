import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_LINK = 'https://wa.link/r450xo'
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I'm interested in planning an event with Metanoia Events Collective."
)

const Contact = () => {
  const handleWhatsApp = () => {
    window.open(`${WHATSAPP_LINK}?text=${WHATSAPP_MESSAGE}`, '_blank')
  }

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-ink-900"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gold-50 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-ink-300 max-w-2xl mx-auto">
            Bookings and enquiries are handled on WhatsApp — tell us about your
            event and we&apos;ll take it from there.
          </p>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />

          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsApp}
            className="mt-10 inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#20BD5A] sm:text-lg"
          >
            <MessageCircle className="h-5 w-5" />
            Message us on WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

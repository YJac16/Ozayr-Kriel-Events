import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const CTA = () => {
  const handleWhatsApp = () => {
    const whatsappLink = 'https://wa.link/r450xo'
    const message = encodeURIComponent(
      "Hi! I'm interested in planning an event with Metanoia Events Collective."
    )
    window.open(`${whatsappLink}?text=${message}`, '_blank')
  }

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-ink-900 border-y border-ink-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-gold-50">
            Let's Plan Something
            <span className="block text-gold-400">Beautiful Together</span>
          </h2>
          <p className="text-xl md:text-2xl text-ink-300 max-w-2xl mx-auto">
            Ready to turn your vision into reality? Let's start the conversation
            and create memories that last a lifetime.
          </p>

          <div className="flex justify-center items-center pt-8 px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="w-full sm:w-auto px-8 py-4 min-h-[56px] bg-gold-500 text-ink-950 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:bg-gold-400 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA

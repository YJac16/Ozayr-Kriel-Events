import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'

const CTA = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleWhatsApp = () => {
    const whatsappLink = 'https://wa.link/r450xo'
    const message = encodeURIComponent(
      "Hi! I'm interested in planning an event with Ozayr Kriel Events."
    )
    window.open(`${whatsappLink}?text=${message}`, '_blank')
  }

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-champagne-100 via-blush-100 to-sage-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-sage-900">
            Let's Plan Something
            <span className="block text-champagne-700">Beautiful Together</span>
          </h2>
          <p className="text-xl md:text-2xl text-sage-700 max-w-2xl mx-auto">
            Ready to turn your vision into reality? Let's start the conversation
            and create memories that last a lifetime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 px-4 w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="w-full sm:w-auto px-8 py-4 min-h-[56px] bg-green-600 text-white rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="w-full sm:w-auto px-8 py-4 min-h-[56px] bg-white text-champagne-700 rounded-full font-semibold text-base sm:text-lg border-2 border-champagne-300 hover:border-champagne-500 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Send a Message
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const METANOIA_LOGO = '/Metanoia%20Events%20Collective%20Logo.png'

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink-950"
    >
      {/* Decorative gold accents */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-20 w-32 h-32 md:w-64 md:h-64 bg-gold-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 left-20 w-40 h-40 md:w-80 md:h-80 bg-gold-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Central hero mark: Metanoia Events Collective logo (replaces star) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <img
              src={METANOIA_LOGO}
              alt="Metanoia Events Collective"
              className="h-28 sm:h-36 md:h-44 lg:h-52 w-auto object-contain max-w-full px-4"
            />
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gold-50 leading-tight px-2">
            <span className="block">Turning Your</span>
            <span className="block text-gold-400">Moments Into</span>
            <span className="block">Beautiful Memories</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gold-200/90 max-w-2xl mx-auto font-light px-4"
          >
            Elegant. Personal. Stress-Free Event Planning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 px-4 w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="w-full sm:w-auto px-8 py-4 min-h-[56px] bg-gold-500 text-ink-950 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:bg-gold-400 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Plan My Event
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#services')}
              className="w-full sm:w-auto px-8 py-4 min-h-[56px] bg-transparent text-gold-400 rounded-full font-semibold text-base sm:text-lg border-2 border-gold-500 hover:border-gold-400 hover:bg-gold-500/10 transition-all duration-300"
            >
              View Services
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gold-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold-500 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

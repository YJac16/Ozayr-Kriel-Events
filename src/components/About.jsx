import { motion } from 'framer-motion'
import { Heart, Sparkles, Users } from 'lucide-react'

const About = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-sage-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-champagne-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="text-3xl font-display text-champagne-700 mb-4">
              Hi, I'm Ozayr
            </div>
            <p className="text-lg text-sage-700 leading-relaxed">
              I'm an event planner who believes every celebration deserves care,
              creativity, and calm execution. With a warm, friendly approach and
              an eye for detail, I transform your vision into reality.
            </p>
            <p className="text-lg text-sage-700 leading-relaxed">
              Whether it's an intimate gathering or a grand celebration, I bring
              personal involvement, attention to detail, and flexibility to every
              event. Your moments matter, and I'm here to make them unforgettable.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <Heart className="w-8 h-8 text-blush-500 mx-auto mb-2" />
                <div className="text-2xl font-display font-bold text-sage-900">
                  Passion
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <Sparkles className="w-8 h-8 text-champagne-600 mx-auto mb-2" />
                <div className="text-2xl font-display font-bold text-sage-900">
                  Creativity
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <Users className="w-8 h-8 text-sage-600 mx-auto mb-2" />
                <div className="text-2xl font-display font-bold text-sage-900">
                  Care
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-cream-200 via-blush-200 to-sage-200 flex items-center justify-center">
                <div className="text-center text-sage-600">
                  <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-16 h-16 text-champagne-600" />
                  </div>
                  <p className="text-sm font-medium">Portrait Placeholder</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-champagne-200 rounded-full blur-2xl opacity-50 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

import { motion } from 'framer-motion'
import {
  Heart,
  Cake,
  Baby,
  Briefcase,
  Sparkles,
  Gift,
  Flame,
} from 'lucide-react'

const Services = () => {
  const services = [
    { icon: Heart, title: 'Weddings', description: 'Your perfect day, perfectly planned. From intimate ceremonies to grand celebrations.', color: 'gold' },
    { icon: Cake, title: 'Birthdays', description: 'Celebrate another year of life with style and joy, tailored to your personality.', color: 'gold' },
    { icon: Baby, title: 'Kids Parties', description: 'Magical moments for little ones with fun themes, activities, and unforgettable memories.', color: 'gold' },
    { icon: Briefcase, title: 'Corporate Events', description: 'Professional gatherings that impress, from conferences to team building experiences.', color: 'gold' },
    { icon: Gift, title: 'Baby Showers', description: 'Welcoming new life with warmth, love, and beautifully curated celebrations.', color: 'gold' },
    { icon: Sparkles, title: 'Custom Events', description: 'Any celebration you can imagine. Your vision, my expertise, our collaboration.', color: 'gold' },
    { icon: Flame, title: 'Braai', description: 'Expert braai masters to ensure meals are cooked well and on time.', color: 'gold' },
  ]

  const cardClass = 'bg-ink-800/80 border border-ink-700 hover:border-gold-600/50 text-gold-50 rounded-2xl p-6 sm:p-8 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-gold-900/20'

  return (
    <section
      id="services"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-ink-950"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gold-50 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-ink-300 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we plan it all
          </p>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={cardClass}
              >
                <div className="mb-4">
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-gold-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold mb-3 text-gold-50">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-ink-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services

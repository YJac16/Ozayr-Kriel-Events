import { motion } from 'framer-motion'
import {
  Heart,
  Cake,
  Baby,
  Briefcase,
  Sparkles,
  Gift,
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Weddings',
      description:
        'Your perfect day, perfectly planned. From intimate ceremonies to grand celebrations.',
      color: 'blush',
    },
    {
      icon: Cake,
      title: 'Birthdays',
      description:
        'Celebrate another year of life with style and joy, tailored to your personality.',
      color: 'champagne',
    },
    {
      icon: Baby,
      title: 'Kids Parties',
      description:
        'Magical moments for little ones with fun themes, activities, and unforgettable memories.',
      color: 'sage',
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description:
        'Professional gatherings that impress, from conferences to team building experiences.',
      color: 'champagne',
    },
    {
      icon: Gift,
      title: 'Baby Showers',
      description:
        'Welcoming new life with warmth, love, and beautifully curated celebrations.',
      color: 'blush',
    },
    {
      icon: Sparkles,
      title: 'Custom Events',
      description:
        'Any celebration you can imagine. Your vision, my expertise, our collaboration.',
      color: 'sage',
    },
  ]

  const colorClasses = {
    blush: 'bg-blush-50 border-blush-200 hover:bg-blush-100 text-blush-700',
    champagne: 'bg-champagne-50 border-champagne-200 hover:bg-champagne-100 text-champagne-700',
    sage: 'bg-sage-50 border-sage-200 hover:bg-sage-100 text-sage-700',
  }

  return (
    <section
      id="services"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cream-50 to-white"
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
            Our Services
          </h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we plan it all
          </p>
          <div className="w-24 h-1 bg-champagne-500 mx-auto mt-4 rounded-full" />
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
                className={`${colorClasses[service.color]} rounded-2xl p-6 sm:p-8 border-2 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl`}
              >
                <div className="mb-4">
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-sage-700 leading-relaxed">
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

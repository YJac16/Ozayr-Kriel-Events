import { motion } from 'framer-motion'
import {
  Shield,
  Heart,
  Palette,
  Users,
  DollarSign,
  Sparkles,
} from 'lucide-react'

const WhyChoose = () => {
  const features = [
    { icon: Shield, title: 'Stress-Free Planning', description: 'Leave the details to us. We handle everything so you can enjoy your event.' },
    { icon: Heart, title: 'Warm & Accommodating', description: "Friendly service with a personal touch. We're here to make your vision come true." },
    { icon: Palette, title: 'Custom-Tailored Events', description: 'Every event is unique. We create experiences that reflect your style and personality.' },
    { icon: Users, title: 'Reliable Vendors', description: 'Trusted network of professionals ensuring quality and seamless execution.' },
    { icon: DollarSign, title: 'Budget-Friendly Solutions', description: 'Beautiful events that respect your budget without compromising on quality.' },
    { icon: Sparkles, title: 'Passion-Driven Creativity', description: 'We love what we do, and it shows in every detail of your celebration.' },
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-ink-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-cream-50 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-ink-300 max-w-2xl mx-auto">
            Experience the difference of personalized, passionate event planning
          </p>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-ink-800/60 rounded-2xl p-8 border border-ink-700 hover:border-gold-600/40 transition-all duration-300 shadow-lg"
              >
                <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mb-6 border border-gold-500/30">
                  <Icon className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="text-xl font-display font-bold text-cream-50 mb-3">
                  {feature.title}
                </h3>
                <p className="text-ink-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose

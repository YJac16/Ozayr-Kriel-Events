import { motion } from 'framer-motion'
import { Heart, Instagram, Facebook, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink-950 text-gold-50 py-12 px-4 sm:px-6 lg:px-8 pb-[calc(2rem+env(safe-area-inset-bottom))] border-t border-ink-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="/Metanoia%20Events%20Collective%20Logo.png"
              alt="Metanoia Events Collective"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-ink-300 leading-relaxed">
              Turning your moments into beautiful memories with elegant,
              personal, and stress-free event planning.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-gold-400">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((label, i) => (
                <li key={label}>
                  <a
                    href={`#${label.toLowerCase()}`}
                    className="text-ink-300 hover:text-gold-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-gold-400">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-ink-800 rounded-full flex items-center justify-center hover:bg-gold-600 text-gold-50 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-ink-800 rounded-full flex items-center justify-center hover:bg-gold-600 text-gold-50 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:info@ozayrkrielevents.com"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-ink-800 rounded-full flex items-center justify-center hover:bg-gold-600 text-gold-50 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-ink-800 pt-8 text-center">
          <p className="text-ink-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-gold-500" /> by Metanoia Events Collective © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { motion } from 'framer-motion'
import { Heart, Instagram, Facebook, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-sage-900 text-cream-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img
              src="/OK Events.png"
              alt="OK Events"
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-cream-200 leading-relaxed">
              Turning your moments into beautiful memories with elegant,
              personal, and stress-free event planning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-cream-200 hover:text-champagne-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-cream-200 hover:text-champagne-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-cream-200 hover:text-champagne-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-cream-200 hover:text-champagne-400 transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-cream-200 hover:text-champagne-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-cream-800 rounded-full flex items-center justify-center hover:bg-champagne-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-cream-800 rounded-full flex items-center justify-center hover:bg-champagne-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:info@ozayrkrielevents.com"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-cream-800 rounded-full flex items-center justify-center hover:bg-champagne-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream-800 pt-8 text-center">
          <p className="text-cream-300 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-blush-400" /> by Ozayr Kriel
            Events © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

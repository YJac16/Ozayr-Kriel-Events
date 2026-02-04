import { motion } from 'framer-motion'
import { useState } from 'react'
import { Image as ImageIcon } from 'lucide-react'

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const galleryItems = [
    { id: 1, title: 'Elegant Wedding Setup', category: 'Weddings' },
    { id: 2, title: 'Birthday Celebration', category: 'Birthdays' },
    { id: 3, title: 'Corporate Event', category: 'Corporate' },
    { id: 4, title: 'Kids Party Fun', category: 'Kids Parties' },
    { id: 5, title: 'Baby Shower Bliss', category: 'Baby Showers' },
    { id: 6, title: 'Custom Celebration', category: 'Custom' },
    { id: 7, title: 'Intimate Gathering', category: 'Weddings' },
    { id: 8, title: 'Grand Celebration', category: 'Birthdays' },
    { id: 9, title: 'Team Building Event', category: 'Corporate' },
  ]

  const getGradient = (index) => {
    const gradients = [
      'from-ink-800 to-ink-700',
      'from-ink-700 to-ink-800',
      'from-ink-800 to-ink-900',
      'from-ink-900 to-ink-800',
      'from-ink-700 to-ink-900',
      'from-ink-800 to-ink-700',
      'from-ink-900 to-ink-700',
      'from-ink-700 to-ink-800',
      'from-ink-800 to-ink-900',
    ]
    return gradients[index % gradients.length]
  }

  return (
    <section
      id="gallery"
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
            Gallery & Inspiration
          </h2>
          <p className="text-xl text-ink-300 max-w-2xl mx-auto">
            A glimpse into the beautiful events we've created
          </p>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="break-inside-avoid mb-6 relative group cursor-pointer"
            >
              <div
                className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-ink-700 ${
                  hoveredIndex === index ? 'scale-105 ring-2 ring-gold-500/50' : ''
                }`}
              >
                <div
                  className={`aspect-[4/5] bg-gradient-to-br ${getGradient(index)} flex items-center justify-center`}
                >
                  <ImageIcon className="w-16 h-16 text-gold-600/40" />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent flex items-end p-6"
                >
                  <div>
                    <h3 className="text-gold-50 font-display font-bold text-xl mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gold-400/90 text-sm">{item.category}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

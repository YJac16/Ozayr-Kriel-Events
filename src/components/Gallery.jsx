import { motion } from 'framer-motion'
import { useState } from 'react'

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const galleryImages = [
    'WhatsApp Image 2026-02-05 at 15.43.42 (1).jpeg',
    'WhatsApp Image 2026-02-05 at 15.43.42.jpeg',
    'WhatsApp Image 2026-02-05 at 15.43.44.jpeg',
    'WhatsApp Image 2026-02-05 at 15.43.45.jpeg',
    'WhatsApp Image 2026-02-05 at 15.44.00.jpeg',
    'WhatsApp Image 2026-02-05 at 15.44.12 (1).jpeg',
    'WhatsApp Image 2026-02-05 at 15.44.12 (2).jpeg',
    'WhatsApp Image 2026-02-05 at 15.44.12.jpeg',
    'WhatsApp Image 2026-02-05 at 15.44.33.jpeg',
    'WhatsApp Image 2026-02-12 at 11.32.03 (1).jpeg',
    'WhatsApp Image 2026-02-12 at 11.32.03 (2).jpeg',
    'WhatsApp Image 2026-02-12 at 11.32.03.jpeg',
    'WhatsApp Image 2026-02-12 at 11.32.11.jpeg',
    'WhatsApp Image 2026-02-12 at 11.32.13 (1).jpeg',
    'WhatsApp Image 2026-02-12 at 11.32.13 (2).jpeg',
    'WhatsApp Image 2026-02-12 at 11.32.13.jpeg',
    'WhatsApp Image 2026-02-12 at 11.32.14 (1).jpeg',
    'WhatsApp Image 2026-02-12 at 11.32.14 (2).jpeg',
    'WhatsApp Image 2026-02-12 at 11.32.14 (3).jpeg',
    'WhatsApp Image 2026-02-12 at 11.32.14.jpeg',
    'WhatsApp Image 2026-02-12 at 11.32.15 (1).jpeg',
    'WhatsApp Image 2026-02-12 at 11.32.15.jpeg',
    'WhatsApp Image 2026-02-12 at 11.51.56.jpeg',
    'WhatsApp Image 2026-02-12 at 11.51.57 (1).jpeg',
    'WhatsApp Image 2026-02-12 at 11.51.57 (2).jpeg',
    'WhatsApp Image 2026-02-12 at 11.51.57 (3).jpeg',
    'WhatsApp Image 2026-02-12 at 11.51.57.jpeg',
    'WhatsApp Image 2026-02-12 at 11.51.58 (1).jpeg',
    'WhatsApp Image 2026-02-12 at 11.51.58 (2).jpeg',
    'WhatsApp Image 2026-02-12 at 11.51.58 (3).jpeg',
    'WhatsApp Image 2026-02-12 at 11.51.58.jpeg',
    'WhatsApp Image 2026-02-12 at 11.51.59.jpeg',
  ]

  const categories = ['Weddings', 'Birthdays', 'Corporate', 'Kids Parties', 'Baby Showers', 'Custom']
  const galleryItems = galleryImages.map((image, i) => ({
    id: i + 1,
    title: ['Elegant Wedding Setup', 'Birthday Celebration', 'Corporate Event', 'Kids Birthday Party', 'Baby Shower Bliss', 'Custom Celebration', 'Intimate Gathering', 'Grand Celebration', 'Team Building', 'Event Highlights', 'Celebration Moments', 'Special Day', 'Party Setup', 'Guest Experience', 'Decor & Styling', 'Cake & Treats', 'Venue View', 'Memorable Moments', 'Festive Gathering', 'Birthday Fun', 'Kids Party', 'Family Celebration', 'Table Setting', 'Event Styling', 'Moments to Remember', 'Joyful Celebration', 'Beautiful Details', 'Happy Guests', 'Event Day', 'Celebration Vibes', 'Sweet Moments', 'Party Time', 'Our Work'][i] || 'Event',
    category: categories[i % categories.length],
    image,
  }))

  const galleryVideos = [
    'WhatsApp Video 2026-02-05 at 15.43.53.mp4',
    'WhatsApp Video 2026-02-05 at 15.44.04.mp4',
    'WhatsApp Video 2026-02-05 at 15.44.10.mp4',
    'WhatsApp Video 2026-02-05 at 15.44.19.mp4',
    'WhatsApp Video 2026-02-05 at 15.44.28.mp4',
    'WhatsApp Video 2026-02-05 at 15.44.32.mp4',
    'WhatsApp Video 2026-02-12 at 11.32.09.mp4',
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
                <div className={`aspect-[4/5] bg-gradient-to-br ${getGradient(index)} flex items-center justify-center overflow-hidden`}>
                  <img
                    src={`/${encodeURIComponent(item.image)}`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gold-50 mb-6 text-center">
            Event Videos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryVideos.map((video, index) => (
              <motion.div
                key={video}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl overflow-hidden border border-ink-700 shadow-lg bg-ink-900"
              >
                <video
                  src={`/${encodeURIComponent(video)}`}
                  controls
                  playsInline
                  className="w-full aspect-video object-cover"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery

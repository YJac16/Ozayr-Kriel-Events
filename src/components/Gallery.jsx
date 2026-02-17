import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { getGalleryItems, galleryVideos } from '../data/galleryData'

const PREVIEW_COUNT = 3
const gradients = [
  'from-ink-800 to-ink-700', 'from-ink-700 to-ink-800', 'from-ink-800 to-ink-900',
]

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const galleryItems = getGalleryItems().slice(0, PREVIEW_COUNT)

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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group cursor-pointer"
            >
              <div
                className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-ink-700 ${
                  hoveredIndex === index ? 'scale-[1.02] ring-2 ring-gold-500/50' : ''
                }`}
              >
                <div className={`aspect-[4/5] bg-gradient-to-br ${gradients[index % gradients.length]} overflow-hidden`}>
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
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="/gallery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gold-500/60 text-gold-50 hover:bg-gold-500/10 hover:border-gold-500 transition-colors font-medium"
          >
            View more
            <ExternalLink className="w-4 h-4" aria-hidden />
          </a>
        </motion.div>

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
            {galleryVideos.slice(0, 3).map((video, index) => (
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
          <div className="text-center mt-8">
            <a
              href="/gallery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm font-medium transition-colors"
            >
              View all videos in gallery
              <ExternalLink className="w-4 h-4" aria-hidden />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery

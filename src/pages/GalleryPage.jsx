import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { getGalleryItems, galleryVideos } from '../data/galleryData'

const gradients = [
  'from-ink-800 to-ink-700', 'from-ink-700 to-ink-800', 'from-ink-800 to-ink-900',
  'from-ink-900 to-ink-800', 'from-ink-700 to-ink-900', 'from-ink-800 to-ink-700',
  'from-ink-900 to-ink-700', 'from-ink-700 to-ink-800', 'from-ink-800 to-ink-900',
]

const GalleryPage = () => {
  useEffect(() => {
    document.title = 'Gallery | Metanoia Events Collective'
    return () => { document.title = 'Metanoia Events Collective - Elegant Event Planning' }
  }, [])

  const galleryItems = getGalleryItems()

  return (
    <div className="min-h-screen bg-ink-950 text-ink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm font-medium mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden />
          Back to Home
        </Link>

        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gold-50 mb-4">
            Gallery & Inspiration
          </h1>
          <p className="text-xl text-ink-300 max-w-2xl mx-auto">
            A glimpse into the beautiful events we've created
          </p>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
        </header>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.5) }}
              className="break-inside-avoid mb-6"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-ink-700 hover:ring-2 hover:ring-gold-500/50 transition-all">
                <div className={`aspect-[4/5] bg-gradient-to-br ${gradients[index % gradients.length]} overflow-hidden`}>
                  <img
                    src={`/${encodeURIComponent(item.image)}`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <h3 className="text-gold-50 font-display font-bold text-xl">{item.title}</h3>
                    <p className="text-gold-400/90 text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="mt-20">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gold-50 mb-6 text-center">
            Event Videos
          </h2>
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
        </section>

        <div className="mt-14 pt-8 border-t border-ink-800 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GalleryPage

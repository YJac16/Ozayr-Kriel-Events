import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah & James',
      event: 'Wedding',
      text: "Ozayr made our wedding day absolutely perfect. Every detail was handled with care, and we could truly enjoy our special day without any stress. Her warm personality and attention to detail are unmatched.",
      rating: 5,
    },
    {
      name: 'Michael & Family',
      event: 'Birthday Party',
      text: "We hired Ozayr for our daughter's 10th birthday, and it exceeded all expectations! The kids had an amazing time, and we were able to relax and enjoy the celebration. Highly recommend!",
      rating: 5,
    },
    {
      name: 'Corporate Team',
      event: 'Corporate Event',
      text: "Ozayr organized our annual company event flawlessly. Professional, organized, and creative. Our team was impressed, and the event was a huge success. We'll definitely work with her again.",
      rating: 5,
    },
    {
      name: 'Emma & Friends',
      event: 'Baby Shower',
      text: "The baby shower Ozayr planned was beautiful and so thoughtfully organized. Every detail reflected our style, and the day was stress-free and memorable. Thank you for making it special!",
      rating: 5,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-sage-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-champagne-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-cream-50 rounded-3xl p-8 md:p-12 shadow-lg"
            >
              <Quote className="w-12 h-12 text-champagne-500 mb-6" />
              <p className="text-xl md:text-2xl text-sage-700 leading-relaxed mb-8 font-light italic">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-xl text-sage-900 mb-1">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sage-600">{testimonials[currentIndex].event}</div>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-champagne-500 text-2xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-cream-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-sage-700" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-cream-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-sage-700" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-champagne-600 w-8'
                    : 'bg-cream-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

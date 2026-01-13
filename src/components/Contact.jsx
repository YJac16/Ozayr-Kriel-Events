import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, MessageCircle, Mail, Phone } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    eventDate: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      eventType: '',
      eventDate: '',
      message: '',
    })
  }

  const handleWhatsApp = () => {
    const whatsappLink = 'https://wa.link/r450xo'
    // If form has data, try to include it in the message
    if (formData.name || formData.message || formData.eventType) {
      const message = encodeURIComponent(
        `Hi! I'm interested in planning an event.\n\nName: ${formData.name || 'Not provided'}\nEvent Type: ${formData.eventType || 'Not specified'}\nEvent Date: ${formData.eventDate || 'Not specified'}\n\nMessage: ${formData.message || 'Interested in your services'}`
      )
      // Try to append message to the link
      window.open(`${whatsappLink}?text=${message}`, '_blank')
    } else {
      window.open(whatsappLink, '_blank')
    }
  }

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white"
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
            Get In Touch
          </h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            Let's discuss your event and make it unforgettable
          </p>
          <div className="w-24 h-1 bg-champagne-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-sage-700 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-4 text-base rounded-xl border-2 border-cream-200 focus:border-champagne-500 focus:outline-none transition-colors bg-cream-50 min-h-[48px]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-sage-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 text-base rounded-xl border-2 border-cream-200 focus:border-champagne-500 focus:outline-none transition-colors bg-cream-50 min-h-[48px]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="eventType"
                  className="block text-sm font-medium text-sage-700 mb-2"
                >
                  Event Type
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-4 text-base rounded-xl border-2 border-cream-200 focus:border-champagne-500 focus:outline-none transition-colors bg-cream-50 min-h-[48px]"
                >
                  <option value="">Select event type</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Kids Party">Kids Party</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Baby Shower">Baby Shower</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Custom">Custom Event</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="eventDate"
                  className="block text-sm font-medium text-sage-700 mb-2"
                >
                  Event Date
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-4 text-base rounded-xl border-2 border-cream-200 focus:border-champagne-500 focus:outline-none transition-colors bg-cream-50 min-h-[48px]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-sage-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 text-base rounded-xl border-2 border-cream-200 focus:border-champagne-500 focus:outline-none transition-colors bg-cream-50 resize-none min-h-[120px]"
                  placeholder="Tell us about your event..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-6 py-4 min-h-[56px] bg-champagne-600 text-white rounded-xl font-semibold hover:bg-champagne-700 transition-colors flex items-center justify-center gap-2 text-base"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>

                <motion.button
                  type="button"
                  onClick={handleWhatsApp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-6 py-4 min-h-[56px] bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-cream-50 rounded-2xl p-8 border-2 border-cream-200">
              <h3 className="text-2xl font-display font-bold text-sage-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-champagne-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-champagne-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-sage-900 mb-1">Email</div>
                    <a
                      href="mailto:info@ozayrkrielevents.com"
                      className="text-sage-600 hover:text-champagne-600 transition-colors"
                    >
                      info@ozayrkrielevents.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-champagne-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-champagne-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-sage-900 mb-1">Phone</div>
                    <a
                      href="tel:+27768279796"
                      className="text-sage-600 hover:text-champagne-600 transition-colors"
                    >
                      +27 76 827 9796
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-champagne-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-champagne-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-sage-900 mb-1">WhatsApp</div>
                    <button
                      onClick={handleWhatsApp}
                      className="text-sage-600 hover:text-champagne-600 transition-colors text-left"
                    >
                      Chat with us instantly
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blush-50 to-champagne-50 rounded-2xl p-8 border-2 border-blush-200">
              <h3 className="text-xl font-display font-bold text-sage-900 mb-4">
                Let's Create Magic Together
              </h3>
              <p className="text-sage-700 leading-relaxed">
                Whether you have a clear vision or need help bringing your ideas
                to life, I'm here to make your event planning journey smooth,
                enjoyable, and stress-free. Reach out today!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

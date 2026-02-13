import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | Metanoia Events Collective'
    return () => { document.title = 'Metanoia Events Collective - Elegant Event Planning' }
  }, [])

  return (
    <div className="min-h-screen bg-ink-950 text-ink-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm font-medium mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden />
          Back to Home
        </Link>

        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-gold-50 mb-2">
            Privacy Policy
          </h1>
          <p className="text-ink-400 text-sm">
            Metanoia Events Collective (Pty) Ltd · Established 2026
          </p>
        </header>

        <article className="space-y-8 text-base leading-relaxed">
          <p className="text-ink-300">
            At Metanoia Events Collective (Pty) Ltd, we respect your privacy and are committed to protecting your personal information in accordance with applicable South African data protection laws.
          </p>

          <section>
            <h2 className="text-xl font-display font-semibold text-gold-50 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-ink-300 mb-3">
              We may collect the following information when you contact us or book our services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-ink-300 ml-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Event details</li>
              <li>Billing information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-gold-50 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-ink-300 mb-3">
              Your information is used to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-ink-300 ml-2">
              <li>Respond to enquiries</li>
              <li>Provide quotations and event planning services</li>
              <li>Manage bookings and payments</li>
              <li>Improve our services</li>
              <li>Communicate important updates</li>
            </ul>
            <p className="text-ink-300 mt-4">
              We do not sell or share your personal information with third parties, except where required by law or necessary to deliver our services (e.g., trusted suppliers).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-gold-50 mb-4">
              3. Data Protection
            </h2>
            <p className="text-ink-300">
              We take reasonable technical and organisational measures to protect your information from unauthorised access, misuse, or loss.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-gold-50 mb-4">
              4. Cookies
            </h2>
            <p className="text-ink-300">
              Our website may use basic cookies to improve user experience and website performance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-gold-50 mb-4">
              5. Your Rights
            </h2>
            <p className="text-ink-300">
              You may request access, correction, or deletion of your personal information by contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-gold-50 mb-4">
              6. Contact
            </h2>
            <p className="text-ink-300">
              For any privacy-related queries, please contact:<br />
              <span className="text-gold-400 font-medium">Metanoia Events Collective (Pty) Ltd</span>
            </p>
          </section>
        </article>

        <div className="mt-14 pt-8 border-t border-ink-800">
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

export default PrivacyPolicy

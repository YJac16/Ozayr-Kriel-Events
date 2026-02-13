import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const TermsAndConditions = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions | Metanoia Events Collective'
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
            Terms and Conditions
          </h1>
          <p className="text-ink-400 text-sm">
            Metanoia Events Collective (Pty) Ltd · Reg No: 2026/059643/07 · VAT No: 9303951264
          </p>
        </header>

        <p className="text-ink-300 mb-10 leading-relaxed">
          By engaging our services, you agree to the following terms:
        </p>

        <article className="space-y-8 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-display font-semibold text-gold-50 mb-4">
              1. Booking & Payments
            </h2>
            <ul className="list-disc list-inside space-y-2 text-ink-300 ml-2">
              <li>A booking is confirmed once a deposit has been received.</li>
              <li>The remaining balance must be paid prior to the event date unless otherwise agreed in writing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-gold-50 mb-4">
              2. Cancellations
            </h2>
            <ul className="list-disc list-inside space-y-2 text-ink-300 ml-2">
              <li>Deposits may be non-refundable depending on planning stage and supplier commitments.</li>
              <li>Cancellation terms will be specified in individual service agreements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-gold-50 mb-4">
              3. Client Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-2 text-ink-300 ml-2">
              <li>Clients must provide accurate event information.</li>
              <li>Access to venues must be arranged in advance.</li>
              <li>Final guest counts must be confirmed by the agreed deadline.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-gold-50 mb-4">
              4. Supplier Coordination
            </h2>
            <p className="text-ink-300">
              We work with trusted suppliers but are not liable for unforeseen supplier delays or third-party failures beyond our reasonable control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-gold-50 mb-4">
              5. Liability
            </h2>
            <p className="text-ink-300 mb-3">
              Metanoia Events Collective (Pty) Ltd shall not be held responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-ink-300 ml-2">
              <li>Force majeure events (weather, power outages, government restrictions, etc.)</li>
              <li>Guest-related damages</li>
              <li>Circumstances beyond reasonable control</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-gold-50 mb-4">
              6. Changes to Services
            </h2>
            <p className="text-ink-300">
              Any changes to event scope may affect pricing and must be confirmed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-gold-50 mb-4">
              7. Governing Law
            </h2>
            <p className="text-ink-300">
              These terms are governed by the laws of the Republic of South Africa.
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

export default TermsAndConditions

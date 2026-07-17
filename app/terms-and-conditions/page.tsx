import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Metanoia Events Collective (Pty) Ltd',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-cream/80">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-brand-gold hover:text-brand-gold/80"
        >
          <span aria-hidden className="text-lg">
            ←
          </span>
          Back to Home
        </Link>

        <header className="mb-12">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Terms and Conditions
          </h1>
          <p className="mt-2 text-sm text-brand-cream/50">
            Metanoia Events Collective (Pty) Ltd · Reg No: 2026/059643/07 · VAT
            No: 9303951264
          </p>
        </header>

        <p className="mb-10 leading-relaxed">
          By engaging our services, you agree to the following terms:
        </p>

        <article className="space-y-8 text-base leading-relaxed">
          <section>
            <h2 className="mb-4 font-display text-xl font-semibold text-white">
              1. Booking & Payments
            </h2>
            <ul className="ml-2 list-inside list-disc space-y-2">
              <li>A booking is confirmed once a deposit has been received.</li>
              <li>
                The remaining balance must be paid prior to the event date
                unless otherwise agreed in writing.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-display text-xl font-semibold text-white">
              2. Cancellations
            </h2>
            <ul className="ml-2 list-inside list-disc space-y-2">
              <li>
                Deposits may be non-refundable depending on planning stage and
                supplier commitments.
              </li>
              <li>
                Cancellation terms will be specified in individual service
                agreements.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-display text-xl font-semibold text-white">
              3. Client Responsibilities
            </h2>
            <ul className="ml-2 list-inside list-disc space-y-2">
              <li>Clients must provide accurate event information.</li>
              <li>Access to venues must be arranged in advance.</li>
              <li>
                Final guest counts must be confirmed by the agreed deadline.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-display text-xl font-semibold text-white">
              4. Supplier Coordination
            </h2>
            <p>
              We work with trusted suppliers but are not liable for unforeseen
              supplier delays or third-party failures beyond our reasonable
              control.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-xl font-semibold text-white">
              5. Liability
            </h2>
            <p className="mb-3">
              Metanoia Events Collective (Pty) Ltd shall not be held responsible
              for:
            </p>
            <ul className="ml-2 list-inside list-disc space-y-2">
              <li>
                Force majeure events (weather, power outages, government
                restrictions, etc.)
              </li>
              <li>Guest-related damages</li>
              <li>Circumstances beyond reasonable control</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-display text-xl font-semibold text-white">
              6. Changes to Services
            </h2>
            <p>
              Any changes to event scope may affect pricing and must be
              confirmed in writing.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-xl font-semibold text-white">
              7. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of the Republic of South
              Africa.
            </p>
          </section>
        </article>

        <div className="mt-14 border-t border-white/10 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-gold hover:text-brand-gold/80"
          >
            <span aria-hidden className="text-lg">
              ←
            </span>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

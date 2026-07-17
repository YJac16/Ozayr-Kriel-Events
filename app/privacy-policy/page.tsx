import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Metanoia Events Collective (Pty) Ltd',
}

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-brand-cream/50">
            Metanoia Events Collective (Pty) Ltd · Reg No: 2026/059643/07 · VAT
            No: 9303951264
          </p>
        </header>

        <article className="space-y-8 text-base leading-relaxed">
          <p>
            At Metanoia Events Collective (Pty) Ltd, we respect your privacy and
            are committed to protecting your personal information in accordance
            with applicable South African data protection laws.
          </p>

          <section>
            <h2 className="mb-4 font-display text-xl font-semibold text-white">
              1. Information We Collect
            </h2>
            <p className="mb-3">
              We may collect the following information when you contact us or
              book our services:
            </p>
            <ul className="ml-2 list-inside list-disc space-y-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Event details</li>
              <li>Billing information</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-display text-xl font-semibold text-white">
              2. How We Use Your Information
            </h2>
            <p className="mb-3">Your information is used to:</p>
            <ul className="ml-2 list-inside list-disc space-y-2">
              <li>Respond to enquiries</li>
              <li>Provide quotations and event planning services</li>
              <li>Manage bookings and payments</li>
              <li>Improve our services</li>
              <li>Communicate important updates</li>
            </ul>
            <p className="mt-4">
              We do not sell or share your personal information with third
              parties, except where required by law or necessary to deliver our
              services (e.g., trusted suppliers).
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-xl font-semibold text-white">
              3. Data Protection
            </h2>
            <p>
              We take reasonable technical and organisational measures to
              protect your information from unauthorised access, misuse, or
              loss.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-xl font-semibold text-white">
              4. Cookies
            </h2>
            <p>
              Our website may use basic cookies to improve user experience and
              website performance.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-xl font-semibold text-white">
              5. Your Rights
            </h2>
            <p>
              You may request access, correction, or deletion of your personal
              information by contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-xl font-semibold text-white">
              6. Contact
            </h2>
            <p>
              For any privacy-related queries, please contact:
              <br />
              <span className="font-medium text-brand-gold">
                Metanoia Events Collective (Pty) Ltd
              </span>
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

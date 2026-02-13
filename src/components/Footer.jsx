import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-ink-100 text-ink-800 border-t border-ink-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="text-center md:text-center space-y-6">
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-x-6 gap-y-1 text-sm tracking-wide">
            <span>© Metanoia Events Collective (Pty) Ltd</span>
            <span className="hidden sm:inline text-ink-400">·</span>
            <span>All Rights Reserved</span>
            <span className="hidden sm:inline text-ink-400">·</span>
            <span>Established 2026</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-x-6 gap-y-1 text-sm text-ink-600">
            <span>VAT No: 9303951264</span>
            <span className="hidden sm:inline text-ink-400">·</span>
            <span>Reg No: 2026/059643/07</span>
          </div>
          <nav className="flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-8 pt-2" aria-label="Legal">
            <Link
              to="/privacy-policy"
              className="text-sm text-ink-700 hover:text-ink-900 underline underline-offset-2 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-sm text-ink-700 hover:text-ink-900 underline underline-offset-2 transition-colors"
            >
              Terms & Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer

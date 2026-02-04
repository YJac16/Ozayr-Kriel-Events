import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="min-h-screen flex flex-col items-center justify-center p-8 bg-ink-950 text-gold-50"
          style={{ fontFamily: 'sans-serif' }}
        >
          <h1 className="text-2xl font-bold text-gold-400 mb-4">Something went wrong</h1>
          <pre className="bg-ink-800 border border-ink-700 text-gold-200 p-4 rounded-lg overflow-auto max-w-full mb-6">
            {this.state.error?.toString()}
          </pre>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gold-500 text-ink-950 font-semibold rounded-lg hover:bg-gold-400 transition-colors"
          >
            Reload Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

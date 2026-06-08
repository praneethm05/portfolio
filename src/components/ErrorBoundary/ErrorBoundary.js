import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      return (
        <div className='error-boundary'>
          <p>Something went wrong loading this section. Please refresh the page.</p>
        </div>
      )
    }
    return children
  }
}

export default ErrorBoundary

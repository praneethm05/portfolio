import { useContext, Suspense, lazy } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import './App.css'

const About    = lazy(() => import('./components/About/About'))
const Stats    = lazy(() => import('./components/Stats/Stats'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const Skills   = lazy(() => import('./components/Skills/Skills'))
const Contact  = lazy(() => import('./components/Contact/Contact'))

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <ErrorBoundary>
          <Suspense fallback={<div className='loading'>Loading...</div>}>
            <About />
            <Stats />
            <Projects />
            <Skills />
            <Contact />
          </Suspense>
        </ErrorBoundary>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App

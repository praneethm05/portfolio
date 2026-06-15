import { useContext, Suspense, lazy } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import './App.css'

const About = lazy(() => import('./components/About/About'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const Experience = lazy(() => import('./components/Experience/Experience'))
const Skills = lazy(() => import('./components/Skills/Skills'))
const Contact = lazy(() => import('./components/Contact/Contact'))

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <About />
          <Projects />
          <Experience />
          <Skills />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Contact />
      </Suspense>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App

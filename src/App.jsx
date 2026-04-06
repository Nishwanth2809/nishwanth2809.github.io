import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import FocusAreas from './components/FocusAreas'
import Projects from './components/Projects'
import GitHubStats from './components/GitHubStats'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Apply dark class to body
    if (isDark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDark])

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0)
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)')
    if (!mediaQuery.matches) {
      return undefined
    }

    const root = document.documentElement
    const interactiveSelector = 'a, button, .project-card, .featured-card, .focus-card, .contact-card, .skills-card'

    const handlePointerMove = (event) => {
      root.style.setProperty('--cursor-x', `${event.clientX}px`)
      root.style.setProperty('--cursor-y', `${event.clientY}px`)
      root.style.setProperty('--cursor-opacity', '1')
    }

    const handlePointerOver = (event) => {
      const isInteractive = event.target instanceof Element && event.target.closest(interactiveSelector)
      root.style.setProperty('--cursor-scale', isInteractive ? '1.7' : '1')
    }

    const handlePointerLeave = () => {
      root.style.setProperty('--cursor-opacity', '0')
      root.style.setProperty('--cursor-scale', '1')
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerover', handlePointerOver)
    window.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerover', handlePointerOver)
      window.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  const toggleTheme = () => setIsDark(prev => !prev)

  return (
    <div className="app">
      <div className="cursor-glow" aria-hidden="true"></div>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <FocusAreas />
        <Projects />
        <GitHubStats />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import GitHubStats from './components/GitHubStats'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollTop}
      aria-label="Back to top"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  )
}

function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDark])

  useEffect(() => {
    window.scrollTo(0, 0)
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)')
    if (!mediaQuery.matches) return undefined

    const root = document.documentElement
    const interactiveSelector = 'a, button, .project-card, .skills-card, .contact-card'

    const handlePointerMove = (e) => {
      root.style.setProperty('--cursor-x', `${e.clientX}px`)
      root.style.setProperty('--cursor-y', `${e.clientY}px`)
      root.style.setProperty('--cursor-opacity', '1')
    }

    const handlePointerOver = (e) => {
      const isInteractive = e.target instanceof Element && e.target.closest(interactiveSelector)
      root.style.setProperty('--cursor-scale', isInteractive ? '1.5' : '1')
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
      <div className="cursor-glow" aria-hidden="true" />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <GitHubStats /> */}
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App

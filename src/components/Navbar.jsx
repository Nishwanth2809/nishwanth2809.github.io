import { useState, useEffect } from 'react'

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Navbar({ isDark, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)

      const sections = document.querySelectorAll('section')
      const scrollPosition = window.scrollY + window.innerHeight
      const pageHeight = document.documentElement.scrollHeight

      if (scrollPosition >= pageHeight - 5) {
        setActiveSection('contact')
        return
      }

      sections.forEach(section => {
        const top = section.offsetTop - 160
        const height = section.offsetHeight
        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    const close = (e) => {
      if (!e.target.closest('.navbar')) setMenuOpen(false)
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [menuOpen])

  const handleNavClick = (item) => {
    setMenuOpen(false)
    const el = document.getElementById(item.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="navbar-logo">Nishwanth</div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={activeSection === item.toLowerCase() ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item)
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? (
              // Sun icon
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              // Moon icon
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={activeSection === item.toLowerCase() ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item)
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

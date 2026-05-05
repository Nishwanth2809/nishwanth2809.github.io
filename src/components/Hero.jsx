import { useEffect, useState } from 'react'

const phrases = [
  'Machine Learning Engineer',
  'Deep Learning Enthusiast',
  'Python Developer',
]

function useTypingEffect(phrases) {
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]
    let timeout

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex))
        setCharIndex(prev => prev + 1)
      }, 70)
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex - 1))
        setCharIndex(prev => prev - 1)
      }, 40)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setPhraseIndex(prev => (prev + 1) % phrases.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex, phrases])

  return displayText
}

export default function Hero() {
  const displayText = useTypingEffect(phrases)

  return (
    <section id="home" className="hero-section">
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-content">
        <img
          src="/profile.png"
          alt="Nishwanth profile photo"
          className="profile-img"
        />

        <p className="hero-greeting">
          Hi there, I'm{' '}
          <span className="hero-greeting-name">Nishwanth</span>
          {' '}👋
        </p>

        <h1 className="hero-name">
          AI/ML Engineer &amp; <span className="highlight">Developer</span>
        </h1>

        <p className="hero-subtitle">
          Final-year CS student&nbsp;·&nbsp;AI/ML Engineer&nbsp;·&nbsp;Open to SDE &amp; ML roles
        </p>

        <p className="hero-typing" aria-label={displayText}>
          <span className="typing-prefix">▶&nbsp;</span>
          <span className="typing-text">{displayText}</span>
          <span className="hero-caret" aria-hidden="true" />
        </p>

        <div className="hero-buttons">
          <a
            href="/Nishwanth_Resume.pdf"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            id="download-resume-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
          <a
            href="#projects"
            className="btn-outline"
            id="view-work-btn"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="proof-strip" aria-label="Quick stats">
          <div className="proof-item">
            <span className="proof-number">10+</span>
            <span className="proof-label">Projects</span>
          </div>
          <div className="proof-item">
            <span className="proof-number">5+</span>
            <span className="proof-label">Certifications</span>
          </div>
          <div className="proof-item">
            <span className="proof-number">✓</span>
            <span className="proof-label">Open to Work</span>
          </div>
        </div>
      </div>
    </section>
  )
}

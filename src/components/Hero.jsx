import { useEffect, useState } from 'react'

const heroTitle = 'AI, Machine Learning & Full-Stack Developer'

export default function Hero() {
  const [typedTitle, setTypedTitle] = useState('')

  useEffect(() => {
    let index = 0
    const interval = window.setInterval(() => {
      index += 1
      setTypedTitle(heroTitle.slice(0, index))

      if (index >= heroTitle.length) {
        window.clearInterval(interval)
      }
    }, 42)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero-section">
      <div className="hero-glow"></div>
      <div className="hero-content">
        <img
          src="/profile.png"
          alt="Nishwanth profile photo"
          className="profile-img"
        />
        <p className="hero-greeting">Welcome to my portfolio</p>
        <h1 className="hero-name">
          Hello, I&apos;m <span className="highlight">Nishwanth</span>
        </h1>
        <p className="hero-tagline">
          Building AI systems that solve real-world problems
        </p>
        <p className="hero-title" aria-label={heroTitle}>
          <span>{typedTitle}</span>
          <span className="hero-caret" aria-hidden="true"></span>
        </p>
        <p className="hero-subtitle">
          I turn AI, machine learning, and full-stack engineering into deployable products with clear impact.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a
            href="/Nishwanth_Resume.pdf"
            className="btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
        <div className="proof-strip" aria-label="Proof of work">
          <div className="proof-item">5+ AI Projects</div>
          <div className="proof-item">3+ Deployed Apps</div>
          <div className="proof-item">Research Work</div>
        </div>
      </div>
    </section>
  )
}

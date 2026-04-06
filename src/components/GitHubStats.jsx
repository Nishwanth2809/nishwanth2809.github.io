import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function GitHubStats() {
  const ref = useScrollReveal()
  const [showFallback, setShowFallback] = useState(false)

  const handleImageError = (event) => {
    event.currentTarget.style.display = 'none'
    setShowFallback(true)
  }

  return (
    <section id="stats" className="section stats-section">
      <div ref={ref} className="scroll-reveal">
        <p className="stats-eyebrow">GitHub activity</p>
        <h2 className="section-title">Code <span className="accent">Signals</span></h2>
        <hr className="section-divider" />
        <p className="stats-intro">
          A stronger proof layer showing profile stats, coding streak, and language mix together.
        </p>

        <div className="github-section">
          <img
            src="https://github-readme-stats.vercel.app/api?username=nishwanth2809&show_icons=true&theme=tokyonight&cache_seconds=1800"
            alt="GitHub Stats"
            loading="lazy"
            onError={handleImageError}
          />

          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=nishwanth2809&theme=tokyonight"
            alt="GitHub Streak"
            loading="lazy"
            onError={handleImageError}
          />

          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=nishwanth2809&layout=compact&theme=tokyonight&cache_seconds=1800"
            alt="Top Languages"
            loading="lazy"
            onError={handleImageError}
          />
        </div>

        <p id="fallback" className="github-fallback" style={{ display: showFallback ? 'block' : 'none' }}>
          GitHub stats unavailable. <a href="https://github.com/nishwanth2809" target="_blank" rel="noopener noreferrer">View Profile</a>
        </p>
      </div>
    </section>
  )
}

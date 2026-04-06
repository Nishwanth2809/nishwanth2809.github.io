import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const githubUsername = 'Nishwanth2809'

export default function GitHubStats() {
  const ref = useScrollReveal()
  const [showFallback, setShowFallback] = useState(false)

  const handleImageError = (event) => {
    event.currentTarget.style.display = 'none'
    setShowFallback(true)
  }

  return (
    <section id="stats" className="section github">
      <div ref={ref} className="scroll-reveal">
        <h2 className="section-title">GitHub Activity</h2>
        <p className="github-desc">
          Consistent contributions and real-world development work.
        </p>

        <div className="github-section">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=tokyonight&cache_seconds=1800`}
            alt="GitHub Stats"
            loading="lazy"
            onError={handleImageError}
          />

          <img
            src={`https://streak-stats.demolab.com/?user=${githubUsername}&theme=tokyonight`}
            alt="GitHub Streak"
            loading="lazy"
            onError={handleImageError}
          />
        </div>

        <p className="github-context">
          Actively building AI systems, full-stack applications, and experimental projects.
        </p>

        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn secondary"
        >
          View Full GitHub -&gt;
        </a>

        <p id="fallback" className="github-fallback" style={{ display: showFallback ? 'block' : 'none' }}>
          GitHub stats unavailable -
          {' '}
          <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer">View Profile</a>
        </p>
      </div>
    </section>
  )
}

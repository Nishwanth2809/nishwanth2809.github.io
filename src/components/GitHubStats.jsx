import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const username = 'nishwanth2809'
const statsImage = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight`

export default function GitHubStats() {
  const ref = useScrollReveal()
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <section id="stats" className="section stats-section">
      <div ref={ref} className="scroll-reveal">
        <p className="stats-eyebrow">GitHub activity</p>
        <h2 className="section-title">Code <span className="accent">Signals</span></h2>
        <hr className="section-divider" />
        <p className="stats-intro">
          A centered snapshot of the profile activity and code footprint behind this portfolio.
        </p>

        <div className="github-stats">
          {!imageFailed ? (
            <img
              src={statsImage}
              alt="GitHub stats for nishwanth2809"
              loading="lazy"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="github-stats-fallback">
              <p>GitHub stats image is temporarily unavailable.</p>
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Open GitHub Profile
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

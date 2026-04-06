import { useScrollReveal } from '../hooks/useScrollReveal'

const username = 'Nishwanth2809'

const statsImage = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&theme=transparent&title_color=818cf8&text_color=94a3b8&icon_color=818cf8&bg_color=00000000`
const langImage = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&theme=transparent&title_color=818cf8&text_color=94a3b8&bg_color=00000000`

export default function GitHubStats() {
  const ref = useScrollReveal()

  return (
    <section id="stats" className="section stats-section">
      <div ref={ref} className="scroll-reveal">
        <p className="stats-eyebrow">GitHub activity</p>
        <h2 className="section-title">Code <span className="accent">Signals</span></h2>
        <hr className="section-divider" />
        <p className="stats-intro">
          A quick look at the repositories, languages, and coding activity behind the projects in this portfolio.
        </p>

        <div className="stats-grid">
          <article className="stats-card">
            <img src={statsImage} alt="GitHub stats for Nishwanth2809" className="stats-image" />
          </article>

          <article className="stats-card">
            <img src={langImage} alt="Top languages used by Nishwanth2809" className="stats-image" />
          </article>
        </div>

        <div className="stats-actions">
          <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Visit GitHub
          </a>
          <a href={`https://github.com/${username}?tab=repositories`} target="_blank" rel="noopener noreferrer" className="btn-outline">
            View Repositories
          </a>
        </div>
      </div>
    </section>
  )
}

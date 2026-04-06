import { useEffect, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const username = 'nishwanth2809'
const githubProfile = `https://github.com/nishwanth2809`
const githubRepos = `${githubProfile}?tab=repositories`

function formatCompactNumber(value) {
  return new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(value ?? 0)
}

function buildLanguageSummary(repos) {
  const counts = repos.reduce((acc, repo) => {
    if (!repo.language) {
      return acc
    }

    acc[repo.language] = (acc[repo.language] || 0) + 1
    return acc
  }, {})

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
}

export default function GitHubStats() {
  const ref = useScrollReveal()
  const [githubData, setGithubData] = useState({
    loading: true,
    error: false,
    user: null,
    repos: [],
  })

  useEffect(() => {
    const controller = new AbortController()

    async function loadGitHubData() {
      try {
        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, {
            headers: { Accept: 'application/vnd.github+json' },
            signal: controller.signal,
          }),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
            headers: { Accept: 'application/vnd.github+json' },
            signal: controller.signal,
          }),
        ])

        if (!userResponse.ok || !reposResponse.ok) {
          throw new Error('GitHub request failed')
        }

        const [user, repos] = await Promise.all([
          userResponse.json(),
          reposResponse.json(),
        ])

        const sourceRepos = repos.filter(repo => !repo.fork)

        setGithubData({
          loading: false,
          error: false,
          user,
          repos: sourceRepos,
        })
      } catch (error) {
        if (error.name === 'AbortError') {
          return
        }

        setGithubData({
          loading: false,
          error: true,
          user: null,
          repos: [],
        })
      }
    }

    loadGitHubData()

    return () => controller.abort()
  }, [])

  const { loading, error, user, repos } = githubData
  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)
  const languages = buildLanguageSummary(repos)
  const recentRepos = [...repos]
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, 4)

  const metrics = [
    { label: 'Public repos', value: loading ? '...' : formatCompactNumber(user?.public_repos ?? repos.length) },
    { label: 'Followers', value: loading ? '...' : formatCompactNumber(user?.followers ?? 0) },
    { label: 'Stars', value: loading ? '...' : formatCompactNumber(totalStars) },
  ]

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
            <p className="stats-card-kicker">Profile Snapshot</p>
            <div className="stats-metrics">
              {metrics.map((metric) => (
                <div className="stats-metric" key={metric.label}>
                  <span className="stats-metric-value">{metric.value}</span>
                  <span className="stats-metric-label">{metric.label}</span>
                </div>
              ))}
            </div>
            <p className="stats-card-copy">
              {error
                ? 'GitHub live data is temporarily unavailable, but the profile and repositories are still linked below.'
                : `Tracking ${repos.length || user?.public_repos || 0} source repositories with recent work centered around AI, web apps, and product-focused builds.`}
            </p>
          </article>

          <article className="stats-card">
            <p className="stats-card-kicker">Language Mix</p>
            <div className="stats-language-list">
              {loading && <span className="stats-pill">Loading languages...</span>}
              {!loading && !error && languages.length === 0 && <span className="stats-pill">No language data yet</span>}
              {!loading && !error && languages.map(([language, count]) => (
                <span className="stats-pill" key={language}>
                  {language} <strong>{count}</strong>
                </span>
              ))}
              {error && <span className="stats-pill">Live stats unavailable</span>}
            </div>

            <div className="stats-recent">
              <p className="stats-recent-title">Recently updated</p>
              <div className="stats-repo-list">
                {loading && <p className="stats-empty">Loading repository activity...</p>}
                {!loading && !error && recentRepos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stats-repo-item"
                  >
                    <span>{repo.name}</span>
                    <small>{repo.language || 'Code'}</small>
                  </a>
                ))}
                {!loading && error && <p className="stats-empty">GitHub activity could not be loaded right now.</p>}
              </div>
            </div>
          </article>
        </div>

        <div className="stats-actions">
          <a href={githubProfile} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Visit GitHub
          </a>
          <a href={githubRepos} target="_blank" rel="noopener noreferrer" className="btn-outline">
            View Repositories
          </a>
        </div>
      </div>
    </section>
  )
}

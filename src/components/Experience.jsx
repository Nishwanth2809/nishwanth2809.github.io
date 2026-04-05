import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" className="section">
      <div ref={ref} className="scroll-reveal">
        <h2 className="section-title">My <span className="accent">Experience</span></h2>
        <hr className="section-divider" />

        <div className="experience-card">
          <h4>Design Member</h4>
          <p className="experience-org">SDC (Sreyas Developer's Conference)</p>

          <ul className="experience-list">
            <li>Designed posters, banners, and digital content for events</li>
            <li>Collaborated with team members to maintain visual consistency</li>
            <li>Improved event outreach and online engagement</li>
          </ul>

          <div className="experience-meta">
            <span>
              <strong>Event: </strong>
              <a href="https://sreyasdevconf.in/team" target="_blank" rel="noopener noreferrer">
                SDC Team Page →
              </a>
            </span>
            <span><strong>Tools:</strong> Canva</span>
          </div>
        </div>

        <div className="experience-card" style={{ marginTop: '24px' }}>
          <h4>Full Stack Web Development Intern</h4>
          <p className="experience-org">ElevanceSkills &nbsp;·&nbsp; Apr 2026 – Oct 2026 (6 Months)</p>

          <ul className="experience-list">
            <li>Working on real-time projects in a dynamic full stack development environment</li>
            <li>Building and deploying web applications using modern frontend and backend technologies</li>
            <li>Engaging in hands-on tasks with flexible working hours and deadline-driven deliverables</li>
          </ul>

          <div className="experience-meta">
            <span>
              <strong>Certificate: </strong>
              <a href="/ElevanceSkills-Full  Stack Web Development-Intern-OL.pdf" target="_blank" rel="noopener noreferrer">
                View Offer Letter →
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

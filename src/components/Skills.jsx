import { useScrollReveal } from '../hooks/useScrollReveal'

const skillGroups = [
  {
    title: 'AI & Machine Learning',
    icon: '🤖',
    skills: ['Machine Learning Fundamentals', 'NLP Basics', 'Speech Processing (TTS / STT)', 'Model Training & Evaluation'],
  },
  {
    title: 'Programming & Core CS',
    icon: '💻',
    skills: ['Java (OOPS)', 'Python', 'C', 'JavaScript', 'DSA (Java)', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend & APIs',
    icon: '⚡',
    skills: ['Flask', 'FastAPI', 'REST APIs', 'API Integration'],
  },
  {
    title: 'Deployment',
    icon: '☁️',
    skills: ['GitHub Pages', 'Render', 'Custom Domain Setup', 'HTTPS / SSL'],
  },
  {
    title: 'Tools',
    icon: '🔧',
    skills: ['VS Code', 'Linux (Basic)', 'Canva', 'Git & GitHub', 'Figma', 'UI/UX Principles'],
  },
]

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section id="skills" className="section skills-section">
      <div ref={ref} className="scroll-reveal">
        <h2 className="section-title">Technical <span className="accent">Skills</span></h2>
        <hr className="section-divider" />

        <div className="skill-groups">
          {skillGroups.map((group, i) => (
            <div className="skill-group" key={i}>
              <div className="skill-group-header">
                <span className="skill-group-icon">{group.icon}</span>
                <h4>{group.title}</h4>
              </div>
              <div className="skill-tags">
                {group.skills.map((skill, j) => (
                  <span 
                    className="skill-tag" 
                    key={j} 
                    style={{ animationDelay: `${j * 0.06}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

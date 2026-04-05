import { useScrollReveal } from '../hooks/useScrollReveal'

const skillGroups = [
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    color: 'purple',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    skills: [
      'Machine Learning Fundamentals',
      'NLP Basics',
      'Speech Processing (TTS / STT)',
      'Model Training & Evaluation',
      'PyTorch',
      'scikit-learn',
      'Keras',
      'Streamlit',
    ],
  },
  {
    id: 'programming',
    title: 'Programming & Core CS',
    color: 'blue',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline
          points="16 18 22 12 16 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="8 6 2 12 8 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    skills: ['Java (OOPS)', 'Python', 'C', 'JavaScript', 'DSA (Java)', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    id: 'frontend',
    title: 'Frontend & Frameworks',
    color: 'rose',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 5h16v10H4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 19h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    skills: ['React', 'Angular.js', 'React Native', 'Vite', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    title: 'Backend, Cloud & APIs',
    color: 'teal',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="2"
          y="3"
          width="20"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    skills: ['Node.js', 'Flask', 'FastAPI', 'REST APIs', 'API Integration', 'Firebase', 'Nginx', 'Vercel'],
  },
  {
    id: 'data',
    title: 'Databases & Data Tools',
    color: 'emerald',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="7" ry="3" stroke="currentColor" strokeWidth="2" />
        <path
          d="M5 5v6c0 1.66 3.13 3 7 3s7-1.34 7-3V5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M5 11v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    skills: ['MongoDB', 'SQLite', 'NumPy', 'Pandas', 'Matplotlib', 'Power BI'],
  },
  {
    id: 'deployment',
    title: 'Deployment',
    color: 'amber',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline
          points="22 12 18 12 15 21 9 3 6 12 2 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    skills: ['GitHub Pages', 'Render', 'HTTPS / SSL'],
  },
  {
    id: 'tools',
    title: 'Tools & Design',
    color: 'gray',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    skills: ['VS Code', 'Linux', 'Canva', 'Git & GitHub', 'Figma', 'Adobe XD', 'Postman', 'UI/UX Principles'],
  },
]

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section id="skills" className="section skills-section">
      <div ref={ref} className="scroll-reveal">
        <p className="skills-eyebrow">What I work with</p>
        <h2 className="section-title">Technical <span className="accent">Skills</span></h2>
        <hr className="section-divider" />

        <div className="skills-card-grid">
          {skillGroups.map((group) => (
            <article className={`skills-card skills-card-${group.color}`} key={group.id}>
              <div className="skills-card-icon">{group.icon}</div>
              <p className="skills-card-title">{group.title}</p>
              <div className="skills-card-tags">
                {group.skills.map((skill, index) => (
                  <span
                    className="skills-card-tag"
                    key={skill}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

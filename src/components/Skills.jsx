import { useScrollReveal } from '../hooks/useScrollReveal'

const skillGroups = [
  {
    title: 'AI & Machine Learning',
    icon: 'AI',
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
    title: 'Programming & Core CS',
    icon: 'CS',
    skills: ['Java (OOPS)', 'Python', 'C', 'JavaScript', 'DSA (Java)', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend & Frameworks',
    icon: 'UI',
    skills: ['React', 'Angular.js', 'React Native', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'Backend, Cloud & APIs',
    icon: 'API',
    skills: ['Node.js', 'Flask', 'FastAPI', 'REST APIs', 'API Integration', 'Firebase', 'Nginx', 'Vercel'],
  },
  {
    title: 'Databases & Data Tools',
    icon: 'DB',
    skills: ['MongoDB', 'SQLite', 'NumPy', 'Pandas', 'Matplotlib', 'Power BI'],
  },
  {
    title: 'Deployment',
    icon: 'DEP',
    skills: ['GitHub Pages', 'Render', 'Custom Domain Setup', 'HTTPS / SSL'],
  },
  {
    title: 'Tools & Design',
    icon: 'TL',
    skills: ['VS Code', 'Linux (Basic)', 'Canva', 'Git & GitHub', 'Figma', 'Adobe XD', 'Postman', 'UI/UX Principles'],
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

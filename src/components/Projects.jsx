import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'AI Medical Report Analyzer',
    description:
      'Built an AI-powered application that analyzes medical reports, extracts key clinical insights, and presents a clear summary to improve readability and decision support.',
    tech: ['JavaScript', 'React', 'Node.js', 'Express', 'OCR (Tesseract)', 'Docker', 'Render', 'Vercel', 'REST APIs'],
    github: 'https://github.com/Nishwanth2809/AI-Medical-Report-Analyzer',
    live: 'https://medical-report-analyzer-three.vercel.app/',
  },
  {
    title: 'Mood-Based Music Recommendation System',
    description:
      'Built an AI-driven application that analyzes user mood from text and voice input using NLP techniques and recommends personalized music through Spotify API.',
    tech: ['Python', 'NLP', 'Flask', 'Spotify API', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/nishwanth2809/moodstream',
    live: 'https://moodstream-q4lr.onrender.com',
  },
  {
    title: 'Voice Chat AI Assistant',
    description:
      'Developed a speech-based AI assistant capable of converting voice input to text and generating intelligent responses using a FastAPI backend.',
    tech: ['Python', 'FastAPI', 'Speech Processing', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/nishwanth2809/Text-to-Speech',
    live: 'https://nishwanth2809.github.io/Text-to-Speech/',
  },
]

export default function Projects() {
  const ref = useScrollReveal()

  return (
    <section id="projects" className="section">
      <div ref={ref} className="scroll-reveal">
        <h2 className="section-title">My <span className="accent">Projects</span></h2>
        <hr className="section-divider" />

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className="project-card" key={i}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, j) => (
                  <span key={j}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub →
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

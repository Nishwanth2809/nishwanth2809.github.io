import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'Deepfake Detection System',
    desc: 'Real-time deepfake detection using ResNet18 + OpenCV.',
    highlights: ['~90%+ accuracy', 'Real-time inference', 'Face-level analysis'],
  },
  {
    title: 'AI Attention Monitoring System',
    desc: 'Live attention scoring from gaze, blink rate, and head pose signals.',
    highlights: ['Multi-signal scoring', 'Webcam-ready pipeline', 'Session history tracking'],
  },
  {
    title: 'AI Medical Report Analyzer',
    desc: 'OCR-driven report analysis that turns medical documents into simpler insights.',
    highlights: ['OCR + AI workflow', 'Full-stack deployment', 'Readable summaries'],
  },
  {
    title: 'Mood-Based Music Recommendation System',
    desc: 'Mood-aware music recommendations from text and voice input.',
    highlights: ['Text + voice input', 'Spotify integration', 'Personalized recommendations'],
  },
  {
    title: 'Voice Chat AI Assistant',
    desc: 'Speech-first assistant with real-time text conversion and AI responses.',
    highlights: ['FastAPI backend', 'Voice-driven flow', 'Real-time responses'],
  },
]

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p className="desc">{project.desc}</p>
      <ul className="highlights">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  )
}

export default function Projects() {
  const ref = useScrollReveal(0.05)

  return (
    <section id="projects" className="section projects-section">
      <div ref={ref} className="scroll-reveal">
        <p className="projects-eyebrow">Selected builds</p>
        <h2 className="section-title">My <span className="accent">Projects</span></h2>
        <hr className="section-divider" />
        <p className="projects-intro">
          A scan-friendly view of the AI and product systems I have built around real-world use cases.
        </p>

        <div className="projects-grid projects-grid-scan">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

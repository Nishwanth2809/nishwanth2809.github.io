import { useScrollReveal } from '../hooks/useScrollReveal'

const featuredProjects = [
  {
    title: 'Deepfake Detection System',
    preview: '/results/deepfake.png',
    summary: 'Real-time deepfake detection using ResNet18 + OpenCV',
    chips: ['Python', 'OpenCV', 'ResNet18'],
    points: ['~90% accuracy', 'Real-time inference', 'Streamlit deployment'],
  },
  {
    title: 'AI Medical Report Analyzer',
    preview: '/results/medical.png',
    summary: 'Full-stack medical report analysis with OCR and AI workflows',
    chips: ['React', 'Node.js', 'OCR'],
    points: ['Healthcare use case', 'Readable AI summaries', 'Deployed product'],
  },
  {
    title: 'Mood-Based Music Recommendation',
    preview: '/results/Mood.png',
    summary: 'NLP-powered music recommendations connected to Spotify',
    chips: ['Python', 'NLP', 'Spotify API'],
    points: ['Mood detection', 'API integration', 'Interactive experience'],
  },
]

const projectCards = [
  {
    title: 'AI Attention Monitoring System',
    summary: 'Real-time attention tracking using computer vision',
    chips: ['OpenCV', 'MediaPipe', 'Flask'],
    points: ['Gaze + blink detection', 'Live attention score', 'Session tracking'],
  },
  {
    title: 'Voice Chat AI Assistant',
    summary: 'Voice-first assistant with real-time speech and AI replies',
    chips: ['FastAPI', 'Speech', 'Python'],
    points: ['Voice interaction', 'Fast response loop', 'Live AI replies'],
  },
]

function FeaturedCard({ project }) {
  return (
    <article className="featured-card">
      <img src={project.preview} alt={`${project.title} preview`} />
      <div className="featured-card-body">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="chips">
          {project.chips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>
        <ul>
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="chips">
        {project.chips.map((chip) => (
          <span key={chip}>{chip}</span>
        ))}
      </div>
      <ul>
        {project.points.map((point) => (
          <li key={point}>{point}</li>
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
        <p className="projects-eyebrow">Proof through shipping</p>
        <h2 className="section-title">Featured <span className="accent">Work</span></h2>
        <hr className="section-divider" />
        <p className="projects-intro">
          The projects below show how I turn AI ideas into working products with real interfaces, deployment, and measurable outcomes.
        </p>

        <section className="featured-work-section">
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <FeaturedCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <div className="project-scan-header">
          <h3>More Builds</h3>
          <p>Compact snapshots of additional systems across AI, NLP, and real-time apps.</p>
        </div>

        <div className="project-scan-grid">
          {projectCards.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

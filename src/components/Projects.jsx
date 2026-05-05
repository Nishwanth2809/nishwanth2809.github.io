import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'Brahmi Script Recognizer',
    problem: 'Ancient Brahmi characters are largely unreadable by modern OCR tools.',
    description:
      'AI-powered web app that recognizes ancient Brahmi script from uploaded images and transliterates them into Telugu, Tamil, and Devanagari/Hindi.',
    metric: '94% recognition accuracy',
    category: 'Computer Vision',
    chips: ['React', 'Flask', 'TensorFlow', 'Keras', 'OpenCV'],
    githubUrl: 'https://github.com/Nishwanth2809/Brahmi-Script',
    liveDemoUrl: 'https://brahmi-script-evolution.vercel.app/',
  },
  {
    title: 'Deepfake Detection System',
    problem: 'Manipulated media is increasingly difficult to detect at scale.',
    description:
      'Real-time deepfake detection pipeline using ResNet18 and OpenCV, built for frame-level analysis and practical media authenticity verification.',
    metric: '92% detection accuracy',
    category: 'Deep Learning',
    chips: ['Python', 'OpenCV', 'ResNet18', 'PyTorch'],
    githubUrl: 'https://github.com/Nishwanth2809/Deep-Fake-Detection',
    liveDemoUrl: null,
  },
  {
    title: 'AI Medical Report Analyzer',
    problem: 'Complex medical reports are difficult for patients to understand.',
    description:
      'Full-stack system that extracts medical data with OCR and transforms complex healthcare documents into readable AI-generated summaries.',
    metric: 'Reduces report read time by 60%',
    category: 'ML',
    chips: ['React', 'Node.js', 'OCR', 'NLP'],
    githubUrl: 'https://github.com/Nishwanth2809/AI-Medical-Report-Analyzer',
    liveDemoUrl: 'https://medical-report-analyzer-three.vercel.app/',
  },
  {
    title: 'Mood-Based Music Recommendation',
    problem: 'Finding music that matches your current mood is tedious and manual.',
    description:
      'NLP-powered recommendation engine that detects user mood from text input and maps it to curated Spotify playlists in real time.',
    metric: '88% mood classification accuracy',
    category: 'NLP',
    chips: ['Python', 'NLP', 'Spotify API', 'Streamlit'],
    githubUrl: 'https://github.com/Nishwanth2809/Moodify-Let-Your-Mood-Choose-the-Music-',
    liveDemoUrl: 'https://moodstream-q4lr.onrender.com/',
  },
  {
    title: 'AI Attention Monitoring System',
    problem: 'Remote learning lacks tools to measure student engagement in real time.',
    description:
      'Computer vision attention tracker using gaze detection, blink analysis, and head pose estimation with live scores and session analytics.',
    metric: 'Real-time inference at 30 FPS',
    category: 'Computer Vision',
    chips: ['OpenCV', 'MediaPipe', 'Flask', 'React'],
    githubUrl: 'https://github.com/Nishwanth2809/AI-Attention',
    liveDemoUrl: null,
  },
  {
    title: 'Voice Chat AI Assistant',
    problem: 'Most AI assistants have high latency between voice input and response.',
    description:
      'Voice-first AI assistant with real-time speech recognition, NLP processing, synthesized responses, and a low-latency FastAPI response loop.',
    metric: '<300ms avg response latency',
    category: 'NLP',
    chips: ['FastAPI', 'Python', 'TTS', 'STT', 'Speech'],
    githubUrl: 'https://github.com/Nishwanth2809/Voice-Chat-AI-Assistant',
    liveDemoUrl: 'https://nishwanth2809.github.io/Voice-Chat-AI-Assistant/',
  },
]

const filters = ['All', 'ML', 'Deep Learning', 'NLP', 'Computer Vision']

export default function Projects() {
  const ref = useScrollReveal(0.05)
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="section projects-section">
      <div ref={ref} className="scroll-reveal">
        <div className="chronicles-header">
          <span className="chronicles-backdrop" aria-hidden="true">WORK</span>
          <h2 className="section-title">My Creations.</h2>
          <hr className="section-divider" />
        </div>

        {/* Filter bar */}
        <div className="filter-bar" role="group" aria-label="Filter projects by category">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
              aria-pressed={active === f}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="projects-grid">
          {filtered.map(project => (
            <article className="project-card" key={project.title}>
              <div className="project-card-header">
                <span className="project-category-badge">{project.category}</span>
                <div className="project-card-icons">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`} title="GitHub Repository">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`} title="Live Demo">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-problem"><strong>Problem:</strong> {project.problem}</p>
              <p className="project-desc">{project.description}</p>

              <div className="project-metric">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                {project.metric}
              </div>

              <div className="project-chips">
                {project.chips.map(chip => (
                  <span key={chip} className="project-chip">{chip}</span>
                ))}
              </div>

              <div className="project-actions">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-outline"
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    GitHub
                  </a>
                )}
                {project.liveDemoUrl ? (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-primary"
                  >
                    Live Demo
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                ) : (
                  <span className="project-btn project-btn-disabled">Coming Soon</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

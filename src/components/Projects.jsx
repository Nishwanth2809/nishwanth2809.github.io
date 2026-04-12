import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'Brahmi Script Recognizer',
    subtitle: 'Ancient Script Recognition',
    meta: 'AI Vision',
    preview: '/results/brahmi-preview.png',
    description:
      'AI-powered web application that recognizes ancient Brahmi script characters from uploaded images and transliterates them into Telugu, Tamil, and Devanagari/Hindi.',
    chips: ['React', 'Flask', 'TensorFlow/Keras', 'OpenCV'],
    githubUrl: 'https://github.com/Nishwanth2809/Brahmi-Script',
    liveDemoUrl: null,
  },
  {
    title: 'Deepfake Detection System',
    subtitle: 'Media Authenticity AI',
    meta: 'Computer Vision',
    preview: '/results/deepfake.png',
    description:
      'Real-time deepfake detection pipeline using ResNet18 and OpenCV, built for frame-level analysis and practical media authenticity verification.',
    chips: ['Python', 'OpenCV', 'ResNet18', 'PyTorch'],
    githubUrl: 'https://github.com/Nishwanth2809/Deep-Fake-Detection',
    liveDemoUrl: null,
  },
  {
    title: 'AI Medical Report Analyzer',
    subtitle: 'Healthcare Report Intelligence',
    meta: 'Full Stack AI',
    preview: '/results/medical.png',
    description:
      'Full-stack report analysis system that extracts medical data with OCR and transforms complex healthcare documents into readable AI-generated summaries.',
    chips: ['React', 'Node.js', 'OCR', 'NLP'],
    githubUrl: 'https://github.com/Nishwanth2809/AI-Medical-Report-Analyzer',
    liveDemoUrl: 'https://medical-report-analyzer-three.vercel.app/',
  },
  {
    title: 'Mood-Based Music Recommendation',
    subtitle: 'NLP Music Discovery',
    meta: 'NLP',
    preview: '/results/Mood.png',
    description:
      'NLP-powered recommendation experience that detects user mood from text input and maps it to curated Spotify playlists.',
    chips: ['Python', 'NLP', 'Spotify API', 'Streamlit'],
    githubUrl: 'https://github.com/Nishwanth2809/Moodify-Let-Your-Mood-Choose-the-Music-',
    liveDemoUrl: null,
  },
  {
    title: 'AI Attention Monitoring System',
    subtitle: 'Real-Time Focus Tracking',
    meta: 'Vision Analytics',
    preview: '/results/AI-Attention.png',
    description:
      'Computer vision attention tracker with gaze detection, blink analysis, head pose estimation, live scores, and session analytics.',
    chips: ['OpenCV', 'MediaPipe', 'Flask', 'React'],
    githubUrl: 'https://github.com/Nishwanth2809/AI-Attention',
    liveDemoUrl: null,
  },
  {
    title: 'Voice Chat AI Assistant',
    subtitle: 'Speech-First AI Interface',
    meta: 'Voice AI',
    preview: '/results/Text%20to%20Speech.png',
    description:
      'Voice-first AI assistant with real-time speech recognition, NLP processing, synthesized responses, and a low-latency FastAPI response loop.',
    chips: ['FastAPI', 'Python', 'TTS/STT', 'Speech'],
    githubUrl: 'https://github.com/Nishwanth2809/Voice-Chat-AI-Assistant',
    liveDemoUrl: 'https://nishwanth2809.github.io/Voice-Chat-AI-Assistant/',
  },
]

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="project-arrow"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  )
}

function ProjectLinks({ project }) {
  return (
    <div className="chronicle-links">
      {project.liveDemoUrl ? (
        <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
          <span>View Deployment</span>
          <ArrowIcon />
        </a>
      ) : (
        <span className="chronicle-link-disabled">Deployment Soon</span>
      )}

      {project.githubUrl ? (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <span>View Repository</span>
          <ArrowIcon />
        </a>
      ) : (
        <span className="chronicle-link-disabled">Repository Soon</span>
      )}
    </div>
  )
}

function ProjectChronicle({ project, index }) {
  const number = String(index + 1).padStart(2, '0')
  const isBrahmiProject = project.title === 'Brahmi Script Recognizer'

  return (
    <article className="project-chronicle">
      <div className={`chronicle-preview${isBrahmiProject ? ' chronicle-preview-screenshot' : ''}`}>
        <img src={project.preview} alt={`${project.title} preview`} />
        <div className="chronicle-preview-overlay"></div>
        <div className="chronicle-preview-chips">
          {project.chips.slice(0, 3).map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>
      </div>

      <div className="chronicle-copy">
        <div className="chronicle-heading">
          <span className="chronicle-meta">{number} // {project.meta}</span>
          <h3>{project.title}</h3>
          <h4>{project.subtitle}</h4>
        </div>
        <p>{project.description}</p>
        <ProjectLinks project={project} />
      </div>
    </article>
  )
}

export default function Projects() {
  const ref = useScrollReveal(0.05)

  return (
    <section id="projects" className="section projects-section">
      <div ref={ref} className="scroll-reveal">
        <div className="chronicles-header">
          <span className="chronicles-backdrop">WORK</span>
          <h2 className="section-title">My Creations.</h2>
          <hr className="section-divider" />
        </div>

        <div className="project-chronicles">
          {projects.map((project, index) => (
            <ProjectChronicle key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

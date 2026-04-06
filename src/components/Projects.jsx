import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'Deepfake Detection System',
    preview: '/results/deepfake.png',
    featured: true,
    whatItDoes: 'Real-time deepfake detection system leveraging ResNet18 and OpenCV for accurate facial manipulation analysis.',
    tech: ['Python', 'PyTorch', 'ResNet18', 'OpenCV', 'Streamlit', 'Deep Learning'],
    problem: 'Deepfake detection is difficult to do reliably through manual review alone.',
    built: 'ResNet18 + OpenCV pipeline with face extraction, preprocessing, and real-time inference.',
    result: '~90%+ accuracy and reduced manual verification through an interactive screening workflow.',
    depth: 'Optimized preprocessing and face-cropping stages to improve model robustness on noisy visual inputs.',
    github: 'https://github.com/Nishwanth2809/Deep-Fake-Detection',
    live: null,
  },
  {
    title: 'AI Attention Monitoring System',
    preview: '/results/AI-Attention.png',
    featured: false,
    whatItDoes: 'Computer vision system that tracks gaze, blink rate, and head pose to generate live attention scores.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Flask', 'SQLite', 'NumPy'],
    problem: 'Attention is hard to measure consistently during live online sessions.',
    built: 'A webcam-driven attention pipeline with gaze, blink, pose, scoring, and session history tracking.',
    result: 'Turned multiple real-time visual signals into one actionable attention metric.',
    depth: 'Tuned thresholding and scoring logic to keep attention output stable across changing webcam conditions.',
    github: 'https://github.com/Nishwanth2809/AI-Attention',
    live: null,
  },
  {
    title: 'AI Medical Report Analyzer',
    preview: '/results/medical.png',
    featured: true,
    whatItDoes: 'Full-stack application that extracts, analyzes, and simplifies medical reports using OCR and AI workflows.',
    tech: ['JavaScript', 'React', 'Node.js', 'Express', 'OCR', 'Docker', 'Render', 'Vercel'],
    problem: 'Medical reports are difficult for many users to interpret quickly and clearly.',
    built: 'A full pipeline for OCR extraction, backend processing, report summarization, and frontend delivery.',
    result: 'Deployed a live app that improves report readability and speeds up understanding of medical insights.',
    depth: 'Added backend normalization for inconsistent OCR output so downstream analysis stays more reliable.',
    github: 'https://github.com/Nishwanth2809/AI-Medical-Report-Analyzer',
    live: 'https://medical-report-analyzer-three.vercel.app/',
  },
  {
    title: 'Mood-Based Music Recommendation System',
    preview: '/results/Mood.png',
    featured: true,
    whatItDoes: 'AI-powered system that analyzes mood from text and voice inputs to recommend personalized music.',
    tech: ['Python', 'NLP', 'Flask', 'Spotify API', 'HTML', 'CSS', 'JavaScript'],
    problem: 'Users often want music that matches their mood without manually searching for tracks.',
    built: 'A mood classification workflow connected to Spotify recommendations with an interactive user interface.',
    result: 'Delivered personalized song suggestions in real time from emotional input.',
    depth: 'Integrated text and voice input paths into one recommendation flow to keep outputs consistent across modalities.',
    github: 'https://github.com/nishwanth2809/moodstream',
    live: 'https://moodstream-q4lr.onrender.com',
  },
  {
    title: 'Voice Chat AI Assistant',
    preview: '/results/Text to Speech.png',
    featured: false,
    whatItDoes: 'End-to-end voice assistant that converts speech to text and generates AI-driven responses in real time.',
    tech: ['Python', 'FastAPI', 'Speech Processing', 'HTML', 'CSS', 'JavaScript'],
    problem: 'Hands-free interaction needs low-latency speech recognition and responsive AI output.',
    built: 'A browser interface and FastAPI backend for speech capture, text conversion, and response generation.',
    result: 'Built a working conversational assistant with smooth voice-driven interaction.',
    depth: 'Reduced response friction by streamlining the request flow between speech capture and backend inference.',
    github: 'https://github.com/nishwanth2809/Text-to-Speech',
    live: 'https://nishwanth2809.github.io/Text-to-Speech/',
  },
]

const bulletOrder = [
  { key: 'problem', label: 'Problem' },
  { key: 'built', label: 'Built' },
  { key: 'result', label: 'Result' },
  { key: 'depth', label: 'Depth' },
]

function ProjectCard({ project, featured = false, prominent = false }) {
  return (
    <article
      className={`project-card ${featured ? 'project-card-featured' : 'project-card-standard'} ${prominent ? 'project-card-prominent' : ''}`}
    >
      <div className="project-preview">
        <img src={project.preview} alt={`${project.title} preview`} className="project-preview-image" />
      </div>

      <div className="project-card-body">
        {featured && <span className="project-badge">Featured</span>}
        <h4>{project.title}</h4>

        <p className="project-summary">{project.whatItDoes}</p>

        <div className="project-tech">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <ul className="project-compact-list">
          {bulletOrder.map((item) => (
            <li key={item.key}>
              <span className="project-list-label">{item.label}:</span>
              <span>{project[item.key]}</span>
            </li>
          ))}
        </ul>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub -&gt;
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Live Demo -&gt;
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const ref = useScrollReveal(0.05)
  const featuredProjects = projects.filter(project => project.featured)
  const additionalProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="section projects-section">
      <div ref={ref} className="scroll-reveal">
        <p className="projects-eyebrow">Featured work</p>
        <h2 className="section-title">My <span className="accent">Projects</span></h2>
        <hr className="section-divider" />
        <p className="projects-intro">
          Selected AI and full-stack builds focused on practical problem-solving, deployable products, and engineering depth.
        </p>

        <div className="featured-projects-section">
          <div className="featured-projects-heading">
            <h3>Featured Projects</h3>
            <p>Deepfake Detection, Medical Report Analyzer, and Mood Music System take the spotlight here.</p>
          </div>

          <div className="featured-projects-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                featured
                prominent={index === 0}
              />
            ))}
          </div>
        </div>

        <div className="projects-secondary-heading">
          <h3>More Builds</h3>
          <p>Additional systems that show applied AI, API integration, and real-time interaction work.</p>
        </div>

        <div className="projects-grid">
          {additionalProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

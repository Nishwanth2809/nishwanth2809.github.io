import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'Deepfake Detection System',
    preview: '/results/deepfake.png',
    whatItDoes: 'Real-time deepfake detection system leveraging ResNet18 and OpenCV for accurate facial manipulation analysis.',
    tech: ['Python', 'PyTorch', 'ResNet18', 'OpenCV', 'Streamlit', 'Deep Learning'],
    problem: 'Deepfake media is increasingly difficult to identify manually, posing serious trust and security risks.',
    contribution: 'Designed and implemented an end-to-end deep learning pipeline including face extraction, ResNet18 training, and real-time inference via Streamlit.',
    result: 'Achieved high detection accuracy (~90%+) and reduced manual verification effort through an interactive screening tool.',
    github: 'https://github.com/Nishwanth2809/Deep-Fake-Detection',
    live: null,
  },
  {
    title: 'AI Attention Monitoring System',
    preview: '/results/AI-Attention.png',
    whatItDoes: 'Computer vision-based system that tracks gaze, blink rate, and head pose to generate real-time attention scores.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Flask', 'SQLite', 'NumPy'],
    problem: 'Measuring user attention in real-time during online sessions is challenging and lacks reliable automated solutions.',
    contribution: 'Developed gaze tracking, blink detection, and head pose estimation modules, integrated into a unified attention scoring system with backend session tracking.',
    result: 'Enabled real-time attention monitoring by converting multiple visual signals into a single actionable metric.',
    github: 'https://github.com/Nishwanth2809/AI-Attention',
    live: null,
  },
  {
    title: 'AI Medical Report Analyzer',
    preview: '/results/medical.png',
    whatItDoes: 'Full-stack AI application that extracts, analyzes, and simplifies medical reports using OCR and NLP techniques.',
    tech: ['JavaScript', 'React', 'Node.js', 'Express', 'OCR (Tesseract)', 'Docker', 'Render', 'Vercel', 'REST APIs'],
    problem: 'Medical reports are often complex and difficult for non-technical users to interpret quickly.',
    contribution: 'Built an end-to-end pipeline including OCR-based text extraction, backend processing, and user-friendly frontend visualization.',
    result: 'Deployed a production-ready application that improves report readability and accelerates understanding of medical insights.',
    github: 'https://github.com/Nishwanth2809/AI-Medical-Report-Analyzer',
    live: 'https://medical-report-analyzer-three.vercel.app/',
  },
  {
    title: 'Mood-Based Music Recommendation System',
    preview: '/results/Mood.png',
    whatItDoes: 'AI-powered system that analyzes user mood from text and voice inputs to deliver personalized music recommendations via Spotify.',
    tech: ['Python', 'NLP', 'Flask', 'Spotify API', 'HTML', 'CSS', 'JavaScript'],
    problem: 'Users struggle to find music that matches their emotional state without manual searching.',
    contribution: 'Designed mood classification pipeline, integrated Spotify recommendation engine, and developed an interactive user interface.',
    result: 'Delivered a personalized music experience by mapping emotional inputs to relevant song recommendations in real time.',
    github: 'https://github.com/nishwanth2809/moodstream',
    live: 'https://moodstream-q4lr.onrender.com',
  },
  {
    title: 'Voice Chat AI Assistant',
    preview: '/results/Text to Speech.png',
    whatItDoes: 'End-to-end voice assistant that converts speech to text and generates AI-driven responses in real time.',
    tech: ['Python', 'FastAPI', 'Speech Processing', 'HTML', 'CSS', 'JavaScript'],
    problem: 'Hands-free interaction systems require seamless speech recognition and fast response generation.',
    contribution: 'Implemented speech-to-text pipeline, backend API for response generation, and a browser-based interactive interface.',
    result: 'Built a real-time conversational system demonstrating smooth voice-driven interaction.',
    github: 'https://github.com/nishwanth2809/Text-to-Speech',
    live: 'https://nishwanth2809.github.io/Text-to-Speech/',
  },
]

const detailLabels = [
  { key: 'problem', label: 'Problem solved' },
  { key: 'contribution', label: 'Your contribution' },
  { key: 'result', label: 'Result / impact' },
]

export default function Projects() {
  const ref = useScrollReveal(0.05)

  return (
    <section id="projects" className="section projects-section">
      <div ref={ref} className="scroll-reveal">
        <p className="projects-eyebrow">Featured work</p>
        <h2 className="section-title">My <span className="accent">Projects</span></h2>
        <hr className="section-divider" />
        <p className="projects-intro">
          Selected AI and full-stack projects focused on practical problem-solving, real-time interaction, and deployable user experiences.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-preview">
                <img src={project.preview} alt={`${project.title} preview`} className="project-preview-image" />
              </div>

              <h4>{project.title}</h4>

              <p className="project-summary">
                <span className="project-bullet">-&gt;</span>
                <span>{project.whatItDoes}</span>
              </p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-details">
                {detailLabels.map((item) => (
                  <div className="project-detail-row" key={item.key}>
                    <p className="project-detail-label">
                      <span className="project-bullet">-&gt;</span>
                      <span>{item.label}</span>
                    </p>
                    <p className="project-detail-text">{project[item.key]}</p>
                  </div>
                ))}
              </div>

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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

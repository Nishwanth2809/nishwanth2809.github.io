import { useScrollReveal } from '../hooks/useScrollReveal'

const highlights = [
  { label: 'CV', text: 'Building computer vision systems for real-world monitoring and detection tasks' },
  { label: 'NLP', text: 'Applying language and speech workflows to create useful AI-driven experiences' },
  { label: 'SHIP', text: 'Deploying practical products with frontend, backend, and API integration' },
]

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="section">
      <div ref={ref} className="scroll-reveal">
        <h2 className="section-title">About <span className="accent">Me</span></h2>
        <hr className="section-divider" />

        <div className="about-content">
          <div className="about-text">
            <p>
              I am an AI-focused developer passionate about building intelligent systems using computer
              vision, NLP, and scalable web technologies. I enjoy solving real-world problems through
              practical AI applications.
            </p>
            <p>
              My work combines machine learning, backend engineering, and product thinking to turn ideas
              into interactive tools that are useful, deployable, and easy to understand.
            </p>
          </div>

          <ul className="about-highlights">
            {highlights.map((item) => (
              <li key={item.label}>
                <span className="highlight-icon">{item.label}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

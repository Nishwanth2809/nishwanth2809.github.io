import { useScrollReveal } from '../hooks/useScrollReveal'

const highlights = [
  { icon: '🧠', text: 'Hands-on experience building ML-backed applications' },
  { icon: '🗣️', text: 'Worked with NLP and speech-based AI systems' },
  { icon: '🚀', text: 'Deployed and maintained live AI projects' },
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
              I am a Computer Science student with a strong interest in Artificial
              Intelligence and Machine Learning. I focus on applying ML concepts
              to real-world problems by building practical, end-to-end applications.
            </p>
            <p>
              I have hands-on experience working with Python, backend APIs, NLP,
              and speech-based AI systems, and I enjoy converting ideas into
              deployable solutions.
            </p>
          </div>

          <ul className="about-highlights">
            {highlights.map((item, i) => (
              <li key={i}>
                <span className="highlight-icon">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

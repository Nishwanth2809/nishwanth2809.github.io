import { useScrollReveal } from '../hooks/useScrollReveal'

const links = [
  { label: 'GitHub', url: 'https://github.com/nishwanth2809', icon: '💻' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/yarranishwanth', icon: '🔗' },
  { label: 'Email', url: 'mailto:nishwanthyarra@gmail.com', icon: '📧' },
]

export default function Contact() {
  const ref = useScrollReveal()

  return (
    <section id="contact" className="section contact-section">
      <div ref={ref} className="scroll-reveal">
        <h2 className="section-title">Connect <span className="accent">With Me</span></h2>
        <hr className="section-divider" style={{ margin: '0 auto 36px auto' }} />

        <p className="contact-text">
          Feel free to reach out for opportunities, collaborations, or discussions
          related to AI, Machine Learning, or software development.
        </p>

        <div className="contact-links">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target={link.url.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

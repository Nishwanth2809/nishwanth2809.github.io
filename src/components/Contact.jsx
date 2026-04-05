import { useScrollReveal } from '../hooks/useScrollReveal'

const contactStatus = {
  badge: 'Available for internships',
  title: 'Start with a quick message',
  description: 'The fastest way to reach me is by email. Share the role, project, or idea, and I\'ll get back to you.',
}

const links = [
  {
    label: 'Email',
    value: 'nishwanthyarra@gmail.com',
    href: 'mailto:nishwanthyarra@gmail.com',
    description: 'Best for opportunities and direct collaboration.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 6h16v12H4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 8l8 6 8-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: '/in/yarranishwanth',
    href: 'https://www.linkedin.com/in/yarranishwanth',
    description: 'For networking, internships, and professional updates.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" />
        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: '@nishwanth2809',
    href: 'https://github.com/nishwanth2809',
    description: 'Browse projects, experiments, and source code.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.94-2.64c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.46c0 5.42 3.3 6.61 6.44 7A3.4 3.4 0 0 0 9 18.1V22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    value: '@Nishwanth2828',
    href: 'https://x.com/Nishwanth2828',
    description: 'Follow updates, thoughts, and quick project posts.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 4l6.6 8.82L4.42 20H7.5l4.5-5.18L15.9 20H20L13 10.66 18.8 4H15.7l-4 4.61L8.25 4H4z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

const highlights = [
  'Open to internships and AI-focused projects',
  'Usually replies within a day',
  'Based in India and available for remote collaboration',
]

export default function Contact() {
  const ref = useScrollReveal()

  return (
    <section id="contact" className="section contact-section">
      <div ref={ref} className="scroll-reveal">
        <div className="contact-shell">
          <div className="contact-intro">
            <p className="contact-kicker">Let&apos;s build something useful</p>
            <h2 className="section-title">Connect <span className="accent">With Me</span></h2>
            <p className="contact-text">
              If you have an internship, project idea, or collaboration in AI and web development,
              I&apos;d love to hear about it. I enjoy building practical products and working with teams
              that care about real impact.
            </p>

            <div className="contact-cta-card">
              <div className="contact-cta-copy">
                <span className="contact-availability">{contactStatus.badge}</span>
                <h3>{contactStatus.title}</h3>
                <p>{contactStatus.description}</p>
              </div>

              <div className="contact-cta-actions">
                <a href="mailto:nishwanthyarra@gmail.com" className="btn-primary">
                  Email Me
                </a>
                <a href="/Nishwanth_Resume.pdf" className="btn-outline" target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </div>
            </div>

            <div className="contact-highlights">
              {highlights.map((item) => (
                <div className="contact-highlight" key={item}>
                  <span className="contact-highlight-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-grid">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-card-icon">{link.icon}</div>
                <div className="contact-card-body">
                  <p className="contact-card-label">{link.label}</p>
                  <p className="contact-card-value">{link.value}</p>
                  <p>{link.description}</p>
                </div>
                <span className="contact-card-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

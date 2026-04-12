import { useRef } from 'react'

const platforms = [
  {
    key: 'github',
    label: 'GitHub',
    handle: '@nishwanth2809',
    href: 'https://github.com/nishwanth2809',
    iconBg: '#F1EFE8',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="#444441" />
      </svg>
    ),
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    handle: '/in/yarranishwanth',
    href: 'https://www.linkedin.com/in/yarranishwanth',
    iconBg: '#E6F1FB',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#185FA5" />
      </svg>
    ),
  },
  {
    key: 'mail',
    label: 'Email',
    handle: 'nishwanthyarra@gmail.com',
    href: 'mailto:nishwanthyarra@gmail.com',
    iconBg: '#FAEEDA',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.236-8 4.882-8-4.882V6l8 4.882L20 6v2.236z" fill="#BA7517" />
      </svg>
    ),
  },
  {
    key: 'twitter',
    label: 'X / Twitter',
    handle: '@Nishwanth2828',
    href: 'https://x.com/Nishwanth2828',
    iconBg: '#EEEDFE',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.843L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" fill="#534AB7" />
      </svg>
    ),
  },
]

function PlatformBtn({ label, handle, href, iconBg, icon, delay }) {
  const ref = useRef(null)

  const addRipple = (event) => {
    const button = ref.current
    if (!button) {
      return
    }

    const rect = button.getBoundingClientRect()
    const ripple = document.createElement('span')
    ripple.className = 'cw-ripple'
    ripple.style.left = `${event.clientX - rect.left}px`
    ripple.style.top = `${event.clientY - rect.top}px`
    button.appendChild(ripple)
    window.setTimeout(() => ripple.remove(), 520)
  }

  const isEmail = href.startsWith('mailto')

  return (
    <a
      ref={ref}
      href={href}
      target={isEmail ? undefined : '_blank'}
      rel={isEmail ? undefined : 'noreferrer'}
      className="cw-btn"
      style={{ animationDelay: `${delay}s` }}
      onClick={addRipple}
    >
      <div className="cw-icon" style={{ backgroundColor: iconBg }}>
        {icon}
      </div>
      <div className="cw-copy">
        <span className="cw-label">{label}</span>
        <span className="cw-handle">{handle}</span>
      </div>
      <span className="cw-arrow" aria-hidden="true">↗</span>
    </a>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-shell">
        <p className="contact-kicker">Get in touch</p>
        <h2 className="section-title">Connect <span className="accent">With Me</span></h2>
        <hr className="section-divider" />
        <p className="contact-text">
          Feel free to reach out. Always happy to talk about new projects, opportunities, or a good chat.
        </p>

        <div className="contact-status">
          <span className="cw-dot" aria-hidden="true" />
          <span>Open to work</span>
        </div>

        <div className="contact-platform-grid">
          {platforms.map((platform, index) => (
            <PlatformBtn key={platform.key} {...platform} delay={0.06 * index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow"></div>
      <div className="hero-content">
        <img
          src="/profile.png"
          alt="Nishwanth profile photo"
          className="profile-img"
        />
        <p className="hero-greeting">Welcome to my portfolio</p>
        <h1 className="hero-name">
          Hello, I'm <span className="highlight">Nishwanth</span>
        </h1>
        <p className="hero-title">
          AI, Machine Learning &amp; Full-Stack Developer
        </p>
        <p className="hero-subtitle">
          I build intelligent systems using AI, Machine Learning, NLP, and scalable web technologies.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a
            href="/Nishwanth_Resume.pdf"
            className="btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  )
}

/* ===============================
   THEME TOGGLE WITH ANIMATION
================================ */
// Disable browser scroll restoration
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

const toggle = document.getElementById("themeToggle");

const updateIcon = () => {
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

toggle.addEventListener("click", () => {
  document.body.classList.add("theme-animating");

  setTimeout(() => {
    document.body.classList.toggle("dark");
    updateIcon();
  }, 120);

  setTimeout(() => {
    document.body.classList.remove("theme-animating");
  }, 400);
});

updateIcon();

/* ===============================
   SCROLL REVEAL (SLIDE)
================================ */

const slides = document.querySelectorAll(".slide");

const reveal = () => {
  slides.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

/* ===============================
   ACTIVE NAV LINK
================================ */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

const setActiveLink = () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 160;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
};

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

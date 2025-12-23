/* Dark Mode Toggle */
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

document.body.classList.toggle("dark");

/* Scroll Animations */
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

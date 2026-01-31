const toggle = document.getElementById("themeToggle");

if (toggle) {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "Light";
  } else {
    toggle.textContent = "Dark";
  }

  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggle.textContent = isDark ? "Light" : "Dark";
  });
}

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

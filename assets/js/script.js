// ===== Theme Toggle =====
const toggleButton = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggleButton.textContent = "🔆";
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "🔆";
    localStorage.setItem("theme", "dark");
  } else {
    toggleButton.textContent = "🌑";
    localStorage.setItem("theme", "light");
  }
});


// ===== Scroll Animation =====
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  const revealPoint = 120;

  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - revealPoint) el.classList.add("active");
    else el.classList.remove("active");
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

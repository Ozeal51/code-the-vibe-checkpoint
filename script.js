// =====================
// THEME TOGGLE
// =====================
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// =====================
// FADE-IN ANIMATION
// =====================
const cards = document.querySelectorAll(".card");

window.addEventListener("load", () => {
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 150);
  });
});
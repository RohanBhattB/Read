/* Reveal on scroll */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = "0.9s ease";
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal, .reveal-delay").forEach(el => {
  observer.observe(el);
});

/* Typewriter */
const tw = document.querySelector(".typewriter");
const text = tw.dataset.text;
let i = 0;

function type() {
  if (i < text.length) {
    tw.textContent += text.charAt(i);
    i++;
    setTimeout(type, 35);
  }
}
type();

/* Overlay */
const overlay = document.getElementById("overlay");
document.getElementById("finalBtn").onclick = () => {
  overlay.classList.add("show");
};

function closeOverlay() {
  overlay.classList.remove("show");
}

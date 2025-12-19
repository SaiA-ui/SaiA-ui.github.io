const navToggle = document.querySelector("#nav-toggle");
const siteNav = document.querySelector("#site-nav");
const reveals = document.querySelectorAll(".section, .project, .skills__group, .about__cards article, .timeline li");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});

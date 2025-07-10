// Smooth Scroll Navigation with Active Link Highlight
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove active class from all nav links
    document.querySelectorAll(".nav a").forEach((el) =>
      el.classList.remove("active")
    );

    // Add active class to the clicked link
    this.classList.add("active");

    // Get the target section ID
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50, // offset for fixed nav
        behavior: "smooth",
      });
    }
  });
});
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  document.querySelectorAll(".section").forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelectorAll(".nav a").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});
// DARK MODE TOGGLE
const body = document.body;
const themeToggle = document.getElementById("theme-toggle");

themeToggle?.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("darkMode", body.classList.contains("dark"));
});

// Apply saved dark mode on load
if (localStorage.getItem("darkMode") === "true") {
  body.classList.add("dark");
}

// COLOR THEME PICKER
document.querySelectorAll(".color-swatch").forEach((swatch) => {
  swatch.addEventListener("click", () => {
    const color = swatch.dataset.color;
    document.documentElement.style.setProperty("--skin-color", color);
    localStorage.setItem("skinColor", color);
  });
});

// Apply saved skin color
const savedColor = localStorage.getItem("skinColor");
if (savedColor) {
  document.documentElement.style.setProperty("--skin-color", savedColor);
}

// Animate skill progress bars on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".progress-in").forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && !bar.classList.contains("animated")) {
      bar.classList.add("animated");
      bar.style.width = bar.dataset.progress;
    }
  });
});

// LOADER
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 1200);
});

// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll("[data-animate]").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  el.style.transition = "all .8s ease";
  observer.observe(el);
});

document.addEventListener("scroll", () => {
  document.querySelectorAll(".show").forEach(el => {
    el.style.opacity = 1;
    el.style.transform = "translateY(0)";
  });
});

// PRODUCT CLICK → INSTAGRAM
document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("click", () => {
    const igLink = card.getAttribute("data-ig");
    if (igLink) {
      window.open(igLink, "_blank");
    }
  });
});

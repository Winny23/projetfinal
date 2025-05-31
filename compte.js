// Animation d'apparition
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// Formulaire de contact
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Merci pour votre message ! Nous vous répondrons bientôt.");
});

// Newsletter
document.getElementById("newsletterForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Merci pour votre abonnement à la newsletter !");
});

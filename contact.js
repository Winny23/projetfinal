document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    confirmation.style.display = "block";
    confirmation.style.opacity = 0;
    setTimeout(() => {
      confirmation.style.opacity = 1;
    }, 100);

    form.reset();

    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
      document.body.appendChild(confetti);
      setTimeout(() => {
        confetti.remove();
      }, 3000);
    }

    setTimeout(() => {
      confirmation.style.opacity = 0;
      setTimeout(() => {
        confirmation.style.display = "none";
      }, 500);
    }, 5000);
  });
});

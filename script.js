document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".product-grid img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      alert("Vous avez cliqué sur : " + img.alt);
    });

    img.addEventListener("mouseover", () => {
      img.style.border = "2px solid #f8b195";
    });

    img.addEventListener("mouseout", () => {
      img.style.border = "none";
    });
  });
});

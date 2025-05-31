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
// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Newsletter form handling
const newsletterForm = document.getElementById('newsletter-form');
const emailInput = document.getElementById('newsletter-email');
const statusMessage = document.getElementById('subscription-status');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple email validation
    const email = emailInput.value.trim();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        statusMessage.textContent = 'Please enter a valid email address';
        statusMessage.style.color = '#EF4444'; // Red color for error
        return;
    }

    // Simulate form submission
    emailInput.disabled = true;
    statusMessage.textContent = 'Subscribing...';
    
    // Simulate API call
    setTimeout(() => {
        statusMessage.textContent = 'Thanks for subscribing!';
        statusMessage.style.color = '#34D399'; // Green color for success
        emailInput.value = '';
        emailInput.disabled = false;

        // Clear success message after 3 seconds
        setTimeout(() => {
            statusMessage.textContent = '';
        }, 3000);
    }, 1500);
});

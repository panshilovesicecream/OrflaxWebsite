document.addEventListener("DOMContentLoaded", function() {
  const buyButtons = document.querySelectorAll(".product-card button");

  buyButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Get the product details from the button's parent element
      const productCard = button.parentNode;
      const productName = productCard.querySelector("h2").textContent;
      const productPrice = productCard.querySelector("h3").textContent;

      // Redirect to the payment page with the product details
      window.location.href = `payment.html?product=${productName}&price=${productPrice}`;
    });
  });
});
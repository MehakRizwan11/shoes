// Adding to cart functionality
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".add-to-cart");
  
    buttons.forEach(button => {
      button.addEventListener("click", event => {
        const productId = button.dataset.productId;
        alert(`Product ID ${productId} added to cart!`);
        // Add additional cart handling logic here
      });
    });
  });
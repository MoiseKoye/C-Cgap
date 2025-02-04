
document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartButton = document.getElementById("cart-button");
  const countSpan = cartButton.querySelector(".count");

  let cart = JSON.parse(localStorage.getItem("cart")) || {};

  function updateCartCount() {
      let totalCount = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);
      countSpan.textContent = totalCount;
  }

  addToCartButtons.forEach(button => {
      button.addEventListener("click", () => {
          const name = button.getAttribute("data-name");
          const price = parseInt(button.getAttribute("data-price"));
          const image = button.getAttribute("data-image");

          if (cart[name]) {
              cart[name].quantity++;
          } else {
              cart[name] = { price, quantity: 1, image };
          }

          localStorage.setItem("cart", JSON.stringify(cart));
          updateCartCount();
      });
  });

  updateCartCount();

  cartButton.addEventListener("click", () => {
      window.location.href = "cartt.html";
  });
});
























'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}

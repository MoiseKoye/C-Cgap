document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const clearCartButton = document.getElementById("clear-cart");

    let cart = JSON.parse(localStorage.getItem("cart")) || {};

    function renderCart() {
        cartItemsContainer.innerHTML = "";
        let totalPrice = 0;

        if (Object.keys(cart).length === 0) {
            cartItemsContainer.innerHTML = "<p>Votre panier est vide.</p>";
            totalPriceElement.textContent = "0";
            return;
        }

        Object.entries(cart).forEach(([name, details]) => {
            let itemTotal = details.price * details.quantity;
            totalPrice += itemTotal;

            const itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");

            itemElement.innerHTML = `
                <img src="${details.image}" alt="${name}" class="cart-item-img"> 
                <div class="cart-item-info">
                    <span>${name} (x${details.quantity})</span>
                    <span>${itemTotal} F</span>
                </div>
                <div class="cart-item-actions">
                    <button class="cart-btn decrease" data-name="${name}">-</button>
                    <button class="cart-btn increase" data-name="${name}">+</button>
                    <button class="cart-btn remove" data-name="${name}">❌</button>
                </div>
            `;

            cartItemsContainer.appendChild(itemElement);
        });

        totalPriceElement.textContent = totalPrice;
    }

    cartItemsContainer.addEventListener("click", (e) => {
        const name = e.target.getAttribute("data-name");

        if (e.target.classList.contains("increase")) {
            cart[name].quantity++;
        } else if (e.target.classList.contains("decrease")) {
            cart[name].quantity--;
            if (cart[name].quantity <= 0) delete cart[name];
        } else if (e.target.classList.contains("remove")) {
            delete cart[name];
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    });

    // Bouton "Vider le panier"
    clearCartButton.addEventListener("click", () => {
        localStorage.removeItem("cart");
        cart = {};
        renderCart();
    });

    renderCart();
});

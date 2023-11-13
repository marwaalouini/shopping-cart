$(".heart.fa").click(function() {
    $(this).toggleClass("fa-heart fa-heart-o");
});

// Select elements from HTML
const products = document.querySelectorAll(".product");
const totalprice = document.getElementById("total-cost");

let total = 0;

products.forEach(product => {
    const minus = product.querySelector(".minus");
    const plus = product.querySelector(".plus");
    const quantityInput = product.querySelector("input");
    const remove = product.querySelector(".delete");
    const price = parseInt(product.querySelector(".price").innerText);

    minus.addEventListener('click', () => {
        if (quantityInput.value > 1) {
            quantityInput.value--;
            total -= price;
            totalprice.innerText = `Total Price : $${total.toFixed(2)}`;
        }
    });

    plus.addEventListener("click", () => {
        quantityInput.value++;
        total += price;
        totalprice.innerText = `Total Price : $${total.toFixed(2)}`;
    });
});

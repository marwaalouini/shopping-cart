$(".heart.fa").click(function() {
    $(this).toggleClass("fa-heart fa-heart-o");
});

// select element from html

const shoppingCard = document.getElementById("boxes");
const products = document.getElementsByClassName("product");
const totalprice = document.getElementById("total-cost");

let total = 0;

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const minus = product.getElementsByClassName("minus")[0];
    const plus = product.getElementsByClassName("plus")[0];

    const quantityInput = product.getElementsByTagName("input")[0];
    const remove = product.getElementsByClassName("btn btn-danger delete btn")[0];
    const price = parseInt(
        product.getElementsByClassName("price")[0].innerText.substring(1)
    );

    minus.addEventListener('click', () => {
        if (quantityInput.value > 1) {
            quantityInput.value--;
            total -= price;
            totalprice.innerText = `Total Price : $${total} `;
        }
    });

    plus.addEventListener("click", () => {
        quantityInput.value++;
        total += price;
        totalprice.innerText = `Total Price : $${total} `;
    });
}

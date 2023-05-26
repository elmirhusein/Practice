function renderProducts() {
    const body = document.querySelector("body");
    products.forEach(x => {
        const product = generateProduct(x)
        body.append(product)
    });
}

function generateProduct(product) {
    const div = document.createElement("div");
    div.innerHTML =
        `<div class="card">
    <span>Title: ${product.name}</span>
    <br>
    <span>Price: ${product.price}</span>
</div> `;

    div.addEventListener("click", () => {
        window.open("/Users/99451/Desktop/Frondend/Practice/product.html")
    })
    return div;
}

renderProducts()
let products = [];
const grid = document.getElementById("productGrid");

async function loadProducts() {
    let res = await fetch("https://fakestoreapi.com/products");
    products = await res.json();
    display(products);
}

function display(list) {
    grid.innerHTML = "";
    list.forEach(p => {
        grid.innerHTML += `<div class='product'>${p.title}<br>₹${p.price}</div>`;
    });
}

function debounce(fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, arguments), delay);
    };
}

document.getElementById("search").addEventListener(
    "input",
    debounce(function () {
        let text = this.value.toLowerCase();
        let filtered = products.filter(p => p.title.toLowerCase().includes(text));
        display(filtered);
    }, 400)
);

loadProducts();

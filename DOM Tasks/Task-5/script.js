const products = [
      { name: "Laptop", category: "electronics", img: "https://via.placeholder.com/100?text=Laptop" },
      { name: "Smartphone", category: "electronics", img: "https://via.placeholder.com/100?text=Phone" },
      { name: "Headphones", category: "electronics", img: "https://via.placeholder.com/100?text=Headphones" },
      { name: "T-Shirt", category: "clothing", img: "https://via.placeholder.com/100?text=T-Shirt" },
      { name: "Jeans", category: "clothing", img: "https://via.placeholder.com/100?text=Jeans" },
      { name: "Jacket", category: "clothing", img: "https://via.placeholder.com/100?text=Jacket" },
      { name: "Hoodie", category: "clothing", img: "https://via.placeholder.com/100?text=Hoodie" },
      { name: "Smartwatch", category: "electronics", img: "https://via.placeholder.com/100?text=Watch" },
      { name: "Bluetooth Speaker", category: "electronics", img: "https://via.placeholder.com/100?text=Speaker" },
      { name: "Cap", category: "clothing", img: "https://via.placeholder.com/100?text=Cap" }
    ];

    const list = document.getElementById("productList");
    const allBtn = document.getElementById("allBtn");
    const elecBtn = document.getElementById("elecBtn");
    const clothBtn = document.getElementById("clothBtn");
    const search = document.getElementById("search");

    function displayProducts(data) {
      list.innerHTML = "";
      data.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
          <img src="${p.img}">
          <div class="name">${p.name}</div>
        `;

        list.appendChild(card);
      });
    }

    function filterCategory(cat) {
      if (cat === "all") displayProducts(products);
      else displayProducts(products.filter(p => p.category === cat));
    }

    allBtn.onclick = () => filterCategory("all");
    elecBtn.onclick = () => filterCategory("electronics");
    clothBtn.onclick = () => filterCategory("clothing");

    search.addEventListener("keyup", () => {
      const t = search.value.toLowerCase();
      const f = products.filter(p => p.name.toLowerCase().includes(t));
      displayProducts(f);
    });

    displayProducts(products);
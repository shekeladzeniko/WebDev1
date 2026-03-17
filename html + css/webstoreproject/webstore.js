const productinfo = [
      {images: "https://ee.ge/_next/image?url=https%3A%2F%2Fstatic.ee.ge%2FElite%2F2193f450-95f8-4367-9f98-4f51be30fccc_Thumb.png&w=1640&q=75", title: "Smart Watch", category: "Electronics", price: "$199.99"},
      {images: "https://ecx.images-amazon.com/images/I/41iM4L2VvVL.jpg", title: "Camera", category: "Electronics", price: "$299.99"},
      {images: "https://m.media-amazon.com/images/I/51ergTbpNlL.jpg", title: "White Pillow", category: "Home", price: "$19.99"},
      {images: "https://www.carrs-silver.co.uk/cdn/shop/products/OldEnglish.jpg?v=1626881539", title: "Cutlery Set", category: "Home", price: "$29.99"},
      {images: "https://lemuta.com/cdn/shop/files/Sweater-5b.png?v=1704286393&width=2048", title: "Black Hoodie", category: "Clothing", price: "$39.99"},
];

const productcontainer  = document.querySelector('#productContainer');

for (let i = 0; i < productinfo.length; i++) {
  productContainer.innerHTML += `
    <div class="productslides">
      <img
        class="img"
        src="${productinfo[i].images}"
        style="width: 300px; height: 300px; border-radius: 15px"
      />
      <p style="font-size: 25px">${productinfo[i].title}</p>
      <p style="font-size: 20px; color: gray; margin-top: 5px">
        ${productinfo[i].category}
      </p>
      <p style="font-size: 20px; margin-top: 10px">
        ${productinfo[i].price}
      </p>
      <button class="cartbuttons">Add to Cart</button>
    </div>
  `;
}


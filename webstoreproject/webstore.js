import { productinfo } from "./data.js";

const productcontainer = document.querySelector("#productContainer");

for (let i = 0; i < productinfo.length; i++) {
  productcontainer.innerHTML += `
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

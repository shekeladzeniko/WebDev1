const products = [
  { name: "Shirt", price: 40 },
  { name: "Shoes", price: 120 },
  { name: "Hat", price: 25 },
  { name: "Jacket", price: 200 }
];

const newProducts = products.filter((product) => product.price > 100);

const titles = newProducts.map((product) => product.name);

console.log(titles);

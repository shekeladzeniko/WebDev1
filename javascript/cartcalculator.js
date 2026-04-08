const cart = [
  { title: "Smart Watch", price: 199.99, quantity: 1 },
  { title: "Camera", price: 299.99, quantity: 2 },
  { title: "White Pillow", price: 19.99, quantity: 3 },
  { title: "Cutlery Set", price: 29.99, quantity: 1 },
];

let total = 0;

cart.forEach((item) => {
  const itemTotal = item.price * item.quantity;
  console.log(item.title, item.quantity, 'cali', 'fasi: ', itemTotal);
  total += itemTotal;
});

console.log('total price: ', total);

const cart = {
  user: "Ana",
  items: ["Headphones", "Mouse", "Keyboard"],
  prices: [120, 40, 80],  
}

let sum = 0;

for(let i = 0; i < cart.items.length; i++){
      sum += cart.prices[i];
      console.log("Ana is buying " + cart.items[i]);
}

console.log("total price is: " + sum)
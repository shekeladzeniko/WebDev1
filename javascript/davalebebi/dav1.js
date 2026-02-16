const products = [
  {
    name: "Headphones",
    price: 120,
    discount: 20,
    inStock: true
  },
  {
    name: "Keyboard",
    price: 80,
    discount: 10,
    inStock: false
  },
  {
    name: "Mouse",
    price: 40,
    discount: 5,
    inStock: true
  },
  {
    name: "Monitor",
    price: 300,
    discount: 50,
    inStock: true
  }
];

function precent(price, discount) {
    let discountamount = price * (discount / 100);
    let finalprice = price - discountamount;
    return finalprice;
}

for(let i = 0; i < products.length; i++){
      if(products[i].inStock === true ){
           console.log(precent(products[i].price, products[i].discount));
      } else {
            console.log("product is not available");
      }
}
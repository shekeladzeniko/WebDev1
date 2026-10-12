function buy(price, currency) {
  if (currency === "GEL") {
    return price + "₾";
  }
  if (currency === "USD") {
    return price + "$";
  }
  if (currency === "EUR") {
    return price + "$";
  }
}

console.log(buy(20, "GEL"));
console.log(buy(13, "USD"));
console.log(buy(6, "EUR"));

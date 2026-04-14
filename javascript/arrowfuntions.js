function calculator(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

calculator(10,5, (a,b) => a+b);
calculator(10, 5, (a,b) => a-b);
calculator(10, 5, (a,b) => a*b);
calculator(10, 5, (a,b) => a/b);
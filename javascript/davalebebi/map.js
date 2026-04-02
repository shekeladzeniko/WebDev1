const numbers = [1, 2, 3, 4];

// const doubled = numbers.map(number => number * 2);
// console.log(doubled);


function mymap(callback) {
      const result = [];
      for(let i = 0; i < numbers.length; i++) {
            const n = numbers[i];
            const newN = callback(n);
            result.push(newN);
      }
      return result;
}

console.log(mymap(number => number * 2));
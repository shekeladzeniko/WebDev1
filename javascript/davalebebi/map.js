const numbers = [1, 2, 3, 4, 5];

function mymap(callback) {
      const result = [];
      for(let i = 0; i < numbers.length; i++) {
            const element = numbers[i];
            const newElement = callback(element);
            result.push(newElement);
      }
      return result;
}

console.log(mymap(element => element * 2));
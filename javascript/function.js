function CountEven(numbers) {
      let c = 0;
      for(let i = 0; i < numbers.length; i++){
            
            if(numbers[i] % 2 === 0){
                  c++;
            }
      }
      return c;
}
const numbers1 = [1, 4, 6, 9, 12, 15]
const numbers2 = [2, 3, 5, 7, 11, 14, 18]

CountEven(numbers1[1, 4, 6, 9, 12, 15])
CountEven(numbers2[2, 3, 5, 7, 11, 14, 18])
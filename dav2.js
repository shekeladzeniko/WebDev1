const numbers = [10, 25, 8, 30, 15];
let c = 0;

for (let i = 0;i < numbers.length; i++) {
    if(numbers[i] > numbers[0]){
        c++;
    }
}
console.log(c);
const colors = ['red', 'green', 'blue'];
const cars = ['BMW', 'Audi', 'Mercedes'];
const year = '2020 year';

console.log(...colors,...cars,year);

const newWord = [...year];
console.log(newWord);

const user = {
      name: 'John',
      age: 30,
}

const newUser = {...user, city: 'Tbilisi'};
console.log(newUser);
const book = {
      name: 'book1',
      quantity: 5,
      price: 20,
      language: ['georgian','English']
}

const newBook = {...book, price: 25};

console.log(newBook);

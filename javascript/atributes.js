const box = document.querySelector('.box')

const box2 = document.createElement('div')

box2.classList.add('box2')

box.appendChild(box2)

const image = document.createElement('img')


const add_attr = image.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s')

box2.appendChild(image);

image.style.width = '5rem'

const link = document.createElement('link')
const create_link = link.setAttribute('href', 'https://www.google.com/')

link.textContent = 'google'

box2.appendChild(link)

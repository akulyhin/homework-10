let breakfast;
// console.log(breakfast)
breakfast = 'fruits'
// console.log(breakfast)

const goToSchool = {
  books: [],
  dress: [],
  breakfast: {
    coffee: "black",
    sandwich: "salmon"
  },

  toHaveBreakfast() {
    console.log(`I ate ${this.breakfast.sandwich} sandwich and a cup of
    ${this.breakfast.coffee} coffee`)
  }
}

// goToSchool.toHaveBreakfast();

// DOCUMENT OBJECT MODEL - DOM
// доступ к элементам HTML
// element NODE
const body = document.querySelector('body');
body.style.background = 'blue'; // ИНЛАЙНОВЫЕ СТИЛИ

const mainTitle = document.getElementById('main-title')
const mainTitle1 = document.querySelector('#main-title');

// console.dir(body)
// console.dir(mainTitle)
// console.dir(mainTitle1)

// получаем доступ к элементу html, куда будем втсраивать
// динамически сгенерированные свои элементы
const box = document.querySelector('.box-container')

// создание (генерация) элементов

const image = document.createElement('img')
// добавление свойств/атрибутов
image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGYsclqfoAoutPsl8WgoiZmzZO6rwn0sA0wQ&usqp=CAU'

image.setAttribute('alt', 'alien')
// console.dir(image)
// console.log(image)

// создаем элемент
const link = document.createElement('a')
link.setAttribute('href', 'https://ru.wikipedia.org/wiki/%D0%A7%D1%83%D0%B6%D0%BE%D0%B9_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)')

// встраиваем элемент в родительский элемент
link.appendChild(image)

// console.dir(link)
// console.log(link)

// создаем элемент
const item = document.createElement('li')
// добавляем класс элементу
item.classList.add('images-item')

// встраиваем элемент в родительский элемент
item.appendChild(link)

// console.dir(item)
// console.log(item)

// создаем элемент
const imagesList = document.createElement('ul')

// console.dir(imagesList)
// console.log(imagesList)

// встраиваем элемент в родительский элемент
// imagesList.appendChild(item)

box.appendChild(imagesList)

// клонирование элементов
const cloneItem1 = item.cloneNode(true)
const cloneItem2 = item.cloneNode(true)
const cloneItem3 = item.cloneNode(true)
const cloneItem4 = item.cloneNode(true)
const cloneItem5 = item.cloneNode(true)
const cloneItem6 = item.cloneNode(true)
const cloneItem7 = item.cloneNode(true)

// console.dir(cloneItem1)
// console.log(cloneItem1)

imagesList.append(item, cloneItem1, cloneItem2,
  cloneItem3, cloneItem4, cloneItem5,
  cloneItem6, cloneItem7)

imagesList.classList.add('images-list')

const images = ['https://images.pexels.com/photos/4932184/pexels-photo-4932184.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/5041858/pexels-photo-5041858.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/3354887/pexels-photo-3354887.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/3112898/pexels-photo-3112898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500']
// console.log(images.length)

images.map(elem => {
  // console.log(elem)
  const i = document.createElement('img')
  // console.log(i)

  i.src = elem
  i.setAttribute("width", '200px')
  i.setAttribute("height", '150px')
  // console.log(i)
  // // arr.push(img)
  imagesList.insertAdjacentElement('beforebegin', i)
})

const content = `<p>Welcome!</p>`
// console.log(content)
// console.log(newContent)

box.insertAdjacentHTML('afterbegin', content)
const p = document.querySelector('p')
// console.log(p.textContent)
// console.dir(p)

const newContent = document.createElement('p')
newContent.textContent = 'Welcome again'

// console.log(newContent.textContent)
// console.dir(newContent)

box.prepend(newContent)

// события
box.addEventListener('click', eventHandler)

function eventHandler(e) {
  console.log(e)
  console.log("target", e.target.children)
  console.log("target", e.target.children.length)

  // console.log("target", e.target)
  // console.log("currentTarget", e.currentTarget)
}

const rangeInput = document.getElementById('rangeInput')
rangeInput.addEventListener('change', () => {
  console.log(rangeInput.value)
})
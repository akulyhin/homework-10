import menu from './menu.json';
import css from './mod10.css';
import menuItem from './menuItem.hbs';

const item = menuItem(menu);
const menuList = document.querySelector('.js-menu')
menuList.insertAdjacentHTML('afterbegin', item)
const body = document.querySelector('body')
const checkbox = document.getElementById('theme-switch-toggle')

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

if (localStorage.getItem("theme")) {
  body.classList.add(Theme.DARK);
  checkbox.checked = true;
}
checkbox.addEventListener("change", () => {
  checkbox.checked ?
    (localStorage.setItem("theme", " "),
      body.classList.add(Theme.DARK),
      body.classList.remove(Theme.LIGHT)) :
    (localStorage.removeItem("theme"),
      body.classList.add(Theme.LIGHT),
      body.classList.remove(Theme.DARK));
});



// import db from './db.json';
// import hb from './gal.hbs';
// const div = document.querySelector('.hb')
// console.log(div)

// const item = hb(db);
// console.log(item)
// div.insertAdjacentHTML("afterbegin", item)


// // JSON

// const Soroka = {
//   name: "Romchik",
//   age: 18
// }
// console.log(Soroka)

// const jsonSoroka = JSON.stringify(Soroka);
// console.log(jsonSoroka)

// const objSoroka = JSON.parse(jsonSoroka)
// console.log(objSoroka)

// // LocalStorage()

// localStorage.setItem("key", "")
// localStorage.setItem("Soroka", "Beloboka")

// const info = localStorage.getItem("Soroka");
// console.log(info)


// const info1 = localStorage.getItem("keymjgfhgd");
// console.log(info1)

// // localStorage.removeItem('name')
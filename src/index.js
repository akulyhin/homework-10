import css from "./css/style.css";
import menuList from "./menu.json";
import menuItem from "./menuitem.hbs";

const item = menuItem(menuList);
const checkbox = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');

const menu = document.querySelector('.js-menu');
menu.insertAdjacentHTML('afterbegin', item);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  if (localStorage.getItem("theme")) {
    body.classList.add(Theme.DARK);
    checkbox.checked = true;
  }

checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
        (localStorage.setItem("theme", " "),
        body.classList.add(Theme.DARK),
        body.classList.remove(Theme.LIGHT));
    }
     else {
        (localStorage.removeItem("theme"),
        body.classList.remove(Theme.DARK),
        body.classList.add(Theme.LIGHT));
    }
})
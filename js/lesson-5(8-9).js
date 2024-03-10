// TODO: ЗАДАЧА 1  на LocalStorage =========================================

// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем

const body = document.querySelector("body");
const checkbox = document.querySelector("#checkbox");
const KEY = "theme";
const valueLight = "light";
const valueDark = "dark";
const getTheme = localStorage.getItem(KEY);

switch (getTheme) {
    case valueDark:
        body.classList.add("dark")
        checkbox.checked = true;
        break;
    case valueLight:
        body.classList.add("light")
        checkbox.checked = false;
        break;

    default:
        body.classList.add("light")
        checkbox.checked = false;
        break;
}

checkbox.addEventListener("click", () => {
    if (checkbox.checked === false) {
        localStorage.setItem(KEY, valueLight)
        body.classList.add("light")
        body.classList.remove("dark")
    }
    if (checkbox.checked === true) {
        localStorage.setItem(KEY, valueDark)
        body.classList.add("dark")
        body.classList.remove("light")
    }
    console.log(checkbox.checked);
} )
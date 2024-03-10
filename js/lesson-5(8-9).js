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
    body.classList.add("dark");
    checkbox.checked = true;
    break;
  case valueLight:
    body.classList.add("light");
    checkbox.checked = false;
    break;

  default:
    body.classList.add("light");
    checkbox.checked = false;
    break;
}

checkbox.addEventListener("click", () => {
  if (checkbox.checked === false) {
    localStorage.setItem(KEY, valueLight);
    body.classList.add("light");
    body.classList.remove("dark");
  }
  if (checkbox.checked === true) {
    localStorage.setItem(KEY, valueDark);
    body.classList.add("dark");
    body.classList.remove("light");
  }
  console.log(checkbox.checked);
});

// TODO: ЗАДАЧА 2 на LocalStorage =========================================

// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.

const form = document.querySelector("#task-form");
const taskList = document.querySelector("#task-list");
const taskName = document.querySelector('input[name="taskName"]');
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

form.addEventListener("submit", addTask);

function addTask(event) {
  event.preventDefault();

  const task = taskName.value.trim();
  if (task !== "") {
    tasks.push(task);
    taskName.value = "";
    renderTask();
    saveTasks();
  }
}

function renderTask() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerText = task;
    const btn = document.createElement("button");
    btn.innerText = "delete";
    btn.dataset.index = index;
    btn.addEventListener("click", deleteTask);

    li.appendChild(btn);
    taskList.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(event) {
  const taskIndex = event.target.dataset.index;
  tasks.splice(taskIndex, 1);
  renderTask();
  saveTasks();
}

// TASK-3//

const discoBody = document.querySelector("body")
const startBtn = document.querySelector('button[data-start]')
const stopBtn = document.querySelector('button[data-stop]')


let intervalId = null


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
    const color = getRandomHexColor()
    discoBody.style.backgroundColor = color
}

startBtn.addEventListener("click", () => {
    startBtn.disabled = true
    stopBtn.disabled = false
    intervalId = setInterval(changeColor, 1000)
})
stopBtn.addEventListener("click", () => {
    if (intervalId === null) return;
    clearInterval(intervalId)
    startBtn.disabled = false
    stopBtn.disabled = true    
 })
    

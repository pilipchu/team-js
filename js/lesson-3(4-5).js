//TODO: № 1 на перебирання ✅ ==============================================
//Зібрати в allTopics масив всіх предметів всіх курсів
//Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи
//  const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];

// const allTopics = courses
//     .flatMap(course => course.topics)
//     .filter((item, index, arr) => arr.indexOf(item) === index)
// console.log(allTopics)

//TODO № 2 з колбеком =====================================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// function letMeSeeYourName(callback) {
// const name = prompt("What is your name?")
// if (!name) {
//     alert(`Введіть ім'я`)
//     return;
// }
// return callback(name);
// }

// const greet = name => alert(`Привіт, ${name}`);

// console.log(letMeSeeYourName(greet));

// // /TODO: № 3 на this ✅ ==============================================
// //Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);    },
// };
// product.showPrice();

//TODO: № 4 на this ✅==============================================
//Виправте помилки, щоб код працював

// function callAction(action) {
//     // action();
//     return action;
// }

// const item = {
//   getQuatity() {
//     console.log(this.quantity);
//   },
//   quantity: 5,
// };

// // callAction(item.getQuatity.bind(item));
// callAction(item.getQuatity());

// TODO: № 5 ==============================================================
// Напиши скрипт, який для об'єкта user,
// Послідовно:
// 1. додати поле mood зі значенням 'happy'
// 2. замінити hobby на 'skydiving'
// 3. замінити значення premium на false
// 4. виводити зміст об'єкта user у форматі
// ключ:значення використовуючи Object.keys() і for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy"
// user.hobby = "skydiving"
// user.premium = false

// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`)
// }

//TODO: № 6 ==============================================================
// В нас є объект, в якому зберігаються зарплатні
// нашої команди
// Напишіть код для підсумовання всіх зарплат і
// Збережіть його результат в перемінну sum.
// Якщо объект salaries пустий, тоді результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let sum = 0;
// for (const value of Object.values(salaries)) {
//   sum += value;
// }
// console.log(sum);

//TODO: № 7 ==============================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
         if (typeof obj[key] === "number") {
             obj[key] *= 2;
            } 
            
            }
    }
    return obj
}
console.log(multiplyNumeric(menu));
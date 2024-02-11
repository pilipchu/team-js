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
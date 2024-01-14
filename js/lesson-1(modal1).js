//TODO: № 1 if...else ================================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.
// const a = 5;
// if (a===10) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }

// console.log(a === 10 ? "Вірно" : "Невірно");

// function getAnswer(a) {
//     if (a === 10) {
//         console.log('Вірно');
//     } else {
//         console.log('Невірно');
//     }
// }

// getAnswer(5);
// getAnswer(10);

//Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// const question = prompt("Яка офіційна назва JavaScript?");
// console.log("🚀 ~  question:", question);
// if (question==="ECMAScript") {
//   alert ("Вірно!")  
// } else {
//   alert("Не знаєте? ECMAScript!")  
// }

//TODO:  № 4   =============================================
// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart


// const time = 129;

// const minuts = time % 60;
// console.log(minuts);

// const modifyMinuts = String(minuts).padStart(2, 0);
 
// const hours = Math.floor(time / 60);
// console.log(hours);

// const modifyHours = String(hours).padStart(2, 0);
// console.log(modifyHours);
// console.log(`${modifyHours}:${modifyMinuts}`);
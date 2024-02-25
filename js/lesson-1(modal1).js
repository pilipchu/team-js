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


//TODO: № 4
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.






//TODO: № 3 ============================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).


// Ілля
// const min = 99;
// if (min<= 15) {
//     console.log("перша четверть")
// } else if (min > 15 && min <= 30) {
//     console.log("друга четверть")
// } else if (min > 30 && min <= 45) {
//     console.log("третя четверть")
// } else if (min > 45 && min < 60) {
//     console.log("четверта четверть")
// } else {
//     console.log("введіть число від 0 до 59")
// }


//TODO: № 5 for =============================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max


// Ілля
// const minNumber = 35;
// const maxNumber = 60;
// for (let i = maxNumber; i >= minNumber; i--){
//     console.log(i);
// }
// let sumOfNumbers=0
// for (let e = minNumber; e <= maxNumber; e++){
//         if(e%2==0){
//      sumOfNumbers=sumOfNumbers+e;
//     }
// }
// console.log(sumOfNumbers)


//TODO: № 5
// Напишіть if..else, що відповідає наступному switch:
// const browser = 'Opera'
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }



// Ілля
// if (browser === "Opera" || browser === "Chrome" || browser === "Firefox" || browser === "Safari") {
//     console.log("Okey we support these browsers too")
// } else if (browser === "Edge") {
//     console.log("You've got the Edge!")
// } else {
//     console.log("We hope that this page looks ok!")
// }


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
        if (typeof obj[key]==="number") {
            menu[key] *= 2
        }
    }
    return obj
}

console.log(multiplyNumeric(menu))
//TODO: № 1  ============================================================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 1, 7, 80, 3];
// function findSmallerNumber(numbers) {
  // if (!Array.isArray(numbers)) {
  //   return "its not Array"
  // }
  // let minNumber = numbers[0];
  // for (const number of numbers) {
  //   if (minNumber > number) {
  //     minNumber = number;
  //   }
  // }
  // return minNumber;
                   // РІШЕННЯ 2
//   if (Array.isArray(numbers)) {
   
//     let minNumber = numbers[0];
//     for (const number of numbers) {
//       if (minNumber > number) {
//         minNumber = number;
//       }
//     }
//     return minNumber;
//   }
//    return "its not Array";
// }

// console.log(findSmallerNumber(numbers));
// console.log(findSmallerNumber("numbers"));


//TODO: № 3  ============================================================
// Напишіть функцію min(a,b), яка повертає менше чисел a і b.
// function minNumber(a, b) {
//     // if (a < b) {
//     //   return a;
//     // }

//   // return b;

//   if (typeof a !== "number" || typeof b !== "number"){
//     return "введіть число";
//     }
  
//   return a < b ? a : b;
// }
// console.log(minNumber(6, Number(false)));

//TODO: № 4 ==============================================================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function totalArrays(someArr) {
//   const newArray = []
//   for (let i = 0; i < someArr.length-1; i+=1) {
//     newArray.push(someArr[i] + someArr[i+1])
//   }
//   return newArray
//   }
// console.log(totalArrays(someArr))

//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']
// const array = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп'];
// function logItems(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i+1} - ${array[i]}`);
    
//   }
  
// }
// logItems(array)

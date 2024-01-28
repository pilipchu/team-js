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



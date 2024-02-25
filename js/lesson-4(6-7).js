//TODO: № 1 на перебирання ✅ ==============================================
//Знайти унікальні елементи за допомогою reduce
const numbers = [1, 9, 0, 1, 5, 9, 1, 6];
//Стрілочна функція
const unique = (numbers) => 
numbers.reduce((acc, number) => acc.includes(number) ? acc : [...acc, number], []);

console.log(unique(numbers));

// //Класична функція
// function unique(array) {

// }

//функціональний вираз
// const unique = function() {
    
// }

// const unique = (numbers) => {
//     numbers.reduce((acc, number) => {
//         acc.includes(number) ? acc : [...acc, number]
//     }), [];
//     return unique(numbers)
// }
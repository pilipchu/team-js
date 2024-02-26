//TODO: № 1 на перебирання ✅ ==============================================
//Знайти унікальні елементи за допомогою reduce
// const numbers = [1, 9, 0, 1, 5, 9, 1, 6];
//Стрілочна функція
// const unique = (array) =>
// array.reduce((acc, number) => acc.includes(number) ? acc : [...acc, number], []);

// console.log(unique(numbers));

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

//TODO: № 2 ==============================================
// Натискання на кнопку "SHOW ME" має виводити значення в консоль з поля введення (дивіться на елементи в html-розмітці)
/*
const btn = document.querySelector("#alertButton")
const inp = document.querySelector("#alertInput")

btn.addEventListener("click", () => {console.log("жмякнули на кнопку", inp.value); })
*/

//TODO: № 3 ==============================================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.
const int = document.querySelector('#passwordInput')
const btn = document.querySelector('#passwordButton')

btn.addEventListener('click', showPass)

function showPass() {
    let typeInt = int.getAttribute('type')
    if (typeInt === "text") {
        typeInt = "password"
    } else {
        typeInt="text"
    }
    int.setAttribute('type', typeInt)
    console.log(typeInt)
    const textBtn = btn.textContent 
    const toggleBtn = textBtn === 'Приховати' ? 'Розкрити' : 'Приховати'
    btn.textContent = toggleBtn
}


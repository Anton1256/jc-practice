"use strict";

// Завдання 1:
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().

// const number = Number(prompt("Вік"));
// if (number === 10) {
//   alert("Вірно");
// }
// else {
//   alert("Невірно");
// }

// number === 10 ? alert("Вірно") : alert("Невірно");

//Завдання 2:

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// if (min >= 0 && min <= 14) {
//   alert(`${min} входить у першу чверть`);
// } else if (min >= 15 && min <= 29) {
//   alert(`${min} входить у другу чверть`);
// } else if (min >= 30 && min <= 44) {
//   alert(`${min} входить у третю чверть`);
// } else if (min >= 45 && min <= 60) {
//   alert(`${min} входить у четверту чверть`);
// } else {
//     "10 входить в першу чверть"
// }


//Завдання 3:

// Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач 
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.


// const num = Number(prompt("Введіть число від 1 до 4"));
// let result = "";

// switch (num) {
//   case 1:
//     result = `зима`;
//     break;
//   case 2:
//     result = `весна`;
//     break;
//   case 3:
//     result = `літо`;
//     break;
//   case 4:
//     result = `осінь`;
//     break;
//   default:
//     result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
//     alert(result);
//     console.log(result);
// }

// console.log(result);

//Завдання 4:

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples


// const minutes = Number(prompt("Введіть кількість хвилин"));

// console.log(formateTime(minutes));

// function formateTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const modifiedHours = String(hours).padStart(2, "0");
//   const minutes = totalMinutes % 60;
//   const modifiedMinutes = String(minutes).padStart(2, '0');

//   return `${modifiedHours}:${modifiedMinutes}`;
// }

//Завдання 5:

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const username = prompt("Введіть логін:");

// if (username === "Адмін") {
//   const password = prompt("Введіть ваш пароль:");
//   if (password === "Я головний") {
//     alert("Добрий день!");
//   } else {
//     alert("Невірний пароль!");
//   }
// } else if (username === null || username === "") {
//   alert("Скасовано");
// } else {
//   alert("Я вас не знаю");
// }

//Завдання 6:

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// let i = 0;
// while (i <= 20) {
//   console.log(i);
//   i++;
// }

//Завдання 7:

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let i = max;
//   let sum = 0;
//   while (i >= min) {
//     console.log(i);
//     if (i % 2 === 0) {
//       sum += i;
//     }
//     i--;
//   }
//   return sum;
// }

// console.log(getNumbers(3, 8));

// Приклад використання:

//Завдання 8:

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//       return 'Not a number!';
//     }
//     return a < b ? a : b;
//   }

//Завдання 9:

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('Вам менше 18 років. Ви впевнені, що хочете продовжити?');
//     }
//   } 

//Завдання 10:

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//     for (let i = 1; i <= num; i++) {
//       if (i % 3 === 0 && i % 5 === 0) {
//         console.log('fizzbuzz');
//       } else if (i % 3 === 0) {
//         console.log('fizz');
//       } else if (i % 5 === 0) {
//         console.log('buzz');
//       } else {
//         console.log(i);
//       }
//     }
//   }

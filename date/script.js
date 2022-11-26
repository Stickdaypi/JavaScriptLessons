"use strict";

// const now = new Date();

// console.log(now.getFullYear());
// console.log(now.getUTCMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());


// console.log(now.getTimezoneOffset());

// console.log(now.getTime());

// методы работы с датой

// console.log(now.setHours(18, 30));

// console.log(now);

// let start = new Date();

// for (let i = 0; i< 10000000000; i++) {

//     let some = i ** 3;

// }

// let end = new Date();

// alert (`Цикл відпрацював за ${end - start} міллісекунд`);

// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). 
// Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное
//  или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут 
// раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток 
// (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.
// Место для первой задачи

// function getTimeFromMinutes(number) {
//     let result;

//     if ( isNaN(number) || number < 0 || !Number.isInteger(number) ) {

//         result = 'Ошибка, проверьте данные';

//         return result; 

//     } else if (number > 59 && number < 120) {

//         result = `Это 1 час и ${Math.floor(number % 60)} минут`;

//         return result;

//     } else if (number >= 120 && number < 300) {

//         result = `Это ${Math.floor(number / 60)} часа и ${number % 60} минут`;

//         return result;

//     } else {

//         result = `Это ${Math.floor(number / 60)} часов и ${number % 60} минут`;

//         return result;

//     }


// }

// console.log(getTimeFromMinutes(0));




}


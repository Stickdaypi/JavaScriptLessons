"use strict";

//filter====================

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

//map=======================

// let answers = ['Ivan', 'AnnA', 'Hello'];

// answers = answer.map(item => item.toLocaleLowerCase());

// console.log(answers);

//every()/some()===============

// const some = [4, 'wer', 'qwoeiqwopeiqw'];

// console.log(some.every(item => typeof(item) ==='number'));

// console.log(some.some(item => typeof(item) ==='number'));

//reduce() =================

// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, current) => sum +current);
// console.log(res);
// const arr = ['apple', 'mango', 'pear', 'plum'];

// // const res = arr.reduce((sum, current) => sum +', ' +current);
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(res);

// const obj = {
// ivan: 'persone',
// ann: 'persone',
// dog: 'animal',
// cat: 'animal'
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0]);

// console.log(newArr); 

// const films = [
//     {
//         name: 'Titanic',
//         rating: 9
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5
//     },
//     {
//         name: 'Matrix',
//         rating: 8
//     },
//     {
//         name: 'Some bad film',
//         rating: 4
//     }
// ];
// 1) У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив, а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.

// P.S. Это довольно типичная задача в программировании. Вспомните, на самых разных сайтах можно так фильтровать любые товары/фильмы/сериалы...

// function showGoodFilms(arr) {
//     return arr.filter(film => film.rating >= 8);
// }

// console.log(showGoodFilms(films));

// Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.

// function showListOfFilms(arr) {
//     return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);// if = ?
// }

// console.log(showListOfFilms(films));

// 3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.

// function setFilmsIds(arr) {
//     return arr.map((film, i) => {
//         film.id = i;
//         return film;
//     });
// }
// console.log(setFilmsIds(films));

// 4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray)

// const tranformedArray = setFilmsIds(films);

// function checkFilms(arr) {
    
//     return arr.every(film => film.id || film.id === 0);

// }
// checkFilms(tranformedArray);

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

// console.log(Object(funds.filter((fund)=> fund.amount > 0)).reduce());


// arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);


const getPositiveIncomeAmount = (data) => {
    return data.filter(item => item.amount > 0).reduce((acc, curr) => acc + curr.amount, 0);
};
console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
    return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
};
console.log(getTotalIncomeAmount(funds));
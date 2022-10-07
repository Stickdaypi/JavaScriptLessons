/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
const numberOfFilms = +prompt('Скільки фільмів ви передивились?');
let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?',''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log (personalMovieDB);

// console.log( 1 && 2 && 3 );
 
// console.log( !1 && 2 || !3 );
 
// console.log( 25 || null && !3 );
 
// console.log( NaN || null || !3 || undefined || 5);
 
// console.log( NaN || null && !3 && undefined || 5);
 
// console.log( 5 === 5 && 3 > 1 || 5);
 
// let age = 10;

// for (let i = age; i <= 18; i++ ){
//     if (i<18) {
//         let w = 18-i;    
//     console.log('You need birthday certificate and wait for ' + w + ' years!');
//     console.log(i);}
    
//     else {
//     for (let j = i; j <= 60; j++ ){
//         let d = 60-j;    
//         console.log('You need passport and wait for the rest ' + d + ' years!');        
//     }}
    
// }



// for (let i=5; i<11; i++) {
// console.log(i);
// }
// // При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). 
// // Когда цикл дойдет до числа 13 - остановить весь цикл
// for (let i=20; i>10; i--) {    
//     console.log(i);
//     if (i<15){
//     break;}
// }
// При помощи цикла for выведите чётные числа от 2 до 10 включительно

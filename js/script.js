"use strict";


// function start(){
//     numberOfFilms = +prompt('Сколько фмльмов Вы уже посмотрели?', '');

//     while ( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фмльмов Вы уже посмотрели?', '');
//     }
// }
// start();

const personalMovieDB ={
    count: 0,
    movies: {},
    actors: {},
    genres: {},
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фмльмов Вы уже посмотрели?', '');
    
        while ( personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фмльмов Вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; 1 < 2; i++) {
            const a = prompt('Один из последних просмотренніх фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
    
            if (a != null && b != null && a != '' && b != '' && a.length <50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i++;
            }
    
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
                console.log("Просмотренно довольно мало фильмов");
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log("Вы классический зритель");
            } else if (personalMovieDB.count >= 30) {
                console.log("Вы киноман");
            } else {
                console.log("Произошла ошибка");
            }
        
        },
        showMyDb: function (hidden) {
            if (!hidden) {
                console.log(personalMovieDB);
            }
        },
        toggleVisibleMyDB: () => {
            if (personalMovieDB.privat) {
                personalMovieDB.privat = false;
            } else {
                personalMovieDB.privat = true;
            }
        },
        writeYourGenres: () => {
            for (let i = 1; i <= 3; i++) {
                let genre = prompt(`Ваш любимый жанр под номером ${i}`);
                if (genre == '' || genre == null) {
                    console.log("Вы ввели не корректную информацию");
                    i--;
                } else {
                    personalMovieDB.genres[i-1] = genre;
                }

                personalMovieDB.genres[i - 1] = genre;
            }

            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
        }        
        
};

personalMovieDB.start();


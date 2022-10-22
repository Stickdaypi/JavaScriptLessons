"use strict";

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily (arr) {   
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(member => {
//         str += `${member} `
//     });

//     return str;
// }

// showFamily(family);
// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//   arr.forEach(city => { 
//     console.log(city.toLowerCase());
//   });  
// }

// standardizeStrings(favoriteCities);

const someString = 'This is some strange string';

function reverse(str) {
// let arr = str.split('');
//   str = arr.reverse().toString();
//     return console.log(str.split(',').join(''));
    return console.log(str.split('').reverse().join(''));
}



const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
     let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });
return str;

}
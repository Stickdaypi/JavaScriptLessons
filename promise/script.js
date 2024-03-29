"use strict";

// console.log('data transfer...');

// const req = new Promise(function(resolve, reject){
// setTimeout(()=>{
//     console.log('data preparing...');

//     const product = {
//         name: 'TV',
//         price: 2000
//     };
//     resolve(product);
    
// },2000);

// });

// req.then((product)=>{
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         product.status = 'ordered';
//         resolve(product);
//     },2000);
//    });


// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// });

//.finally() не залежно від результату виконує функцію
//.catch() ловить режект та виконує функцію при негативному результаті


const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};


// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() =>{
//     console.log('all');
// });

Promise.race([test(1000), test(2000)]).then(() =>{
    console.log('all');
});



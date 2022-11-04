"use strict";

//touchstart
//touchend
//touchmove




// window.addEventListener('DOMContentLoaded', () => {

//     const box = document.querySelector(".box");

//     box.addEventListener('touchstart', (e) => {
//     e.preventDefault();

   
//     console.log(e.targetTouches[0].pageX);

//     });


    // box.addEventListener('touchmove', (e) => {
    // e.preventDefault();

    // console.log("move");

    // });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();
        
    //     console.log("end");
    
    // });

// });

// touches  
// targetTouches
// changedTouches

// multiply separate number * number
// function squareDigits(num){
    
//     let arr = num.toString().split('');
//     arr.forEach(multiplyArr);
// function multiplyArr (item, index, arr) {
// arr[index] = item * item;
// }
//     return +arr.join('');

//   }


// console.log(squareDigits(45677));
// console.log(typeof(squareDigits(45677)));

//
// let arr = ['e','e','e','e','w','w','w','w','w','e'],
//     arr1 = ['n','n','n','n','w','w','w','w','w','w'];



// function isValidWalk(walk) {

//     let result = false;
   
//     if ( walk.length !== 10 ) {         
//         return result;
//         } else {
//             let w = 0,
//                 e = 0,
//                 n = 0,
//                 s = 0;             

//             for (let i = 0; i < walk.length; i++ ) {
//                 if (walk[i] == "w") {
//                     ++w;
//                 } else if (walk[i] == "e") {
//                     ++e; 
//                 } else if (walk[i] == "n") {
//                     ++n;
//                 } else {
//                     ++s;
//                 }
                         
//             }        
//             if ((n - s) == 0 && (w - e) ==0) {
//                 result = true;
//                 return result;
//             }
//     }

// return result;

// }

//   console.log (isValidWalk(arr));
//   console.log (isValidWalk(arr1));
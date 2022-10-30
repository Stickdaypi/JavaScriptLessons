"use strict";
const btns = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');

// btn.onclick = function(){
//     alert('works');
// }; //не используется код

const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);

    // e.target.remove();
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});
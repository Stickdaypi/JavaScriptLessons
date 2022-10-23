"use strict";

const soldier = {
    health: 400,
    armor: 500,
    intel: 300,
    sayHello: function() {
console.log("Hello!");
    }
};

// const john = {
//     health: 300,
// };

// john.__proto__= soldier;
// old version
// Object.setPrototypeOf(john, soldier);
// first version

const john = Object.create(soldier);



john.sayHello();
console.log(john.intel);

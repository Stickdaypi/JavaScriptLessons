"use strict";

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };
}

const ivan = new User('Ivan', 28);

const alex = new User('Alex', 20);

console.log(ivan);

ivan.hello();

User.prototype.exit = function(name) {
    console.log(`User ${this.name} go out`);
};
console.log(ivan);

ivan.hello();
ivan.exit();
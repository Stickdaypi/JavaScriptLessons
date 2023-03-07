'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
   
    #surname = 'Shvachko';//работает
    say() {
        console.log(`Name of the User: ${this.name} ${this.#surname}, age ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        }    else {
            console.log('try another entry');
        }
    }
}

const ivan = new User('ivan', 28);

console.log(ivan.age);

ivan.age = 90;

console.log(ivan.age);

ivan.say();





"use strict";

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(4, 5);

// 1) звичайна функція this = window  in strict option undefined

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function(){
//         console.log(this);
//     }

// };

// obj.sum();

// 2)  контекст у методів буде сам обьект 

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     };
// }

// const ivan = new User('Ivan', 23);


// 3) this в конструкторах та класах - це новий екземпляр обьекту

// function sayName (surname){
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'smith');
// sayName.apply(user, ['Smith']);

// function count (num) {
//     return this*num;
// }

// const double = count.bind(2);//.bind 2 = this
// console.log(double(3));//3=num 2*3=6
// console.log(double(13));

// 4) ручная привязка this: call, apply and bind

const btn = document.querySelector('button');

btn.addEventListener('click', function (e){
    e.target.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function() {

        const say = () => {
        console.log(this.num);
    };
    say();
}

};

obj.sayNumber();

const double = a => a * 2;

console.log(double(4));

'use strict';

function createCounter () {
    let counter = 0;

    const myFunction = function() {
        counter = counter + 1;
        return counter;
    };


return myFunction;

}

let increment = createCounter();

let c1 = increment();
let c2 = increment();
let c3 = increment();


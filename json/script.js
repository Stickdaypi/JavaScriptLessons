'use strict';

const persone = {
    name: 'Alex',
    tel: '+380999999',
    parent: {
    mom: 'Olga',
    dad: 'Mike'
}

};


const clone = JSON.parse(JSON.stringify(persone));

clone.parent.mom = 'Ann';

console.log(persone);
console.log(clone);
"use strict";
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let shopData = data.shops;
    let shoppingMallValue = 0;
    let answer = "";

for (let i = 0; i < data.shops.length; i++) {
    
    shopData[i].area = shopData[i].width * shopData[i].length;
    shopData[i].value = shopData[i].area * data.height;
    shoppingMallValue += shopData[i].value;
}
if (shoppingMallValue * data.moneyPer1m3 > data.budget) {
    answer = 'Бюджета недостаточно';
} else {
    answer = 'Бюджета достаточно';
}
return answer;
}

isBudgetEnough(shoppingMallData);
// function isBudgetEnough(data) {
//     let square = 0;
//     let volume = 0;

//     data.shops.forEach(shop => {
//         square += shop.width * shop.length;
//     });

//     volume = data.height * square;

//     if (data.budget - (volume * data.moneyPer1m3) >= 0) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }
// }



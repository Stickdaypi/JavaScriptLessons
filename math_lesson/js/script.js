"use strict";

function calculateVolumeAndArea(num) {
    if (typeof (num) !== 'number' || num < 0 || !Number.isInteger(num)) {
        //Number.isInteger(num) Метод определяет, является ли переданное значение целым числом.
        return "При вычислении произошла ошибка";
    }

    let volume = num*num*num;
    let area = 6*(num*4);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;

    }

    console.log(calculateVolumeAndArea(5));

    function getCoupeNumber(num) {
if (!Number.isInteger(num) || num < 0 ) {
    return console.log("Ошибка. Проверьте правильность введенного номера места");
} else if (num > 36 || num === 0 ){
    return console.log("Таких мест в вагоне не существует");
}
return console.log(`Ваше купе номер: ${Math.ceil(num / 4)}`);

    }

    getCoupeNumber(0);
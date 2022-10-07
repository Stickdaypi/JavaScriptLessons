// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
// let arr=[];
// let i=5;
// do {
//     arr.push(i);
//     i++;
// } while (i<=10);
// console.log(arr);

// const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];


// for (let i = 0; arr.length > result.length; i++ ) {
  
//     result.push(arr[i]);
// }
// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]


// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//    if (typeof(data[i])=='string') {
//     data[i] = data[i] +" - done";
//    } else {
//     data[i] = data[i] * 2;
//    }
//     console.log(typeof(data[i])=='string'); 
// }
// console.log(data);
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = data.length; result.length < data.length; data.length + i--) {
//        result.push(data[i]);
//        console.log(result);
//        }
// let i = data.length;
// do {
//     i--;
//     result.push(data[i]);
//     console.log(result); 
// } while (result.length < data.length);
// const lines = 5;
// let result = '';


// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

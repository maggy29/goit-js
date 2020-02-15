'use strict';

let input;
const numbers = [];
let total = 0;

while (input !== null) {
    input = prompt('Введите пожалуйста произвольное число.');
    numbers.push(Number(input));
};

for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
};

console.log(`Общая сумма чисел равна ${total}`);
'use strict';

let input;
let total = 0;

do {
    input = prompt('Введите пожалуйста произвольное число.');
    total = Number(total) + Number(input);
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
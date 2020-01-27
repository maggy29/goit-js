'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let howManyDroidsYouWant = prompt('Какое количество дроидов Вы хотите преобрести?');
let totalPrice = pricePerDroid * howManyDroidsYouWant;
let message;

if (howManyDroidsYouWant === null) {
    message = 'Отменено пользователем!';
} else if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
} else if (howManyDroidsYouWant === '') { //условие чтоб исключить вариант, когда пользователь нажимает ок при пустом поле 
    message = 'Вы не ввели количество товара!';
} else {
    message = `Вы купили ${howManyDroidsYouWant} дроидов, на счету осталось ${credits - totalPrice} кредитов.`;
};

alert(message);
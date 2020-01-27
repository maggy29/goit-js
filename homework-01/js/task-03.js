'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let userPassword = prompt('Введите пароль');
let message;

if (userPassword === null) {
    message = 'Отменено пользователем!';
} else if (userPassword === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
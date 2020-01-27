'use strict';

const deliveryCountry = prompt('Выберите пожалуйста страну доставки!');
const deliveryCountryLowercase = deliveryCountry.toLowerCase();
let message;

switch (deliveryCountryLowercase) {
    case 'китай':
        message = 'Доставка в Китай будет стоить 100 кредитов';
        break;

    case 'чили':
        message = 'Доставка в Чили будет стоить 250 кредитов';
        break;

    case 'австралия':
        message = 'Доставка в Австралию будет стоить 170 кредитов';
        break;

    case 'индия':
        message = 'Доставка в Индию будет стоить 80 кредитов';
        break;

    case 'ямайка':
        message = 'Доставка в Ямайку будет стоить 120 кредитов';
        break;

    default:
        message = 'В вашей стране доставка не доступна';
}

alert(message);
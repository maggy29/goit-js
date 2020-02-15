'use strict'

const checkForSpam = function (message) {
    let words;
    if (typeof message === "string") {
        if (message.toUpperCase().includes('SPAM') || message.toUpperCase().includes('SALE')) {
            return true;
        };
        return false;
    };
    return 'Введенное значение не строка, повторите попытку'
};

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
console.log(checkForSpam(5647));
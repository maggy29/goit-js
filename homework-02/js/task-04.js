'use strict'

const formatString = function (string) {
    let symbols = string.split('');
    const symbolsLength = symbols.length;
    if (symbolsLength > 40) {
        string = symbols.splice(0, 40).join('') + '...';
    };
    return string;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
    formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
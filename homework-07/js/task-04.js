'use strict'

const Counter = function ({
    initialValue,
    step,
}) {
    this.value = initialValue;
    this.step = step;
};

Counter.prototype.increment = function () {
    this.value += this.step
};

Counter.prototype.decrement = function () {
    this.value -= this.step
};

const counter = new Counter({
    initialValue: 0,
    step: 1
});

const counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action="increment"');
const decrementBtn = document.querySelector('button[data-action="decrement"');

const updatedCounterValue = () => counterValue.textContent = counter.value;

incrementBtn.addEventListener('click', () => {
    counter.increment();
    counterValue.textContent = counter.value;
});

decrementBtn.addEventListener('click', () => {
    counter.decrement();
    counterValue.textContent = counter.value;
});
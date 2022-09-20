
let counterValue = 0;
const increment = document.querySelector('button[data-action="increment"]');
console.log(increment.dataset.action);
const decrement = document.querySelector('button[data-action="decrement"]');
console.log(decrement.dataset.action);

increment.addEventListener(`click`, onIncrement);
decrement.addEventListener(`click`, onDecrement);

function onIncrement () {counterValue += 1;
   console.log (document.querySelector(`#value`).textContent = counterValue)};
   function onDecrement () {counterValue -= 1;
    console.log (document.querySelector(`#value`).textContent = counterValue)};




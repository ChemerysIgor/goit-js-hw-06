function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector(`body`);
console.log(body);
const btnChange = document.querySelector(`.change-color`)
console.log(btnChange);
const textCololr = document.querySelector(`.color`);
console.log(textCololr);
btnChange.addEventListener(`click`, onBtn)
function onBtn (event){ body.style.backgroundColor = getRandomHexColor ()
  console.log(body.style.backgroundColor)
  textCololr.textContent = getRandomHexColor ()
}
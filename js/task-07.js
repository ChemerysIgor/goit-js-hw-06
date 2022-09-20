const input = document.querySelector(`#font-size-control`);
console.dir(input.value); 
const font = document.querySelector(`#text`)
console.log(font)
input.addEventListener(`input`, onRange);
function onRange (event){font.style.fontSize = `${input.value}px`}
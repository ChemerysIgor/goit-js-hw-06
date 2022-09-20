const input = document.querySelector(`input[data-length="6"]`)
const inputNumber = Number(input.dataset.length)
console.log(typeof (inputNumber))
input.addEventListener(`blur`, onInput);

function onInput (event){
    if(event.currentTarget.value.length === inputNumber)
    { input.classList.remove("invalid")
    input.classList.add("valid")} 
    else {input.classList.remove("valid")
        input.classList.add("invalid")}
    }


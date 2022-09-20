function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
console.log (destroyBtn)
const controls = document.querySelector ("#controls");
const boxes = document.querySelector ("#boxes");
const input = document.querySelector ("input")
let valueBox = 30;
createBtn.addEventListener("click", createBoxes);
function createBoxes (amount){
  amount = input.value;
    for (let i=0; i < amount; i += 1){
valueBox += 10;
const newBox = document.createElement("div");
newBox.classList.add("new");
newBox.style.backgroundColor= `${getRandomHexColor()}`;
newBox.style.height = valueBox + `px`;
newBox.style.width = valueBox + `px`;
boxes.append(newBox);
 }
}
destroyBtn.addEventListener("click", destroyBoxes);
function destroyBoxes (){ 
  const boxClass = document.querySelector(".new")
console.log(boxClass)
boxClass.remove();
}

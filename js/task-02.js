const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector(`#ingredients`);
console.dir(ul);
const array = [];
ingredients.forEach(function(element, index, ingredients)
{const listTag = document.createElement(`li`);
listTag.classList.add(`item`)
listTag.textContent = element;
array.push(listTag)
console.log(array) 
})
ul.append(...array);
console.log(ul);



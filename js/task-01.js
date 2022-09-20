

const list = document.querySelectorAll ('.item')
const listLength = document.querySelectorAll ('.item').length
console.log(`Number of categories:`, listLength);

const structure = document.querySelectorAll ('.item');

structure.forEach(function (elem, index, structure){
    console.log(`Category:`, document.querySelectorAll ('h2')[index].textContent, `Elements:`,  elem.querySelectorAll ('li').length)
})

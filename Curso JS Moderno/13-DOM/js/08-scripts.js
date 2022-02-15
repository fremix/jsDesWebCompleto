const navegacion = document.querySelector('.navegacion');

 //console.log(navegacion);
 console.log(navegacion.firstElementChild);
 console.log(navegacion.lastElementChild);
 
 
// console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos
// console.log(navegacion.children[1]); // Lista los elementos reales. En JS a los enlaces se le conoce como nodos


// console.log(navegacion.children[1].nodeName)
// console.log(navegacion.children[1].nodeType)

const card = document.querySelector('.card');

// card.children[1].children[1].textContent = 'nuevo heading desde traversing the dom'

// card.children[0].src = 'img/hacer3.jpg'

// console.log(card.children[0]);

/* Traversing the DOM, es ir navegando por los diferentes elementos */

// Traversing the hijo al padre

// console.log(card.parentNode);
//console.log(card.parentElement.parentElement); /* Se recomienda usar parentElement para l
/* Con childre se recorren los hijos y con parentElement se recorre hacia el padre */

/*
console.log(card);

console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling); para recorrer elementos en el mismo nivel

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);
*/


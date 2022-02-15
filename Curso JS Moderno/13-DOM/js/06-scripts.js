const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);


/*
console.log(encabezado.innerText); // si en el CSS - visibility: hidden; no lo va a encontrar
console.log(encabezado.textContent); // si lo va a encontrar
console.log(encabezado.innerHTML); /* se trae el html

const nuevoHeading = 'Nuevo Encabezado'
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;
*/

const image = document.querySelector('.card img');
image.src = 'img/hacer2.jpg';

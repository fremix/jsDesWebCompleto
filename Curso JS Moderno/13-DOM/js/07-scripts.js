/*const encabezado = document.querySelector('h1');

encabezado.style.backgroundColor = 'red';
encabezado.style.color = 'black';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';*/


const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase');
card.classList.remove('card');
console.log(card.classList);

/* Puede agrear o eliminar clases en el DOM con JS, con add o remove */

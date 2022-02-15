/** Eventos con el Mouse **/

const nav = document.querySelector('.navegacion');

// Registrar un evento

/*
nav.addEventListener('click', () => {
    console.log('click en nav');
});

nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');

    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('mouseenter', () => {
    console.log('entrando a la navegacion');
    nav.style.backgroundColor = 'white';
});


nav.addEventListener('mousedown', () => {
    console.log('entrando a la navegacion');
    nav.style.backgroundColor = 'white';
});

nav.addEventListener('click', () => {
    console.log('entrando a la navegacion');
    nav.style.backgroundColor = 'white';
});

nav.addEventListener('mouseup', () => {
    console.log('entrando a la navegacion');
    nav.style.backgroundColor = 'white';
});
*/
nav.addEventListener('dblclick', () => {
    console.log('entrando a la navegacion');
    nav.style.backgroundColor = 'white';
});

// mousedown - similar al click
// click - click
// dblclick - doble click
// mouseup - cuando sueltas el mouse

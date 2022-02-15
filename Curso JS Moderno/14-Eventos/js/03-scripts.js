/** Eventos con el teclado */

const busqueda = document.querySelector('.busqueda');
/*
busqueda.addEventListener('keydown', () => {
    console.log('escribiendo...');
})

busqueda.addEventListener('keyup', () => {
    console.log('escribiendo...');
})

busqueda.addEventListener('blur', () => {
    console.log('escribiendo...');
})

busqueda.addEventListener('copy', () => {
    console.log('copiando...');
})

busqueda.addEventListener('paste', () => {
    console.log('copiando...');
})

busqueda.addEventListener('cut', () => {
    console.log('copiando...');
})

busqueda.addEventListener('input', (e) => {
    console.log(e.target.value); /*Para saber lo que el usuario esta escribiendo 
})
*/

busqueda.addEventListener('input', (e) => {
    if (e.target.value=== '') {
        console.log('Fallo la validacion');
    } /**Para validacion input que tengan informacion */
})









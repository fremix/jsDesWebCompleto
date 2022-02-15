/**
 * @querySelectorAll
 * retorna todos los elementos
 */

const card = document.querySelectorAll('.card');
console.log(card);

const formularios = document.querySelectorAll('#formulario');
console.log(formularios); /**
JS no valida si se usan mas de 2 ids, sin importar si se siguen buenas o malas practicas */

// Si un elemento no existe

const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste);
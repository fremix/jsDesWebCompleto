/* Eliminar elementos del DOM 
Existen dos formas:
remove: se elimna el elemento por si mismo
removechild: se tiene que pasar la referencia del elemento que se queire eliminar*/

// const primerEnlace = document.querySelector('a');
// primerEnlace.remove();

// console.log(primerEnlace);


/** Eliminar desde el padre **/

const primerEnlace = document.querySelector('.navegacion');

console.log(primerEnlace.children);/* Ayuda a indentificar el del indice para despues eliminarlo*/

primerEnlace.removeChild( primerEnlace.children[2]); /* Se tiene que indicar la posicion a eliminar */


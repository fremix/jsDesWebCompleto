/**
 * Event Bubbling
 sucede en los evento y es cuando presionas en un evento y 
 el evento se propaga, por muchos otros lugares, dando
 resultados inesperados.
 */

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', e  => {
    e.stopPropagation()
    console.log('click en card');
});

infoDiv.addEventListener('click', e => {
    e.stopPropagation()
    console.log('click en info');
});

titulo.addEventListener('click', e => {
    e.stopPropagation()
    console.log('click en titulo');
});
/** Crear HTML con JS */

// Construyendo el elemento
const enlace = document.createElement('A');

// Agregando el texto
enlace.textContent = 'Nuevo Enlace';

// Agregando el href
enlace.href = '/nuevo-enlace';

console.log(enlace);


// Agregando en target
enlace.target = '_blank';


// Agregando un data-enlace
enlace.setAttribute('data-enlace', 'nuevo-enlace');

// Agregando una clase
enlace.classList.add('alguna-clase');

enlace.onclick = miFuncion;


// Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
// Indica la posicion del elemento, y da mas control, agregar el nodo de referencia

navegacion.insertBefore(enlace, navegacion.children[1]);



function miFuncion() {
    alert('Diste Clic');
}


/* Para ver la ubicaciones
console.log(navegacion.children);*/

/* Esta es una opcion para agregar el elemento al final
navegacion.appendChild(enlace);*/


/**
 * Crear un card de forma dinamica
 */

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto'
parrafo1.classList.add('categoria', 'concierto');


const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock'
parrafo2.classList.add('titulo');


const parrafo3 = document.createElement('p');
parrafo3.textContent = '800 por persona';
parrafo3.classList.add('precio');


// Crear div info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear la imagen

const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Texto Alterminativo';

// Crear el card

const card = document.createElement('div');
card.classList.add('card');

// Asignar la imagen
card.appendChild(imagen);


// Asignar info
card.appendChild(info);


// Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);

/* Se inserta al final
contenedor.appendChild(card);*/

/** Carrito */
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();
function cargarEventListeners() {
    // Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);
}

/** Funciones */

function agregarCurso(e) { // para prevenir el eventboubling
    e.preventDefault(); // Previene la accion por defualt

    if (e.target.classList.contains('agregar-carrito')) {// .classList para poder ver las clases de lo que le estamos dando click
        console.log(e.target); 
}
    }
    
/** Lee la informacion del HTML al que le dimos click y extrae la informacion del curso */


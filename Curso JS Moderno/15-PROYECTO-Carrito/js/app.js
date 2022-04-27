/** Carrito */
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    // Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);
}

/** Funciones */

function agregarCurso(e) { // para prevenir el eventboubling
    e.preventDefault(); // Previene la accion por defualt

    if( e.target.classList.contains('agregar-carrito') ) {
        // .classList para poder ver las clases de lo que le estamos dando click
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);

    }       
}
    
/** Lee el contenido del HTML al que le dimos click y extrae la informacion del curso */
function leerDatosCurso( curso ) {
    // console.log(curso);
    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent, // .textContent es para extrare el contenido de un texto
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'), // Para obtener el ID: .getAttribute('data-id')
        cantidad: 1

    }
    
    // Agrega elementos al arreglo del carrito
    articulosCarrito = [...articulosCarrito, infoCurso];

    console.log(articulosCarrito);


}
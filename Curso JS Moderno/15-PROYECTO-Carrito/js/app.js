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

    carritoHTML();
}


// Muestra el carrito de compras en el HTML
function carritoHTML() {

    // Limpiar el HTML
    limpiarHTML();


    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso => {
        const {imagen, titulo, precio, cantidad, id} = curso; // Destructuracion del objeto
        const row = document.createElement('tr') // table row es lo que se requeire dentro de un table body
        row.innerHTML = ` 
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a ref="#" class="borrar-curso" data-id="${id}" > X </a>
            </td>
        `;                              
        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    
    })
    
}

// Elimina los cursos del tbody
function limpiarHTML() {
    // Forma lenta
    // contenedorCarrito.innerHTML = ''; // limpia el html

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild( contenedorCarrito.firstChild )
    }
}
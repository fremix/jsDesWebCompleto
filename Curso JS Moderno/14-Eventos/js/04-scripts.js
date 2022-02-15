/** Evento submit en un formulario */

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);
    // e.preventDefault(); 
    /** preventDefault evita que el navegador haga lo que 
     * tiene que hacer normalmente y nosotros vamos hacer lo que
     * requerimos */

   


function validarFormulario(e) {
    e.preventDefault(); 
    
    console.log('consultar una api...');

    console.log(e.target.action);

}




















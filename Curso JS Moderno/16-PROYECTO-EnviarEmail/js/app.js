/** Variables */
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');

/** Variables para campos  */
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

eventListeners();
function eventListeners() {
    /** Cuando la APP arranca */
    document.addEventListener('DOMContentLoaded', iniciarApp);


    /** Campos del formulario */
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

}


/** Funciones */
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

// Valida el formulario
function validarFormulario(e) {

    
    
    if(e.target.value.length > 0) {
        console.log('Si hay algo...');
    } else {
        e.target.classList.add('border', 'border-red-500');

        mostrarError('Todos los campos son obligatorios');
    }

    if(e.target.type === 'email') { // Validacion del @ en el email
        const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(resultado < 0) {
            mostrarError('El email es invalido');
        }
    }
}

function mostrarError( mensaje ) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error'); // Muestra solo un mensaje de error
    if( errores.length === 0) {
        formulario.appendChild(mensajeError);
    }

    
}

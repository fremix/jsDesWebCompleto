"use strict"; // JS exige ciertas reglas

const producto = {
     nombre: "Monitor 20 pulgadas",
     precio: 300,
     disponible: true
}

Object.seal( producto ); // Se sella el objeto

// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);
console.log(Object.isSealed(producto));

// Diferencias entre freze y seal es que el freze no te permite hacer nada tre deja el objeto tal cual esta y con seal si te permite modificar las llaves existentes de un objeto pero no te deja añadir nuevas ni eliminarlas.
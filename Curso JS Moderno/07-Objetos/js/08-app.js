// Congelar un objeto para NO poderlo modificar

"use strict"; // JS exige ciertas reglas

const producto = {
     nombre: "Monitor 20 pulgadas",
     precio: 300,
     disponible: true
}

Object.freeze( producto ); // Como evitar que un objeto sea modificado


// producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);

console.log(Object.isFrozen(producto)); // isFrozen sirve para saber si el objeto esta congelado



// me quede en el video 40 y 41  sellar un objeto
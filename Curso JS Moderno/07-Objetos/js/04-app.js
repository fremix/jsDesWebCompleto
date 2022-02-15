// Destructuring de Objetos: Destructuracion de objetos
const producto = {
     nombre: "Monitor 20 pulgadas",
     precio: 300,
     disponible: true,
}

//console.log(producto.nombre); // para acceder al objeto, con la sintaxis de punto 
/* const nombre = producto.nombre; // es lo mismo que lo mismo, pero en la forma anterior
console.log(nombre);
 */

// Otras forma de hacerlo es: con Destruturing

const { nombre, precio, disponible } = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);


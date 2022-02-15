/**
 * forEach para iterar un Arrays 
 * 
 */

const carrito = [
     { nombre: 'Monitor 27 pulgadas', precio: 500 },
     { nombre: 'Television', precio: 800 },
     { nombre: 'Tablet', precio: 900 },
     { nombre: 'Audifonos', precio: 300 },
     { nombre: 'Teclado', precio: 150 },
     { nombre: 'Celular', precio: 100 },
]



for (let i = 0; i < carrito.length; i++ ){ 
     console.log(`${carrito [i].nombre} -- precio:${carrito [i].precio }`);
    
 }
 /**
  * Los template string es la sintaxis inclinada
  * 
  */

 carrito.forEach( function (producto) {
     console.log(`${producto.nombre} -- precio:${producto.precio }`);
 })
/**
 * .map para iterar un Arrays y sus diferencias con forEach
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

 /**
  * Los template string es la sintaxis inclinada
  * 
  */

 const nuevoArreglo = carrito.map( function (producto) {
      return `${producto.nombre} -- precio: ${producto.precio}` ;
 })

 const nuevoArreglo2 = carrito.forEach( function (producto) {
     return `${producto.nombre} -- precio:${producto.precio }` ;
 })

 console.log(nuevoArreglo);
 console.log(nuevoArreglo2);

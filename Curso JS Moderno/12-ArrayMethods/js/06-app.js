/**
 * @arrays_method_every
 */

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 100 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// en una validacion con .every, todos los elementos deben cumplir la condision

const resultado = carrito.every((articulo) => articulo.precio < 500);
console.log(resultado);

const resultado2 = carrito.some((articulo) => articulo.precio < 500);
console.log(resultado2);

/**
 * @arrays_method_filter
 */

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 100 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

let resultado;

resultado = carrito.filter((articulo) => articulo.precio > 400);
resultado = carrito.filter((articulo) => articulo.precio < 600);
resultado = carrito.filter((articulo) => articulo.nombre !== "Audifonos");
resultado = carrito.filter(articulo => articulo.nombre === 'Audifonos');

console.log(resultado);

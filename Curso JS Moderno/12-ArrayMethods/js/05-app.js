/**
 * @arrays_method_find
 */

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 100 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// Con un forEach
let resultado = "";
carrito.forEach((articulo, i) => {
  if (articulo.nombre === "Tablet") {
    resultado = carrito[i];
  }
});

console.log(resultado);

// Con un .fine
const resultado2 = carrito.find((articulo) => articulo.nombre === "Tablet");
console.log(resultado2);

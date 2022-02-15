/**
 * @for_of
 */

const pendientes = ["tarea", "comer", "proyecto", "estudiar js"];

const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 800 },
  { nombre: "Tablet", precio: 900 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 150 },
  { nombre: "Celular", precio: 100 },
];

for (let pendiente of pendientes) {
  console.log(pendiente);
}

for (const producto of carrito) {
  console.log(producto.nombre);
}

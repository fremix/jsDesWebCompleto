/**
 * @forEach_ideal_para_recorrer_un_arreglo
 */

const pendientes = ["tarea", "comer", "proyecto", "estudiar js"];

pendientes.forEach((pendiente, i) => {
  console.log(`${i}: ${pendiente}`);
});

const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 800 },
  { nombre: "Tablet", precio: 900 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 150 },
  { nombre: "Celular", precio: 100 },
];

const nuevoArreglo = carrito.forEach((producto) => producto.nombre);

const nuevoArreglo2 = carrito.map((producto) => producto.nombre);

console.log(nuevoArreglo);

console.log({ nuevoArreglo2 });

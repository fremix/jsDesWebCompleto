/**
 * @Arrow_Functions_con_ForEach_y_Map
 */

const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 800 },
  { nombre: "Tablet", precio: 900 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 150 },
  { nombre: "Celular", precio: 100 },
];

const nuevoArreglo = carrito.map(
  (producto) => `${producto.nombre} - precio: ${producto.precio}`
);

carrito.forEach((producto) =>
  console.log(`${producto.nombre} -- precio: $ {producto.precio}`)
);

console.log(nuevoArreglo);

// ME quede aqui el video  68

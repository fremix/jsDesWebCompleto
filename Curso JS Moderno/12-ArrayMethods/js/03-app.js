/**
 * @function_reduce
 */

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 100 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

let total = 0;

carrito.forEach((producto) => (total += producto.precio));
console.log(total);

// Otra forma de hacer es con un REDUCE solucion recomendada

let resultado = carrito.reduce((total, producto) => total + producto.precio, 0); // total es el valor anterior o previo y producto sería el valor actual, el cero es el valor en el cualquiero iniciar
console.log(resultado);

const jugadores = [
  { jugador: "Freddy Morales", edad: 44 },
  { jugador: "Anel Morales", edad: 33 },
  { jugador: "Jesus Morales", edad: 10 },
  { jugador: "valeria Morales", edad: 8 },
  { jugador: "Diego Morales", edad: 8 },
];

let edades = jugadores.reduce((ed, people) => ed + people.edad, 0);
console.log(edades);

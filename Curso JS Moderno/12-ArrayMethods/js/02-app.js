/**
 *@Arryas_Method_findIndex
 */

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 600 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 400 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];
// Con forEach para saber en que posicion esta un mes, siempre hay que recorrer el array
meses.forEach((month, i) => {
  console.log(month, i);
});

// --------

meses.forEach((mes, i) => {
  if (mes === "Abril") {
    console.log(`Encontrado en el indice: ${i}`);
  }
});

const familia = ["freddy", "anel", "jesus", "valeria", "diegui"];

familia.forEach((fam, i) => {
  if (fam === "diegui") {
    console.log(`Encontrada en el indice ${i}`);
  }
});

// Encontrar el indice de Abril

const indice = meses.findIndex((mes) => mes === "Abril");
console.log(`El indice es: ${indice}`); // `xxx ${}` template string

// para comprar un arryar spuede ser con un if

// Encontrar un indice en un arreglo de objetos

const indice1 = carrito.findIndex((car) => car.precio === 400);
console.log(`El indice1 se ubica en: ${indice1}`);

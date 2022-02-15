/**
 * @Arryas_methods_spread_opetator_o_rest
 */

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// spread operator con arreglo de indices
const meses2 = [...meses, "Agosto"];
console.log(meses2);

// para construir el objeto
const articulo = [...carrito, { nombre: "laptop 14 Pulgadas", precio: 15500 }];
console.log(articulo);

// para recibir un nuevo elemento en la variable
const producto = { nombre: "laptop 14 Pulgadas", precio: 15501 };
const articulo2 = [...carrito, producto];
console.log(articulo2);

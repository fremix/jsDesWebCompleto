/**
 * @for_loop
 */

/** 
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log("Este es el 5");
    continue;
  }
  console.log(`Numero: ${i},`);
}
*/

const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 800 },
  { nombre: "Tablet", precio: 900, descuento: true },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 150 },
  { nombre: "Celular", precio: 100 },
  { nombre: "Cinturon", precio: 100 },
];

for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].descuento) {
    console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
    continue;
  }
  console.log(carrito[i].nombre);
}

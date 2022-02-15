/**
 * @Iteradores_for_Loop
 */

/*
for (let i = 0; i <= 2000; i++) {
  console.log(`Numero: ${i}`);
}

// pregunta de examen
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`El número: ${i} es par`);
  } else {
    console.log(`El numero es ${i} es impar`);
  }
}
*/

const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 800 },
  { nombre: "Tablet", precio: 900 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 150 },
  { nombre: "Celular", precio: 100 },
  { nombre: "Cinturon", precio: 100 },
];

for (let i = 0; i < carrito.length; i++) {
  console.log(`${i}`, carrito[i].nombre, "$", carrito[i].precio);
}

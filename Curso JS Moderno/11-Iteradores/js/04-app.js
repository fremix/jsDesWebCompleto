/**
 * @While_Loop
 * Se ejecuta mientras una condicion sea verdadera
 

let i = 0; // Inicializar el while
while (i < 10) {
  // Condición
  console.log(`numero ${i}`);

  i++; // Incremento
}

let i = 1; // Inicializa el while

while (i < 100) {
  //condición
  if (i % 15 === 0) {
    console.log(`${i} fizz buzz `);
  } else if (i % 3 === 0) {
    console.log(`${i} fizz `);
  } else if (i % 5 === 0) {
    console.log(`${i} buzz `);
  }
  i++;
}
*/

let i = 1; // Inicializa el while

while (i <= 100) {
  //condición
  if (i % 2 === 0) {
    console.log(`${i} Es par `);
  } else if (i % 1 === 0) {
    console.log(`${i} Es impar`);
  }
  i++;
}

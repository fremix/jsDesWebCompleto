/**
 * @Do_While
 * @Se_ejecuta_al_menos_una_vez_y_luego_verifica_la_condision_y_a_sea_que_se_cumpla_o_no
 */

/** 
let i = 0; // inicio

do {
  console.log( `Número ${i}` );

  i++; // Incremento
} while (i < 100); //Condicion

*/
let i = 1;
do {
  if (i % 15 === 0) {
    console.log(`${i} fizz buzz `);
  } else if (i % 3 === 0) {
    console.log(`${i} fizz `);
  } else if (i % 5 === 0) {
    console.log(`${i} buzz `);
  }
  i++;
} while (i < 100);

// Practicar do while

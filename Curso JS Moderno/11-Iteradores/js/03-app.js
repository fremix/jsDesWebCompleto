/**
 * @Reto_Fizz_Buzz_1_AL_100 
 @Multiplos_de_3_36912151821242730_etc_etc_imprime_fizz
 @Multiplo_de_5_5101520_etc_etc_imprime_Buzz
 @Multiplo_de_amnos_153045_etc_etc_imprime_FIZZBUZZ
 */

for (let i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log(`${i} fizz buzz `);
  else if (i % 3 === 0) {
    console.log(`${i} fizz `);
  } else if (i % 5 === 0) {
    console.log(`${i} buzz `);
  }
}



for (let i = 1; i < 100; i++) {
     if (i % 15 === 0 ) console.log(`${i} fizz buzz `);
     else if (i % 3 === 0) {
       console.log(`${i} fizz `);
     } else if (i % 5 === 0) {
       console.log(`${i} buzz `);
     }
   }
   
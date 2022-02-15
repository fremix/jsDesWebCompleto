/**
 * Diferencia entre funcion y metodo: Son los mismo, pero tiene que ser en el contexto en que son utilizadas
 */

const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero2)); // Esto es una funcion

console.log(numero1.toString()); // Esto es un metodo


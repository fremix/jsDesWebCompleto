/**
 *@array_method_concat
 */

// Para concatenar arrays:

const meses = ["Enero", "Febrero", "Marzo", "Abril"];
const meses2 = ["Mayo", "Junio", "Julio", "Agosto"];
const meses3 = ["Septiembre", "Octubre", "Noviembre", "Diciembre", "Otro mes"];
// Con .concat
const resultado = meses.concat(meses2, meses3);
console.log(resultado);

// Con spread operator

const resultado2 = [...meses, ...meses2, ...meses3, "otro mez"];
console.log(resultado2);

/**
 * Operador && AND valida que se cumplan ambas variables
 */

const usuario = false;
const puedePagar = true;

if (usuario && puedePagar) {
  console.log("Puede comprar");
} else if (!puedePagar && !usuario) {
  // ! el signo quiere decir diferete de
  console.log("No puede comprar");
} else if (!usuario) {
  console.log("Inicia sesion en tu cuenta");
} else if (!puedePagar) {
  console.log("Fondos insuficientes");
}

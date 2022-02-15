/**
 * @Operador_ternario
 */

const autenticado = false;
const puedePagar = false;

/**
 * @Operador_ternario_con_ &&_y_|| (AND y OR)
 */
console.log(
  autenticado || puedePagar ? "si puede pagar " : "No esta autenticado"
);

/**
 * Operador || valida que al menos una variable se cumpla
 */

const efectivo = 300,
  credito = 300,
  disponible = efectivo + credito,
  totalPagar = 600;

if (efectivo > totalPagar || credito > totalPagar || disponible >= totalPagar) {
  // Este codigo sirve para validar formularios, que todos los campos esten llenos.
  console.log("Si, podemos pagar");
} else {
  console.log("Fondos insuficientes");
}

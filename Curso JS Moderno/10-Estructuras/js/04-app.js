const dinero = 500;
const totalAPagara = 600;
const tarjeta = false;
const cheque = false;
const transferencia = true;

if (dinero >= totalAPagara) {
  console.log("Puedo pagar, porque tengo efectivo");
} else if (tarjeta) {
  console.log("Si puedo pagar porque tengo la tarjeta");
} else if (cheque) {
  console.log("Pago garantizado con cheque");
} else if (transferencia) {
  console.log("Tambien puedo pagar con trans");
} else {
  console.log(" Fondos insuficientes ");
}

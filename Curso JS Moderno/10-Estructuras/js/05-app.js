/**Switch case */

const metodoPago = "transferencia";

switch (metodoPago) {
  case "efectivo":
    pagar();
    break;
  case "cheque":
    console.log(`Freddy:  Pagaste con ${metodoPago}`);
    break;
  case "tarjeta":
    console.log(`Freddy: Pagaste con ${metodoPago}`);
    break;
  case "transferencia":
    console.log(`Freddy: Efectuaste una ${metodoPago}`);
    break;
  default:
    console.log("Freddy: Aun no haz seleccionado un metodo de pago");
    break;
}

function pagar() {
  console.log("pagando...");
}

/**
 * @Buenas_practicas_en_el_codigo
 */

const autenticado = true;

if (autenticado /*=== true*/) {
  // === true esta de mas se da por hecho que es = a true
  console.log("El usuario esta autenticado");
}

const puntaje = 450;

if (puntaje > 400) {
  // tener cuidado en el orden, se debe ejecutar el de mayor prioridad
  console.log("Puntaje excelente, felicidades");
} else if (puntaje > 300) {
  // El puntaje mayor se debe mostrar primero, esto debe estar inveso, este codigo arriba, (se cambia, 400 arriba)
  console.log("Buen puntaje");
}

const puntos = 401;

function revisarPuntaje() {
  if (puntos > 400) {
    console.log("Puntaje excelentesss...");
    return;
  }

  if (puntos >= 300) {
    console.log("Buen puntaje...");
    return;
  }
}

revisarPuntaje();

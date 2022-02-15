/**
 * @for_in
 * @itera_sobre_objetos_y_for_of_itera_sobre_objetos
 */

/*
const pendientes = ["tarea", "comer", "proyecto", "estudiar js"];

for (let pendiente in pendientes) {
  console.log(pendiente);
}
*/

const automovil = {
  model: "Camaro",
  year: "2021",
  motor: "6.0",
};

/*
for (let propiedad in automovil) {
  console.log(`${automovil[propiedad]}`);
}

*/

for (let [llave, valor] of Object.entries(automovil)) {
  // Para iterar un objeto podemos usar Object.entries
  console.log(llave, ":", valor);
}

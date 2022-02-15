/**
 * Parametros y argumentos en Funiones
 */
function sumar(a, b) {
  /** a y b son parametros */
  console.log(a + b);
}

sumar(2, 3); // 2 y 3 son argumentos
sumar(500, 300); // 500 y 300 son argumentos

function saludar(nombre, apellido) {
  console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Freddy", "Morales"); // Freddy y Morales son argumetos

function miOrigen(ciudad, estado) {
  // ciudad y estado son parametros
  console.log(`¿Eres de ${ciudad} ${estado}`);
}

miOrigen("Villahermosa", "Tabasco?"); // Villahermosa y Tabasco son argumentos

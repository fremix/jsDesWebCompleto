/**
 * @Multiples_funciones_que_pasan_valores
 */

function sumar(a, b) {
  // Parametros
  return a + b;
}

const resultado = sumar(2, 3);

console.log(resultado);

/**
 * @Ejemplo_mas_avanzado
 */

let total = 0; // se inicializa la variable total en 0
function agregarcarrito(precio) {
  // precio es el parametro
  return (total += precio); // La funciona retorna el total + el precio
}

function calcularImpuesto(total) {
  // calcula el impuesto del total
  return total * 1.16;
}

total = agregarcarrito(100); // total concentra todos los precios
total = agregarcarrito(300);
total = agregarcarrito(600);

const totalPagar = calcularImpuesto(total); // Calcula el impuesto del total

console.log(`El total a pagar es: ${totalPagar}`); // Imprime el total a pagar

console.log(total); // Imprime el subtotal

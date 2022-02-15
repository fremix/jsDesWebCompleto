// String Methods - Replace, Slice y Substring
// Metodo para reemplazar un String por otro String
const producto = 'Monitor 20 pulgadas';

// .replace para reemplazar
console.log(producto);
console.log(producto.replace('pulgadas','"'));
console.log('freddy');

console.log(producto.replace('Monitor 20 pulgadas','Monitor Curvo 55','"'));

// .slice para cortar y mostrar parte del String indicado en las coordenadas
console.log(producto.slice(0,10));
console.log(producto.slice(10));

// Alternativa a slice

console.log(producto.substring(0,10));
console.log(producto.substring(2,1));

/* La diferencia entre slice y substring, es que las coordenas inversas (2,1) con slice no se imprime nada
   Con substring reorganiza las coordenadas y muestra el caracter de la ubicacion indicada.
*/

// Para mostrar solo el primer caracter del string
const usuario = 'freddy';
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));

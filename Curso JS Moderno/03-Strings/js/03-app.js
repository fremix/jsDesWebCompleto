// Concatenar un String y Template Strings

const producto = ' Monitor 20 pulgadas';
const precio = ' $ 30 USD,';

console.log(producto.concat(precio));
console.log(precio.concat(producto));
console.log(producto.concat(' super oferton'));

// Otras forma de concatenar

console.log(producto + " mas descuento por pronto pago" + precio);

console.log('El articulo' + producto + ' tiene un precio de '+ precio);
console.log('El articulo' , producto , ' tiene precio de ', precio);

// Template String o template literal
// Se usa la comilla inclinada, se llama backtick
console.log(`El articulo ${producto} tiene un costo de ${precio}`)
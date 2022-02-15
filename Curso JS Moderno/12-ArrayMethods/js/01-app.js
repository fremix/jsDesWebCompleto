/**
 * @Arryas_methods_se_usa_some_para_objetos a indices{}[]_e_includes_para_arrays_normal[]
 */

console.warn(".includes[]");
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
console.warn(".some{}[]");
const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

/**
 * @Comprobar_si_un_valor_existe_en_arreglo


meses.forEach((mes) => {
  if (mes === "Enero") {
    console.log("Enero si existe");
  }
});
 */
console.warn("Arrays Method 1");

/**
 * @Arrays_method_1
 
const resultado = meses.includes("Junio"); // Otra forma de comprobar si un valor existe en un arreglo, el codigo es mas corto.
console.log(resultado);
*/

/**
 * @Arreglo_de_objetos_se_usa_some
 */
// Para recorrere un arreglo de objetos se utiliza .some
const existe = carrito.some((producto) => producto.nombre === "Procesador"); // Se eliminan las llaves y el return haciendomas compacto el codigo
console.log(existe);


// En un arreglo tradicional con .some
const existe2 = meses.some((mes) => mes === "Febrero");
console.log(existe2);

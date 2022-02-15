// String Methods - Repeat y Split 
const producto = 'Monitor 55 pulgadas';

// .repeat permite repetir una cadena de texto...

const texto = ' en promocion, '.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);


// Split: dividir un string 
const actividad = 'Estoy aprendiendo javascript moderna';
console.log(actividad.split(' '));

const hobbies = 'leer, correr, comer, dormir, aprender a programar';
console.log(hobbies.split("," ));

const tweet = "Aprendiendo javaScript #JSModernoConJuan";
console.log(tweet.split(' #'));
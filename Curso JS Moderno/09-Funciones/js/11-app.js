/**
 * @Arrow_Functions_con_parametros
 */

const aprendiendo = function (tecnologia, tecnologia2) {
  console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
};
aprendiendo("ASp.Net Core", "PHP");

const aprendiendo2 = (tecnologia, tecnologia2) =>
  `Aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log(aprendiendo2("NodeJS", "Oracle"));

/**
 *  @Como_se_comunican_las_funciones
 */

iniciarApp();

function iniciarApp() {
  console.log("start app...");
  segundaFuncion();
}

function segundaFuncion() {
  console.log("From function second");
  usuarioAutenticado("fr3m1");
}

function usuarioAutenticado(user) {
  // parametro
  console.log("Verify user, wait you... ");
  console.log(`Autenticated user, successfully: ${user}`);
  console.log(`Hello; ${user} ${"¿What do you need?"}`);
}

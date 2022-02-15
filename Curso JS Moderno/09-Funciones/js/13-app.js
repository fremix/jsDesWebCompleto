/**
 * @Arrow_Functions_en_el_reproductor_de_musica
 */

const reproductor = {
  reproducir: (id) => console.log(`Reproduciendo cancion con el id ${id}`),
  cancion: "",
  pausar: () => console.log("Pausando..."),
  borrar: (id) => console.log(`Borrando cancion...${id}`),
  crearPlaylist: (nombre) => console.log(`Creando PlayList ${nombre}`),
  reproducirPlaylist: (nombre) =>
    console.log(`Reproduciendo mi PlayList de ${nombre}`),

  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },

  get obtenerCancion() {
    console.log(`${this.cancion}`);
  },
};

reproductor.reproducir(30);
reproductor.reproducir(31);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Heavy Metal");
reproductor.crearPlaylist("Rock Pesado");
reproductor.reproducirPlaylist("Romanticas");
reproductor.nuevaCancion = "Enter Sandman";
reproductor.obtenerCancion;

/**
 * @Funciones_de_un_objeto
 * @Metodos_de_propiedad
 */

const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo cancion con el id ${id}`);
  },
  pausar: function () {
    console.log("Pausando...");
  },
  borrar: function (id) {
    console.log(`Borrando cancion...${id}`);
  },
  crearPlaylist: function (nombre) {
    console.log(`Creando PlayList ${nombre}`);
  },
  reproducirPlaylist: function (nombre) {
    console.log(`Reproduciendo mi PlayList de ${nombre}`);
  },
};

const creandolist = {
  creando: function (misRolas) {
    console.log(`Creando Playlist de ${misRolas}`);
  },
  cantando: function (misRolas) {
    console.log(`Tocando Musica de ${misRolas}`);
  },
};
reproductor.reproducir(30);
reproductor.reproducir(31);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Heavy Metal");
reproductor.crearPlaylist("Rock Pesado");
reproductor.reproducirPlaylist("Romanticas");

creandolist.creando("Metallica");
creandolist.cantando("Metallica");
creandolist.cantando("Cumbia");

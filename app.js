const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
// Para limpiar la consola al principio del código.
console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));

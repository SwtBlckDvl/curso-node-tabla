const fs = require("fs");
const colors = require("colors");

const crearArchivo = (base, listar, hasta) => {
  const promesa = new Promise((resolve, reject) => {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} $x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".red} ${i} ${"=".red} ${base * i}\n`;
    }

    if (listar) {
      console.log("===============".rainbow);
      console.log("Tabla del:", base);
      console.log("===============".rainbow);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    resolve(`tabla-${base}.txt creado`);
  });
  return promesa;
};

module.exports = {
  crearArchivo,
};

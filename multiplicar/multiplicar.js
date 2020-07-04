const fs = require('fs');

let listarTabla = (base, limite) => {
    if (!Number(base)) {
        return;
    }

    if (!Number(limite)) {
        return;
    }

    console.log(` Tabla del ${base}`.underline.yellow);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
    console.log('============='.yellow);
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} no es un número!`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor ${limite} no es un número!`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`el archivo tabla-${base}.txt sido creado!`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
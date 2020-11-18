//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('==============='.green);
    console.log(`tabla de ${base}`.green);
    console.log('==============='.green);

    for (let i = 1; i <= limite; i++) {
        let resultado = base * i;
        console.log(`${base} * ${i} = ${resultado}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            let resultado = base * i;
            //console.log(`${base} * ${i} = ${resultado}`);
            data += `${base} * ${i} = ${resultado}\n`;
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}-hasta-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-hasta-${limite}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
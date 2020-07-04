const argv = require('./config/yargs').argv;
const colors = require('colors/safe');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        listarTabla(base, limite);
        break;
    case 'crear':
        // let base = '15';
        /**
         * Ejecutar: node app --base=N
         * N es el número de tabla
         */
        // let base = process.argv[2].split('=')[1];
        crearArchivo(base, limite).then(mensaje => {
            console.log('Archivo creado:', colors.yellow(mensaje));
        }).catch(err => {
            console.log(err);
        })
        break;
    default:
        console.log('Comando no reconocido');
}

// console.log(process.argv);
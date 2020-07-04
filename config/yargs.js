const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 12
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla multiplicar', options)
    .command('crear', 'Crear un archivo con la tabla multiplicar', options)
    .help()
    .argv;

module.exports = {
    argv
}
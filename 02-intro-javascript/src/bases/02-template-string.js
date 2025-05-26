const nombre = 'Sebastián';
const apellido = 'Escobar';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`

console.log(nombreCompleto);

function getSaludo(n) {
    return `Hola Mundo ${n}`
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)
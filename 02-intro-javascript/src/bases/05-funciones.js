// function saludar(nombre) {
//     return `Hola, ${nombre}`;
// }

// saludar = 30;

// const saludar = function (nombre) {
//     return `Hola, ${nombre}`
// }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;


console.log(saludar2('Goku'));
console.log(saludar3('Vegeta'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'LAJSDLFJ'
})

const user = getUser();
console.log(user);

const getUsuarioActivo = (nombre) => ({

    uid: 'ABC123',
    username: nombre

})

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo)
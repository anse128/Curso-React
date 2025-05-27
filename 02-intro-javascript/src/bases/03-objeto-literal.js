const persona = {
    nombre: 'Tnoy',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55423453,
        lat: 14.3423,
        lng: 34.3423,
    }
}

console.log(persona)
console.log({ persona }) // crea un objeto que dentro tiene una propiedad persona y le estamos agregando persona
console.table({ persona: persona }) // es lo mismo de arriba

const persona2 = persona; // esto copia la referencia
persona2.nombre = 'Peter'  // modifica persona tambien
//const persona2 = {nombre: 'Peter' etc...} // para hacerlo correctamente se debe agregar propiedad por propiedad

console.log(persona2)

const persona3 = { ...persona }; // operador spreed, clona el objeto
console.log(persona3)
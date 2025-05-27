const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

const { nombre, edad, clave } = persona;
const { nombre: nombre2 } = persona;

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);
// console.log(nombre2);
// console.log(edad);
// console.log(clave);

const useContext = ({ nombre, edad, rango = 'Capitán' }) => {

    // const { nombre, edad, clave } = usuario;
    // console.log(edad, clave, nombre, rango);
    return {
        nombreClave: nombre,
        anios: edad,
        latlng: {
            lat: 12.4342,
            lng: -34.2341
        }
    }
}


const { nombreClave, anios, latlng: { lat, lng } } = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);


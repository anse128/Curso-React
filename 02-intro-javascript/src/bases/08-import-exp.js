import { heroes } from './data/heroes'


const getHeroById = (id) => heroes.find((heroe) => heroe.id === id);


const getUsuarioActivo = (nombre) => ({

    uid: 'ABC123',
    username: nombre

})
console.log(getHeroById(3))

const getHeroByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroByOwner('DC'))
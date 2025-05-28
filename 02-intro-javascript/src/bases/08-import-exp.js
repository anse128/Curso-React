// import { heroes } from './data/heroes'
import heroes, { owners } from "../data/heroes";

// console.log(owners)

export const getHeroById = (id) => heroes.find((heroe) => heroe.id === id);


const getUsuarioActivo = (nombre) => ({

    uid: 'ABC123',
    username: nombre

})
// console.log(getHeroById(3))

export const getHeroByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroByOwner('DC'))

// export default getHeroById;
import { getHeroById } from "./bases/08-import-exp";
import heroes from "./data/heroes";


// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         // console.log('2 segundos despúes')
//         const p1 = getHeroById(2);
//         resolve(p1)
//         reject('no se pudo encontrar el héroe'); 
//     }, 2000)

// })

// promesa.then((heroe)=>{
//     console.log('heroe', heroe)
// })
// .catch(err => console.warn(err))

const getHeroByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            // console.log('2 segundos despúes')
            const p1 = getHeroById(id);
            // console.log(p1);
            if (p1) {
                resolve(p1)
            } else {
                reject('no se pudo encontrar el héroe');
            }

        }, 2000)

})

}

getHeroByIdAsync(5)
    // .then(heroe => console.log('Heroe', heroe))
    .then(console.log)
    // .catch((err) => console.warn(err))
    .catch(console.warn)
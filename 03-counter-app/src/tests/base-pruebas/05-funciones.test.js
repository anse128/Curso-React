import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas', () => {
    test('getUser debe de retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(testUser).toEqual(user) // se debe usar cuando se comparan objetos porque apuntan a espacios de memoria distintos

        console.log(user)
    })


    test('getUsuarioActivo debe de retornar un objeto', () => {

        const name = 'Sebastián'

        const user = getUsuarioActivo(name)

        console.log(user)

        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        })
    })

})
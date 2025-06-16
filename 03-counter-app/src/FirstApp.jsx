// import React from 'react'
// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Sebastián'
// } // React no renderiza denuevo si esta afuera de FirstApp



// const getResult = (a, b) => {
//     return a + b;
// }

import propTypes from 'prop-types';

// export const FirstApp = ({
//     name = 'Sebastián Escobar',
//     subTitle = 'No hay subtítulo',
//     title = 'No hay título'
// }) => {

export const FirstApp = ({name,subTitle,title}) => {
    return (
        <>
            <h1>{title}</h1>
            {/* <h1>{getResult(1,2)}</h1> */}
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}

// Los proptypes están deprecados

//Se recomienda usar typescript
FirstApp.prototype = {
    name: propTypes.string.isRequired,
    subTitle: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
}

//Para los defaul se recomienda hacerlo como se hizo arriba en la función
FirstApp.defaultProps = {
    name: 'Sebastián Escobar',
    subTitle: 'No hay subtítulo',
    title: 'No hay título',
}
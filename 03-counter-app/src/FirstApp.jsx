// import React from 'react'
// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Sebastián'
// } // React no renderiza denuevo si esta afuera de FirstApp



// const getResult = (a, b) => {
//     return a + b;
// }

import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle }) => {
    // console.log(title)
    return (
        <>
            <h1>{title}</h1>
            {/* <h1>{getResult(1,2)}</h1> */}
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subTitle }</p>
        </>
    )
}

FirstApp.PropTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}
import React from 'react'
const newMessage = {
    message: 'Hola Mundo',
    title: 'Sebastián'
} // React no renderiza denuevo si esta afuera de FirstApp



const getResult = (a, b) => {
    return a + b;
}

export const FirstApp = ({ title ,subTitle }) => {
    console.log(title)
    return (
        <>
            <h1>{title}</h1>
            {/* <h1>{getResult(1,2)}</h1> */}
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subTitle+1}</p>
        </>
    )
}


import React from 'react'

export const CounterApp = ({ title, value }) => {
    
    const handleAdd = (event, newValue) =>{
        // console.log(newValue)
        // console.log(event)
        console.log('+1')
        value = 1000
        console.log(value)
    }

    return (
        <>
            <h1>{title}</h1>
            <h2>{value}</h2>
            {/* <button onClick={(event) => handleAdd(event)}> */}
            {/* <button onClick={(event) => handleAdd(event, 'hola')}> //nuevo valor */}
            <button onClick={handleAdd}>
                +1
            </button>
        </>
    )
}

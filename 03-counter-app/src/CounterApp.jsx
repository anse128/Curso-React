import { useState } from 'react'

export const CounterApp = ({ title, value }) => {

    const [counter, setCounter] = useState(0)

    const handleAdd = () => {
        // console.log(newValue)
        // console.log(event)
        // setCounter((c) => c + 1);
        setCounter(counter+1);
    }

    return (
        <>
            <h1>{title}</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>
                +1
            </button>
        </>
    )
}

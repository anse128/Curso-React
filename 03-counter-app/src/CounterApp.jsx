import { useState } from 'react'

export const CounterApp = ({ title, value }) => {

    const [counter, setCounter] = useState(0)

    const handleAdd = () => setCounter(counter + 1);
    const handleSubstract = () => setCounter(counter - 1);
    const handleReset = () => setCounter(value);


    return (
        <>
            <h1>{title}</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleSubstract}> -1 </button>
            <button onClick={handleReset}> Reset </button>
        </>
    )
}

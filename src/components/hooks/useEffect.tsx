import {useEffect, useState} from "react";


export const UseEffect = () => {
    const [counter, setCounter] = useState(1)
    console.log('Example')
    useEffect(() => {
    })

    return <>
        hello {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}
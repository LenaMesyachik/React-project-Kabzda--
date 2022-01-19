import {useEffect, useState} from "react";


export const UseEffect = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log('Example')
    useEffect(() => {
        debugger
        console.log('useEffect')
        document.title = counter.toString()
    }, [counter])

    useEffect(() => {
        debugger
        console.log('useEffect2')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        debugger
        console.log('useEffect3')
        document.title = counter.toString()
    }, )

    return <>
        hello {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}
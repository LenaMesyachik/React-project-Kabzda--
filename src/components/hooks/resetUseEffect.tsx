import {useEffect, useState} from "react";


export const ResetUseEffect = () => {
    const [counter, setCounter] = useState(1)

    console.log('Component rendered')

    useEffect(() => {
        console.log('Effect occurred')
    } ,[] )


const increase = () => {
    setCounter(counter+1)
}
    return (
    <>
        hello counter:{counter}
        <button onClick={increase}></button>
    </>
    )
}
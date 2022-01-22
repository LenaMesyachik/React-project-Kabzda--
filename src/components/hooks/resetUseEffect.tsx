import {useEffect, useState} from "react";


export const ResetUseEffect = () => {
    const [counter, setCounter] = useState(1)

    console.log('Component rendered with ' + counter)

    useEffect(() => {
        console.log('Effect occurred with ' + counter)

        return () => {
            console.log('ResetEffect with ' + counter)
        }
    } ,[counter] )


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
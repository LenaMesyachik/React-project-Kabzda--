import {useEffect, useState} from "react";


export const UseEffect = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log('Example')
    /* useEffect(() => {
         debugger
         console.log('useEffect')
         document.title = counter.toString()
     }, [counter])
 */
    useEffect(() => {
            setInterval(() => {
                console.log('tick:' + counter)
                setCounter((state) => state + 1 )
            }, 1000)
        }
        ,[] )

    return <>
        hello counter:{counter} - fake:{fake}
      {/*  <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
    </>
}
import React, {useState} from 'react';

export const TrackValueOfUncontrolledInput = () => {
    const [value,setValue]=useState('')
    return (
        <>
            <input onChange={(e)=>{setValue(e.currentTarget.value)}}/>
            {value}
        </>
    )
}


export const ControlledInputWithFixedValue = () => {
    return (
        <>
            <input value={'it-incubator'}/>
        </>
    )
}


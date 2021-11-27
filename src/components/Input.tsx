import React, {useRef, useState} from 'react';

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return (
        <div>
            <input onChange={(e) => {
                setValue(e.currentTarget.value)
            }}/>
            {value}
        </div>
    )
}


export const ControlledInputWithFixedValue = () => {
    return (
        <div>
            <input value={'it-incubator'}/>
        </div>
    )
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const onClickSave = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={onClickSave}>save</button>
            {value}
        </div>
    )
}


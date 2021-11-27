import React, {ChangeEvent, ChangeEventHandler, useRef, useState} from 'react';

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


export const ControlledInput= () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value) }
        return (
            <div>
                <input value={parentValue} onChange={onChange}/>
            </div>
        )
    }



export const ControlledCheckbox= () => {
    const [checked, setChecked]=useState(true)
    return (
        <div>
            <input type={'checkbox'} checked={checked} onChange={(e)=>setChecked(e.currentTarget.checked)}/>
        </div>
    )
}
export const ControlledSelect= () => {
    const [value, setValue]=useState(' ')
    const onChange=(e:ChangeEvent<HTMLSelectElement>)=>setValue(e.currentTarget.value)
    return <select value={value} onChange={onChange}>
       <option>none</option>
       <option value={'1'}>Minsk</option>
       <option value={'2'}>Moscow</option>
       <option value={'3'}>Kiev</option>

    </select>
}



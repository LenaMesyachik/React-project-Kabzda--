import React, {useEffect, useState} from 'react';
import {DigitalView} from "./DigitalClock";
import {AnalogView} from "./components/AnalogClock";


type ClockType = {
    mode?: 'analog' | 'digital'
}
export const get2digitsString = (num: number) => num < 10 ? '0' + num : num

export const Clock = (props: ClockType) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalID =
            setInterval(() => {
                console.log('tick')
                setDate(new Date())
            }, 1000)
        return () => {
            debugger
            //clearInterval(intervalID)
        }
    }, [])
    return <div>
        {props.mode === 'analog' ?
            <><DigitalView date={date}/></>
            :
            <><AnalogView date={date}/></>}
    </div>
}

 export type ClockViewType = {
    date: Date
}


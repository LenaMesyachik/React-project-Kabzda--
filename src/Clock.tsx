import React, {useEffect, useState} from 'react';


type ClockType = {
    mode?: 'analog' | 'digital'
}
const get2digitsString = (num: number) => num < 10 ? '0' + num : num

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

type ClockViewType = {
    date: Date
}

export const DigitalView: React.FC<ClockViewType> = ({date}) => {
    return <>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </>
}
export const AnalogView: React.FC<ClockViewType> = ({date}) => {
    return <>ANALOG</>
}

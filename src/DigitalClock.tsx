import {ClockViewType, get2digitsString} from "./Clock";


export const DigitalView: React.FC<ClockViewType> = ({date}) => {
    return <>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </>
}

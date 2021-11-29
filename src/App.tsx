import React, {useState} from 'react';
import './App.css';
import {RatingValueType} from "./components/Rating.tsx/Rating";
import {
    ControlledCheckbox,
    ControlledInput,
    ControlledInputWithFixedValue, ControlledSelect,
    GetValueOfUncontrolledInputByButtonPress,
    TrackValueOfUncontrolledInput
} from "./components/Input";
import Accordion from "./components/Accordion/Accordion";
import {Select, Select1Base, Select2Base, Select3Base} from "./components/Accordion/Select/Select";



function App() {


   /* let [ratingValue, setRatingValue] = useState<RatingValueType>(4)*/
/*    const [value, setValue] = useState('')*/
    const onClick=()=>{alert('hello')}
    return (
        <div className={'App'}>
            {/*   <OnOff/>
*/}

            {/*<Rating value={ratingValue} onClick ={setRatingValue}/>
            <UncontrolledRating/>*/}
            {/*
            <TrackValueOfUncontrolledInput/>
            <ControlledInputWithFixedValue/>
            <GetValueOfUncontrolledInputByButtonPress/>
            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>*/}
           {/* <Accordion items={[{title: 'return', value: 1}, {title: 'delete', value: 2},
                {title: 'on',value: 3}, {title: 'off', value: 4}]}
                       titleValue={'menu'} collapsed={true} onClick={onClick}/>*/}
            <Select value={5} onChange={() => {
            }} items={[{value: '1', title: 'Minsk'},
                {value: '2', title: 'Moscow'},
                {value: '3', title: 'Kiev'}]}/>
            <div>
            <Select1Base/>
            </div>
           {/* <Select2Base/>
            <Select3Base/>*/}
        </div>
    );
}


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>
            {props.title}
        </h1>
    )
}


export default App;

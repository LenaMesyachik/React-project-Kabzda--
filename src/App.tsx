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
            <Accordion items={[{title: 'return', value: 1}, {title: 'delete', value: 2},
                {title: 'on',value: 3}, {title: 'off', value: 4}]}
                       titleValue={'menu'} collapsed={true} onClick={onClick}/>
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

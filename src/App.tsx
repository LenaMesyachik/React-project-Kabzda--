import React, {useState} from 'react';
import './App.css';
import {RatingValueType} from "./components/Rating.tsx/Rating";
import {ControlledInputWithFixedValue, TrackValueOfUncontrolledInput} from "./components/Input";


function App() {


    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    return (
        <div className={'App'}>
            {/*   <OnOff/>
*/}

            {/*<Rating value={ratingValue} onClick ={setRatingValue}/>
            <UncontrolledRating/>*/}

            <TrackValueOfUncontrolledInput/>
            <ControlledInputWithFixedValue/>
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

import React, {useReducer, useState} from 'react';


type AccordionPropsType = {
    titleValue: string

}

type actionType={
    type: string
}
/*const TOGGLE-CONSTANT="TOGGLE-COLLAPSED"*/

const reducer=(state:boolean, action:actionType)=> {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            return !state;
        default:
            throw new Error ('Bad action type');
    }
    return state
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    debugger

    //const [collapsed, setCollapsed] = useState(false)
    const [collapsed, dispatch] = useReducer(reducer,false)
    return <div>
        <AccordionTitle title={props.titleValue} onClick={()=>{dispatch({type:'TOGGLE-COLLAPSED'})}}/>
        {!collapsed && <AccordionBody/>}
    </div>
}


type  AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={()=>{props.onClick()}}>{props.title} </h3>
}


function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}




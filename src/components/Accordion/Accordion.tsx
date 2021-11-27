type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    items: Array<ItemType>
    onClick:(value:any)=>void
}

type ItemType={
    title:string,
    value:any
}
function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue}/>
        {props.collapsed === true && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}


type  AccordionTitlePropsType = {
    title: string
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3>{props.title}</h3>
}
type AccordionBodyPropsType = {
    items: Array<ItemType>,
    onClick:(value:any)=>void
}

const AccordionBody = ({items,...props}: AccordionBodyPropsType) => {
    return (
        <ul>
            {items.map((i, index)=><li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    );
}

export default Accordion;

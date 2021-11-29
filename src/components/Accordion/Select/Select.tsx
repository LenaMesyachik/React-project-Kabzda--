import React, {useState, KeyboardEvent, useEffect} from 'react';
import styles from './Select.module.css'

type ItemType = {
    title: string,
    value: any
}
type SelectPropsType = {
    value?: any,
    onChange: (value: any) => void
    items: Array<ItemType>
}

export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(true)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const toggleItem = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItem()
    }
    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value ])

const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredElementValue) {

            if (props.items[i + 1]) {
                props.onChange(props.items[i + 1].value)


                break
            }
        }
    }
}

return (
    <div>
        {/* <select>
                <option value=''>Minsk</option>
                <option value=''>Moscow</option>
                <option value=''>London</option>
            </select>*/}
        <div className={styles.select} onKeyPress={onKeyUp} tabIndex={0}>
            <span className={styles.main} onClick={toggleItem}>{selectedItem && selectedItem.title}</span>
            {active &&
            <div className={styles.items}>
                {props.items.map(i => <div className={styles.items + '' + (selectedItem === i ? styles.select : "")}
                                           key={i.value}
                                           onMouseEnter={() => {
                                               setHoveredElementValue(i.value)
                                           }}
                                           onClick={() => onItemClick(i.value)}>{i.title}</div>)}
            </div>}
        </div>
    </div>
)
}

export const Select1Base = () => {
    const [value, setValue] = useState(null)
    return (
        <Select value={value}
                onChange={setValue}
                items={[{value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'}]}/>
    )
}

export const Select2Base = () =>
    <Select value={'2'}
            onChange={() => alert('jjj')}
            items={[{value: '1', title: 'Minsk'},
                {value: '2', title: 'Moscow'},
                {value: '3', title: 'Kiev'}]}/>

export const Select3Base = () =>
    <Select
        onChange={() => alert('jjj')}
        items={[{value: '1', title: 'Minsk'},
            {value: '2', title: 'Moscow'},
            {value: '3', title: 'Kiev'}]}/>

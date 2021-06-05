import React from 'react';
import { Item } from '..';

const ItemCategories = (props) => {

    const isSelected = selectedCategories.includes(props.typ) ? true : false;
    const handleChange = () => {

        if (isSelected === true) {
            selectedCategories.filter((item)=> {
                return !(item.typ === props.typ)
            })
        } 
    }

    return (

        <label key={i}>
           <input type="checkbox" value={props.typ} onChange={handleChange} checked={isSelected}/>
             {props.name}
        </label>
    )
}

export default ItemCategories;
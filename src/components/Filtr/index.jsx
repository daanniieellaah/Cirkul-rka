import React from 'react';
import {ItemCategories} from "..";

const Filtr = (props) => {

    return (    
        <div>
            <h1> Kategorie</h1>    
            {props.categories.map((item) => 
                <ItemCategories typ={item.typ} name={item.name} key={item.typ} selectedCategories={props.selectedCategories} setSelectedCategories={props.setSelectedCategories}/>
            )}
        </div>
        )
    };

export default Filtr;
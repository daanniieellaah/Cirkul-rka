import React from 'react';
import {Address} from '..'


const VenueList = (props) => {
   
    const handleClick = (key) => {
        props.handleVenue(props.venues[key])
    };

    const places = props.venues.filter((item)=>{
        if ( props.venues.kategorie.includes(item)
        return
    })

    return (
        
    <div className="list">

        <ul>{props.venues.map((item, i) =>
        
            <li key={i}>
                <a   href="#" onClick={() => handleClick(i)}>
                {item.nazev}
                <Address data={item.adresa} img ={item.image_url}/>
                </a>
            </li>
        
        )}
        </ul>
    </div>
    )  
};

export default VenueList;
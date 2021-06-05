import React from 'react';
import {Address} from '..'


const VenueList = (props) => {
   

    return (
        
    <div className="list">

        <ul>{props.venues.map((item) =>
        
            <li>
                <a  href="#">
                {item.nazev}
                <Address data={item.adresa}/>
                </a>
            </li>
        
        )}
        </ul>
    </div>
    )  
};

export default VenueList;
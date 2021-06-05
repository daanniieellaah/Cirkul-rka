import React from 'react';

const VenueList = (props) => {

    return (
        
    <div className="list">

        <ul>{props.venues.map((item) =>
        
            <li>
                <a  href="#">
                {item.nazev}
                </a>
            </li>
        )}
        </ul>
    </div>
    )  
};

export default VenueList;
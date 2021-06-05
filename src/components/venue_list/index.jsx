import React from 'react';

const VenueList = (props) => {

    return (
        
    <div className="list">

        <ul>
            <li>
                <a  href="#">
                    {props.venues.map()}
                </a>
            </li>
        </ul>

    

    </div>
    )  
};

export default VenueList;
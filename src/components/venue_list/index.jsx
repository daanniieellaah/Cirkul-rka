import React from 'react';

const Adress =(props) => {
    const data = props.data;

        return (
            <p>{data.ulice} {data.mesto} {data.psc}</p>

        )
}

const VenueList = (props) => {
   

    return (
        
    <div className="list">

        <ul>{props.venues.map((item) =>
        
            <li>
                <a  href="#">
                {item.nazev}
                <Adress data={item.adresa}/>
                </a>
            </li>
        
        )}
        </ul>
    </div>
    )  
};

export default VenueList;
import React from 'react';
//import './style.css';

const VenueDetail = (props) => {
  const data = props.data;

  return (
    <div className="container_detail">
      <img src={data.image_url}></img>

      <h2>{data.nazev}</h2>
      <p>{data.popis}</p>
      <button>link</button>

      <button>web</button>
    </div>
  );
};

export default VenueDetail;

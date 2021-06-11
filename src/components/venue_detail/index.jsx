import React from 'react';
import { Link } from 'react-router-dom';


//import './style.css';

const VenueDetail = (props) => {
  const data = props.data;

  return (
    <div className="container_detail">
      <img  className = "img_kategorie"src={data.image}></img>

      <h2>{data.nazev}</h2>
      <p>{data.popis}</p>

      <Link to={data.web}>
        <button>Web</button>
      </Link>
      
      <Link to={data.trasa}>
        <button>Trasa</button>
      </Link>
      
    </div>
  );
};

export default VenueDetail;

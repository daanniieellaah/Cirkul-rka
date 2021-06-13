import React from 'react';
import { Link } from 'react-router-dom';


//import './style.css';

const VenueDetail = (props) => {
  const data = props.data;

  const handleClick = () => {
    props.handleVenue(null);
  };

  return (
    <div className="container--detail">
      <div className = "container--detail-top">
        <img src={data.image}></img>
        <button className ="button_zpet" onClick={handleClick}>Späť</button>
      </div>

      <div className="container--detail-middle">
        <h2>{data.nazev}</h2>
        <p>{data.popis}</p>
      </div>

      <div className="container-detail-btns">
        { data.web &&
          <a href={data.web}>
            <button className="btn1">Web</button>
          </a>
        }

        { data.trasa &&
          <a href={data.trasa}>
            <button className="btn2">Trasa</button>
          </a>
        }
      </div>
    </div>
  );
};

export default VenueDetail;

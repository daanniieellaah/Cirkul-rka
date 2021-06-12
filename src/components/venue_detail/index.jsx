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
      <img src={data.image}></img>
      <button className ="button_zpet" onClick={handleClick}>Späť</button>

      <h2>{data.nazev}</h2>
      <p>{data.popis}</p>

      { data.web &&
        <Link to={data.web}>
          <button>Web</button>
        </Link>
      }

      { data.trasa &&
        <Link to={data.trasa}>
          <button>Trasa</button>
        </Link>
      }

    </div>
  );
};

export default VenueDetail;

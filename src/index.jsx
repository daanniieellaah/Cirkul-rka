import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import {VenueDetail, VenueList, Filtr} from './components';
import {getVenues, getCategories} from './mocks';

const venuesList = getVenues();
const categories = getCategories();

//console.log(categories);
const App = () => {

  const [venue, setVenue] = useState (venuesList [0]);
  

  return (
    <div className="container">
    <>
    <VenueDetail data={venue}/>
    <VenueList venues={venuesList} handleVenue={setVenue}/>
    <Filtr categories={categories}/>
    </>  
     </div>

  )

  
};

render(<App />, document.querySelector('#app'));

import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import {VenueDetail, VenueList} from './components';
import {getVenues} from './mocks';

const venuesList = getVenues();


const App = () => {

  const [venue, setVenue] = useState (venuesList [0]);

 



  return (
    <div className="container">
    <>
    <VenueDetail data={venue}/>
    <VenueList venues={venuesList} handleVenue={setVenue}/>

    </>  
      

     </div>
  )

  
};

render(<App />, document.querySelector('#app'));

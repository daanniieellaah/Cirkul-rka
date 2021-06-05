import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
<<<<<<< HEAD
import {VenueDetail, VenueList, Filtr} from './components';
=======
import {VenueDetail, VenueList} from './components';
>>>>>>> 92c52bc5cf109c48755743f1eb40f8f75f0c308e
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
<<<<<<< HEAD
    <Filtr categories={categories}/>
=======
    

>>>>>>> 92c52bc5cf109c48755743f1eb40f8f75f0c308e
    </>  
     </div>

  )

  
};

render(<App />, document.querySelector('#app'));

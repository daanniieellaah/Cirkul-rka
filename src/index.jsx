import React from 'react';
import { render } from 'react-dom';
import './style.css';
import {VenueDetail, VenueList} from './components';
import {getVenues} from './mocks';

const venuesList = getVenues();
const venue = venuesList[0]

const App = () => (
  <div className="container">
    <>
    <VenueDetail data={venue}/>
    <VenueList venues={venuesList}/>

    </>  
      

     </div>
);

render(<App />, document.querySelector('#app'));

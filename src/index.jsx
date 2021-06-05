import React from 'react';
import { render } from 'react-dom';
import './style.css';
import {VenueDetail, VenueList} from './components';
import {getVenues} from './mocks';

const venuesList = getVenues();

const App = () => (
  <div className="container">
    <>
    <VenueDetail/>
    <VenueList venues={venuesList}/>

    </>  
      

     </div>
);

render(<App />, document.querySelector('#app'));

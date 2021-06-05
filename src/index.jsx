import React from 'react';
import { render } from 'react-dom';
import './style.css';
import {VenueDetail} from './components';
import {getVenues} from './mocks';

const App = () => (
  <div className="container">
    <>
    <VenueDetail/>
    </>  
      

     </div>
);

render(<App />, document.querySelector('#app'));

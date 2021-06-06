import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import {VenueDetail, Filtr, Container, Footer} from './components';
import {getVenues, getCategories} from './mocks';
import Webpages from './webpages';



const venuesList = getVenues();
const categories = getCategories();

const App = () => {

  const [venue, setVenue] = useState (venuesList [0]);
  const categoriesKeyes = categories.map((item) => {
    return item.typ
  })
  const [selectedCategories, setSelectedCategories] = useState(categoriesKeyes)
  
  return (
    <div className="container">
    <>
    <VenueDetail data={venue}/>
        <Filtr categories={categories} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}/> 
    <Container venues={venuesList} selectedCategories={selectedCategories} handleVenue={setVenue}/>
    <Webpages />
    <Footer/>

    </>
     </div>
  )
};

render(<App/>, document.querySelector('#app'));

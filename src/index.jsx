import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import {VenueDetail, Filtr, Container, Footer, Menu} from './components';
import {getVenues, getCategories} from './mocks';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const venuesList = getVenues();
const categories = getCategories();

const App = () => {

  const [venue, setVenue] = useState (venuesList [0]);
  const categoriesKeyes = categories.map((item) => {
    return item.typ
  })
  const [selectedCategories, setSelectedCategories] = useState(categoriesKeyes)
  
  return (
    <Router>
      <div className="container">
        <Menu/>

        <Switch>

        <Route  exact path= "/">
          <div className="obsah">
            <div className="logo__stred">
              <img src="img/final.png"/>
            </div>
            <div className="banner">
              <p className="popis"> Cirkulárna mapa mesta Trenčín</p>
            </div>
          </div>    
        </Route>

        <Route path="/mapa">
          <>
            <VenueDetail data={venue}/>

            <Filtr categories={categories} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}/>

            <Container venues={venuesList} selectedCategories={selectedCategories} handleVenue={setVenue}/>
          </>
        </Route>
        
        </Switch>

        <Footer/>

      </div>
    </Router>
  )
};

render(<App/>, document.querySelector('#app'));

import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import {VenueDetail, Filtr, Container, Footer, Menu} from './components';
import {getVenues, getCategories} from './mocks';
import img from "./img/final.png"
import avatar1 from "./img/avatar1.png"
import avatar2 from "./img/avatar2.png"





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
              <img src={img}/>
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

        <Route path="/onas">
          <div className="container--about">
            <h2>O nás</h2>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, reiciendis quis voluptatum omnis quo maiores officiis ullam quisquam nemo eos, explicabo similique facere dolor soluta iusto at dolore architecto quidem.
              </p>
            </div>
          </div>
        </Route>

        <Route path="/cirkularniekonomika">
          <div>
            <h2>Cirkulárna ekonomika</h2>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, minima. Eos est voluptates porro, ipsum cum ipsa perspiciatis, laborum asperiores facere omnis eum soluta tempore possimus sapiente? Natus, culpa ut?</p>
            </div>
          </div>
        </Route>
        
        <Route path="/kontakt">
        <div className="container--contact">
            <h2>Kontakt</h2>
            <div className="container--contact-items">
              <div className= "contact--item-1">
                <img src={avatar1}></img>
                <h3>Daniela Horáková</h3>
                <p>Email: hu.dani.hu@gmail.com </p>
              </div>
              <div className= "contact--item-2">
                <img src={avatar2}></img>
                <h3>Simona Bohušová</h3>
                <p>Email: simonabohusova@gmail.com</p>
              </div>
              </div>
          </div>
        </Route>
        </Switch>

        <Footer/>

      </div>
    </Router>
  )
};

render(<App/>, document.querySelector('#app'));

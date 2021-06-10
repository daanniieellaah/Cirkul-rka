import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import { VenueDetail, Filtr, Container, Footer, Menu } from './components';
import { getVenues, getCategories } from './mocks';


import CirkularniEkonomika from './Route components/CirkularniEkonomika';
import Onas from './Route components/Onas';
import Kontakt from './Route components/Kontakt';
import Home from './Route components/Home';


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const venuesList = getVenues();
const categories = getCategories();

const App = () => {
  const [venue, setVenue] = useState(venuesList[0]);
  const categoriesKeyes = categories.map((item) => {
    return item.typ;
  });
  const [selectedCategories, setSelectedCategories] = useState(categoriesKeyes);

  return (
    <Router>
      <div className="container">
        <Menu />

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/mapa">
            <>
              <VenueDetail data={venue} />

              <Filtr
                categories={categories}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
              />

              <Container
                venues={venuesList}
                selectedCategories={selectedCategories}
                handleVenue={setVenue}
              />
            </>
          </Route>

          <Route path="/onas">
            <Onas/>
          </Route>

          <Route path="/cirkularniekonomika">
          <CirkularniEkonomika/>
          </Route>

          <Route path="/kontakt">
            <Kontakt/>
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));

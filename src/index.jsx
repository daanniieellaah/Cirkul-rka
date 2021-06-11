import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import { VenueDetail, Filtr, Container, Footer, Menu } from './components';


import CirkularniEkonomika from './Route components/CirkularniEkonomika';
import Onas from './Route components/Onas';
import Kontakt from './Route components/Kontakt';
import Home from './Route components/Home';
import Mapakomponenta from "./Route components/Mapa";


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div className="container">
        <Menu/>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/mapa">
            <Mapakomponenta/>
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

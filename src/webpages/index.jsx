import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './home';
import Kontakt from './kontakt';
import Mapa from './mapa';
import Onas from './onas';
import Cirkularniekonomika from './cirkularniekonomika';



const Webpages = () => {

    return(
        <Router>
            <nav>
        <ul>
          <li>
            <Link to="/"><img src="img/logo.png"/></Link>
          </li>
          <li>
            <Link to="/onas">O nás</Link>
          </li>
          <li>
            <Link to="/mapa">Mapa</Link>
          </li>
          <li>
            <Link to="/cirkularniekonomika">Cirkularniekonomika</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>

            <Route exact path="/" component= {Home} />
            <Route path = "/kontakt" component = {Kontakt} />
            <Route path = "/mapa" component = {Mapa} />
            <Route path = "/onas" component = {Onas} />
            <Route path = "/cirkularniekonomika" component = {Cirkularniekonomika} />
        </Router>
    );
};

export default Webpages;
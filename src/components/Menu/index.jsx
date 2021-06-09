import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/img/logo_menu.png';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link className="logo" to="/">
            <img src={logo} />
          </Link>
        </li>
        <li className="highlight">
          <Link to="/mapa">Mapa</Link>
        </li>
        <li className="background">
          <Link to="/onas">O nás</Link>
        </li>
        <li className="background">
          <Link to="/cirkularniekonomika">Cirkulárna ekonomika</Link>
        </li>
        <li className="background">
          <Link to="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

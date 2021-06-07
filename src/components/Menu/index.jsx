import React from "react";
import {Link} from "react-router-dom";


const Menu = () => {
  
  return (
<nav className = "menu">
        <ul>
          <li>
            <Link className="logo" to="/"><img src="img/logo_menu.png"/></Link>
          </li>
          <li>
            <Link to="/onas">O nás</Link>
          </li>
          <li className="highlight">
            <Link  to="/mapa">Mapa</Link>
          </li>
          <li>
            <Link to="/cirkularniekonomika">Cirkulárna ekonomika</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
  ); 
}

export default Menu;
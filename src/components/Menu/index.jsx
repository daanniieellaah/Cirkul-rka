import React from "react";
import {Link} from "react-router-dom";


const Menu = () => {
  return (
    <div className="menu">
{/*
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
*/}

        <nav>
            <ul class="menu">
            <li><a href="/"><img src="img/logo.png"/></a></li>
                <li><a href="/mapa">MAPA</a></li>
                <li><a href="/onas">O NÁS</a></li>
                <li><a href="/cirkularniekonomika">CIRKULÁRNÍ EKONOMIKA</a></li>
                <li><a href="/kontakt">KONTAKT</a></li>
            </ul>
        </nav>
    </div>
  );
}

export default Menu;
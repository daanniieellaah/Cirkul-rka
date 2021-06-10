import React from 'react';
import avatar1 from '/src/img/avatar1.png';
import avatar2 from '/src/img/avatar2.png';

const Kontakt = () => {
  return (
    <div className="container--contact">
      <h2>Kontakt</h2>
      <div className="container--contact-items">
        <div className="contact--item-1">
          <img src={avatar1}></img>
          <h3>Daniela Horáková</h3>
          <p>E-mail: hu.dani.hu@gmail.com </p>
        </div>

        <div className="contact--item-2">
          <img src={avatar2}></img>
          <h3>Simona Bohušová</h3>
          <p>E-mail: simonabohusova@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;


import React from 'react';
import CirkulacniModely from '/src/img/CirkulacniModely.png'


const CirkularniEkonomika = () => {
  return (
    <div className="container--cirkulareko">
      <h2>Cirkulárna ekonomika</h2>
      <div>
      <img src= {CirkulacniModely} alt="cirkulární a lineární ekonomika" />
        <p>
        Zdroj: <i> Incien.org</i>
        </p>
      </div>
      <div className = "cirkulareko_text">

      </div>
    </div>
  );
};

export default CirkularniEkonomika;

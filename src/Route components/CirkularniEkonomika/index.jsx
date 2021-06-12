import React from 'react';
import CirkulacniModelSK from '/src/img/CirkulacniModelSK.png'
import CirkulacniModely from '/src/img/CirkulacniModely.png'


const CirkularniEkonomika = () => {
  return (
    <div className="container--cirkulareko">
      <h2>Cirkulárna ekonomika</h2>
      <div>
      <img src= {CirkulacniModelSK} alt="cirkulární a lineární ekonomika" />
        <p>
        Zdroj: <i> incien.sk (Od odpadu k zdrojom)</i>
        </p>
        <img src= {CirkulacniModely} alt="cirkulární a lineární ekonomika" />
        <p>Zdroj: <i> incien.org </i></p>
      </div>
      <div className = "cirkulareko_text">

      </div>
    </div>
  );
};

export default CirkularniEkonomika;

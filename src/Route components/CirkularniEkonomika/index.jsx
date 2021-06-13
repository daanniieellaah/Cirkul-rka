import React from 'react';
//import CirkulacniModelSK from '/src/img/CirkulacniModelSK.png';
import CirkulacniModely from '/src/img/CirkulacniModely.png';
import Odkaz from '/src/img/Odkaz.png';

const CirkularniEkonomika = () => {
  return (
    <div className="container--cirkulareko">
      <h2>Cirkulárna ekonomika</h2>
      <div className="container--cirkulareko-box">
        <div className="cirkulareko-img">
          {/*<div className="img1">
              <img src= {CirkulacniModelSK} alt="cirkulární a lineární ekonomika" />

              <p>
              Zdroj: <i> incien.sk (Od odpadu k zdrojom)</i>
              </p>
            </div>
  */}
          <div className="img2">
            <img src={CirkulacniModely} alt="cirkulární a lineární ekonomika" />
            <p>
              Zdroj: <i> incien.org </i>
            </p>
          </div>
        </div>

        <div className="cirkulareko--text">
          <p>
            Trend cirkulárnej ekonomiky reaguje na súčasný model lineárnej
            ekonomiky a súčasne ponúka alternatívu v podobe ekonomicky aj
            ekologicky výhodného riešenia, kedy aj použité alebo staré veci môžu
            byť opäť užitočné.{' '}
          </p>

          <p>
            Udržateľnosť a efektivita procesu recyklácie sa premietajú takmer do
            všetkých oblastí ľudského života. Cieľom týchto činností, je
            zvyšovanie kvality životného prostredia a spolu s ním aj ľudského
            života. Nevyhnutnosťou je schopnosť uvažovať v dlhodobom horizonte a
            tiež schopnosť dávať veci do súvislostí.
          </p>
          <p>
            Spoločnosť by sa mala v duchu myšlienky obehového hospodárstva 
            rozvíjať nielen s ohľadom na ekonomickú stránku, ale tiež brať ohľad
            na kvalitu života a environmentálnu ochranu.
          </p> 

          <div className="odkaz1">
            <a href="https://www.incien.sk/">
              <img src={Odkaz} alt="odkaz incien.sk" />
            </a>
            <p>Inšitút cirkulárnej ekonomiky (SK)</p>
          </div>

          <div className="odkaz2">
            <a href="https://incien.org/">
              <img src={Odkaz} alt="odkaz incien.org" />
            </a>
            <p>Intitut cirkulární ekonomiky (CZ)</p>
          </div>

          {/*<div className="odkaz3">
            <a href="https://forbes.cz/odpad-zdrojem-cirkularni-ekonomika-je-cesta-z-krize-rikaji-jeji-propagatori/">
              <img src={Odkaz} alt="odkaz na článek" />
            </a>
            <p>
              Odpad zdrojem: cirkularní ekonomika je cesta z krize, říkaji její
              propagátoři (Forbes.cz)
            </p>
          </div>

          <div className="odkaz4">
            <a href="https://forbes.cz/rozjeli-jsme-tinder-pro-odpadky-popisuje-cesky-startupista/">
              <img src={Odkaz} alt="odkaz na článek" />
            </a>
            <p>
              Rozjeli jsme Tinder pro odpadky, popisuje český startupista
              (Forbes.cz)
            </p> 
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CirkularniEkonomika;

/*
<div className = "odkaz">
      
      <a href="https://www.incien.sk/"><img src={Odkaz} alt="odkaz incien.sk" /></a>
      <p>Inšitút cirkulárnej ekonomiky (SK)</p>
      

      
      <a href="https://incien.org/"><img src={Odkaz} alt="odkaz incien.org" /></a>
      <p>Intitut cirkulární ekonomiky (CZ)</p>
      
      
      
      <a href="https://forbes.cz/odpad-zdrojem-cirkularni-ekonomika-je-cesta-z-krize-rikaji-jeji-propagatori/"><img src={Odkaz} alt="odkaz na článek" /></a>
      <p>Odpad zdrojem: cirkularní ekonomika je cesta z krize, říkaji její propagátoři (Forbes.cz)</p>
      

      
      <a href="https://forbes.cz/rozjeli-jsme-tinder-pro-odpadky-popisuje-cesky-startupista/"><img src={Odkaz} alt="odkaz na článek" /></a>
      <p>Rozjeli jsme Tinder pro odpadky, popisuje český startupista (Forbes.cz)</p>
      

      </div>
*/

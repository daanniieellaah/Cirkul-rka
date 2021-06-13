import React from 'react';
import CirkulacniModelSK from '/src/img/CirkulacniModelSK.png'
import CirkulacniModely from '/src/img/CirkulacniModely.png'
import Odkaz from '/src/img/Odkaz.png'



const CirkularniEkonomika = () => {
  return (
    

    <div className="container--cirkulareko">
    
      <h2>Cirkulárna ekonomika</h2>
        <div className="container--cirkulareko-box">
          <div className= "cirkulareko-img">
            {/*<div className="img1">
              <img src= {CirkulacniModelSK} alt="cirkulární a lineární ekonomika" />

              <p>
              Zdroj: <i> incien.sk (Od odpadu k zdrojom)</i>
              </p>
            </div>
  */}
            <div className="img2">
              <img src= {CirkulacniModely} alt="cirkulární a lineární ekonomika" />
              <p>Zdroj: <i> incien.org </i></p>
            </div>

          </div>

          <div className = "cirkulareko--text">
            <p>Ekonomický model súčasnej spoločnosti je zatiaľ predovšetkým lineárny. Ťažíme prírodné zdroje, odnášame ich na opačný koniec sveta, kde sa z nich vyrábajú výrobky. Tie sú distribuované do ďalších kútov sveta, kde ich spotrebitelia kú­pia, použijú a vyhodia. Tak vzniká odpad a su­roviny vo forme produktov končia na skládkach, v spaľovniach či pohodené vo voľnej prírode.

            Podstatou zisku tohto systému je vysoká spot­reba neobnoviteľných surovín, čo logicky nemôže fungovať dlhodobo. Keď k tomu pridáme iné ne­gatívne faktory, ako vykorisťovanie pracovníkov z rozvojových krajín, populačnú explóziu, rýchlo rastúci konzum a devastujúci vplyv človeka na ži­votné prostredie, terajší systém môžeme opráv­nene považovať za neudržateľný. A to ekonomic­ky, environmentálne a aj sociálne.

            Protikladom lineárneho modelu je cirkulárna ekonomika - obehové hospodárstvo, ktorá je od roku 2015 kľúčovou politickou témou v EÚ.
            </p>
            
            <div className = "odkaz1">
            <a href="https://www.incien.sk/"><img src={Odkaz} alt="odkaz incien.sk" /></a>
            <p>Inšitút cirkulárnej ekonomiky (SK)</p>
            </div>

            <div className = "odkaz2">
            <a href="https://incien.org/"><img src={Odkaz} alt="odkaz incien.org" /></a>
            <p>Intitut cirkulární ekonomiky (CZ)</p>
            </div>
            
            <div className = "odkaz3">
            <a href="https://forbes.cz/odpad-zdrojem-cirkularni-ekonomika-je-cesta-z-krize-rikaji-jeji-propagatori/"><img src={Odkaz} alt="odkaz na článek" /></a>
            <p>Odpad zdrojem: cirkularní ekonomika je cesta z krize, říkaji její propagátoři (Forbes.cz)</p>
            </div>

            <div className = "odkaz4">
            <a href="https://forbes.cz/rozjeli-jsme-tinder-pro-odpadky-popisuje-cesky-startupista/"><img src={Odkaz} alt="odkaz na článek" /></a>
            <p>Rozjeli jsme Tinder pro odpadky, popisuje český startupista (Forbes.cz)</p>
            </div>
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
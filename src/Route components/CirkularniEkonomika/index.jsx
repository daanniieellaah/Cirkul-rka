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
            <p>Trend cirkulární ekonomiky reaguje na současný model lineární ekonomiky a zároveň nabízí alternativu v podobě ekonomicky i ekologicky výhodného řešení, kdy i použité či staré věci mohou stále přinášet užitek.

            Udržitelnost a efektivita procesu recyklace se promítá  téměř do všech oblastí lidkého života a činností, přičemž cílem je zvyšovat kvalitu životního prostředí a lidského života pomocí zvyšování efektivity produkce.

            Nezbytností je schopnost uvažovat v dlouhodobém horizontu a také schopnost dávání věcí do souvislostí. Společnost by se tedy v duchu myšlenky oběhového hospodářství měla rozvíjet  nejen s ohledem na ekonomickou stránku, ale také brát ohled na na kvalitu života a environmentální ochranu.
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
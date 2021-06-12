import React from 'react';
import onas from '/src/img/onas.svg';

const Onas = () => {
  return (
    <div className="container--about">
      <h2>O nás</h2>
      <div className="container--about-top">
        <img src={onas} />

        <div className="paragraph">
          <p>
            Projekt <b>Cirkulárka</b> podporuje  súčasný trend
            prechodu od lineárnej k cirkulární ekonomike. 
            V rámci tejto
            problematiky jsme se venovali jednému konrétnímu miestu - mestu
            Trenčín. Mapa zobrazuje prehľad miest, ktoré podporujú súčasný tred
            udržitelosti - napríklad bezobalové odchody, second-handy, knižné
            búdky, zberné miesta či rôzne servisy a opravovne.
          </p>
          <p>
          Ako možné budúce rozšírenie plánujeme sekcii "Udalosti" zameranú na informácie o organizovaní rôznych akcií či aktivít v meste a jeho blízkom okolí a ďalej tiež prepojenie tejto sekcie s kalendárom.
          </p>
          <br />
          <p>
            Projekt <b>Cirkulárka</b> vznikl v rámci
            <i> Czechitas Datové akademie: Web</i>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Onas;

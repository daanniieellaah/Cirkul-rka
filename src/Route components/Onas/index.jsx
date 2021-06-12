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
            Projekt <b>Cirkulárka</b> podporuje podporuje současný trend
            přechodu od lineární k cirkulární ekonomice. 
            V rámci této
            problematiky jsme se věnovaly jednomu konrétnímu místu - městu
            Trenčín. Mapa zobrazuje přehled míst, která podporují současný tred
            udržitelosti - například bezobalové odchody, second-handy, knižní
            budky, sběrná místa či knižní budky.
          </p>
          <p>
            Jakožto možná budoucí rozšíření plánujeme sekci "Události" zaměřenou
            na informace o organizování různých akcí či aktivit ve městě a jeho
            blízkém okolí a dále také propojení této sekce s kalendářem.
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

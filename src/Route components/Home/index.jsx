import React from 'react';
import img from '/src/img/final.png';

const Home = () => {
  return (
    <div className="obsah">
      <div className="logo__stred">
        <img src={img} />
      </div>
      <div className="banner">
        <p className="popis"> Cirkulárna mapa mesta Trenčín</p>
      </div>
    </div>
  );
};

export default Home;

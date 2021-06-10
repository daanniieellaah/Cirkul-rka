import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, { Marker, Popup, GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Mapa = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 48.8869061,
    longitude: 18.0390322,
    zoom: 13,
  });

  const handleClick = (id) => {
    props.handleVenue(props.venues[id]);
  };

  const [vybranyObjekt, setVybranyObjekt] = useState(null);

  return (
    <>
      <ReactMapGL
        mapStyle={{
          version: 8,
          sources: {
            'raster-tiles': {
              type: 'raster',
              tiles: ['https://mapserver.mapy.cz/base-m/{z}-{x}-{y}'],
              tileSize: 256,
              attribution:
                'Mapové podklady od <a target="_top" rel="noopener" href="https://mapy.cz/">Seznam.cz</a> a <a target="_top" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>.',
            },
          },
          layers: [
            {
              id: 'simple-tiles',
              type: 'raster',
              source: 'raster-tiles',
              minzoom: 0,
              maxzoom: 20,
            },
          ],
        }}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        width="70%"
        height="700px"
      >
        {props.venues.map((item, i) => (
          <React.Fragment key={item.id}>
            <Marker
              latitude={item.latitude}
              longitude={item.longitude}
              offsetLeft={-25}
              offsetTop={-50}
            >
              <img
                src={item.ikona}
                width={50}
                height={50}
                alt={item.nazev}
                onClick={() => handleClick(i)}
              />
            </Marker>

            
          </React.Fragment>
        ))}
      </ReactMapGL>
    </>
  );
};

export default Mapa;

/* 
//LOCATE
<GeolocateControl
          style={{
            right: 10,
            top: 10,
          }}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={false}
        />

//POPUP
{item.id === vybranyObjekt ? (
              <Popup
                latitude={item.latitude}
                longitude={item.longitude}
                offsetTop={-60}
                onClose={() => setVybranyObjekt(null)}
              >
                {item.nazev}
              </Popup>
            ) : null}
*/

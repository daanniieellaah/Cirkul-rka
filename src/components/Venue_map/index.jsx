import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function Mapa() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });
  
  return (
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
				width="100%"
				height="450px"
			/>
  );
      };

  


export default Mapa
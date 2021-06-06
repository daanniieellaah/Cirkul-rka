import React from 'react';
import {Mapa, VenueList} from '..';

const Container = (props) => {
  
const places = props.venues.filter((item) => {
    return props.selectedCategories.includes (item.kategorie)
 } )

return (
  <div>
    <VenueList venues={places} selectedCategories={props.selectedCategories} handleVenue={props.handleVenue}/>
    <Mapa venues={places} selectedCategories={props.selectedCategories} handleVenue={props.handleVenue}/>
  </div>
)
};

export default Container;

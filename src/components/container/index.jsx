import React, {useState} from 'react';
import {Mapa, VenueList, VenueDetail} from '..';
const Container = (props) => {
  const [venue, setVenue] = useState(null);
  const places = props.venues.filter((item) => {
    if(venue){
      return item.id === venue.id;
    }
    return props.selectedCategories.includes(item.kategorie)
  })
  return (
    <div className="main-container">
      {
        venue === null
          ? <VenueList venues={places} selectedCategories={props.selectedCategories} handleVenue={setVenue} />
          : <VenueDetail data={venue} handleVenue={setVenue} />
      }
      <Mapa venues={places} selectedCategories={props.selectedCategories} handleVenue={setVenue} selectedVenue={venue} />
    </div>
  )
};
export default Container;
import React, {useState} from 'react';
import {Mapa, VenueList, VenueDetail} from '..';

const Container = (props) => {

  const [venue, setVenue] = useState(null);

  const places = props.venues.filter((item) => {
      return props.selectedCategories.includes (item.kategorie)
  } )

  return (
    <div>
      {
        venue === null
        ? <VenueList venues={places} selectedCategories={props.selectedCategories} handleVenue={setVenue}/>
        : <VenueDetail data={venue} handleVenue={setVenue}/>
      }

      <Mapa venues={places} selectedCategories={props.selectedCategories} handleVenue={setVenue}/>
    </div>
  )
};

export default Container;

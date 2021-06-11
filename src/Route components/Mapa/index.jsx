import React, { useEffect, useState } from 'react';
import { Filtr, Container} from '/src/components';
import { getVenues, getCategories } from '/src/mocks';


const venuesList = getVenues();
const categories = getCategories();

const Mapakomponenta = () => {
  // const [venue, setVenue] = useState(venuesList[0]);

  const categoriesKeyes = categories.map((item) => {
    return item.typ;
  });
  const [selectedCategories, setSelectedCategories] = useState(categoriesKeyes);

  return (

            <>
              {/* <VenueDetail data={venue} /> */}

              <Filtr
                categories={categories}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
              />

              <Container
                venues={venuesList}
                selectedCategories={selectedCategories}
                // handleVenue={setVenue}
              />
            </>

  );
};

export default Mapakomponenta;
const venues = [
  { id: 1,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "Obchodík bez obalu",
    popis: "bla",
    adresa: {
      ulice: "Nová ulice 23",
      mesto: "Trenčín",
      psc:"213 64",
    },
    latitude: 48.8949956,
    longitude: 18.0407183,
  },

  { id: 2,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "Obchodík blaaa",
    popis: "haha",
    adresa: {
      ulice: "Nová ulice 23",
      mesto: "Trenčín",
      psc:"213 64",
    },
    latitude: 48.8949956,
    longitude: 18.0407183,
  },

  { id: 3,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "Kavejaa",
    popis: "hehe",
    adresa: {
      ulice: "Nová ulice 23",
      mesto: "Trenčín",
      psc:"213 64",
    },
    latitude: 48.8949956,
    longitude: 18.0407183,
  }
];

const getVenues = () =>
{
  return venues;
}

<<<<<<< HEAD


const categories  = [
=======
const categories = [
>>>>>>> 92c52bc5cf109c48755743f1eb40f8f75f0c308e
 {
   typ: "bezobalovyObchod",
   name: "Bezobalové obchody",
 },

 {
  typ: "secondHands",
  name: "Second-handy",
},

{
  typ: "sbernaMista",
  name: "Sběrná místa",
},

{
  typ: "bikesharing",
  name: "Bike-sharing",
},

{
  typ: "servisyAopravny",
  name: "Servisy a opravny",
},

{
  typ: "pujcovny",
  name: "Půjčovny",
},

{
  typ: "knizniBudky",
  name: "Knižní budky",
},

{
  typ: "ostatni",
  name: "Ostatní",
}

];

const getCategories = () =>
{
<<<<<<< HEAD
return categories; 
}

export {getVenues, getCategories}
=======
return categories
}


export {getVenues, getCategories};
 
>>>>>>> 92c52bc5cf109c48755743f1eb40f8f75f0c308e

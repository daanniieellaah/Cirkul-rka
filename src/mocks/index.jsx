const venues = [
  { id: 1,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "BEZOBALIS",
    popis: "Prvý bezobalový obchod v Trenčíne. Ponúka výrobky rôzneho druhu, od potravín po drogériu či kozmetiku.",
    adresa: {
      ulice: "J. Braneckého 8",
      mesto: "Trenčín",
      psc:"911 91",
    },
    latitude: 48.891250623983375,
    longitude: 18.0377557246782,
    kategorie: "bezobalovyObchod"
  },

  { id: 2,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "Obchodík bez obalu",
    popis: "Ponúka bezobalové potraviny a drogériu.",
    adresa: {
      ulice: "Palackého 84/4",
      mesto: "Trenčín",
      psc:"911 01",
    },
    latitude: 48.8949956,
    longitude: 18.0407183,
    kategorie: "bezobalovyObchod"
  },

  { id: 3,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "Zdravší Život",
    popis: "Ponúka kozmetiku a čapovanú drogériu.",
    adresa: {
      ulice: "Námestie sv. Anny 16",
      mesto: "Trenčín",
      psc:"911 01",
    },
    latitude: 48.89026728998041, 
    longitude: 18.035912061464234,
    kategorie: "bezobalovyObchod"
  },

  { id: 4,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "U malého princa",
    popis: "Ponúka kozmetiku a čapovanú drogériu.",
    adresa: {
      ulice: "Nová ulice 23",
      mesto: "Trenčín",
      psc:"213 64",
    },
    latitude: 48.895698416553785,
    longitude: 18.042937030781175,
    kategorie: "bezobalovyObchod"
  },

  { id: 21,
    image_url: "",
    nazev: "Krajčírstvo-Opatovská",
    popis: "Oprava a úprava odevov",
    adresa: {
      ulice: "",
      mesto: "Trenčín",
      psc:"",
    },
    latitude: 48.897547850209854,
    longitude: 18.069513580261496,
    kategorie: "pujcovny"
  }
];

const getVenues = () =>
{
  return venues;
}



const categories  = [
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
  name: "Zberné miesta",
},

{
  typ: "bikesharing",
  name: "Bike-sharing",
},

{
  typ: "servisyAopravny",
  name: "Servisy a opravovne",
},

{
  typ: "pujcovny",
  name: "Požičovne",
},

{
  typ: "knizniBudky",
  name: "Knižné búdky",
},

{
  typ: "ostatni",
  name: "Ostatné",
}

];

const getCategories = () =>
{
return categories; 
}

export {getVenues, getCategories}

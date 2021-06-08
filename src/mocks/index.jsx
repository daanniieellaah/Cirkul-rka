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

  { id: 5,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "Trhovisko - OC Družba",
    popis: "Na trhovisku nájdete rôzne produkty od čerstvého ovcia a zeleniny až po rezané, či črepníkové rastliny.",
    adresa: {
      ulice: "Legionárska",
      mesto: "Trenčín",
      psc:"911 01",
    },
    latitude: 48.88249,
    longitude: 18.03254,
    kategorie: "bezobalovyObchod"
  },

  { id: 6,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "Humana",
    popis: "Second-hand.",
    adresa: {
      ulice: "Námestie sv. Anny 3",
      mesto: "Trenčín",
      psc:"911 01",
    },
    latitude: 48.8941075,
    longitude: 18.0389831,
    kategorie: "secondHands"
  },

  { id: 7,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "UNIMODA",
    popis: "Second-hand.",
    adresa: {
      ulice: "Štúrovo námestie 130",
      mesto: "Trenčín",
      psc:"911 01",
    },
    latitude: 48.8942200,
    longitude: 18.0391856,
    kategorie: "secondHands"
  },

  { id: 8,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "Textile house",
    popis: "Second-hand.",
    adresa: {
      ulice: "Námestie sv. Anny 3",
      mesto: "Trenčín",
      psc:"911 01",
    },
    latitude: 48.8942200,
    longitude: 18.0391856,
    kategorie: "secondHands"
  },

  { id: 9,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "Bazárik",
    popis: "Second-hand.",
    adresa: {
      ulice: "Námestie sv. Anny 11",
      mesto: "Trenčín",
      psc:"911 01",
    },
    latitude: 48.8942200,
    longitude: 18.0391856,
    kategorie: "secondHands"
  },

  { id: 10,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "Zberný dvor - Zlatovská",
    popis: "Zberný dvor.",
    adresa: {
      ulice: "Námestie sv. Anny 3",
      mesto: "Trenčín",
      psc:"911 01",
    },
    latitude: 48.8891467,
    longitude: 18.0362297,
    kategorie: "sbernaMista"
  },

  { id: 11,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "Zberný dvor - Sever",
    popis: "Zberný dvor.",
    adresa: {
      ulice: "K zábraniu 32",
      mesto: "Trenčín",
      psc:"911 01",
    },
    latitude: 48.8905861,
    longitude: 18.0729664,
    kategorie: "sbernaMista"
  },

  { id: 12,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "Zberný dvor - Soblahovská",
    popis: "Zberný dvor.",
    adresa: {
      ulice: "Soblahovská 65",
      mesto: "Trenčín",
      psc:"911 01",
    },
    latitude: 48.8676600,
    longitude: 18.0365600,
    kategorie: "sbernaMista"
  },

  { id: 13,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "Mestský bicykel – Vajanského",
    popis: "Bike-sharing.",
    adresa: {
      ulice: "Vajanského",
      mesto: "Trenčín",
      psc:"911 01",
    },
    latitude: 48.89292282203017,
    longitude: 18.03820055560529,
    kategorie: "bikesharing"
  },

  { id: 14,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "Mestský bicykel – knižnica",
    popis: "Bike-sharing.",
    adresa: {
      ulice: "Hviezdoslavova",
      mesto: "Trenčín",
      psc:"911 01",
    },
    latitude: 48.893290096414056,
    longitude: 18.039662469042792,
    kategorie: "bikesharing"
  },
  
  { id: 15,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "Mestský bicykel – ZUŠ",
    popis: "Bike-sharing.",
    adresa: {
      ulice: "Námestie Slovenského národného povstania",
      mesto: "Trenčín",
      psc:"911 01",
    },
    latitude: 48.89667627269791,
    longitude: 18.045518928698648,
    kategorie: "bikesharing"
  },

  { id: 16,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "Mestský bicykel – krytá plaváreň",
    popis: "Bike-sharing.",
    adresa: {
      ulice: "Mládežnícka",
      mesto: "Trenčín",
      psc:"911 01",
    },
    latitude: 48.8986219405729,
    longitude: 18.043104911336687,
    kategorie: "bikesharing"
  },

  { id: 17,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "Mestský bicykel – stanica Zlatovce",
    popis: "Bike-sharing.",
    adresa: {
      ulice: "Zlatovce",
      mesto: "Trenčín",
      psc:"911 01",
    },
    latitude: 48.90177245417104,
    longitude: 18.021634003012547,
    kategorie: "bikesharing"
  },

  { id: 18,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "Mestský bicykel –Železničná stanica",
    popis: "Bike-sharing.",
    adresa: {
      ulice: "Železničná",
      mesto: "Trenčín",
      psc:"911 01",
    },
    latitude: 48.89707666077859,
    longitude: 18.054012728006825,
    kategorie: "bikesharing"
  },

  { id: 19,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "House of bike",
    popis: "Servis bicyklov.",
    adresa: {
      ulice: "Mierové námestie 33",
      mesto: "Trenčín",
      psc:"911 01",
    },
    latitude: 48.8958389,
    longitude: 18.0429250,
    kategorie: "servisyAopravny"
  },

  { id: 20,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "T-šport",
    popis: "Servis lyží.",
    adresa: {
      ulice: "Jozefa Braneckého 160",
      mesto: "Trenčín",
      psc:"911 01",
    },
    latitude: 48.8910211,
    longitude: 18.0372117,
    kategorie: "servisyAopravny"
  },

  { id: 21,
    image_url: "https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+",
    nazev: "Oprava obuvi - Mrázik",
    popis: "Oprava obuvi a brašnárstvo.",
    adresa: {
      ulice: "Námestie sv. Anny 21",
      mesto: "Trenčín",
      psc:"911 01",
    },
    latitude: 48.8884548784339,
    longitude: 18.035801055686935,
    kategorie: "servisyAopravny"
  },

  { id: 22,
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

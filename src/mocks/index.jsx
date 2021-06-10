

const venues = [
  {
    id: 1,
    image_url: 
    'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
      
    nazev: 'Bezobalis',
    popis:
      'Prvý bezobalový obchod v Trenčíne. Ponúka výrobky rôzneho druhu, od potravín po drogériu či kozmetiku.',
    adresa: {
      ulice: 'J. Braneckého 8',
      mesto: 'Trenčín',
      psc: '911 91',
    },
    latitude: 48.891250623983375,
    longitude: 18.0377557246782,
    kategorie: 'bezobalovyObchod',
    web: 'https://bezobalis.sk/',
    trasa: "https://www.google.com/maps/place/BEZOBALiS/@48.8910884,18.0350682,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a1860abca5fd:0x4ef4b5d936b870f0!8m2!3d48.891095!4d18.0372383",
  },

  {
    id: 2,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Obchodík bez obalu',
    popis: 'Ponuka bezobalových potravín a drogérie',
    adresa: {
      ulice: 'Palackého 84/4',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.8949956,
    longitude: 18.0407183,
    kategorie: 'bezobalovyObchod',
    trasa: "https://www.google.com/maps/place/Obchod%C3%ADk+bez+obalu/@48.8954946,18.0385178,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a139ac9ef957:0x64f22949951e5839!8m2!3d48.8954946!4d18.0407118",
  },

  {
    id: 3,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Zdravší Život',
    popis: 'Ponuka kozmetiky a čapované drogérie',
    adresa: {
      ulice: 'Námestie sv. Anny 16',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.89026728998041,
    longitude: 18.035912061464234,
    kategorie: 'bezobalovyObchod',
    trasa: "https://www.google.com/maps/place/EKO+BIO+kozmetika+-+Zdrav%C5%A1%C3%AD+%C5%BDivot/@48.8900839,18.0334713,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a185d51783bf:0x15e8c6d705839671!8m2!3d48.8900735!4d18.0357067",
  },

  {
    id: 4,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'U malého princa',
    popis: 'Ponuka kozmetiky a čapované drogérie',
    adresa: {
      ulice: 'Nová ulice 23',
      mesto: 'Trenčín',
      psc: '213 64',
    },
    latitude: 48.895698416553785,
    longitude: 18.042937030781175,
    kategorie: 'bezobalovyObchod',
    trasa: "https://www.google.com/maps/place/U+mal%C3%A9ho+princa+-+Richard+Medal/@48.8955221,18.0405821,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a1896c525e33:0x8b7a43d74c111103!8m2!3d48.8955221!4d18.0427761",
  },

  {
    id: 5,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Trhovisko - OC Družba',
    popis:
      'Na trhovisku nájdete rôzne produkty od čerstvého ovocia a zeleniny až po rezané, či črepníkové rastliny.',
    adresa: {
      ulice: 'Legionárska',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.88249,
    longitude: 18.03254,
    kategorie: 'bezobalovyObchod',
    trasa: "https://www.google.com/maps/place/Marketplace+at+OC+Druzhba/@48.8824533,18.0302732,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a17f575ff0d5:0x1280b87c5e991233!8m2!3d48.8824533!4d18.0324672",
  },

  {
    id: 6,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Humana',
    popis: 'Second-hand',
    adresa: {
      ulice: 'Námestie sv. Anny 3',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.8941075,
    longitude: 18.0389831,
    kategorie: 'secondHands',
    trasa: "https://www.google.com/maps/place/Textil+House+Secondhand/@48.8824519,18.014904,14z/data=!4m9!1m2!2m1!1sHumana!3m5!1s0x0:0x990d2be77f1c7a81!8m2!3d48.8901217!4d18.0373795!15sCgZIdW1hbmEiA4gBAVoIIgZodW1hbmGSARBzZWNvbmRfaGFuZF9zaG9w",
  },

  {
    id: 7,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'UNIMODA',
    popis: 'Second-hand',
    adresa: {
      ulice: 'Štúrovo námestie 130',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.89422,
    longitude: 18.0391856,
    kategorie: 'secondHands',
    trasa: "https://www.google.com/maps/place/UNIMODA+Tren%C4%8D%C3%ADn/@48.8933002,18.0371874,17z/data=!4m9!1m2!2m1!1sUnimoda+trencin!3m5!1s0x4714a188d35fcf41:0xccd232fcb23e0a8c!8m2!3d48.8942323!4d18.0393066!15sCg9Vbmltb2RhIHRyZW5jaW6SARBzZWNvbmRfaGFuZF9zaG9w",
  },

  {
    id: 8,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Textile house',
    popis: 'Second-hand',
    adresa: {
      ulice: 'Námestie sv. Anny 3',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.89422,
    longitude: 18.0391856,
    kategorie: 'secondHands',
    trasa: "https://www.google.com/maps/place/Textil+House+Secondhand/@48.8248683,17.7938629,11z/data=!4m9!1m2!2m1!1sTextile+house!3m5!1s0x4714a18a51c3417b:0x990d2be77f1c7a81!8m2!3d48.8901217!4d18.0373795!15sCg1UZXh0aWxlIGhvdXNlIgOIAQFaDyINdGV4dGlsZSBob3VzZZIBEHNlY29uZF9oYW5kX3Nob3A",
  },

  {
    id: 9,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Bazárik',
    popis: 'Second-hand',
    adresa: {
      ulice: 'Námestie sv. Anny 11',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.89422,
    longitude: 18.0391856,
    kategorie: 'secondHands',
    trasa: "https://www.google.com/maps/place/N%C3%A1mestie+sv.+Anny+11,+911+01+Tren%C4%8D%C3%ADn,+Slovakia/@48.8891643,18.0340416,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a1869cde62ed:0xdcdc844d73753781!8m2!3d48.8891643!4d18.0362355",
  },

  {
    id: 10,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Zberný dvor - Zlatovská',
    popis: 'Zberný dvor',
    adresa: {
      ulice: 'Zlatovská 2200',
      mesto: 'Trenčín',
      psc: '911 05',
    },
    latitude: 48.8891467,
    longitude: 18.0362297,
    kategorie: 'sbernaMista',
    trasa: "https://www.google.com/maps/place/Marius+Pedersen,+Inc.,+Tren%C4%8D%C3%ADn/@48.893163,18.0085866,13z/data=!4m9!1m2!2m1!1sZbern%C3%BD+dvor+-+Zlatovsk%C3%A1!3m5!1s0x4714a1a280fd2a3f:0x1883df46dd9c720a!8m2!3d48.893303!4d18.0157168!15sChlaYmVybsO9IGR2b3IgLSBabGF0b3Zza8OhWhkiF3piZXJuw70gZHZvciB6bGF0b3Zza8OhkgEYd2FzdGVfbWFuYWdlbWVudF9zZXJ2aWNlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5EYlRsaWJtNVJSUkFC",
  },

  {
    id: 11,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Zberný dvor - Sever',
    popis: 'Zberný dvor',
    adresa: {
      ulice: 'K zábraniu 32',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.8905861,
    longitude: 18.0729664,
    kategorie: 'sbernaMista',
    trasa: "https://www.google.com/maps/place/Zbern%C3%BD+dvor+Sever/@48.893163,18.0085866,13z/data=!4m9!1m2!2m1!1sZbern%C3%BD+dvor+-+Zlatovsk%C3%A1!3m5!1s0x0:0xa2f7b1204a17d9e0!8m2!3d48.8929351!4d18.0717385!15sChlaYmVybsO9IGR2b3IgLSBabGF0b3Zza8OhkgEIanVua3lhcmQ",
  },

  {
    id: 12,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Zberný dvor - Soblahovská',
    popis: 'Zberný dvor',
    adresa: {
      ulice: 'Soblahovská 65',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.86766,
    longitude: 18.03656,
    kategorie: 'sbernaMista',
    trasa: "https://www.google.com/maps/place/Soblahovsk%C3%A1+65,+911+01+Tren%C4%8D%C3%ADn,+Slovakia/@48.8693776,18.0326616,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a3d9a9e9fa6d:0xbfea2b6fa8587c39!8m2!3d48.8693776!4d18.0348556",
  },

  {
    id: 13,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Mestský bicykel – Vajanského',
    popis: 'Bike-sharing',
    adresa: {
      ulice: 'Vajanského',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.89292282203017,
    longitude: 18.03820055560529,
    kategorie: 'bikesharing',
    trasa: "https://www.google.com/maps/place/Mestsk%C3%BD+bicykel/@48.8927968,18.0359927,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a1d66677fb1b:0xb83f5bda93435349!8m2!3d48.8927968!4d18.0381867",
  },

  {
    id: 14,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Mestský bicykel – knižnica',
    popis: 'Bike-sharing',
    adresa: {
      ulice: 'Hviezdoslavova',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.893290096414056,
    longitude: 18.039662469042792,
    kategorie: 'bikesharing',
    trasa: "https://www.google.com/maps/place/Mestsk%C3%BD+bicykel+-+kni%C5%BEnica/@48.8927262,18.0371916,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a140ad56836b:0x470e71b7892640be!8m2!3d48.8927262!4d18.0393856",
  },

  {
    id: 15,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Mestský bicykel – ZUŠ',
    popis: 'Bike-sharing',
    adresa: {
      ulice: 'Námestie Slovenského národného povstania',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.89667627269791,
    longitude: 18.045518928698648,
    kategorie: 'bikesharing',
    trasa: "https://www.google.com/maps/place/Mestsk%C3%BD+bicykel+-+ZU%C5%A0/@48.8965846,18.0432391,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a1c4b5268149:0xefa7d73b9d1b4ace!8m2!3d48.8965846!4d18.0454331",
  },

  {
    id: 16,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Mestský bicykel – krytá plaváreň',
    popis: 'Bike-sharing',
    adresa: {
      ulice: 'Mládežnícka',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.8986219405729,
    longitude: 18.043104911336687,
    kategorie: 'bikesharing',
    trasa: "https://www.google.com/maps/place/Mestsk%C3%BD+bicykel+-+kryt%C3%A1+plav%C3%A1re%C5%88/@48.8981626,18.0410248,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a1bff386ad2f:0x7c94d4e1ae75447a!8m2!3d48.8981626!4d18.0432188",
  },

  {
    id: 17,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Mestský bicykel – stanica Zlatovce',
    popis: 'Bike-sharing',
    adresa: {
      ulice: 'Zlatovce',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.90177245417104,
    longitude: 18.021634003012547,
    kategorie: 'bikesharing',
    trasa: "https://www.google.com/maps/place/Mestsk%C3%BD+bicykel+-+stanica+Zlatovce/@48.9005348,18.0208828,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a16e45b9f5b5:0x15b542e383266ecf!8m2!3d48.9005348!4d18.0230768",
  },

  {
    id: 18,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Mestský bicykel –Železničná stanica',
    popis: 'Bike-sharing',
    adresa: {
      ulice: 'Železničná',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.89707666077859,
    longitude: 18.054012728006825,
    kategorie: 'bikesharing',
    trasa: "https://www.google.com/maps/place/Mestsk%C3%BD+bicykel+-+%C5%BDelezni%C4%8Dn%C3%A1+stanica/@48.8962233,18.0505111,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a3f101b5ca81:0xbdb943392ddc1290!8m2!3d48.8962233!4d18.0527051",
  },

  {
    id: 19,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'House of bike',
    popis: 'Servis bicyklov',
    adresa: {
      ulice: 'Mierové námestie 33',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.8958389,
    longitude: 18.042925,
    kategorie: 'servisyAopravny',
    trasa: "https://www.google.com/maps/place/House+of+Bike+-+Premium+Supplies+s.+r.o./@48.8957611,18.040838,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a1896cb21379:0xd7f8c32a810eecc0!8m2!3d48.8957611!4d18.043032",
  },

  {
    id: 20,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'T-šport',
    popis: 'Servis lyží',
    adresa: {
      ulice: 'Jozefa Braneckého 160',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.8910211,
    longitude: 18.0372117,
    kategorie: 'servisyAopravny',
    trasa: "https://www.google.com/maps/place/T-%C5%A0port/@48.890989,18.034993,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a185df8bab1f:0xa296641c8b935048!8m2!3d48.890998!4d18.0371543",
  },

  {
    id: 21,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Oprava obuvi - Mrázik',
    popis: 'Oprava obuvi a brašnárstvo',
    adresa: {
      ulice: 'Námestie sv. Anny 21',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.8884548784339,
    longitude: 18.035801055686935,
    kategorie: 'servisyAopravny',
    trasa: "https://www.google.com/maps/place/Milan+Mr%C3%A1zik+Oprava+obuvi+%26+Bra%C5%A1n%C3%A1rstvo/@48.8883379,18.0334834,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a186a0d22625:0x51dd2120409f982d!8m2!3d48.8883398!4d18.0356694",
  },

  {
    id: 22,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Rychloservis počítačov',
    popis: 'Sevis výpočtovej techniky',
    adresa: {
      ulice: 'Bratislavská 16',
      mesto: 'Trenčín',
      psc: '911 05',
    },
    latitude: 48.89778034307779,
    longitude: 18.031876155687193,
    kategorie: 'servisyAopravovny',
    trasa: "https://www.google.com/maps/place/R%C3%9DCHLOSERVIS+PO%C4%8C%C3%8DTA%C4%8COV/@48.8975418,18.0292886,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a18f1b499af5:0x3ef6f0af3628faf9!8m2!3d48.8975569!4d18.0315202",
  },

  {
    id: 23,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'CrashStudio',
    popis: 'Sevis mobilných telefonóv',
    adresa: {
      ulice: 'Mierové námestie 14',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.8947392,
    longitude: 18.0419211,
    kategorie: 'servisyAopravovny',
    trasa: "https://www.google.com/maps/place/CrashStudio/@48.8947074,18.039343,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a189225bfecf:0x60316638f5465b32!8m2!3d48.8947101!4d18.0415329",
  },

  {
    id: 24,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Svet času - hodinárstvo',
    popis: 'Oprava hodín',
    adresa: {
      ulice: 'Mierové námestie 12',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.8946669,
    longitude: 18.0417114,
    kategorie: 'servisyAopravovny',
    trasa: "https://www.google.com/maps/place/Hodin%C3%A1rstvo+SVET+%C4%8CASU/@48.894702,18.0393802,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a13d48b19577:0xd992fad4c0e0ca86!8m2!3d48.8947181!4d18.0415495",
  },

  {
    id: 25,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Knižnica vecí',
    popis: 'Požičovňa rôznych predmetov',
    adresa: {
      ulice: 'Kyjevská 3183, Sídlisko Juh',
      mesto: 'Trenčín',
      psc: '911 08',
    },
    latitude: 48.872859953725936,
    longitude: 18.045321871027447,
    kategorie: 'pujcovny',
    trasa: "https://www.google.com/maps/place/Kyjevsk%C3%A1+3183,+911+08+Tren%C4%8D%C3%ADn-S%C3%ADdlisko+Juh,+Slovakia/@48.8726765,18.0430635,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a3d04cfad93b:0xf73ee3e536c1efa6!8m2!3d48.8726765!4d18.0452575",
  },

  {
    id: 26,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'LEGO KreaTivO',
    popis: 'Požičovňa LEGA',
    adresa: {
      ulice: 'Gen. M. R. Štefánika 379/19',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.89200136742639,
    longitude: 18.05743364219274,
    kategorie: 'pujcovny',
    trasa: "https://www.google.com/maps/place/KreaTivo/@48.8921604,18.0544428,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a22456700c57:0xb6381063ae9c8827!8m2!3d48.8921604!4d18.0566368",
  },

  {
    id: 27,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'CrashStudio',
    popis: 'Požičovňa PS hier',
    adresa: {
      ulice: 'Mierové námestie 14',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.895005665298434,
    longitude: 18.04203121889763,
    kategorie: 'pujcovny',
    trasa: "https://www.google.com/maps/place/CrashStudio/@48.8947074,18.039343,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a189225bfecf:0x60316638f5465b32!8m2!3d48.8947101!4d18.0415329",
  },

  {
    id: 28,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Danica',
    popis: 'Požičovňa šiat',
    adresa: {
      ulice: 'Palackého 92',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.896061301376164,
    longitude: 18.042843167334834,
    kategorie: 'pujcovny',
    trasa: "https://www.google.com/maps/place/Danica+Ltd./@48.894707,18.0327501,15z/data=!4m9!1m2!2m1!1sDanica!3m5!1s0x4714a188df18a3b5:0xef412cb80ba4e4c!8m2!3d48.8960073!4d18.04328!15sCgZEYW5pY2GSAQ13ZWRkaW5nX3N0b3Jl",
  },

  {
    id: 29,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'GETOS - dopravné značenie',
    popis: 'požičovňa dopravných značiek',
    adresa: {
      ulice: 'Ľudovíta Stárka 1890/26',
      mesto: 'Trenčín',
      psc: '911 05',
    },
    latitude: 48.88695722834949,
    longitude: 18.01782158082893,
    kategorie: 'pujcovny',
    trasa: "https://www.google.com/maps/place/GETOS,+s.r.o.+dopravn%C3%A9+zna%C4%8Denie/@48.8852886,18.0122012,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a19890818fcf:0xce4abe64b5bbb386!8m2!3d48.8852886!4d18.0143952",
  },

  {
    id: 30,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Knižná búdka – 17. novembra',
    popis: 'Knižná búdka',
    adresa: {
      ulice: '17. novembra 2',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.89780647701388,
    longitude: 18.053705626852008,
    kategorie: 'knizniBudky',
    trasa: "https://www.google.com/maps/place/17.+novembra+2,+911+01+Tren%C4%8D%C3%ADn,+Slovakia/@48.8977007,18.0515009,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a221a8ebf049:0xc48ee80b2920de39!8m2!3d48.8977007!4d18.0536949",
  },

  {
    id: 31,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Knižná búdka – Gymnázium Ľ. Štúra',
    popis: 'Knižná búdka',
    adresa: {
      ulice: '1. mája 170',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.892385574170504,
    longitude: 18.036094382675603,
    kategorie: 'knizniBudky',
    trasa: "https://www.google.com/maps/place/1.+m%C3%A1ja+170%2F2,+911+01+Tren%C4%8D%C3%ADn,+Slovakia/@48.8922163,18.0339433,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a185f4ab94c9:0xe6be5fcf17fbcdd8!8m2!3d48.8922163!4d18.0361373",
  },

  {
    id: 32,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Centrum enviromentálnych aktivít',
    popis: 'Knižná búdka',
    adresa: {
      ulice: 'Mierové námestie 29/29',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.89572641635645,
    longitude: 18.042866971028214,
    kategorie: 'knizniBudky',
    trasa: "https://www.google.com/maps/place/Centrum+enviroment%C3%A1lnych+aktiv%C3%ADt/@48.8955238,18.0405834,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a1896c525e33:0x32a2ae8431aed855!8m2!3d48.8955238!4d18.0427774",
  },

  {
    id: 33,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Detské ihrisko JUH',
    popis: 'Knižná búdka',
    adresa: {
      ulice: 'Halalovka 2368/15',
      mesto: 'Trenčín',
      psc: '911 08',
    },
    latitude: 48.87335784851375,
    longitude: 18.047764369180722,
    kategorie: 'knizniBudky',
    trasa: "https://www.google.com/maps/place/Playground+SOUTH/@48.8721534,18.0476856,17z/data=!4m9!1m2!2m1!1sdetsk%C3%A9+ihrisko+juh+halalovka+tren%C4%8D%C3%ADn-s%C3%ADdlisko+juh+slovakia!3m5!1s0x4714a3d1d9cff76b:0x71f7e51c8c6ca9b0!8m2!3d48.873125!4d18.0477751!15sCj5kZXRza8OpIGlocmlza28ganVoIGhhbGFsb3ZrYSB0cmVuxI3DrW4tc8OtZGxpc2tvIGp1aCBzbG92YWtpYZIBCnBsYXlncm91bmQ",
  },

  {
    id: 34,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Kasňa',
    popis: 'Zbierka materiálnej pomoci',
    adresa: {
      ulice: 'Kyjevská 3183, Sídlisko Juh',
      mesto: 'Trenčín',
      psc: '911 08',
    },
    latitude: 48.8728670104254,
    longitude: 18.045504261226476,
    kategorie: 'ostatni',
    trasa: "https://www.google.com/maps/place/Kyjevsk%C3%A1+3183,+911+08+Tren%C4%8D%C3%ADn-S%C3%ADdlisko+Juh,+Slovakia/@48.8726765,18.0430635,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a3d04cfad93b:0xf73ee3e536c1efa6!8m2!3d48.8726765!4d18.0452575",
  },

  {
    id: 35,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'Dokola SWAP',
    popis: 'výmena oblečenia',
    adresa: {
      ulice: 'Mierové námestie 19',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.895470989008864,
    longitude: 18.04180848267576,
    kategorie: 'ostatni',
    trasa: "https://www.google.com/maps/place/Mierov%C3%A9+n%C3%A1mestie+19,+911+01+Tren%C4%8D%C3%ADn,+Slovakia/@48.8953511,18.0396574,17z/data=!3m1!4b1!4m5!3m4!1s0x4714a1893fd164cf:0x1f017378e4c80850!8m2!3d48.8953511!4d18.0418514",
  },

  {
    id: 36,
    image_url:
      'https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+',
    nazev: 'ZSE - EON nabíjacia stanica',
    popis: 'nabíjačka elektromobilov',
    adresa: {
      ulice: 'Hodžova 30',
      mesto: 'Trenčín',
      psc: '911 01',
    },
    latitude: 48.897387476832606,
    longitude: 18.054197105403325,
    kategorie: 'ostatni',
    trasa: "https://www.google.com/maps/place/EON+Charging+Station/@48.8841848,18.0157204,14z/data=!4m9!1m2!2m1!1sNab%C3%ADjacia+stanica+pre+elektromobily+Hod%C5%BEova!3m5!1s0x4714a2210980135b:0x6c263d5fb581337a!8m2!3d48.897265!4d18.054019!15sCi1OYWLDrWphY2lhIHN0YW5pY2EgcHJlIGVsZWt0cm9tb2JpbHkgSG9kxb5vdmGSASFlbGVjdHJpY192ZWhpY2xlX2NoYXJnaW5nX3N0YXRpb24",
  },
];

const getVenues = () => {
  return venues;
};

const categories = [
  {
    typ: 'bezobalovyObchod',
    name: 'Bezobalové obchody',
  },

  {
    typ: 'secondHands',
    name: 'Second-handy',
  },

  {
    typ: 'sbernaMista',
    name: 'Zberné miesta',
  },

  {
    typ: 'bikesharing',
    name: 'Bike-sharing',
  },

  {
    typ: 'servisyAopravny',
    name: 'Servisy a opravovne',
  },

  {
    typ: 'pujcovny',
    name: 'Požičovne',
  },

  {
    typ: 'knizniBudky',
    name: 'Knižné búdky',
  },

  {
    typ: 'ostatni',
    name: 'Ostatné',
  },
];

const getCategories = () => {
  return categories;
};

export { getVenues, getCategories };


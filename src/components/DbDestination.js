import bruxelles from ('../assets/bruxelles.png');
import bruxelles2 from ('../assets/bruxelles2.png');
import ilemaurice from ('../assets/ilemaurice.png');
import mauricelille from ('../assets/mauricelille.png');
import arizona from ('../assets/arizona.png');
import arizona2 from ('../assets/arizona2.png');
import ecuador from ('../assets/ecuador.png');
import ecuador2 from ('../assets/ecuador2.png');
import cuba from ('../assets/cuba.png');
import cuba2 from ('../assets/cuba2.png');
import madrid from ('../assets/madrid.png');
import madrid2 from ('../assets/madrid2.png');
import rome from ('../assets/rome.png');
import rome2 from ('../assets/rome2.png');
import hawai from ('../assets/hawaii.png');
import hawai2 from ('../assets/hawaii2.png');
import hongkong from ('../assets/hongkong.png');
import hongkong2 from ('../assets/hongkong2.png');
import lecap from ('../assets/lecap.png');
import lecap2 from ('../assets/lecap2.png');
import capdagde from ('../assets/capdagde.png');
import capdagde2 from ('../assets/capdagde2.png');
import reykjavik from ('../assets/reykjavik.png');
import reykjavik2 from ('../assets/reykjavik2.png');
import marrakech from ('../assets/marrakech.png');
import marrakech2 from ('../assets/marrakech2.png');




const DbDestination = [
    {id: 1, name: "Bruxelles", description:"Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue", pic1: bruxelles, pic2: bruxelles2, key: ["Salé", "Transport", "Frais", "Bière", "PMU", "SPA", "Marcher", "Whisky", "Lève Tôt", "Danser toute la nuit", "Repos", "Boeuf", "Chocolat", "Payer plein pot", "Calme", "nuit", "Expression", "Frites", "Tropico"]},
    {id: 2, name: "Ile Maurice", description:"Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue", pic1: ilemaurice, pic2: mauricelille, key: ["Maillot", "Farniente", "Plage", "Etoilé", "Randonnée", "Sunset", "Spa", "Hamac", "Marcher", "Rhum", "Lève tard", "Danser toute la nuit", "Paysages", "Repos", "Poisson", "Nature", "Payer plein pot", "Calme", "Tropique"]},
    {id: 3, name: "Arizona", description:"Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue", pic1: arizona, pic2: arizona2, key: ["Sucré", "Voiture", "Farniente", "Burger", "PMU", "Randonnée", "whisky", "Lève tard", "Paysages", "Désert", "Boeuf", "Fromage", "Payer plein pot", "Tempête", "Expression", "Frites", "Tropico"]},
    {id: 4, name: "Equateur", description:"Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue", pic1: ecuador, pic2: ecuador2, key: []},
    {id: 5, name: "Cuba", description:"Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue", pic1:cuba , pic2:cuba2 , key: []},
    {id: 6, name: "Madrid", description:"Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue", pic1: madrid, pic2: madrid2, key: []},
    {id: 7, name: "Rome", description:"Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue", pic1: rome, pic2: rome2, key: []},
    {id: 8, name: "Hawaï", description:"Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue", pic1: hawai, pic2: hawai2, key: []},
    {id: 9, name: "Hong-Kong", description:"Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue", pic1: hongkong, pic2: hongkong2, key: []},
    {id: 10, name: "Le Cap", description:"Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue", pic1: lecap, pic2: lecap2, key: []},
    {id: 11, name: "Cap d'Agde", description:"Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue", pic1: capdagde, pic2: capdagde2, key: []},
    {id: 12, name: "Reykjavik", description:"Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue", pic1: reykjavik, pic2: reykjavik2, key: []},
    {id: 13, name: "Marrakech", description:"Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue", pic1: marrakech, pic2: marrakech2, key: []},
];


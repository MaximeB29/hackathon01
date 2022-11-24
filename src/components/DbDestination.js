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
    {id: 1, name: "Bruxelles", description:"", pic1: bruxelles, pic2: bruxelles2, key: ["salé", "transport", "frais", "bière", "pmu", "SPA", "marcher", "whisky", "tot", "danser", "repos", "boeuf", "chocolat", "payer", "calme", "nuit", "expression", "frites", "tropico"]},
    {id: 2, name: "Ile Maurice", description:"", pic1: ilemaurice, pic2: mauricelille, key: []},
    {id: 3, name: "Arizona", description:"", pic1: arizona, pic2: arizona2, key: ["Sucré", "Voiture", "Farniente", "Burger", "PMU", "Randonnée", "Whisky", "Lève tard", "Paysage", "Désert", "Boeuf", "Fromage", "Payer", "Tempête", "Expression", "Frites", "Tropico"]},
    {id: 4, name: "Equateur", description:"", pic1: ecuador, pic2: ecuador2, key: ["Café", "Farniente", "Randonnée", "Hamac", "Aller au marché", "Rhum", "Lève tard", "Danser", "Paysage", "Aventure", "Forêt tropicale", "Flûte de pan", "Poisson", "Chocolat", "Négocier", "Expression", "Tropique"]},
    {id: 5, name: "Cuba", description:"", pic1:cuba , pic2:cuba2 , key: ["Café", "Voiture", "Maillot", "Farniente", "Spa", "Hamac", "Aller au marché", "Rhum", "Lève tard", "Danser", "Paysage", "Aventure", "Poisson", "Négocier", "Oppression", "Tropique"]},
    {id: 6, name: "Madrid", description:"", pic1: madrid, pic2: madrid2, key: ["Salé", "Vin", "Musée", "Spa", "Whisky", "Lève tôt", "Danser", "Guitare", "Boeuf", "Peinture", "Fromage", "Payer", "Calme", "Expression", "Potatoes", "Tropico"]},
    {id: 7, name: "Rome", description:"", pic1: rome, pic2: rome2, key: ["Salé", "Pizza", "Vin", "Musée", "Spa", "Whisky", "Lève tôt", "Danser", "Paysage", "Boeuf", "Peinture", "Fromage", "Calme", "Expression", "Potatoes", "Tropico"]},
    {id: 8, name: "Hawaï", description:"", pic1: hawai, pic2: hawai2, key: ["Sucré", "Maillot", "Farniente", "Burger", "Montagne", "Spa", "Sport", "Aller au marché", "Rhum", "Lève tôt", "Danser", "Paysage", "Forêt", "Poisson", "Nature", "Tempête", "Tropique"]},
    {id: 9, name: "Hong-Kong", description:"", pic1: hongkong, pic2: hongkong2, key: ["Thé", "Transport", "SPA", "Whisky", "Lève tôt", "Poisson", "Payer", "Oppression", "Tropico"]},
    {id: 10, name: "Le Cap", description:"", pic1: lecap, pic2: lecap2, key: ["Randonnée", "SPA", "Sport", "Aller au marché", "Rhum", "Lève tôt", "Danser", "Paysage", "Aventure", "Expression", "Potatoes", "Tropico"]},
    {id: 11, name: "Cap d'Agde", description:"", pic1: capdagde, pic2: capdagde2, key: ["Naturiste", "Spa", "Hamac", "Aller au marché", "Whisky", "Lève tard", "Danser", "Repos", "Boeuf", "Nature", "Payer", "Potatoes", "Tropico"]},
    {id: 12, name: "Reykjavik", description:"", pic1: reykjavik, pic2: reykjavik2, key: ["Frais", "Montagne", "Randonnée", "Sunset", "Sport", "Whisky", "Lève tôt", "Paysage", "Aventure", "Poisson", "Nature", "Payer", "Nuit", "Expression"]},
    {id: 13, name: "Marrakech", description:"", pic1: marrakech, pic2: marrakech2, key: ["Thé", "Farniente", "PMU", "Spa", "Hamac", "Aller au marché", "Lève tard", "Danser", "Paysage", "Boeuf", "Négocier", "Oppression", "Potatoes", "Tropico"]},
];


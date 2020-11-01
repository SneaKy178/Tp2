import { ProduitDroit } from "./produitDroit";

const faker = require('faker');
const fs = require('fs'); 

function genererFichierJSON(){

    let json = new Array();
    let proDroit;

    for (let index = 1; index <= 5 ; index++) {
        proDroit = new ProduitDroit();

    proDroit.produitId = faker.random.number()
    proDroit.droitId = faker.random.number();

    json.push(proDroit)
    }


   return { "TP2ProduitDroit" : json} ;   // tablea bd sera convertit en un fichier dans la racine s'appelle users
}

let webservice = genererFichierJSON();
fs.writeFileSync('produitDroit.json', JSON.stringify(webservice, null, '\t'));
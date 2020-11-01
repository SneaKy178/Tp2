import { Client } from "./client"

const faker = require('faker');
const fs = require('fs'); 

function genererFichierJSON(){

    let json = new Array();
    let client;

    for (let index = 1; index <= 5 ; index++) {
        client = new Client();

        client.idClient = faker.random.number();
        client.adresse = faker.address.streetAddress();

        client.prenom = faker.name.firstName();
        client.nom = faker.name.lastName();
        client.email = faker.internet.email();

        client.nomEntreprise = faker.company.companyName();
        client.phone = faker.phone.phoneNumber();

        client.idDetails = faker.random.number();
        client.rue = faker.address.streetName();

        client.idContact = faker.random.number();
       


    json.push(client)
    }


   return { "TP2Client" : json} ;   // tablea bd sera convertit en un fichier dans la racine s'appelle users
}

let webservice = genererFichierJSON();
fs.writeFileSync('client.json', JSON.stringify(webservice, null, '\t'));
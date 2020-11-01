import {Client} from "./client";
import { Details } from "./details";
import { Contact } from "./contact";


export class Entreprise extends Client {
    nomEntreprise: string;
    phone: string;
    fax: string;
    details: Details;
    contact : Contact;

    constructor() {
        super()
        this.nomEntreprise = undefined
        this.phone = undefined;
        this.fax = undefined;
        this.idClient = undefined;
        this.type = undefined;
        this.adresse = undefined;
        this.details = undefined;
        this.contact = undefined
    }
}
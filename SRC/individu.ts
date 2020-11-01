import { Client} from './client'
import { Details } from './details';

export class Individu extends Client {
    prenom: string;
    mom: string;
    email: string;
    details : Details;

    constructor() {
        super();
        this.idClient = undefined;
        this.type = undefined;
        this.adresse = undefined;
        this.prenom = undefined;
        this.email = undefined;
        this.details = undefined;

    }
}
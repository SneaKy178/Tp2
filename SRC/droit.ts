import { DroitType } from "./droitType";

export class Droit{
    idDroit: string;
    type: DroitType;
    dateDebut: Date;
    dateFin: Date;

    constructor() {
        this.idDroit = undefined;
        this.type = undefined;
        this.dateDebut = undefined;
        this.dateFin = undefined;
    }
}
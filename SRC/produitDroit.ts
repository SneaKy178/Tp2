import { Produit } from "./produit";
import { Droit } from "./droit";

export class ProduitDroit {
    produitId: number;
    droitId: number;

    constructor() {
        this.produitId = undefined;
        this.droitId = undefined;
    }
}
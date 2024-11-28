import { Produit } from "./produit.interface";

export interface Panier {
  items: Item[];
}

export interface Item {
  produit: Produit;
  quantite: number;
}

import { Produit } from "./produit";

export interface Panier {
  items: Item[];
}

export interface Item {
  produit: Produit;
  quantite: number;
}

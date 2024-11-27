export interface Panier {
  items: Item[];
  totalPrix: number;
  totalReduc: number;
  totalItems: number;
}

export interface Item {
  id: number;
  quantite: number;
}

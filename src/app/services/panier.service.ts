import {
  computed,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { Panier, Item } from '../core/interfaces/panier';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  panier: WritableSignal<Panier> = signal({
    items: [],
  });
  totalItems: Signal<number> = computed(() =>
    this.panier().items.reduce((total, item) => total + item.quantite, 0)
  );
  totalPrix: Signal<number> = computed(() =>
    this.panier().items.reduce((total, item) => {
      const prix = item.produit.price * item.quantite;
      return total + prix;
    }, 0)
  );
  totalReduc: Signal<number> = computed(() =>
    this.panier().items.reduce((total, item) => {
      const prixNormal = item.produit.price * item.quantite;
      const prixDiscount =
        (item.produit.newPrice ?? item.produit.price) * item.quantite;
      return total + (prixNormal - prixDiscount);
    }, 0)
  );

  constructor() {}

  getPanier() {
    return this.panier();
  }
  getTotalItems() {
    return this.totalItems();
  }
  getTotalPrix() {
    return this.totalPrix();
  }
  getTotalReduc() {
    return this.totalReduc();
  }

  setPanier(panier: Panier) {
    this.panier.set(panier);
  }

  addPanierItem(nouvelItem: Item) {
    this.panier.update((value) => ({
      ...value,
      items: [...value.items, nouvelItem],
    }));
  }
}

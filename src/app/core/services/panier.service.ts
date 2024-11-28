import {
  computed,
  effect,
  inject,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { Panier, Item } from '../interfaces/panier.interface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  storageService: StorageService = inject(StorageService);
  localStorageKey: string = 'panier';

  panier: WritableSignal<Panier> = signal({ items: [] });
  totalItems: Signal<number> = computed(() =>
    this.panier().items.reduce((total, item) => total + item.quantite, 0)
  );
  totalPrixSansReduc: Signal<number> = computed(() =>
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
  totalPrix: Signal<number> = computed(
    () => this.totalPrixSansReduc() - this.totalReduc()
  );

  constructor() {
    effect(() => {
      const currentPanier = this.getPanier();
      this.storageService.update(this.localStorageKey, currentPanier);
    });
  }

  async getStoredPanier() {
    let storedPanier = await this.storageService.get(this.localStorageKey);
    console.log('STORED_PANIER', storedPanier);
    this.setPanier(storedPanier);
  }

  getPanier(): Panier {
    return this.panier();
  }
  getTotalItems(): number {
    return this.totalItems();
  }
  getTotalPrix(): number {
    return this.totalPrix();
  }
  getTotalPrixSansReduc(): number {
    return this.totalPrixSansReduc();
  }
  getTotalReduc(): number {
    return this.totalReduc();
  }

  verifyItemPresence(idItem: number): boolean {
    for (let item of this.getPanier().items) {
      if (item.produit.id === idItem) {
        return true;
      }
    }
    return false;
  }

  setPanier(panier: Panier): void {
    this.panier.set(panier);
  }

  addPanierItem(nouvelItem: Item): void {
    this.panier.update((value) => ({
      ...value,
      items: [...value.items, nouvelItem],
    }));
  }
  updateQuantitePanierItem(idItem: number, nouvelleQuantite: number): void {
    this.panier.update((value) => ({
      ...value,
      items: value.items.map((item) =>
        item.produit.id === idItem
          ? { ...item, quantite: nouvelleQuantite }
          : item
      ),
    }));
  }
  removePanierItem(idItem: number): void {
    this.panier.update((value) => ({
      ...value,
      items: value.items.filter((item) => item.produit.id !== idItem),
    }));
  }

  viderPanier(): void {
    this.storageService.remove(this.localStorageKey);
  }
}

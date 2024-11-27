import { Injectable, signal, WritableSignal } from '@angular/core';
import { Panier, Item } from '../core/interface/panier';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  panier: WritableSignal<Panier> = signal({
    items: [],
    totalPrix: 0,
    totalReduc: 0,
    totalItems: 0,
  });

  constructor() {}

  getPanier(){
    return this.panier();
  }

  setPanier(panier: Panier){
    this.panier.set(panier);
  }
}

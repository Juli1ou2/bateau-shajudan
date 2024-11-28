import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { Panier } from '../interfaces/panier.interface';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;

    let storedPanier = await this.get('panier');
    console.log('STOREDPANIER', storedPanier);
  }

  public async update(key: string, value: any): Promise<void> {
    await this._storage?.remove(key);
    await this._storage?.set(key, value);
  }

  public get(key: string) {
    return this._storage?.get(key);
  }
}

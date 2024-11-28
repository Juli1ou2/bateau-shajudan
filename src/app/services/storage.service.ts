import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { Panier } from '../core/interfaces/panier';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public async update(key: string, value: any) {
    await this._storage?.remove(key);  
    await this._storage?.set(key, value);
  }

  public async get(key: string): Promise<Panier | null>  {
    return await this._storage?.get(key);
  }
}
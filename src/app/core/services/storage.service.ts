import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

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
  }

  public async update(key: string, value: any): Promise<void> {
    await this._storage?.remove(key);
    await this._storage?.set(key, value);
  }

  public get(key: string) {
    return this._storage?.get(key);
  }

  public remove(key: string) {
    this._storage?.remove(key);
  }
}

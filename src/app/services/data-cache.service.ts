import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DataCacheService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers in the src/main.ts
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public async set(key: string, value: any) {
    if (this._storage) {
      await this._storage.set(key, value);
    }
  }

  public async get(key: string): Promise<any> {
    if (this._storage) {
      return await this._storage.get(key);
    }
    return null;
  }

  public async remove(key: string) {
    if (this._storage) {
      await this._storage.remove(key);
    }
  }

  public async clear() {
    if (this._storage) {
      await this._storage.clear();
    }
  }
}
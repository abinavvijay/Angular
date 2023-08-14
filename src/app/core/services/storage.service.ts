import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage: { [id: string]: any } = {};

  constructor() {
    this.INIT();
  }

  private INIT() {


    let keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      this.storage[keys[i]] = localStorage.getItem(keys[i]);
    }


  }



  store(key: string, value: any) {
    this.storage[key] = value;
  }

  storeObjectStrong(key: string, value: any) {
    let val = JSON.stringify(value);
    localStorage.setItem(key, val);
    this.store(key, val);
  }

  storeStrong(key: string, value: any) {
    localStorage.setItem(key, value);
    this.store(key, value);
  }


  fetch(key: string): any {
    return this.storage[key] || undefined;
  }
  fetchObject(key: string): any {
    let value = this.fetch(key);
    return value ? JSON.parse(value) : undefined;
  }

  delete(key:string){

    Reflect.deleteProperty(this.storage, key);

    localStorage.removeItem(key);

  }

}

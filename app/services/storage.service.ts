import { Injectable } from '@angular/core'

@Injectable()

export class StorageService {

  get(key) {
    return JSON.parse(localStorage.getItem(key))
  }

  set(key, data) {
    return localStorage.setItem(key, JSON.stringify(data))
  }

}

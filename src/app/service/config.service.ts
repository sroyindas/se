import { Injectable } from '@angular/core';

import { configrutation } from './configrutation';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config = configrutation;
  constructor() { }
  getConfig() {
    return this.config;
  }
  getPostById(id: number) {
    return this.config[id - 1];
  }
}

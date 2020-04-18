import { Injectable } from '@angular/core';

import { configrutation } from './configrutation';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public config = configrutation;

  constructor() { }

  public getConfig() {
    return this.config;
  }
  public getPostById(id: number) {
    return this.config[id - 1];
  }
}

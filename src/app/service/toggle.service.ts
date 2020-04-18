import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  public classFlag = false;

  constructor() { }

  public menuToggle() {
    this.classFlag = !this.classFlag ;
  }
}

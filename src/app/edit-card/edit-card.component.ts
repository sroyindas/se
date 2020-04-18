import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToggleService } from '../service/toggle.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {
  @Output() sendDataToParent = new EventEmitter<any>();
  public formValueObject = {
    tileWidth: '300',
    tileHeight: '190',
    tileMargin: '10',
  };

  constructor( public toggleService: ToggleService ) { }

  public ngOnInit(): void {
    this.getSetInitialValue();
    this.sendDataToParent.emit(this.formValueObject);
  }
  public cardSubmit() {
    this.sendDataToParent.emit(this.formValueObject);
    this.formValueObject.tileWidth = this.formValueObject.tileWidth;
    this.formValueObject.tileHeight = this.formValueObject.tileHeight;
    this.formValueObject.tileMargin = this.formValueObject.tileMargin;
  }
  public updateCardValuLocalStorage() {
    if (
      this.formValueObject.tileWidth === this.formValueObject.tileWidth ||
      this.formValueObject.tileHeight === this.formValueObject.tileHeight ||
      this.formValueObject.tileMargin === this.formValueObject.tileMargin
      ) {
      localStorage.setItem('setCardValue', JSON.stringify(this.formValueObject));
    }
  }
  public getSetInitialValue() {
    if (localStorage.length === 0) {
      localStorage.setItem('setCardValue', JSON.stringify(this.formValueObject));
    } else {
      const getLocalData = JSON.parse(localStorage.getItem('setCardValue'));
      this.formValueObject.tileWidth = getLocalData.tileWidth;
      this.formValueObject.tileHeight = getLocalData.tileHeight;
      this.formValueObject.tileMargin = getLocalData.tileMargin;
    }
  }
}

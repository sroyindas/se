import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../service/toggle.service';
import { ConfigService } from '../service/config.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  public width: any;
  public height: any;
  public margin: any;
  formValueObject = {
    tileWidth: '300',
    tileHeight: '190',
    tileMargin: '10',
  };
  public posts = [];
  public openModal = false;
  public modalData: any;

  constructor(public toggleService: ToggleService, private config: ConfigService) { }

  ngOnInit(): void {
    this.posts = this.getBlog();
    this.getSetInitialValue();
  }

  public cardSubmit() {
    this.width = this.formValueObject.tileWidth;
    this.height = this.formValueObject.tileHeight;
    this.margin = this.formValueObject.tileMargin;
  }
  public updateCardValuLocalStorage() {
    if (
      this.width === this.formValueObject.tileWidth ||
      this.height === this.formValueObject.tileHeight ||
      this.margin === this.formValueObject.tileMargin
      ) {
      localStorage.setItem('localWidth', JSON.stringify(this.formValueObject));
    }
  }
  public getSetInitialValue() {
    if (localStorage.length === 0) {
      localStorage.setItem('localWidth', JSON.stringify(this.formValueObject));
      this.width = this.formValueObject.tileWidth;
      this.height = this.formValueObject.tileHeight;
      this.margin = this.formValueObject.tileMargin;
    } else {
      const abcd = JSON.parse(localStorage.getItem('localWidth'));
      this.width = abcd.tileWidth;
      this.height = abcd.tileHeight;
      this.margin = abcd.tileMargin;
      this.formValueObject.tileWidth = abcd.tileWidth;
      this.formValueObject.tileHeight = abcd.tileHeight;
      this.formValueObject.tileMargin = abcd.tileMargin;
    }
  }
  public modalToggle(post) {
    this.openModal = !this.openModal ;
    this.modalData = post;
    console.log(post);
  }
  public modalClose() {
    this.openModal = false;
  }
  public getBlog() {
    return this.config.getConfig();
  }
}

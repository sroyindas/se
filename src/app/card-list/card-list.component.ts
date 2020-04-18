import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../service/config.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  public posts = [];
  public width: any;
  public height: any;
  public margin: any;
  public sendDataToChild: any;
  public openModal = false;

  constructor( private config: ConfigService ) { }

  public ngOnInit(): void {
    this.posts = this.getBlog();
  }
  public modalToggle(data) {
    this.sendDataToChild = data;
    this.openModal = !this.openModal;
  }
  public parentModalClose(event) {
    this.openModal = event;
  }
  public getBlog() {
    return this.config.getConfig();
  }
  public getFromChild(childData) {
    this.width = childData.tileWidth;
    this.height = childData.tileHeight;
    this.margin = childData.tileMargin;
  }
}

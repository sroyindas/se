import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../service/toggle.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ConfigService } from '../service/config.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  public cardEdit: FormGroup;
  public width: any;
  public height: any;
  public margin: any;
  public localData: any;
  public posts = [];
  public openModal = false;
  public modalData: any;

  constructor(public toggleService: ToggleService, private fb: FormBuilder, private config: ConfigService) { }

  ngOnInit(): void {
    this.posts = this.getBlog();
    this.cardEdit = this.fb.group({
      tileWidth: ['', Validators.required],
      tileHeight: ['', Validators.required],
      tileMargin: ['', Validators.required],
    });
    this.cardEditSubmit();
    this.getLocalValue();
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
  public cardEditSubmit() {
    if (this.cardEdit.value.tileWidth === '') {
      this.cardEdit.value.tileWidth = 300;
    } else {
      this.width = this.cardEdit.value.tileWidth;
    }
    if (this.cardEdit.value.tileHeight === '') {
      this.cardEdit.value.tileHeight = 190;
    } else {
      this.height = this.cardEdit.value.tileHeight;
    }
    if (this.cardEdit.value.tileMargin === '') {
      this.cardEdit.value.tileMargin = 10;
    } else {
      this.margin = this.cardEdit.value.tileMargin;
    }
    // this.width = this.cardEdit.value.tileWidth;
    // this.height = this.cardEdit.value.tileHeight;
    // this.margin = this.cardEdit.value.tileMargin;
  }
  public updateCardValuLocalStorage() {
    const setLocalItem = {
      tileWidth: '300',
      tileHeight: '190',
      tileMargin: '10',
    };
    if (this.cardEdit.value.tileWidth === this.width) {
      setLocalItem.tileWidth = this.width;
    }
    if (this.cardEdit.value.tileHeight === this.height) {
      setLocalItem.tileHeight = this.height;
    }
    if (this.cardEdit.value.tileMargin === this.margin) {
      setLocalItem.tileMargin = this.margin;
    }
    localStorage.setItem('localWidth', JSON.stringify(setLocalItem));
  }
  public getLocalValue() {
    if (localStorage.length === 0) {
      const setLocalItem = {
        tileWidth: '300',
        tileHeight: '190',
        tileMargin: '10',
      }
      localStorage.setItem('localWidth', JSON.stringify(setLocalItem));
    } else {
      this.localData = JSON.parse(localStorage.getItem('localWidth'));
      this.width = this.localData.tileWidth;
      this.height = this.localData.tileHeight;
      this.margin = this.localData.tileMargin;
    }
  }
}

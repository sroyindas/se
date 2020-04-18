import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent implements OnInit {
  @Input() getDataToParent: string;
  @Output() sendModalCloseDataToParent = new EventEmitter<any>();
  public modalData: any;

  constructor() { }

  public ngOnInit(): void {
    this.modalData = this.getDataToParent;
  }
  public modalClose() {
    this.sendModalCloseDataToParent.emit();
  }
}

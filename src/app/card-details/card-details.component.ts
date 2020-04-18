import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../service/config.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  public details: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private configservice: ConfigService
  ) { }

  public ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.details = this.getPostById(id);
    console.log(this.details);
  }
  public getPostById(id: number) {
    return this.configservice.getPostById(id);
  }
  public getBack() {
    this.location.back();
  }
}

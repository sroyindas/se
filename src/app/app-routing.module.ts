import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { CardDetailsComponent } from './card-details/card-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/card-list', pathMatch: 'full' },
  { path: 'card-list', component: CardListComponent },
  { path: 'card-details/:id', component: CardDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

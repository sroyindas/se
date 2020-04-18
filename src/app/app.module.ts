import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ConfigService } from './service/config.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { EditCardComponent } from './edit-card/edit-card.component';
import { InfoModalComponent } from './info-modal/info-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardListComponent,
    CardDetailsComponent,
    EditCardComponent,
    InfoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }

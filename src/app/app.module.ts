import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './view/users/users.component';
import { CardComponent } from './view/card/card.component';
import { LocationsComponent } from './view/locations/locations.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CardComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

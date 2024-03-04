import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './view/users/users.component';
import { CarsComponent } from './view/cars/cars.component';
import { LocationsComponent } from './view/locations/locations.component';
import { CarDialogComponent } from './shared/car-dialog/car-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDialogComponent } from './shared/user-dialog/user-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CarsComponent,
    LocationsComponent,
    CarDialogComponent,
    UserDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

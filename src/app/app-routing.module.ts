import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './view/cars/cars.component';
import { UsersComponent } from './view/users/users.component';
import { LocationsComponent } from './view/locations/locations.component';

const routes: Routes = [
  {path: 'cars', component: CarsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'location', component: LocationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Car from '../models/Car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  carApiUrl = 'http://localhost:8080/cars'

  constructor(private http: HttpClient) { }

  createCars(car: Car): Observable<Car>{
    return this.http.post<Car>(this.carApiUrl, {
      brandCar: car.brandCar,
      modelCar: car.modelCar,
      colorCar: car.colorCar,
      licensePlateCar: car.licensePlateCar
    });
  }

  getCars(): Observable<Car[]>{
    return this.http.get<Car[]>(this.carApiUrl);
  }

  updateCars(car: Car): Observable<Car>{
    return this.http.put<Car>(this.carApiUrl+'/'+car.id, car);
  }

  deleteCars(id: number){
    return this.http.delete(this.carApiUrl +'/id/'+ id)
  }
}

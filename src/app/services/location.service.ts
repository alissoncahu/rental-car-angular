import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Location from '../models/Location';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locationApiUrl = 'http://localhost:8080/location'

  constructor(private http: HttpClient) { }

  createLocations(location: Location): Observable<Location>{
    return this.http.post<Location>(this.locationApiUrl, {
      locationStart: location.locationStart,
      locationEnd: location.locationEnd,
      licensePlateCar: location.licensePlateCar,
      cpfLocator: location.cpfLocator
    });
  }

  getLocations(): Observable<Location[]>{
    return this.http.get<Location[]>(this.locationApiUrl);
  }

  updateLocations(location: Location): Observable<Location>{
    return this.http.put<Location>(this.locationApiUrl+'/'+location.id, location);
  }

  deleteLocations(id: number){
    return this.http.delete(this.locationApiUrl +'/id/'+ id)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userApiUrl = 'http://localhost:8080/users'

  constructor(private http: HttpClient) { }

  createUsers(user: User): Observable<User>{
    return this.http.post<User>(this.userApiUrl, {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      cpf: user.cpf
    });
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.userApiUrl);
  }

  updateUsers(user: User): Observable<User>{
    return this.http.put<User>(this.userApiUrl+'/'+user.id, user);
  }

  deleteUsers(id: number){
    return this.http.delete(this.userApiUrl +'/id/'+ id)
  }
}

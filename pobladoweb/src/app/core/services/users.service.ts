import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: Users[];
  constructor( private http: HttpClient) { }
  URL = 'http://localhost:8080/api/users';

  getUsers(){
    return this.http.get<user>()
  }
}

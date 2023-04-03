import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/Models/User';
import { Observable } from 'rxjs';
import { environment } from 'src/Environement/environement';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  api = environment.baseUrl+'USER-MS/api/user/';
  constructor(private http : HttpClient) { }

  getUsers(): Observable <User[]>{
    return this.http.get<User[]>(this.api+'all');
  }

  addUser(user:User) {
    return this.http.post<User>(this.api,user);
  }

  deleteUser(user: User): Observable<User> {
    return this.http.delete<User>(`${this.api}${user.id}`);
  }
}

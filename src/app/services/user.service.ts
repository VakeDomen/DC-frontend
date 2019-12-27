import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl + 'users/';


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json' ,
      'Access-Control-Allow-Credentials': 'true',
    }),
    withCredentials: true
  };

  constructor(
    private http: HttpClient,
    // private toast: ToastrService,
  ) {}

  getUser(id: string): Observable<User> {
    return this.http.get<User>(this.apiUrl + id, this.httpOptions);
  }

}

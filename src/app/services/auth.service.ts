import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Invitation } from '../models/invitation';
import { environment } from 'src/environments/environment';
import { NewUser } from '../models/new-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl + 'auth/';
  



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
  ) {

  }

  loggedUser(): User {
    return JSON.parse(sessionStorage.getItem('loggedUser'));
  }

  setUser(user): void {
    sessionStorage.setItem('loggedUser', JSON.stringify(user));
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('loggedUser');
  }

  removeUser(): void {
    sessionStorage.removeItem('loggedUser');
  }

  login(credentials): Observable<User> {
    return this.http.post<User>(this.apiUrl, credentials, this.httpOptions);
  }

  logout() {
    this.removeUser();
    // this.toast.success('Logged out.', 'Success');
    return this.http.delete(this.apiUrl, this.httpOptions);
  }

  register(user: NewUser): Observable<Invitation> {
    return this.http.post<Invitation>(this.apiUrl + 'register/', user, this.httpOptions);
  }

  confirmRegistration(id, authData): Observable<User> {
    return this.http.post<User>(this.apiUrl + 'register/' + id, authData);
  }


}


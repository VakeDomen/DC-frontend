import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Group } from '../models/group';
import { Observable } from 'rxjs';
import { GroupedNotes } from '../models/grouped-notes';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  private apiUrl = environment.apiUrl + 'groups/';


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json' ,
      'Access-Control-Allow-Credentials': 'true',
    }),
    withCredentials: true
  };

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    // private toast: ToastrService,
  ) {}

  //size = 1
  getGroupWithNotes(id: string): Observable<GroupedNotes> {
    return this.http.get<GroupedNotes>(this.apiUrl + id, this.httpOptions);
  }

  getUserGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.apiUrl, this.httpOptions);
  }

  createGroup(group): Observable<Group> {
    return this.http.post<Group>(this.apiUrl, group, this.httpOptions);
  }

  joinGroup(id: string): Observable<Group> {
    const target = { id: id };
    return this.http.post<Group>(this.apiUrl + "join", target, this.httpOptions);
  }

  leaveGroup(id: string): Observable<Group> {
    const target = { id: id };
    return this.http.post<Group>(this.apiUrl + "leave", target, this.httpOptions);
  }

  deleteGroup(id: string): Observable<any> {
    return this.http.delete<any>(this.apiUrl + id, this.httpOptions);
  } 

}

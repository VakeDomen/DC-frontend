import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private apiUrl = environment.apiUrl + 'notes/';


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

  getPublicNotes(): Observable<Note[]> {
    // not implemented yet
    return this.http.get<Note[]>(this.apiUrl, this.httpOptions);
  }

  getUserNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl, this.httpOptions);
  }

  saveNew(note: Note): Observable<Note> {
    return this.http.post<Note>(this.apiUrl, note, this.httpOptions);
  }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../models/note';
import { GroupedNotes } from '../models/grouped-notes';

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

  getUserGroupNotes(): Observable<GroupedNotes[]> {
    return this.http.get<GroupedNotes[]>(this.apiUrl + "groups", this.httpOptions);
  }

  getPublicNotes(): Observable<Note[]> {
    // not implemented yet
    return this.http.get<Note[]>(this.apiUrl + "public", this.httpOptions);
  }

  getUserNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl, this.httpOptions);
  }

  saveNew(note: Note): Observable<Note> {
    return this.http.post<Note>(this.apiUrl, note, this.httpOptions);
  }

  //notes helper functions

  sortByDate(notes: Note[]): Note[] {
    return notes.sort((a: Note, b: Note) => {
      return this.getTime(new Date(b.date_tag)) - this.getTime(new Date(a.date_tag));
    });
  }

  private getTime(date?: Date) {
    return date != null ? date.getTime() : 0;
  }
}

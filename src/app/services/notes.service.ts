import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../models/note';
import { GroupedNotes } from '../models/grouped-notes';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';

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

  getNote(id: string): Observable<Note> {
    return this.http.get<Note>(this.apiUrl + id, this.httpOptions);
  }

  getUserGroupNotes(): Observable<GroupedNotes[]> {
    return this.http.get<GroupedNotes[]>(this.apiUrl + "groups", this.httpOptions);
  }

  getPublicNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl + "public", this.httpOptions);
  }

  getUserNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl, this.httpOptions);
  }

  patchNote(id: string, note: Note): Observable<Note> {
    return this.http.patch<Note>(this.apiUrl + id, note, this.httpOptions);
  }

  saveNew(note: Note): Observable<Note> {
    return this.http.post<Note>(this.apiUrl, note, this.httpOptions);
  }

  deleteNote(id: string): Observable<Note> {
    return this.http.delete<Note>(this.apiUrl + id, this.httpOptions);
  }

  //notes helper functions

  sortByDate(notes: Note[]): Note[] {
    let {haveDate, dontHaveDate} = this.splitByDate(notes);
    haveDate = haveDate.sort((a: Note, b: Note) => {
      return this.getTime(new Date(a.date_tag)) - this.getTime(new Date(b.date_tag));
    });
    return haveDate.concat(dontHaveDate);
  }

  private splitByDate(notes: Note[]): {haveDate: Note[], dontHaveDate: Note[]} {
    let haveDate: Note[] = [];
    let dontHaveDate: Note[] = [];
    for (const note of notes) {
      if (!!note.date_tag) {
        haveDate.push(note);
      } else {
        dontHaveDate.push(note);
      }
    }
    return {
      haveDate: haveDate,
      dontHaveDate: dontHaveDate,
    }
  }

  private getTime(date?: Date): number {
    return date != null ? date.getTime() : 0;
  }
}

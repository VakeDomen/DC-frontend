import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { Note } from '../models/note';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  tab: string = 'upcoming';
  notes: Note[];
  newNote: Note;

  constructor(
    private noteService: NotesService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.newNote = new Note();
    this.newNote.user_id = this.auth.loggedUser().id;
    this.noteService.getList().subscribe((notes: Note[]) => {
      this.notes = notes;
      console.log(notes);
    }, error => {
      console.log(error);
    })
    console.log(this.tab);

  }

  tabSwap(tab) {
    this.tab = tab;
  }

  submit() {
    delete this.newNote.user_id;
    this.noteService.saveNew(this.newNote).subscribe((note: Note) => {
      console.log('note', note);

    }, err => {
      console.log('error', err);
    })
    console.log(this.newNote);

  }

  updateDate(date) {
    this.newNote.date_tag = this.parseNaiveDateTime(date);
  }

  parseNaiveDateTime(date: Date) {
    return date.getFullYear() +
    '-' + ('0' + (date.getMonth() + 1)).slice(-2) +
    '-' + ('0' + date.getDate()).slice(-2) +
    ' ' + ('0' + date.getHours()).slice(-2) +
    ':' + ('0' + date.getMinutes()).slice(-2) +
    ':' + ('0' + date.getSeconds()).slice(-2);
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  note: Note;
  @Output() createdNote = new EventEmitter<Note>();

  constructor(
    private noteService: NotesService,
  ) { }

  ngOnInit() {
    this.note = new Note();
  }


  submit() {
    delete this.note.user_id;
    this.noteService.saveNew(this.note).subscribe((note: Note) => {
      console.log('note', note);
      this.createdNote.emit(note);
    }, err => {
      console.log('error', err);
    })
    console.log(this.note);

  }

  updateDate(date) {
    this.note.date_tag = this.parseNaiveDateTime(date);
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

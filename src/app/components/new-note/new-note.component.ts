import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NotesService } from 'src/app/services/notes.service';
import { Group } from 'src/app/models/group';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  note: Note;
  public: boolean = false;
  pinned: boolean = false;
  @Input() group: Group = null;
  @Output() createdNote = new EventEmitter<Note>();

  constructor(
    private noteService: NotesService,
  ) { }

  ngOnInit() {
    this.note = new Note();
  }


  submit() {
    if (this.group) {
      this.note.group_id = this.group.id;
    }
    this.note.preprareForUpload(this.public, this.pinned);
    console.log(this.note);
    this.noteService.saveNew(this.note).subscribe((note: Note) => {
      this.createdNote.emit(note);
    }, err => {
      console.log('error', err);
    })
    

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

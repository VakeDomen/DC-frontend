import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NotesService } from 'src/app/services/notes.service';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  @Input() note: Note;
  @Output() editedNote = new EventEmitter<Note>();

  due_date: boolean;
  
  constructor(
    private noteService: NotesService,
    public lang: LangService,
  ) { }

  ngOnInit() {
      this.due_date = !!this.note.date_tag
  }

  submit(): void {
    const id = this.note.id;
    this.note = this.prepareForPatch(this.note);
    this.noteService.patchNote(id, this.note).subscribe((note: Note) => {
      this.note = note;
      this.editedNote.emit(note);
    })
  }

  prepareForPatch(note: Note): Note {
    delete note.id;
    for (let key in note) {
      if (note[key] === null || typeof note[key] === 'undefined') {
        delete note[key];
      } else if(typeof note[key] === 'boolean') {
        if (note[key]) {
          note[key] = 1;
        } else {
          note[key] = 0;
        }
      }
    }
    
    return note;
  }

  updateDate(date: Date): void {
    this.note.date_tag = this.parseNaiveDateTime(date);
  }

  parseNaiveDateTime(date: Date): string {
    return date.getFullYear() +
    '-' + ('0' + (date.getMonth() + 1)).slice(-2) +
    '-' + ('0' + date.getDate()).slice(-2) +
    ' ' + ('0' + date.getHours()).slice(-2) +
    ':' + ('0' + date.getMinutes()).slice(-2) +
    ':' + ('0' + date.getSeconds()).slice(-2);
  }

}

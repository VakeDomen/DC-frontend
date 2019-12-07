import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../models/note';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  @Input() notes: Note[];
  @Input() ableToAddNew: boolean = false;
  newNote: Note;

  constructor(
    private noteService: NotesService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.newNote = new Note();
    if (this.auth.isLoggedIn()) {
      this.newNote.user_id = this.auth.loggedUser().id;
    }
  }
}

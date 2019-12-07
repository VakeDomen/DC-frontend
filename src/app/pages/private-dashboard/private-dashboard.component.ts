import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-private-dashboard',
  templateUrl: './private-dashboard.component.html',
  styleUrls: ['./private-dashboard.component.scss']
})
export class PrivateDashboardComponent implements OnInit {

  notes: Note[];

  constructor(
    private noteService: NotesService,
  ) { }

  ngOnInit() {
    this.noteService.getUserNotes().subscribe((notes: Note[]) => {
      this.notes = notes;
    }, error => {
      console.log(error);
    })
  }


}

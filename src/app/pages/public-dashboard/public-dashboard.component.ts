import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-public-dashboard',
  templateUrl: './public-dashboard.component.html',
  styleUrls: ['./public-dashboard.component.scss']
})
export class PublicDashboardComponent implements OnInit {
 
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

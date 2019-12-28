import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NotesService } from 'src/app/services/notes.service';
import { ToastrService } from 'ngx-toastr';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-public-dashboard',
  templateUrl: './public-dashboard.component.html',
  styleUrls: ['./public-dashboard.component.scss']
})
export class PublicDashboardComponent implements OnInit {
 
  notes: Note[];

  constructor(
    private noteService: NotesService,
    private lang: LangService,
    private toast: ToastrService,
  ) { }

  ngOnInit() {
    this.noteService.getPublicNotes().subscribe((notes: Note[]) => {
      this.notes = notes;
    }, error => {
      this.toast.error(this.lang.getText("Error"), this.lang.getText("500"));
    })
  }

}

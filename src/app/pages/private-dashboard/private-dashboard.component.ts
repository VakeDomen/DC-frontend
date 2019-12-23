import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { Note } from 'src/app/models/note';
import { GroupsService } from 'src/app/services/groups.service';
import { Group } from 'src/app/models/group';

@Component({
  selector: 'app-private-dashboard',
  templateUrl: './private-dashboard.component.html',
  styleUrls: ['./private-dashboard.component.scss']
})
export class PrivateDashboardComponent implements OnInit {

  notes: Note[];
  groups: Group[];

  constructor(
    private noteService: NotesService,
    private groupsService: GroupsService,
  ) { }

  ngOnInit() {
    this.groupsService.getUserGroups().subscribe((groups: Group[]) => {
      this.groups = groups;
    })
    this.noteService.getUserNotes().subscribe((notes: Note[]) => {
      this.notes = notes;
    }, error => {
      console.log(error);
    })
  }


}

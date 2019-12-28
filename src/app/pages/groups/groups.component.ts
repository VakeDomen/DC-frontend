import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group';
import { GroupsService } from 'src/app/services/groups.service';
import { GroupedNotes } from 'src/app/models/grouped-notes';
import { Note } from 'src/app/models/note';
import { NotesService } from 'src/app/services/notes.service';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  modalOpen: boolean = false;
  groupedNotes: GroupedNotes[];
  groups: Group[];

  constructor(
    private groupService: GroupsService,
    private notesService: NotesService,
    public lang: LangService,
  ) { }

  ngOnInit() {
    this.groupService.getUserGroups().subscribe((groups: Group[]) => {
      this.groups = groups;
    })
    this.notesService.getUserGroupNotes().subscribe((groupedNotes: GroupedNotes[]) => {
      this.groupedNotes = groupedNotes;
      console.log(groupedNotes);
    });
  }

  getPinnedNotes(): Note[] {
    const out: Note[] = [];
    this.groupedNotes.map((group: GroupedNotes) => {
      if (group.notes) {
        group.notes.map((note: Note) => {
          if(note.pinned === 1) {
            out.push(note);
          }
        })
      }
    });
    return this.notesService.sortByDate(out);
  }

  newGroup(group: Group): void {
    console.log("heeyyyy");
    console.log(group);
    //this.groups.push(group);
    this.groupService.joinGroup(group.id).subscribe((group: Group) => {
      this.groups.push(group);
      this.modalOpen = false;
    }, err => {
      console.log("error joining group: ", err)
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group';
import { GroupsService } from 'src/app/services/groups.service';
import { GroupedNotes } from 'src/app/models/grouped-notes';
import { Note } from 'src/app/models/note';
import { NotesService } from 'src/app/services/notes.service';
import { LangService } from 'src/app/services/lang.service';
import { ToastrService } from 'ngx-toastr';

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
    private toast: ToastrService,
  ) { }

  ngOnInit() {
    this.groupService.getUserGroups().subscribe((groups: Group[]) => {
      this.groups = groups;
    }, err => {
      this.toast.error(this.lang.getText("Error"), this.lang.getText("500"));
    })
    this.notesService.getUserGroupNotes().subscribe((groupedNotes: GroupedNotes[]) => {
      this.groupedNotes = groupedNotes;
    }, err => {
      this.toast.error(this.lang.getText("Error"), this.lang.getText("500"));
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
    this.groupService.joinGroup(group.id).subscribe((group: Group) => {
      this.groups.push(group);
      this.toast.success(this.lang.getText("Success"), this.lang.getText("group join success"));
      this.modalOpen = false;
    }, err => {
      this.toast.error(this.lang.getText("Error"), this.lang.getText("group join error"));
    })
  }
}

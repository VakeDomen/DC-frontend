import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { Group } from 'src/app/models/group';
import { GroupsService } from 'src/app/services/groups.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupedNotes } from 'src/app/models/grouped-notes';
import { AuthService } from 'src/app/services/auth.service';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  group: Group;
  notes: Note[]; 
  leaveModal: boolean = false;

  constructor(
    private groupService: GroupsService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    public lang: LangService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.groupService.getGroupWithNotes(id).subscribe((groupedNotes: GroupedNotes) => {
      this.group = groupedNotes.group;
      this.notes = groupedNotes.notes;
    })
  }

  numOfAllNotes(): number {
    return this.notes.length;
  }

  numOfPinnedNotes(): number {
    let counter = 0;
    for (const note of this.notes) {
      if (note.pinned === 1) {
        counter++;
      }
    } 
    return counter;
  }

  isMember(): boolean {
    return true;
  }

  numOfMembers(): number {
    return 1;
  }

  copyToClipboard(item): void {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

  leaveGroup(): void {
    this.groupService.leaveGroup(this.group.id).subscribe((group: Group) => {
      //toast
      this.router.navigate(["/groups"]);
    })
  }

  deleteGroup(): void {
    this.groupService.deleteGroup(this.group.id).subscribe((group: Group) => {
      this.router.navigate(["/groups"])
    })
  }

  isGroupOwner(): boolean {
    return this.authService.loggedUser().id === this.group.created_by;
  }

  newNote(note: Note): void {
    this.notes.push(note);
  }
}

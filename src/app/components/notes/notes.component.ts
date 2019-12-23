import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../models/note';
import { AuthService } from '../../services/auth.service';
import { Group } from 'src/app/models/group';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnChanges {
  

  @Input() notes: Note[];
  @Input() pinned: boolean = true;
  @Input() ableToAddNew: boolean = false;
  @Input() groupColors: boolean = false;
  @Input() groups: Group[];
  @Input() group: Group = null;
  modalOpen: boolean = false;


  constructor(
    private noteService: NotesService,
    private auth: AuthService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.notes) {
      if (this.pinned) {
        this.sortWithPinnedNotes();
      } else {
        this.notes = this.noteService.sortByDate(this.notes);
      }
    }
  }

  getNoteColor(note: Note): string {
    if (this.groups) {
      for (const group of this.groups) {
        if (note.group_id === group.id) {
          return group.color;
        }
      }
    }
    
    if (this.group) {
      return this.group.color;
    }
    return "#00d1b2";
  }

  sortWithPinnedNotes(): void {
    let {pinnedNotes, otherNotes} = this.splitByPinned(this.notes);
    pinnedNotes = this.noteService.sortByDate(pinnedNotes),
    otherNotes = this.noteService.sortByDate(otherNotes);
    this.notes = pinnedNotes.concat(otherNotes);
  }

  splitByPinned(notes: Note[]): {pinnedNotes: Note[], otherNotes: Note[]} {
    const pinnedNotes: Note[] = [];
    const otherNotes: Note[] = [];
    for(const note of notes) {
      if (note.pinned === 1) {
        pinnedNotes.push(note);
      } else {
        otherNotes.push(note);
      }
    }
    return {
      pinnedNotes,
      otherNotes
    }
  }

  newNote(note: Note): void {
    console.log("new note: ", note);
    this.notes.push(note);
    this.modalOpen = false;
  }
}

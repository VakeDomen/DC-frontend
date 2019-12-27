import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
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
  @Input() paginationPageSize: number = 10;
  modalOpen: boolean = false;
  pagination: boolean = false;
  page: number = 1;
  finalPage: number = 1;
  

  @Output() createdNote = new EventEmitter<Note>();


  constructor(
    private noteService: NotesService,
    private auth: AuthService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.notes) {
      this.setUpPagination();
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
    this.modalOpen = false;
    this.createdNote.emit(note);
  }

  notesPage(): Note[] {
    if(this.notes && this.notes.length > 0) {
      let startIndex = (this.page - 1) * this.paginationPageSize;
      let endIndex = (this.page) * this.paginationPageSize;
      if (endIndex > this.notes.length) {
        endIndex = this.notes.length;
      }
      
      let out: Note[] = [];
      for (let i = startIndex ; i < endIndex ; i++) {
        out.push(this.notes[i]);
      }
      return out;
    }
    
  }

  setUpPagination(): void {
    this.pagination = this.notes.length > this.paginationPageSize;
    if (!this.pagination || !this.page) {
      this.page = 1;
    }
    this.finalPage = Math.ceil(this.notes.length / this.paginationPageSize);
  }
  existsPreviousPage(): boolean {
    return this.page > 1;
  }
  existsNextPage(): boolean {
    return this.page < this.finalPage;
  }
  previousPage(): void {
    this.page--;
  }
  nextPage(): void {
    this.page++;
  }
  getCurrentPage(): number {
    return this.page;
  }
  getLastPage(): number {
    return this.finalPage;
  }
  setPage(page: number): void {
    console.log(page)
    if (page > 0 && page < this.finalPage + 1) {
      this.page = page;
    }
  }
  constuctPageIndexes(): number[] {
    let out: number[] = [];
    for(let i = 0 ; i < this.getLastPage() ; i++) {
      out.push(i + 1);
    }
    console.log(out);
    return out;
  }
}

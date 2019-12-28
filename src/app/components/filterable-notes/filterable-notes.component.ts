import { Component, OnChanges, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/models/note';
import { Group } from 'src/app/models/group';
import { PatriciaTree } from 'src/app/models/particiaTree';

@Component({
  selector: 'app-filterable-notes',
  templateUrl: './filterable-notes.component.html',
  styleUrls: ['./filterable-notes.component.scss']
})
export class FilterableNotesComponent implements OnChanges {

  @Input() notes: Note[];
  @Input() pinned: boolean = true;
  @Input() ableToAddNew: boolean = false;
  @Input() groupColors: boolean = false;
  @Input() groups: Group[];
  @Input() group: Group = null;

  @Output() createdNote = new EventEmitter<Note>();

  noteFilterTree: PatriciaTree;

  textFilter: string;
  pastFilter: boolean = true;
  noDateFilter: boolean = true;
  futureFilter: boolean = true;
  

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.noteFilterTree = new PatriciaTree();
    if (this.notes && this.notes.length !== 0) {
      for (const note of this.notes) {
        this.noteFilterTree.insertWord(note.title, note);
      }
    }
  }

  filter(notes: Note[]): Note[] {
    let filteredNotes: Note[] = notes;
    if (!!this.textFilter) {
      if (this.textFilter.length > 0) {
        filteredNotes = this.noteFilterTree.collect(this.textFilter);  
      }
    }
    filteredNotes = this.filterByDate(filteredNotes);
    return filteredNotes;
  }

  filterByDate(notes: Note[]): Note[] {
    if(!notes || notes.length === 0) {
      return notes;
    }
    
    const out: Note[] = [];
    const now = new Date();
    for (const note of notes) {
      if (!note.date_tag && this.noDateFilter) {
          out.push(note);
      } else {
        if (new Date(note.date_tag).getTime() > now.getTime() && this.futureFilter) {
          out.push(note);
        } 
        if (new Date(note.date_tag).getTime() <= now.getTime() && this.pastFilter) {
          out.push(note);
        } 
      }
    }
    return out;
  }


  newNote(note: Note): void {
    this.createdNote.emit(note);
  }
}

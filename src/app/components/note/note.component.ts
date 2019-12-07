import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() note: Note;
  @Input() displayBodyLength: number = 300;

  constructor() { }

  ngOnInit() {
  }


  shorten(body: string): string {
    return body.slice(0, this.displayBodyLength) + '...';
  }
}
